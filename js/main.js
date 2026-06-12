// ═══════════════════════════════════════════════════
//  DogNest Silchar Pet Resort — Main JavaScript
//  All logic: reviews, gallery, FAQ, forms, animations
// ═══════════════════════════════════════════════════

// ─── DEFAULT REVIEWS ───────────────────────────────
const DEFAULT_REVIEWS = [
    { id: 1, name: "Priya Sharma (Silchar)", pet: "Bruno (Golden Retriever)", service: "Boarding", rating: 5, text: "Absolutely wonderful experience! Bruno was so happy when we picked him up. The staff treated him like family. The facility is clean, spacious, and well-maintained. Highly recommend for any pet parent!", date: "2026-05-15", avatar: "🐕" },
    { id: 2, name: "Rahul Deb (Dudhpatil)", pet: "Cookie (Labrador)", service: "Swimming", rating: 5, text: "Cookie had the time of her life in the pool! The trainers were patient and professional. She went from being water-shy to swimming confidently. Very clean water and top-notch safety. Amazing service!", date: "2026-05-12", avatar: "🐕‍🦺" },
    { id: 3, name: "Ananya Das (Karimganj)", pet: "Max (German Shepherd)", service: "Training", rating: 4, text: "Max completed the obedience training program and the transformation is incredible. He follows commands, walks properly on leash, and is much calmer. The positive reinforcement methods work wonders.", date: "2026-05-04", avatar: "🦮" },
    { id: 4, name: "Vikram Singh (Silchar)", pet: "Bella (Shih Tzu)", service: "Grooming", rating: 5, text: "Bella looks absolutely adorable after her grooming session! The groomers were gentle and patient with her. Full spa treatment — bath, haircut, nail trim, and ear cleaning. She smells amazing!", date: "2026-04-18", avatar: "🐩" },
    { id: 5, name: "Meera Gogoi (Hailakandi)", pet: "Rocky (Rottweiler)", service: "Boarding", rating: 5, text: "We were nervous leaving Rocky for the first time but the team at DOGNEST put our minds at ease with daily photo/video updates. Rocky was clearly having a blast. Spacious and clean rooms. Best resort!", date: "2026-04-20", avatar: "🐕" },
    { id: 6, name: "Sanjay Choudhury (Karimganj)", pet: "Simba (Indie)", service: "Training", rating: 5, text: "Simba was a rescue and had serious behavioral issues. After the advanced program here, he's calm, patient, and obedient. The trainers truly understand canine behavior. Couldn't be happier with the results.", date: "2026-04-10", avatar: "🐶" },
    { id: 7, name: "Nisha Barua (Tarapur, Silchar)", pet: "Coco (Pomeranian)", service: "Grooming", rating: 4, text: "Coco always gets anxious at groomers but the team here made her feel comfortable. The grooming was excellent — she looks like a show dog now! Professional and friendly staff.", date: "2026-03-24", avatar: "🐕" },
    { id: 8, name: "Arjun Nath (Malidor)", pet: "Duke (Husky)", service: "Swimming", rating: 5, text: "Duke absolutely loves the pool sessions! Perfect exercise to keep him active and cool, especially during the hot humid months. The supervision is superb, and the staff really knows how to handle large breeds.", date: "2026-03-20", avatar: "🐺" },
    { id: 9, name: "Kavita Roy (Hailakandi)", pet: "Buddy (Beagle)", service: "Boarding", rating: 4, text: "Good boarding facility with caring staff. Buddy seemed comfortable and well-fed. The CCTV monitoring and daily updates on WhatsApp gave us peace of mind. Overall a great experience.", date: "2026-03-15", avatar: "🐶" },
    { id: 10, name: "Deepak Laskar (Dudhpatil)", pet: "Leo (Doberman)", service: "Training", rating: 5, text: "Professional training at its finest. Leo completed basic obedience and behavioral training. The trainers are knowledgeable, patient, and genuinely care. Highly recommended in Barak Valley!", date: "2026-03-01", avatar: "🦮" },
    { id: 11, name: "Monalisa Nath (Karimganj)", pet: "Toby (Pug)", service: "Boarding", rating: 5, text: "Left Toby here for 5 days. He was pampered so well! The staff shared regular updates. The cage-free play area is amazing.", date: "2026-05-28", avatar: "🐕" },
    { id: 12, name: "Arindam Dutta (Hailakandi)", pet: "Zoey (Labrador)", service: "Swimming", rating: 5, text: "Excellent pool facility. Zoey has joint issues and hydrotherapy sessions here have helped her recovery. Very friendly staff.", date: "2026-05-26", avatar: "🐕" },
    { id: 13, name: "Rumana Laskar (Dudhpatil)", pet: "Shera (Indie)", service: "Training", rating: 5, text: "Shera was very aggressive towards strangers. Trainer Vijay handled him perfectly. He is much more sociable now.", date: "2026-05-22", avatar: "🐕" },
    { id: 14, name: "Biswajit Paul (Karimganj)", pet: "Leo (Golden Retriever)", service: "Grooming", rating: 5, text: "Superb grooming service. The de-shedding treatment worked wonders. Very clean facility and professional groomers.", date: "2026-05-20", avatar: "🐩" },
    { id: 15, name: "Suhana Barbhuiya (Hailakandi)", pet: "Koko (Cocker Spaniel)", service: "Boarding", rating: 5, text: "Clean rooms, nutritious food, and plenty of playtime. Koko was extremely happy and active when he returned.", date: "2026-05-18", avatar: "🐶" },
    { id: 16, name: "Subodh Das (Patharkandi)", pet: "Milo (Beagle)", service: "Training", rating: 4, text: "Milo was notorious for chewing furniture. The behavioral training sessions really helped set boundaries. Good results.", date: "2026-05-14", avatar: "🐕" },
    { id: 17, name: "Diptanu Roy (Malidor)", pet: "Rocky (Boxer)", service: "Swimming", rating: 5, text: "Best place for dogs to beat the summer heat. Rocky loved playing in the water with other dogs. Highly recommended!", date: "2026-05-11", avatar: "🐕‍🦺" },
    { id: 18, name: "Anirban Bhattacharjee (Rangirkhari, Silchar)", pet: "Oreo (Shih Tzu)", service: "Grooming", rating: 5, text: "Oreo got a premium summer cut and bath. The styling was perfect and they were very gentle with his sensitive skin.", date: "2026-05-09", avatar: "🐩" },
    { id: 19, name: "Pallabi Dey (Tarapur, Silchar)", pet: "Sweety (Pomeranian)", service: "Boarding", rating: 4, text: "Very secure and hygienic boarding. Sweety is a picky eater but the staff took special care of her diet. Great updates.", date: "2026-05-07", avatar: "🐕" },
    { id: 20, name: "Rajesh Nunia (Sonai)", pet: "Sheru (Gaddi Dog)", service: "Training", rating: 5, text: "Vijay's understanding of canine behavior is outstanding. Basic obedience training was successful. Excellent service.", date: "2026-05-05", avatar: "🦮" },
    { id: 21, name: "Debjani Singha (Meherpur, Silchar)", pet: "Lucy (Labrador)", service: "Swimming", rating: 5, text: "Lucy is obsessed with water. Supervised pool sessions here are safe and highly entertaining for the dogs. 5 stars!", date: "2026-05-02", avatar: "🐕" },
    { id: 22, name: "Kishore Debnath (Udharbond)", pet: "Buzzo (French Bulldog)", service: "Grooming", rating: 4, text: "Quality grooming session. The ear cleaning and nail trimming were done with great care. Very professional crew.", date: "2026-04-29", avatar: "🐩" },
    { id: 23, name: "Javed Laskar (Dudhpatil)", pet: "Simba (German Shepherd)", service: "Boarding", rating: 5, text: "DOGNEST is like a second home for Simba. Whenever we travel out of station, we leave him here without any worries.", date: "2026-04-26", avatar: "🐕" },
    { id: 24, name: "Tanmay Das (Hailakandi)", pet: "Pluto (Indie)", service: "Training", rating: 5, text: "We joined the basic puppy class. Pluto learned socialization, commands, and manners. The trainer was very supportive.", date: "2026-04-22", avatar: "🐶" },
    { id: 25, name: "Shubhra Dey (Karimganj)", pet: "Mia (Shih Tzu)", service: "Grooming", rating: 5, text: "Mia looks like a fluffy cloud after her spa session. They used high quality shampoo. Best pet groomer in Cachar district.", date: "2026-04-17", avatar: "🐩" },
    { id: 26, name: "Manish Choudhury (Silchar)", pet: "Rambo (Rottweiler)", service: "Boarding", rating: 5, text: "Excellent security and clean boarding. Rambo is large and energetic, but the staff managed him very professionally.", date: "2026-04-14", avatar: "🐕" },
    { id: 27, name: "Sharmila Roy (Malidor)", pet: "Bruno (Labrador)", service: "Swimming", rating: 5, text: "Bruno enjoyed the pool session. Great clean water and professional life jackets. The staff is extremely caring.", date: "2026-04-12", avatar: "🐕‍🦺" },
    { id: 28, name: "Subrata Paul (Patharkandi)", pet: "Shadow (Husky)", service: "Training", rating: 4, text: "Shadow is very stubborn, but the trainer's patience worked wonders. He now listens and responds to commands.", date: "2026-04-08", avatar: "🦮" },
    { id: 29, name: "Vikramaditya Deb (Dudhpatil)", pet: "Gigi (Chihuahua)", service: "Boarding", rating: 5, text: "Very friendly environment. Gigi is tiny and nervous around big dogs, but they kept her in a safe separate cozy area.", date: "2026-04-05", avatar: "🐕" },
    { id: 30, name: "Anupam Nath (Silchar)", pet: "Zorro (German Shepherd)", service: "Grooming", rating: 5, text: "Professional grooming. Groomers spent 2 hours detangling and washing Zorro's thick coat. He looks spectacular.", date: "2026-04-02", avatar: "🐩" },
    { id: 31, name: "Farhana Yasmin (Karimganj)", pet: "Daisy (Labrador)", service: "Boarding", rating: 5, text: "Outstanding service. The daily video updates on WhatsApp made our holiday stress-free. Daisy had a great time.", date: "2026-03-28", avatar: "🐕" },
    { id: 32, name: "Nabanita Das (Hailakandi)", pet: "Ginger (Golden Retriever)", service: "Swimming", rating: 5, text: "Swimming pool is a great feature. Very rare in Assam. Ginger is a water dog and she had a fantastic swim.", date: "2026-03-26", avatar: "🐕" },
    { id: 33, name: "Sneha Bhattacharya (Silchar)", pet: "Kalu (Indie)", service: "Training", rating: 5, text: "Highly satisfied. Basic leash manners and recall training were highly effective. Vijay is an excellent dog whisperer.", date: "2026-03-22", avatar: "🐶" },
    { id: 34, name: "Rohan Laskar (Rangirkhari, Silchar)", pet: "Chester (Beagle)", service: "Grooming", rating: 4, text: "Friendly staff and high-quality styling. Chester smells like lavender now. Very clean pet grooming room.", date: "2026-03-18", avatar: "🐩" },
    { id: 35, name: "Subir Roy (Malidor)", pet: "Casper (Spitz)", service: "Boarding", rating: 5, text: "Casper is a senior dog who needs medications. The staff administered his medicines on time and kept him comfortable.", date: "2026-03-14", avatar: "🐕" },
    { id: 36, name: "Mithun Deb (Dudhpatil)", pet: "Roxy (German Shepherd)", service: "Training", rating: 5, text: "Excellent dog training center. Roxy learned basic control, heel, and sit commands perfectly. Highly cooperative staff.", date: "2026-03-10", avatar: "🦮" },
    { id: 37, name: "Sujata Chakraborty (Hailakandi)", pet: "Jimmy (Pomeranian)", service: "Grooming", rating: 5, text: "Jimmy had a lovely bath and blow dry session. His coat looks silky and clean. Very reasonable pricing too.", date: "2026-03-08", avatar: "🐩" },
    { id: 38, name: "Bikramjit Paul (Karimganj)", pet: "Simba (Golden Retriever)", service: "Swimming", rating: 5, text: "Pool is clean and safe. The trainers handle dogs with love. Simba is excited to return every week.", date: "2026-03-05", avatar: "🐕" },
    { id: 39, name: "Imran Hussain (Silchar)", pet: "Sheru (Indie)", service: "Boarding", rating: 5, text: "DOGNEST is safe and clean. They have a big open field for play. Sheru returned happy and active. Excellent place.", date: "2026-03-02", avatar: "🐕" },
    { id: 40, name: "Prasenjit Dey (Tarapur, Silchar)", pet: "Mimi (Shih Tzu)", service: "Grooming", rating: 5, text: "Excellent teddy bear cut for my Shih Tzu. The groomer was very skilled and handled Mimi with absolute gentleness.", date: "2026-02-28", avatar: "🐩" },
    { id: 41, name: "Nilanjana Dutta (Meherpur, Silchar)", pet: "Max (Rottweiler)", service: "Training", rating: 4, text: "Behavioral correction program was beneficial. Max is much more obedient and less reactive to doorbells now.", date: "2026-02-25", avatar: "🦮" },
    { id: 42, name: "Sourav Nath (Karimganj)", pet: "Scooby (Labrador)", service: "Boarding", rating: 5, text: "Very friendly boarding facility. Scooby made many new dog friends. The staff really treats dogs with a lot of love.", date: "2026-02-22", avatar: "🐕" },
    { id: 43, name: "Kabir Ahmed (Hailakandi)", pet: "Sultan (Great Dane)", service: "Swimming", rating: 5, text: "Sultan had an amazing swim session. The pool size is good and the staff was very careful while handling a giant breed.", date: "2026-02-18", avatar: "🐕" }
];

