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

const mas = [...Array(10)].map(_ => rand(10, 99));



mas.sort((a, b) => {
    if (b > a) return -1;
    if (b < a) return 1;
    return 0;
});


mas.forEach(e => console.log(e));


console.table(mas);


