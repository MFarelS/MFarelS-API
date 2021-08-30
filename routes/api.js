var express = require('express')
var router = express.Router()
const { spawn, exec } = require('child_process')
var fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const { download } = require('fetch-video')
var PastebinAPI = require('pastebin-js')
const google = require('google-it')
const Kitsu = require('kitsu.js')
const kitsu = new Kitsu()
const cheerio = require('cheerio')
const fbdl = require('fbdl-core')
const TinyURL = require('tinyurl')
const Genius = new (require("genius-lyrics")).Client('YOUR_ACCESS_TOKEN') // Login/Sign Up in https://genius.com/api-clients# , Copy And Paste Your Access Token
const QRCode = require('qrcode')
const summarizer = require('text-summarisation')
const ytdl = require('ytdl-core')
const speed = require('performance-now')

_ = require('lodash')
__path = process.cwd();

var fs = require('fs'),
    request = require('request');

router.get('/magernulis1', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/magernulis1?text=Parel+Gans' })
    var panjangKalimat = text.replace(/(\S+\s*){1,10}/g, '$&\n')
    var panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
    var result = process.cwd() + '/public/hasil/' +  'magernulis1-after.jpg'
    spawn('convert', [
        __path + '/public/bahan/magernulis1-before.jpg',
        '-font',
        __path + '/public/bahan/Zahraaa.ttf',
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        panjangBaris,
        __path + '/public/hasil/magernulis1-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Menulis', url: 'https://mfarelsz.xyz/api/magernulis1?text=' + text })
    })
    .on('exit', () => {
        //res.status(200).json({ creator: 'MFarelS', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/magernulis1-after.jpg' })
        //res.sendFile(result)
    })
})

router.get('/magernulis1V2', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/magernulis1V2?text=Parel+Gans' })
    var panjangKalimat = text.replace(/(\S+\s*){1,10}/g, '$&\n')
    var panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
    var result = process.cwd() + '/public/hasil/' +  'magernulis1-after.jpg'
    spawn('convert', [
        __path + '/public/bahan/magernulis1-before.jpg',
        '-font',
        __path + '/public/bahan/Zahraaa.ttf',
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        panjangBaris,
        __path + '/public/hasil/magernulis1-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Menulis', url: 'https://mfarelsz.xyz/api/magernulis1V2?text=' + text })
    })
    .on('exit', () => {
        //res.status(200).json({ creator: 'MFarelS', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })
        //res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/magernulis1-after.jpg' })
        res.sendFile(result)
    })
})

router.get('/hartatahta', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/hartatahta?text=Z+Cansss' })
    var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    const apa = 'HARTA\nTAHTA\n' + hartatahtaapa.toUpperCase()
    var result = process.cwd() + '/public/hasil/' +  'hartatahta-after.jpg'
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/public/bahan/Farelll.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/public/bahan/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        apa,
        '-wave',
        '10x175',
        __path + '/public/hasil/hartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat Harta Tahta', url: 'https://mfarelsz.xyz/api/hartatahta?text=' + text })
    })
    .on('exit', () => {
        /*res.status(200).json({ creator: 'MFarelSZ', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })*/
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/hartatahta-after.jpg' })
        //res.sendFile(result)
    })
})

router.get('/hartatahtaV2', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/hartatahtaV2?text=Z+Cansss' })
    var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    const apa = 'HARTA\nTAHTA\n' + hartatahtaapa.toUpperCase()
    var result = process.cwd() + '/public/hasil/' +  'hartatahta-after.jpg'
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/public/bahan/Farelll.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/public/bahan/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        apa,
        '-wave',
        '10x175',
        __path + '/public/hasil/hartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat Harta Tahta', url: 'https://mfarelsz.xyz/api/hartatahtaV2?text=' + text })
    })
    .on('exit', () => {
        /*res.status(200).json({ creator: 'MFarelSZ', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })*/
        //res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/hartatahta-after.jpg' })
        res.sendFile(result)
    })
})

