(function () {
  var site = window.SITE;
  var places = window.PLACES || [];
  var lang = document.body.getAttribute("data-lang") === "en" ? "en" : "he";
  var he = lang === "he";

  function timeText(place) {
    if (he && place.timeHe) return place.timeHe;
    if (!he && place.timeEn) return place.timeEn;
    if (place.minutes == null) return he ? "במושב" : "In the moshav";
    return he ? "כ-" + place.minutes + " דקות נסיעה" : "About " + place.minutes + " min drive";
  }

  function renderPlaces() {
    var root = document.getElementById("place-list");
    if (!root) return;
    var groups = [];
    var seen = Object.create(null);
    places.forEach(function (place) {
      if (!seen[place.category]) {
        seen[place.category] = { title: he ? place.category : place.categoryEn, items: [] };
        groups.push(seen[place.category]);
      }
      seen[place.category].items.push(place);
    });
    var frag = document.createDocumentFragment();
    groups.forEach(function (group) {
      var section = document.createElement("section");
      section.className = "place-group";
      var h = document.createElement("h3");
      h.textContent = group.title;
      var ul = document.createElement("ul");
      ul.className = "place-list";
      group.items.forEach(function (place) {
        var li = document.createElement("li");
        var article = document.createElement("article");
        article.className = place.warning ? "place place-warn" : "place";
        var h4 = document.createElement("h4");
        h4.textContent = he ? place.name : place.nameEn;
        var time = document.createElement("p");
        time.className = "time";
        time.textContent = timeText(place);
        var summary = document.createElement("p");
        summary.textContent = he ? place.he : place.en;
        article.appendChild(h4);
        article.appendChild(time);
        article.appendChild(summary);
        var note = he ? place.noteHe : place.noteEn;
        if (note) {
          var noteP = document.createElement("p");
          noteP.className = "note";
          noteP.textContent = note;
          article.appendChild(noteP);
        }
        li.appendChild(article);
        ul.appendChild(li);
      });
      section.appendChild(h);
      section.appendChild(ul);
      frag.appendChild(section);
    });
    root.textContent = "";
    root.appendChild(frag);
  }

  function mapUrls() {
    var coords = site.cabinCoordinates;
    if (coords && typeof coords.lat === "number" && typeof coords.lng === "number") {
      var ll = coords.lat + "," + coords.lng;
      return {
        waze: "https://waze.com/ul?ll=" + ll + "&navigate=yes",
        google: "https://www.google.com/maps/search/?api=1&query=" + ll,
        embed: "https://maps.google.com/maps?q=" + ll + "&z=16&output=embed&hl=" + (he ? "he" : "en")
      };
    }
    var q = encodeURIComponent(he ? site.placeQuery : site.placeQueryEn);
    return {
      waze: "https://waze.com/ul?q=" + q + "&navigate=yes",
      google: "https://www.google.com/maps/search/?api=1&query=" + q,
      embed: "https://maps.google.com/maps?q=" + q + "&z=13&output=embed&hl=" + (he ? "he" : "en")
    };
  }

  function applyMaps() {
    var urls = mapUrls();
    document.querySelectorAll("[data-map='waze']").forEach(function (el) { el.href = urls.waze; });
    document.querySelectorAll("[data-map='google']").forEach(function (el) { el.href = urls.google; });
    var frame = document.getElementById("map-frame");
    if (frame) frame.src = urls.embed;
  }

  function readForm() {
    function val(id) {
      var el = document.getElementById(id);
      return el ? String(el.value || "").trim() : "";
    }
    var arrival = val("arrival");
    var departure = val("departure");
    var dates = [arrival, departure].filter(Boolean).join(" – ");
    var kids = val("children");
    var ages = val("ages");
    var kidsLine = kids;
    if (kids && ages) kidsLine = he ? (kids + " ילדים, גילאים: " + ages) : (kids + " children, ages: " + ages);
    else if (ages) kidsLine = ages;
    return {
      cabin: val("cabin"),
      dates: dates,
      adults: val("adults"),
      kids: kidsLine,
      miluim: val("miluim")
    };
  }

  function messageFrom(values) {
    if (!he) {
      return [
        "Hello Dan, we are interested in Tzadik Katamar cabins in Moshav Nov.",
        "One cabin or both: " + (values.cabin || ""),
        "Dates: " + (values.dates || ""),
        "Adults: " + (values.adults || ""),
        "Children and ages: " + (values.kids || ""),
        "Miluim voucher: " + (values.miluim || "yes/no")
      ].join("\n");
    }
    return [
      "שלום דן, מתעניינים בבקתות צדיק כתמר בנוב.",
      "בקתה אחת או שתיהן: " + (values.cabin || ""),
      "תאריכים: " + (values.dates || ""),
      "מספר מבוגרים: " + (values.adults || ""),
      "מספר ילדים וגילאים: " + (values.kids || ""),
      "שובר מילואים: " + (values.miluim || "כן/לא")
    ].join("\n");
  }

  function waHref(values) {
    return "https://wa.me/" + site.phoneWa + "?text=" + encodeURIComponent(messageFrom(values || readForm()));
  }

  function refreshWaLinks() {
    var href = waHref(readForm());
    document.querySelectorAll("[data-wa]").forEach(function (el) { el.href = href; });
  }

  function wireForm() {
    var form = document.getElementById("inquiry");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.open(waHref(readForm()), "_blank", "noopener");
    });
    form.addEventListener("input", refreshWaLinks);
    form.addEventListener("change", refreshWaLinks);
  }

  function wireTextSize() {
    var button = document.getElementById("text-boost");
    if (!button) return;
    var key = "tzadik-large-text";
    function apply(on) {
      document.documentElement.classList.toggle("text-lg", on);
      button.setAttribute("aria-pressed", on ? "true" : "false");
    }
    var stored = false;
    try { stored = localStorage.getItem(key) === "1"; } catch (e) { stored = false; }
    apply(stored);
    button.addEventListener("click", function () {
      var on = button.getAttribute("aria-pressed") !== "true";
      apply(on);
      try { localStorage.setItem(key, on ? "1" : "0"); } catch (e) {}
    });
  }

  function wireLightbox() {
    var dialog = document.getElementById("lightbox");
    var img = document.getElementById("lb-img");
    var cap = document.getElementById("lb-cap");
    if (!dialog || !img) return;
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".js-photo"));
    var index = 0;

    function show(i) {
      if (!buttons.length) return;
      index = (i + buttons.length) % buttons.length;
      var source = buttons[index].querySelector("img");
      img.src = source.currentSrc || source.src;
      img.alt = source.alt || "";
      if (cap) cap.textContent = source.alt || "";
    }

    buttons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        show(i);
        if (typeof dialog.showModal === "function") dialog.showModal();
        else window.open(img.src, "_blank", "noopener");
      });
    });

    var closeBtn = document.getElementById("lb-close");
    var prev = document.getElementById("lb-prev");
    var next = document.getElementById("lb-next");
    if (closeBtn) closeBtn.addEventListener("click", function () { dialog.close(); });
    if (prev) prev.addEventListener("click", function () { show(index - 1); });
    if (next) next.addEventListener("click", function () { show(index + 1); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); show(he ? index - 1 : index + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); show(he ? index + 1 : index - 1); }
    });
  }

  function wireMenu() {
    var menu = document.getElementById("section-menu");
    if (!menu) return;
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { menu.removeAttribute("open"); });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  renderPlaces();
  applyMaps();
  refreshWaLinks();
  wireForm();
  wireTextSize();
  wireLightbox();
  wireMenu();
})();
