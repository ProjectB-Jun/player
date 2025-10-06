# 귀여운 십이지신 플레이어

터치(또는 클릭)할 때마다 십이지신 동물 친구들이 차례로 등장하는 단일 페이지 웹 앱입니다.

## 시작하기

1. 저장소를 클론하거나 내려받고 프로젝트 루트로 이동합니다.
   ```bash
   git clone <repo-url>
   cd player
   ```
2. 방법 A – 간단한 HTTP 서버를 띄우고 접속하기
   ```bash
   python -m http.server 8000
   ```
   - Python이 없다면 `npx serve` 혹은 VS Code의 **Live Server** 확장처럼 원하는 정적 서버 도구를 사용해도 됩니다.
   - 브라우저에서 [http://localhost:8000/index.html](http://localhost:8000/index.html)을 열면 동물 친구들을 만날 수 있습니다.
3. 방법 B – 서버 없이 단일 파일로 열기
   - `standalone.html` 파일을 더블클릭(모바일은 파일 앱에서 열기)하면 브라우저가 바로 실행합니다.
   - 외부 폰트를 사용하지 않아 네트워크가 없어도 동일하게 동물 친구들을 만날 수 있습니다.

## 테스트

동물 데이터의 순서를 검증하는 간단한 스크립트를 포함하고 있습니다.

```bash
node tests/zodiac.test.js
```

GitHub Actions CI가 동일한 명령으로 풀 리퀘스트와 주요 브랜치 푸시에 대해 자동으로 테스트를 실행해줍니다.

## 프로젝트 구조

- `index.html`: 앱의 메인 페이지
- `standalone.html`: 서버 없이도 실행 가능한 단일 파일 버전
- `css/styles.css`: 터치 카드 스타일 정의
- `js/zodiac.js`: 십이지신 동물 데이터와 순환 로직
- `js/app.js`: 사용자 인터랙션 핸들러
- `tests/zodiac.test.js`: 데이터 순서 검증 스크립트

즐겁게 터치해보세요!
