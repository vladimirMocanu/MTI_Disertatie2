const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Landing Page', () => {
    let dom;
    let document;

    beforeAll((done) => {
        const filePath = path.join(__dirname, '..', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            dom = new JSDOM(data);
            document = dom.window.document;
            done();
        });
    });

    test('should have a button that redirects to the contact page', () => {
        const button = document.querySelector('.contact-button');
        expect(button).not.toBeNull();
        expect(button.textContent).toBe('Contact Us');
        button.click();
        expect(dom.window.location.href).toContain('#contact');
    });
});
