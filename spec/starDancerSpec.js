describe("starDancer", function() {

  var starDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    starDancer = new StarDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(starDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(starDancer.$node, 'toggle');
    starDancer.step();
    expect(starDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(starDancer, "step");
      expect(starDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(starDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(starDancer.step.callCount).to.be.equal(2);
    });
  });
});
