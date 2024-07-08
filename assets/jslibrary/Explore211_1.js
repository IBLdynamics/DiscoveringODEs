// Define the id of your board in BOARDID
//Add constraints for the bounding box
const xmin = -0.1
const ymax = 2.25
const xmax = 5.1
const ymin = -0.25
const board = JXG.JSXGraph.initBoard("derivative_solution_1", {
  axis: true,
  boundingbox: [xmin, ymax, xmax, ymin]
});

const N = xmax - xmin;

var f;
var g;
var field;

//Change f below to define the original ODE

var doPlot = function() {

  f = (x, y) => [10 * y * (1 - y)];
  var field = board.create('slopefield', [
    (x, y) => f(x, y),
    [xmin + 0.1, 20, xmax - 0.1],
    [ymin, 20, ymax]
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

//This function gets the coordinates based on a click and adds a point to the graph
var getMouseCoords = function(e, i) {
    var pos = board.getMousePosition(e, i);
    return new JXG.Coords(JXG.COORDS_BY_SCREEN, pos, board);
  },

  handleDown = function(e) {
    var canCreate = true,
      i, coords, el;

    //Selects random values for the point color
    h = Math.random() * 360;
    s = 1.0; //Math.random();
    v = 1.0;

    if (e[JXG.touchProperty]) {
      // index of the finger that is used to extract the coordinates
      i = 0;
    }
    coords = getMouseCoords(e, i);

    for (el in board.objects) {
      if (JXG.isPoint(board.objects[el]) && board.objects[el].hasPoint(coords.scrCoords[1], coords.scrCoords[2])) {
        canCreate = false;
        break;
      }
    }

    if (canCreate) {
      board.create('point', [coords.usrCoords[1], coords.usrCoords[2]], {
        name: '',
        strokeColor: JXG.hsv2rgb(h, s, v),
				fillColor: JXG.hsv2rgb(h, s, v)
      });
      
      g = board.create('curve', [coords.usrCoords[1], coords.usrCoords[2]], {
        strokeColor: JXG.hsv2rgb(h, s, v),
				strokeWidth: 2
      });
    
    // Solve ODE

var ode = function() {
  return JXG.Math.Numerics.rungeKutta('heun', [coords.usrCoords[2]], [coords.usrCoords[1], coords.usrCoords[1] + N], 200, f);
}

    f = (x, y) => [10 * y * (1 - y)];

    field = board.create('slopefield', [
      (x, y) => f(x, y),
      [xmin + 0.1, 20, xmax - 0.1],
      [ymin, 20, ymax]
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
    

    // In each update, solve ODE from t_0 to t_0 + N and plot solution
    g.updateDataArray = function() {
      var data = ode();
      var h = N / 200;
      var i;
      this.dataX = [];
      this.dataY = [];
      for (i = 0; i < data.length; i++) {
        this.dataX[i] = coords.usrCoords[1] + i * h;
        this.dataY[i] = data[i][0];
      }
    };
}
  };



doPlot();
board.on('down', handleDown);