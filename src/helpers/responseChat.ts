/**
 * Kumpulan response chat untuk bot
 */
export const responseChat = {
    startChat: `Hai salam kenal, Saya <b>Octo Guard</b> 🐙!

Saya adalah bot <b>administrator</b> grup yang menggunakan Bot API Telegram. Saya dapat melakukan banyak hal seperti berikut:
    
1. Saya bisa <b>menendang</b> ataupun <b>memblokir</b> anggota dari grup
2. Saya bisa <b>menyapa</b> anggota yang baru bergabung dengan pesan yang bisa Anda kustomisasi
3. Saya bisa Anda gunakan untuk memberikan <b>peringatan</b> kepada anggota grup Anda. Jika jumlah peringatan yang mereka terima mencapai batas maksimal, Saya otomatis akan menendang atau memblokir mereka dari grup
    
Dan masih banyak lagi yang bisa Saya lakukan. Tekan tombol "Daftar Perintah" di bawah untuk mendapatkan daftar perintah yang lebih lengkap.
    
Saya bisa bekerja lebih baik jika Anda menjadikan Saya sebagai admin di dalam grup Anda, jika tidak, Saya tidak bisa melakukan tindakan seperti menendang, memblokir, ataupun memberikan peringatan kepada anggota grup Anda.`,
    listCommand: `<b>Daftar Perintah</b>

Beberapa perintah yang bisa digunakan untuk admin adalah sebagai berikut:

1. <code>/kick [username|mention]</code> - menendang seorang anggota dari grup
2. <code>/ban [username|mention]</code> - memblokir seorang anggota dari grup
3 <code>/unban [username|mention]</code> - membatalkan pemblokiran seorang anggota dari grup`,
    pinChat: {
        incorrectCmd: 'Gunakan perintah `/pin` dengan cara *reply* salah satu pesan yang ingin disematkan',
        onlyInGroup: 'Perintah `/pin` untuk saat ini hanya dapat digunakan di dalam grup'
    },
    unpinChat: {
        incorrectCmd: 'Gunakan perintah `/unpin` dengan cara *reply* salah satu pesan tersematkan',
        onlyInGroup: 'Perintah `/unpin` untuk saat ini hanya dapat digunakan di dalam grup'
    }
}