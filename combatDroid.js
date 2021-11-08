const {
  assistAllies,
  avoidCrossfire,
  prioritizeMech,
  avoidMech,
} = require("./helpers.js");

class TargetSelectionModule {
  constructor() {}

  setTarget(params) {
    const { protocols, scan } = params;

    if (!params) throw new Error("Invalid command");

    //let target = {};
    const instructions = [];

    protocols.forEach((protocol) => {
      if (protocol === "assist-allies") {
        instructions.push(assistAllies(scan));
      }
      if (protocol === "avoid-crossfire") {
        instructions.push(avoidCrossfire(scan));
      }
      if (protocol === "prioritize-mech") {
        instructions.push(prioritizeMech(scan));
      }
      if (protocol === "avoid-mech") {
        instructions.push(avoidMech(scan));
      }
    });
    console.log(instructions);
  }
}

const scan = [
  {
    enemies: { number: 10, type: "soldier" },
    coordinates: { y: 35, x: 5 },
  },
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 30, x: 10 },
    allies: 3,
  },
];

const testDroid = new TargetSelectionModule();
testDroid.setTarget({ protocols: ["assist-allies", "avoid-mech"], scan });

//module.exports = CombatDroid;
