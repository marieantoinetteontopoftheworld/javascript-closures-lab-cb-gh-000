const app = "I don't do much."

function bumpCounter() {
  var counter;

  function addBump() {
    counter += 1;
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
}

var sharkCreator = createAnimal('Shark');
