/* Floating accessibility menu. Preferences stay in this browser only. */
(function () {
  "use strict";

  var he = (document.documentElement.lang || "he").toLowerCase().indexOf("en") !== 0;
  var t = he
    ? {
        open: "נגישות",
        title: "אפשרויות נגישות",
        close: "סגירה",
        reset: "איפוס",
        font: "גודל טקסט",
        small: "קטן",
        normal: "רגיל",
        large: "גדול",
        xl: "גדול מאוד",
        contrast: "ניגודיות",
        cNormal: "רגיל",
        cHigh: "גבוהה",
        cDark: "כהה",
        links: "הדגשת קישורים",
        motion: "עצירת אנימציות",
        statement: "הצהרת נגישות"
      }
    : {
        open: "Accessibility",
        title: "Accessibility options",
        close: "Close",
        reset: "Reset",
        font: "Text size",
        small: "Small",
        normal: "Normal",
        large: "Large",
        xl: "Very large",
        contrast: "Contrast",
        cNormal: "Normal",
        cHigh: "High",
        cDark: "Dark",
        links: "Highlight links",
        motion: "Stop animations",
        statement: "Accessibility statement"
      };

  var key = "a11y_tzadik_v4";
  var defaults = { font: "normal", contrast: "normal", links: false, motion: false };
  var state = Object.assign({}, defaults);

  try {
    var saved = JSON.parse(localStorage.getItem(key) || "{}");
    if (saved && typeof saved === "object") state = Object.assign({}, defaults, saved);
  } catch (e) {}

  var root = document.documentElement;

  function persist() {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) {}
  }

  function apply() {
    root.classList.remove("a11y-fs-sm", "a11y-fs-lg", "a11y-fs-xl");
    if (state.font === "small") root.classList.add("a11y-fs-sm");
    if (state.font === "large") root.classList.add("a11y-fs-lg");
    if (state.font === "xl") root.classList.add("a11y-fs-xl");

    root.classList.remove("a11y-contrast-high", "a11y-contrast-dark");
    if (state.contrast === "high") root.classList.add("a11y-contrast-high");
    if (state.contrast === "dark") root.classList.add("a11y-contrast-dark");

    root.classList.toggle("a11y-links", !!state.links);
    root.classList.toggle("a11y-noanim", !!state.motion);
    persist();
    sync();
  }

  var btn = document.createElement("button");
  btn.type = "button";
  btn.id = "a11y-btn";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "a11y-panel");
  btn.setAttribute("aria-label", t.open);
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="4.5" r="1.7"></circle><path d="M4 9h16M12 8.2V14M12 14l-3.2 6.2M12 14l3.2 6.2"></path></svg>' +
    '<span class="a11y-btn-label">' + t.open + "</span>";

  var panel = document.createElement("div");
  panel.id = "a11y-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", t.title);
  panel.setAttribute("aria-hidden", "true");
  panel.hidden = true;

  function option(group, value, label) {
    return '<button type="button" class="a11y-opt" data-group="' + group + '" data-value="' + value + '" aria-pressed="false">' + label + "</button>";
  }

  var statementHref = he ? "#accessibility" : "index.html#accessibility";

  panel.innerHTML =
    '<div class="a11y-head"><h2>' + t.title + '</h2><div class="a11y-head-actions">' +
    '<button type="button" id="a11y-reset">' + t.reset + "</button>" +
    '<button type="button" id="a11y-close" aria-label="' + t.close + '">×</button></div></div>' +
    '<div class="a11y-body">' +
    '<fieldset><legend>' + t.font + "</legend><div class=\"a11y-opts\">" +
    option("font", "small", t.small) + option("font", "normal", t.normal) +
    option("font", "large", t.large) + option("font", "xl", t.xl) +
    "</div></fieldset>" +
    '<fieldset><legend>' + t.contrast + "</legend><div class=\"a11y-opts\">" +
    option("contrast", "normal", t.cNormal) + option("contrast", "high", t.cHigh) +
    option("contrast", "dark", t.cDark) +
    "</div></fieldset>" +
    '<label class="a11y-check"><input type="checkbox" id="a11y-links"> ' + t.links + "</label>" +
    '<label class="a11y-check"><input type="checkbox" id="a11y-motion"> ' + t.motion + "</label>" +
    '<a class="a11y-statement" href="' + statementHref + '">' + t.statement + "</a>" +
    "</div>";

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  var linksBox = panel.querySelector("#a11y-links");
  var motionBox = panel.querySelector("#a11y-motion");

  function sync() {
    panel.querySelectorAll(".a11y-opt").forEach(function (el) {
      var on = state[el.getAttribute("data-group")] === el.getAttribute("data-value");
      el.classList.toggle("is-on", on);
      el.setAttribute("aria-pressed", on ? "true" : "false");
    });
    linksBox.checked = !!state.links;
    motionBox.checked = !!state.motion;
  }

  function setOpen(open) {
    panel.hidden = !open;
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var close = panel.querySelector("#a11y-close");
      if (close) close.focus();
    }
  }

  btn.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  panel.addEventListener("click", function (event) {
    var opt = event.target.closest(".a11y-opt");
    if (opt) {
      state[opt.getAttribute("data-group")] = opt.getAttribute("data-value");
      apply();
      return;
    }
    if (event.target.id === "a11y-close") {
      setOpen(false);
      btn.focus();
    }
    if (event.target.id === "a11y-reset") {
      state = Object.assign({}, defaults);
      apply();
    }
  });

  linksBox.addEventListener("change", function () {
    state.links = linksBox.checked;
    apply();
  });
  motionBox.addEventListener("change", function () {
    state.motion = motionBox.checked;
    apply();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener("mousedown", function (event) {
    if (panel.hidden) return;
    if (!panel.contains(event.target) && !btn.contains(event.target)) setOpen(false);
  });

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    try {
      if (!localStorage.getItem(key)) state.motion = true;
    } catch (e) { state.motion = true; }
  }

  apply();
})();
