const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 2500 }); // Full page height basically

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Give some time for animations
        await new Promise(r => setTimeout(r, 2000));

        console.log('Taking full page screenshot...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-tesla-full.png', fullPage: true });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
