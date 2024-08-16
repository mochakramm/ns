const fs = require('fs')

const readline= require('readline');                                        //membuat variabel terlebih dahulu sebelum menggunakan module 
const rl = readline.createInterface({                                       // membuat interface untuk form pertanyaan di terminal
    input: process.stdin,
    output: process.stdout
});

//membuat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}
//membuat file contacts.json dalom folder data
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


//membuat pertanyaan di dalam prompt
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban)
        })
    })
}
// membuat fungsi simpan kontak
const simpanKontak = (nama, noHP, email) => {
    const contact = {nama, noHP, email}                                // membuat objek untuk menampung pertanyaan yang telah dibuat dengan membuat variable
    const file = fs.readFileSync ('data/contacts.json', 'utf-8')     // membuat variabel file untuk menginisialisasi dan melihat data-contact yang telah dibuat sebelumnya 
    const contacts = JSON.parse (file)                               // membuat variable contacts kemudian di ubah menjadi tipe file json dengan variabel file
    contacts.push(contact)                                           // menyatukan variabel contacts dengan variabel contact
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)) // menulis apa yang ada di variabel contacts ke dalam file contact.json dan mengubahnya terlebih dahulu dari json menjadi string
    console.log('terimakasih sudah mengisi')
    rl.close()
} 

module.exports = {tulisPertanyaan,simpanKontak}