router.get('/customhartatahta', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/customhartatahta?text=Harta\nTahta\nZ' })
    var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    var result = process.cwd() + '/public/hasil/' +  'customhartatahta-after.jpg'
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/public/bahan/Farelll.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/public/bahan/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        hartatahtaapa,
        '-wave',
        '10x175',
        __path + '/public/hasil/customhartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat ' + text, url: 'https://mfarelsz.xyz/customhartatahta?text=' + text })
    })
    .on('exit', () => {
        /*res.status(200).json({ creator: 'MFarelSZ', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })*/
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/customhartatahta-after.jpg' })
        //res.sendFile(result)
    })
})

router.get('/customhartatahtaV2', (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/customhartatahtaV2?text=Harta\nTahta\nZ' })
    var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    var result = process.cwd() + '/public/hasil/' +  'customhartatahta-after.jpg'
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/public/bahan/Farelll.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/public/bahan/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        hartatahtaapa,
        '-wave',
        '10x175',
        __path + '/public/hasil/customhartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat ' + text, url: 'https://mfarelsz.xyz/api/customhartatahtaV2?text=' + text })
    })
    .on('exit', () => {
        /*res.status(200).json({ creator: 'MFarelSZ', status: 200, text: text, result: result.replace(process.cwd(), req.headers.host).replace('/public', '') })*/
        //res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, text: text, result: 'https://mfarelsz.xyz/hasil/customhartatahta-after.jpg' })
        res.sendFile(result)
    })
})

/*router.get('/shaunthesheep', async (req, res) => {
    var urlgambar = req.query.urlgambar
    if (_.isEmpty(urlgambar)) return res.status(400).json({ creator: 'MFarelSZ', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter URL Gambar', contoh: `https://api.mfarelsz.xyz/api/shaunthesheep?urlgambar=https://mfarelsz.xyz/api/assets/images/25-Februari-2020.jpeg` })
  var url = `https://api.xteam.xyz/videomaker/shaunthesheep?url=` + urlgambar + `&APIKEY=`
  var filename = 'shaunthesheep.mp4'

  const downloader = download(url, filename);
  downloader.on('progress', progress => console.log(`Current progress ${progress}`));
  downloader.on('speed', speed => console.log(`Current speed ${speed}`));
  downloader.on('stats', console.log.bind(console));
  downloader.go()
    .then(() => res.sendFile('shaunthesheep.mp4')) 
})*/

router.get('/pastebin', async (req, res) => {
  var judul = req.query.judul
  var text = req.query.text
  if (_.isEmpty(judul)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Judul/Text', contoh: 'https://mfarelsz.xyz/api/pastebin?judul=Parel&text=Ganss' })
  if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Judul/Text', contoh: 'https://mfarelsz.xyz/api/pastebin?judul=Parel&text=Ganss' })
  pastebin = new PastebinAPI({
                  'api_dev_key' : 'YOUR_DEV_KEY',
                  'api_user_name' : 'YOUR_PASTEBIN_USERNAME',
                  'api_user_password' : 'YOUR_PASTEBIN_PASSWORD'
                 });
//LOGIN / SIGNUP https://pastebin.com/doc_api#1 COPY&PASTE DEV KEY ON YOUR_DEV_KEY
  pastebin
    .createPaste(`${text}`, `${judul}`)
    .then(function (data) {
      res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, result: data });
    })
    .fail(function (err) {
      res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat' })
    })
})

router.get('/randomquotes', async (req, res) => {
  const data = fs.readFileSync('./lib/quote.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, quotes: randKey.quote, oleh: randKey.by })
})

router.get('/kode-bahasa', async (req, res) => {
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, message: `List kode Bahasa\n
  =Code=      =Bahasa=
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      ` })
})

