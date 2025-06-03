import moment from 'moment';

export const dtCouple = [
  {
    _id: 'couple_0',
    name: 'Irna Khaleda Nurmeta',
    img_tlg: '/img/irna-tlg.jpg',
    img_kdr: '/img/irna-tlg.jpg',
    father: 'Ayi Tamam Bahri',
    mother: 'Meyani',
    ig_url: 'https://www.instagram.com/irna_khaleda?igsh=ZTQwdnJlYXd3bTZm',
  },
  {
    _id: 'couple_1',
    name: 'Guntur Satria',
    img_tlg: '/img/guntur-tlg.jpg',
    img_kdr: '/img/guntur-tlg.jpg',
    father: 'Bakhtiar (Alm)',
    mother: 'Hermin Rosita',
    ig_url: 'https://www.instagram.com/satriapetirs?igsh=MWhwbWhhOTFhcHo5',
  },
];

export const eventTlg = {
  akad: moment('2025-07-06 08:00'),
  startResepsi: moment('2025-07-06 11:00'),
  endResepsi: moment('2025-07-06 15:00'),
  location: 'https://maps.app.goo.gl/64d2YvdofwCnBhhm8',
};

export const eventKdr = {
  startSesi1: moment('2025-07-06 08:00'),
  endSesi1: moment('2025-07-06 10:00'),
  startSesi2: moment('2025-07-06 11:00'),
  endSesi2: moment('2025-07-06 15:00'),
  location: 'https://maps.app.goo.gl/64d2YvdofwCnBhhm8',
};

export const storyData = {
  firstMeet: {
    title: 'Awal Bertemu ~ 2016',
    desc: 'Selalu ada "cerita" dibalik pertemuan insan manusia.Begitu juga dengan kami yang awalnya bertemu saat keduanya sedang melanjutkan pendidikan Pascasarjana di UPI bandung pada tahun 2016 silam. Saat itu hubungan kami hanya sebatas teman yang saling memberikan support saat menjalani perkuliahan. Tidak dapat dipungkiri, rasa ketertarikan muncul dari pihak perempuan yang selanjutnya pihak laki-laki mengetahui hal tersebut dari salah satu teman baik kami. Tidak ada respon yang jelas pada saat itu dan kami pun tidak memiliki keberanian untuk menjalin hubungan lebih dari sekedar teman.',
  },
  expressFeelings: {
    title: 'Jarak Memisahkan ~ 2019',
    desc: 'Gelar pendidikan telah didapat, tahun 2019 Qodarullah terjadi musibah dari pihak laki-laki sehingga ia harus kembali ke kampung halaman di Aceh. Namun sehari sebelum kepulangan, kami sempat bertemu bahkan ada beberapa barang yang ditinggalkan dan sampai sekarang digunakan oleh pihak perempuan.',
  },
  engagement: {
    title: 'Mengejar Mimpi',
    desc: 'Kami menjalani kehidupan masing-masing, bertemu banyak orang baru, mengejar mimpi dan karir yang telah kami impikan. Komunikasi hanya seperlunya dan kami masih berteman baik seperti saat berkuliah dulu.',
  },
  goesToMarried: {
    title: 'Goes to Married ~ 2025',
    desc: 'Januari 2025, kami saling menanyakan kabar satu sama lain dan di moment inilah ketertarikan di 7 tahun silam mendapat jawaban dengan jelas, semua perasaan yang terpendam selama ini kami utarakan secara dewasa dan terbuka. Hingga akhirnya kami berkomitmen untuk menjalani ibadah terpanjang (PERNIKAHAN).',
  },
};

export const imgGallery = [...Array(19)].map((_, i: number) => {
  return {
    original: `/img/gallery/img-${i + 1}.jpg`,
    thumbnail: `/img/gallery/img-thumb-${i + 1}.jpg`,
  };
});

export const snowfallConfig: any = {
  color: '#DEE4FD',
  snowflakeCount: 70,
  speed: [0, 2],
  wind: [0, 2],
  radius: [0.5, 1],
  style: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
  },
};
