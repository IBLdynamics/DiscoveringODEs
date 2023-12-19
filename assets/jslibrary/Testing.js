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

/*------------------------------------------------------------------------------------------------------------- ode ---*/

function ode() {
  return JXG.Math.Numerics.rungeKutta('heun', [P1.Y(), P2.Y()], [P1.X(), P1.X() + sdN.Value()], 200, f);
}
/*------------------------------------------------------------------------------------------------------ create_sim ---*/
var brd = JXG.JSXGraph.initBoard('jsxgraph-2ndorder-ode', { boundingbox: [xMin, yMax, xMax, yMin], showCopyright: false, axis: true });

sdN = brd.create('slider', [[-7, -8.5], [7, -8.5], [-15, 10, 15]], { name: 't' });

