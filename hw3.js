// - beku suhu -100-0
// - cair suhu 1-100
// - uap suhu 101-500
// - suhu selain rentang tsb tidak terdefinisi

let suhuair= -50;

if (suhuair >= -100 && suhuair <= 0) {
console.log(`suhu air ${suhuair}, air berada dalam kondisi beku`);
}
else if (suhuair >=1 && suhuair <= 100){
    console.log(`suhu air ${suhuair}, air berada dalam kondisi cair`)
}
else if (suhuair >= 101 && suhuair <= 500){
    console.log(`suhu air ${suhuair}, air berada dalam kondisi beruap`)
}
else {
    console.log (`suhu tidak terdefinisi`)
}

// -plat kuning/motor BBM subsidi
// - mobil CC <1500 PERTAMAX
// - mobil CC >= 1500 PERTAMAX TURBO

let ccmobil = 1000
let platkuning = 'bbm subsidi'
let motor = 'bbm subsidi'

if (platkuning == 'bbm subsidi' || motor == 'bbm subsidi' )
console.log(`untuk kendaraan plat kuning dan motor, akan mendapatkan ${platkuning}`)

if (ccmobil < 1500){
    console.log(`untuk mobil bermesin cc ${ccmobil}, berbahan bakar pertamax`)
}
else if (ccmobil >= 1500){
    console.log(`untuk mobil bermesin cc ${ccmobil}, berbahan bakar pertamax turbo`)
}


