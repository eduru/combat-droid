const {
  assistAllies,
  avoidCrossfire,
  prioritizeMech,
  avoidMech,
  addDistances,
  closestEnemies,
  furthestEnemies,
} = require("./helpers.js");

class TargetSelectionModule {
  constructor() {}

  setTarget(params) {
    const { protocols, scan } = params;

    if (!params) throw new Error("Invalid command");
    let target = {};
    let targetList = [...scan];
    protocols.forEach((protocol) => {
      if (protocol === "assist-allies") {
        targetList = assistAllies(scan);
      }
      if (protocol === "avoid-crossfire") {
        targetList = avoidCrossfire(scan);
      }
      if (protocol === "prioritize-mech") {
        targetList = prioritizeMech(scan);
      }
      if (protocol === "avoid-mech") {
        targetList = avoidMech(scan);
      }
    });
    addDistances(targetList);
    console.log(targetList);
    if (targetList.length === 1) {
      return {
        x: targetList[0].coordinates.x,
        y: targetList[0].coordinates.y,
      };
    }

    protocols.forEach((protocol) => {
      if (protocol === "closest-enemies") {
        target = closestEnemies(targetList).coordinates;
      } else if (protocol === "furthest-enemies") {
        target = furthestEnemies(targetList).coordinates;
      }
    });
    console.log(target, "target");
    return {
      x: target.x,
      y: target.y,
    };
  }
}

module.exports = TargetSelectionModule;
