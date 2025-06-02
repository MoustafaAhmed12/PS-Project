(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(document).ready(function () {
    if ($(".testimonial-carousel").length) {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 900,
        loop: true,
        margin: 24,
        dots: true,
        nav: false,
        rtl: true,
        items: 1,
      });
    }
  });

  // Team section slider
  $(document).ready(function () {
    if ($(".team-carousel").length) {
      $(".team-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 900,
        loop: true,
        margin: 24,
        dots: true,
        nav: false,
        rtl: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          992: { items: 3 },
        },
      });
    }
  });
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
  function updateArrowDirection() {
    const isRTL = document.documentElement.dir === "rtl";
    document.querySelectorAll(".arrow-dir").forEach((icon) => {
      icon.classList.remove("fa-arrow-left", "fa-arrow-right");
      icon.classList.add(isRTL ? "fa-arrow-left" : "fa-arrow-right");
    });
  }
  updateArrowDirection();
  // لو عندك زر تغيير اللغة
  document.addEventListener("languageChanged", updateArrowDirection);
});
// Translation resources
// const resources = {
//   ar: {
//     translation: {
//       nav: {
//         home: "الرئيسية",
//         services: "خدماتنا",
//         sections: "الأقسام",
//         about: "من نحن",
//         contact: "اتصل بنا",
//       },
//       topbar: {
//         phone: "+012 345 6789",
//         email: "info@example.com",
//         workingHours: "من الاثنين إلى الجمعة: 09 صباحاً - 09 مساءً",
//       },
//       carousel: {
//         title1: "الريادة في الإنشاءات المعدنية",
//         subtitle1: "نحول رؤيتك إلى واقع متميز",
//         description1:
//           "نقدم حلولاً متكاملة في مجال الإنشاءات المعدنية، مع التركيز على الجودة والابتكار والاستدامة. خبرتنا الواسعة تمكننا من تنفيذ مشاريع معقدة باحترافية عالية.",
//         button1: "تواصل معنا",
//         title2: "حلول صناعية متكاملة",
//         subtitle2: "نبتكر المستقبل معاً",
//         description2:
//           "نختص في تصميم وتنفيذ المنشآت الصناعية والمستودعات والمصانع. نضمن لك جودة عالية وأداء متميز مع التركيز على السلامة والكفاءة.",
//         button2: "خدماتنا",
//         title3: "مشاريع تجارية رائدة",
//         subtitle3: "نصنع الفرق في كل مشروع",
//         description3:
//           "نقدم حلولاً مبتكرة للمشاريع التجارية والسكنية. نتميز بالتصميم العصري والتنفيذ الدقيق، مع ضمان أعلى معايير الجودة والسلامة.",
//         button3: "مشاريعنا",
//       },
//     },
//   },
//   en: {
//     translation: {
//       nav: {
//         home: "Home",
//         services: "Services",
//         sections: "Sections",
//         about: "About Us",
//         contact: "Contact Us",
//       },
//       topbar: {
//         phone: "+012 345 6789",
//         email: "info@example.com",
//         workingHours: "Monday to Friday: 09 AM - 09 PM",
//       },
//       carousel: {
//         title1: "Leadership in Steel Construction",
//         subtitle1: "Transforming Your Vision into Excellence",
//         description1:
//           "We provide integrated solutions in steel construction, focusing on quality, innovation, and sustainability. Our extensive experience enables us to execute complex projects with high professionalism.",
//         button1: "Contact Us",
//         title2: "Integrated Industrial Solutions",
//         subtitle2: "Innovating the Future Together",
//         description2:
//           "We specialize in designing and implementing industrial facilities, warehouses, and factories. We guarantee high quality and excellent performance with a focus on safety and efficiency.",
//         button3: "Our Services",
//         title3: "Leading Commercial Projects",
//         subtitle3: "Making a Difference in Every Project",
//         description3:
//           "We offer innovative solutions for commercial and residential projects. We excel in modern design and precise execution, ensuring the highest standards of quality and safety.",
//         button3: "Our Projects",
//       },
//     },
//   },
// };

