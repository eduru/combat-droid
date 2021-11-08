const { assistAllies, avoidCrossfire } = require("./helpers.js");

class TargetSelectionModule {
  constructor() {}

  setTarget(params) {
    const { protocols, scan } = params;

    if (!params) throw new Error("Invalid command");

    let target = [];
    let instructions = [];

    protocols.forEach((protocol) => {
      //  if (protocol === "closest-enemies") target.push("closest-enemies");
      //  if (protocol === "furthest-enemies") target.push("furthest-enemies");
      if (protocol === "assist-allies") assistAllies(scan);
      if (protocol === "avoid-crossfire") avoidCrossfire(scan);
      //if (protocol === "prioritize-mech") target.push(scan);
      // if (protocol === "avoid-mech") target.push("avoid-mech");
    });
    console.log(target);
  }
}

const testDroid = new TargetSelectionModule();
testDroid.setTarget({ protocols: ["closest-enemies", "avoid-mech"], scan });

//module.exports = CombatDroid;
