var Dancer = function(top, left, timeBetweenSteps, speed, direction) {
  this.top = top;
  this.left = left;
  this._speed = speed;
  this._direction = direction;
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this._mass = null;

  var windowHeight = $("body").height();
  var windowWidth = $("body").width();
};


Dancer.prototype.step = function() {
  if (this.left + this.$node[0].clientLeft > $("body").width() ||
      this.left - this.$node[0].clientLeft < 0) {
    this._direction = (3*Math.PI - this._direction) % (2 * Math.PI);
  }
  if (this.top + this.$node[0].clientTop > $("body").height() ||
      this.top - this.$node[0].clientTop < $(".topbar").height()) {
    this._direction = (2*Math.PI - this._direction) % (2 * Math.PI);
  }

  this.top -= this._speed*Math.sin(this._direction);
  this.left += this._speed*Math.cos(this._direction);
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({
    top: top,
    left: left
  });
};