// ─── STATE ─────────────────────────────────────────
let allReviews  = [];
let curFilter   = 'All';
let curSort     = 'newest';
let lbIndex     = 0;
let displayedCount = 6;

// ─── INIT ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    loadReviews();
    renderReviews();
    renderReviewStats();
    initScrollReveal();
    initHeader();
    initMobileMenu();
    initFAQ();
    initStarSelector();
    initGallery();
    initSmoothScroll();
    initCounters();
    initReviewForm();
    initBookingForm();
    initPreloader();
    initParallax();
    initBackToTop();
    initFloatingWA();
    initCookieBanner();
    initNewsletterForm();
    initBoardingCalculator();
    addLazyLoading();
    initLoadMore();
});

// ─── REVIEWS CRUD ───────────────────────────────────
function loadReviews() {
    try {
        const stored = localStorage.getItem('dognest_reviews_v3');
        allReviews = stored ? JSON.parse(stored) : [...DEFAULT_REVIEWS];
    } catch { allReviews = [...DEFAULT_REVIEWS]; }
    if (!allReviews.length) { allReviews = [...DEFAULT_REVIEWS]; saveReviews(); }
}

function saveReviews() {
    try { localStorage.setItem('dognest_reviews_v3', JSON.stringify(allReviews)); } catch {}
}

