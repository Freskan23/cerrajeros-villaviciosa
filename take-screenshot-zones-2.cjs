const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 1000 });

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Scroll specifically to the Cobertura Local section
        await page.evaluate(() => {
            const sections = document.querySelectorAll('section');
            // It's likely the 4th/5th section
            const target = Array.from(sections).find(s => s.textContent.includes('municipio'));
            if (target) target.scrollIntoView();
        });
        await new Promise(r => setTimeout(r, 1000));

        console.log('Taking screenshot of the ZONES section...');
        await page.screenshot({ path: 'c:/Users/panoj/Documents/Clientes/Villaviciosa/client/public/screenshot-zones-fix-2.png', fullPage: false });
        console.log('Screenshot saved successfully.');
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
