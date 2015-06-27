jQuery.extend(jQuery.easing, {
  easeOutElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k) == 1) {
      return e + l
    }
    if (!j) {
      j = k * 0.3
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
  },
  easeOutBounce: function(e, f, a, h, g) {
    if ((f /= g) < (1 / 2.75)) {
      return h * (7.5625 * f * f) + a
    } else {
      if (f < (2 / 2.75)) {
        return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
      } else {
        if (f < (2.5 / 2.75)) {
          return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
        } else {
          return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
        }
      }
    }
  },
  easeOutQuart: function(e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a
  }
});
