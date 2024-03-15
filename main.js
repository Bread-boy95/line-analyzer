// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)
function getLength(pt1x, pt1y, pt2x, pt2y) {
  let A = pt1x - pt2x;
  A = A * A;
  let B = pt1y - pt2y;
  B = B * B;
  let length = A + B;
  length = Math.sqrt(length).toFixed(2);
  return length;
}

function getSlope(pt1x, pt1y, pt2x, pt2y) {
  let A = pt2y - pt1y;
  let B = pt2x - pt1x;
  let slope = A / B;
  return slope.toFixed(2);
}

function getDescription(pt1x, pt1y, pt2x, pt2y) {
  if (pt1x < pt2x && pt1y < pt2y) {
    return "increasing";
  }
  if ((pt1x == pt1x && pt1y < pt2y) || pt1y > pt2y) {
    return "vertical";
  }
  if (pt1x > pt2x || (pt1x < pt2x && pt1y == pt2y)) {
    return "horizontal";
  }
  if (pt1x > pt2x && pt1y > pt2y) {
    return "decreasing";
  }
}

function getPointLocation(pt1x, pt1y) {
  return "(" + pt1x + ", " + pt1y + ")";
}

function getPointLocation(pt2x, pt2y) {
  return "(" + pt2x + ", " + pt2y + ")";
}

function getPointSlope(pt1x, pt1y, pt2x, pt2y) {
  let A = pt2y - pt1y;
  let B = pt2x - pt1x;
  let slope = A / B;
  slope = slope.toFixed(2);
  let sign1 = "-";
  let sign2 = "-";
  if (pt1x >= 1 && sign2 == "-") {
    let sign2 = "-";
  }

  if (pt1x <= -1 && sign2 == "-") {
    pt1x = pt1x * -1;
    let sign2 = "+";
  }

  if (pt1y >= 1 && sign1 == "-") {
    let sign1 = "-";
  }

  if (pt1y <= -1 && sign1 == "-") {
    pt1y = pt1y * -1;
    let sign1 = "+";
  }
  // slope point form: y2-y1 = slope(x-x1)
  return (
    "(" +
    pt2y +
    sign1 +
    pt1y +
    ")" +
    " = " +
    slope +
    "(" +
    pt2x +
    sign2 +
    pt1x +
    ")"
  );
}

function getEquation(pt1x, pt1y, pt2x, pt2y) {
  let A = pt2y - pt1y;
  let B = pt2x - pt1x;
  let m = A / B;
  m = m.toFixed(2);
  let y = pt1y;
  let x = pt1x;
  let b = m - x;
  if (b >= 0) {
    b = y - b;
  } else {
    b = y + b;
  }
  if (b == 0) {
    return y + " = " + m + " (" + x + ") ";
  } else if (b != 0 && b > 0) {
    return y + " = " + m + "*" + x + "+" + b.toFixed(2);
  } else if (b != 0 && b < 0) {
    b = b * -1;
    return y + " = " + m + "*" + x + "+" + b.toFixed(2);
  }
}
