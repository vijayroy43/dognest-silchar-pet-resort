$port = 3000
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
try {
    $listener.Start()
    Write-Host "Socket HTTP server started successfully at http://localhost:$port/"
} catch {
    Write-Host "Error starting socket server: $_"
    exit 1
}

while ($listener.Server.IsBound) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        
        # Read request header
        $buffer = New-Object byte[] 4096
        $read = $stream.Read($buffer, 0, $buffer.Length)
        if ($read -gt 0) {
            $reqText = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $read)
            
            # Parse path
            if ($reqText -match "GET ([^ ]+) HTTP") {
                $url = $Matches[1]
                if ($url -eq "/") { $url = "/index.html" }
                
                # Prevent path traversal & URL-decode path to support spaces/special characters
                $urlClean = [System.Uri]::UnescapeDataString($url.split('?')[0]).Replace("..", "")
                $filePath = Join-Path "C:\Users\Windows 11\.gemini\antigravity\scratch\dognest-pet-resort" $urlClean.Replace("/", "\")
                
                if (Test-Path $filePath -PathType Leaf) {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $contentType = "application/octet-stream"
                    if ($ext -eq ".html" -or $ext -eq ".htm") { $contentType = "text/html; charset=utf-8" }
                    elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
                    elseif ($ext -eq ".js") { $contentType = "text/javascript; charset=utf-8" }
                    elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
                    elseif ($ext -eq ".png") { $contentType = "image/png" }
                    elseif ($ext -eq ".webp") { $contentType = "image/webp" }
                    elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
                    elseif ($ext -eq ".mp4") { $contentType = "video/mp4" }
                    
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $body = "404 Not Found"
                    $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
                    $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($bodyBytes.Length)`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bodyBytes, 0, $bodyBytes.Length)
                }
            }
        }
        $stream.Close()
        $client.Close()
    } catch {
        # Ignore client disconnect errors to keep server running
    }
}
