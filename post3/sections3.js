let Rectangle = {
  area: function(width, height) {
    return width * height;
  },
  xMoment: function(width, height) {return 1.0/12 * width * height**3},
  yMoment: function(width, height) {return 1.0/12 * height * width**3},
}

let Circle = {
  area: function(radius) {
    return radius**2 * Math.PI;
  },
  xMoment: function(radius) { return Math.PI/4 * radius** 4 },
  yMoment: function(radius) { return Circle.xMoment(radius) }
}

let HollowCircle = {
  area: function(outerRadius, thickness) {
    return Math.PI*(outerRadius**2-(outerRadius-thickness)**2);
  },
  xMoment: function(outerRadius, thickness) {
    return Math.PI/4*(outerRadius**4-(outerRadius-thickness)**4);
  },
  yMoment: function(outerRadius, thickness) { return HollowCircle.xMoment(outerRadius, thickness)}
}

let HollowRectangle = {
  area: function(outerWidth, outerHeight, thickness) {
    return outerWidth*outerHeight - (( outerWidth-2*thickness )*(outerHeight-2*thickness));
  },
  xMoment: function(outerWidth, outerHeight, thickness) {
    return 1/12*((outerWidth*outerHeight**3)-((outerWidth-2*thickness)*(outerHeight-2*thickness)**3));
  },
  yMoment: function(outerWidth, outerHeight, thickness) {
    return 1/12*((outerHeight*outerWidth**3)-((outerHeight-2*thickness)*(outerWidth-2*thickness)**3));
  }
}
