function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const cats = ['Pilkis', 'Murka', 'Pūkis', 'Ilgauodegis', 'Pifas', 'Keris', 'Džimas', 'Džeris'];

const mas  = [ 
{
    id: 1,
    name: 'Pilkis'
},
{
    id: 2,
    name: 'Murka'
},
//.....
];

const data = cats.map((n, i) => ({name: n, id: i + 1}));

// data.sort((a, b) => a.name == b.name ? 0 : a.name > b.name ? 1 : -1);

// data.sort((a, b) => {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0;
// });


const randId = rand(1, 8);
// console.log(randId);

// const dataDel = data.filter(c => c.id != randId);

// const dataDel = data.filter(c => c.id == randId)[0];

// data.sort(_ => rand(0, 1) ? 1 : -1);

// const half = data.filter(c => !(c.id % 2)).sort(_ => rand(0, 1) ? 1 : -1);

// const mod = data.map(e => !(e.id % 2) ? half.shift() : e);

// const mod = data.map(c => ({...c, weight: rand(1, 7), name: 'Rainius'}) );

// {...c} === {id: c.id, name: c.name, weight: rand(1, 7)}

const mod1 = data.map(c => ({...c, weight: rand(1, 7), [c.name]:42, ['have-fun']: true  }));

// const mod1 = data.map(c => {
//     c.weight = rand(1, 7);
//     c[c.name] = 42
//     return c;
// }).sort(_ => rand(0, 1) ? 1 : -1);

// mod[0].weight = 100;

console.log(mod1);