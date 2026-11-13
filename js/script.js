/**
 * PROPERTY CONSULTANT - Main JavaScript Application
 * Vanilla JS implementation for real estate search, filtering, consultation modals,
 * form validation, FAQ toggles, bookmarks/favorites, and interactive demo widgets.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollReveal();
  initBackToTop();
  initFaqAccordions();
  initConsultationModal();
  initFavoritesSystem();
  initFormsValidation();
  initPropertySearchAndFilter();
  initLightbox();
});

// Demo Property Database (Illustrative frontend data)
const demoProperties = [
  {
    id: "prop-1",
    title: "Premium Apartment – Demo Location 01",
    category: "residential",
    type: "buy",
    subtype: "apartment",
    location: "Demo Location 01, North Sector",
    city: "Demo City",
    image: "images/property-01.jpg",
    price: 8500000,
    priceFormatted: "₹85,00,000 (Illustrative)",
    size: "1,850 sq.ft",
    bedrooms: "3 BHK",
    bathrooms: "3 Baths",
    parking: "1 Reserved Car Park",
    featured: true,
    status: "Ready to Move",
    highlights: "High-floor luxury unit with panoramic skyline balcony, designer kitchen fittings, and integrated clubhouse access."
  },
  {
    id: "prop-2",
    title: "Independent Villa – Demo Location 02",
    category: "residential",
    type: "buy",
    subtype: "villa",
    location: "Demo Location 02, Green Meadows",
    city: "Demo City",
    image: "images/property-02.jpg",
    price: 18500000,
    priceFormatted: "₹1.85 Cr (Illustrative)",
    size: "3,400 sq.ft",
    bedrooms: "4 BHK",
    bathrooms: "4 Baths",
    parking: "2 Covered Ports",
    featured: true,
    status: "Ready to Move",
    highlights: "Private garden lawn, landscaped terrace lounge, independent duplex layout with premium bespoke woodwork."
  },
  {
    id: "prop-3",
    title: "Residential Plot – Demo Location 03",
    category: "land",
    type: "buy",
    subtype: "plot",
    location: "Demo Location 03, Foothill Enclave",
    city: "Demo City",
    image: "images/property-03.jpg",
    price: 4500000,
    priceFormatted: "₹45,00,000 (Illustrative)",
    size: "2,400 sq.ft (Gated Layout)",
    bedrooms: "Clear Boundary",
    bathrooms: "N/A",
    parking: "Independent Access",
    featured: true,
    status: "Immediate Registration",
    highlights: "Gated township boundary with wide 40ft blacktop approach road, underground electrification, and park facing."
  },
  {
    id: "prop-4",
    title: "Commercial Office – Demo Location 04",
    category: "commercial",
    type: "buy",
    subtype: "office",
    location: "Demo Location 04, Central Business District",
    city: "Demo City",
    image: "images/property-04.jpg",
    price: 24000000,
    priceFormatted: "₹2.40 Cr (Illustrative)",
    size: "4,200 sq.ft Grade A",
    bedrooms: "Open Floor + 4 Cabins",
    bathrooms: "Separate Male/Female",
    parking: "4 Basement Slots",
    featured: true,
    status: "Immediate Occupancy",
    highlights: "High-visibility corporate tower, double-glazed facade, 100% DG power backup, high-speed elevator banks."
  },
  {
    id: "prop-5",
    title: "Retail Property – Demo Location 05",
    category: "commercial",
    type: "buy",
    subtype: "retail",
    location: "Demo Location 05, High-Street Promenade",
    city: "Demo City",
    image: "images/property-05.jpg",
    price: 16500000,
    priceFormatted: "₹1.65 Cr (Illustrative)",
    size: "1,600 sq.ft Ground Floor",
    bedrooms: "Wide Glass Frontage",
    bathrooms: "1 Washroom",
    parking: "Customer Valet Area",
    featured: true,
    status: "Ready for Fit-out",
    highlights: "Prime street-facing retail showroom with 35ft frontage, unmatched pedestrian footfall, and dedicated signage zone."
  },
  {
    id: "prop-6",
    title: "Skyline Penthouse – Demo Location 06",
    category: "residential",
    type: "buy",
    subtype: "penthouse",
    location: "Demo Location 06, Lakeview Heights",
    city: "Demo City",
    image: "images/property-06.jpg",
    price: 32000000,
    priceFormatted: "₹3.20 Cr (Illustrative)",
    size: "4,800 sq.ft Duplex",
    bedrooms: "5 BHK",
    bathrooms: "5 Baths",
    parking: "3 Covered Spots",
    featured: false,
    status: "Ready to Move",
    highlights: "Exclusive rooftop jacuzzi deck, dual living lounges, servant quarters, and panoramic unobstructed views."
  },
  {
    id: "prop-7",
    title: "Corporate Lease Suite – Demo Location 07",
    category: "commercial",
    type: "rent",
    subtype: "office",
    location: "Demo Location 07, Tech Horizon Park",
    city: "Demo City",
    image: "images/property-07.jpg",
    price: 125000,
    priceFormatted: "₹1,25,000 / month (Illustrative)",
    size: "2,500 sq.ft Fully Furnished",
    bedrooms: "32 Workstations + Conf Room",
    bathrooms: "Common Core",
    parking: "3 Dedicated Slots",
    featured: true,
    status: "Furnished & Plug-and-Play",
    highlights: "Ready plug-and-play modern corporate setup with acoustic board rooms, server rack provision, and cafeteria access."
  },
  {
    id: "prop-8",
    title: "Urban Rental Flat – Demo Location 08",
    category: "residential",
    type: "rent",
    subtype: "apartment",
    location: "Demo Location 08, Central Boulevard",
    city: "Demo City",
    image: "images/property-08.jpg",
    price: 38000,
    priceFormatted: "₹38,000 / month (Illustrative)",
    size: "1,450 sq.ft Semi-Furnished",
    bedrooms: "2.5 BHK",
    bathrooms: "2 Baths",
    parking: "1 Covered Car Park",
    featured: true,
    status: "Available for Lease",
    highlights: "Modular kitchen, built-in wardrobes, quiet balcony facing internal botanical gardens, gated society security."
  },
  {
    id: "prop-9",
    title: "Logistics Hub & Warehouse – Demo Location 09",
    category: "commercial",
    type: "rent",
    subtype: "warehouse",
    location: "Demo Location 09, Ring Highway Node",
    city: "Demo City",
    image: "images/property-09.jpg",
    price: 210000,
    priceFormatted: "₹2,10,000 / month (Illustrative)",
    size: "12,000 sq.ft PEB Structure",
    bedrooms: "Clear Height 32ft",
    bathrooms: "Office + Staff Facilities",
    parking: "Heavy Truck Bay",
    featured: false,
    status: "Immediate Handover",
    highlights: "Heavy-load concrete flooring, 3 hydraulic loading docks, automated fire-sprinkler grid, and 24/7 heavy vehicle access."
  }
];

/* 1. Sticky Header */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 2. Mobile Navigation Toggle */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    const isExpanded = navMenu.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });

  // Close on esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
}

