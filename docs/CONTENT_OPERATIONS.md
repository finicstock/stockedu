# 콘텐츠 운영 가이드

이 프로젝트는 관리자 페이지나 데이터베이스 없이 `src/data/modules.ts`를 교육 콘텐츠의 원천으로 사용합니다. 규모가 작고 12개 모듈 중심인 현재 단계에서는 정적 데이터가 배포, 검수, 버전 관리에 가장 단순합니다.

## 수정 흐름

1. `src/data/modules.ts`에서 모듈을 수정합니다.
2. 어려운 금융 용어는 `keyConcepts`에 쉬운 설명을 함께 추가합니다.
3. 선택지는 항상 A, B, C 3개로 유지하고, 투자 추천처럼 보이는 표현은 피합니다.
4. `feedbackByChoice`에는 선택별로 잘한 점, 아쉬운 점, 다시 볼 기준을 적습니다.
5. `quiz`는 최소 2개 이상 유지합니다.
6. `npm run test`를 실행해 콘텐츠 구조를 검증합니다.
7. `npm run lint`, `npm run typecheck`, `npm run build`로 배포 전 품질을 확인합니다.

## 필수 데이터 체크

각 모듈은 아래 필드를 포함해야 합니다.

- `id`, `title`, `difficulty`, `estimatedMinutes`
- `conceptSummary`, `beginnerExplanation`, `simulationScenario`
- `choices`, `correctOrRecommendedChoice`, `feedbackByChoice`
- `quiz`, `rewardBadge`, `learningPoints`
- `keyConcepts`, `newsCards`, `priceSeries`

`src/lib/moduleValidation.ts`는 중복 id, 선택지 수, 추천 선택지 연결, 퀴즈 정답 인덱스, 가격 데이터 길이를 검사합니다.

## 콘텐츠 톤 원칙

- 모든 기업명, 뉴스, 가격, 포트폴리오 변화는 가상 데이터로 씁니다.
- "매수해야 한다", "수익을 낼 수 있다" 같은 추천·보장 표현은 쓰지 않습니다.
- "더 신중한 선택", "근거 있는 선택", "리스크가 낮은 선택"처럼 학습 관점의 표현을 사용합니다.
- 초보자가 겁먹지 않도록 한 문장은 짧게, 예시는 생활 속 비유로 풀어 씁니다.

## 나중에 CMS가 필요해지는 기준

아래 상황이 생기면 정적 파일 대신 CMS나 데이터베이스를 검토하면 좋습니다.

- 비개발자가 콘텐츠를 자주 수정해야 할 때
- 모듈 수가 수십 개 이상으로 늘어 검색과 태그 관리가 필요할 때
- 사용자별 학습 기록을 여러 기기에서 동기화해야 할 때
- A/B 테스트나 추천 알고리즘을 운영해야 할 때

가벼운 다음 단계는 Google Sheets/Notion 기반 콘텐츠 관리, 중간 단계는 Supabase 같은 데이터베이스, 본격 운영 단계는 Headless CMS를 추천합니다.
