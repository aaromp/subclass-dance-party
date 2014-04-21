var StarDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
};

StarDancer.prototype = Object.create(BlinkyDancer.prototype);

StarDancer.prototype.constructor =  StarDancer;
