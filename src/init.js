$(document).ready(function(){
  window.dancers = [];

  $("body").on("click", function(event){
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
    }
    console.log('Youre clicking');
    //var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[correctFunction];

    // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    var dancer = new dancerMakerFunction(
      event.pageY,
      event.pageX,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

