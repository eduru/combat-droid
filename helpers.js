const assistAllies = (scan) => {
  return scan.filter((e) => {
    if (e.allies) {
      return e;
    }
  });
};
const avoidCrossfire = (scan) => {
  return scan.filter((e) => {
    if (!e.allies) {
      return e;
    }
  });
};

function prioritizeMech(scan) {
  return scan.filter((e) => {
    if (e.enemies.type === "mech") {
      return e;
    }
  });
}

function avoidMech(scan) {
  return scan.filter((e) => {
    if (e.enemies.type !== "mech") {
      return e;
    }
  });
}

const addDistances = (scan) => {
  const calculate = (axis) => {
    return Math.sqrt(Math.pow(axis.x, 2) + Math.pow(axis.y, 2));
  };
  return scan.map((e) => (e.distance = calculate(e.coordinates)));
};

const closestEnemies = (scan) => {
  const updatedEnemies = addDistances(scan);
  console.log(updatedEnemies);
  const closestEnemy = scan.reduce((min, current) => {
    return min.distance < current.distance ? min : current;
  });
  return closestEnemy;
};

const furthestEnemies = (scan) => {
  const updatedEnemies = addDistances(scan);
  console.log(updatedEnemies);
  const furthestEnemy = scan.reduce((max, current) => {
    return max.distance > current.distance ? max : current;
  });
  return furthestEnemy;
};

const scan = [
  {
    enemies: { number: 10, type: "mech" },
    coordinates: { y: 35, x: 5 },
  },
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 30, x: 10 },
    allies: 3,
  },
];

console.log(furthestEnemies(scan), "test");

module.exports = {
  assistAllies,
  avoidCrossfire,
  prioritizeMech,
  avoidMech,
};
