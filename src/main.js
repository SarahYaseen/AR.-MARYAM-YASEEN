/* ==========================================================================
   AR. MARYAM YASEEN - ARCHITECTURE PORTFOLIO LOGIC & ROUTER
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. PROJECT DATA DATABASE (Directly from PDF content)
// --------------------------------------------------------------------------
const projectsData = [
  {
    id: "research-visitor-center",
    num: "01",
    title: "Research & Visitor Center",
    subtitle: "Thesis Project",
    category: "cultural",
    subCategories: ["academic", "cultural"],
    location: "Lahore, Pakistan",
    img: "/assets/project-thesis.webp",
    desc: "The Research and Visitor Center was my final-year thesis project, developed as an architecture-based framework to promote urban reforestation through research, education, and community engagement. The project responded to the environmental challenges of Lahore by creating a facility that combines scientific research, public awareness, and sustainable landscape practices within a single destination.",
    role: "Complete Thesis Project (Concept development, extensive literature review, case studies, site analysis, space programming, architectural planning, 3D modeling, visualization, and detailed renderings).",
    process: "Guided by principles of sustainability and biophilic design, the proposal integrates research laboratories, educational spaces, visitor facilities, and landscape interventions to create an interactive environment that encourages ecological restoration, environmental learning, and community participation.",
    isThesis: true,
    isFeatured: true
  },
  {
    id: "5-star-hotel",
    num: "02",
    title: "5-Star Hotel",
    category: "commercial",
    subCategories: ["academic", "commercial"],
    location: "Lahore, Pakistan",
    img: "/assets/project-5-star-hotel.webp",
    desc: "The 5-Star Hotel project was a comprehensive architectural design developed entirely from concept to final presentation. The design process focused on creating a luxurious, functional, and context-responsive hospitality experience while addressing user comfort, circulation, and operational efficiency.",
    role: "Lead Designer (Concept development, design research, case study analysis, site analysis, space planning, zoning, architectural drawings, 3D modeling, and high-quality rendering).",
    process: "Through this project, I strengthened my skills in architectural planning, conceptual thinking, research-based design, visualization, and presentation, demonstrating my ability to deliver a complete architectural project from inception to completion.",
    isFeatured: true
  },
  {
    id: "pediatric-hospital",
    num: "03",
    title: "Pediatric Hospital",
    category: "healthcare",
    subCategories: ["academic", "healthcare"],
    location: "Punjab, Pakistan",
    img: "/assets/project-pediatric-hospital.webp",
    desc: "The Pediatric Hospital project was a comprehensive architectural design developed from the initial concept through to the final presentation. The design focused on creating a child-friendly, healing environment that prioritized patient comfort, safety, accessibility, and efficient circulation for children, families, and healthcare professionals.",
    role: "Independent Designer (Design research, case study analysis, site analysis, concept development, space programming, zoning, preparation of detailed architectural drawings, 3D modeling, and visualizations).",
    process: "The project concluded with the development of a detailed 3D model and high-quality visualizations that effectively communicated the design intent. Through this project, I strengthened my skills in healthcare planning, research-driven design, and creating functional spaces that support medical care.",
    isFeatured: true
  },
  {
    id: "residence-01-2-kanal",
    num: "04",
    title: "Residence 01 – 2 Kanal House",
    category: "residential",
    subCategories: ["professional", "residential"],
    location: "DHA Lahore, Pakistan",
    img: "/assets/project-residence-01.webp",
    desc: "The Residence 01 – 2 Kanal House, DHA Lahore was a residential design project focused on creating a contemporary home that balances functionality, comfort, and aesthetics. The project resulted in a residence that offers both elegance and practicality.",
    role: "Architect (Architectural planning, space organization, design development, preparation of detailed drawings, 3D modeling, and high-quality visualization).",
    process: "Emphasis was placed on efficient spatial planning, natural lighting, ventilation, and modern architectural elements, ensuring the design responded directly to the client's lifestyle and spatial requirements.",
    isFeatured: true
  },
  {
    id: "day-hospital",
    num: "05",
    title: "Day Hospital",
    category: "healthcare",
    subCategories: ["academic", "healthcare"],
    location: "Lahore, Pakistan",
    img: "/assets/project-day-hospital.webp",
    desc: "The Day Hospital project was a complete architectural design developed from the initial concept through to the final presentation. The design emphasized efficient healthcare planning, patient comfort, accessibility, and a healing environment while ensuring smooth circulation for patients, visitors, and medical staff.",
    role: "Independent Designer (Design research, case study analysis, site analysis, concept development, space programming, zoning, preparation of architectural drawings, 3D modeling, and visualizations).",
    process: "The project was completed with a detailed 3D model and high-quality visualizations that effectively communicated the design intent. It enhanced my understanding of healthcare architecture and evidence-based design."
  },
  {
    id: "urban-project-bhatti-gate",
    num: "06",
    title: "Urban Research Project",
    category: "urban",
    subCategories: ["academic", "urban"],
    location: "Bhatti Gate, Lahore, Pakistan",
    img: "/assets/project-urban-project.webp",
    desc: "The Urban Research Project focused on understanding the social and spatial challenges faced by the transgender community in Bhatti Gate, Lahore. The project was primarily research-based and involved identifying the everyday issues experienced by a specific marginalized group, analyzing the relationship between the built environment and social inclusion, and developing design-oriented strategies to address these challenges.",
    role: "Urban Researcher & Visual Storyteller (Extensive literature review, field observations, site analysis, practical urban interventions, and documentary production).",
    process: "Along with research, I proposed practical urban interventions aimed at creating safer, more inclusive, and accessible public spaces. I also produced a documentary that documented the research process and highlighted the lived experiences of the transgender community through visual storytelling.",
    docLink: "https://www.instagram.com/reel/DeHde2jig19/?igsh=Mwnyn24zNHVqdxJteQ=="
  },
  {
    id: "art-cultural-center",
    num: "07",
    title: "Art & Cultural Center",
    category: "cultural",
    subCategories: ["academic", "cultural"],
    location: "Bhatti Gate, Lahore, Pakistan",
    img: "/assets/project-art-cultural-center.webp",
    desc: "The proposed Art and Cultural Center was designed as an inclusive community space that empowers the transgender community by providing opportunities for creativity, skill development, and sustainable employment. The project aimed to create a safe and welcoming environment where individuals could showcase their artistic talents, participate in cultural activities, conduct workshops, and engage with the wider community.",
    role: "Lead Architect (Zoning, conceptual layout, design development, rendering, and visual presentation sheets).",
    process: "The design integrated exhibition spaces, multipurpose studios, performance areas, training rooms, and community gathering spaces to support artistic expression and vocational development. By combining cultural engagement with employment opportunities, the project sought to promote dignity, visibility, and long-term empowerment."
  },
  {
    id: "kvda-office-kalash-valley",
    num: "08",
    title: "KVDA Office Kalaash Valley",
    category: "commercial",
    subCategories: ["academic", "commercial"],
    location: "Kalash Valley, Pakistan",
    img: "/assets/project-kvda-office.webp",
    desc: "The KVDA Office in Kalash Valley was designed on a contoured site, requiring a context-sensitive approach that responded to the natural topography while minimizing disturbance to the landscape. The design carefully followed the site's levels to integrate the building with the terrain while preserving the valley's natural character.",
    role: "Architectural Designer (Concept development, site analysis, contour-based planning, architectural drawings, and 3D visualization from concept to final presentation).",
    process: "Emphasis was placed on sustainable design, functional workspace planning, stepped layout planning, and creating an administrative facility that harmonizes with the cultural identity and mountainous landscape of Kalash Valley."
  },
  {
    id: "architecture-department",
    num: "09",
    title: "Architecture Department",
    category: "commercial",
    subCategories: ["academic", "commercial"],
    location: "UET Lahore, Pakistan",
    img: "/assets/project-architecture-department.webp",
    desc: "This academic assignment involved preparing detailed architectural designs and 2D layouts for an Architecture Department, optimizing space utilization, flow, and structural layout standard compliance.",
    role: "Drafting & 3D Modeler (Preparing detailed 2D architectural plans, ensuring accuracy in layouts, dimensions, drafting standards, and developing a comprehensive 3D visualization model).",
    process: "I developed a comprehensive 3D model of the department to visualize the spatial organization, building form, and architectural details. This process enhanced design coordination, improved project presentation, and provided a realistic representation of the proposed architectural design."
  },
  {
    id: "computer-lab-redesign",
    num: "10",
    title: "Computer Lab Redesign",
    category: "interior",
    subCategories: ["academic", "interior"],
    location: "Lahore, Pakistan",
    img: "/assets/project-computer-lab.webp",
    desc: "This design assignment reimagined the Computer Lab for the Architecture Department to create a modern, functional, and collaborative learning environment. The proposal focused on improving the spatial layout, user comfort, circulation, and flexibility while addressing the academic needs of architecture students.",
    role: "Interior Designer (Concept ideation, space planning, workstation layout drafting, ergonomic furniture selections, and render post-production).",
    process: "The design incorporated efficient workstation planning, ergonomic furniture, enhanced lighting, integrated digital facilities, and dedicated spaces for individual work and group collaboration. The objective was to support creativity, technical learning, and an engaging educational experience."
  },
  {
    id: "residence-02-1-kanal",
    num: "11",
    title: "Residence 02 – 1 Kanal House",
    category: "residential",
    subCategories: ["professional", "residential"],
    location: "Rawalpindi, Pakistan",
    img: "/assets/project-residence-02.webp",
    desc: "The Residence 02 – 1 Kanal House, Rawalpindi was a residential design project developed to create a functional, contemporary, and comfortable living environment tailored to the client's needs.",
    role: "Architect (Architectural planning, space planning, design development, preparation of detailed architectural drawings, 3D modeling, and rendering).",
    process: "Special attention was given to natural lighting, ventilation, circulation, and modern architectural aesthetics, resulting in a residence that combines functionality, comfort, and timeless design."
  },
  {
    id: "residence-03-10-marla",
    num: "12",
    title: "Residence 03 – 10 Marla House",
    category: "residential",
    subCategories: ["professional", "residential"],
    location: "Peshawar, Pakistan",
    img: "/assets/project-residence-03.webp",
    desc: "The Residence 03 – 10 Marla House, Peshawar was designed to provide a modern and efficient living environment while responding to the client's functional requirements and local context.",
    role: "Architect (Architectural planning, space organization, design development, preparation of detailed drawings, 3D modeling, and rendering).",
    process: "Emphasis was placed on maximizing space utilization, enhancing natural light and ventilation, and incorporating contemporary architectural elements to create a comfortable and well-planned family residence."
  },
  {
    id: "multipurpose-building-3-kanal",
    num: "13",
    title: "3 Kanal Multipurpose Building",
    category: "commercial",
    subCategories: ["professional", "commercial"],
    location: "Punjab, Pakistan",
    img: "/assets/project-multipurpose-building.webp",
    desc: "The 3 Kanal Multipurpose Building was designed as a dynamic mixed-use facility incorporating marriage halls, an auditorium, and a café within a cohesive architectural framework.",
    role: "Architect (Architectural planning, space programming, design development, preparation of detailed drawings, 3D modeling, and high-quality visualizations).",
    process: "The project focused on creating flexible, functional spaces capable of accommodating a variety of social, cultural, and community events while ensuring efficient circulation and operational planning."
  },
  {
    id: "cmh-kharian-interior",
    num: "14",
    title: "CMH Kharian Interior Renovation",
    category: "interior",
    subCategories: ["professional", "interior", "healthcare"],
    location: "Kharian, Pakistan",
    img: "/assets/project-cmh-kharian.webp",
    desc: "The CMH Kharian Interior Renovation project focused on transforming existing interior spaces into a modern, functional, and user-centered environment while preserving the building's operational requirements.",
    role: "Interior Architect (Space planning, interior design development, preparation of detailed drawings, 3D modeling, and visualization renders).",
    process: "The design emphasized efficient space utilization, improved circulation, material selection, and a refined interior aesthetic that enhances both comfort and functionality in a military healthcare environment."
  },
  {
    id: "corridor-proposal-cmh-kharian",
    num: "15",
    title: "Corridor Interior Proposal",
    category: "interior",
    subCategories: ["professional", "interior", "healthcare"],
    location: "CMH Kharian, Pakistan",
    img: "/assets/project-corridor-proposal.webp",
    desc: "The Corridor Interior Proposal for CMH Kharian focused on redesigning the circulation space to create a clean, welcoming, and functional environment.",
    role: "Interior Designer (Concept development, interior space planning, material and finish selection, preparation of detailed drawings, 3D modeling, and visualizations).",
    process: "The design emphasized improved spatial aesthetics, efficient wayfinding, appropriate material selection, and lighting solutions that enhance user comfort while maintaining the strict hygiene standards required for a healthcare facility."
  },
  {
    id: "mosque-bahria-town",
    num: "16",
    title: "Mosque Bahria Town",
    category: "cultural",
    subCategories: ["professional", "cultural"],
    location: "Bahria Town Lahore, Pakistan",
    img: "/assets/project-mosque.webp",
    desc: "The 18 Marla Mosque, Bahria Town was designed to create a serene and welcoming place of worship that balances spiritual values with contemporary architectural design.",
    role: "Architect (Concept development, architectural planning, preparation of detailed drawings, 3D modeling, and visualization).",
    process: "The project focused on developing a functional layout that accommodates prayer spaces, circulation, and supporting facilities while emphasizing simplicity, harmony, and natural lighting proportions."
  },
  {
    id: "apartment-building-nathia-gali",
    num: "17",
    title: "Apartment Building, Nathia Gali",
    category: "commercial",
    subCategories: ["professional", "commercial", "residential"],
    location: "Nathia Gali, Pakistan",
    img: "/assets/project-apartment-building.webp",
    desc: "The Apartment Building, Nathia Gali was designed to respond to the region's mountainous terrain and scenic landscape while providing comfortable and functional residential spaces.",
    role: "Architect (Architectural planning, space organization, design development, preparation of detailed drawings, 3D modeling, and visualization).",
    process: "The project emphasized context-sensitive planning, maximizing views, natural lighting, and ventilation, while integrating the building harmoniously with its natural surroundings using climate-responsive strategies."
  },
  {
    id: "contour-villa",
    num: "18",
    title: "Visitor Villa on Contoured Site",
    category: "residential",
    subCategories: ["professional", "residential"],
    location: "Murree/Khyber Pakhtunkhwa, Pakistan",
    img: "/assets/project-contour-villa.webp",
    desc: "The Visitor Villa on Contoured Site was designed to provide a comfortable and immersive retreat that responds sensitively to the natural topography.",
    role: "Architect (Concept development, contour-based site planning, architectural design, preparation of detailed drawings, 3D modeling, and visualization).",
    process: "The project embraced the site's contours through stepped planning, minimizing land disturbance while maximizing panoramic views, natural light, and ventilation to create a seamless connection between the built form and the surrounding landscape."
  },
  {
    id: "elementary-school-peshawar",
    num: "19",
    title: "Elementary School, Peshawar",
    category: "commercial",
    subCategories: ["professional", "commercial"],
    location: "Peshawar, Pakistan",
    img: "/assets/project-elementary-school.webp",
    desc: "The Elementary School, Peshawar was designed to provide a safe, engaging, and student-centered learning environment that supports both academic and social development.",
    role: "Lead Architect (Concept development, site planning, architectural design, preparation of detailed drawings, 3D modeling, and visualization).",
    process: "The project focused on creating functional classrooms, interactive learning spaces, and well-organized circulation while ensuring a comfortable, secure, and child-friendly environment."
  }
];

// --------------------------------------------------------------------------
// 2. SPA ROUTER SYSTEM
// --------------------------------------------------------------------------
const pageViews = {
  home: document.getElementById("page-home"),
  portfolio: document.getElementById("page-portfolio"),
  contact: document.getElementById("page-contact")
};

const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const header = document.querySelector(".main-header");

function handleRoute() {
  const hash = window.location.hash || "#home";
  
  // Close any active mobile menu
  closeMobileMenu();

  // Check if navigating to a project modal
  if (hash.startsWith("#project-")) {
    const projectSlug = hash.substring(9);
    openProjectModal(projectSlug);
    return; // Keep underlying page view active as-is
  } else {
    // If not a project hash, close modal just in case
    closeProjectModal(false);
  }

  // Handle page views
  let targetPage = "home";
  if (hash === "#portfolio") targetPage = "portfolio";
  if (hash === "#contact") targetPage = "contact";

  // Deactivate all views, activate target view
  Object.keys(pageViews).forEach(key => {
    if (key === targetPage) {
      pageViews[key].classList.add("active");
    } else {
      pageViews[key].classList.remove("active");
    }
  });

  // Sync active states in headers
  syncNavActiveState(targetPage);

  // Scroll window to top
  window.scrollTo({ top: 0, behavior: "instant" });

  // Apply dark header styles dynamically when on home landing page (which has dark hero section)
  updateHeaderTheme(targetPage);

  // Trigger animations in viewport checks
  triggerScrollReveals();
}

function syncNavActiveState(activePage) {
  // Sync desktop
  navLinks.forEach(link => {
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Sync mobile
  mobileNavLinks.forEach(link => {
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function updateHeaderTheme(page) {
  if (page === "home" && window.scrollY < window.innerHeight - 80) {
    header.classList.add("on-dark-section");
  } else {
    header.classList.remove("on-dark-section");
  }
}

// Listen for hash changes
window.addEventListener("hashchange", handleRoute);

// --------------------------------------------------------------------------
// 3. MOBILE HAMBURGER MENU DRAWER
// --------------------------------------------------------------------------
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

if (hamburgerBtn && mobileMenuOverlay) {
  hamburgerBtn.addEventListener("click", () => {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    hamburgerBtn.setAttribute("aria-expanded", !isExpanded);
    hamburgerBtn.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    
    // Toggle body overflow scroll lock and header menu class
    if (!isExpanded) {
      header.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      header.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    }
  });

  // Close when clicking outside of the content container
  mobileMenuOverlay.addEventListener("click", (e) => {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });

  // Close when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  if (hamburgerBtn && hamburgerBtn.classList.contains("active")) {
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenuOverlay.classList.remove("active");
    header.classList.remove("mobile-menu-open");
    document.body.style.overflow = "";
  }
}

// --------------------------------------------------------------------------
// 4. CUSTOM CURSOR & HEADER TRANSITIONS ON SCROLL
// --------------------------------------------------------------------------
const cursor = document.getElementById("custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  // Add hover effect to interactive items
  const hoverables = document.querySelectorAll("a, button, input, textarea, .project-card, .philosophy-card");
  hoverables.forEach(item => {
    item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });

  // Hover view state for hero image
  const heroImageContainer = document.getElementById("hero-interactive-image");
  if (heroImageContainer) {
    heroImageContainer.addEventListener("mouseenter", () => {
      cursor.classList.add("view-state");
    });
    heroImageContainer.addEventListener("mouseleave", () => {
      cursor.classList.remove("view-state");
    });
    heroImageContainer.addEventListener("click", () => {
      window.location.hash = "#project-research-visitor-center";
    });
  }
}

// Hero Parallax Effect
const heroSection = document.getElementById("hero");
const parallaxImg = document.getElementById("hero-parallax-img");
const parallaxGrid = document.getElementById("hero-parallax-grid");

if (heroSection && parallaxImg && parallaxGrid) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!prefersReducedMotion && !isTouchDevice) {
    heroSection.addEventListener("mousemove", (e) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const mouseX = (e.clientX / width) - 0.5;
      const mouseY = (e.clientY / height) - 0.5;
      
      const imgTx = mouseX * 12;
      const imgTy = mouseY * 12;
      const gridTx = -mouseX * 18;
      const gridTy = -mouseY * 18;
      
      parallaxImg.style.transform = `scale(1.05) translate(${imgTx}px, ${imgTy}px)`;
      parallaxGrid.style.transform = `translate(${gridTx}px, ${gridTy}px)`;
    });

    heroSection.addEventListener("mouseleave", () => {
      parallaxImg.style.transform = `scale(1.05) translate(0px, 0px)`;
      parallaxGrid.style.transform = `translate(0px, 0px)`;
    });
  }
}

// Hero Scroll Indicator Click
const heroScrollClick = document.getElementById("hero-scroll-click");
if (heroScrollClick) {
  heroScrollClick.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Scroll events
window.addEventListener("scroll", () => {
  // Scrolled header background toggle
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Update hero header theme (dark/light)
  const currentHash = window.location.hash || "#home";
  if (currentHash === "#home" || currentHash === "" || currentHash === "#/") {
    updateHeaderTheme("home");
  } else {
    updateHeaderTheme("other");
  }

  // Scroll progress bar indicator
  const scrollProgress = document.getElementById("scroll-progress-bar");
  if (scrollProgress) {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";
  }

  // Back to top button visibility
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    if (window.scrollY > 600) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }

  // Handle timeline drawing on scroll
  animateTimelineProgress();

  // Scroll reveal viewport check
  triggerScrollReveals();
});

// Back to Top functionality
const backToTopBtn = document.getElementById("back-to-top-btn");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --------------------------------------------------------------------------
// 5. INTERSECTION OBSERVER FOR SCROLL REVEALS & SKILL FILL ANIMATIONS
// --------------------------------------------------------------------------
function triggerScrollReveals() {
  const revealItems = document.querySelectorAll(".scroll-reveal");
  
  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.85; // 85% down viewport
    
    if (rect.top < triggerPoint) {
      item.classList.add("revealed");
      
      // If it is the skills section, animate individual progress bars
      if (item.id === "skills-section") {
        animateSkillsBars();
      }
    }
  });
}

function animateSkillsBars() {
  const skillFills = document.querySelectorAll(".skill-fill");
  skillFills.forEach(fill => {
    const width = fill.getAttribute("data-width");
    fill.style.width = width;
  });
}

// --------------------------------------------------------------------------
// 6. TIMELINE PROGRESS DRAWING LINE (Home Page)
// --------------------------------------------------------------------------
function animateTimelineProgress() {
  const timelineSection = document.getElementById("timeline");
  const fill = document.getElementById("timeline-progress-fill");
  
  if (!timelineSection || !fill) return;

  const rect = timelineSection.getBoundingClientRect();
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;
  
  // Calculate percentage of timeline section scrolled past
  // Start drawing line when section top is 60% down viewport, finish when bottom is 20% down
  const startOffset = viewportHeight * 0.6;
  const scrollIn = startOffset - rect.top;
  const totalDuration = sectionHeight;
  
  let pct = scrollIn / totalDuration;
  pct = Math.max(0, Math.min(1, pct)); // Clamp between 0 and 1
  
  const isMobile = window.innerWidth <= 900;
  if (isMobile) {
    fill.style.width = "100%";
    fill.style.height = (pct * 100) + "%";
  } else {
    fill.style.width = (pct * 100) + "%";
    fill.style.height = "100%";
  }
  
  // Highlight markers
  const markers = timelineSection.querySelectorAll(".timeline-marker");
  const items = timelineSection.querySelectorAll(".timeline-item");
  
  items.forEach((item, idx) => {
    const itemRect = item.getBoundingClientRect();
    const isPast = isMobile 
      ? (itemRect.top < viewportHeight * 0.6)
      : (itemRect.left < window.innerWidth / 2 || idx === 0);
      
    if (isPast || idx === 0) {
      markers[idx].style.borderColor = "var(--color-accent)";
      markers[idx].style.backgroundColor = "var(--color-accent)";
    } else {
      markers[idx].style.borderColor = "var(--color-text-muted)";
      markers[idx].style.backgroundColor = "var(--color-bg-light)";
    }
  });
}

// --------------------------------------------------------------------------
// 7. RENDER PROJECT CARDS (Featured & Portfolio Grid)
// --------------------------------------------------------------------------
function createProjectCardHTML(proj) {
  return `
    <article class="project-card" data-slug="${proj.id}">
      <div class="project-thumbnail">
        <img src="${proj.img}" alt="${proj.title}" class="project-img" loading="lazy">
        <div class="project-thumbnail-overlay">
          <span class="project-view-badge">VIEW PROJECT</span>
        </div>
      </div>
      <div class="project-meta">
        <span class="project-category">${proj.category}</span>
      </div>
      <h3 class="project-card-title">${proj.title}</h3>
      <p class="project-card-desc">${proj.desc.substring(0, 140)}...</p>
    </article>
  `;
}

function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;
  
  // Get featured projects (Thesis, 5-Star Hotel, Pediatric Hospital, Residence 01)
  const featured = projectsData.filter(p => p.isFeatured);
  
  container.innerHTML = featured.map(p => createProjectCardHTML(p)).join("");
  
  // Attach event listeners to project cards
  container.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-slug");
      window.location.hash = `#project-${slug}`;
    });
  });
}

function renderPortfolioGrid(filter = "all") {
  const container = document.getElementById("portfolio-grid-container");
  if (!container) return;

  // Filter projects based on categories
  const filtered = projectsData.filter(proj => {
    if (filter === "all") return true;
    
    // Custom logic for categories match
    if (filter === "academic") return proj.subCategories.includes("academic");
    if (filter === "professional") return proj.subCategories.includes("professional");
    
    return proj.category === filter || proj.subCategories.includes(filter);
  });

  // Fade out current grid
  container.style.opacity = "0";
  container.style.transform = "translateY(10px)";
  container.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  setTimeout(() => {
    container.innerHTML = filtered.map(p => createProjectCardHTML(p)).join("");
    
    // Re-attach click listeners to new grid cards
    container.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const slug = card.getAttribute("data-slug");
        window.location.hash = `#project-${slug}`;
      });
    });

    // Custom cursor hover rebuild
    if (cursor) {
      container.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        card.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
      });
    }

    // Fade back in
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 300);
}

// Set up portfolio filter tabs
const filterButtons = document.querySelectorAll("#portfolio-filters .filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const filterValue = btn.getAttribute("data-filter");
    renderPortfolioGrid(filterValue);
  });
});

// --------------------------------------------------------------------------
// 8. PROJECT DETAIL MODAL ROUTING & SYSTEM
// --------------------------------------------------------------------------
const modal = document.getElementById("project-modal");
const modalHeroImg = document.getElementById("modal-hero-img");
const modalTitle = document.getElementById("modal-project-title");
const modalCategory = document.getElementById("modal-project-category");
const modalLocation = document.getElementById("modal-project-location");
const modalRole = document.getElementById("modal-project-role");
const modalDesc = document.getElementById("modal-project-desc");
const modalProcess = document.getElementById("modal-project-process");
const modalGallery = document.getElementById("modal-project-gallery");
const modalDocWrapper = document.getElementById("modal-documentary-wrapper");
const modalDocLink = document.getElementById("modal-documentary-link");
const modalCloseBtn = document.getElementById("modal-close-btn");

const modalPrevBtn = document.getElementById("modal-prev-project-btn");
const modalNextBtn = document.getElementById("modal-next-project-btn");
const modalPrevTitle = document.getElementById("modal-prev-project-title");
const modalNextTitle = document.getElementById("modal-next-project-title");

let currentProjectIndex = -1;
let lastScrollPosition = 0;

function openProjectModal(slug) {
  const index = projectsData.findIndex(p => p.id === slug);
  if (index === -1) return;

  currentProjectIndex = index;
  const project = projectsData[index];

  // Save scroll position of underlying page so we can remain at the exact spot
  if (!modal.classList.contains("active")) {
    lastScrollPosition = window.scrollY;
  }

  // Populate Modal Fields
  modalHeroImg.src = project.img;
  modalHeroImg.alt = project.title;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalLocation.textContent = project.location || "Lahore, Pakistan";
  modalRole.textContent = project.role;
  modalDesc.textContent = project.desc;
  
  if (project.process) {
    document.getElementById("modal-project-process-block").style.display = "block";
    modalProcess.textContent = project.process;
  } else {
    document.getElementById("modal-project-process-block").style.display = "none";
  }

  // Toggle Documentary Link
  if (project.docLink) {
    modalDocWrapper.style.display = "block";
    modalDocLink.href = project.docLink;
  } else {
    modalDocWrapper.style.display = "none";
  }

  // Populate Drawings & Visualization Gallery (using project visual + alternate views)
  modalGallery.innerHTML = `
    <img src="${project.img}" alt="${project.title} Render 1" class="modal-gallery-img" loading="lazy">
    <img src="${project.img}" alt="${project.title} Architectural Drawing Sheet" class="modal-gallery-img grayscale-img" style="filter: contrast(1.1) brightness(1.05);" loading="lazy">
  `;

  // Set up Prev / Next Navigation buttons
  const prevIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (currentProjectIndex + 1) % projectsData.length;
  
  modalPrevTitle.textContent = projectsData[prevIndex].title;
  modalNextTitle.textContent = projectsData[nextIndex].title;

  // Show Modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll of underlying page
  
  // Custom cursor hovers inside modal
  if (cursor) {
    const modalHoverables = modal.querySelectorAll("a, button");
    modalHoverables.forEach(item => {
      item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  }
}

function closeProjectModal(restoreHash = true) {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
    
    // Restore window scroll position
    window.scrollTo({ top: lastScrollPosition, behavior: "instant" });

    // Restore URL hash back to the main view if needed
    if (restoreHash) {
      const activeView = Object.keys(pageViews).find(key => pageViews[key].classList.contains("active"));
      window.location.hash = `#${activeView}`;
    }
  }
}

// Close Modal Events
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => closeProjectModal(true));
}

modal.addEventListener("click", (e) => {
  // Close if clicking outside the wrapper
  if (e.target === modal) {
    closeProjectModal(true);
  }
});

// Modal keyboard esc key close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal(true);
  }
});

// Prev / Next button actions
if (modalPrevBtn) {
  modalPrevBtn.addEventListener("click", () => {
    const prevIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    window.location.hash = `#project-${projectsData[prevIndex].id}`;
  });
}

if (modalNextBtn) {
  modalNextBtn.addEventListener("click", () => {
    const nextIndex = (currentProjectIndex + 1) % projectsData.length;
    window.location.hash = `#project-${projectsData[nextIndex].id}`;
  });
}

// --------------------------------------------------------------------------
// 9. CONTACT FORM VALIDATION & SIMULATION
// --------------------------------------------------------------------------
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success-msg");
const errorMsg = document.getElementById("form-error-msg");
const submitBtn = document.getElementById("submit-btn");
const submitLoader = document.getElementById("submit-loader");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Hide status messages
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
    
    // Validate inputs
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");
    
    let isValid = true;
    
    // Name validation
    if (!nameInput.value.trim()) {
      document.getElementById("error-name").classList.add("visible");
      isValid = false;
    } else {
      document.getElementById("error-name").classList.remove("visible");
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      document.getElementById("error-email").classList.add("visible");
      isValid = false;
    } else {
      document.getElementById("error-email").classList.remove("visible");
    }
    
    // Subject validation
    if (!subjectInput.value.trim()) {
      document.getElementById("error-subject").classList.add("visible");
      isValid = false;
    } else {
      document.getElementById("error-subject").classList.remove("visible");
    }
    
    // Message validation
    if (!messageInput.value.trim()) {
      document.getElementById("error-message").classList.add("visible");
      isValid = false;
    } else {
      document.getElementById("error-message").classList.remove("visible");
    }
    
    // Stop if invalid
    if (!isValid) return;
    
    // Trigger loading state
    submitBtn.disabled = true;
    submitLoader.style.display = "inline-block";
    
    // Simulate form submission to a clean contact API/endpoint structure
    setTimeout(() => {
      // Success response simulation
      submitBtn.disabled = false;
      submitLoader.style.display = "none";
      successMsg.style.display = "flex";
      
      // Clear form inputs
      contactForm.reset();
    }, 2000);
  });
}

// --------------------------------------------------------------------------
// 9b. TESTIMONIALS SLIDER LOGIC
// --------------------------------------------------------------------------
function initTestimonialsSlider() {
  const container = document.getElementById("testimonials-slider-container");
  const track = document.getElementById("testimonials-track");
  
  if (!container || !track) return;

  const slidesData = [
    {
      quote: "Collaborator feedback placeholder I. This premium slider section is structured to support client testimonials dynamically.",
      name: "Architectural Collaborator I",
      role: "Design Lead / Collaboration Reference",
      project: "Contour Villa Proposal"
    },
    {
      quote: "Client review placeholder II. Real feedback from real-world commissions and collaborations can be directly added here.",
      name: "Private Client II",
      role: "Property Owner / Commission Reference",
      project: "Residence 01 - DHA Lahore"
    },
    {
      quote: "Institutional review placeholder III. Fosters a professional presentation without fabricating client endorsement reviews.",
      name: "IDAP Team Member III",
      role: "Planning Coordinator / IDAP Internship",
      project: "Multipurpose Healthcare Facility"
    },
    {
      quote: "Collaborator feedback placeholder IV. Detailed reviews can be easily updated in the main.js testimonials array.",
      name: "Junior Architect IV",
      role: "Project Team / SM Design Works",
      project: "18 Marla Mosque Project"
    },
    {
      quote: "Client review placeholder V. Clean editorial cards present feedback in a professional magazine layout.",
      name: "Private Client V",
      role: "Homeowner / Residential Client",
      project: "Residence 02 - 1 Kanal House"
    },
    {
      quote: "Collaborator feedback placeholder VI. Timely project execution and coordination feedback is represented in this slider.",
      name: "Site Engineer VI",
      role: "Construction Supervisor / Reference",
      project: "3 Kanal Commercial Building"
    },
    {
      quote: "Institutional review placeholder VII. Demonstrating space planning, research, and documentation capabilities.",
      name: "Thesis Advisory Board VII",
      role: "Academic Advisor / Thesis Jury",
      project: "Urban Reforestation Thesis"
    },
    {
      quote: "Collaborator feedback placeholder VIII. Focuses on structural drafting, detailing, and BIM modeling reviews.",
      name: "BIM Coordinator VIII",
      role: "Technical Collaborator / SM Design Works",
      project: "Contour Villa Project"
    },
    {
      quote: "Client review placeholder IX. Dynamic translation loops ensure seamless navigation across all ten testimonial entries.",
      name: "Commercial Client IX",
      role: "Business Director / Retail Project",
      project: "DHA Commercial Plaza"
    },
    {
      quote: "Collaborator feedback placeholder X. Complete project documentation and submission drawing set reviews.",
      name: "Senior Architect X",
      role: "Principal / Tariq Consultants",
      project: "Residential Layout Revisions"
    }
  ];

  // Render slides twice for seamless infinite marquee loop
  const doubleSlides = [...slidesData, ...slidesData];
  track.innerHTML = doubleSlides.map((s, idx) => `
    <div class="testimonial-card-editorial" data-index="${idx % 10}">
      <div class="card-quote-mark">“</div>
      <p class="testimonial-quote">${s.quote}</p>
      <div class="testimonial-author">
        <span class="testimonial-name">${s.name}</span>
        <span class="testimonial-role">${s.role}</span>
        <span class="testimonial-project">${s.project}</span>
      </div>
    </div>
  `).join("");

  // Animation and Drag Variables
  let currentOffset = 0;
  let isDragging = false;
  let isHovered = false;
  let startX = 0;
  let baseOffset = 0;
  let halfWidth = 0;
  let animationFrameId = null;

  // Recalculate track width boundaries for seamless looping
  function updateDimensions() {
    halfWidth = track.scrollWidth / 2;
  }
  
  // Wait until rendering completes to compute dimension values
  setTimeout(updateDimensions, 100);
  window.addEventListener("resize", updateDimensions);

  // Speed and reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const speed = prefersReducedMotion ? 0 : 0.8; // 0.8px per frame at 60fps is a smooth, premium editorial marquee

  function animate() {
    if (!isDragging && !isHovered && !prefersReducedMotion) {
      currentOffset += speed;
      if (currentOffset >= halfWidth) {
        currentOffset -= halfWidth;
      }
      track.style.transform = `translate3d(-${currentOffset}px, 0, 0)`;
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  // Hover Events for Desktop
  container.addEventListener("mouseenter", () => {
    isHovered = true;
  });
  
  container.addEventListener("mouseleave", () => {
    isHovered = false;
    if (isDragging) {
      isDragging = false;
    }
  });

  // Drag / Touch Events
  function dragStart(clientX) {
    isDragging = true;
    startX = clientX;
    baseOffset = currentOffset;
    track.style.transition = "none";
  }

  function dragMove(clientX) {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    currentOffset = baseOffset - deltaX;

    // Boundary wrapping
    if (currentOffset < 0) {
      currentOffset += halfWidth;
      startX = clientX;
      baseOffset = currentOffset;
    } else if (currentOffset >= halfWidth) {
      currentOffset -= halfWidth;
      startX = clientX;
      baseOffset = currentOffset;
    }
    track.style.transform = `translate3d(-${currentOffset}px, 0, 0)`;
  }

  function dragEnd() {
    isDragging = false;
  }

  // Mouse drag listeners
  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    dragStart(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      dragMove(e.clientX);
    }
  });

  window.addEventListener("mouseup", () => {
    dragEnd();
  });

  // Mobile Touch listeners
  container.addEventListener("touchstart", (e) => {
    dragStart(e.touches[0].clientX);
  }, { passive: true });

  container.addEventListener("touchmove", (e) => {
    if (isDragging) {
      dragMove(e.touches[0].clientX);
    }
  }, { passive: true });

  container.addEventListener("touchend", () => {
    dragEnd();
  });

  // Keyboard accessibility arrow support
  document.addEventListener("keydown", (e) => {
    const rect = container.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (inViewport && !prefersReducedMotion) {
      if (e.key === "ArrowLeft") {
        currentOffset -= 40; // shift slightly to the left
        if (currentOffset < 0) currentOffset += halfWidth;
        track.style.transform = `translate3d(-${currentOffset}px, 0, 0)`;
      } else if (e.key === "ArrowRight") {
        currentOffset += 40; // shift slightly to the right
        if (currentOffset >= halfWidth) currentOffset -= halfWidth;
        track.style.transform = `translate3d(-${currentOffset}px, 0, 0)`;
      }
    }
  });

  // Kick off animation
  if (!prefersReducedMotion) {
    animate();
  } else {
    // If reduced motion, render clean static blocks
    track.style.transform = "none";
    track.style.flexWrap = "wrap";
    track.style.justifyContent = "center";
    container.style.overflowX = "auto";
    track.style.width = "100%";
    track.style.display = "grid";
    track.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
    track.style.gap = "2rem";
    track.style.padding = "1rem";
    
    // Render clean original 10 items without duplicates for static accessibility
    track.innerHTML = slidesData.map((s, idx) => `
      <div class="testimonial-card-editorial" style="margin-right: 0; width: 100%; min-height: auto;">
        <div class="card-quote-mark">“</div>
        <p class="testimonial-quote">${s.quote}</p>
        <div class="testimonial-author">
          <span class="testimonial-name">${s.name}</span>
          <span class="testimonial-role">${s.role}</span>
          <span class="testimonial-project">${s.project}</span>
        </div>
      </div>
    `).join("");
  }
}

// --------------------------------------------------------------------------
// 10. INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Render projects
  renderFeaturedProjects();
  renderPortfolioGrid();
  
  // Initialize testimonials
  initTestimonialsSlider();
  
  // Initialize routes
  handleRoute();
  
  // Set window resize listener to recalculate timelines/experience layout
  window.addEventListener("resize", () => {
    animateTimelineProgress();
  });
});
