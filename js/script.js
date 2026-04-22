(function () {
  // ----- Layout templates -----
  function headerTemplate(page) {
    const isActive = (id) => (page === id ? "active" : "");
    return `
      <div class="top-strip modern-top-strip">
        <div class="container top-strip-wrap">
          <div class="top-strip-left">ISO Certified Recycled Polymer Manufacturer</div>
          <div class="top-strip-right">
            <a class="top-strip-link" href="mailto:aaryaentpune@gmail.com"><img src="assets/icons/mail.svg" alt="Email"> aaryaentpune@gmail.com</a>
            <a class="top-strip-link" href="tel:+919822633828"><img src="assets/icons/phone.svg" alt="Phone"> +91 9822633828</a>
          </div>
        </div>
      </div>
      <header class="site-header header">
        <div class="container nav-wrap">
          <a class="brand logo" href="index.html">
            <img src="assets/logo/logo3.png" alt="Aarya Enterprises" class="brand-mark">
            <span class="brand-text">
              <span class="brand-title">Aarya Enterprises</span>
              <span class="brand-tagline">Polymer Granule Manufacturer</span>
            </span>
          </a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
            <span class="icon-burger" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
            <span class="icon-close" aria-hidden="true">
              <span></span><span></span>
            </span>
          </button>
          <nav class="site-nav" id="site-nav">
            <div class="nav-list">
              <a class="${isActive("home")}" href="index.html">Home</a>
              <a class="${isActive("about")}" href="about.html">About Us</a>
              <a class="${isActive("products")}" href="products.html">Products</a>
              <a class="${isActive("contact")}" href="contact.html">Contact</a>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  function footerTemplate() {
    return `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand-column">
            <div class="footer-logo-main-wrap">
              <img src="assets/logo/footerlogo.png" alt="Aarya Enterprises" class="footer-logo-main">
              <span class="brand-text footer-brand-text">
                <span class="brand-title footer-brand-title">Aarya Enterprises</span>
                <span class="brand-tagline footer-brand-tagline">Polymer Granule Manufacturer</span>
              </span>
            </div>
            <p class="footer-text">We are engaged as the foremost manufacturer of HDPE PP, PPTF LDPE, LLDPE, PPCP, ABS, NYLON, PC-ABS, PC Granules.</p>
            <div class="footer-socials-inline">
              <a href="https://www.facebook.com" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com" aria-label="X / Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div class="footer-links-column">
            <h4>Quick Links</h4>
            <span class="footer-underline"></span>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-contact-column">
            <h4>Contact</h4>
            <span class="footer-underline"></span>
            <ul class="footer-contact">
              <li><span class="footer-icon footer-icon-pin" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span> <a href="https://maps.google.com/?q=GAT%20NO.%201567,%20NEAR%20TORANA%20HOTEL,%20DEHU%20ALANDI%20ROAD,%20SHELAR%20WASTI,%20CHIKHALI,%20PUNE,%20Maharashtra,%20411062" target="_blank" rel="noopener">
                Gat No. 1567, Near Torana Hotel,<br>
                Dehu Alandi Road, Shelar Wasti,<br>
                Chikhali, Pune, Maharashtra 411062
              </a></li>
              <li><span class="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="m4 4 8 8 8-8" />
                </svg>
              </span> <a href="mailto:aaryaentpune@gmail.com">aaryaentpune@gmail.com</a></li>
              <li><span class="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 3.3 2 2 0 0 1 4 1h2.1a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.4 2L7.6 8.4a16 16 0 0 0 6 6l1-0.8a2 2 0 0 1 2-.4 12.7 12.7 0 0 0 2.8.7 2 2 0 0 1 1.5 1.6Z" />
                </svg>
              </span> <a href="tel:+919822633828">+91 98226 33828</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container footer-bottom-inner">
            <div class="footer-copy">&copy; All rights are reserved by Aarya Enterprises and design by <a href="https://webakoof.com" target="_blank" rel="noopener">Webakoof</a></div>
          </div>
        </div>
      </footer>
    `;
  }

  function mountLayout() {
    const page = document.body.getAttribute("data-page") || "";
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = headerTemplate(page);
    if (footer) footer.innerHTML = footerTemplate();
  }

  // ----- Navigation -----
  function setupNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!navToggle || !nav) return;

    const navLinks = Array.from(nav.querySelectorAll("a"));
    const setOpen = (isOpen) => {
      nav.classList.toggle("open", isOpen);
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.contains("open");
      setOpen(!isOpen);
    });

    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (nav.classList.contains("open")) setOpen(false);
      })
    );

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const isClickInside = nav.contains(e.target) || navToggle.contains(e.target);
      if (!isClickInside) setOpen(false);
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) setOpen(false);
    });
  }

  // ----- Slider -----
  function setupSlider() {
    const sliders = document.querySelectorAll(".slider");
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const track = slider.querySelector(".slider-track");
      const slides = Array.from(slider.querySelectorAll(".slide"));
      const dotsContainer = slider.querySelector(".slider-dots");
      const prev = slider.querySelector(".slider-prev");
      const next = slider.querySelector(".slider-next");
      if (!track || !slides.length || !dotsContainer || !prev || !next) return;

      let index = 0;
      let timer;
      const shouldPauseOnHover = !slider.classList.contains("hero-slider");

      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
      });

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        const offset = index * slider.clientWidth;
        track.style.transform = `translate3d(-${offset}px, 0, 0)`;
        dotsContainer.querySelectorAll("button").forEach((d, di) => d.classList.toggle("active", di === index));
      }

      const nextSlide = () => goTo(index + 1);
      const prevSlide = () => goTo(index - 1);

      function startAuto() {
        stopAuto();
        timer = setInterval(nextSlide, 3500);
      }
      function stopAuto() {
        if (timer) clearInterval(timer);
      }

      next.addEventListener("click", () => { nextSlide(); startAuto(); });
      prev.addEventListener("click", () => { prevSlide(); startAuto(); });
      if (shouldPauseOnHover) {
        slider.addEventListener("mouseenter", stopAuto);
        slider.addEventListener("mouseleave", startAuto);
      }
      window.addEventListener("resize", () => goTo(index));

      goTo(0);
      startAuto();
    });
  }

  // ----- Reveal on scroll -----
  function setupReveals() {
    const reveals = document.querySelectorAll(".reveal");
    // Always show immediately to avoid hidden sections on small screens
    reveals.forEach((el) => el.classList.add("reveal-in"));
  }

  // ----- Back to top -----
  function setupBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;
    function toggle() {
      const scrolled = window.scrollY > 300;
      if (scrolled) btn.classList.add("show");
      else btn.classList.remove("show");
    }
    window.addEventListener("scroll", toggle, { passive: true });
    if (btn) btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    toggle();
  }

  // ----- WhatsApp FAB visibility -----
  function setupWhatsAppFab() {
    const fab = document.querySelector(".wa-fab");
    if (!fab) return;
    const toggle = () => {
      const scrolled = window.scrollY > 300;
      fab.classList.toggle("show", scrolled);
    };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
  }

  // ----- Stats counter -----
  function setupCounters() {
    const section = document.querySelector(".stats-section");
    if (!section) return;
    const counters = section.querySelectorAll(".stat-number");
    if (!counters.length) return;

    let started = false;

    const animate = () => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.target) || 0;
        const suffix = counter.dataset.suffix || "";
        const duration = 1400;
        const start = 0;
        const startTime = performance.now();

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(start + (target - start) * eased);
          counter.textContent = `${value}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
              started = true;
              animate();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      observer.observe(section);
    } else {
      animate();
    }
  }

  // ----- Contact form validation -----
  function setupForms() {
    const form = document.getElementById("cf-form");
    if (!form) return;
    const status = form.querySelector(".cf-status");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const valid = form.checkValidity();
      if (!valid) {
        form.reportValidity();
        if (status) {
          status.textContent = "Please fill all required fields.";
          status.style.color = "#f58634";
        }
        return;
      }

      if (status) {
        status.textContent = "Sending your request...";
        status.style.color = "#0B1F3A";
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      try {
        const formData = new FormData(form);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await response.json();
        if (response.ok && result.success) {
          if (status) {
            status.textContent = "Thank you. Your quote request has been sent successfully.";
            status.style.color = "#1f6f5b";
          }
          form.reset();
        } else {
          if (status) {
            status.textContent = result.message || "Failed to send. Please try again.";
            status.style.color = "#c0392b";
          }
        }
      } catch (error) {
        if (status) {
          status.textContent = "Network error. Please try again in a moment.";
          status.style.color = "#c0392b";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Request a Quote";
        }
      }
    });
  }

  // ----- Year -----
  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountLayout();
    setupNavigation();
    setupSlider();
    setupProductCarousel();
    setupReveals();
    setupBackToTop();
    setupWhatsAppFab();
    setupCounters();
    setupForms();
    setYear();
  });
})();

