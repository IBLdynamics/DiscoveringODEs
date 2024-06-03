// Create JSXGraph board for slope field
var board = JXG.JSXGraph.initBoard('slope_field_matching', {
    boundingbox: [-6, 9, 6, -6],
    axis: true,
    showNavigation:false
  });
  
  // Slider to control length of vectors
  var s = board.create('slider', [[0.1, 7.5], [3.1, 7.5], [0, 0.33, 1]], {name: 'length'});
  // Slider to control number of steps
  var stepsize = board.create('slider', [[0.1, 6.5], [3.1, 6.5], [1, 20, 30]], {name: 'steps', snapWidth: 0.9});
  
  
  f = function(x, y) {
            return 0
            };
   
  //initial function for the ODE
  
  
   // Create buttons
   var buttona = board.create('button', [-4, 7, 'a',
      function () {f = function(x, y) {
            return y*(1-y)
            };}
   ], {});
   var buttonb = board.create('button', [-3, 7, 'b',
       function () {f = function(x, y) {
            return Math.sin(x)*y
            };}
   ], {});
   var buttonc = board.create('button', [-2, 7, 'c',
       function () {f = function(x, y) {
            return 1 - Math.pow(y,2)
            };}
   ], {});
   var buttond = board.create('button', [-1, 7, 'd',
       function () {f = function(x, y) {
            return x*y
            };}
   ], {});
  
  var field = board.create('slopefield', [
      (x, y) => f(x,y),
          [-5, () => stepsize.Value(), 5],
      [-5, () => stepsize.Value(), 5]],
      {
          strokeWidth: 1.5,
          highlightStrokeWidth: 0.5,
          highlightStrokeColor: JXG.palette.blue,
  
          scale: () => s.Value(),
  
          arrowHead: {
              enabled: true,
              size: 8,
              angle: Math.PI / 16
          }
      });