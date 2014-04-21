var PlanetaryDancer = function(top, left, timeBetweenSteps, rotateSpeed) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.rotateSpeed = rotateSpeed;
};

PlanetaryDancer.prototype = Object.create(Dancer.prototype);

PlanetaryDancer.prototype.constructor =  PlanetaryDancer;

PlanetaryDancer.prototype.oldStep = Dancer.prototype.step;

PlanetaryDancer.prototype.rotate = function() {
  // Placeholder
  return rotateSpeed;
};

PlanetaryDancer.prototype.step = function() {
  this.oldStep();
  this.rotate();
};
