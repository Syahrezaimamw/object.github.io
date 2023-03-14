// let bus = []
// let tambahPenumpang = function (namaPenumpang, penumpang){

// }
const user = [{
    merek: 'BMW',
    cc: 500,
    pintu: 'empat'
},{
    merek: 'lamborghini',
    cc: 600,
    pintu: 'dua'
},{
    merek: 'ferrari',
    cc: 300,
    pintu: 'dua'
},{
    merek: 'mercedes',
    cc: 1000,
    pintu: 'empat'
},
];
let mobil = prompt("sebut jumlah pintu mpbil: dua/empat")
const userPintu= user.filter((user) => user.pintu == mobil);
console.log(userPintu);
