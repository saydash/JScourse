const autos = ["audi", "bmw", "volkswagen", "fiat", "toyota", "mercedes-benz", "volvo"];

// for (let i = 0; i < autos.length; i++) {
//     console.log(autos[i]);
// }

// console.log(typeof(autos));

autos.forEach(function (auto, o, autos) {
    autos;
    console.log(`${o}: ${auto} внутри массива ${autos}`);
});

// for (i = 0; i <= autos.length; i++) {
//     console.log(autos[i]);
// }

// for (let auto of autos) {
//     console.log(auto);
// }