// قراءة اللغة المختارة من localStorage أو استخدام العربية كافتراضي
const savedLang = localStorage.getItem("siteLang") || "ar";
i18next.init({
  resources: window.siteTranslations,
  lng: savedLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

// Function to update content
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = i18next.t(key);
  });
}

// Function to toggle language
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "ar" ? "en" : "ar";
  const newDir = newLang === "ar" ? "rtl" : "ltr";

  // Update HTML lang and dir attributes
  document.documentElement.lang = newLang;
  document.documentElement.dir = newDir;

  // Update i18next language
  i18next.changeLanguage(newLang, (err, t) => {
    if (err) return console.log("Error changing language:", err);
    updateContent();
  });

  // Update toggle button text
  const langText = document.querySelector(".lang-text");
  langText.textContent = newLang === "ar" ? "EN" : "AR";

  // Update toggle button active state
  const toggleBtn = document.querySelector(".language-toggle .btn");
  toggleBtn.classList.toggle("active");

  // Dispatch language change event
  document.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: { lang: newLang },
    })
  );

  // حفظ اللغة المختارة في localStorage
  localStorage.setItem("siteLang", newLang);
}

// Initial content update
document.addEventListener("DOMContentLoaded", () => {
  updateContent();
});

// إضافة الأنيميشن للروابط عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  navLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
  });

  const isRTL = document.documentElement.dir === "rtl";

  // تفعيل الرابط النشط حسب الصفحة الحالية
  document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentLocation.split("/").pop()) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      // Add different animations based on element type
      if (element.tagName === "IMG") {
        const animations = [
          "animate-fadeInUp",
          "animate-fadeInLeft",
          "animate-fadeInRight",
          "animate-zoomIn",
          "animate-slideInUp",
        ];
        const randomAnimation =
          animations[Math.floor(Math.random() * animations.length)];
        element.classList.add(randomAnimation);
      } else if (
        element.tagName === "P" ||
        element.tagName === "H1" ||
        element.tagName === "H2" ||
        element.tagName === "H3"
      ) {
        const textAnimations = [
          "text-animate-fadeIn",
          "text-animate-slideIn",
          "text-animate-zoomIn",
        ];
        const randomTextAnimation =
          textAnimations[Math.floor(Math.random() * textAnimations.length)];
        element.classList.add(randomTextAnimation);
        element.classList.add(`delay-${((index % 5) + 1) * 100}`);
      }
    }
  });
}

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", function () {
  // Add animation class to images
  document.querySelectorAll("img").forEach((img) => {
    img.classList.add("animate-on-scroll");
  });

  // Add animation class to text elements
  document.querySelectorAll("p, h1, h2, h3").forEach((text) => {
    text.classList.add("animate-on-scroll");
  });

  // Initial check for elements in view
  animateOnScroll();

  // Check for elements in view on scroll
  window.addEventListener("scroll", animateOnScroll);
});

// Section Cards Animation
function animateSectionCards() {
  const sectionCards = document.querySelectorAll(".section-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sectionCards.forEach((card) => {
    observer.observe(card);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // ... existing code ...

  // Initialize section cards animation
  animateSectionCards();
});

// Smooth scroll for navbar contact link
// يعمل على أي رابط يبدأ بـ # ويؤدي إلى سكشن في الصفحة

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href").slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var yOffset = -85; // ارتفاع النافبار أو المسافة المطلوبة
        var y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // إزالة active و btn-warning من كل الأزرار وإزالة أي style
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "btn-warning");
        btn.classList.add("btn-outline-warning");
        btn.style.border = "";
        btn.style.background = "";
        btn.style.color = "";
      });
      // إضافة active و btn-warning للزر الحالي فقط
      this.classList.add("active", "btn-warning");
      this.classList.remove("btn-outline-warning");

      // إذا كان الزر الحالي هو زر الكل
      if (this.getAttribute("data-filter") === "all") {
        this.style.background = "var(--secondary)";
        this.style.color = "#fff";
        this.style.border = "none";
      }

      // الفلترة
      const filterValue = this.getAttribute("data-filter");
      projectItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
