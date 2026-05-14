# 브랜드와 도메인 가이드

서비스 브랜드 값은 `src/lib/brand.ts`에 모아 두었습니다.

- 서비스명: `Stock Starter Quest`
- 한국어명: `주식 입문 퀘스트`
- 현재 배포 URL: `https://1-2-3-4-5-6-bice.vercel.app`
- GitHub 저장소: `https://github.com/finicstock/stockedu`
- 닉스의 스몰톡: `https://contents.premium.naver.com/finics/bubu`

## 커스텀 도메인 후보

현재 코드에는 아래 후보를 메모해 두었습니다.

- `stockstarter.kr`
- `stockquest.kr`
- `finics-quest.com`

실제 구매 가능 여부와 상표 사용 가능성은 도메인 등록 전 별도로 확인해야 합니다.

## Vercel에서 도메인 연결하기

1. Vercel 프로젝트 대시보드로 이동합니다.
2. Settings > Domains에서 사용할 도메인을 추가합니다.
3. Vercel이 안내하는 DNS 레코드를 도메인 등록기관에 입력합니다.
4. Vercel에서 Valid Configuration 상태가 될 때까지 기다립니다.
5. 연결이 끝나면 `src/lib/brand.ts`의 `productionUrl`을 새 도메인으로 바꿉니다.
6. README와 공유 문구에 표시되는 URL을 함께 확인합니다.
7. `npm run build` 후 GitHub에 push하면 Vercel이 새 배포를 생성합니다.

## 연결 후 확인할 것

- 홈 화면과 결과 공유 문구에 새 도메인이 반영되는지
- Open Graph 메타데이터의 `metadataBase`가 새 주소를 가리키는지
- 닉스의 스몰톡 홍보 박스 전체가 외부 링크로 열리는지
- 모바일에서 홈, 모듈 상세, 결과 화면 레이아웃이 깨지지 않는지
