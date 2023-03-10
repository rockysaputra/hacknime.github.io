let popular = [
    {title: 'Fullmetal Alchemist: brotherhood', genre: ["Action","Adventure"], studio: 'Bones',episode: 64 , rating: 9.11 , trailer:"https://youtu.be/--IcmZkvL0Q" , sinopsis: "Setelah eksperimen alkimia yang mengerikan berjalan salah di rumah tangga Elric, Edward dan Alphonse bersaudara ditinggalkan dalam realitas baru yang membawa bencana. Mengabaikan prinsip alkimia yang melarang transmutasi manusia, anak laki-laki itu berusaha menghidupkan kembali ibu mereka yang baru saja meninggal. Sebaliknya, mereka menderita kerugian pribadi yang brutal: tubuh Alphonse hancur sementara Edward kehilangan satu kaki dan kemudian mengorbankan lengan untuk menjaga jiwa Alphonse di dunia fisik dengan mengikatnya ke baju zirah raksasa.", linkPoster:"https://cdn.myanimelist.net/images/anime/1208/94745.jpg"},

    {title: 'Bleach: Thousand-Year Blood War Arc', genre: ["Action","Adventure"], studio: 'Pierrot', episode: 13 ,rating: 9.09 , trailer:"https://youtu.be/e8YBesRKq_U" , sinopsis:"Setelah eksperimen alkimia yang mengerikan berjalan salah di rumah tangga Elric, Edward dan Alphonse bersaudara ditinggalkan dalam realitas baru yang membawa bencana. Mengabaikan prinsip alkimia yang melarang transmutasi manusia, anak laki-laki itu berusaha menghidupkan kembali ibu mereka yang baru saja meninggal. Sebaliknya, mereka menderita kerugian pribadi yang brutal: tubuh Alphonse hancur sementara Edward kehilangan satu kaki dan kemudian mengorbankan lengan untuk menjaga jiwa Alphonse di dunia fisik dengan mengikatnya ke baju zirah raksasa.",linkPoster:"https://cdn.myanimelist.net/images/anime/1764/126627.jpg"},
    
    {title: 'Steins;Gate', genre: [ "Psychological", "Time Travel"], studio: 'White Fox', episode: 24 ,rating: 9.08 , trailer:"https://youtu.be/27OZc-ku6is",sinopsis:"Ilmuwan eksentrik Rintarou Okabe selalu haus akan eksplorasi ilmiah. Bersama dengan temannya yang bodoh namun bermaksud baik Mayuri Shiina dan teman sekamarnya Itaru Hashida, Rintarou mendirikan Laboratorium Gadget Masa Depan dengan harapan dapat menciptakan inovasi teknologi yang membingungkan jiwa manusia. Terlepas dari klaim kemegahannya, satu-satunya gadget terkenal yang diciptakan ketiganya adalah microwave yang memiliki kekuatan menakjubkan untuk mengubah pisang menjadi goo hijau." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1935/127974.jpg"},

    {title: 'Gintama', genre: ["Comedy", "Action"], studio: 'Bandai Namco Pictures', episode: 51 ,rating: 9.07 , trailer:"https://youtu.be/UhJM5rVqaF8" ,sinopsis: "Gintoki, Shinpachi, dan Kagura kembali sebagai anggota tim Yorozuya yang suka bersenang-senang tetapi bangkrut! Hidup dalam realitas alternatif Edo, di mana pedang dilarang dan penguasa alien telah menaklukkan Jepang, mereka mencoba berkembang dengan melakukan pekerjaan apa pun yang bisa mereka lakukan. Namun, Shinpachi dan Kagura masih belum dibayar... Apakah Gin-chan benar-benar menghabiskan semua uangnya untuk bermain pachinko?", linkPoster:"https://cdn.myanimelist.net/images/anime/3/72078.jpg"},
    
    {title: 'Kaguya-sama', genre: ["Comedy", "Romance"], studio: 'A-1 Picture', episode: 13 ,rating: 9.07 , trailer:"https://youtu.be/vFN5K-iAyV0" ,trailer:"Anggota elit dewan siswa Akademi Shuchiin melanjutkan kejenakaan mereka sehari-hari. Presiden dewan Miyuki Shirogane bentrok setiap hari melawan wakil presiden Kaguya Shinomiya, masing-masing berjuang mati-matian untuk mengelabui yang lain agar mengakui cinta romantis mereka. Kaguya berjuang dalam batas-batas ketat keluarganya yang kaya dan tegang, memberontak terhadap sikapnya yang dingin saat dia bersikap ramah pada Shirogane dan teman-temannya yang lain." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1160/122627.jpg"},

    {title: 'Hunter X Hunter', genre: ["Fantasy", "Action"], studio: 'Madhouse', episode: 148 ,rating: 9.04 , trailer:"https://youtu.be/D9iTQRB4XRk" , sinopsis:"Pemburu mengabdikan diri untuk menyelesaikan tugas berbahaya, mulai dari melintasi wilayah dunia yang belum dipetakan hingga menemukan item dan monster langka. Sebelum menjadi Hunter, seseorang harus lulus Ujian Hunter—proses seleksi berisiko tinggi di mana sebagian besar pelamar akhirnya cacat atau lebih buruk lagi, meninggal." , linkPoster:"https://cdn.myanimelist.net/images/anime/1337/99013.jpg"},

    {title: 'Fruit Basket', genre: ["Drama", "Romance"], studio: 'TMS Entertainment', episode: 13 ,rating: 9.01 , trailer:"https://youtu.be/Ip8Btv2t_6c" , sinopsis:"Ratusan tahun yang lalu, roh Zodiak Cina dan dewa mereka bersumpah untuk tetap bersama selamanya. Dipersatukan oleh janji ini, anggota keluarga Souma yang dirasuki akan selalu kembali satu sama lain dalam keadaan apa pun. Namun, ketika ikatan ini membelenggu mereka dari kebebasan, itu menjadi beban yang tidak diinginkan—sebuah kutukan. Sebagai kepala klan, Akito yakin bahwa dia memiliki hubungan khusus dengan Souma lainnya. Sementara dia mati-matian berpegang teguh pada fantasi ini, anggota keluarga lainnya tetap terisolasi dan tertekan oleh rasa takut akan hukuman." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1085/114792.jpg"},

    {title: 'Bocchi the Rock', genre: ["Comedy"], studio: 'CloverWorks', episode: 12 ,rating: 8.92 , trailer:"https://youtu.be/Fp7lnCp_LW0" , sinopsis:"Kerinduan untuk berteman dan tampil live dengan sebuah band, Hitori Bocchi Gotou yang kesepian dan cemas secara sosial mencurahkan waktunya untuk bermain gitar. Pada hari yang menentukan, Bocchi bertemu dengan drummer lama Nijika Ijichi, yang mengundangnya untuk bergabung dengan Kessoku Band saat gitaris mereka, Ikuyo Kita, melarikan diri sebelum pertunjukan pertama mereka. Segera setelah itu, Bocchi bertemu dengan rekan band terakhirnya—bassis keren Ryou Yamada." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1448/127956.jpg"},

    {title: 'Kimetsu no Yaiba', genre: ["Action" ,"Comedy"], studio: 'Ufotable', episode: 11 ,rating: 8.88 ,trailer : "https://youtu.be/QwvWdnd2Ktg" , sinopsis:"Kehancuran insiden Kereta Mugen masih membebani anggota Korps Pembunuh Iblis. Meskipun diberi waktu untuk pulih, hidup harus terus berjalan, karena orang jahat tidak pernah tidur: setan ganas sedang meneror para wanita memikat di Distrik Hiburan Yoshiwara. Pilar Suara, Tengen Uzui, dan ketiga istrinya ada dalam kasus ini. Namun, ketika dia segera kehilangan kontak dengan pasangannya, Tengen takut akan yang terburuk dan meminta bantuan Tanjirou Kamado, Zenitsu Agatsuma, dan Inosuke Hashibira untuk menyusup ke rumah-rumah paling menonjol di distrik itu dan menemukan iblis Tingkat Atas yang bejat." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1908/120036.jpg"},

    {title: 'Mob Psycho 100', genre: ["Comedy", "Supernatural"], studio: 'Bones', episode: 13 ,rating: 8.80 , trailer : "https://youtu.be/Pr43Sayk37s" , sinopsis:"Shigeo Mob Kageyama kini semakin dewasa dan memahami perannya sebagai paranormal supranatural yang memiliki kekuatan untuk mempengaruhi kehidupan orang lain secara drastis. Dia dan mentornya Reigen Arataka terus menangani permintaan supernatural dari klien, apakah itu mengusir roh jahat atau mengatasi legenda urban yang menghantui warga." , linkPoster:"https://cdn.myanimelist.net/images/anime/1918/96303.jpg"},
]


let nowShowing =[
    {title: 'Maou Gakuin no Futekigousha', genre: ["Action", "Fantasy"], studio: 'SILVER LINK', episode: "Unknown" ,rating: 7.16 , trailer:"https://youtu.be/djFyzu3ukyk" , sinopsis:"Saat kedamaian kembali ke alam iblis, Anos Voldigoad berharap tidak lebih dari untuk mengistirahatkan reputasinya sebagai Raja Iblis Tirani dan kembali menjadi ketidakcocokan di Akademi Raja Iblis yang bergengsi. Sayangnya, ketenangan apa pun cepat berlalu: iblis, raja, dan dewa jahat merencanakan kematian Anos dari bayang-bayang.", linkPoster:"https://cdn.myanimelist.net/images/anime/1471/128323.jpg"},

    {title: 'Tomo-chan wa Onnanoko!', genre: ["Drama", "Romance"], studio: 'Lay-duce', episode: "13" ,rating: 7.63 , trailer:"https://youtu.be/nso6yXkfi3s" ,sinopsis:"Teman masa kecil Tomo Aizawa dan Junichirou Jun Kubota melakukan segalanya bersama, entah itu berlatih atau sekadar menikmati hari yang menyenangkan. Siapa pun akan berpikir bahwa keduanya adalah teman terbaik seumur hidup. Satu-satunya masalah adalah Tomo yang tomboy jatuh cinta dengan Jun, tapi dia menganggapnya seperti saudara laki-laki." , linkPoster:"https://cdn.myanimelist.net/images/anime/1444/131828.jpg"},

    {title: 'Bungou Stray Dogs', genre: ["Mysteries", "Action"], studio: 'Bones', episode: "13" ,rating: 8.64 , trailer :"https://youtu.be/z9ZhVooqA-Y" , sinopsis:"Serial televisi anime Bungo Stray Dogs berfokus pada individu yang diberkahi dengan kekuatan gaib dan menggunakannya untuk berbagai tujuan termasuk menjalankan bisnis, memecahkan misteri, dan menjalankan misi yang ditugaskan oleh mafia. Cerita utamanya mengikuti anggota Badan Detektif Bersenjata dan kehidupan sehari-hari mereka.", linkPoster:"https://cdn.myanimelist.net/images/anime/1263/132759.jpg"},
    
    {title: 'Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken', genre: ["Comedy", "Romance"], studio: 'Project No.9', episode: "12" ,rating: 7.95 , trailer:"https://youtu.be/IUq59ARXtdg" , sinopsis:"Mahiru Shiina layak mendapat julukannya Malaikat: dia adalah kecantikan ilahi yang dicintai semua orang, dan dia unggul dalam bidang akademik dan atletik. Shiina hidup di dunia yang sama sekali berbeda dari Amane Fujimiya, tetangga sebelahnya. Meskipun hidup begitu dekat bersama, mereka tidak pernah berbicara satu kali pun. Tapi keheningan mereka pecah ketika Fujimiya melihat Shiina dengan murung duduk di ayunan di tengah hujan badai yang lebat dan meminjamkan payungnya." , linkPoster:"https://cdn.myanimelist.net/images/anime/1240/133638.jpg"},

    {title: 'Buddy Daddies', genre: ["Action", "Comedy"], studio: 'P.A. Works', episode: "13" ,rating: 7.84 , trailer :"https://youtu.be/jt_k3CE3-PM" , sinopsis:"Pada Malam Natal, Miri Unasaka yang berusia empat tahun tiba di Tokyo sendirian, mencari ayahnya. Cahaya terang dan suasana ceria memandu Miri ke sebuah hotel besar dan seorang pria dengan kue yang tampak lezat. Namun, anak itu baru saja tanpa sadar masuk ke tengah rencana yang rumit dan sangat mudah untuk membunuh bos mafia yang berbahaya." , linkPoster:"https://cdn.myanimelist.net/images/anime/1553/133767.jpg"},

    {title: 'Kyokou Suiri', genre: ["Mystery", "Romance"], studio: 'Brains Base', episode: "12" ,rating: 7.50 , trailer :"https://youtu.be/VpQSApkWmtk" ,sinopsis:"Saat badai salju, teman SMA Masayuki Muroi mendorongnya dari gunung hingga mati. Namun, Masayuki selamat dari kejatuhan dan melarikan diri ke tempat yang aman berkat Yuki-Onna, semangat seorang wanita muda cantik yang dikatakan memimpin pria menuju kematian mereka — tetapi yang dia minta sebagai imbalan hanyalah uang." ,linkPoster:"https://cdn.myanimelist.net/images/anime/1901/131653.jpg"},

    {title: 'Spy Kyoushitsu', genre: ["Mystery", "Action"], studio: 'Feel.', episode: "12" ,rating: 6.28 , trailer:"https://youtu.be/BdrLDTuDQkc", sinopsis:"Satu dekade yang lalu, umat manusia menyaksikan potensi senjata mematikan yang disebabkan oleh Perang Besar. Untuk menghindari bencana lain, pemerintah di seluruh dunia terpaksa melakukan spionase untuk memenuhi agenda mereka.", linkPoster:"https://cdn.myanimelist.net/images/anime/1491/132864.jpg"},

    {title: 'Tondemo Skill de Isekai Hourou Meshi', genre: ["Mystery", "Action"], studio: 'Feel.', episode: "12" ,rating: 6.18 , trailer:"https://youtu.be/BdrLDTuDQkc",sinopsis:"Bersama dengan tiga pahlawan lainnya, Mukouda Tsuyoshi yang berusia 27 tahun dipindahkan ke dunia fantasi untuk menyelamatkan kerajaan dari ancaman misterius. Namun, segera menjadi jelas bahwa Tsuyoshi telah terseret ke dalam ritual pemanggilan secara tidak sengaja. Satu-satunya keahliannya ternyata adalah Menu Makanan, yang memungkinkan dia membuka antarmuka tempat dia dapat membeli dan mendapatkan item supermarket yang berhubungan dengan makanan dari Jepang modern.",linkPoster :"https://cdn.myanimelist.net/images/anime/1661/131889.jpg"},

    { title: 'Jujutsu Kaisen', genre: ["Action", "Supernatural"], studio: 'MAPPA', episode: "24" ,rating: 8.82 , trailer:"https://youtu.be/4A_X-Dvl0ws" , sinopsis:"Iseng-iseng terlibat dalam kegiatan paranormal tak berdasar dengan Klub Gaib, siswa sekolah menengah Yuuji Itadori menghabiskan hari-harinya di ruang klub atau rumah sakit, di mana ia mengunjungi kakeknya yang terbaring di tempat tidur. Namun, gaya hidup santai ini segera berubah menjadi aneh ketika dia tanpa sadar menemukan benda terkutuk. Memicu rangkaian kejadian supernatural, Yuuji menemukan dirinya tiba-tiba didorong ke dunia Kutukan — makhluk mengerikan yang terbentuk dari kebencian dan kenegatifan manusia — setelah menelan benda tersebut, yang ternyata adalah jari milik iblis Sukuna Ryoumen, Raja Kutukan" ,linkPoster:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg"},

    { title: 'Isekai Nonbiri Nouka', genre: ["Mystery", "Supernatural"], studio: 'Zero-G', episode: "12" ,rating: 7.49 , trailer:"https://youtu.be/iwxPf8SEmEU" , sinopsis:"During the final years of his life, Hiraku Machio remained confined to a hospital bed with a terminal illness until he finally passed away. Taking pity on the unfair life he lived, a god decides to reincarnate Hiraku in another world where he can live as he pleases. Wanting to try farming in this new life, he is bestowed with an all-in-one Almighty Farming Tool that can transform into any useful implement he wishes. Hiraku is then transported to a forest seemingly far from civilization. Here, he plans to build and farm everything from scratch—gradually developing the lifeless area into a thriving new society." , linkPoster:"https://cdn.myanimelist.net/images/anime/1983/132329.jpg"},

]