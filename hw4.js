//Buatlah 100 nilai random (1 sampai 50) pada 1 array
let nilairandom = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random() * 50);
  nilairandom.push(nilai);
}
console.log([nilairandom.length])
console.log(nilairandom);

// pecah bilangan ganjil genap
const angkaGenap = []
const angkaGanjil = []
for(let i=0; i < nilairandom.length; i++){
  if(i % 2 === 0){
    angkaGenap.push(nilairandom[i])
  }
  else{
    angkaGanjil.push(nilairandom[i])
  }
}
console.log("angka genap:", angkaGenap)
console.log([angkaGenap.length])
console.log("angka ganjil:", angkaGanjil)
console.log([angkaGanjil.length])

//min, max, total, rata-rata
// 