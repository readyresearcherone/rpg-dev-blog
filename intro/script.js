
(function() {

  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

function openHelp() {
  document.getElementById("land").style.width = "100%";
}

function closeHelp() {
  document.getElementById("land").style.width = "0%";
}

function show_float(){
  document.getElementById("scroll_top").style.visibility = "visible";
};

window.onscroll = function() {
  var distanceScrolled = document.documentElement.scrollTop;
  if (distanceScrolled > 258) {
    document.getElementById("scroll_top").style.visibility = "visible";
  } else {
    document.getElementById("scroll_top").style.visibility = "hidden";
  }
}
  



