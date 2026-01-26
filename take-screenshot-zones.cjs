const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 3000 });

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Scroll to the Zones section
        await page.evaluate(() => {
            const elements = document.querySelectorAll('section');
            if (elements[3]) elements[3].scrollIntoView();
        });
        await new Promise(r => setTimeout(r, 1000));

        console.log('Taking screenshot of the ZONES section...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-zones-fix.png', fullPage: false });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
