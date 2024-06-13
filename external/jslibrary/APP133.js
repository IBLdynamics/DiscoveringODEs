// Define the id of your board in BOARDID

const board = JXG.JSXGraph.initBoard("drag_initial_pop", {
  axis: true,
  boundingbox: [-0.1, 1.25, 1.1, -0.25]
});
// const board = JXG.JSXGraph.initBoard(BOARDID, {axis:true, boundingbox:[-11,11,11,-11]});

const N = 1
//var slider = board.create('slider', [[-7, 8], [7, 8], [-15, 0, 15]], {name:'c'});
var P = board.create('point', [0, -0.1], {
  name: ''
});
var f;

var doPlot = function() {

  f = (x, y) => [10*y*(1-y)];
  var field = board.create('slopefield', [
    (x, y) => f(x, y),
    [0, 20, 1],
    [0-0.25, 20, 1.25]
  ], {
    strokeWidth: 1.5,
    highlightStrokeWidth: 0.5,
    highlightStrokeColor: JXG.palette.blue,

    scale: 0.05,

    arrowHead: {
      enabled: true,
      size: 8,
      angle: Math.PI / 16
    }
  });
  board.update();
}

// Solve ODE
var ode = function() {
  return JXG.Math.Numerics.rungeKutta('heun', [P.Y()], [P.X(), P.X() + N], 200, f);
}

var g = board.create('curve', [
  [0],
  [1]
], {
  strokeColor: 'red',
  strokeWidth: 2
});

// In each update, solve ODE from t_0 to t_0 + N and plot solution
g.updateDataArray = function() {
  var data = ode();
  var h = N / 200;
  var i;
  this.dataX = [];
  this.dataY = [];
  for (i = 0; i < data.length; i++) {
    this.dataX[i] = P.X() + i * h;
    this.dataY[i] = data[i][0];
  }
};

// Inital plotting
doPlot();