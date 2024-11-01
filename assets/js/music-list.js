const allMusic = [

    {
        name: "Asheqi Angar ki Birai",
        writer: "Mir Saleem / Irfan Ali Taj / Zoe Viccaji",
        singer: "Irfan A. Taj / Zoe Viccaji",
        lyricsFile: "asheqi_angar.txt",
        src:"https://bashonu.s3.us-east-2.amazonaws.com/songs/ashiqiAngar.mp3",
    },
    {
        name: "Dunya Ju Baso",
        writer: "Irfan Ali Taj",
        singer: "Irfan Ali Taj / Zoe Viccaji",
        lyricsFile: "dunya_ju_baso.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/IRFAN+ALI+TAJ+-+DUNYA+JU+BASO+ft+Zoe+Viccaji+(+Offical+Music+Video+).mp3",
    },
    {
        name: "Awa Ta Dunyo Pechitam",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "awa_ta_dunyo_pechitam.txt",
        src:"https://bashonu.s3.us-east-2.amazonaws.com/songs/Awa+ta+dunyo+pesitm+na+afas+komn+chamote+-+Ansar+ilahi+songs++latest+chitrali+songs.mp3",
    },
    {
        name: "Ishq Daryah",
        writer: "Irfan Ali Taj",
        singer: "Irfan Ali Taj",
        lyricsFile: "ishq_daryah.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Irfan+%26+Moaaz+-+ISHQ+DARYAH+(+Official+Music+Video+).mp3",
    },
    {
        name: "Khosh Bigim",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "khosh_bigim.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Khosh+Bigim+Gherzikan+Zhur-+Mansoor+Ali+Shabab.mp3",
    },
    {
        name: "Scholote Biniyan Ma Xano Yaraan",
        writer: "Abdul Hayat",
        singer: "Unknown",
        lyricsFile: "scholote_biniyan.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Schoolote+Binyan+Ma+Janu+Yaran+-+Chitrali+Khowar+Hit+Song.mp3",
    },  
    {
        name: "Dashtu Sehra Asum Thrushni Armaan o sum",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "dashtu_sehra_asum.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Chitrali+song...Dastu+Shera+Asum+Thrusi+Armano+sum+sarsar+o.....mp3",
    },   
    {
        name: "Payan Alanio Lowah",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "lowah.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Payan+Alaniyo+Lo+Wa++Khowar+Old+Song++Chitral+Studio.mp3",
    },  
    {
        name: "Xan Sadaqa Ta Cheer Golo Sora",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "xan_sadaqa_ta_cheer_golo_sora.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Zhan+Sadaqae+Ta+Cheer+Golo+Sura+Muhsin+Hayat+Shadab.mp3",
    },  
    {
        name: "Hase Wa Kya Zindagi Sukoon E Darbat Ki No Hoi",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "hase_wa_kya_zindagi.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Hase+wa+kia+zindagi+sukun+ie+darbat+ki+no+hoi+mansoor+shabab+++YouTube.mp3",
    },  
    {
        name: "Bas E Kashkol Bas E Xindaan",
        writer: "Faizan Ali Faizan",
        singer: "Unknown",
        lyricsFile: "bas_e_kashkol_bas_e_xindaan.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/baseKashkol.mp3",
    }, 
    {
        name: "Berune Khana",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "beruneKhana.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Berun+e+Khana++Hafeez+Ul+Amin+Syed+Azhar+Shah.mp3",
    },
    {
        name: "Ta Husno Bo Poshi Tt Kya Di Renian",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "taHusno.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Ta+Husno+Bo+Poshi+Tat+Kiagh+D+Renian++Azhar+Khalifa++Abdullah+Shahab++Chitrali+Song.mp3",
    }, 
    {
        name: "Wesalo Mas",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "wesaloMas.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/wisalo+mass+doko+prai+yor+chagho+lyrics+shida+%2C+zafar+hayat+chitrali+song+khowar+song+2022.mp3",
    },  
    {
        name: "Kura Ki Arzu Re Newashin Boyan",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "kuraKiArzuReNewashinBoyan.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Kura+ki+arzoo+ra+Niwashin+Boyan++Azhar+Khalifa++Poet_Hafeez+Ullah+Amin.mp3",
    }, 
    {
        name: "Ta Namo Neweshi",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "taNamoNewashi.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Ta+Namo+Neweshi+++Azhar+Khalifa++Poetry_+Azhar+Ali+Azhar++Tarz+E+Khalifa.mp3",
    }, 
    {
        name: "Sarhad Wathana",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "sarhadWathana.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Ma+Sum+Dokha+Moko+Ta+Phuki+Yar+Rizwan+Rizvi++New+Program.mp3",
    }, 
    {
        name: "Girwano E Nas",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "girwanoENas.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Girwano+e+nas+biro+ma+hosta++Rizwan+rizvi++New+porgrm+2023.mp3",
    }, 
    {
        name: "Ghoru (Nane Nane Afhera Ka Goyan)",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "ghoru.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Khowar+Folk+Song+Ghoru++Nane+Nane+Afera+Mosh+Goyan++By+Ansar+Elahi+Magical+Voice++Pamir+Hotel.mp3",
    }, 
    {
        name: "Nano Begal",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "nanoBegal.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Nano+Begal++Mansoor+Ali+Shabab++New+Album++AAIM.mp3",
    }, 
    {
        name: "Ashoor Jan",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "ashurJan.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/ashoorJan.mp3",
    }, 
    {
        name: "Nan Doshi",
        writer: "Unknown",
        singer: "Unknown",
        lyricsFile: "nanDoshi.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Nandoshi++Khowar+Old+Song++Koraghu+Master+Mir+Wali.mp3",
    }, 
    {
        name: "E Kharkar Naswar Peshako Dust Birai",
        writer: "Iqbal Uddin Sahar",
        singer: "Unknown",
        lyricsFile: "eKharkar.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Iqbal+Uddin+Sahar++Old+Khowar+Song++Ea+Khakar+Naswar+Pishako+Dust+Berai.mp3",
    }, 
    {
        name: "Mashriqa Yor E Nisseer Awa No Bom",
        writer: "Shaukat Ali",
        singer: "Ansar Elahi",
        lyricsFile: "awaNoBom.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/awa+No+Bom.mp3",
    }, 
    {
        name: "Thak Gaya Hoon",
        writer: "Irfan Ali Taj",
        singer: "Irfan Ali Taj",
        lyricsFile: "thakGayaHoon.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/Thak+Gaya+Hoon+-+Irfan+Ali+Taj+x+Varqa+Faraid+(Official+Music+Video).mp3",
    }, 
    {
        name: "Kamalo Jawab",
        writer: "Faizan Ali Faizan",
        singer: "Qashqarian Band",
        lyricsFile: "kamaloJawab.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/kamaloJawab.mp3",
    }, 
    {
        name: "Egan Egana",
        writer: "Unknown",
        singer: "Qashqarian Band",
        lyricsFile: "eganEgana.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/eganegana.mp3",
    }, 
    {
        name: "Egan Egana",
        writer: "Unknown",
        singer: "Muhsin hayat Shadab",
        lyricsFile: "eganEganaMuhsin.txt",
        src: "https://bashonu.s3.us-east-2.amazonaws.com/songs/eganeganaMuhsinHayat.mp3",
    }, 
    
    ];

export default allMusic;