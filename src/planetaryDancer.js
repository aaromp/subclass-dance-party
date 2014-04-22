var PlanetaryDancer = function(top, left, timeBetweenSteps, speed, direction, rotateSpeed) {
  Dancer.call(this, top, left, timeBetweenSteps, speed, direction);
  this._rotateSpeed = rotateSpeed;
  this.$node.addClass('planet');
};

PlanetaryDancer.prototype = Object.create(Dancer.prototype);

PlanetaryDancer.prototype.constructor =  PlanetaryDancer;

PlanetaryDancer.prototype.oldStep = Dancer.prototype.step;

PlanetaryDancer.prototype.rotate = function() {
  // Placeholder
  return this._rotateSpeed;
};

PlanetaryDancer.prototype.step = function() {
  this.oldStep();
  this.rotate();
};
