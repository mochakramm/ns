const fs = require('fs');

const contacts = require('./contacts.js')

const yargs= require('yargs')




yargs.command({
    command : 'tambah',
    describe : 'menambahkan kontak baru',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption : true,
            type : 'string',

        },
        email : {
            describe : 'email',
            demmandOption : false,
            type : 'string'
        },
        noHP : {
            describe : 'Nomor Handphone',
            demmandOption : true,
            type : 'string'
        }

    },

    handler(argv) {
       contacts.simpanKontak(argv.nama, argv.email, argv.noHP)
    }

}).demandCommand()

//menampilkan nama dan nomor handphone contact

yargs.command({
    command: 'list',
    describe: 'menampilkan semua nama dan no hp contact',
    handler() {
        contacts.listContact()
    }
})


yargs.command({
    command: 'detail',
    describe: 'menampilkan detail sebuah contact',
    builder: {
        nama : {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    }
})

yargs.command({
    command: 'delete',
    describe: 'menghapus sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})



yargs.parse()










//const main = async() => {
//    const nama = await contacts.tulisPertanyaan('masukkan nama anda : ')
//    const noHP = await contacts.tulisPertanyaan('masukkan noHP anda : ')
//    const email = await contacts.tulisPertanyaan('masukkan email anda : ')

//    contacts.simpanKontak(nama,noHP,email)
//}

//main()