import { Book, Character, StoryGenre, TargetAge, ArtStyle, BookPage, SceneKey } from '../types';

export interface GenerationParams {
  idea: string;
  character: Character;
  genre: StoryGenre;
  targetAge: TargetAge;
  pageCount: 6 | 8 | 12;
  artStyle: ArtStyle;
  authorName?: string;
}

export function generateTemplateStory(params: GenerationParams): Book {
  const { idea, character, genre, targetAge, pageCount, artStyle, authorName } = params;
  const cName = character.name;
  const fav = character.favoriteThings ? character.favoriteThings.toLowerCase() : 'bintang malam';

  let title = '';
  let subtitle = '';
  let moralValue = '';
  let synopsis = '';
  let coverSceneKey: SceneKey = 'morning_garden';
  const pages: BookPage[] = [];

  // Generate genre-aligned narrative arc
  if (genre === 'adventure') {
    title = `Petualangan ${cName} Menjelajah Rahasia Pelangi`;
    subtitle = `Kisah Keberanian dan Penemuan Hebat di Alam Terbuka`;
    coverSceneKey = 'kite_flying_hill';
    synopsis = `Ketika ${cName} menemukan petunjuk misterius di balik ${fav}, ia memulai petualangan seru melintasi perbukitan hijau untuk membagikan kebahagiaan kepada seluruh warga desa.`;
    moralValue = `Keberanian yang dipadukan dengan kebaikan hati akan selalu menuntun kita pada jalan terang.`;

    const scenes: { text: string; sceneKey: SceneKey }[] = [
      {
        text: `Matahari pagi menyapa ramah Desa Sukamaju. ${cName}, seorang anak berusia ${character.age} tahun yang dikenal ${character.personality.toLowerCase()}, membuka jendela kamarnya dengan mata berbinar-binar.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Hari ini ${cName} membawa ${fav} kesayangannya. Di beranda rumah, ${cName} merencanakan sebuah perjalanan kecil menuju bukit tinggi di ujung desa.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Jalan setapak berkelok melewati sawah dan pepohonan kelapa. Angin semilir mengiringi langkah ${cName} yang ceria dan penuh rasa ingin tahu.`,
        sceneKey: 'village_path',
      },
      {
        text: `Di puncak bukit, angin bertiup kencang dan bersahabat. ${cName} mengangkat tinggi-tinggi layang-layang buatannya. Langit biru menyambutnya dengan tarian awan putih.`,
        sceneKey: 'kite_flying_hill',
      },
      {
        text: `Tiba-tiba, rintik gerimis turun sebentar membasahi rumput. Di angkasa, muncul lengkungan pelangi tujuh warna yang begitu memukau pandangan mata.`,
        sceneKey: 'rainbow_rain',
      },
      {
        text: `${cName} tersenyum lebar dan melompat gembira. Ia sadar, keindahan alam semesta adalah hadiah terindah yang harus selalu dijaga dan disyukuri bersama keluarga tercinta.`,
        sceneKey: 'celebration_hug',
      },
      // Extended pages if 8 or 12
      {
        text: `Di balik bukit, ${cName} bertemu sahabat-sahabat kecil yang sedang berteduh. Dengan ramah, ${cName} mengajak mereka bernyanyi bersama menyambut pelangi.`,
        sceneKey: 'friendly_forest',
      },
      {
        text: `Mereka saling bertukar cerita dan menikmati bekal kue bersama di bawah naungan pohon rindang yang sejuk.`,
        sceneKey: 'kitchen_baking',
      },
      {
        text: `Matahari mulai condong ke ufuk barat. Cahaya lembayung emas menyinari bukit, menandakan saatnya untuk melangkah pulang.`,
        sceneKey: 'village_path',
      },
      {
        text: `Di depan pintu rumah, ibu dan ayah menyambut dengan pelukan hangat dan secangkir teh manis wangi.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `${cName} menceritakan semua hal menakjubkan yang ia lihat hari ini dengan penuh antusiasme.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Saat bintang-bintang mulai berkedip di langit malam, ${cName} beristirahat dengan hati penuh kedamaian dan senyuman manis.`,
        sceneKey: 'bedtime_cozy',
      },
    ];

    for (let i = 0; i < pageCount; i++) {
      pages.push({
        id: `gen-p-${Date.now()}-${i + 1}`,
        pageNumber: i + 1,
        text: scenes[i % scenes.length].text,
        sceneKey: scenes[i % scenes.length].sceneKey,
      });
    }
  } else if (genre === 'bedtime') {
    title = `${cName} dan Nyanyian Bintang Malam`;
    subtitle = `Dongeng Pengantar Tidur Penuh Kedamaian dan Kehangatan`;
    coverSceneKey = 'starlit_night';
    synopsis = `Setelah seharian aktif bermain, ${cName} diajak mengamati gugusan bintang di langit malam, menghirup udara damai, dan bersiap tidur dengan hati yang tenang.`;
    moralValue = `Rasa syukur atas hari yang telah berlalu dan ketenangan hati membawa mimpi yang indah.`;

    const scenes: { text: string; sceneKey: SceneKey }[] = [
      {
        text: `Matahari perlahan tenggelam di balik cakrawala. Cahaya jingga berganti menjadi biru malam yang anggun dan sejuk di kamar ${cName}.`,
        sceneKey: 'starlit_night',
      },
      {
        text: `${cName} merapikan mainan dan ${fav} di atas rak kayu. Suasana rumah terasa begitu tenang dan damai.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Ibu membawakan segelas susu hangat dan menyalakan lentera kecil di samping tempat tidur ${cName}.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Dari jendela kamar, bintang-bintang tampak seperti mutiara kecil yang berkelap-kelip menyapa ${cName}.`,
        sceneKey: 'starlit_night',
      },
      {
        text: `${cName} menarik selimut lembutnya dan mengucap doa syukur atas segala kebaikan dan rezeki hari ini.`,
        sceneKey: 'bedtime_cozy',
      },
      {
        text: `Mata ${cName} perlahan terpejam dengan damai. Selamat tidur ${cName}, semoga esok hari dipenuhi kebahagiaan baru.`,
        sceneKey: 'bedtime_cozy',
      },
      {
        text: `Di angkasa luas, bulan sabit tersenyum lembut menjaga lelapnya tidur anak-anak yang baik hati.`,
        sceneKey: 'starlit_night',
      },
      {
        text: `Mimpi indah mengalir bagaikan perahu kertas yang mengapung di atas sungai cahaya keemasan.`,
        sceneKey: 'rainbow_rain',
      },
      {
        text: `Dedaunan di kebun berbisik lirih ditiup angin malam, melantunkan melodi ninabobo terindah.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Setiap napas teratur membawa rasa tenang ke seluruh tubuh ${cName}.`,
        sceneKey: 'bedtime_cozy',
      },
      {
        text: `Kamar tidur yang hangat menjadi tempat teraman dan ternyaman di dunia.`,
        sceneKey: 'bedtime_cozy',
      },
      {
        text: `Fajar esok akan datang membawa berkah dan senyuman baru. Selamat malam, ${cName}.`,
        sceneKey: 'starlit_night',
      },
    ];

    for (let i = 0; i < pageCount; i++) {
      pages.push({
        id: `gen-p-${Date.now()}-${i + 1}`,
        pageNumber: i + 1,
        text: scenes[i % scenes.length].text,
        sceneKey: scenes[i % scenes.length].sceneKey,
      });
    }
  } else if (genre === 'moral_values') {
    title = `${cName} dan Rahasia Pohon Kebaikan`;
    subtitle = `Kisah Budi Pekerti, Kejujuran, dan Saling Menghormati`;
    coverSceneKey = 'friendly_forest';
    synopsis = `Melalui pengalaman sederhana di desa, ${cName} belajar bahwa perbuatan baik sekecil apapun akan selalu mekar dan berbuah manis.`;
    moralValue = `Kebaikan hati dan rasa peduli adalah harta paling berharga yang bisa kita berikan kepada sesama.`;

    const scenes: { text: string; sceneKey: SceneKey }[] = [
      {
        text: `Pagi itu, ${cName} berjalan melewati teras rumah Kakek. Wajah ${cName} tampak berseri-seri karena hari ini adalah hari kerja bakti desa.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Di tengah jalan, ${cName} melihat seorang sahabat yang tampak bingung mencari sesuatu yang hilang di dekat jalan setapak.`,
        sceneKey: 'village_path',
      },
      {
        text: `Dengan sifatnya yang ${character.personality.toLowerCase()}, ${cName} langsung mendekat dan menawarkan bantuan dengan tulus.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Bersama-sama, mereka mencari di bawah rerimbunan bunga. Akhirnya benda itu berhasil ditemukan di balik semak daun hijau!`,
        sceneKey: 'friendly_forest',
      },
      {
        text: `Sahabat ${cName} tersenyum lega dan mengucapkan terima kasih sambil memeluk ${cName} dengan hangat.`,
        sceneKey: 'celebration_hug',
      },
      {
        text: `Kakek yang melihat kejadian itu bertepuk tangan bangga: "Anak yang suka menolong orang lain akan selalu disayangi oleh semua orang."`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Mereka melanjutkan perjalanan menuju balai warga untuk bersama-sama menanam pohon baru di taman desa.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Setiap bibit pohon yang ditanam disirami air segar dengan penuh kasih sayang.`,
        sceneKey: 'rainbow_rain',
      },
      {
        text: `Warga desa berkumpul menikmati kue tradisional dan teh hangat di bawah payung pohon asam.`,
        sceneKey: 'kitchen_baking',
      },
      {
        text: `${cName} menyadari bahwa bekerja sama membuat pekerjaan berat terasa ringan dan menyenangkan.`,
        sceneKey: 'celebration_hug',
      },
      {
        text: `Ketika petang menjelang, desa tampak lebih bersih, asri, dan indah dari sebelumnya.`,
        sceneKey: 'village_path',
      },
      {
        text: `Hati ${cName} penuh dengan kehangatan rasa syukur yang mendalam.`,
        sceneKey: 'starlit_night',
      },
    ];

    for (let i = 0; i < pageCount; i++) {
      pages.push({
        id: `gen-p-${Date.now()}-${i + 1}`,
        pageNumber: i + 1,
        text: scenes[i % scenes.length].text,
        sceneKey: scenes[i % scenes.length].sceneKey,
      });
    }
  } else {
    // Default Friendship / Educational / Fantasy
    title = `${cName} dan Sahabat Alam Semesta`;
    subtitle = `Petualangan Menemukan Keajaiban di Sekitar Kita`;
    coverSceneKey = 'kite_flying_hill';
    synopsis = `Kisah persahabatan hangat ${cName} bersama teman-teman sebaya dan alam Nusantara, belajar mengagumi hal-hal kecil di sekitar kita.`;
    moralValue = `Persahabatan sejati dan cinta lingkungan membuat dunia kita menjadi tempat yang indah.`;

    const scenes: { text: string; sceneKey: SceneKey }[] = [
      {
        text: `Di bawah langit pagi yang cerah, ${cName} sudah bersiap-siap dengan pakaian rapinya. Semangat petualangan mengalir di dadanya.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `${cName} teringat pada ${fav} yang selalu menjadi sumber inspirasi untuk membuat hal-hal kreatif.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Bersama teman-teman, ${cName} belajar mengenali berbagai macam tanaman obat dan bunga warna-warni di kebun warga.`,
        sceneKey: 'friendly_forest',
      },
      {
        text: `Tiba-tiba, rintik hujan membasahi bumi lalu disusul lengkungan pelangi yang memesona di langit biru.`,
        sceneKey: 'rainbow_rain',
      },
      {
        text: `Semua anak bersorak gembira sambil melompat-lompat menari di atas rumput segar.`,
        sceneKey: 'kite_flying_hill',
      },
      {
        text: `Hari itu ditutup dengan tawa renyah dan janji untuk selalu menjaga keindahan bumi tempat kita bertumbuh bersama.`,
        sceneKey: 'celebration_hug',
      },
      {
        text: `Mereka pulang membawa daun-daun kering berbentuk unik untuk dijadikan hiasan buku cerita.`,
        sceneKey: 'village_path',
      },
      {
        text: `Di rumah, ${cName} memperlihatkan hasil karyanya kepada ayah dan ibu.`,
        sceneKey: 'grandmother_porch',
      },
      {
        text: `Ibu menghidangkan pisang goreng hangat yang baru diangkat dari wajan.`,
        sceneKey: 'kitchen_baking',
      },
      {
        text: `Aroma sedap memenuhi seisi ruangan dan membuat semua orang bersyukur.`,
        sceneKey: 'morning_garden',
      },
      {
        text: `Malam hari tiba, bintang-bintang menari lembut di luar jendela kamar.`,
        sceneKey: 'starlit_night',
      },
      {
        text: `${cName} tidur dengan senyum manis, siap menyambut petualangan baru esok hari.`,
        sceneKey: 'bedtime_cozy',
      },
    ];

    for (let i = 0; i < pageCount; i++) {
      pages.push({
        id: `gen-p-${Date.now()}-${i + 1}`,
        pageNumber: i + 1,
        text: scenes[i % scenes.length].text,
        sceneKey: scenes[i % scenes.length].sceneKey,
      });
    }
  }

  // If user provided a specific idea, reflect it in the synopsis & subtitle
  if (idea && idea.trim().length > 3) {
    synopsis = `Berdasarkan ide: "${idea}". ${synopsis}`;
  }

  const newBook: Book = {
    id: `book-${Date.now()}`,
    title,
    subtitle,
    synopsis,
    moralValue,
    genre,
    targetAge,
    artStyle,
    characterId: character.id,
    characterName: character.name,
    authorName: authorName || 'Keluarga CeritaKita',
    coverSceneKey,
    pages,
    isFeatured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return newBook;
}