router.get('/tts', async (req, res) => {
  var codebahasa = req.query.codebahasa
  var text = req.query.text
  if (_.isEmpty(codebahasa)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Kode Bahasa/Text', contoh: 'https://mfarelsz.xyz/api/tts?codebahasa=id&text=Parel' })
  if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Kode Bahasa/Text', contoh: 'https://mfarelsz.xyz/api/tts?codebahasa=id&text=Parel' })
  const ttsGB = require('node-gtts')(codebahasa)
        try {
            ttsGB.save(__path + '/public/bahan/tts.mp3', text, function () {
            res.sendFile(__path + '/public/bahan/tts.mp3')
        })
    } catch (err) {
            res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Membuat' })
        }
})

router.get('/koin', async (req, res) => {
  const koinn = [__path + '/public/bahan/Koin-Rp500.png', __path + '/public/bahan/Coin-Rp500.png']
  const coinn = koinn[Math.floor(Math.random() * (koinn.length))]
  res.sendFile(coinn)
})

router.get('/dadu', async (req, res) => {
  const daduu = [__path + '/public/bahan/dice1.png', __path + '/public/bahan/dice2.png', __path + '/public/bahan/dice3.png', __path + '/public/bahan/dice4.png', __path + '/public/bahan/dice5.png', __path + '/public/bahan/dice6.png']
  const dudda = daduu[Math.floor(Math.random() * (daduu.length))]
  res.sendFile(dudda)
})

router.get('/kapankah', async (req, res) => {
  var kapan = req.query.kapan
  if (_.isEmpty(kapan)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Kapan', contoh: 'https://mfarelsz.xyz/api/kapankah?kapan=Parel+Jadian' })
  const angka = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const kaang = angka[Math.floor(Math.random() * (angka.length))]
  const kapankah = [`${kaang} MiliDetik Lagi`, `${kaang} Detik Lagi`, `${kaang} Menit Lagi`, `${kaang} Jam Lagi`, `${kaang} Hari Lagi`, `${kaang} Minggu Lagi`, `${kaang} Bulan Lagi`, `${kaang} Tahun Lagi`, `${kaang} Abad Lagi`]
  const kapansih = kapankah[Math.floor(Math.random() * (kapankah.length))]
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, jawaban: kapansih })
})

router.get('/apakah', async (req, res) => {
  var apa = req.query.apa
  if (_.isEmpty(apa)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Apa', contoh: 'https://mfarelsz.xyz/api/apakah?apa=apakah+parel+gantengss' })
  const paa = ["Ya", "Mungkin", "Bisa jadi", "Ulangi", "Tidak", "Aku tidak mengerti", "Gtw", "YNTKTS", "Yo Ndak Tau Kok Tanya Saya", "YNTKTS\n⣿⣿⣿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠿⠿⠛⢿⣿\n⣿⣿⢡⡄⣀⣂⣀⣂⠀⠈⠹⣿⣿⡿⠉⠀⠀⣀⣤⣤⣄⠀⢀⣿\n⣿⣿⣮⡤⢋⡉⠉⠉⠙⠈⢸⣿⣿⡇⠀⠀⡀⣀⠀⠠⠈⠙⢦⣿\n⣿⣿⣿⣧⣤⣾⣷⣴⣾⣿⣿⣿⣿⣷⡀⠀⢿⣿⣶⣷⣿⣷⣶⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠘⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡙⡹⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠢⢽⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⣤⣤⣄⣂⣀⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⡿⠿⢿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠉⠁⠀⠀⠀⠁⠀⠀⠙⠻⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣶⣶⠶⠿⣿⣷⠆⡀⢠⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣷⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\nYO NDAK TAU KOK TANYA SAYA", "⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⡀⢀⢀⢀⢀⢀⢀⢀⢀\n⢀⢀⢀⢀⢀⢀⢀⡤⠒⠋⠉⠁⢀⠉⠉⠑⠲⢄⡀⢀⢀⢀\n⢀⢀⢀⢀⢀⠔⢁⡠⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠉⢢⡀⢀\n⢀⢀⢀⢠⠃⣴⡇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠱⡄\n⢀⢀⢠⠃⢀⣿⣧⣀⢀⢀⣀⢀⢀⢀⢀⢀⢀⢀⢀⠈⣆⠹⡀\n⢀⢀⡸⢀⢀⠹⣿⣿⣿⣿⣿⣿⣶⣶⣶⣤⡀⢀⢀⣴⡿⢀⡇\n⢀⢀⡇⢀⢀⢀⠤⣾⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⢀⡇\n⢀⢀⢱⢀⣠⣤⣶⣿⣿⣧⣉⣿⣿⡟⣃⣿⢿⡿⢀⢀⢀⢀⡇\n⢀⢀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⢀⢀⢀⢀⡰⠁\n⢀⢀⢀⠘⣿⣿⣿⣿⣿⣏⡀⢀⣸⣿⣿⢀⢀⢀⢀⢀⡰⠃\n⢀⢀⢀⢀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⡏⢀⢀⢀⣠⠞⠁⢀\n⢀⢀⢀⢀⢀⢀⠈⠙⠿⢿⣿⣿⣿⣿⣇⡠⠔⠊⠁⢀⢀⢀\n⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀", "Gtw Sih"]
  const aap = paa[Math.floor(Math.random() * (paa.length))]
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, jawaban: aap })
})

