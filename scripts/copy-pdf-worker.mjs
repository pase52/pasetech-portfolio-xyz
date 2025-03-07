import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');


const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.mjs');

const destPath = path.join(projectRoot, 'public', 'pdf.worker.mjs');

console.log(`Copying PDF worker from: ${pdfWorkerPath}`);
console.log(`To: ${destPath}`);

try {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(pdfWorkerPath, destPath);
  console.log('PDF worker file copied successfully');
} catch (error) {
  console.error('Error copying PDF worker file:', error);
}
