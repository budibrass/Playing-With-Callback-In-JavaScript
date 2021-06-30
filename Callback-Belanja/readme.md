# Callback Belanja

- index.js
```JavaScript
const Beli = require('./beli');

let obj = [
    {item : 'ssd', harga : 2000000, waktu : 1000},
    {item : 'ram', harga : 100000, waktu : 1000},
    {item : 'vga', harga : 800000, waktu : 1000},
    {item : 'speaker', harga : 350000, waktu : 1000},
    {item : 'mouse', harga : 100000, waktu : 1000}
]

Beli(5000000, obj[0], function (kembalian) {
    Beli(kembalian, obj[1], function (kembalian) {
        Beli(kembalian, obj[2], function (kembalian) {
            Beli(kembalian, obj[3], function (kembalian) {
                Beli(kembalian, obj[4], function (kembalian) {

                })
            })
        })
    })
})
```

- beli.js
```JavaScript
function beli(uang, obj, cb) {
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);

      cb(kembalian)
    } else {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;
```