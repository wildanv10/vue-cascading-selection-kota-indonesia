

///////////////////////////// Select

var pilihanProv = [
  {
    "prov": "SUMATERA UTARA"
  },
  {
    "prov": "SUMATERA BARAT"
  },
  {
    "prov": "RIAU"
  },
  {
    "prov": "JAMBI"
  },
  {
    "prov": "LAMPUNG"
  },
  {
    "prov": "ACEH"
  },
  {
    "prov": "BENGKULU"
  },
  {
    "prov": "SUMATERA SELATAN"
  },
  {
    "prov": "KEPULAUAN RIAU"
  },
  {
    "prov": "BANGKA BELITUNG"
  },
  {
    "prov": "BANTEN"
  },
  {
    "prov": "JAWA TIMUR"
  },
  {
    "prov": "DKI JAKARTA"
  },
  {
    "prov": "JAWA BARAT"
  },
  {
    "prov": "JAWA TENGAH"
  },
  {
    "prov": "DI YOGYAKARTA"
  },
  {
    "prov": "PAPUA"
  },
  {
    "prov": "PAPUA BARAT"
  },
  {
    "prov": "NUSA TENGGARA BARAT"
  },
  {
    "prov": "NUSA TENGGARA TIMUR"
  },
  {
    "prov": "MALUKU UTARA"
  },
  {
    "prov": "MALUKU"
  },
  {
    "prov": "BALI"
  },
  {
    "prov": "KALIMANTAN UTARA"
  },
  {
    "prov": "SULAWESI BARAT"
  },
  {
    "prov": "KALIMANTAN BARAT"
  },
  {
    "prov": "KALIMANTAN TENGAH"
  },
  {
    "prov": "KALIMANTAN TIMUR"
  },
  {
    "prov": "KALIMANTAN SELATAN"
  },
  {
    "prov": "SULAWESI UTARA"
  },
  {
    "prov": "GORONTALO"
  },
  {
    "prov": "SULAWESI TENGAH"
  },
  {
    "prov": "SULAWESI SELATAN"
  },
  {
    "prov": "SULAWESI TENGGARA"
  }
];

