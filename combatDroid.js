const test = {
  protocols: ["avoid-mech"],
  scan: [
    {
      coordinates: {
        x: 0,
        y: 40,
      },
      enemies: {
        type: "soldier",
        number: 10,
      },
    },
  ],
};

class CombatDroid {
  constructor(protocols, scan, enemies, allies) {
    this.protocols = protocols;
    this.scan = scan;
    this.enemies = enemies;
    this.allies = allies;
  }

  greeting() {
    console.log("hey!");
  }
}

module.exports = CombatDroid;
