const { rejects } = require('assert');
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
            describe : 'Nomor Handphonbe',
            demmandOption : true,
            type : 'string'
        }

    },

    handler(argv) {
       contacts.simpanKontak(argv.nama, argv.email, argv.noHP)
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