/* ==========================================================================
   Hemalatha D Portfolio - Main JavaScript Controller
   ========================================================================== */

// Document & Certificate Modal Content Map
const documentMap = {
  "typewriting": {
    title: "Junior Grade Typewriting English (30 WPM) Certificate",
    category: "Government Technical Certification",
    imageSrc: "./assets/typewriting_certificate.jpg",
    date: "August 2024",
    downloadUrl: "./assets/typewriting_certificate.jpg",
    detailsHtml: `
      <div class="modal-doc-meta-card">
        <h4 style="font-size:1.1rem; font-weight:800; color:#0F2547; margin-bottom:0.5rem;">Government of Tamil Nadu - Department of Technical Education</h4>
        <p style="margin-bottom:0.5rem;"><strong>Certification:</strong> Junior Grade Typewriting English (30 Words Per Minute)</p>
        <p style="margin-bottom:0.5rem;"><strong>Result:</strong> FIRST CLASS</p>
        <p style="margin-bottom:0.5rem;"><strong>Examination Session:</strong> AUGUST 2024</p>
        <p style="margin-bottom:0.5rem;"><strong>Issuing Authority:</strong> Chairman, Board of Examinations, Tamil Nadu</p>
      </div>
    `
  },
  "national-sports": {
    title: "3rd Junior Girl's National Goal Shot Ball Championship",
    category: "National Level Sports Representation",
    imageSrc: "./assets/national_goalshotball_certificate.jpg",
    date: "30th Oct to 01st Nov 2025",
    downloadUrl: "./assets/national_goalshotball_certificate.jpg",
    detailsHtml: `
      <div class="modal-doc-meta-card">
        <h4 style="font-size:1.1rem; font-weight:800; color:#0F2547; margin-bottom:0.5rem;">Goal Shot Ball Association of Bihar / India</h4>
        <p style="margin-bottom:0.5rem;"><strong>Event:</strong> 3rd Junior Girl's National Goal Shot Ball Championship</p>
        <p style="margin-bottom:0.5rem;"><strong>Representation:</strong> Represented State of <strong>TAMILNADU</strong> as Player</p>
        <p style="margin-bottom:0.5rem;"><strong>Venue:</strong> Udaan International School, Begusarai, Bihar</p>
      </div>
    `
  },
  "throwball": {
    title: "Annual Sports Day – Throwball Merit Certificate",
    category: "College Sports Merit Award",
    imageSrc: "./assets/throwball_certificate.jpg",
    date: "Academic Year 2024-2025",
    downloadUrl: "./assets/throwball_certificate.jpg",
    detailsHtml: `
      <div class="modal-doc-meta-card">
        <h4 style="font-size:1.1rem; font-weight:800; color:#0F2547; margin-bottom:0.5rem;">SRM Trichy Arts & Science College</h4>
        <p style="margin-bottom:0.5rem;"><strong>Event:</strong> Throwball (Intramural Sports & Games)</p>
        <p style="margin-bottom:0.5rem;"><strong>Position Secured:</strong> RUNNERS Position</p>
        <p style="margin-bottom:0.5rem;"><strong>Representation:</strong> Titans House • I B.Sc Computer Science</p>
      </div>
    `
  },
  "culinary": {
    title: "Culinary Challenge #AccelerateAction (Fireless Cooking)",
    category: "Co-Curricular Event Certificate",
    imageSrc: "./assets/fireless_cooking_certificate.jpg",
    date: "05th March 2025",
    downloadUrl: "./assets/fireless_cooking_certificate.jpg",
    detailsHtml: `
      <div class="modal-doc-meta-card">
        <h4 style="font-size:1.1rem; font-weight:800; color:#0F2547; margin-bottom:0.5rem;">SRM Institute of Hotel Management / SRM Institute of Science & Technology</h4>
        <p style="margin-bottom:0.5rem;"><strong>Event:</strong> Culinary Challenge - Fireless Cooking Contest</p>
        <p style="margin-bottom:0.5rem;"><strong>Occasion:</strong> International Women's Day Celebration (#AccelerateAction)</p>
        <p style="margin-bottom:0.5rem;"><strong>Organizer:</strong> Oasis Students' Club, SRM Trichy Campus</p>
      </div>
    `
  }
};


// DOM Loaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initModals();
  initContactForm();
  initBackToTop();
  initScrollSpy();
});


