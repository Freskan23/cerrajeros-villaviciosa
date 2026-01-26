const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 720 });

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Scroll down a bit to see the new rich sections
        await page.evaluate(() => window.scrollBy(0, 800));
        await new Promise(r => setTimeout(r, 1000));

        console.log('Taking screenshot...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-tesla-v2.png', fullPage: false });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
