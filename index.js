const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {

  function deadlyDevice(deadlyDevice) {
    var obj = {}

    obj["animalType"] = animalType;
    obj["deadlyDevice"] = deadlyDevice;

    return obj;
  }

  return deadlyDevice;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator.bind(null, 'Laserbeam');
var sharkWithFrickinCannon = sharkCreator.bind(null, 'Cannon');
