const board = JXG.JSXGraph.initBoard("drag_initial_condition", {axis:true, boundingbox:[-5,105,55,45]});
// const board = JXG.JSXGraph.initBoard(BOARDID, {axis:true, boundingbox:[-11,11,11,-11]});
 
const N = 50
//var slider = board.create('slider', [[-7, 8], [7, 8], [-15, 0, 15]], {name:'c'});
var P = board.create('point', [0, 50], {name:''});
var f;
 
var doPlot = function() {
    
    f = (x, y) => [0.2*(70-y)];
    var field = board.create('slopefield', [
  (x, y) => f(x, y),
  [0, 20, 50],
  [50, 20, 100]
], {
  strokeWidth: 1.5,
  highlightStrokeWidth: 0.5,
  highlightStrokeColor: JXG.palette.blue,

  scale: 1,

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
   return JXG.Math.Numerics.rungeKutta('heun', [P.Y()], [P.X(), P.X()+N], 200, f);
}
 
var g = board.create('curve', [[0],[50]], {strokeColor:'red', strokeWidth:2});
 
// In each update, solve ODE from t_0 to t_0 + N and plot solution
g.updateDataArray = function() {
    var data = ode();
    var h = N/ 200;
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