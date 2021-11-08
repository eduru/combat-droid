class TargetSelectionModule {
  constructor() {}

  setTarget(params) {
    let target = [];
    if (!params) throw new Error("Invalid command");
    const { protocols, scan } = params;
    protocols.forEach((e) => {
      if (e === "closest-enemies") target.push("closest-enemies");
      if (e === "furthest-enemies") target.push("furthest-enemies");
      if (e === "assist-allies") target.push("assist-allies");
      if (e === "avoid-crossfire") target.push("avoid-crossfire");
      if (e === "prioritize-mech") target.push("prioritize-mech");
      if (e === "avoid-mech") target.push("avoid-mech");
    });
    console.log(target);
  }
}

const testDroid = new TargetSelectionModule();
testDroid.setTarget({ protocols: ["closest-enemies", "avoid-mech"] });

//module.exports = CombatDroid;