function addReview(review) {
    review.id   = Date.now();
    review.date = new Date().toISOString().split('T')[0];
    allReviews.unshift(review);
    saveReviews();
    renderReviews();
    renderReviewStats();
    showToast('Thank you — your review has been submitted!');
}

// ─── RENDER REVIEWS ─────────────────────────────────
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;

    let list = curFilter === 'All' ? [...allReviews] : allReviews.filter(r => r.service === curFilter);

    if      (curSort === 'newest')  list.sort((a,b) => new Date(b.date) - new Date(a.date));
    else if (curSort === 'oldest')  list.sort((a,b) => new Date(a.date) - new Date(b.date));
    else if (curSort === 'highest') list.sort((a,b) => b.rating - a.rating);
    else if (curSort === 'lowest')  list.sort((a,b) => a.rating - b.rating);

    const displayList = list.slice(0, displayedCount);

    grid.innerHTML = displayList.map(r => `
        <div class="review-card reveal">
            <div class="review-header">
                <div class="review-avatar">${r.avatar || '🐾'}</div>
                <div class="review-meta">
                    <h4>${safe(r.name)}</h4>
                    <div class="pet">🐾 ${safe(r.pet)}</div>
                    <div class="rdate">${fmtDate(r.date)}</div>
                </div>
            </div>
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <p class="review-text">${safe(r.text)}</p>
            <span class="review-service">${safe(r.service)}</span>
        </div>
    `).join('');

    const btnLoadMore = document.getElementById('btnLoadMore');
    if (btnLoadMore) {
        btnLoadMore.style.display = displayedCount < list.length ? 'inline-block' : 'none';
    }

    // Trigger reveal for new cards
    requestAnimationFrame(() => {
        grid.querySelectorAll('.review-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 40) el.classList.add('visible');
        });
    });
}

