const express = require('express')
const { json } = require('express/lib/response')
const app = express()


app.use(express.json())

app.use(express.urlencoded({
    extended: true
}
))

app.get('/', function (req, res) {
  res.send('Hello World')
})

//localhost:3000/data-mahasiswa/Veni_Rizki/08989330172-query?alamat=Lahat

  app.post('/data-mahasiswa/:nama/:hp-query', function (req, res) {
    res.json({
        alamat: req.query.alamat,
        npm: req.body.npm,
        nama: req.params.nama,
        agama: req.body.agama,
        hobi: req.body.hobi,
        kampus: req.body.kampus,
        prodi: req.body.prodi,
        jenis_kelamin: req.body.jenis_kelamin,
        berat_badan: req.body.berat_badan,
        hp: req.params.hp
    })
  })

app.listen(3000)