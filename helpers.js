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

//console.log(prioritizeMech(scan));

module.exports = {
  assistAllies,
  avoidCrossfire,
  prioritizeMech,
  avoidMech,
};