function renderReviewStats() {
    if (!allReviews.length) return;
    const avg  = (allReviews.reduce((s,r) => s + r.rating, 0) / allReviews.length).toFixed(1);
    const full = Math.round(parseFloat(avg));

    setEl('avgRating',   avg);
    setEl('reviewCount', `Based on ${allReviews.length} review${allReviews.length > 1 ? 's' : ''}`);
    setEl('avgStars',    '★'.repeat(full) + '☆'.repeat(5 - full));

    for (let i = 1; i <= 5; i++) {
        const count = allReviews.filter(r => r.rating === i).length;
        const pct   = Math.round((count / allReviews.length) * 100);
        const bar   = document.getElementById(`bar-${i}`);
        const pctEl = document.getElementById(`pct-${i}`);
        if (bar)   setTimeout(() => bar.style.width = pct + '%', 200);
        if (pctEl) pctEl.textContent = pct + '%';
    }
}

// ─── REVIEW FILTER / SORT ───────────────────────────
function setFilter(filter, btn) {
    curFilter = filter;
    document.querySelectorAll('.rf-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    displayedCount = 6;
    renderReviews();
}

function setSortOrder(e) {
    curSort = e.target.value;
    displayedCount = 6;
    renderReviews();
}

// ─── STAR SELECTOR ──────────────────────────────────
function initStarSelector() {
    const wrap = document.getElementById('starSelector');
    if (!wrap) return;

    const stars = wrap.querySelectorAll('.star');
    let selected = 0;

    stars.forEach((star, idx) => {
        star.addEventListener('mouseenter', () => {
            stars.forEach((s,i) => s.classList.toggle('active', i <= idx));
        });
        star.addEventListener('click', () => {
            selected = idx + 1;
            const inp = document.getElementById('ratingInput');
            if (inp) inp.value = selected;
            stars.forEach((s,i) => s.classList.toggle('active', i < selected));
        });
    });

    wrap.addEventListener('mouseleave', () => {
        stars.forEach((s,i) => s.classList.toggle('active', i < selected));
    });
}

// ─── REVIEW FORM ────────────────────────────────────
function initReviewForm() {
    const form = document.getElementById('reviewForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const rating = parseInt(document.getElementById('ratingInput')?.value || '0');
        if (!rating) { showToast('Please select a star rating!'); return; }

        const review = {
            name:    form.querySelector('[name="reviewerName"]')?.value.trim() || '',
            pet:     form.querySelector('[name="petName"]')?.value.trim()      || '',
            service: form.querySelector('[name="serviceUsed"]')?.value         || '',
            rating,
            text:    form.querySelector('[name="reviewText"]')?.value.trim()   || '',
            avatar:  '🐾'
        };

        if (!review.name || !review.pet || !review.text) { showToast('Please fill in all fields!'); return; }

        addReview(review);
        form.reset();
        document.querySelectorAll('#starSelector .star').forEach(s => s.classList.remove('active'));
        const inp = document.getElementById('ratingInput');
        if (inp) inp.value = '';

        document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ─── LOAD MORE REVIEWS ──────────────────────────────
function initLoadMore() {
    const btn = document.getElementById('btnLoadMore');
    if (!btn) return;
    btn.addEventListener('click', () => {
        displayedCount += 6;
        renderReviews();
    });
}

// ─── BOOKING FORM ───────────────────────────────────
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const ownerName = form.querySelector('[name="ownerName"]')?.value.trim() || '';
        const ownerPhone = form.querySelector('[name="ownerPhone"]')?.value.trim() || '';
        const petName = form.querySelector('[name="petName"]')?.value.trim() || '';
        const petBreed = form.querySelector('[name="petBreed"]')?.value.trim() || 'Not specified';
        const service = form.querySelector('[name="serviceRequired"]')?.value || '';
        const date = form.querySelector('[name="bookingDate"]')?.value || '';
        const special = form.querySelector('[name="specialRequirements"]')?.value.trim() || 'None';

        // Format message for WhatsApp
        const text = `Hi DogNest Silchar Pet Resort! I'd like to book a stay:\n\n` +
                     `🐾 *Owner Name:* ${ownerName}\n` +
                     `📞 *Phone Number:* ${ownerPhone}\n` +
                     `🐶 *Pet Name:* ${petName}\n` +
                     `🧬 *Breed:* ${petBreed}\n` +
                     `🏠 *Service:* ${service}\n` +
                     `📅 *Preferred Date:* ${date}\n` +
                     `📝 *Special Requirements:* ${special}`;

        const encodedText = encodeURIComponent(text);
        const waNumber = '917278336880';
        const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

        showToast('Redirecting to WhatsApp to send booking details...');
        form.reset();

        setTimeout(() => {
            window.open(waUrl, '_blank', 'noopener');
        }, 1200);
    });
}

