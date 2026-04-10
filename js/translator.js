(function () {
  const translations = {
    en: {
      home: "Home",
      aboutUs: "About Us",
      products: "Products",
      productDetail: "Product Detail",
      contact: "Contact",
      getQuote: "Get Quote",
      getQuickQuote: "Get Quick Quote",
      viewProductRange: "View Product Range",
      heroEyebrow: "Trusted Polymer Solutions",
      heroTitle: "Premium Recycled Plastic Granules for Global Industries",
      heroSubtext: "20+ Years of Manufacturing Excellence | Sustainable Plastic Solutions | ISO Certified Production",
      statExperience: "Years Experience",
      statCapacity: "Tons Annual Capacity",
      statExport: "Countries Exported",
      statClients: "Clients Worldwide",
      productsEyebrow: "Our Product Range",
      productsTitle: "Plastic Granule Categories",
      learnMore: "Learn More",
      ppDesc: "Durable polypropylene granules for molding and injection applications.",
      hdpeDesc: "High-density material offering strength and chemical resistance.",
      ldpeDesc: "Flexible and lightweight granules ideal for films and packaging.",
      absDesc: "Engineering-grade granules for strong, impact-resistant products.",
      whyEyebrow: "Why Buyers Trust Us",
      whyTitle: "Why Choose Us",
      featureRecycle: "Sustainable Recycling Process",
      featureQuality: "Strict Quality Control",
      featurePricing: "Competitive Industrial Pricing",
      featureExport: "Global Export Network",
      applicationsEyebrow: "Industries We Serve",
      applicationsTitle: "Applications",
      appFurniture: "Furniture Industry",
      appPackaging: "Packaging",
      appAuto: "Automotive Parts",
      appMolding: "Plastic Moulding",
      companyOverview: "Company Overview",
      missionVision: "Mission & Vision",
      manufacturingTimeline: "Manufacturing Process Timeline",
      step1: "Collection & Sorting",
      step2: "Grinding & Washing",
      step3: "Melt Filtration & Extrusion",
      step4: "Quality Testing & Packaging",
      certifications: "Certifications",
      quickLinks: "Quick Links",
      getInTouch: "Get In Touch"
    },
    mr: {
      home: "मुख्यपृष्ठ",
      aboutUs: "आमच्याबद्दल",
      products: "उत्पादने",
      productDetail: "उत्पादन तपशील",
      contact: "संपर्क",
      getQuote: "कोटेशन घ्या",
      getQuickQuote: "जलद कोटेशन घ्या",
      viewProductRange: "उत्पादन श्रेणी पहा",
      heroEyebrow: "विश्वसनीय पॉलिमर सोल्यूशन्स",
      heroTitle: "जागतिक उद्योगांसाठी उच्च दर्जाचे पुनर्वापरित प्लास्टिक ग्रॅन्युल्स",
      heroSubtext: "20+ वर्षांचा उत्पादन अनुभव | शाश्वत प्लास्टिक उपाय | ISO प्रमाणित उत्पादन",
      statExperience: "वर्षांचा अनुभव",
      statCapacity: "टन वार्षिक क्षमता",
      statExport: "निर्यात देश",
      statClients: "जागतिक ग्राहक",
      productsEyebrow: "आमची उत्पादन श्रेणी",
      productsTitle: "प्लास्टिक ग्रॅन्युल्स प्रकार",
      learnMore: "अधिक जाणून घ्या",
      ppDesc: "मोल्डिंग आणि इंजेक्शन अनुप्रयोगांसाठी टिकाऊ पॉलीप्रॉपिलीन ग्रॅन्युल्स.",
      hdpeDesc: "उच्च घनतेचे, मजबूत आणि रासायनिक प्रतिकारक्षम मटेरियल.",
      ldpeDesc: "फिल्म आणि पॅकेजिंगसाठी लवचिक व हलके ग्रॅन्युल्स.",
      absDesc: "मजबूत आणि इम्पॅक्ट प्रतिरोधक उत्पादनांसाठी इंजिनियरिंग ग्रेड.",
      whyEyebrow: "खरेदीदारांचा विश्वास",
      whyTitle: "आम्हीच का?",
      featureRecycle: "शाश्वत पुनर्वापर प्रक्रिया",
      featureQuality: "कडक गुणवत्ता नियंत्रण",
      featurePricing: "स्पर्धात्मक औद्योगिक किंमत",
      featureExport: "जागतिक निर्यात नेटवर्क",
      applicationsEyebrow: "आम्ही सेवा देणारे उद्योग",
      applicationsTitle: "अनुप्रयोग",
      appFurniture: "फर्निचर उद्योग",
      appPackaging: "पॅकेजिंग",
      appAuto: "ऑटोमोटिव्ह भाग",
      appMolding: "प्लास्टिक मोल्डिंग",
      companyOverview: "कंपनी आढावा",
      missionVision: "ध्येय आणि दृष्टी",
      manufacturingTimeline: "उत्पादन प्रक्रिया वेळापत्रक",
      step1: "संकलन आणि वर्गीकरण",
      step2: "ग्राइंडिंग आणि धुलाई",
      step3: "मेल्ट फिल्ट्रेशन आणि एक्सट्रूजन",
      step4: "गुणवत्ता चाचणी आणि पॅकेजिंग",
      certifications: "प्रमाणपत्रे",
      quickLinks: "जलद दुवे",
      getInTouch: "संपर्क साधा"
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const enBtn = document.getElementById("lang-en");
    const mrBtn = document.getElementById("lang-mr");
    if (enBtn && mrBtn) {
      enBtn.classList.toggle("active", lang === "en");
      mrBtn.classList.toggle("active", lang === "mr");
    }
    localStorage.setItem("siteLanguage", lang);
  }

  function bindLanguageButtons() {
    const enBtn = document.getElementById("lang-en");
    const mrBtn = document.getElementById("lang-mr");
    if (!enBtn || !mrBtn) {
      return;
    }
    enBtn.addEventListener("click", function () {
      applyLanguage("en");
    });
    mrBtn.addEventListener("click", function () {
      applyLanguage("mr");
    });
  }

  function initTranslator() {
    bindLanguageButtons();
    const saved = localStorage.getItem("siteLanguage") || "en";
    applyLanguage(saved);
  }

  document.addEventListener("layoutReady", initTranslator);
})();
