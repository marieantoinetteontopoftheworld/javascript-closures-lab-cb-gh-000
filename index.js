function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps,
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
