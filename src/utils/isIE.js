import { detect } from 'detect-browser';

const browser = detect();

const isIE = browser && browser.name === 'ie' && browser.version.startsWith('11.');

export default isIE;
