// Builds the contact link in the browser so the address is never written out in the page's HTML.
(function () {
  var user = ["wrinkly", "brain", "studio"].join("");
  var host = ["icloud", "com"].join(".");
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var address = user + "@" + host;
    var link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    el.replaceChildren(link);
  });
})();
