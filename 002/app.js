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

data.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});


const randId = rand(1, 8);
console.log(randId);

const dataDel = data.filter(c => c.id != randId);


console.log(dataDel);