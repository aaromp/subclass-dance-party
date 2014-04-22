var StarDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  var properties = _.zip(this.colors, this.borderSize, this.gravity);
  var index = Math.floor(Math.random()*properties.length);
  this._color = properties[index][0];
  this._borderSize = properties[index][1];
  this._gravity = properties[index][2];
  this.setColor();
};

StarDancer.prototype = Object.create(BlinkyDancer.prototype);

StarDancer.prototype.constructor =  StarDancer;

StarDancer.prototype.colors = ["white", "yellow", "orange", "red"];

StarDancer.prototype.borderSize = ["small", "medium", "large", "giant"];
StarDancer.prototype.gravity = [1000, 10000, 100000, 100000];

StarDancer.prototype.setColor = function() {
    this.$node.addClass(this._color);
    this.$node.addClass(this._borderSize);
};
