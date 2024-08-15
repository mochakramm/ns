const fs = require('fs');


//try {
//    fs.writeFileSync('data/text.txt', 'menulis file secara syncronous');
//} catch (e) {
//    console.log (e);
//}


//menuliskan string ke file secara (asyncronous)
//const akram = ("akram ganteng")
//fs.writeFile('data/text.txt', 'menuliskan file secara asinkronoussss', (e) => {
//    console.log(e,akram)
//});

//membaca isi file secara sinkronous

//const data = fs.readFileSync('data/text.txt','utf-8');
//console.log(data);

//membaca isi file secara asinkronous

//fs.writeFile('data/text.txt', 'akram ganteng bingitsss', (e) => {
//    console.log(e)
//})

//const data = fs.readFile('data/text.txt','utf-8',(e, data) => {
//    if (e) 
//        return e
//    else console.log(data)
    
//})

const readline= require('readline');                                        //membuat variabel terlebih dahulu sebelum menggunakan module 
const rl = readline.createInterface({                                       // membuat interface untuk form pertanyaan di terminal
    input: process.stdin,
    output: process.stdout
});

rl.question ('masukkan nama anda : ', (nama) => {                           // membuat form question di terminal
    rl.question ('masukkan nim anda : ', (nim) => {                         // membuat pertanyaan di terminal
        rl.question ('masukkan no Hp anda : ', (noHP) => {
           const contact = {nama, nim, noHP}                                // membuat objek untuk menampung pertanyaan yang telah dibuat dengan membuat variable
           const file = fs.readFileSync ('data/contacts.json', 'utf-8')     // membuat variabel file untuk menginisialisasi dan melihat data-contact yang telah dibuat sebelumnya 
           const contacts = JSON.parse (file)                               // membuat variable contacts kemudian di ubah menjadi tipe file json dengan variabel file
           console.log(contacts)                                            // menampilkan variabel contacts
           contacts.push(contact)                                           // menyatukan variabel contacts dengan variabel contact
           fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)) // menulis apa yang ada di variabel contacts ke dalam file contact.json dan mengubahnya terlebih dahulu dari json menjadi string
           console.log('terimakasih sudah mengisi')                         // perintah untuk menampilkan pesan 
            rl.close();                                                     // perintah untuk menutup form pertanyaan
        })
    })
})
