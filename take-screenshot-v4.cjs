const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Esperar a animaciones
        await new Promise(r => setTimeout(r, 2000));

        console.log('Taking screenshot of the NEW HERO...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-hero-v4.png', fullPage: false });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