// ----- Products carousel -----
function setupProductCarousel() {
  const carousel = document.querySelector(".products-carousel");
  if (!carousel) return;
  const track = carousel.querySelector(".products-track");
  const originals = Array.from(track.children);
  let items = Array.from(track.children);
  const prev = carousel.querySelector(".products-prev");
  const next = carousel.querySelector(".products-next");
  const dotsContainer = carousel.querySelector(".products-dots");
  if (!items.length) return;

  let index = 0;
  let dots = [];
  let lastPerView = 3;
  let timer;

  const getPerView = () => {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 960) return 2;
    return 3;
  };

  const rebuildClones = () => {
    // Remove old clones
    items
      .filter((el) => el.dataset.clone === "true")
      .forEach((el) => el.remove());

    const perView = getPerView();
    const remainder = originals.length % perView;
    const needed = remainder === 0 ? 0 : perView - remainder;

    for (let i = 0; i < needed; i++) {
      const clone = originals[i % originals.length].cloneNode(true);
      clone.dataset.clone = "true";
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }

    items = Array.from(track.children);
  };

  const getMaxIndex = () => Math.max(0, Math.ceil(items.length / getPerView()) - 1);

  const buildDots = () => {
    const groups = Math.max(1, Math.ceil(items.length / getPerView()));
    dotsContainer.innerHTML = "";
    dots = [];
    for (let i = 0; i < groups; i++) {
      const dot = document.createElement("button");
      dot.addEventListener("click", () => {
        index = i;
        update();
        restartAuto();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }
  };

  const update = () => {
    const perView = getPerView();
    const maxIndex = getMaxIndex();
    if (index > maxIndex) index = maxIndex;
    carousel.style.setProperty("--per-view", perView);
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === maxIndex;
  };

  const nextGroup = () => {
    const maxIndex = getMaxIndex();
    index = index >= maxIndex ? 0 : index + 1;
    update();
  };

  const startAuto = () => {
    stopAuto();
    timer = setInterval(nextGroup, 5000);
  };

  const stopAuto = () => {
    if (timer) clearInterval(timer);
  };

  const restartAuto = () => {
    stopAuto();
    startAuto();
  };

  const handleResize = () => {
    rebuildClones();
    const perView = getPerView();
    if (perView !== lastPerView) {
      lastPerView = perView;
      buildDots();
    }
    update();
    restartAuto();
  };

  rebuildClones();
  buildDots();
  update();
  startAuto();

  prev?.addEventListener("click", () => {
    index -= 1;
    update();
    restartAuto();
  });
  next?.addEventListener("click", () => {
    index += 1;
    update();
    restartAuto();
  });
  // Keep autoplay running even on hover for continuous showcase
  window.addEventListener("resize", handleResize);
}