var pilihanKota = {
  'SUMATERA UTARA': [
    {
      "kota": "TAPANULI TENGAH"
    },
    {
      "kota": "TAPANULI UTARA"
    },
    {
      "kota": "TAPANULI SELATAN"
    },
    {
      "kota": "NIAS"
    },
    {
      "kota": "LANGKAT"
    },
    {
      "kota": "KARO"
    },
    {
      "kota": "DELISERDANG"
    },
    {
      "kota": "SIMALUNGUN"
    },
    {
      "kota": "ASAHAN"
    },
    {
      "kota": "LABUHANBATU"
    },
    {
      "kota": "DAIRI"
    },
    {
      "kota": "TOBASAMOSIR"
    },
    {
      "kota": "MANDAILING NATAL"
    },
    {
      "kota": "NIAS SELATAN"
    },
    {
      "kota": "PAKPAKBHARAT"
    },
    {
      "kota": "HUMBANG HASUNDUTAN"
    },
    {
      "kota": "SAMOSIR"
    },
    {
      "kota": "SERDANG BEDAGAI"
    },
    {
      "kota": "BATUBARA"
    },
    {
      "kota": "PADANG LAWAS UTARA"
    },
    {
      "kota": "PADANG LAWAS"
    },
    {
      "kota": "LABUHANBATU SELATAN"
    },
    {
      "kota": "LABUHANBATU UTARA"
    },
    {
      "kota": "NIAS UTARA"
    },
    {
      "kota": "NIAS BARAT"
    },
    {
      "kota": "KOTA MEDAN"
    },
    {
      "kota": "KOTA PEMATANGSIANTAR"
    },
    {
      "kota": "KOTA SIBOLGA"
    },
    {
      "kota": "KOTA TANJUNGBALAI"
    },
    {
      "kota": "KOTA BINJAI"
    },
    {
      "kota": "KOTA TEBINGTINGGI"
    },
    {
      "kota": "KOTA PADANGSIDIMPUAN"
    },
    {
      "kota": "KOTA GUNUNG SITOLI"
    }
  ],
  'SUMATERA BARAT': [
    {
      "kota": "PESISIR SELATAN"
    },
    {
      "kota": "SOLOK"
    },
    {
      "kota": "SAWAHLUNTO SIJUNJUNG"
    },
    {
      "kota": "TANAHDATAR"
    },
    {
      "kota": "PADANGPARIAMAN"
    },
    {
      "kota": "AGAM"
    },
    {
      "kota": "LIMAPULUHKOTO"
    },
    {
      "kota": "PASAMAN"
    },
    {
      "kota": "KEPULAUAN MENTAWAI"
    },
    {
      "kota": "DHARMASRAYA"
    },
    {
      "kota": "SOLOK SELATAN"
    },
    {
      "kota": "PASAMAN BARAT"
    },
    {
      "kota": "KOTA PADANG"
    },
    {
      "kota": "KOTA SOLOK"
    },
    {
      "kota": "KOTA SAWAHLUNTO"
    },
    {
      "kota": "KOTA PADANGPANJANG"
    },
    {
      "kota": "KOTA BUKITTINGGI"
    },
    {
      "kota": "KOTA PAYAKUMBUH"
    },
    {
      "kota": "KOTA PARIAMAN"
    },
  ],
  'RIAU': [
    {
      "kota": "KAMPAR"
    },
    {
      "kota": "INDRAGIRI HULU"
    },
    {
      "kota": "BENGKALIS"
    },
    {
      "kota": "INDRAGIRI HILIR"
    },
    {
      "kota": "PELALAWAN"
    },
    {
      "kota": "ROKAN HULU"
    },
    {
      "kota": "ROKAN HILIR"
    },
    {
      "kota": "SIAK"
    },
    {
      "kota": "KUANTAN SINGINGI"
    },
    {
      "kota": "KEPULAUAN MERANTI"
    },
    {
      "kota": "KOTA PEKANBARU"
    },
    {
      "kota": "KOTA DUMAI"
    },
  ],
  'JAMBI': [
    
    {
      "kota": "KERINCI"
    },
    {
      "kota": "MERANGIN"
    },
    {
      "kota": "SAROLANGUN"
    },
    {
      "kota": "BATANGHARI"
    },
    {
      "kota": "MUAROJAMBI"
    },
    {
      "kota": "TANJUNGJABUNG BARAT"
    },
    {
      "kota": "TANJUNGJABUNG TIMUR"
    },
    {
      "kota": "BUNGO"
    },
    {
      "kota": "TEBO"
    },
    {
      "kota": "KOTA JAMBI"
    },
    {
      "kota": "KOTA SUNGAIPENUH"
    },
  ],
  'LAMPUNG': [
    
    {
      "kota": "LAMPUNG SELATAN"
    },
    {
      "kota": "LAMPUNG TENGAH"
    },
    {
      "kota": "LAMPUNG UTARA"
    },
    {
      "kota": "LAMPUNG BARAT"
    },
    {
      "kota": "TULANG BAWANG"
    },
    {
      "kota": "TANGGAMUS"
    },
    {
      "kota": "LAMPUNG TIMUR"
    },
    {
      "kota": "WAYKANAN"
    },
    {
      "kota": "PESAWARAN"
    },
    {
      "kota": "PRINGSEWU"
    },
    {
      "kota": "MESUJI"
    },
    {
      "kota": "TULANG BAWANG BARAT"
    },
    {
      "kota": "KOTA BANDARLAMPUNG"
    },
    {
      "kota": "KOTA METRO"
    },
  ],
  'ACEH': [
    {
      "kota": "ACEH SELATAN"
    },
    {
      "kota": "ACEH TENGGARA"
    },
    {
      "kota": "ACEH TIMUR"
    },
    {
      "kota": "ACEH TENGAH"
    },
    {
      "kota": "ACEH BARAT"
    },
    {
      "kota": "ACEH BESAR"
    },
    {
      "kota": "PIDIE"
    },
    {
      "kota": "ACEH UTARA"
    },
    {
      "kota": "SIMEULUE"
    },
    {
      "kota": "ACEH SINGKIL"
    },
    {
      "kota": "BIREUEN"
    },
    {
      "kota": "ACEH BARAT DAYA"
    },
    {
      "kota": "GAYO LUES"
    },
    {
      "kota": "ACEH JAYA"
    },
    {
      "kota": "NAGAN RAYA"
    },
    {
      "kota": "ACEH TAMIANG"
    },
    {
      "kota": "BENER MERIAH"
    },
    {
      "kota": "PIDIE JAYA"
    },
    {
      "kota": "KOTA BANDA ACEH"
    },
    {
      "kota": "KOTA SABANG"
    },
    {
      "kota": "KOTA LHOKSEUMAWE"
    },
    {
      "kota": "KOTA LANGSA"
    },
    {
      "kota": "KOTA SUBULUSSALAM"
    }
  ],
  'BENGKULU': [
      
    {
      "kota": "BENGKULU SELATAN"
    },
    {
      "kota": "REJANGLEBONG"
    },
    {
      "kota": "BENGKULU UTARA"
    },
    {
      "kota": "KAUR"
    },
    {
      "kota": "SELUMA"
    },
    {
      "kota": "MUKO-MUKO"
    },
    {
      "kota": "LEBONG"
    },
    {
      "kota": "KEPAHIANG"
    },
    {
      "kota": "BENGKULU TENGAH"
    },
    {
      "kota": "KOTA BENGKULU"
    },
  ],
  'SUMATERA SELATAN': [
      
    {
      "kota": "OGAN KOMERING ULU"
    },
    {
      "kota": "OGAN KOMERING ILIR"
    },
    {
      "kota": "MUARAENIM"
    },
    {
      "kota": "LAHAT"
    },
    {
      "kota": "MUSIRAWAS"
    },
    {
      "kota": "MUSIBANYUASIN"
    },
    {
      "kota": "BANYUASIN"
    },
    {
      "kota": "OGAN KOMERING ULU TIMUR"
    },
    {
      "kota": "OGAN KOMERING ULU SELATAN"
    },
    {
      "kota": "OGAN ILIR"
    },
    {
      "kota": "EMPAT LAWANG"
    },
    {
      "kota": "KOTA PALEMBANG"
    },
    {
      "kota": "KOTA PAGARALAM"
    },
    {
      "kota": "KOTA LUBUKLINGGAU"
    },
    {
      "kota": "KOTA PRABUMULIH"
    },
  ],
  'KEPULAUAN RIAU': [
      
    {
      "kota": "BINTAN"
    },
    {
      "kota": "KARIMUN"
    },
    {
      "kota": "NATUNA"
    },
    {
      "kota": "LINGGA"
    },
    {
      "kota": "KEPULAUAN ANAMBAS"
    },
    {
      "kota": "KOTA BATAM"
    },
    {
      "kota": "KOTA TANJUNGPINANG"
    },
  ],
  'BANGKA BELITUNG': [
      
    {
      "kota": "BANGKA"
    },
    {
      "kota": "BELITUNG"
    },
    {
      "kota": "BANGKA SELATAN"
    },
    {
      "kota": "BANGKA TENGAH"
    },
    {
      "kota": "BANGKA BARAT"
    },
    {
      "kota": "BELITUNG TIMUR"
    },
    {
      "kota": "KOTA PANGKALPINANG"
    },
  ],
  'BANTEN': [
      
    {
      "kota": "PANDEGLANG"
    },
    {
      "kota": "LEBAK"
    },
    {
      "kota": "TANGERANG"
    },
    {
      "kota": "SERANG"
    },
    {
      "kota": "KOTA TANGERANG"
    },
    {
      "kota": "KOTA CILEGON"
    },
    {
      "kota": "KOTA SERANG"
    },
    {
      "kota": "KOTA TANGERANG SELATAN"
    },
  ],
  'JAWA TIMUR': [
      
    {
      "kota": "PACITAN"
    },
    {
      "kota": "PONOROGO"
    },
    {
      "kota": "TRENGGALEK"
    },
    {
      "kota": "TULUNGAGUNG"
    },
    {
      "kota": "BLITAR"
    },
    {
      "kota": "KEDIRI"
    },
    {
      "kota": "MALANG"
    },
    {
      "kota": "LUMAJANG"
    },
    {
      "kota": "JEMBER"
    },
    {
      "kota": "BANYUWANGI"
    },
    {
      "kota": "BONDOWOSO"
    },
    {
      "kota": "SITUBONDO"
    },
    {
      "kota": "PROBOLINGGO"
    },
    {
      "kota": "PASURUAN"
    },
    {
      "kota": "SIDOARJO"
    },
    {
      "kota": "MOJOKERTO"
    },
    {
      "kota": "JOMBANG"
    },
    {
      "kota": "NGANJUK"
    },
    {
      "kota": "MADIUN"
    },
    {
      "kota": "MAGETAN"
    },
    {
      "kota": "NGAWI"
    },
    {
      "kota": "BOJONEGORO"
    },
    {
      "kota": "TUBAN"
    },
    {
      "kota": "LAMONGAN"
    },
    {
      "kota": "GRESIK"
    },
    {
      "kota": "BANGKALAN"
    },
    {
      "kota": "SAMPANG"
    },
    {
      "kota": "PAMEKASAN"
    },
    {
      "kota": "SUMENEP"
    },
    {
      "kota": "KOTA KEDIRI"
    },
    {
      "kota": "KOTA BLITAR"
    },
    {
      "kota": "KOTA MALANG"
    },
    {
      "kota": "KOTA PROBOLINGGO"
    },
    {
      "kota": "KOTA PASURUAN"
    },
    {
      "kota": "KOTA MOJOKERTO"
    },
    {
      "kota": "KOTA MADIUN"
    },
    {
      "kota": "KOTA SURABAYA"
    },
    {
      "kota": "KOTA BATU"
    },
  ],
  'DKI JAKARTA': [
    
    {
      "kota": "ADM KEPULAUAN SERIBU"
    },
    {
      "kota": "KOTA ADM JAKARTA PUSAT"
    },
    {
      "kota": "KOTA ADM JAKARTA UTARA"
    },
    {
      "kota": "KOTA ADM JAKARTA BARAT"
    },
    {
      "kota": "KOTA ADM JAKARTA SELATAN"
    },
    {
      "kota": "KOTA ADM JAKARTA TIMUR"
    },
  ],
  'JAWA BARAT': [
      
    {
      "kota": "BOGOR"
    },
    {
      "kota": "SUKABUMI"
    },
    {
      "kota": "CIANJUR"
    },
    {
      "kota": "BANDUNG"
    },
    {
      "kota": "GARUT"
    },
    {
      "kota": "TASIKMALAYA"
    },
    {
      "kota": "CIAMIS"
    },
    {
      "kota": "KUNINGAN"
    },
    {
      "kota": "CIREBON"
    },
    {
      "kota": "MAJALENGKA"
    },
    {
      "kota": "SUMEDANG"
    },
    {
      "kota": "INDRAMAYU"
    },
    {
      "kota": "SUBANG"
    },
    {
      "kota": "PURWAKARTA"
    },
    {
      "kota": "KARAWANG"
    },
    {
      "kota": "BEKASI"
    },
    {
      "kota": "BANDUNG BARAT"
    },
    {
      "kota": "KOTA BOGOR"
    },
    {
      "kota": "KOTA SUKABUMI"
    },
    {
      "kota": "KOTA BANDUNG"
    },
    {
      "kota": "KOTA CIREBON"
    },
    {
      "kota": "KOTA BEKASI"
    },
    {
      "kota": "KOTA DEPOK"
    },
    {
      "kota": "KOTA CIMAHI"
    },
    {
      "kota": "KOTA TASIKMALAYA"
    },
    {
      "kota": "KOTA BANJAR"
    },
  ],
  'JAWA TENGAH': [
      
    {
      "kota": "CILACAP"
    },
    {
      "kota": "BANYUMAS"
    },
    {
      "kota": "PURBALINGGA"
    },
    {
      "kota": "BANJARNEGARA"
    },
    {
      "kota": "KEBUMEN"
    },
    {
      "kota": "PURWOREJO"
    },
    {
      "kota": "WONOSOBO"
    },
    {
      "kota": "MAGELANG"
    },
    {
      "kota": "BOYOLALI"
    },
    {
      "kota": "KLATEN"
    },
    {
      "kota": "SUKOHARJO"
    },
    {
      "kota": "WONOGIRI"
    },
    {
      "kota": "KARANGANYAR"
    },
    {
      "kota": "SRAGEN"
    },
    {
      "kota": "GROBOGAN"
    },
    {
      "kota": "BLORA"
    },
    {
      "kota": "REMBANG"
    },
    {
      "kota": "PATI"
    },
    {
      "kota": "KUDUS"
    },
    {
      "kota": "JEPARA"
    },
    {
      "kota": "DEMAK"
    },
    {
      "kota": "SEMARANG"
    },
    {
      "kota": "TEMANGGUNG"
    },
    {
      "kota": "KENDAL"
    },
    {
      "kota": "BATANG"
    },
    {
      "kota": "PEKALONGAN"
    },
    {
      "kota": "PEMALANG"
    },
    {
      "kota": "TEGAL"
    },
    {
      "kota": "BREBES"
    },
    {
      "kota": "KOTA MAGELANG"
    },
    {
      "kota": "KOTA SURAKARTA"
    },
    {
      "kota": "KOTA SALATIGA"
    },
    {
      "kota": "KOTA SEMARANG"
    },
    {
      "kota": "KOTA PEKALONGAN"
    },
    {
      "kota": "KOTA TEGAL"
    },
  ],
  'DI YOGYAKARTA': [
      
    {
      "kota": "KULONPROGO"
    },
    {
      "kota": "BANTUL"
    },
    {
      "kota": "GUNUNGKIDUL"
    },
    {
      "kota": "SLEMAN"
    },
    {
      "kota": "KOTA YOGYAKARTA"
    },
  ],
  'PAPUA': [
      
    {
      "kota": "MERAUKE"
    },
    {
      "kota": "JAYAWIJAYA"
    },
    {
      "kota": "JAYAPURA"
    },
    {
      "kota": "NABIRE"
    },
    {
      "kota": "KEPULAUAN YAPEN"
    },
    {
      "kota": "BIAKNUMFOR"
    },
    {
      "kota": "PUNCAK JAYA"
    },
    {
      "kota": "PANIAI"
    },
    {
      "kota": "MIMIKA"
    },
    {
      "kota": "SARMI"
    },
    {
      "kota": "KEEROM"
    },
    {
      "kota": "PEGUNUNGANBINTANG"
    },
    {
      "kota": "YAHUKIMO"
    },
    {
      "kota": "TOLIKARA"
    },
    {
      "kota": "WAROPEN"
    },
    {
      "kota": "BOVENDIGOEL"
    },
    {
      "kota": "MAPPI"
    },
    {
      "kota": "ASMAT"
    },
    {
      "kota": "SUPIORI"
    },
    {
      "kota": "MAMBERAMO RAYA"
    },
    {
      "kota": "MAMBERAMO TENGAH"
    },
    {
      "kota": "YALIMO"
    },
    {
      "kota": "LANNY JAYA"
    },
    {
      "kota": "NDUGA"
    },
    {
      "kota": "PUNCAK"
    },
    {
      "kota": "DOGIYAI"
    },
    {
      "kota": "INTAN JAYA"
    },
    {
      "kota": "DEIYAI"
    },
    {
      "kota": "KOTA JAYAPURA"
    },
  ],
  'PAPUA BARAT': [
      
    {
      "kota": "SORONG"
    },
    {
      "kota": "MANOKWARI"
    },
    {
      "kota": "FAK-FAK"
    },
    {
      "kota": "SORONG SELATAN"
    },
    {
      "kota": "RAJAAMPAT"
    },
    {
      "kota": "TELUKBINTUNI"
    },
    {
      "kota": "TELUKWONDAMA"
    },
    {
      "kota": "KAIMANA"
    },
    {
      "kota": "TAMBRAUW"
    },
    {
      "kota": "MAYBRAT"
    },
    {
      "kota": "KOTA SORONG"
    },
  ],
  'NUSA TENGGARA BARAT': [
      
    {
      "kota": "LOMBOK BARAT"
    },
    {
      "kota": "LOMBOK TENGAH"
    },
    {
      "kota": "LOMBOK TIMUR"
    },
    {
      "kota": "SUMBAWA"
    },
    {
      "kota": "DOMPU"
    },
    {
      "kota": "BIMA"
    },
    {
      "kota": "SUMBAWA BARAT"
    },
    {
      "kota": "LOMBOK UTARA"
    },
    {
      "kota": "KOTA MATARAM"
    },
    {
      "kota": "KOTA BIMA"
    },
  ],
  'NUSA TENGGARA TIMUR': [
      
    {
      "kota": "KUPANG"
    },
    {
      "kota": "TIMOR TENGAH SELATAN"
    },
    {
      "kota": "TIMOR TENGAH UTARA"
    },
    {
      "kota": "BELU"
    },
    {
      "kota": "ALOR"
    },
    {
      "kota": "FLORES TIMUR"
    },
    {
      "kota": "SIKKA"
    },
    {
      "kota": "ENDE"
    },
    {
      "kota": "NGADA"
    },
    {
      "kota": "MANGGARAI"
    },
    {
      "kota": "SUMBA TIMUR"
    },
    {
      "kota": "SUMBA BARAT"
    },
    {
      "kota": "LEMBATA"
    },
    {
      "kota": "ROTE NDAO"
    },
    {
      "kota": "MANGGARAI BARAT"
    },
    {
      "kota": "NAGEKEO"
    },
    {
      "kota": "SUMBA TENGAH"
    },
    {
      "kota": "SUMBA BARAT DAYA"
    },
    {
      "kota": "MANGGARAI TIMUR"
    },
    {
      "kota": "SABU RAIJUA"
    },
    {
      "kota": "KOTA KUPANG"
    },
  ],
  'MALUKU UTARA': [
      
    {
      "kota": "HALMAHERA BARAT"
    },
    {
      "kota": "HALMAHERA TENGAH"
    },
    {
      "kota": "HALMAHERA UTARA"
    },
    {
      "kota": "HALMAHERA SELATAN"
    },
    {
      "kota": "KEPULAUAN SULA"
    },
    {
      "kota": "HALMAHERA TIMUR"
    },
    {
      "kota": "PULAU MOROTAI"
    },
    {
      "kota": "KOTA TERNATE"
    },
    {
      "kota": "KOTA TIDORE KEPULAUAN"
    },
  ],
  'MALUKU': [
      
    {
      "kota": "MALUKU TENGAH"
    },
    {
      "kota": "MALUKU TENGGARA"
    },
    {
      "kota": "MALUKU TENGGARA BARAT"
    },
    {
      "kota": "BURU"
    },
    {
      "kota": "SERAM BAGIAN TIMUR"
    },
    {
      "kota": "SERAM BAGIAN BARAT"
    },
    {
      "kota": "KEPULAUAN ARU"
    },
    {
      "kota": "MALUKU BARAT DAYA"
    },
    {
      "kota": "BURU SELATAN"
    },
    {
      "kota": "KOTA AMBON"
    },
    {
      "kota": "KOTA TUAL"
    },
  ],
  'BALI': [
      
    {
      "kota": "JEMBRANA"
    },
    {
      "kota": "TABANAN"
    },
    {
      "kota": "BADUNG"
    },
    {
      "kota": "GIANYAR"
    },
    {
      "kota": "KLUNGKUNG"
    },
    {
      "kota": "BANGLI"
    },
    {
      "kota": "KARANGASEM"
    },
    {
      "kota": "BULELENG"
    },
    {
      "kota": "KOTA DENPASAR"
    },
  ],
  'KALIMANTAN UTARA': [
      
    {
      "kota": "KOTA BANJARBARU"
    }
  ],
  'SULAWESI BARAT': [
    
    {
      "kota": "MAMUJU UTARA"
    },
    {
      "kota": "MAMUJU"
    },
    {
      "kota": "MAMASA"
    },
    {
      "kota": "POLEWALI MANDAR"
    },
    {
      "kota": "MAJENE"
    },
  ],
  'KALIMANTAN BARAT': [
      
    {
      "kota": "SAMBAS"
    },
    {
      "kota": "PONTIANAK"
    },
    {
      "kota": "SANGGAU"
    },
    {
      "kota": "KETAPANG"
    },
    {
      "kota": "SINTANG"
    },
    {
      "kota": "KAPUAS HULU"
    },
    {
      "kota": "BENGKAYANG"
    },
    {
      "kota": "LANDAK"
    },
    {
      "kota": "SEKADAU"
    },
    {
      "kota": "MELAWI"
    },
    {
      "kota": "KAYONG UTARA"
    },
    {
      "kota": "KUBURAYA"
    },
    {
      "kota": "KOTA PONTIANAK"
    },
    {
      "kota": "KOTA SINGKAWANG"
    },
  ],
  'KALIMANTAN TENGAH': [
      
    {
      "kota": "KOTAWARINGIN BARAT"
    },
    {
      "kota": "KOTAWARINGIN TIMUR"
    },
    {
      "kota": "KAPUAS"
    },
    {
      "kota": "BARITO SELATAN"
    },
    {
      "kota": "BARITO UTARA"
    },
    {
      "kota": "KATINGAN"
    },
    {
      "kota": "SERUYAN"
    },
    {
      "kota": "SUKAMARA"
    },
    {
      "kota": "LAMANDAU"
    },
    {
      "kota": "GUNUNGMAS"
    },
    {
      "kota": "PULANGPISAU"
    },
    {
      "kota": "MURUNGRAYA"
    },
    {
      "kota": "BARITO TIMUR"
    },
    {
      "kota": "KOTA PALANGKARAYA"
    },
  ],
  'KALIMANTAN TIMUR': [
    
  {
    "kota": "PASER"
  },
  {
    "kota": "KUTAI KARTANEGARA"
  },
  {
    "kota": "BERAU"
  },
  {
    "kota": "BULUNGAN"
  },
  {
    "kota": "NUNUKAN"
  },
  {
    "kota": "MALINAU"
  },
  {
    "kota": "KUTAI BARAT"
  },
  {
    "kota": "KUTAI TIMUR"
  },
  {
    "kota": "PENAJAM PASER UTARA"
  },
  {
    "kota": "TANA TIDUNG"
  },
  {
    "kota": "KOTA BALIKPAPAN"
  },
  {
    "kota": "KOTA SAMARINDA"
  },
  {
    "kota": "KOTA TARAKAN"
  },
  {
    "kota": "KOTA BONTANG"
  },
  ],
  'KALIMANTAN SELATAN': [
      
    {
      "kota": "TANAHLAUT"
    },
    {
      "kota": "KOTABARU"
    },
    {
      "kota": "BANJAR"
    },
    {
      "kota": "BARITOKUALA"
    },
    {
      "kota": "TAPIN"
    },
    {
      "kota": "HULUSUNGAI SELATAN"
    },
    {
      "kota": "HULUSUNGAI TENGAH"
    },
    {
      "kota": "HULUSUNGAI UTARA"
    },
    {
      "kota": "TABALONG"
    },
    {
      "kota": "TANAHBUMBU"
    },
    {
      "kota": "BALANGAN"
    },
    {
      "kota": "KOTA BANJARMASIN"
    },
  ],
  'SULAWESI UTARA': [
      
    {
      "kota": "BOLAANGMONGONDOW"
    },
    {
      "kota": "MINAHASA"
    },
    {
      "kota": "KEPULAUAN SANGIHE"
    },
    {
      "kota": "KEPULAUAN TALAUD"
    },
    {
      "kota": "MINAHASA SELATAN"
    },
    {
      "kota": "MINAHASA UTARA"
    },
    {
      "kota": "MINAHASA TENGGARA"
    },
    {
      "kota": "BOLAANGMONGONDOW UTARA"
    },
    {
      "kota": "KEPULAUAN SIAU TAGULANDANG BIARO"
    },
    {
      "kota": "BOLAANGMONGONDOW TIMUR"
    },
    {
      "kota": "BOLAANGMONGONDOW SELATAN"
    },
    {
      "kota": "KOTA MANADO"
    },
    {
      "kota": "KOTA BITUNG"
    },
    {
      "kota": "KOTA TOMOHON"
    },
    {
      "kota": "KOTA KOTAMOBAGU"
    },
  ],
  'GORONTALO': [
      
    {
      "kota": "GORONTALO"
    },
    {
      "kota": "BOALEMO"
    },
    {
      "kota": "BONEBOLANGO"
    },
    {
      "kota": "PAHUWATO"
    },
    {
      "kota": "GORONTALO UTARA"
    },
    {
      "kota": "KOTA GORONTALO"
    },
  ],
  'SULAWESI TENGAH': [
      
    {
      "kota": "BANGGAI"
    },
    {
      "kota": "POSO"
    },
    {
      "kota": "DONGGALA"
    },
    {
      "kota": "TOLITOLI"
    },
    {
      "kota": "BUOL"
    },
    {
      "kota": "MOROWALI"
    },
    {
      "kota": "BANGGAI KEPULAUAN"
    },
    {
      "kota": "PARIGIMOUTONG"
    },
    {
      "kota": "TOJOUNAUNA"
    },
    {
      "kota": "SIGI"
    },
    {
      "kota": "KOTA PALU"
    },
  ],
  'SULAWESI SELATAN': [
      
    {
      "kota": "SELAYAR"
    },
    {
      "kota": "BULUKUMBA"
    },
    {
      "kota": "BANTAENG"
    },
    {
      "kota": "JENEPONTO"
    },
    {
      "kota": "TAKALAR"
    },
    {
      "kota": "GOWA"
    },
    {
      "kota": "SINJAI"
    },
    {
      "kota": "BONE"
    },
    {
      "kota": "MAROS"
    },
    {
      "kota": "PANGKAJENE KEPULAUAN"
    },
    {
      "kota": "BARRU"
    },
    {
      "kota": "SOPPENG"
    },
    {
      "kota": "WAJO"
    },
    {
      "kota": "SIDENRENGRAPPANG"
    },
    {
      "kota": "PINRANG"
    },
    {
      "kota": "ENREKANG"
    },
    {
      "kota": "LUWU"
    },
    {
      "kota": "TANA TORAJA"
    },
    {
      "kota": "LUWU UTARA"
    },
    {
      "kota": "LUWU TIMUR"
    },
    {
      "kota": "TORAJA UTARA"
    },
    {
      "kota": "KOTA MAKASSAR"
    },
    {
      "kota": "KOTA PARE-PARE"
    },
    {
      "kota": "KOTA PALOPO"
    },
  ],
  'SULAWESI TENGGARA': [
      
    {
      "kota": "KOLAKA"
    },
    {
      "kota": "KONAWE"
    },
    {
      "kota": "MUNA"
    },
    {
      "kota": "BUTON"
    },
    {
      "kota": "KONAWE SELATAN"
    },
    {
      "kota": "BOMBANA"
    },
    {
      "kota": "WAKATOBI"
    },
    {
      "kota": "KOLAKA UTARA"
    },
    {
      "kota": "KONAWE UTARA"
    },
    {
      "kota": "BUTON UTARA"
    },
    {
      "kota": "KOTA KENDARI"
    },
    {
      "kota": "KOTA BAU-BAU"
    },
  ],

};
  
new Vue({
  el: '#cascadingSelect',
  data: {
    selectProv: "",
    selectKota: "",
    optionsProv: pilihanProv,
    optionsKota: pilihanKota
  },
  watch: {
    selectProv: function(){
      this.selectKota = "";
      if(this.selectProv != ""){
        $('#selectKota').prop('disabled', false);
      }
      else{
        $('#selectKota').prop('disabled', 'disabled');
      }
    }
  },
  methods: {
    buttonSubmit: function() {
      if (this.selectKota.length == 0) {
              alert('mohon pilih Kota');
      }
      else{
        alert('anda memilih ' + this.selectKota);
        //action form here
      }
    }
  }
});