// ─── FAQ ────────────────────────────────────────────
function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item   = btn.parentElement;
            const answer = item.querySelector('.faq-a');
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item').forEach(fi => {
                fi.classList.remove('open');
                fi.querySelector('.faq-a').style.maxHeight = '0';
            });

            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ─── GALLERY / LIGHTBOX ─────────────────────────────
function initGallery() {
    const items   = Array.from(document.querySelectorAll('.gallery-item'));
    const lb      = document.getElementById('lightbox');
    const lbImg   = document.getElementById('lbImg');
    const lbCap   = document.getElementById('lbCaption');
    const lbCount = document.getElementById('lbCounter');
    if (!lb || !items.length) return;

    function open(idx) {
        lbIndex = idx;
        const img = items[idx].querySelector('img');
        lbImg.src = img.src;
        if (lbCap) lbCap.textContent = items[idx].querySelector('.gallery-overlay span')?.textContent || '';
        if (lbCount) lbCount.textContent = `${idx + 1} / ${items.length}`;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        lbImg.src = '';
    }
    function prev() { open((lbIndex - 1 + items.length) % items.length); }
    function next() { open((lbIndex + 1) % items.length); }

    items.forEach((item, i) => item.addEventListener('click', () => open(i)));
    document.getElementById('lbClose')?.addEventListener('click', close);
    document.getElementById('lbPrev')?.addEventListener('click', prev);
    document.getElementById('lbNext')?.addEventListener('click', next);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape')     close();
        if (e.key === 'ArrowLeft')  prev();
        if (e.key === 'ArrowRight') next();
    });
}

