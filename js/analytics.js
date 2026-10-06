(function (w, d) {
  function signature() {
    var nodes = d.querySelectorAll("*"), parts = [], i = 0;
    for (; i < nodes.length; i++) {
      parts.push(nodes[i].tagName + "." + nodes[i].className + "#" + nodes[i].id);
    }
    return parts.join("~");
  }

  function hash(s) {
    var h = 5381, i = 0;
    for (; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) | 0; }
    return h >>> 0;
  }

  function tick() {
    if (d.visibilityState === "hidden") { return; }
    if (w.innerWidth <= 1024) { return; }
    w.__au = { v: hash(signature()), n: (w.__au ? w.__au.n + 1 : 1) };
  }

  w.addEventListener("load", function () {
    w.setTimeout(function () { w.setInterval(tick, 2600); }, 6500);
  });
})(window, document);
