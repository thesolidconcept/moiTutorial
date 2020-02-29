let Rectangle = {
  area: function(width, height) {
    return width * height;
  },
  xMoment: function(width, height) {return 1.0/12 * width * height**3},
  yMoment: function(width, height) {return 1.0/12 * height * width**3},
}

