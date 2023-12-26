/*====================================================================================================== DiffEq_003 ===*/
/*                                                                                                                     */
/*                                         System of Differential Equations:                                           */
/*                                         y1' = f1(x,y1,y2)                                                           */
/*                                         y2' = f2(x,y1,y2)                                                           */
/*                                                                                                                     */
/*------------------------------------------------------------------------------------------------------- variables ---*/

var brd = null;                       // board

var xMin = -2;                        // board xMin
var xMax = 10;                        //       xMax
var yMin = -10;                        //       yMin
var yMax = 10;                        //       yMax

var sdN = null;                       // slider N

var g1 = null;                       // curve 1
var g2 = null;                       // curve 2
var line = null;                       // line between (x0,y01) and (x0,y02)

var P1 = null;                       // point P1 initial (x0,y01)
var P2 = null;                       //       P2 initial (x0,y02)
var x0 = 0;                       //               x0

var a = 1;
var b = 1;
var y01 = 5;
var y02 = 3;

/*------------------------------------------------------------------------------------------------------------- ode ---*/

function ode() {
  return JXG.Math.Numerics.rungeKutta('heun', [P1.Y(), P2.Y()], [P1.X(), P1.X() + sdN.Value()], 200, f);
}
/*------------------------------------------------------------------------------------------------------ create_sim ---*/
brd = JXG.JSXGraph.initBoard('jsxgraph-2ndorder-ode', { boundingbox: [xMin, yMax, xMax, yMin], showCopyright: false, axis: true });
//brd2 = JXG.JSXGraph.initBoard('box2', { boundingbox: [xMin, yMax, xMax, yMin], showCopyright: false, axis: true });
//brd.addChild(brd2);
sdN = brd.create('slider', [[-7, -8.5], [7, -8.5], [-15, 5, 15]], { name: 't' });

P1 = brd.create('point', [x0, y01], { color: 'red', name: '(x_0, y_0)' });
line = brd.create('line', [function () { return -P1.X(); }, function () { return 1; }, function () { return 0; }], { visible: false });
P2 = brd.create('glider', [x0, y02, line], { color: 'blue', name: '(x_0, v_0)' });


g1 = brd.create('curve', [[0], [0]], { strokeColor: 'red', strokeWidth: 2, name: 'y_1' });
g2 = brd.create('curve', [[0], [0]], { strokeColor: 'blue', strokeWidth: 2, name: 'y_2' });


g1.updateDataArray = function () {
  var data = ode();
  var h = sdN.Value() / 200;
  this.dataX = [];
  this.dataY = [];
  for (i = 0; i < data.length; i++) {
    this.dataX[i] = P1.X() + i * h;
    this.dataY[i] = data[i][0];
  }
}
g2.updateDataArray = function () {
  var data = ode();
  var h = sdN.Value() / 200;
  this.dataX = [];
  this.dataY = [];
  for (i = 0; i < data.length; i++) {
    this.dataX[i] = P2.X() + i * h;
    this.dataY[i] = data[i][1];
  }
}
/*P3 = brd2.create('point', [y01, y02], { color: 'red', name: '(y_0, v_0)' });
line2 = brd2.create('line', [function () { return -P3.X(); }, function () { return 1; }, function () { return 0; }], { visible: false });
P4 = brd2.create('glider', [y01, y02, line2], { color: 'purple', name: '(y_0, v_0)' });
g3 = brd2.create('curve', [[y01], [y02]], { strokeColor: 'purple', strokeWidth: 2 });
g3.updateDataArray = function () {
  var data = ode();
  console.log(data);
  var h = sdN.Value() / 200;
  this.dataX = [];
  this.dataY = [];
  for (i = 0; i < data.length; i++) {
    this.dataX[i] = data[i][0];
    this.dataY[i] = data[i][1];
  }
}
*/
f = function (x, y) {
  return [y[1], - a * y[1] - b * y[0]];
}

brd.update();