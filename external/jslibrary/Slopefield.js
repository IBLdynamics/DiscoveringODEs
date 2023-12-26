
var board = JXG.JSXGraph.initBoard('jsxgraph-slope_field',
  { originX: 250, originY: 250, unitX: 50, unitY: 50, axis: true });
var pt0 = board.create('point', [1, 1]);
var gp = [];
var gph = [];
var m;
var f = parser.makefct("cos(x)+sin(y)");
for (var i = -4; i < 5; i++) {
  gph[i] = [];
}


// Create endpoints for slope field arrows

// Since function values update but coordinates don't, javascript and
// jsxgraph scoping didn't play well together. While I could have used
// closures, it seemed easier to just use a scripting language to 
// produce javascript code with the coordinates hard-coded so they 
// wouldn't update but function values could. I tried putting this code
// in a separate file, but that slowed down loading time significantly

gph[-4][-4] = board.create('point',
  [function () { var m = f([-4, -4]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][-3] = board.create('point',
  [function () { var m = f([-4, -3]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][-2] = board.create('point',
  [function () { var m = f([-4, -2]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][-1] = board.create('point',
  [function () { var m = f([-4, -1]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][0] = board.create('point',
  [function () { var m = f([-4, 0]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][1] = board.create('point',
  [function () { var m = f([-4, 1]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][2] = board.create('point',
  [function () { var m = f([-4, 2]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][3] = board.create('point',
  [function () { var m = f([-4, 3]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-4][4] = board.create('point',
  [function () { var m = f([-4, 4]); return -4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-4, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][-4] = board.create('point',
  [function () { var m = f([-3, -4]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][-3] = board.create('point',
  [function () { var m = f([-3, -3]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][-2] = board.create('point',
  [function () { var m = f([-3, -2]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][-1] = board.create('point',
  [function () { var m = f([-3, -1]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][0] = board.create('point',
  [function () { var m = f([-3, 0]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][1] = board.create('point',
  [function () { var m = f([-3, 1]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][2] = board.create('point',
  [function () { var m = f([-3, 2]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][3] = board.create('point',
  [function () { var m = f([-3, 3]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-3][4] = board.create('point',
  [function () { var m = f([-3, 4]); return -3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-3, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][-4] = board.create('point',
  [function () { var m = f([-2, -4]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][-3] = board.create('point',
  [function () { var m = f([-2, -3]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][-2] = board.create('point',
  [function () { var m = f([-2, -2]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][-1] = board.create('point',
  [function () { var m = f([-2, -1]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][0] = board.create('point',
  [function () { var m = f([-2, 0]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][1] = board.create('point',
  [function () { var m = f([-2, 1]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][2] = board.create('point',
  [function () { var m = f([-2, 2]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][3] = board.create('point',
  [function () { var m = f([-2, 3]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-2][4] = board.create('point',
  [function () { var m = f([-2, 4]); return -2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-2, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][-4] = board.create('point',
  [function () { var m = f([-1, -4]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][-3] = board.create('point',
  [function () { var m = f([-1, -3]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][-2] = board.create('point',
  [function () { var m = f([-1, -2]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][-1] = board.create('point',
  [function () { var m = f([-1, -1]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][0] = board.create('point',
  [function () { var m = f([-1, 0]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][1] = board.create('point',
  [function () { var m = f([-1, 1]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][2] = board.create('point',
  [function () { var m = f([-1, 2]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][3] = board.create('point',
  [function () { var m = f([-1, 3]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[-1][4] = board.create('point',
  [function () { var m = f([-1, 4]); return -1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([-1, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][-4] = board.create('point',
  [function () { var m = f([0, -4]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][-3] = board.create('point',
  [function () { var m = f([0, -3]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][-2] = board.create('point',
  [function () { var m = f([0, -2]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][-1] = board.create('point',
  [function () { var m = f([0, -1]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][0] = board.create('point',
  [function () { var m = f([0, 0]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][1] = board.create('point',
  [function () { var m = f([0, 1]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][2] = board.create('point',
  [function () { var m = f([0, 2]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][3] = board.create('point',
  [function () { var m = f([0, 3]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[0][4] = board.create('point',
  [function () { var m = f([0, 4]); return 0 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([0, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][-4] = board.create('point',
  [function () { var m = f([1, -4]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][-3] = board.create('point',
  [function () { var m = f([1, -3]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][-2] = board.create('point',
  [function () { var m = f([1, -2]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][-1] = board.create('point',
  [function () { var m = f([1, -1]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][0] = board.create('point',
  [function () { var m = f([1, 0]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][1] = board.create('point',
  [function () { var m = f([1, 1]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][2] = board.create('point',
  [function () { var m = f([1, 2]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][3] = board.create('point',
  [function () { var m = f([1, 3]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[1][4] = board.create('point',
  [function () { var m = f([1, 4]); return 1 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([1, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][-4] = board.create('point',
  [function () { var m = f([2, -4]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][-3] = board.create('point',
  [function () { var m = f([2, -3]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][-2] = board.create('point',
  [function () { var m = f([2, -2]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][-1] = board.create('point',
  [function () { var m = f([2, -1]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][0] = board.create('point',
  [function () { var m = f([2, 0]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][1] = board.create('point',
  [function () { var m = f([2, 1]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][2] = board.create('point',
  [function () { var m = f([2, 2]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][3] = board.create('point',
  [function () { var m = f([2, 3]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[2][4] = board.create('point',
  [function () { var m = f([2, 4]); return 2 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([2, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][-4] = board.create('point',
  [function () { var m = f([3, -4]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][-3] = board.create('point',
  [function () { var m = f([3, -3]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][-2] = board.create('point',
  [function () { var m = f([3, -2]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][-1] = board.create('point',
  [function () { var m = f([3, -1]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][0] = board.create('point',
  [function () { var m = f([3, 0]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][1] = board.create('point',
  [function () { var m = f([3, 1]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][2] = board.create('point',
  [function () { var m = f([3, 2]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][3] = board.create('point',
  [function () { var m = f([3, 3]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[3][4] = board.create('point',
  [function () { var m = f([3, 4]); return 3 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([3, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][-4] = board.create('point',
  [function () { var m = f([4, -4]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, -4]); return -4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][-3] = board.create('point',
  [function () { var m = f([4, -3]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, -3]); return -3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][-2] = board.create('point',
  [function () { var m = f([4, -2]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, -2]); return -2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][-1] = board.create('point',
  [function () { var m = f([4, -1]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, -1]); return -1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][0] = board.create('point',
  [function () { var m = f([4, 0]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, 0]); return 0 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][1] = board.create('point',
  [function () { var m = f([4, 1]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, 1]); return 1 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][2] = board.create('point',
  [function () { var m = f([4, 2]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, 2]); return 2 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][3] = board.create('point',
  [function () { var m = f([4, 3]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, 3]); return 3 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });

gph[4][4] = board.create('point',
  [function () { var m = f([4, 4]); return 4 + 0.5 / Math.sqrt(m * m + 1) },
  function () { var m = f([4, 4]); return 4 + 0.5 * m / Math.sqrt(m * m + 1); }],
  { visible: false });


// Create base points and then arrows
// These don't need to update so can be handled with a javascript loop

for (var i = -4; i < 5; i++) {
  gp[i] = [];
  for (var j = -4; j < 5; j++) {
    gp[i][j] = board.create('point', [i, j], { visible: false });
    board.create('arrow', [gp[i][j], gph[i][j]], { strokeWidth: 1, strokeColor: 'blue' });
  }
}



// Create red arrow from pt0 that can move around the slope field

var pt1 = board.create('point', [function () {
  var m = f([pt0.X(), pt0.Y()]);
  return pt0.X() + 0.75 / Math.sqrt(m * m + 1);
},
function () {
  var m = f([pt0.X(), pt0.Y()]);
  return pt0.Y() + 0.75 * m / Math.sqrt(m * m + 1);
}],
  { visible: false });
var arr = board.create('arrow', [pt0, pt1], { strokeWidth: 1, strokeColor: 'red' });

var intcrv;
var curvecount = 0;
var intcurves = [];

function draw33ic() {
  for (var i = -4; i < 4.1; i += 0.25) {
    intcrv = parser.rkf23crv(f, [-4, i], 5, 0.001);
    intcurves.push(board.create('curve', intcrv, {
      strokeWidth: 2,
      strokeColor: 'red',
      highlightStrokeColor: 'purple',
      highlightStrokeOpacity: 1
    }));
  }
  document.getElementById('comp').innerHTML = ' ';
}


// Dummy point to trigger updates to position and slope on page when 
// the board updates

board.create('point', [function () {
  var m = f([pt0.X(), pt0.Y()]);
  return updatesl(pt0.X(), pt0.Y(), m);
}, 0],
  { visible: false });

function updatesl(a, b, m) {
  // check spans created, and if so update values for coord and slope
  if (document.getElementById('xcoord') === null) return 0;
  document.getElementById('xcoord').innerHTML = a.toFixed(2);
  document.getElementById('ycoord').innerHTML = b.toFixed(2);
  document.getElementById('slope').innerHTML = m.toFixed(2);
  return 0;
}

function graphfct() {
  f = parser.makefct(document.getElementById('fct').value);
  if ((typeof f) === "string") {
    document.getElementById('emsg').innerHTML = f;
  } else {
    document.getElementById('emsg').innerHTML = " ";
    for (var i = 0; i < intcurves.length; i++) {
      board.removeObject(intcurves[i]);
    }
    intcurves = [];
    board.update();
  }
  /*
    for (var i=-4;i<4.1;i+=0.25) {
      intcrv=parser.rkf23crv(f,[-4,i],5,0.001);
      intcurves.push(board.create('curve',intcrv,{strokeWidth:2, 
                                                  strokeColor:'red',
                                      highlightStrokeColor:'purple',
                                    highlightStrokeOpacity:1}));
    }
  */
}

function graph1fct() {
  for (var i = 0; i < intcurves.length; i++) {
    // intcurves[i].setAttribute failed silently for unknown reasons, 
    // so I changed the color of old curves the hard way
    // intcurves[i].visProp.strokeColor='gray';
    // Fixed with update to jsxgraphcore.js
    intcurves[i].setAttribute({ strokeColor: 'gray' });
  }
  var y0 = parseFloat(document.getElementById('init').value);
  intcrv = parser.rkf23crv(f, [-4, y0], 5, 0.001);
  intcurves.push(board.create('curve', intcrv, {
    strokeWidth: 2,
    strokeColor: 'red',
    highlightStrokeColor: 'purple',
    highlightStrokeOpacity: 1
  }));
}

