console.log('start');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('start', rand(1, 1000));



// for (let i = 0; i < 10; i++) {
//     mas.push(rand(10, 99));
// }

const mas = [...Array(20)].map(_ => rand(10, 99));



// mas.sort((a, b) => {
//     if (b > a) return -1;
//     if (b < a) return 1;
//     return 0;
// });


// const fr = mas.forEach(e => console.log(e));
// const map = mas.map(e => e + 10);

// const mas2 = mas;


// console.log(fr);
// console.log(map);

// map[0] = 'bla';

// const fmas = mas.filter(e => e <= 50);

const fmas = mas.filter(e => e > 66).map(e => e * 3).sort((a, b) => a % 2 - b % 2 || a - b);

console.log(fmas);




