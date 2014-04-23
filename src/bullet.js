var Bullet = function(top, left, timeBetweenSteps, speed, direction) {
  Dancer.call(this, top, left, timeBetweenSteps, speed, direction);
  this.$node.removeClass('dancer');
  this.$node.addClass('bullet');
};

Bullet.prototype = Object.create(Dancer.prototype);
Bullet.prototype.constructor = Bullet;