router.get('/owner', async (req, res) => {
    res.status(200).json({ By: 'MFarelS', Website: 'mfarelsz.xyz', YouTube: 'MFarelSZ', Instagram: '@mfarelsz', WhatsApp: '+62 812 1908 7237', GitHub: 'MFarelS', Saweria: 'MFarelS', URL_Website: `https://mfarelsz.xyz`, URL_YouTube: `https://www.youtube.com/channel/UCYfBSMa1JJbKwD8bNm-etiA`, URL_Instagram: `https://instagram.com/mfarelsz`, URL_WhatsApp: `https://wa.me/+6281219087237`, URL_GitHub: `https://github.com/MFarelS`, URL_Saweria: `https://saweria.co/MFarelS` })
})

router.get('/covid19-indonesia', async (req, res) => {
  const apipositif = await axios.get(`https://api.kawalcorona.com/positif/`)
  const apisembuh = await axios.get(`https://api.kawalcorona.com/sembuh/`)
  const apimeninggal = await axios.get(`https://api.kawalcorona.com/meninggal/`)
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, Negara: 'Indonesia', Positif: apipositif.data.value, Sembuh: apisembuh.data.value, Meninggal: apimeninggal.data.value })
})

router.get('/google', async (req, res) => {
    var q = req.query.q
  if (_.isEmpty(q)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Query', contoh: 'https://mfarelsz.xyz/api/google?q=MFarelS' })
    google({ 'query': q }).then(results => {
    let vars = ``
    for (let i = 0; i < results.length; i++) {
        vars +=  `${results[i].title}\n${results[i].link}\n${results[i].snippet}\n\n`
    }
  res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, result: vars })
    }).catch(e => {
        console.log(e)
        res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Mencari\n'+e })
            })
})

router.get('/qrcode', async (req, res) => {
    var text = req.query.text
  if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/qrcode?text=FZ' })
    let response = await fetch(`https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(text)}&chs=512x512`)
    response.body.pipe(res)
})

router.get('/qrcodeV2', async (req, res) => {
    var text = req.query.text
  if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/qrcodeV2?text=FZ' })
    res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, result: `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(text)}&chs=512x512` })
})

router.get('/qrcode2', async (req, res) => {
/*    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/qrcode2?text=FZ' })
    QRCode.toDataURL(text, async function (err, url) {
        const file = url
        const fileOpts = {
        fileName: '/public/hasil/qrcode2.jpg',
        contentType: 'image/jpg',
        };
        res.sendFile(''+Buffer.from(file.substr(22), 'base64'), fileOpts)
})*/
})

