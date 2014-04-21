
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.$node = $('<span class="dancer"></span>');

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({
    top: top,
    left: left
  });
};
