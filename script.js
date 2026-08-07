(function () {
  "use strict";

  document.body.classList.add("motion-ready");

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");
  const modal = document.getElementById("tool-modal");
  const modalDialog = modal.querySelector(".modal-dialog");
  const modalClose = modal.querySelector(".modal-close");
  let lastFocusedElement = null;

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
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

  function openModal(card) {
    lastFocusedElement = document.activeElement;
    const imagePath = sourceFrom(card, ".js-media-image");
    const videoPath = sourceFrom(card, ".js-media-video");
    const sourceStatus = card.querySelector(".status-badge");

    document.getElementById("modal-kicker").textContent = textFrom(card, ".project-kicker");
    document.getElementById("modal-title").textContent = textFrom(card, ".project-intro h3");
    document.getElementById("modal-description").textContent = textFrom(card, ".project-description");
    document.getElementById("modal-notes").textContent = textFrom(card, ".development-note p");

    const modalStatus = document.getElementById("modal-status");
    modalStatus.textContent = sourceStatus.textContent.trim();
    modalStatus.className = sourceStatus.className;

    fillList(document.getElementById("modal-features"), card.querySelectorAll(".feature-list li"));
    fillList(document.getElementById("modal-technologies"), card.querySelectorAll(".tag-list span"));

    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    const modalVideoSource = document.getElementById("modal-video-source");
    hideMedia(modalImage);
    hideMedia(modalVideo);
    modalImage.alt = textFrom(card, ".project-intro h3") + " interface screenshot";
    modalImage.src = imagePath;
    modalVideo.setAttribute("aria-label", textFrom(card, ".project-intro h3") + " demo video");
    modalVideoSource.src = videoPath;
    document.getElementById("modal-image-path").textContent = imagePath;
    document.getElementById("modal-video-path").textContent = videoPath;

    modal.hidden = false;
    document.body.classList.add("modal-open");
    initializeImage(modalImage);
    initializeVideo(modalVideo);
    requestAnimationFrame(function () { modalClose.focus(); });
  }

  function closeModal() {
    const modalVideo = document.getElementById("modal-video");
    modalVideo.pause();
    modal.hidden = true;
    document.body.classList.remove("modal-open");
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
})();
