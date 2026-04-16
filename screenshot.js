const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function screenshot(htmlFile, options = {}) {
  const {
    width = 1440,
    height = 900,
    fullPage = true,
    output = null
  } = options;

  const filePath = path.resolve(htmlFile);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(`file:///${filePath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for fonts and images to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  // Trigger IntersectionObserver-based reveals by scrolling through page
  const triggerReveals = async () => {
    await page.evaluate(async () => {
      const pageHeight = document.documentElement.scrollHeight;
      const step = Math.max(300, window.innerHeight / 2);
      for (let y = 0; y < pageHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 80));
      }
      window.scrollTo(0, pageHeight);
      await new Promise(r => setTimeout(r, 200));
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 400));
    });
  };
  await triggerReveals();

  const outputPath = output || filePath.replace('.html', '_screenshot.png');
  await page.screenshot({ path: outputPath, fullPage });
  console.log(`Screenshot saved: ${outputPath}`);

  // Also take mobile screenshot
  const mobilePath = outputPath.replace('.png', '_mobile.png');
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 500));
  await triggerReveals();
  await page.screenshot({ path: mobilePath, fullPage });
  console.log(`Mobile screenshot saved: ${mobilePath}`);

  await browser.close();
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node screenshot.js <path-to-html> [--width=1440] [--no-fullpage]');
  process.exit(1);
}

const htmlFile = args[0];
const opts = {};
args.slice(1).forEach(arg => {
  if (arg.startsWith('--width=')) opts.width = parseInt(arg.split('=')[1]);
  if (arg === '--no-fullpage') opts.fullPage = false;
});

screenshot(htmlFile, opts);
