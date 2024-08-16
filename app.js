const { rejects } = require('assert');
const fs = require('fs');

const contacts = require('./contacts.js')



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


//const pertanyaan2 = () => {
//    return new Promise((resolve, reject) => {
//        rl.question('masukkan No Hp Anda : ', (noHP) => {
//            resolve(noHP)
//        })
//    })
//}
//const pertanyaan3 = () => {
//    return new Promise((resolve, reject) => {
//        rl.question('masukkan email anda : ', (email) => {
//            resolve(email)
//        })
//    })
//}

const main = async() => {
    const nama = await contacts.tulisPertanyaan('masukkan nama anda : ')
    const noHP = await contacts.tulisPertanyaan('masukkan noHP anda : ')
    const email = await contacts.tulisPertanyaan('masukkan email anda : ')

    contacts.simpanKontak(nama,email,noHP)
}

main()



