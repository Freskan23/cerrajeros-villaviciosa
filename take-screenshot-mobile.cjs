const { chromium, devices } = require('playwright');

(async () => {
    const iPhone13 = devices['iPhone 13'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...iPhone13,
    });
    const page = await context.newPage();

    try {
        console.log('Navigating to http://localhost:3000 (iPhone 13 view)...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Scroll to the Zones section
        await page.evaluate(() => {
            const target = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('municipio'));
            if (target) target.scrollIntoView();
        });
        await new Promise(r => setTimeout(r, 2000));

        console.log('Taking mobile screenshot of the ZONES section...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-mobile-fix.png', fullPage: false });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
