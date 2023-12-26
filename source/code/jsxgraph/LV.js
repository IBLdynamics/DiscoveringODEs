// Initial board, just for the sliders
board = JXG.JSXGraph.initBoard('LV-system-sliders', {
  boundingbox: [-1.5, 10, 40, -1.5],
  axis: true,
  grid: false
});



// Define sliders to dynamically change parameters of the equations and create text elements to describe them
s = board.create('slider', [
  [5.0, 7.0],
  [13.0, 7],
  [0.0, 0.3, 1.0]
], {
  name: '&alpha;',
  strokeColor: 'black',
  fillColor: 'black'
});
st = board.create('text', [5, 28, "Birth rate predators"], {
  fixed: true
});
u = board.create('slider', [
  [5.0, 4.0],
  [13.0, 4.0],
  [0.0, 0.7, 1.0]
], {
  name: '&beta;',
  strokeColor: 'black',
  fillColor: 'black'
});
ut = board.create('text', [5, 22, "Death rate predators"], {
  fixed: true
});

o = board.create('slider', [
  [20.0, 7.0],
  [28.0, 7.0],
  [0.0, 0.1, 1.0]
], {
  name: '&delta;',
  strokeColor: 'black',
  fillColor: 'black'
});
ot = board.create('text', [20, 28, "Death rate preys/per predator"], {
  fixed: true
});
p = board.create('slider', [
  [20.0, 4.0],
  [28.0, 4.0],
  [0.0, 0.3, 1.0]
], {
  name: '&gamma;',
  strokeColor: 'black',
  fillColor: 'black'
});
pt = board.create('text', [20, 22, "Reproduction rate pred./per prey"], {
  fixed: true
});



//Add in a second board, tied to the first board. This has the graphs on it
board2 = JXG.JSXGraph.initBoard('LV-system-graphs', {
  boundingbox: [-1.5, 28.5, 28.5, -1.5],
  axis: true,
  grid: false
});
board.addChild(board2);


// Variables for the JXG.Curves
var g3 = null;
var g4 = null;

// Initialise ODE and solve it with JXG.Math.Numerics.rungeKutta()
function ode() {
  // evaluation interval
  var I = [0, 100];
  // Number of steps. 1000 should be enough
  var N = 1000;

  // Right hand side of the ODE dx/dt = f(t, x)
  var f = function (t, x) {
    var bpred = s.Value(); //0.3;
    var bprey = u.Value(); //0.7;
    var dpred = o.Value(); //0.1;
    var dprey = p.Value(); //0.3;

    var y = [];
    y[0] = x[0] * (bpred - dpred * x[1]);
    y[1] = -x[1] * (bprey - dprey * x[0]);

    return y;
  }

  // Dynamic initial value as gliders on the y-axis
  startpred = board2.create('glider', [0, 10, board.defaultAxes.y], {
    name: 'Preys',
    strokeColor: 'red',
    fillColor: 'red'
  });
  startprey = board2.create('glider', [0, 5, board.defaultAxes.y], {
    name: 'Predators',
    strokeColor: 'blue',
    fillColor: 'blue'
  });

  // Initial value
  var x0 = [startpred.Y(), startprey.Y()];

  // Solve ode
  var data = JXG.Math.Numerics.rungeKutta('euler', x0, I, N, f);

  // to plot the data against time we need the times where the equations were solved
  var t = [];
  var q = I[0];
  var h = (I[1] - I[0]) / N;
  for (var i = 0; i < data.length; i++) {
    data[i].push(q);
    q += h;
  }

  return data;
}

// get data points
var data = ode();

// copy data to arrays so we can plot it using JXG.Curve
var t = [];
var dataprey = [];
var datapred = [];
for (var i = 0; i < data.length; i++) {
  t[i] = data[i][2];
  datapred[i] = data[i][0];
  dataprey[i] = data[i][1];
}

// Plot Predator
g3 = board2.create('curve', [t, datapred], {
  strokeColor: 'red',
  strokeWidth: '2px'
});
g3.updateDataArray = function () {
  var data = ode();
  this.dataX = [];
  this.dataY = [];
  for (var i = 0; i < data.length; i++) {
    this.dataX[i] = t[i];
    this.dataY[i] = data[i][0];
  }
}

// Plot Prey
g4 = board2.create('curve', [t, dataprey], {
  strokeColor: 'blue',
  strokeWidth: '2px'
});
g4.updateDataArray = function () {
  var data = ode();
  this.dataX = [];
  this.dataY = [];
  for (var i = 0; i < data.length; i++) {
    this.dataX[i] = t[i];
    this.dataY[i] = data[i][1];
  }
}
