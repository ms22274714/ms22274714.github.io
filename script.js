(function () {
  "use strict";

  const translations = {
    en: {
      metaTitle: "Zhenhua Xue — After Effects Script Developer",
      metaDescription: "Portfolio of Zhenhua Xue, an independent After Effects script developer building workflow automation tools for motion designers.",
      metaKeywords: "After Effects scripts, ExtendScript, ScriptUI, workflow automation, motion design tools, Zhenhua Xue",
      metaOgDescription: "Practical workflow automation tools for Adobe After Effects.",
      skipToContent: "Skip to content",
      brandHomeLabel: "Zhenhua Xue, home",
      primaryNavigation: "Primary navigation",
      languageSelection: "Language selection",
      switchToEnglish: "Switch to English",
      switchToChinese: "Switch to Simplified Chinese",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      navAbout: "About",
      navTools: "AE Tools",
      navProcess: "Process",
      navContact: "Contact",
      heroEyebrow: "Independent tool developer",
      heroRole: "After Effects Script Developer",
      heroSpecialty: "Workflow Automation Tools for Motion Designers",
      heroDescription: "I build practical workflow automation tools for Adobe After Effects, focused on reducing repetitive work and improving production efficiency.",
      viewAeTools: "View AE Tools",
      contactMe: "Contact Me",
      coreTechnologies: "Core technologies",
      toolWindowLabel: "Stylized preview of an After Effects automation tool interface",
      activeComposition: "ACTIVE COMPOSITION",
      ready: "READY",
      previewOne: "PREVIEW 01",
      processingQueue: "PROCESSING QUEUE",
      threeItems: "3 items",
      buildPreviewBlock: "Build preview block",
      done: "Done",
      applyLayerSettings: "Apply layer settings",
      running: "Running",
      prepareOutput: "Prepare output",
      waiting: "Waiting",
      clear: "Clear",
      runQueue: "Run Queue",
      aboutIndex: "01 / About",
      aboutTitle: "About Me",
      aboutLead: "I am an independent developer focused on creating scripts, utilities, and workflow automation tools for Adobe After Effects.",
      aboutBodyOne: "My work focuses on solving repetitive production problems, simplifying complex workflows, and building practical tools for motion designers, editors, and content creators.",
      aboutBodyTwo: "I am especially interested in automation, ScriptUI interfaces, layer management, composition workflows, and procedural content generation.",
      toolsIndex: "02 / Selected Work",
      toolsTitle: "Featured After Effects Tools",
      toolsSubtitle: "A selection of scripts and workflow tools I have developed for Adobe After Effects.",
      statusInDevelopment: "In Development",
      statusPrototype: "Prototype",
      statusOngoing: "Ongoing Development",
      interfacePreview: "Interface Preview",
      aeToolScreenshot: "AE Tool Screenshot",
      demoVideo: "Demo Video",
      demoComingSoon: "Demo Coming Soon",
      viewDetails: "View Details",
      mainFeatures: "Main Features",
      technologies: "Technologies",
      developmentNotes: "Development Notes",
      fullDescription: "Full Description",
      p1Kicker: "Queue & Preview Automation",
      p1Description: "An After Effects workflow automation tool designed to generate preview blocks and manage queued processing operations.",
      p1Feature1: "Automated preview block generation",
      p1Feature2: "Queue-based task processing",
      p1Feature3: "Composition and layer automation",
      p1Feature4: "Preview workflow management",
      p1Feature5: "Repetitive operation reduction",
      p1Feature6: "Improved production efficiency",
      p1Notes: "Designed to improve workflows where multiple preview elements need to be generated and processed in sequence.",
      p1ImageAlt: "Preview Queue Manager interface screenshot",
      p1VideoLabel: "Preview Queue Manager demo video",
      p2Kicker: "Procedural Content",
      p2Description: "A procedural shape generation utility for After Effects that automates shape creation and visual property assignment.",
      p2Feature1: "Automated shape creation",
      p2Feature2: "Randomized visual properties",
      p2Feature3: "Parameter-based controls",
      p2Feature4: "Batch generation",
      p2Feature5: "Color variation",
      p2Feature6: "Layer automation",
      p2Notes: "Explores flexible parameter controls for generating varied shape-layer systems while keeping results editable.",
      p2ImageAlt: "Procedural Shape Generator interface screenshot",
      p2VideoLabel: "Procedural Shape Generator demo video",
      p3Kicker: "Everyday Productivity",
      p3Description: "A collection of small productivity tools designed to reduce repetitive operations inside After Effects.",
      p3Feature1: "Layer management",
      p3Feature2: "Composition automation",
      p3Feature3: "Batch operations",
      p3Feature4: "Workflow shortcuts",
      p3Feature5: "Repetitive task automation",
      p3Notes: "Built as an evolving utility set, with each tool focused on one clear production bottleneck.",
      p3ImageAlt: "AE Workflow Utilities interface screenshot",
      p3VideoLabel: "AE Workflow Utilities demo video",
      demosIndex: "03 / In Action",
      demosTitle: "Tool Demos",
      demosSubtitle: "Short demonstrations of scripts running inside real After Effects workflows.",
      demo1Title: "Preview Automation",
      demo1VideoLabel: "Preview automation demo",
      demo2Title: "Procedural Generation",
      demo2VideoLabel: "Procedural generation demo",
      demo3Title: "Batch Workflow",
      demo3VideoLabel: "Batch workflow demo",
      focusIndex: "04 / Capabilities",
      focusTitle: "Development Focus",
      focusAreasLabel: "Development focus areas",
      focusWorkflowAutomation: "Workflow Automation",
      focusMotionDesignTools: "Motion Design Tools",
      focusCreativeSoftware: "Creative Software",
      focusProceduralGeneration: "Procedural Generation",
      focusBatchProcessing: "Batch Processing",
      focusUiDevelopment: "UI Tool Development",
      processIndex: "05 / Process",
      processTitle: "How I Build AE Tools",
      processStep1Title: "Identify Workflow Problems",
      processStep1Body: "Find repetitive or inefficient tasks inside After Effects.",
      processStep2Title: "Design Automation Logic",
      processStep2Body: "Create practical automation workflows and processing logic.",
      processStep3Title: "Build the Tool",
      processStep3Body: "Develop scripts, interfaces, and workflow controls.",
      processStep4Title: "Test in Production",
      processStep4Body: "Test tools in real production scenarios and refine usability.",
      developmentIndex: "06 / Roadmap",
      developmentTitle: "Products in Development",
      developmentBodyOne: "I am currently developing commercial After Effects tools for motion designers, editors, and content creators.",
      developmentBodyTwo: "My goal is to build tools that are practical, lightweight, easy to understand, and useful in real production workflows.",
      moreToolsSoon: "More tools coming soon.",
      contactIndex: "07 / Contact",
      contactTitle: "Contact",
      contactStatement: "Let’s build better AE workflows.",
      sendEmail: "Send Email",
      footerRole: "Independent After Effects Tool Developer",
      backToTop: "Back to top",
      closeProjectDetails: "Close project details",
      interfaceScreenshotSuffix: "interface screenshot",
      demoVideoSuffix: "demo video"
    },
    zh: {
      metaTitle: "Zhenhua Xue — After Effects 脚本开发者",
      metaDescription: "Zhenhua Xue 的个人作品集，专注于为动态设计师开发 After Effects 脚本与工作流自动化工具。",
      metaKeywords: "After Effects 脚本, ExtendScript, ScriptUI, 工作流自动化, 动态设计工具, Zhenhua Xue",
      metaOgDescription: "面向 Adobe After Effects 的实用工作流自动化工具。",
      skipToContent: "跳至主要内容",
      brandHomeLabel: "Zhenhua Xue，返回首页",
      primaryNavigation: "主导航",
      languageSelection: "语言选择",
      switchToEnglish: "切换到英文",
      switchToChinese: "切换到简体中文",
      openNavigation: "打开导航",
      closeNavigation: "关闭导航",
      navAbout: "关于我",
      navTools: "AE 工具",
      navProcess: "开发流程",
      navContact: "联系",
      heroEyebrow: "独立工具开发者",
      heroRole: "After Effects 脚本开发者",
      heroSpecialty: "为动态设计师打造工作流自动化工具",
      heroDescription: "我专注于为 Adobe After Effects 开发实用的工作流自动化工具，减少重复操作，提升实际制作效率。",
      viewAeTools: "查看 AE 工具",
      contactMe: "联系我",
      coreTechnologies: "核心技术",
      toolWindowLabel: "After Effects 自动化工具界面示意",
      activeComposition: "当前合成",
      ready: "就绪",
      previewOne: "预览 01",
      processingQueue: "处理队列",
      threeItems: "3 个任务",
      buildPreviewBlock: "生成预览区块",
      done: "已完成",
      applyLayerSettings: "应用图层设置",
      running: "处理中",
      prepareOutput: "准备输出",
      waiting: "等待中",
      clear: "清空",
      runQueue: "运行队列",
      aboutIndex: "01 / 关于",
      aboutTitle: "关于我",
      aboutLead: "我是一名独立开发者，专注于为 Adobe After Effects 创建脚本、实用工具和工作流自动化方案。",
      aboutBodyOne: "我的工作重点是解决制作中的重复操作、简化复杂流程，并为动态设计师、剪辑师和内容创作者打造真正实用的工具。",
      aboutBodyTwo: "我尤其关注自动化、ScriptUI 界面、图层管理、合成工作流和程序化内容生成。",
      toolsIndex: "02 / 精选作品",
      toolsTitle: "精选 After Effects 工具",
      toolsSubtitle: "以下是我为 Adobe After Effects 开发的部分脚本与工作流工具。",
      statusInDevelopment: "开发中",
      statusPrototype: "原型阶段",
      statusOngoing: "持续开发中",
      interfacePreview: "界面预览",
      aeToolScreenshot: "AE 工具截图",
      demoVideo: "演示视频",
      demoComingSoon: "演示即将上线",
      viewDetails: "查看详情",
      mainFeatures: "主要功能",
      technologies: "开发技术",
      developmentNotes: "开发说明",
      fullDescription: "详细介绍",
      p1Kicker: "队列与预览自动化",
      p1Description: "一款面向 After Effects 的工作流自动化工具，用于生成预览区块并管理队列化处理任务。",
      p1Feature1: "自动生成预览区块",
      p1Feature2: "基于队列的任务处理",
      p1Feature3: "合成与图层自动化",
      p1Feature4: "预览工作流管理",
      p1Feature5: "减少重复操作",
      p1Feature6: "提升制作效率",
      p1Notes: "适用于需要连续生成并依次处理多个预览元素的工作流，重点提升批量任务的执行效率。",
      p1ImageAlt: "Preview Queue Manager 界面截图",
      p1VideoLabel: "Preview Queue Manager 演示视频",
      p2Kicker: "程序化内容生成",
      p2Description: "一款 After Effects 程序化形状生成工具，可自动创建形状并分配视觉属性。",
      p2Feature1: "自动创建形状",
      p2Feature2: "随机化视觉属性",
      p2Feature3: "参数化控制",
      p2Feature4: "批量生成",
      p2Feature5: "颜色变化",
      p2Feature6: "图层自动化",
      p2Notes: "通过灵活的参数控制快速生成多样化的形状图层系统，同时保持结果可编辑。",
      p2ImageAlt: "Procedural Shape Generator 界面截图",
      p2VideoLabel: "Procedural Shape Generator 演示视频",
      p3Kicker: "日常效率工具",
      p3Description: "一组用于减少 After Effects 内重复操作的小型效率工具。",
      p3Feature1: "图层管理",
      p3Feature2: "合成自动化",
      p3Feature3: "批量操作",
      p3Feature4: "工作流快捷操作",
      p3Feature5: "重复任务自动化",
      p3Notes: "持续扩展的实用工具集合，每个工具都聚焦于一个明确的制作流程瓶颈。",
      p3ImageAlt: "AE Workflow Utilities 界面截图",
      p3VideoLabel: "AE Workflow Utilities 演示视频",
      demosIndex: "03 / 工具演示",
      demosTitle: "工具演示",
      demosSubtitle: "展示脚本在真实 After Effects 工作流中的运行过程。",
      demo1Title: "预览自动化",
      demo1VideoLabel: "预览自动化演示",
      demo2Title: "程序化生成",
      demo2VideoLabel: "程序化生成演示",
      demo3Title: "批量工作流",
      demo3VideoLabel: "批量工作流演示",
      focusIndex: "04 / 开发方向",
      focusTitle: "开发重点",
      focusAreasLabel: "开发重点领域",
      focusWorkflowAutomation: "工作流自动化",
      focusMotionDesignTools: "动态设计工具",
      focusCreativeSoftware: "创意软件",
      focusProceduralGeneration: "程序化生成",
      focusBatchProcessing: "批量处理",
      focusUiDevelopment: "工具界面开发",
      processIndex: "05 / 开发流程",
      processTitle: "我的 AE 工具开发流程",
      processStep1Title: "定位工作流问题",
      processStep1Body: "找出 After Effects 中重复、低效或容易出错的操作。",
      processStep2Title: "设计自动化逻辑",
      processStep2Body: "规划实用的自动化流程与任务处理逻辑。",
      processStep3Title: "开发工具",
      processStep3Body: "编写脚本、界面和工作流控制功能。",
      processStep4Title: "投入制作测试",
      processStep4Body: "在真实制作场景中测试工具，并持续优化易用性。",
      developmentIndex: "06 / 开发计划",
      developmentTitle: "正在开发的产品",
      developmentBodyOne: "我目前正在为动态设计师、剪辑师和内容创作者开发商业化 After Effects 工具。",
      developmentBodyTwo: "我的目标是打造实用、轻量、易于理解，并能真正服务于制作流程的工具。",
      moreToolsSoon: "更多工具即将发布。",
      contactIndex: "07 / 联系",
      contactTitle: "联系我",
      contactStatement: "一起打造更高效的 AE 工作流。",
      sendEmail: "发送邮件",
      footerRole: "独立 After Effects 工具开发者",
      backToTop: "返回顶部",
      closeProjectDetails: "关闭项目详情",
      interfaceScreenshotSuffix: "界面截图",
      demoVideoSuffix: "演示视频"
    }
  };

  const STORAGE_KEY = "language";
  const supportedLanguages = ["en", "zh"];
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const languageButtons = document.querySelectorAll(".language-option");
  const modal = document.getElementById("tool-modal");
  const modalDialog = modal.querySelector(".modal-dialog");
  const modalClose = modal.querySelector(".modal-close");
  let currentLanguage = "en";
  let currentModalCard = null;
  let lastFocusedElement = null;

  document.body.classList.add("motion-ready");

  function getSavedLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      return supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
    } catch (error) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // The language still changes for this session if storage is unavailable.
    }
  }

  function translate(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
  }

  function updateNavToggleLabel() {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", translate(isOpen ? "closeNavigation" : "openNavigation"));
  }

  function updateLanguageButtons() {
    languageButtons.forEach(function (button) {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyTranslations(language, shouldSave) {
    currentLanguage = supportedLanguages.includes(language) ? language : "en";
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.body.dataset.language = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (element) {
      element.setAttribute("content", translate(element.dataset.i18nContent));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
      element.setAttribute("alt", translate(element.dataset.i18nAlt));
    });

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", currentLanguage === "zh" ? "zh_CN" : "en_US");

    updateLanguageButtons();
    updateNavToggleLabel();

    if (currentModalCard && !modal.hidden) populateModal(currentModalCard, false);
    if (shouldSave) saveLanguage(currentLanguage);
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyTranslations(button.dataset.language, true);
    });
  });

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    updateNavToggleLabel();
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      updateNavToggleLabel();
    });
  });

  function showMedia(media) {
    media.hidden = false;
    media.closest(".media-frame").classList.add("is-ready");
  }

  function hideMedia(media) {
    media.hidden = true;
    media.closest(".media-frame").classList.remove("is-ready");
  }

  function initializeImage(image) {
    image.addEventListener("load", function () { showMedia(image); });
    image.addEventListener("error", function () { hideMedia(image); });
    if (image.complete) {
      if (image.naturalWidth > 0) showMedia(image);
      else hideMedia(image);
    }
  }

  function initializeVideo(video) {
    video.addEventListener("loadedmetadata", function () { showMedia(video); });
    video.addEventListener("error", function () { hideMedia(video); });
    const source = video.querySelector("source");
    if (source) source.addEventListener("error", function () { hideMedia(video); });
    video.load();
  }

  document.querySelectorAll(".js-media-image").forEach(initializeImage);
  document.querySelectorAll(".js-media-video").forEach(initializeVideo);

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px" });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  function textFrom(element, selector) {
    const match = element.querySelector(selector);
    return match ? match.textContent.trim() : "";
  }

  function sourceFrom(element, mediaSelector) {
    const media = element.querySelector(mediaSelector);
    if (!media) return "";
    const source = media.querySelector("source");
    return source ? source.getAttribute("src") : media.getAttribute("src");
  }

  function fillList(target, sourceItems) {
    target.innerHTML = "";
    sourceItems.forEach(function (item) {
      const clone = document.createElement(item.tagName.toLowerCase());
      clone.textContent = item.textContent.trim();
      target.appendChild(clone);
    });
  }

  function populateModal(card, updateMedia) {
    const projectTitle = textFrom(card, ".project-intro h3");
    const sourceStatus = card.querySelector(".status-badge");

    document.getElementById("modal-kicker").textContent = textFrom(card, ".project-kicker");
    document.getElementById("modal-title").textContent = projectTitle;
    document.getElementById("modal-description").textContent = textFrom(card, ".project-description");
    document.getElementById("modal-notes").textContent = textFrom(card, ".development-note p");

    const modalStatus = document.getElementById("modal-status");
    modalStatus.textContent = sourceStatus.textContent.trim();
    modalStatus.className = sourceStatus.className;

    fillList(document.getElementById("modal-features"), card.querySelectorAll(".feature-list li"));
    fillList(document.getElementById("modal-technologies"), card.querySelectorAll(".tag-list span"));

    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    modalImage.alt = projectTitle + " " + translate("interfaceScreenshotSuffix");
    modalVideo.setAttribute("aria-label", projectTitle + " " + translate("demoVideoSuffix"));

    if (!updateMedia) return;

    const imagePath = sourceFrom(card, ".js-media-image");
    const videoPath = sourceFrom(card, ".js-media-video");
    const modalVideoSource = document.getElementById("modal-video-source");
    hideMedia(modalImage);
    hideMedia(modalVideo);
    modalImage.src = imagePath;
    modalVideoSource.src = videoPath;
    document.getElementById("modal-image-path").textContent = imagePath;
    document.getElementById("modal-video-path").textContent = videoPath;
    initializeImage(modalImage);
    initializeVideo(modalVideo);
  }

  function openModal(card) {
    lastFocusedElement = document.activeElement;
    currentModalCard = card;
    populateModal(card, true);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(function () { modalClose.focus(); });
  }

  function closeModal() {
    const modalVideo = document.getElementById("modal-video");
    modalVideo.pause();
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    currentModalCard = null;
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  document.querySelectorAll(".view-details").forEach(function (button) {
    button.addEventListener("click", function () { openModal(button.closest(".project-card")); });
  });

  modal.querySelectorAll("[data-close-modal]").forEach(function (control) {
    control.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeModal();
    if (event.key === "Tab" && !modal.hidden) {
      const focusable = modalDialog.querySelectorAll("button, a[href], video[controls], [tabindex]:not([tabindex='-1'])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  applyTranslations(getSavedLanguage(), false);
})();
