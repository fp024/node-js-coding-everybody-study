/**
 * data 디렉토리를 비우고 default-data 의 내용으로 초기화한다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const dataDir = path.join(projectRoot, 'data');
const defaultDataDir = path.join(projectRoot, 'default-data');

if (!fs.existsSync(defaultDataDir)) {
  console.error(`default-data 디렉토리를 찾을 수 없습니다: ${defaultDataDir}`);
  process.exit(1);
}

if (fs.existsSync(dataDir)) {
  for (const entry of fs.readdirSync(dataDir)) {
    fs.rmSync(path.join(dataDir, entry), { recursive: true, force: true });
  }
  console.log('data 디렉토리를 비웠습니다.');
} else {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('data 디렉토리를 생성했습니다.');
}

fs.cpSync(defaultDataDir, dataDir, { recursive: true });
console.log('default-data 의 내용을 data 로 복사했습니다.');
