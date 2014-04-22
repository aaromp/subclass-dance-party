describe("planetaryDancer", function() {

  var planetaryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    planetaryDancer = new PlanetaryDancer(10, 20, timeBetweenSteps, 10);
  });

  it("should have a jQuery $node object", function(){
    expect(planetaryDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(planetaryDancer, "step");
      expect(planetaryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(planetaryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(planetaryDancer.step.callCount).to.be.equal(2);
    });
  });
});
