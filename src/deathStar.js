var DeathStar = function(top, left, timeBetweenSteps, speed, direction) {
  Dancer.call(this, top, left, timeBetweenSteps, speed, direction);
  this.$node.removeClass('dancer');
  this.$node.addClass('DEATHSTAR');
};

DeathStar.prototype = Object.create(Dancer.prototype);
DeathStar.prototype.constructor = DeathStar;

DeathStar.prototype.shoot = function(dancer) {
  var dancerX = dancer.$node.position().left + dancer.$node[0].clientLeft;
  var dancerY = dancer.$node.position().top + dancer.$node[0].clientTop;
  var changeX = dancerX - this.left;
  var changeY = dancerY - this.top;
  var direction;
  if (changeX > 0){
    direction = Math.atan(-changeY / changeX);
  } else {
    direction = Math.atan(-changeY / changeX) + Math.PI;
  }
  var bullet = new Bullet(this.top, this.left, 20, 40, direction);
  bullet.$node.css({transform: 'rotate('+direction*-180/Math.PI+'deg)'});
  $('body').append(bullet.$node);
};
