// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0], [0]]
}

// Function turns rover towards right
// ======================
function turnLeft(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    }

    //console.log("turnLeft was called!");
    //statePosition(rover);
}

// Function turns rover towards left
// ======================
function turnRight(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    }

    //console.log("turnRight was called!");
    //statePosition(rover);
}

// Function moves rover forward one unit
// ======================
function moveForward(rover){

  switch(rover.direction) {
    case "N":
      rover.y += 1;
      break;
    case "E":
      rover.x += 1;
      break;
    case "S":
      rover.y -= 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    }

    if (rover.x < 0 || rover.x > 10 || rover.y <0 || rover.y > 10) {
      rover.x = rover.travelLog[0][rover.travelLog[0].length-1];
      rover.x = rover.travelLog[1][rover.travelLog[1].length-1];
      console.log("Oops, out of bounds! Move blocked.");
    }

  //console.log("moveForward was called");
  //statePosition(rover);
}

// Function moves rover forward one unit
// ======================
function moveBackward(rover){

  switch(rover.direction) {
    case "N":
      rover.y -= 1;
      break;
    case "E":
      rover.x -= 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      rover.x += 1;
      break;
    }

    if (rover.x < 0 || rover.x > 10 || rover.y <0 || rover.y > 10) {
      rover.x = rover.travelLog[0][rover.travelLog[0].length-1];
      rover.y = rover.travelLog[1][rover.travelLog[1].length-1];
      console.log("Oops, out of bounds! Move blocked.");
    }

  //console.log("moveForward was called");
  //statePosition(rover);
}


// Function outputs to console current (x,y) position and direction of rover
// ======================
function statePosition(rover) {
  console.log("Rover is now: x: " + rover.x + ", y: " + rover.y + ", facing "+ rover.direction);
}

// Function process list of movement commands
// ======================
function processCommands(commandsList, rover) {

  for (i = 0; i < commandsList.length; i++) {
    switch(commandsList[i]) {
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover)
        break;
      default:
        break;
    }
    rover.travelLog[0].push(rover.x);
    rover.travelLog[1].push(rover.y);
  }

  return statePosition(rover);
}