/* 3. Scroll Reveal Animations */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

/* 4. Back To Top Button */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* 5. FAQ Accordions */
function initFaqAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (!accordionItems.length) return;

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.accordion-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* 6. Consultation Booking Modal */
function initConsultationModal() {
  const modalOverlay = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('[data-open-modal="consultation"]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  if (!modalOverlay) return;

  const openModal = () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* 7. Bookmarking / Favorites System */
function initFavoritesSystem() {
  let favorites = JSON.parse(localStorage.getItem('property_consultant_favs') || '[]');

  function updateButtons() {
    document.querySelectorAll('.property-fav-btn').forEach(btn => {
      const propId = btn.getAttribute('data-property-id');
      if (favorites.includes(propId)) {
        btn.classList.add('active');
        btn.setAttribute('title', 'Remove from Saved Properties');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', 'Save this Property');
      }
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.property-fav-btn');
    if (!btn) return;

    e.preventDefault();
    const propId = btn.getAttribute('data-property-id');
    if (!propId) return;

    if (favorites.includes(propId)) {
      favorites = favorites.filter(id => id !== propId);
      showToast('Property removed from your saved list.', 'info');
    } else {
      favorites.push(propId);
      showToast('Property added to your saved shortlist.', 'success');
    }

    localStorage.setItem('property_consultant_favs', JSON.stringify(favorites));
    updateButtons();
  });

  updateButtons();
}

/* 8. Toast Notifications */
function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.className = `toast-notification ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'error' ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>' : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* 9. Universal Form Validation (Frontend only) */
function initFormsValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        const errorEl = input.parentElement.querySelector('.field-error-msg');
        let fieldValid = true;

        if (!input.value.trim()) {
          fieldValid = false;
        } else if (input.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value.trim())) {
            fieldValid = false;
          }
        } else if (input.type === 'tel') {
          const phonePattern = /^[0-9+\s\-()]{7,15}$/;
          if (!phonePattern.test(input.value.trim())) {
            fieldValid = false;
          }
        }

        if (!fieldValid) {
          isValid = false;
          input.classList.add('error');
          if (errorEl) errorEl.classList.add('visible');
        } else {
          input.classList.remove('error');
          if (errorEl) errorEl.classList.remove('visible');
        }
      });

      if (isValid) {
        showToast('Your consultation request has been received! (Demo simulation only — no data stored).', 'success');
        form.reset();
        
        // If inside modal, close after 1.5 seconds
        const modal = form.closest('.modal-overlay');
        if (modal) {
          setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
          }, 1500);
        }
      } else {
        showToast('Please correct the highlighted fields before submitting.', 'error');
      }
    });

    // Real-time clearance of error state on input
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorEl = input.parentElement.querySelector('.field-error-msg');
        if (errorEl) errorEl.classList.remove('visible');
      });
    });
  });
}

/* 10. Property Search and Filtering logic */
function initPropertySearchAndFilter() {
  const container = document.getElementById('dynamicPropertiesGrid');
  const searchForm = document.getElementById('propertySearchForm');
  const filterBtns = document.querySelectorAll('[data-filter-category]');
  const sortSelect = document.getElementById('sortProperties');

  if (!container) return;

  let currentCategory = 'all';
  let currentSearchQuery = {
    purpose: 'all',
    type: 'all',
    location: 'all',
    budget: 'all'
  };
  let currentSort = 'default';

  // Render property cards
  function renderProperties(list) {
    if (!list.length) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--bg-light-grey); border-radius: var(--radius-md);">
          <h3 style="margin-bottom: 0.5rem;">No Properties Match Your Criteria</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your filters or search terms to discover available listings.</p>
          <button class="btn btn-outline" onclick="window.resetPropertyFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <article class="property-card reveal revealed" data-id="${item.id}" data-category="${item.category}">
        <div class="property-card-image-wrap">
          ${item.image ? `
            <img src="${item.image}" alt="${item.title}" class="property-card-img ratio-16-9" loading="lazy" style="width:100%; height:230px; object-fit:cover; display:block;">
          ` : `
            <div class="image-placeholder ratio-16-9">
              <div class="placeholder-icon">
                <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div class="placeholder-title">${item.subtype.toUpperCase()} IMAGE</div>
              <span class="placeholder-tag">Google Flow Image</span>
            </div>
          `}

          <div class="property-card-tags">
            <span class="badge badge-gold">${item.type.toUpperCase()}</span>
            <span class="badge badge-navy">${item.category.toUpperCase()}</span>
          </div>

          <button class="property-fav-btn" data-property-id="${item.id}" aria-label="Save Property">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>

        <div class="property-card-body">
          <div class="property-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${item.location}</span>
          </div>

          <h3 class="property-title">
            <a href="property-details.html?id=${item.id}">${item.title}</a>
          </h3>

          <div class="property-price">
            ${item.priceFormatted}
            <span class="label">Guide Price • Illustrative Demo</span>
          </div>

          <div class="property-specs">
            <div class="property-spec-item" title="Area">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>${item.size}</span>
            </div>
            <div class="property-spec-item" title="Configuration">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
              <span>${item.bedrooms}</span>
            </div>
            <div class="property-spec-item" title="Parking">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span>${item.parking.split(' ')[0]} Car</span>
            </div>
          </div>

          <p class="property-highlights">${item.highlights}</p>

          <div class="property-card-actions">
            <a href="property-details.html?id=${item.id}" class="btn btn-outline btn-sm">View Details</a>
            <button class="btn btn-primary btn-sm" data-open-modal="consultation">Enquire Now</button>
          </div>
        </div>
      </article>
    `).join('');

    initFavoritesSystem();
    initConsultationModal();
  }

  function applyFiltersAndSort() {
    let filtered = [...demoProperties];

    // Filter by page context (e.g., if on buy-property or rent)
    const pageType = container.getAttribute('data-page-type');
    if (pageType && pageType !== 'all') {
      filtered = filtered.filter(p => p.type === pageType);
    }

    // Category filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory || p.subtype === currentCategory);
    }

    // Purpose filter (Buy / Rent)
    if (currentSearchQuery.purpose !== 'all') {
      filtered = filtered.filter(p => p.type === currentSearchQuery.purpose);
    }

    // Property Type filter
    if (currentSearchQuery.type !== 'all') {
      filtered = filtered.filter(p => p.subtype === currentSearchQuery.type || p.category === currentSearchQuery.type);
    }

    // Location search
    if (currentSearchQuery.location !== 'all' && currentSearchQuery.location.trim()) {
      const locKey = currentSearchQuery.location.toLowerCase();
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(locKey) || 
        p.title.toLowerCase().includes(locKey)
      );
    }

    // Budget filtering
    if (currentSearchQuery.budget !== 'all') {
      if (currentSearchQuery.budget === 'under-50l') {
        filtered = filtered.filter(p => p.price <= 5000000);
      } else if (currentSearchQuery.budget === '50l-1cr') {
        filtered = filtered.filter(p => p.price >= 5000000 && p.price <= 10000000);
      } else if (currentSearchQuery.budget === '1cr-3cr') {
        filtered = filtered.filter(p => p.price >= 10000000 && p.price <= 30000000);
      } else if (currentSearchQuery.budget === 'above-3cr') {
        filtered = filtered.filter(p => p.price >= 30000000);
      } else if (currentSearchQuery.budget === 'rent-under-50k') {
        filtered = filtered.filter(p => p.price <= 50000);
      } else if (currentSearchQuery.budget === 'rent-above-50k') {
        filtered = filtered.filter(p => p.price > 50000);
      }
    }

    // Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProperties(filtered);
  }

  // Category buttons click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter-category');
      applyFiltersAndSort();
    });
  });

  // Search form submit
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const purposeEl = searchForm.querySelector('[name="purpose"]');
      const typeEl = searchForm.querySelector('[name="type"]');
      const locationEl = searchForm.querySelector('[name="location"]');
      const budgetEl = searchForm.querySelector('[name="budget"]');

      currentSearchQuery = {
        purpose: purposeEl ? purposeEl.value : 'all',
        type: typeEl ? typeEl.value : 'all',
        location: locationEl ? locationEl.value : 'all',
        budget: budgetEl ? budgetEl.value : 'all'
      };

      applyFiltersAndSort();
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFiltersAndSort();
    });
  }

  window.resetPropertyFilters = function() {
    currentCategory = 'all';
    currentSearchQuery = { purpose: 'all', type: 'all', location: 'all', budget: 'all' };
    currentSort = 'default';

    if (searchForm) searchForm.reset();
    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter-category') === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    if (sortSelect) sortSelect.value = 'default';

    applyFiltersAndSort();
  };

  // Initial load
  applyFiltersAndSort();
}

/* 11. Lightbox Simulation for Gallery Placeholders */
function initLightbox() {
  const lightboxOverlay = document.getElementById('lightboxModal');
  const galleryPlaceholders = document.querySelectorAll('.gallery-clickable');

  if (!lightboxOverlay || !galleryPlaceholders.length) return;

  const titleEl = lightboxOverlay.querySelector('.lightbox-title');
  const closeBtn = lightboxOverlay.querySelector('.lightbox-close');

  galleryPlaceholders.forEach(item => {
    item.addEventListener('click', () => {
      const label = item.getAttribute('data-label') || 'Property Gallery Placeholder View';
      if (titleEl) titleEl.textContent = label;
      lightboxOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightboxOverlay.classList.remove('active');
    });
  }

  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('active');
    }
  });
}
