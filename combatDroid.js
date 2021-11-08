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
    let instructions = [];
    protocols.forEach((protocol) => {
      if (protocol === "assist-allies") {
        instructions = [...instructions, ...assistAllies(scan)];
      }
      if (protocol === "avoid-crossfire") {
        instructions = [...instructions, ...avoidCrossfire(scan)];
      }
      if (protocol === "prioritize-mech") {
        instructions = [...instructions, ...prioritizeMech(scan)];
      }
      if (protocol === "avoid-mech") {
        instructions = [...instructions, ...avoidMech(scan)];
      }
    });
    console.log("+++++++++++++++");
    console.log(instructions, "after");
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
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 32, x: 14 },
    allies: 3,
  },
];

const testDroid = new TargetSelectionModule();
testDroid.setTarget({
  protocols: ["assist-allies", "closest"],
  scan,
});

//module.exports = CombatDroid;
