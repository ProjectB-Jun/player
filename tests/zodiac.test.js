const assert = require('assert');
const path = require('path');
const { zodiacAnimals, getNextAnimalIndex } = require(path.join('..', 'js', 'zodiac.js'));

const expectedOrder = [
  '쥐',
  '소',
  '호랑이',
  '토끼',
  '용',
  '뱀',
  '말',
  '양',
  '원숭이',
  '닭',
  '개',
  '돼지'
];

assert.strictEqual(
  zodiacAnimals.length,
  expectedOrder.length,
  '동물의 수가 십이지신 순서와 일치해야 합니다.'
);

assert.deepStrictEqual(
  zodiacAnimals.map((animal) => animal.name),
  expectedOrder,
  '동물 순서가 십이지신 순서를 따라야 합니다.'
);

let index = -1;
for (let i = 0; i < zodiacAnimals.length * 2; i += 1) {
  index = getNextAnimalIndex(index);
  assert.ok(index >= 0 && index < zodiacAnimals.length, '인덱스는 배열 범위 안에 있어야 합니다.');
}

console.log('✅ zodiac.test.js: 모든 테스트를 통과했습니다.');
