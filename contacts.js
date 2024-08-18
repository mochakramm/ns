const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

//const readline= require('readline');                                        //membuat variabel terlebih dahulu sebelum menggunakan module 
//const rl = readline.createInterface({                                       // membuat interface untuk form pertanyaan di terminal
//    input: process.stdin,
//    output: process.stdout
//});

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
//const tulisPertanyaan = (pertanyaan) => {
//    return new Promise((resolve, reject) => {
//        rl.question(pertanyaan, (jawaban) => {
//            resolve(jawaban)
//        })
//    })
//}
// membuat fungsi simpan kontak

const loadContacts = () => {
    const file = fs.readFileSync ('data/contacts.json', 'utf-8')     // membuat variabel file untuk menginisialisasi dan melihat data-contact yang telah dibuat sebelumnya 
    const contacts = JSON.parse (file)
    return contacts
}



const simpanKontak = (nama, email, noHP) => {
    const contact = {nama, email, noHP}                                // membuat objek untuk menampung pertanyaan yang telah dibuat dengan membuat variable
    // const file = fs.readFileSync ('data/contacts.json', 'utf-8')     // membuat variabel file untuk menginisialisasi dan melihat data-contact yang telah dibuat sebelumnya 
    // const contacts = JSON.parse (file)                               // membuat variable contacts kemudian di ubah menjadi tipe file json dengan variabel file
    const contacts = loadContacts()

    //cek duplikat pada file json jika ada maka tidak dijalankan
    const duplikat = contacts.find((contact) => contact.nama === nama )

    if (duplikat) {
        const peringatan = (chalk.red.inverse.bold("nama sudah digunakan , gunakan nama lain ! "))
        console.log (peringatan)
        return false
    }
    // fungsi cek email jika tidak ada maka tidak apa apa jika ada namun salah mengisi form email seperti seharusnya maka muncul tampilan
    if (email) {
        if (!validator.isEmail(email)){
            const peringatanEmail= (chalk.red.inverse.bold("EMAIL TIDAK VALID"))
            console.log(peringatanEmail)
            return false
        }
    }
    //cek nomor handphone apakah valid
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        const peringatanNohp= (chalk.red.inverse.bold("NOMOR HANDPHONE TIDAK TERDAFTAR"))
        console.log(peringatanNohp)
        return false
    }
   
    contacts.push(contact)                                           // menyatukan variabel contacts dengan variabel contact
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)) // menulis apa yang ada di variabel contacts ke dalam file contact.json dan mengubahnya terlebih dahulu dari json menjadi string
    const sukses = (chalk.green.inverse.bold('terimakasih sudah mengisi'))
    console.log(sukses)
    
} 

const listContact = () => {
    const contacts = loadContacts()
    const sukses = (chalk.green.inverse.bold('daftar nama dan no hp contact'))
    console.log (sukses)
    contacts.forEach((contact, i) => {
        console.log (chalk.green.cyan.bold(`${i + 1 }. ${contact.nama} - ${contact.noHP}`))
    })
}

const detailContact = (nama) => {
    const contacts = loadContacts()

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase() 
    )

    if(!contact) {
        console.log(chalk.red.cyan.bold(`${nama} tidak ditemukan `))
        return false
    }

    console.log(chalk.green.inverse.bold(contact.nama))
    console.log(chalk.green.cyan.bold(contact.noHP))

    if(contact.email){
        console.log(chalk.green.cyan.bold(contact.email))
        return false
    }
    

}

const deleteContact = (nama) => {
    const contacts = loadContacts()
    const newcontact = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase() // membuat array baru dengan filter ketika nama tidak sama dengan nama yang ingin dihapus
    )

    if(newcontact.length === contacts.length) {
        console.log(chalk.red.cyan.bold(`${nama} tidak ditemukan`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newcontact))
    console.log(chalk.green.cyan.bold(`${nama} sudah dihapus`))
}


module.exports = {simpanKontak, listContact, detailContact, deleteContact}