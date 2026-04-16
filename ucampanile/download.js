const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://le-de.cdn-website.com/e3484d65e28d4e18b5bff3bf0743d14b/dms3rep/multi/opt/';

const files = [
  // Logo
  { url: BASE + 'logo-u-campanile-1920w.png', name: 'logo.png' },
  // Home hero + sections
  { url: BASE + '20200313_143817-751c284a-214fd788-1920w.jpg', name: 'hero-home.jpg' },
  { url: BASE + '20190517_093807-2880w.jpg', name: 'bell-close.jpg' },
  { url: BASE + 'IMG_0302-1920w.JPG', name: 'church-exterior.jpg' },
  { url: BASE + 'IMG_0185-3436939f-e3c69e6c-1920w.JPG', name: 'clocher-01.jpg' },
  { url: BASE + '20200708_155613-9acc4193-dc06afca-1920w.jpg', name: 'foudre-01.jpg' },
  // About
  { url: BASE + '20200311_114448-2880w.jpg', name: 'team-work-01.jpg' },
  { url: BASE + '20200311_114448-8db760c5-3f333eaf-2880w.jpg', name: 'team-work-02.jpg' },
  { url: BASE + 'IMG_1809-70fc31f7-5c751425-2880w.JPG', name: 'mecanisme.jpg' },
  // Installation
  { url: BASE + '20200313_140732-2880w.jpg', name: 'installation-01.jpg' },
  { url: BASE + '20200313_143817-87905e6e-e07c17d7-06d63be5-2880w.jpg', name: 'installation-02.jpg' },
  { url: BASE + 'DSC_0385-5f24f772-2880w.JPG', name: 'bell-grand.jpg' },
  // Restauration
  { url: BASE + '20200313_143817-87905e6e-63f5ae4c-2880w.jpg', name: 'restauration-01.jpg' },
  { url: BASE + '20200313_140732-a58a25bc-2880w.jpg', name: 'restauration-02.jpg' },
  // Horloge
  { url: BASE + 'IMG_2168-2880w.jpg', name: 'horloge-cadran.jpg' },
  // Foudre
  { url: BASE + 'DSC_0388-680d778b-2880w.JPG', name: 'foudre-02.jpg' },
  { url: BASE + '20200708_155613-6dec351d-2880w.jpg', name: 'foudre-03.jpg' },
  { url: BASE + 'IMG_3138-2880w.JPG', name: 'paratonnerre-01.jpg' },
  { url: BASE + 'IMG_3137-2880w.JPG', name: 'paratonnerre-02.jpg' },
  // Pigeons
  { url: BASE + 'IMG_0683-2880w.jpg', name: 'filet-01.jpg' },
  { url: BASE + 'IMG_1039-2880w.JPG', name: 'filet-02.jpg' },
  { url: BASE + '20200708_150459-2880w.jpg', name: 'filet-03.jpg' },
  { url: BASE + '20200708_155613-5974ffed-2880w.jpg', name: 'filet-04.jpg' },
];

const outDir = path.join(__dirname, 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`${url} -> ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', err => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

(async () => {
  for (const f of files) {
    const dest = path.join(outDir, f.name);
    try {
      await download(f.url, dest);
      const stat = fs.statSync(dest);
      console.log(`OK  ${f.name}  ${(stat.size / 1024).toFixed(0)} KB`);
    } catch (e) {
      console.log(`ERR ${f.name}  ${e.message}`);
    }
  }
})();
