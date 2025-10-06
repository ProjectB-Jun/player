# 귀여운 십이지신 플레이어

터치(또는 클릭)할 때마다 십이지신 동물 친구들이 차례로 등장하는 단일 페이지 웹 앱입니다.

## 시작하기

1. 저장소를 클론하거나 내려받은 뒤, 프로젝트 루트에서 정적 서버를 실행합니다.
   ```bash
   python -m http.server 8000
   ```
2. 브라우저에서 [http://localhost:8000/index.html](http://localhost:8000/index.html)을 열면 동물 친구들을 만날 수 있습니다.

## 테스트

동물 데이터의 순서를 검증하는 간단한 스크립트를 포함하고 있습니다.

```bash
node tests/zodiac.test.js
```

## 프로젝트 구조

- `index.html`: 앱의 메인 페이지
- `css/styles.css`: 터치 카드 스타일 정의
- `js/zodiac.js`: 십이지신 동물 데이터와 순환 로직
- `js/app.js`: 사용자 인터랙션 핸들러
- `tests/zodiac.test.js`: 데이터 순서 검증 스크립트

즐겁게 터치해보세요!
