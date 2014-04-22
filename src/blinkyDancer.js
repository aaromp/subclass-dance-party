var BlinkyDancer = function(top, left, timeBetweenSteps, speed, direction) {
  Dancer.call(this, top, left, timeBetweenSteps, speed, direction);
  this.timeout = Math.random()*1000;
  this.blinkyTimeout(this.timeout);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor =  BlinkyDancer;

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.blinkyTimeout = function(blinkyTime) {
  this.$node.toggleClass('lumosity');
  setTimeout(this.blinkyTimeout.bind(this, blinkyTime), blinkyTime);
};

BlinkyDancer.prototype.step = function() {
  this.oldStep();
};
