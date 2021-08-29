const DirtyCalf = require("../index");

const dirtyCalf = new DirtyCalf({ verbose: true });

function genString() {
    return "aksfdlkasjf" + Math.random() + Date.now() + Math.random();
}

for (let i = 0; i < 1000; ++i) {
    console.log(`${i}) -> ${dirtyCalf.poop(genString(), genString(), genString())}`);
    // console.dir(dirtyCalf._cache, { depth: null, compact: false });
}
