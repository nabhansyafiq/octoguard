# Octo Guard Bot

**Octo Guard Bot** adalah bot administrator grup yang menggunakan Bot API Telegram.

# Instalation

## System Requirements

1. NodeJs
2. Yarn atau NPM

## Local Launch

1. Clone `https://github.com/arifai/octoguard.git`
2. Masuk ke dalam folder `octoguard`
3. Copy file `.env.example` menjadi `.env`
4. Jalankan perintah `yarn install`
5. Lalu jalankan perintah `yarn start`

## Environment Variables

- `BOT_TOKEN` - Telegram bot token. Jika belum punya, silahkan buat terlebih dahulu di [BotFather]
- `BOT_USERNAME` - Telegram bot username, tanpa diawali dengan karakter (@)

# TODO

- [ ] `/ban` - memblokir/melarang seorang anggota dari grup
- [ ] `/warn` - memberikan peringatan kepada seorang anggota dari grup
- [ ] `/kick` - menendang/mengeluarkan seorang anggota dari grup
- [ ] `/greeting` - memberikan ucapan selamat bergabung kepada anggota grup baru
- [ ] `/pin` - menyematkan sebuah pesan di grup
- [ ] `/unpin` - melepas pesan sematan di grup
- [ ] etc

# License

[Apache License 2.0](https://github.com/arifai/octoguard/blob/master/LICENSE) - boleh untuk dikembangkan. Sertakanlah lisensi dan *copyright* pada program aslinya, dan dokumentasikanlah setiap perubahan yang Anda lakukan.

<!-- Link -->
[BotFather]: https://t.me/botfather