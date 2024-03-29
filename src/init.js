$(document).ready(function(){
  window.dancers = [];
  window.death;

  $(document).keyup( function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.death.shoot(window.dancers[i]);
    }
    console.log("shootin dis");
  });

  $(".lineUp").on("click", function(event) {
    // return if windowdancers.length === 0
    // change dancers speed to 0

    window.dancers.sort(function(a, b) {
      return b.$node[0].clientTop - a.$node[0].clientTop;
    });

    var dancersSorted = [];
    var index = Math.floor(window.dancers.length/2);

    for (var i = 0; i < window.dancers.length; i++){
      if (i % 2 === 1) {
        index -= i;
      } else {
        index += i;
      }
      dancersSorted[index] = window.dancers[i];

    }

    console.log(dancersSorted);

    var windowHeight = $("body").height();
    var windowWidth = $("body").width();

    var totalStarWidth = 0;

    var currentWidth;
    for (var i = 0; i < window.dancers.length; i++) {
      currentWidth = window.dancers[i].$node[0].clientTop * 2;
      totalStarWidth += currentWidth;
    }

    var xSpacerSize = (windowWidth - totalStarWidth) / (window.dancers.length + 1);
    var y = windowHeight/2;

    var x = xSpacerSize;


    var currentRadius = 0;
    for (var i = 0; i < dancersSorted.length; i++) {
      currentRadius = dancersSorted[i].$node[0].clientTop;
      x += currentRadius;
      dancersSorted[i].lineUp(x,y);
      x += currentRadius + xSpacerSize;
    }

  });

  $(".universe").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var correctFunction;

    if ($("[value='blinky']").is(":checked")) {
      correctFunction = $("[value='blinky']").data("dancer-maker-function-name");
    } else if ($("[value='planet']").is(":checked")) {
      correctFunction = $("[value='planet']").data("dancer-maker-function-name");
    } else if ($("[value='star']").is(":checked")) {
      correctFunction = $("[value='star']").data("dancer-maker-function-name");
    } else if ($("[value='DEATHSTAR']").is(":checked")) {
      correctFunction = $("[value='DEATHSTAR']").data("dancer-maker-function-name");
    }

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[correctFunction];
    // make a dancer at mouse click

    var dancer = new dancerMakerFunction(
      event.pageY,
      event.pageX,
      20,//Math.random() * 1000,
      Math.random()*5,
      Math.random()*Math.PI*2
    );

    $('body').append(dancer.$node);

    if (!dancer.$node.hasClass('DEATHSTAR')){
      window.dancers.push(dancer);
    } else if (dancer.$node.hasClass('DEATHSTAR') === true) {
      console.log("we've got death star");
      window.death = dancer;
    }
  });
});

