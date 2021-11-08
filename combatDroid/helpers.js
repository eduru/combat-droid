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
  const closestEnemy = scan
    .filter((e) => e.distance < 100)
    .reduce((min, current) => {
      return min.distance < current.distance ? min : current;
    });
  return closestEnemy;
};

const furthestEnemies = (scan) => {
  const furthestEnemy = scan
    .filter((e) => e.distance < 100)
    .reduce((max, current) => {
      return max.distance > current.distance ? max : current;
    });
  return furthestEnemy;
};

module.exports = {
  assistAllies,
  avoidCrossfire,
  prioritizeMech,
  avoidMech,
  addDistances,
  closestEnemies,
  furthestEnemies,
};
