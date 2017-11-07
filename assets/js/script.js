window.addEventListener('load', function() {
	var carousels = document.getElementsByClassName('word-carousel');
	var i;
	for (i = 0; i < carousels.length; i++) {
		animateText(carousels[i], 5000);
	}
});

function animateText(element, duration) {
  var strings = element.getAttribute("data-words").replace(" ", "").split(",");
  strings.push(element.innerHTML);
  var i = 0;
  window.setInterval(function() {
    if (i == strings.length) {
      i = 0;
    }
    rewriteText(element, strings[i++]);
  }, duration);
}

function rewriteText(element, text) {
  var original = element.innerHTML;
  var i = 0;
  var max = Math.max(original.length, text.length);
  var interval = window.setInterval(function() {
    if (i > max) {
      window.clearInterval(interval);
    } else {
      element.innerHTML = text.substring(0, i++) + original.substring(i);
    }
  }, 50);
}