/* ==========================================================================
   NAVBAR & MOBILE MENU CONTROLLER
   ========================================================================== */

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const iconMenu = toggleBtn?.querySelector(".icon-menu");
  const iconClose = toggleBtn?.querySelector(".icon-close");

  // Sticky Navbar Scroll Listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Toggle
  toggleBtn?.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("active");
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  function openMobileDrawer() {
    mobileDrawer.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    if (iconMenu && iconClose) {
      iconMenu.style.display = "none";
      iconClose.style.display = "block";
    }
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    if (iconMenu && iconClose) {
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    }
  }

  // Close Mobile Drawer on Link Click
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMobileDrawer);
  });
}


/* ==========================================================================
   SCROLLSPY & ACTIVE LINK HIGHLIGHTING
   ========================================================================== */

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active");
      }
    });
  });
}


/* ==========================================================================
   MODAL CONTROLLER (CERTIFICATE & DOCUMENT VIEWER)
   ========================================================================== */

function initModals() {
  const docModal = document.getElementById("document-modal");
  const modalCloseBtn = document.getElementById("btn-modal-close");
  const modalDismissBtn = document.getElementById("btn-modal-dismiss");
  
  const resumeModal = document.getElementById("resume-modal");
  const resumeCloseBtn = document.getElementById("btn-resume-modal-close");
  const resumeDismissBtn = document.getElementById("btn-resume-modal-dismiss");

  // Open Document / Certificate Modals
  document.querySelectorAll(".btn-view-cert, .btn-open-doc").forEach(btn => {
    btn.addEventListener("click", () => {
      const docType = btn.getAttribute("data-cert-id") || btn.getAttribute("data-doc-type");
      if (docType && documentMap[docType]) {
        const item = documentMap[docType];
        openDocumentModal(item);
      }
    });
  });

  // Open Resume Modal Buttons
  document.querySelectorAll("#btn-header-resume, #btn-mobile-resume, #btn-hero-resume, #btn-cta-download-resume").forEach(btn => {
    btn?.addEventListener("click", () => {
      openResumeModal();
    });
  });

  // Close handlers
  modalCloseBtn?.addEventListener("click", closeDocumentModal);
  modalDismissBtn?.addEventListener("click", closeDocumentModal);
  
  resumeCloseBtn?.addEventListener("click", closeResumeModal);
  resumeDismissBtn?.addEventListener("click", closeResumeModal);

  // Close on Backdrop Click
  docModal?.addEventListener("click", (e) => {
    if (e.target === docModal) closeDocumentModal();
  });

  resumeModal?.addEventListener("click", (e) => {
    if (e.target === resumeModal) closeResumeModal();
  });

  // Close on Escape Key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDocumentModal();
      closeResumeModal();
    }
  });
}

function openDocumentModal(item) {
  const modal = document.getElementById("document-modal");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalFooterNote = document.getElementById("modal-footer-note");
  const modalDownloadBtn = document.getElementById("btn-modal-download");

  if (!modal) return;

  modalCategory.textContent = item.category || "Verification Record";
  modalTitle.textContent = item.title;
  modalFooterNote.textContent = item.date ? `Document Record Date: ${item.date}` : "Original Verification Record";
  
  if (item.downloadUrl && item.downloadUrl !== "#") {
    modalDownloadBtn.href = item.downloadUrl;
    modalDownloadBtn.style.display = "inline-flex";
  } else {
    modalDownloadBtn.style.display = "none";
  }

  // Build Body Content
  let bodyHtml = "";
  if (item.imageSrc && item.imageSrc !== "#") {
    bodyHtml += `<img src="${item.imageSrc}" alt="${item.title}" class="modal-img-preview" />`;
  }
  if (item.detailsHtml) {
    bodyHtml += item.detailsHtml;
  }

  modalBody.innerHTML = bodyHtml;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDocumentModal() {
  const modal = document.getElementById("document-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}


/* ==========================================================================
   CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const successAlert = document.getElementById("form-success-alert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Form inputs
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    // Clear previous errors
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      input.parentElement.classList.remove("has-error");
    });

    // Validate Name
    if (!nameInput.value.trim()) {
      showFieldError(nameInput);
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput);
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showFieldError(subjectInput);
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showFieldError(messageInput);
      isValid = false;
    }

    if (isValid) {
      if (successAlert) {
        successAlert.style.display = "flex";
      }
      form.reset();

      setTimeout(() => {
        if (successAlert) successAlert.style.display = "none";
      }, 8000);
    }
  });

  function showFieldError(input) {
    input.parentElement.classList.add("has-error");
  }
}


/* ==========================================================================
   FLOATING BACK TO TOP BUTTON
   ========================================================================== */

function initBackToTop() {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
