const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const { zodiacAnimals } = require('../js/zodiac.js');

const standalonePath = path.join(__dirname, '..', 'standalone.html');
const standaloneContent = fs.readFileSync(standalonePath, 'utf8');

const match = standaloneContent.match(/const zodiacAnimals = \[(.*?)]\s*;/s);
assert.ok(match, 'standalone.html에 zodiacAnimals 정의가 존재해야 합니다.');

const offlineAnimals = vm.runInNewContext(`${match[0]}\nzodiacAnimals;`);
const normalizedOffline = offlineAnimals.map((animal) => ({ ...animal }));

assert.strictEqual(
  normalizedOffline.length,
  zodiacAnimals.length,
  'standalone.html의 동물 수가 기본 데이터와 일치해야 합니다.'
);

for (let index = 0; index < zodiacAnimals.length; index += 1) {
  const expected = zodiacAnimals[index];
  const actual = normalizedOffline[index];

  assert.deepStrictEqual(
    actual,
    expected,
    `${index + 1}번째 동물 데이터가 기본 버전과 동일해야 합니다.`
  );
}

console.log('standalone.html 동물 데이터가 기본 버전과 일치합니다.');
