import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

function compressFile(filePath) {
  const ext = path.extname(filePath);
  if (!['.html', '.css', '.js', '.svg', '.json'].includes(ext)) {
    return;
  }
  
  if (filePath.endsWith('.gz') || filePath.endsWith('.br')) {
    return;
  }
  
  const content = fs.readFileSync(filePath);
  
  // Gzip
  const gzipContent = zlib.gzipSync(content);
  fs.writeFileSync(filePath + '.gz', gzipContent);
  
  // Brotli
  const brotliContent = zlib.brotliCompressSync(content);
  fs.writeFileSync(filePath + '.br', brotliContent);
  
  const relativePath = path.relative(distDir, filePath);
  console.log(`  ✓ ${relativePath} -> .gz (${(gzipContent.length/1024).toFixed(2)} kB), .br (${(brotliContent.length/1024).toFixed(2)} kB)`);
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else {
      compressFile(filePath);
    }
  }
}

console.log('\n⚡ Running post-build Gzip and Brotli compression...');
if (fs.existsSync(distDir)) {
  traverseDirectory(distDir);
  console.log('✨ Compression completed successfully!\n');
} else {
  console.error('Error: dist directory does not exist!');
}
