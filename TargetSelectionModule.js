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

    let targetList = [];
    protocols.forEach((protocol) => {
      if (protocol === "assist-allies") {
        targetList = [...targetList, ...assistAllies(scan)];
      }
      if (protocol === "avoid-crossfire") {
        targetList = [...targetList, ...avoidCrossfire(scan)];
      }
      if (protocol === "prioritize-mech") {
        targetList = [...targetList, ...prioritizeMech(scan)];
      }
      if (protocol === "avoid-mech") {
        targetList = [...targetList, ...avoidMech(scan)];
      }
    });
    if (targetList.length === 1) {
      console.log(targetList);
      return {
        x: targetList[0].coordinates.x,
        y: targetList[0].coordinates.y,
      };
    } else {
      console.log("more than 2");
    }
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
  },
  {
    enemies: { number: 20, type: "soldier" },
    coordinates: { y: 32, x: 14 },
    allies: 3,
  },
];

//const testDroid = new TargetSelectionModule();
// console.log(
//   testDroid.setTarget({
//     protocols: ["assist-allies"],
//     scan,
//   })
// );

module.exports = TargetSelectionModule;
