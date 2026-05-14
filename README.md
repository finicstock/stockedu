# Stock Starter Quest / 주식 입문 퀘스트

초보자를 위한 시뮬레이션 기반 주식 교육 웹 애플리케이션입니다. 짧은 개념 학습, 가상 시장 상황, 선택지 기반 의사결정, 결과 피드백, 퀴즈, 점수와 배지 획득 흐름으로 구성되어 있습니다.

> 본 서비스는 투자 학습을 위한 가상 시뮬레이션입니다. 특정 종목의 매수·매도 추천이나 투자 자문을 제공하지 않습니다.

## 주요 기능

- 12개 주식 기초 학습 모듈
- 각 모듈별 가상 시뮬레이션, 뉴스 카드, 가격 변화 차트
- 선택지 피드백과 2~3개 퀴즈
- 점수, 완료 상태, 배지, 가상 현금, 가상 보유 종목 localStorage 저장
- 기본 가상 투자금 10,000,000원
- 포트폴리오 리스크 점수와 분산투자 점수
- 결과 화면의 학습 성향 리포트, 약점 개념, 복습 추천
- 공유용 결과 카드와 클립보드 복사
- 모듈 데이터 검증 테스트와 콘텐츠 운영 문서
- 브랜드/도메인 설정 분리
- 모바일 대응 카드형 UI

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

품질 확인:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## 주요 파일 구조

```text
src/app/
  page.tsx                 홈 대시보드
  modules/page.tsx         전체 모듈 목록
  modules/[id]/page.tsx    학습 및 시뮬레이션 상세
  portfolio/page.tsx       가상 포트폴리오
  results/page.tsx         전체 결과와 배지
src/components/            공통 UI 컴포넌트
src/data/modules.ts        12개 학습 모듈 데이터
src/hooks/useLearningProgress.ts
                           localStorage 기반 진행 상태 훅
src/lib/brand.ts           서비스명, 배포 URL, 외부 링크 설정
src/lib/learningInsights.ts
                           결과 리포트와 복습 추천 계산
src/lib/moduleValidation.ts
                           모듈 콘텐츠 구조 검증
src/lib/scoring.ts         점수 계산 함수
src/lib/portfolio.ts       가상 포트폴리오 계산 함수
src/types/learning.ts      학습 데이터 타입
docs/CONTENT_OPERATIONS.md 콘텐츠 추가/수정 운영 가이드
docs/BRANDING_AND_DOMAIN.md
                           브랜드와 커스텀 도메인 연결 가이드
```

## 콘텐츠 운영

현재는 별도 데이터베이스 없이 `src/data/modules.ts`를 원천 데이터로 사용합니다. 새 모듈을 추가하거나 문구를 수정한 뒤 `npm run test`를 실행하면 선택지 수, 추천 선택지, 퀴즈 정답 인덱스, 가격 데이터 등 기본 구조가 검증됩니다.

자세한 운영 절차는 [docs/CONTENT_OPERATIONS.md](docs/CONTENT_OPERATIONS.md)를 참고하세요.

## 브랜딩과 도메인

서비스명, 배포 URL, GitHub URL, 닉스의 스몰톡 링크는 `src/lib/brand.ts`에서 관리합니다. 커스텀 도메인을 연결하면 이 파일의 `productionUrl`과 README의 배포 주소를 함께 갱신하면 됩니다.

도메인 연결 절차는 [docs/BRANDING_AND_DOMAIN.md](docs/BRANDING_AND_DOMAIN.md)에 정리했습니다.

## 구현 가정

- 모든 종목명, 가격, 뉴스, 포트폴리오 결과는 교육용 가상 데이터입니다.
- 사용자의 선택이 일부 가상 현금과 보유 종목에 반영되지만 실제 투자 성과를 의미하지 않습니다.
- 완료한 모듈을 다시 풀면 점수와 선택 기록은 갱신되지만, 포트폴리오 영향은 중복 적용하지 않습니다.
- 서버 저장소 없이 브라우저 localStorage만 사용합니다.
- 로그인, 계정 동기화, 관리자 페이지는 이번 범위에서 제외하고 정적 데이터와 브라우저 저장소 중심으로 구현했습니다.

## 추가 개선 아이디어

- 난이도별 학습 경로와 주간 챌린지
- 캔들 차트와 호가창 전용 인터랙티브 연습
- 접근성 강화를 위한 키보드 단축 이동과 음성 설명
- 결과 카드 이미지 다운로드
- 간단한 운영자용 콘텐츠 편집 화면
- 백엔드 저장소와 계정 기반 진행 상태 동기화