router.get('/qrcode2V2', async (req, res) => {
/*    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/qrcode2V2?text=FZ' })
    QRCode.toDataURL(text, async function (err, url) {
        const file = url
        const fileOpts = {
        fileName: '/public/hasil/qrcode2.jpg',
        contentType: 'image/jpg',
        };
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, result: 'https://mfarelsz.xyz/hasil/qrcode2.jpg' })
})*/
})
router.get('/penyegaran-timelane', async (req, res) => {
    const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
    let pep = pptl[Math.floor(Math.random() * pptl.length)]
    let response = await fetch(pep)
    response.body.pipe(res)
})

router.get('/kucing', async (req, res) => {
    q2 = Math.floor(Math.random() * 900) + 300;
    q3 = Math.floor(Math.random() * 900) + 300;
    let response = await fetch('http://placekitten.com/'+q3+'/'+q2)
    response.body.pipe(res)
})

router.get('/pokemon', async (req, res) => {
    q7 = Math.floor(Math.random() * 890) + 1;
    let response = await fetch('https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png')
    response.body.pipe(res)
})

router.get('/anime', async (req, res) => {
    var q = req.query.q
    if (_.isEmpty(q)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Query', contoh: 'https://mfarelsz.xyz/api/anime?q=Naruto' })
    const search = q
    kitsu.searchAnime(search).then(async result => {
    
    let anime = result[0]
    res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', gambar: `${anime.posterImage.original}`, judul: `${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, deskripsi: `${anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0]}`, nama_anime: `${anime.titles.romaji}`, rating_umur: `${anime.ageRating}`, nsfw: `${anime.nsfw ? 'Iya' : 'Tidak'}`, avg_rating: `${anime.averageRating}`, rank_by_rating: `${anime.ratingRank}`, rank_by_popularitas: `${anime.popularityRank}`, jumlah_episode: `${anime.episodeCount ? anime.episodeCount : 'N/A'}` })
})
})

router.get('/animedl1/', async (req, res) => {
    var q = req.query.q
    if (_.isEmpty(q)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Query', contoh: 'https://mfarelsz.xyz/api/animedl1?q=Naruto' })
    await axios.get('https://nimegami.com/?s=' + q).then(async res => {
    const $ = await cheerio.load(res.data);
    const linkanime1 = await $('div[class="archive"] > div[class="archive-a"] > article > div[class="thumbnail"] > a');
    let link1 = await linkanime1.attr('href');
    await axios.get(link1).then(async res => {
        let links360 = await [];
        let links480 = await [];
        let links720 = await [];
        const $$ = await cheerio.load(res.data);
        await $$('div[class="download_box"] > div[class="download"] > div[class="batch-dlcuy"] > ul > li:nth-child(1) > a').each(async (index, value) => {
        let linkall360 = await $$(value).attr('href');
        await links360.push({linkall360});
        })
        await $$('div[class="download_box"] > div[class="download"] > div[class="batch-dlcuy"] > ul > li:nth-child(2) > a').each(async (index, value) => {
        let linkall480 = await $$(value).attr('href');
        await links480.push({linkall480})
        })
        await $$('div[class="download_box"] > div[class="download"] > div[class="batch-dlcuy"] > ul > li:nth-child(3) > a').each(async (index, value) => {
        let linkall720 = await $$(value).attr('href');
        await links720.push({linkall720})
        })
        let judul = await $$('div[class="single"] > article[class="single"] > h1[class="title"]').text()
        let result360 = await JSON.stringify(links360).replace(/,/g, '\n').replace(/"/g, '').replace(/linkall360/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '').toString();
        let result480 = await JSON.stringify(links480).replace(/,/g, '\n').replace(/"/g, '').replace(/linkall480/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '').toString();
        let result720 = await JSON.stringify(links720).replace(/,/g, '\n').replace(/"/g, '').replace(/linkall720/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '').toString();
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', judul: `${judul}`, link: `${link1}\n\n⬇️360p⬇️\n${result360}\n\n⬇️480p⬇️\n${result480}\n\n⬇️720p⬇️\n${result720}` })
            }).catch(async(err)=> {
                res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Mencari\n'+err })
            })
        }).catch(async(err)=> {
            res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Mencari\n'+err })
        })
})

router.get('/animedl2', async (req, res) => {
    var q = req.query.q
    if (_.isEmpty(q)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Query', contoh: 'https://mfarelsz.xyz/api/animedl2?q=Naruto' })
        await axios.get('https://kusonime.com/?s=' + q).then(async res => {

        const $ = await cheerio.load(res.data);
        const linkanime1 = await $('div[class="content"] > h2 > a');
        let link1 = await linkanime1.attr('href');
        
        await axios.get(link1).then(async res => {
        let links360 = await [];
        let links480 = await [];
        let links720 = await [];
        let links1080 = await [];
        const $$ = await cheerio.load(res.data);
        await $$('.dlbod > .smokeddl > .smokeurl > a').slice(0, 3).each(async (index, value) => {
            let link360 = await $$(value).attr('href');
            await links360.push({link360});
            
        });
        
        await $$('.dlbod > .smokeddl > .smokeurl + .smokeurl > a').slice(0, 3).each(async (index, value) => {
            let link480 = await $$(value).attr('href');
            await links480.push({link480});
            
        });
        
        await $$('.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl > a').slice(0, 3).each(async (index, value) => {
            let link720 = await $$(value).attr('href');
            await links720.push({link720});
            
        });
        
        await $$('.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl + .smokeurl > a').each(async (index, value) => {
            let link1080 = await $$(value).attr('href');
            await links1080.push({link1080});
            
        });
        
        let judul = await $$('div[class="post-thumb"] > h1[class="jdlz"]').text();
        let genre = await $$('div[class="info"] > p:nth-child(2)').text();
        let totaleps = await $$('div[class="info"] > p:nth-child(7)').text();
        let durasi = await $$('div[class="info"] > p:nth-child(9)').text();
        let tglrilis = await $$('div[class="info"] > p:nth-child(10)').text();
        let result360 = await JSON.stringify(links360).replace(/,/g, '\n').replace(/"/g, '').replace(/link360/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
        let result480 = await JSON.stringify(links480).replace(/,/g, '\n').replace(/"/g, '').replace(/link480/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
        let result720 = await JSON.stringify(links720).replace(/,/g, '\n').replace(/"/g, '').replace(/link720/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
        let result1080 = await JSON.stringify(links1080).replace(/,/g, '\n').replace(/"/g, '').replace(/link1080/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', judul: judul, genre: genre, total_eps: totaleps, durasi: durasi, tgl_rilis: tglrilis, download: `Resolusi 360p : \n${result360}\n\nResolusi 480p : \n${result480}\n\nResolusi 720p : \n${result720}\n\nResolusi 1080p : \n${result1080}` })
            }).catch(async(err)=> {
                res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Mencari\n'+err })
            })
        }).catch(async(err)=> {
            res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: 'Error. Internal Server Error, Gagal/Kesalahan Dalam Mencari\n'+err })
        })
})

router.get('/facebookdl', async (req, res) => {
    var link = req.query.link
    if (_.isEmpty(link)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Link', contoh: 'https://mfarelsz.xyz/api/facebookdl?link=link video fb' })
    fbdl.getInfo(link)
    .then((response) => {
    let video = response.rawVideo
    TinyURL.shorten(`${video}`, function(res) {
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', judul: `${response.title}`, deskripsi: `${response.description}`, durasi: `${response.duration} Menit:Detik`, genre: `${response.genre}`, diupload_pada_tgl: `${response.publishedAt}`, nsfw: `${response.nsfw ? 'Iya' : 'Tidak'}`, kualitas: `${response.quality}`, size: `${response.size}`, total_komentar: `${response.comments}`, dishare_sebanyak: `${response.shares} kali`, link_dl: `${res}` })
        console.log(response)
        
                })

            }).catch((err) => {
                res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: `ERROR (MUNGKIN SALAH LINK, PASTIKAN KAMU MEMASUKKAN LINK www.facebook.com BUKAN https://fb.watch) | ${err}` })
        })
})

router.get('/lirik', async (req, res) => {
    try {
        var lagu = req.query.lagu
        if (_.isEmpty(lagu)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Lagu', contoh: 'https://mfarelsz.xyz/api/lirik?lagu=Kekasih+Dilema' })
        const songs = await Genius.songs.search(lagu);
        const lyrics = await songs[0].lyrics();

        if (lyrics.length > 4095) {
            res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: `ERROR LIRIK KEPANJANGAN` })
    } else {
        res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', judul: `${lagu}`, lirik: `${lyrics.slice(0, 4096)}` })
        return
    }
    } catch(e) {
    res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: `ERROR LIRIK TIDAK DITEMUKAN - ${e}` })
    }
})

router.get('/rangkum', async (req, res) => {
    var text = req.query.text
    if (_.isEmpty(text)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter Text', contoh: 'https://mfarelsz.xyz/api/rangkum?text=aksjksnjbjfbjsbcsjcbabdbwjbcdbgsuchsubhuuehcijiejiehio\nkjfiehrihicehiheihcehiehihier\njsjshsbwbwebhspfiejwj\njsjsjsjsjsj' })
        summarizer(text, { sentences: 5 }).then(async result => await res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', result: `${text}` }))
        .catch((err) => {
            res.status(500).json({ By: 'MFarelS - mfarelsz.xyz', status: 500, message: `ERROR UNDEFINED - ${err}` })
        })
})

router.get('/ytmp4', async (req, res) => {
    let url = req.query.url
    if (_.isEmpty(url)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter URL', contoh: 'https://mfarelsz.xyz/api/ytmp4?url=link video yt' })
    await ytdl(url)
    .on('info', async (info) => {
      let judul = await info.videoDetails.title
      let videoid = await info.videoDetails.videoId
      let views = await info.videoDetails.viewCount + ' Views'
      let tglupload = await info.videoDetails.uploadDate
      let like = await info.videoDetails.likes
      let disilike = await info.videoDetails.dislikes
      let linkdownload = await 'https://www.y2mate.com/youtube/' + videoid
      res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', judul: judul, idvideo: videoid, views: views, tglupload: tglupload, like: like, dislike: disilike, linkdownload: linkdownload })
})
})
router.get('/speed', async (req, res) => {
    let timestamp = speed();
    let latensi = speed() - timestamp
    res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', speed: `${latensi.toFixed(4)} Detik` })
})

router.get('/cek-server-minecraft', async (req, res) => {
    var ip = req.query.ip
    var port = req.query.port
    if (_.isEmpty(ip)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter IP/PORT', contoh: 'https://mfarelsz.xyz/api/cek-server-minecraft?ip=play.prownetwork.xyz&port=19132' })
    if (_.isEmpty(port)) return res.status(400).json({ By: 'MFarelS - mfarelsz.xyz', status: 400, message: 'Error. Parameter Salah, Silahkan Masukkan Parameter IP/PORT', contoh: 'https://mfarelsz.xyz/api/cek-server-minecraft?ip=play.prownetwork.xyz&port=19132' })
    let response = await axios.get(`https://api.minetools.eu/query/${ip}/${port}`)
    const { MaxPlayers, Motd, Playerlist, Players, Plugins, Software, Version, status } = response.data
    let playernya = '\n'
    for (let username_player of Playerlist) {
        playernya += `${username_player}\n`
    }
    res.status(200).json({ By: 'MFarelS - mfarelsz.xyz', status: 200, MaxPlayers: `${MaxPlayers}`, Motd: `${Motd}`, Playerlist: `${playernya}`, Players: `${Players}`, Plugins: `${Plugins}`, Software: `${Software}`, Version: `${Version}`, status: `${status}` })
})

module.exports = router;
