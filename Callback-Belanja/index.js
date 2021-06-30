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