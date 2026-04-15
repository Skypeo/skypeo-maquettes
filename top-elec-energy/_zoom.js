const puppeteer = require('puppeteer-core');
const path = require('path');
(async () => {
  const b = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe', headless:'new'});
  const p = await b.newPage();
  await p.setViewport({width:1440,height:900});
  await p.goto('file:///' + path.resolve('index.html').replace(/\/g,'/'));
  await p.evaluate(() => document.fonts.ready);
  await new Promise(r=>setTimeout(r,1200));
  await p.screenshot({path:'hero_close.png'});
  await b.close();
})();
