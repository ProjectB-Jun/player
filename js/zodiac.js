const zodiacAnimals = [
  {
    name: '쥐',
    emoji: '🐭',
    message: '재빠르고 영리한 쥐가 먼저 인사해요! 오늘의 시작을 밝게 열어줄 거예요.'
  },
  {
    name: '소',
    emoji: '🐮',
    message: '우직한 소가 느긋하게 걸어오네요. 꾸준함이 오늘의 키워드!' 
  },
  {
    name: '호랑이',
    emoji: '🐯',
    message: '용맹한 호랑이가 힘찬 포효를 들려줘요. 자신감을 가져봐요!'
  },
  {
    name: '토끼',
    emoji: '🐰',
    message: '통통 튀는 토끼가 깡충! 귀여운 미소로 행복을 나눠줘요.'
  },
  {
    name: '용',
    emoji: '🐲',
    message: '신비로운 용이 등장했어요. 상상력과 용기가 가득!' 
  },
  {
    name: '뱀',
    emoji: '🐍',
    message: '지혜로운 뱀이 조용히 다가와 속삭여요. 차분함을 잃지 마세요.'
  },
  {
    name: '말',
    emoji: '🐴',
    message: '자유로운 말이 달려와요! 시원한 바람과 함께 기분 전환 어떠세요?'
  },
  {
    name: '양',
    emoji: '🐑',
    message: '포근한 양이 폭신한 구름을 안겨줘요. 따뜻한 쉼을 누려봐요.'
  },
  {
    name: '원숭이',
    emoji: '🐵',
    message: '재주 많은 원숭이가 장난스러운 눈빛을 보내요. 웃음을 잃지 마세요!'
  },
  {
    name: '닭',
    emoji: '🐔',
    message: '꼬끼오! 부지런한 닭이 새 하루를 알립니다. 알찬 하루를 준비해요.'
  },
  {
    name: '개',
    emoji: '🐶',
    message: '든든한 개가 꼬리를 흔들며 반겨줘요. 믿음직한 친구를 떠올려봐요.'
  },
  {
    name: '돼지',
    emoji: '🐷',
    message: '사랑스러운 돼지가 배를 두드리며 웃어요. 맛있는 행복이 찾아올 거예요!'
  }
];

function getNextAnimalIndex(currentIndex) {
  return (currentIndex + 1) % zodiacAnimals.length;
}

if (typeof module !== 'undefined') {
  module.exports = { zodiacAnimals, getNextAnimalIndex };
}

if (typeof window !== 'undefined') {
  window.ZodiacData = { zodiacAnimals, getNextAnimalIndex };
}