// ─── SCROLL REVEAL ──────────────────────────────────
function initScrollReveal() {
    const check = () => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 40) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', check, { passive: true });
    check();
    setTimeout(check, 150);
    setTimeout(check, 600);
}

// ─── COUNTER ANIMATION ──────────────────────────────
function initCounters() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.done) {
                entry.target.dataset.done = '1';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => obs.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur + suffix;
    }, 28);
}

// ─── HEADER ─────────────────────────────────────────
function initHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ─── MOBILE MENU ────────────────────────────────────
function initMobileMenu() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('mobileNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            btn.classList.remove('open');
            nav.classList.remove('open');
        });
    });
}

// ─── SMOOTH SCROLL ──────────────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ─── UTILITIES ──────────────────────────────────────
function safe(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

function fmtDate(str) {
    try {
        return new Date(str).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch { return str; }
}

function setEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3800);
}

// ─── PRELOADER ──────────────────────────────────────
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    const hide = () => {
        preloader.classList.add('done');
        setTimeout(() => preloader.remove(), 600);
    };
    // Trigger hide after a very brief 250ms visual transition
    setTimeout(hide, 250);
}

// ─── PARALLAX HERO ──────────────────────────────────
function initParallax() {
    const el = document.querySelector('[data-parallax]');
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
            el.style.transform = `translateY(${y * 0.35}px) scale(1.04)`;
        }
    }, { passive: true });
}

