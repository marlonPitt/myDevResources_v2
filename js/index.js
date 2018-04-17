$(document).ready(function() {
  // fade out
  function fadeOut(el) {
    el.style.opacity = 1;

    $(function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
        el.classList.add("is-hidden");
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  // fade in
  function fadeIn(el, display) {
    if (el.classList.contains("is-hidden")) {
      el.classList.remove("is-hidden");
    }
    el.style.opacity = 0;
    el.style.display = display || "block";

    $(function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += 0.1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  var btn = document.querySelector(".left");
  var el = document.querySelector(".footer");

  
  
  
  btn.addEventListener("click", function(e) {
    if (el.classList.contains("is-hidden")) {
      fadeIn(el);
    } else {
      fadeOut(el);
    }
  });
  
  
});