// ─── BACK TO TOP ────────────────────────────────────
function initBackToTop() {
    const btn = document.getElementById('btnTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── FLOATING WHATSAPP ──────────────────────────────
function initFloatingWA() {
    const fab = document.getElementById('fabWA');
    if (!fab) return;
    window.addEventListener('scroll', () => {
        fab.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
}

// ─── COOKIE CONSENT ─────────────────────────────────
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    if (localStorage.getItem('dognest_cookies') === 'accepted') return;
    setTimeout(() => banner.classList.add('show'), 2000);
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
        localStorage.setItem('dognest_cookies', 'accepted');
        banner.classList.remove('show');
        banner.classList.add('dismissed');
    });
    document.getElementById('cookieDismiss')?.addEventListener('click', () => {
        banner.classList.remove('show');
        banner.classList.add('dismissed');
    });
}

// ─── NEWSLETTER FORM ────────────────────────────────
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        showToast('Thanks for subscribing! 🐾');
        form.reset();
    });
}

// ─── LAZY LOADING ───────────────────────────────────
function addLazyLoading() {
    document.querySelectorAll('img:not([loading])').forEach(img => {
        if (!img.closest('.preloader') && !img.closest('.lightbox')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// ─── BOARDING ESTIMATE CALCULATOR ──────────────────
function initBoardingCalculator() {
    const calcPlan = document.getElementById('calcPlan');
    const calcDays = document.getElementById('calcDays');
    const stepperDec = document.getElementById('stepperDec');
    const stepperInc = document.getElementById('stepperInc');
    const addonTraining = document.getElementById('addonTraining');
    const addonPool = document.getElementById('addonPool');
    const addonGrooming = document.getElementById('addonGrooming');

    const bdRatePlan = document.getElementById('bdRatePlan');
    const bdBaseRate = document.getElementById('bdBaseRate');
    const bdDays = document.getElementById('bdDays');
    const bdSubtotal = document.getElementById('bdSubtotal');
    const bdDiscountRow = document.getElementById('bdDiscountRow');
    const bdDiscountPct = document.getElementById('bdDiscountPct');
    const bdDiscountVal = document.getElementById('bdDiscountVal');
    const bdAddonsRow = document.getElementById('bdAddonsRow');
    const bdAddonsVal = document.getElementById('bdAddonsVal');
    const bdTotal = document.getElementById('bdTotal');
    const calcApplyBtn = document.getElementById('calcApplyBtn');

    if (!calcPlan || !calcDays) return;

    // Stepper logic
    stepperDec.addEventListener('click', () => {
        let val = parseInt(calcDays.value) || 1;
        if (val > 1) {
            calcDays.value = val - 1;
            calculateCost();
        }
    });

    stepperInc.addEventListener('click', () => {
        let val = parseInt(calcDays.value) || 1;
        if (val < 90) {
            calcDays.value = val + 1;
            calculateCost();
        }
    });

    // Inputs change listeners
    calcPlan.addEventListener('change', calculateCost);
    addonTraining.addEventListener('change', calculateCost);
    addonPool.addEventListener('change', calculateCost);
    addonGrooming.addEventListener('change', calculateCost);

    function calculateCost() {
        const planSelect = calcPlan.options[calcPlan.selectedIndex];
        const baseRate = parseInt(planSelect.getAttribute('data-price')) || 500;
        const planName = planSelect.text.split('—')[0].trim(); // Get e.g. "Standard Plan"
        const days = parseInt(calcDays.value) || 1;

        // Base subtotal
        const baseSubtotal = baseRate * days;

        // Discount
        let discountPct = 0;
        if (days >= 14) {
            discountPct = 0.15;
        } else if (days >= 7) {
            discountPct = 0.10;
        }
        const discountAmount = Math.round(baseSubtotal * discountPct);

        // Add-ons
        let addonsTotal = 0;
        let selectedAddons = [];

        if (addonTraining.checked) {
            addonsTotal += (parseInt(addonTraining.value) || 0) * days;
            selectedAddons.push("Behaviour Training");
        }
        if (addonPool.checked) {
            addonsTotal += (parseInt(addonPool.value) || 0) * days;
            selectedAddons.push("Pool Session");
        }
        if (addonGrooming.checked) {
            addonsTotal += parseInt(addonGrooming.value) || 0;
            selectedAddons.push("Spa Grooming");
        }

        // Final total
        const finalTotal = baseSubtotal - discountAmount + addonsTotal;

        // Format currency helper
        const fmt = (num) => '₹' + num.toLocaleString('en-IN');

        // Update Breakdown UI
        if (bdRatePlan) bdRatePlan.textContent = planName;
        if (bdBaseRate) bdBaseRate.textContent = fmt(baseRate) + '/day';
        if (bdDays) bdDays.textContent = days + (days === 1 ? ' Day' : ' Days');
        if (bdSubtotal) bdSubtotal.textContent = fmt(baseSubtotal);

        if (discountAmount > 0) {
            if (bdDiscountRow) bdDiscountRow.style.display = 'flex';
            if (bdDiscountPct) bdDiscountPct.textContent = (discountPct * 100) + '%';
            if (bdDiscountVal) bdDiscountVal.textContent = '-' + fmt(discountAmount);
        } else {
            if (bdDiscountRow) bdDiscountRow.style.display = 'none';
        }

        if (addonsTotal > 0) {
            if (bdAddonsRow) bdAddonsRow.style.display = 'flex';
            if (bdAddonsVal) bdAddonsVal.textContent = fmt(addonsTotal);
        } else {
            if (bdAddonsRow) bdAddonsRow.style.display = 'none';
        }

        if (bdTotal) bdTotal.textContent = fmt(finalTotal);

        // Store calculation details on the apply button to read later
        calcApplyBtn.dataset.planName = planName;
        calcApplyBtn.dataset.days = days;
        calcApplyBtn.dataset.addons = selectedAddons.join(', ') || 'None';
        calcApplyBtn.dataset.total = finalTotal;
    }

    // Apply & Scroll to booking form
    calcApplyBtn.addEventListener('click', () => {
        const planName = calcApplyBtn.dataset.planName || 'Standard Plan';
        const days = calcApplyBtn.dataset.days || '3';
        const addons = calcApplyBtn.dataset.addons || 'None';
        const total = calcApplyBtn.dataset.total || '0';

        const bookingForm = document.getElementById('bookingForm');
        if (!bookingForm) return;

        // Find and select corresponding service in dropdown
        const serviceSelect = bookingForm.querySelector('[name="serviceRequired"]');
        if (serviceSelect) {
            // Find option that contains planName
            for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text.toLowerCase().includes(planName.toLowerCase())) {
                    serviceSelect.selectedIndex = i;
                    break;
                }
            }
        }

        // Prefill special requirements textarea
        const requirementsTextarea = bookingForm.querySelector('[name="specialRequirements"]');
        if (requirementsTextarea) {
            requirementsTextarea.value = `Estimated Boarding: ${planName} for ${days} days.\n` +
                                         `Add-ons: ${addons}.\n` +
                                         `Estimated Total Cost: ₹${parseInt(total).toLocaleString('en-IN')}.`;
        }

        // Scroll to booking section
        const bookSection = document.getElementById('book');
        if (bookSection) {
            bookSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        showToast(`Selected ${planName} for ${days} days applied to booking form!`);
    });

    // Run initial calculation on load
    calculateCost();
}


