import type { LearningModule } from "@/types/learning";

export const learningModules: LearningModule[] = [
  {
    id: "what-is-stock",
    title: "주식이란 무엇인가",
    difficulty: "입문",
    estimatedMinutes: 7,
    conceptSummary: "주식은 기업의 일부를 나누어 가진 권리입니다. 주주는 기업의 작은 조각을 가진 사람입니다.",
    beginnerExplanation:
      "동네 카페를 친구들과 함께 열었다고 생각해 보세요. 카페가 잘되면 함께 기뻐하고, 장사가 어려우면 함께 위험을 나누는 구조가 주식과 비슷합니다.",
    simulationScenario:
      "가상의 카페 회사 커피브릭이 새로운 매장을 열었습니다. 매출은 늘고 있지만 임대료도 함께 오르고 있습니다. 당신은 가상 머니로 커피브릭의 주주가 될지 판단해야 합니다.",
    choices: [
      {
        id: "A",
        label: "매출 성장 자료와 비용 변화를 함께 확인한다",
        detail: "좋은 점과 부담 요인을 같이 보고 일부 가상 금액만 배분합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -1_200_000,
          holdings: [
            {
              symbol: "CFB",
              name: "커피브릭",
              sector: "소비재",
              quantity: 40,
              averagePrice: 30_000,
              currentPrice: 31_200
            }
          ],
          riskDelta: -3,
          diversificationDelta: 4,
          note: "근거를 확인하고 일부만 배분해 가상 포트폴리오의 출발 위험을 낮췄습니다."
        }
      },
      {
        id: "B",
        label: "친구가 좋다고 해서 바로 산다",
        detail: "소문은 참고만 하고 직접 확인하지 않으면 판단 근거가 약합니다.",
        quality: "mixed",
        points: 28,
        impact: {
          cashChange: -1_500_000,
          holdings: [
            {
              symbol: "CFB",
              name: "커피브릭",
              sector: "소비재",
              quantity: 50,
              averagePrice: 30_000,
              currentPrice: 29_100
            }
          ],
          riskDelta: 6,
          note: "소문 기반 선택이라 가격 변동에 흔들릴 가능성이 커졌습니다."
        }
      },
      {
        id: "C",
        label: "아무것도 확인하지 않고 전액에 가깝게 넣는다",
        detail: "초보자에게 전액 집중은 작은 악재에도 큰 불안을 만들 수 있습니다.",
        quality: "risky",
        points: 12,
        impact: {
          cashChange: -4_000_000,
          holdings: [
            {
              symbol: "CFB",
              name: "커피브릭",
              sector: "소비재",
              quantity: 134,
              averagePrice: 30_000,
              currentPrice: 27_900
            }
          ],
          riskDelta: 18,
          diversificationDelta: -8,
          note: "한 기업에 크게 집중되어 가상 포트폴리오의 변동성이 높아졌습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "기업의 성장성과 비용을 함께 확인한 선택입니다. 주식은 기업의 일부를 소유하는 일이므로, 좋은 이야기뿐 아니라 부담 요인도 함께 보는 태도가 중요합니다.",
      B: "주변 의견은 출발점이 될 수 있지만 결론이 되기는 어렵습니다. 초보자는 특히 자료를 직접 확인하는 습관이 방패가 됩니다.",
      C: "확인 없이 큰 금액을 넣으면 결과가 좋을 때도 이유를 배우기 어렵고, 나쁠 때는 감정적으로 흔들리기 쉽습니다."
    },
    quiz: [
      {
        id: "stock-q1",
        question: "주식을 산다는 말에 가장 가까운 뜻은 무엇일까요?",
        options: ["기업의 일부 지분을 가진다", "은행 예금에 가입한다", "회사에 돈을 빌려준다"],
        answerIndex: 0,
        explanation: "주식은 기업의 지분입니다. 회사에 돈을 빌려주는 채권과는 다릅니다."
      },
      {
        id: "stock-q2",
        question: "초보자가 가상 투자 판단 전에 먼저 확인하면 좋은 것은?",
        options: ["친구의 확신", "기업의 매출과 비용 같은 기본 자료", "종목 이름의 느낌"],
        answerIndex: 1,
        explanation: "근거 기반 의사결정은 주식 학습의 가장 중요한 출발점입니다."
      }
    ],
    rewardBadge: {
      name: "첫 주주 배지",
      description: "주식이 기업의 지분이라는 기본 개념을 이해했습니다.",
      icon: "seedling"
    },
    learningPoints: [
      "주식은 기업의 일부를 소유하는 권리입니다.",
      "주가 상승 가능성과 하락 위험은 함께 존재합니다.",
      "소문보다 자료를 확인하는 습관이 중요합니다."
    ],
    keyConcepts: [
      { term: "주식", easyMeaning: "기업을 아주 작은 조각으로 나눈 소유권" },
      { term: "주주", easyMeaning: "기업의 일부를 가진 사람" },
      { term: "지분", easyMeaning: "내가 가진 회사 조각의 비율" }
    ],
    newsCards: [
      {
        headline: "커피브릭, 신규 매장 5곳 개점",
        tone: "positive",
        detail: "매출 성장 기대가 있지만 초기 비용도 증가했습니다."
      },
      {
        headline: "원두 가격 상승으로 원가 부담",
        tone: "negative",
        detail: "성장하는 회사도 비용 관리를 함께 봐야 합니다."
      }
    ],
    priceSeries: [30000, 30500, 31200, 30100, 30900, 31200]
  },
  {
    id: "why-prices-move",
    title: "주가가 오르고 내리는 이유",
    difficulty: "입문",
    estimatedMinutes: 8,
    conceptSummary: "주가는 실적, 기대감, 금리, 경기, 뉴스, 수급처럼 여러 요인의 영향을 받습니다.",
    beginnerExplanation:
      "우산 가격이 장마 예보, 재고, 사람들의 관심에 따라 달라질 수 있듯 주가도 하나의 이유만으로 움직이지 않습니다.",
    simulationScenario:
      "가상 기업 에코배터리에 대형 공급 논의 뉴스와 원재료 가격 상승 뉴스가 동시에 나왔습니다. 가격은 이미 빠르게 움직이고 있습니다.",
    choices: [
      {
        id: "A",
        label: "뉴스 제목만 보고 바로 산다",
        detail: "제목은 강하지만 실제 매출 영향이 아직 불확실할 수 있습니다.",
        quality: "risky",
        points: 18,
        impact: {
          cashChange: -1_000_000,
          holdings: [
            {
              symbol: "ECB",
              name: "에코배터리",
              sector: "2차전지",
              quantity: 20,
              averagePrice: 50_000,
              currentPrice: 47_800
            }
          ],
          riskDelta: 10,
          note: "제목 반응만 보고 들어가 단기 변동성의 영향을 크게 받았습니다."
        }
      },
      {
        id: "B",
        label: "실적과 뉴스 내용을 함께 확인한다",
        detail: "공급 논의의 규모, 원가 부담, 이미 오른 가격을 함께 봅니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -800_000,
          holdings: [
            {
              symbol: "ECB",
              name: "에코배터리",
              sector: "2차전지",
              quantity: 16,
              averagePrice: 50_000,
              currentPrice: 50_700
            }
          ],
          riskDelta: -2,
          diversificationDelta: 3,
          note: "좋은 뉴스와 부담 요인을 나란히 보며 과열 위험을 줄였습니다."
        }
      },
      {
        id: "C",
        label: "가격이 급등했으니 전액 매수한다",
        detail: "급등은 기회처럼 보이지만 이미 기대가 반영되었을 수 있습니다.",
        quality: "risky",
        points: 10,
        impact: {
          cashChange: -3_000_000,
          holdings: [
            {
              symbol: "ECB",
              name: "에코배터리",
              sector: "2차전지",
              quantity: 60,
              averagePrice: 50_000,
              currentPrice: 45_500
            }
          ],
          riskDelta: 20,
          diversificationDelta: -6,
          note: "급등 뒤 추격하는 선택으로 가상 손실 변동이 커졌습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "B",
    feedbackByChoice: {
      A: "뉴스 제목은 관심을 끌기 위해 강하게 쓰일 수 있습니다. 실제 계약 규모, 비용, 이미 오른 가격을 같이 봐야 합니다.",
      B: "좋은 뉴스와 나쁜 뉴스를 함께 비교했습니다. 주가는 기대와 현실의 차이에 민감하게 반응합니다.",
      C: "급등 자체가 좋은 근거는 아닙니다. 이미 많은 기대가 가격에 들어가 있으면 작은 실망에도 흔들릴 수 있습니다."
    },
    quiz: [
      {
        id: "move-q1",
        question: "주가에 영향을 줄 수 있는 요인으로 적절한 것은?",
        options: ["실적과 금리", "키보드 색상", "앱 아이콘 모양"],
        answerIndex: 0,
        explanation: "기업 실적, 금리, 경기, 뉴스, 수급은 가격에 영향을 줄 수 있습니다."
      },
      {
        id: "move-q2",
        question: "좋은 뉴스가 나왔는데도 주가가 내려갈 수 있는 이유는?",
        options: ["이미 기대가 가격에 반영되었을 수 있어서", "좋은 뉴스는 항상 악재라서", "뉴스와 가격은 절대 관련이 없어서"],
        answerIndex: 0,
        explanation: "시장은 미래 기대를 미리 반영하기도 합니다."
      }
    ],
    rewardBadge: {
      name: "뉴스 해석가 배지",
      description: "가격이 여러 요인으로 움직인다는 점을 이해했습니다.",
      icon: "newspaper"
    },
    learningPoints: [
      "주가는 하나의 이유만으로 움직이지 않습니다.",
      "뉴스 제목과 실제 영향은 다를 수 있습니다.",
      "가격에 기대가 이미 반영되었는지 생각해야 합니다."
    ],
    keyConcepts: [
      { term: "실적", easyMeaning: "회사가 실제로 벌고 남긴 성과" },
      { term: "기대감", easyMeaning: "앞으로 좋아질 것이라는 시장의 예상" },
      { term: "수급", easyMeaning: "사려는 사람과 팔려는 사람의 힘겨루기" }
    ],
    newsCards: [
      {
        headline: "에코배터리, 대형 공급 논의 보도",
        tone: "positive",
        detail: "확정 계약이 아닌 논의 단계라는 점을 확인해야 합니다."
      },
      {
        headline: "리튬 가격 상승, 배터리 원가 부담 확대",
        tone: "negative",
        detail: "매출이 늘어도 비용이 더 빠르게 늘면 이익은 줄 수 있습니다."
      }
    ],
    priceSeries: [48000, 49200, 51000, 50400, 49000, 50700]
  },
  {
    id: "market-limit-order",
    title: "시장가와 지정가 주문",
    difficulty: "기초",
    estimatedMinutes: 6,
    conceptSummary:
      "시장가는 빠른 체결에 유리하지만 가격 통제가 약하고, 지정가는 원하는 가격을 정하지만 체결되지 않을 수 있습니다.",
    beginnerExplanation:
      "택시를 바로 잡는 것이 시장가라면, 원하는 요금에 맞는 차량을 기다리는 것은 지정가와 비슷합니다.",
    simulationScenario:
      "가상 종목 스피드칩이 갑자기 관심을 받으며 가격이 빠르게 움직입니다. 당신은 주문 방식을 골라야 합니다.",
    choices: [
      {
        id: "A",
        label: "시장가로 즉시 주문한다",
        detail: "체결은 빠르지만 예상보다 높은 가격에 살 수 있습니다.",
        quality: "mixed",
        points: 34,
        impact: {
          cashChange: -900_000,
          holdings: [
            {
              symbol: "SPC",
              name: "스피드칩",
              sector: "반도체",
              quantity: 30,
              averagePrice: 30_000,
              currentPrice: 29_400
            }
          ],
          riskDelta: 5,
          note: "빠르게 체결됐지만 가격 통제력이 약해 평균 매입가가 조금 높아졌습니다."
        }
      },
      {
        id: "B",
        label: "지정가로 원하는 가격을 입력한다",
        detail: "체결되지 않을 수 있지만 내가 감당할 가격을 정합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -600_000,
          holdings: [
            {
              symbol: "SPC",
              name: "스피드칩",
              sector: "반도체",
              quantity: 20,
              averagePrice: 30_000,
              currentPrice: 30_300
            }
          ],
          riskDelta: -1,
          diversificationDelta: 3,
          note: "가격 기준을 정해 과열된 순간을 무작정 따라가지 않았습니다."
        }
      },
      {
        id: "C",
        label: "가격을 확인하지 않고 주문한다",
        detail: "주문 방식과 가격을 모르면 체결 결과를 통제하기 어렵습니다.",
        quality: "risky",
        points: 8,
        impact: {
          cashChange: -1_600_000,
          holdings: [
            {
              symbol: "SPC",
              name: "스피드칩",
              sector: "반도체",
              quantity: 50,
              averagePrice: 32_000,
              currentPrice: 28_500
            }
          ],
          riskDelta: 15,
          note: "가격 확인 없이 주문해 예상보다 불리한 체결을 경험했습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "B",
    feedbackByChoice: {
      A: "시장가는 빠른 체결이 필요할 때 쓰지만, 움직임이 큰 종목에서는 체결 가격이 달라질 수 있습니다.",
      B: "지정가는 가격 기준을 세우는 연습에 좋습니다. 다만 체결되지 않을 수 있다는 점도 함께 기억해야 합니다.",
      C: "주문 전 가격, 수량, 주문 방식을 확인하는 습관은 초보자에게 매우 중요합니다."
    },
    quiz: [
      {
        id: "order-q1",
        question: "시장가 주문의 특징은?",
        options: ["빠른 체결 가능성이 높지만 가격 통제가 약하다", "항상 내가 원하는 가격에 체결된다", "체결될 수 없다"],
        answerIndex: 0,
        explanation: "시장가는 즉시성에 강하지만 가격이 예상과 다를 수 있습니다."
      },
      {
        id: "order-q2",
        question: "지정가 주문의 단점으로 맞는 것은?",
        options: ["체결되지 않을 수 있다", "무조건 비싸게 체결된다", "가격을 정할 수 없다"],
        answerIndex: 0,
        explanation: "지정가는 원하는 가격을 정하는 대신 시장이 그 가격에 오지 않으면 체결되지 않을 수 있습니다."
      }
    ],
    rewardBadge: {
      name: "주문 방식 마스터 배지",
      description: "시장가와 지정가의 장단점을 구분했습니다.",
      icon: "mouse-pointer-click"
    },
    learningPoints: [
      "시장가는 속도, 지정가는 가격 기준에 강점이 있습니다.",
      "급등락 상황에서는 주문 전 가격 확인이 더 중요합니다.",
      "체결되지 않는 것도 하나의 결과입니다."
    ],
    keyConcepts: [
      { term: "시장가", easyMeaning: "현재 시장에서 가능한 가격으로 빠르게 체결하는 주문" },
      { term: "지정가", easyMeaning: "내가 원하는 가격을 직접 정하는 주문" },
      { term: "체결", easyMeaning: "주문이 실제 거래로 이루어진 상태" }
    ],
    newsCards: [
      {
        headline: "스피드칩, 장중 거래량 급증",
        tone: "neutral",
        detail: "거래가 몰리면 가격이 짧은 시간에 크게 변할 수 있습니다."
      }
    ],
    priceSeries: [29000, 30000, 32500, 31500, 30200, 30300]
  },
  {
    id: "orderbook-spread",
    title: "호가창과 스프레드",
    difficulty: "기초",
    estimatedMinutes: 8,
    conceptSummary:
      "호가창은 사려는 가격과 팔려는 가격을 보여줍니다. 스프레드는 가장 높은 매수호가와 가장 낮은 매도호가의 차이입니다.",
    beginnerExplanation:
      "중고거래에서 구매자가 부르는 가격과 판매자가 원하는 가격 사이의 간격이 좁으면 거래가 쉬운 것과 비슷합니다.",
    simulationScenario:
      "가상 종목 라이트마트와 슬로우바이오의 호가창을 비교합니다. 라이트마트는 거래량이 많고, 슬로우바이오는 거래가 드뭅니다.",
    choices: [
      {
        id: "A",
        label: "스프레드가 좁고 거래량이 많은 종목을 고른다",
        detail: "거래 비용과 체결 불확실성을 줄이는 선택입니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -700_000,
          holdings: [
            {
              symbol: "LMT",
              name: "라이트마트",
              sector: "유통",
              quantity: 35,
              averagePrice: 20_000,
              currentPrice: 20_200
            }
          ],
          riskDelta: -4,
          diversificationDelta: 3,
          note: "유동성이 높은 종목을 골라 거래 비용 위험을 낮췄습니다."
        }
      },
      {
        id: "B",
        label: "거래량이 거의 없는 종목을 무작정 고른다",
        detail: "원할 때 원하는 가격으로 거래하기 어려울 수 있습니다.",
        quality: "risky",
        points: 14,
        impact: {
          cashChange: -700_000,
          holdings: [
            {
              symbol: "SBO",
              name: "슬로우바이오",
              sector: "바이오",
              quantity: 20,
              averagePrice: 35_000,
              currentPrice: 31_500
            }
          ],
          riskDelta: 14,
          note: "스프레드가 넓어 체감 거래 비용이 커졌습니다."
        }
      },
      {
        id: "C",
        label: "호가창을 보지 않고 주문한다",
        detail: "거래량과 가격 간격을 모르면 불리한 체결을 놓치기 쉽습니다.",
        quality: "mixed",
        points: 24,
        impact: {
          cashChange: -800_000,
          holdings: [
            {
              symbol: "LMT",
              name: "라이트마트",
              sector: "유통",
              quantity: 40,
              averagePrice: 20_000,
              currentPrice: 19_700
            }
          ],
          riskDelta: 7,
          note: "기본 종목은 나쁘지 않았지만 주문 전 확인 과정이 부족했습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "스프레드가 좁고 거래량이 많은 종목은 상대적으로 거래 비용과 체결 불확실성이 낮습니다.",
      B: "거래가 적은 종목은 사기도 팔기도 어려울 수 있습니다. 가격표가 있어도 실제 거래가 매끄럽지 않을 수 있습니다.",
      C: "호가창은 짧은 순간의 시장 분위기를 보여주는 창입니다. 주문 전 확인하면 실수를 줄일 수 있습니다."
    },
    quiz: [
      {
        id: "spread-q1",
        question: "스프레드는 무엇을 뜻할까요?",
        options: ["매수호가와 매도호가 사이의 차이", "회사의 총 직원 수", "하루 뉴스 개수"],
        answerIndex: 0,
        explanation: "스프레드가 넓으면 거래 비용이 커질 수 있습니다."
      },
      {
        id: "spread-q2",
        question: "유동성이 높은 종목의 일반적인 특징은?",
        options: ["거래가 비교적 활발하다", "거래가 완전히 멈춰 있다", "호가가 항상 없다"],
        answerIndex: 0,
        explanation: "유동성은 사고팔기 쉬운 정도를 뜻합니다."
      }
    ],
    rewardBadge: {
      name: "호가 탐험가 배지",
      description: "호가창, 스프레드, 유동성의 기본을 익혔습니다.",
      icon: "list-tree"
    },
    learningPoints: [
      "호가창은 매수자와 매도자의 가격을 보여줍니다.",
      "스프레드가 넓으면 불리한 가격에 거래될 수 있습니다.",
      "유동성은 거래하기 쉬운 정도입니다."
    ],
    keyConcepts: [
      { term: "매수호가", easyMeaning: "사려는 사람이 제시한 가격" },
      { term: "매도호가", easyMeaning: "팔려는 사람이 제시한 가격" },
      { term: "유동성", easyMeaning: "원할 때 사고팔기 쉬운 정도" }
    ],
    newsCards: [
      {
        headline: "라이트마트 거래량 120만 주",
        tone: "positive",
        detail: "매수와 매도 주문이 촘촘해 스프레드가 좁습니다."
      },
      {
        headline: "슬로우바이오 거래량 3천 주",
        tone: "negative",
        detail: "호가 간격이 넓어 예상보다 불리한 가격이 될 수 있습니다."
      }
    ],
    priceSeries: [20000, 20100, 20050, 20200, 20150, 20200]
  },
  {
    id: "candle-chart",
    title: "캔들 차트 기초",
    difficulty: "입문",
    estimatedMinutes: 7,
    conceptSummary:
      "캔들은 시가, 고가, 저가, 종가를 한 번에 보여줍니다. 종가가 시가보다 높으면 보통 양봉, 낮으면 음봉으로 표시합니다.",
    beginnerExplanation:
      "하루의 시작 가격, 가장 높았던 가격, 가장 낮았던 가격, 끝난 가격을 하나의 막대로 요약한 일기장이라고 보면 쉽습니다.",
    simulationScenario:
      "가상 종목 데일리푸드의 하루 캔들을 봅니다. 장중에는 크게 흔들렸지만 종가는 시가보다 높게 끝났습니다.",
    choices: [
      {
        id: "A",
        label: "종가가 시가보다 높다는 점을 해석한다",
        detail: "하루 흐름을 읽되, 한 개 캔들만으로 단정하지 않습니다.",
        quality: "recommended",
        points: 50
      },
      {
        id: "B",
        label: "색깔만 보고 무조건 상승 추세라고 판단한다",
        detail: "색은 단서일 뿐 전체 흐름과 거래량도 함께 봐야 합니다.",
        quality: "mixed",
        points: 26
      },
      {
        id: "C",
        label: "캔들 하나만 보고 전액 투자한다",
        detail: "차트 한 조각만으로 큰 결정을 내리면 위험합니다.",
        quality: "risky",
        points: 8,
        impact: {
          cashChange: -2_000_000,
          holdings: [
            {
              symbol: "DFD",
              name: "데일리푸드",
              sector: "식품",
              quantity: 100,
              averagePrice: 20_000,
              currentPrice: 18_600
            }
          ],
          riskDelta: 14,
          note: "캔들 하나에 큰 금액을 걸어 단기 흔들림을 크게 겪었습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "캔들의 기본 정보를 바르게 읽었습니다. 차트는 참고 도구이며 다른 근거와 함께 봐야 합니다.",
      B: "색깔만으로 추세를 단정하기는 어렵습니다. 시가, 고가, 저가, 종가와 기간을 함께 보세요.",
      C: "캔들 하나는 하루의 요약일 뿐 미래를 확정하지 않습니다. 차트는 예언 도구가 아닙니다."
    },
    quiz: [
      {
        id: "candle-q1",
        question: "캔들에서 종가는 무엇을 뜻할까요?",
        options: ["해당 기간이 끝난 가격", "회사의 총자산", "뉴스가 나온 시간"],
        answerIndex: 0,
        explanation: "종가는 선택한 기간의 마지막 가격입니다."
      },
      {
        id: "candle-q2",
        question: "캔들 차트를 볼 때 적절한 태도는?",
        options: ["참고 도구로 사용한다", "미래를 100% 맞히는 도구로 믿는다", "색깔만 본다"],
        answerIndex: 0,
        explanation: "차트는 가능성을 읽는 도구이지 확정 예언이 아닙니다."
      }
    ],
    rewardBadge: {
      name: "캔들 리더 배지",
      description: "시가, 고가, 저가, 종가를 구분했습니다.",
      icon: "candlestick-chart"
    },
    learningPoints: [
      "캔들은 한 기간의 가격 움직임을 요약합니다.",
      "양봉과 음봉은 시가와 종가의 관계를 보여줍니다.",
      "차트만으로 결론을 내리면 위험합니다."
    ],
    keyConcepts: [
      { term: "시가", easyMeaning: "처음 시작한 가격" },
      { term: "고가", easyMeaning: "그 기간 중 가장 높았던 가격" },
      { term: "저가", easyMeaning: "그 기간 중 가장 낮았던 가격" },
      { term: "종가", easyMeaning: "마지막으로 끝난 가격" }
    ],
    newsCards: [
      {
        headline: "데일리푸드, 장중 급락 뒤 회복",
        tone: "neutral",
        detail: "하루 안에서도 감정이 흔들릴 만한 움직임이 있었습니다."
      }
    ],
    priceSeries: [19800, 19200, 20500, 20100, 20700, 21000]
  },
  {
    id: "financial-statements",
    title: "재무제표 기초",
    difficulty: "기초",
    estimatedMinutes: 9,
    conceptSummary:
      "재무제표는 회사의 체력을 보여주는 숫자 표입니다. 매출, 영업이익, 순이익, 부채를 먼저 보면 좋습니다.",
    beginnerExplanation:
      "가계부에서 수입, 생활비, 남은 돈, 빚을 보는 것처럼 회사도 돈을 얼마나 벌고 남기는지 확인합니다.",
    simulationScenario:
      "가상 회사 세 곳의 간단 재무 정보를 비교합니다. A사는 매출과 이익이 함께 증가, B사는 매출은 크지만 적자, C사는 이름만 멋집니다.",
    choices: [
      {
        id: "A",
        label: "매출과 이익이 함께 증가하는 기업을 고른다",
        detail: "성장과 수익성을 함께 확인합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -1_000_000,
          holdings: [
            {
              symbol: "HSM",
              name: "헬시밀",
              sector: "헬스케어",
              quantity: 50,
              averagePrice: 20_000,
              currentPrice: 21_000
            }
          ],
          riskDelta: -3,
          diversificationDelta: 4,
          note: "재무 기초를 확인해 안정적인 가상 기업을 골랐습니다."
        }
      },
      {
        id: "B",
        label: "매출은 크지만 적자가 심한 기업을 고른다",
        detail: "매출 규모만 보고 이익과 부채를 놓쳤습니다.",
        quality: "mixed",
        points: 24,
        impact: {
          cashChange: -1_000_000,
          holdings: [
            {
              symbol: "BIG",
              name: "빅세일즈",
              sector: "플랫폼",
              quantity: 25,
              averagePrice: 40_000,
              currentPrice: 36_800
            }
          ],
          riskDelta: 10,
          note: "매출은 컸지만 적자 부담 때문에 변동성이 커졌습니다."
        }
      },
      {
        id: "C",
        label: "숫자를 보지 않고 이름이 멋진 기업을 고른다",
        detail: "브랜드 느낌만으로는 회사의 체력을 알 수 없습니다.",
        quality: "risky",
        points: 10,
        impact: {
          cashChange: -1_000_000,
          holdings: [
            {
              symbol: "ZZN",
              name: "제니스나인",
              sector: "테마",
              quantity: 100,
              averagePrice: 10_000,
              currentPrice: 8_900
            }
          ],
          riskDelta: 12,
          note: "숫자를 확인하지 않아 학습용 경고 신호를 놓쳤습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "매출과 이익을 함께 본 좋은 선택입니다. 많이 파는 것과 실제로 남기는 것은 다를 수 있습니다.",
      B: "매출이 큰 회사도 적자가 계속되면 체력이 약할 수 있습니다. 성장 단계인지 구조적 적자인지 확인해야 합니다.",
      C: "이름이나 분위기는 숫자를 대신할 수 없습니다. 재무제표는 회사의 체력을 보는 기본 지도입니다."
    },
    quiz: [
      {
        id: "fs-q1",
        question: "매출은 무엇을 뜻할까요?",
        options: ["회사가 상품이나 서비스를 팔아 벌어들인 금액", "반드시 남은 이익", "주주의 나이"],
        answerIndex: 0,
        explanation: "매출은 판매 금액이고, 이익은 비용을 뺀 뒤 남는 돈입니다."
      },
      {
        id: "fs-q2",
        question: "영업이익을 볼 때 알 수 있는 것은?",
        options: ["주된 사업으로 돈을 남기는지", "주가가 내일 반드시 오를지", "직원들의 점심 메뉴"],
        answerIndex: 0,
        explanation: "영업이익은 본업의 수익성을 보는 데 도움이 됩니다."
      },
      {
        id: "fs-q3",
        question: "부채를 확인하는 이유로 적절한 것은?",
        options: ["갚아야 할 부담을 보기 위해", "회사 이름을 바꾸기 위해", "차트 색을 정하기 위해"],
        answerIndex: 0,
        explanation: "부채는 회사가 감당해야 할 부담이므로 재무 안정성을 볼 때 중요합니다."
      }
    ],
    rewardBadge: {
      name: "재무 체력 측정 배지",
      description: "매출, 이익, 부채의 기본 의미를 이해했습니다.",
      icon: "calculator"
    },
    learningPoints: [
      "매출과 이익은 다른 숫자입니다.",
      "부채가 지나치게 크면 부담이 될 수 있습니다.",
      "재무제표는 회사의 체력을 보는 기본 자료입니다."
    ],
    keyConcepts: [
      { term: "매출", easyMeaning: "팔아서 벌어들인 전체 금액" },
      { term: "영업이익", easyMeaning: "본업에서 비용을 빼고 남긴 돈" },
      { term: "순이익", easyMeaning: "여러 비용과 세금까지 반영한 최종 이익" },
      { term: "부채", easyMeaning: "갚아야 할 돈" }
    ],
    newsCards: [
      {
        headline: "헬시밀, 매출 18%·영업이익 12% 성장",
        tone: "positive",
        detail: "성장과 수익성이 같이 개선된 예시입니다."
      },
      {
        headline: "빅세일즈, 매출은 크지만 적자 확대",
        tone: "negative",
        detail: "규모만으로 건강한 회사라고 단정할 수 없습니다."
      }
    ],
    priceSeries: [20000, 20300, 20600, 20250, 20800, 21000]
  },
  {
    id: "per-pbr-roe",
    title: "PER, PBR, ROE",
    difficulty: "기초",
    estimatedMinutes: 10,
    conceptSummary:
      "PER은 이익 대비 주가 수준, PBR은 자산 대비 주가 수준, ROE는 자기자본으로 이익을 얼마나 냈는지 보는 지표입니다.",
    beginnerExplanation:
      "과일 가격을 볼 때 크기, 신선도, 맛을 함께 보듯 투자 지표도 하나만 보지 않고 여러 각도에서 봅니다.",
    simulationScenario:
      "가상 기업 밸류전자, 자산모아, 수익클린의 PER, PBR, ROE가 다릅니다. 하나의 숫자만 보고 판단하면 함정이 생길 수 있습니다.",
    choices: [
      {
        id: "A",
        label: "PER, PBR, ROE를 종합적으로 본다",
        detail: "낮거나 높다는 사실보다 왜 그런지 맥락을 확인합니다.",
        quality: "recommended",
        points: 50
      },
      {
        id: "B",
        label: "PER이 낮다는 이유만으로 고른다",
        detail: "낮은 PER은 저평가일 수도, 이익 악화 신호일 수도 있습니다.",
        quality: "mixed",
        points: 25
      },
      {
        id: "C",
        label: "ROE만 보고 고른다",
        detail: "ROE가 높아도 부채나 일회성 이익을 함께 봐야 합니다.",
        quality: "mixed",
        points: 28
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "지표를 종합적으로 본 선택입니다. 지표는 질문을 만들어 주는 도구이지 혼자 결론을 내는 도구가 아닙니다.",
      B: "PER이 낮다는 이유만으로는 부족합니다. 이익이 줄어드는 회사도 PER이 낮아 보일 수 있습니다.",
      C: "ROE는 효율성을 보여주지만 한 지표만으로는 위험을 놓칠 수 있습니다."
    },
    quiz: [
      {
        id: "ratio-q1",
        question: "PER을 가장 쉽게 설명하면?",
        options: ["이익에 비해 주가가 어느 정도인지 보는 지표", "회사의 현금 위치", "하루 거래량"],
        answerIndex: 0,
        explanation: "PER은 이익 대비 가격 수준을 보는 대표 지표입니다."
      },
      {
        id: "ratio-q2",
        question: "ROE는 무엇을 볼 때 유용할까요?",
        options: ["자기자본으로 이익을 내는 효율", "주문 체결 속도", "뉴스 댓글 수"],
        answerIndex: 0,
        explanation: "ROE는 자기자본이익률입니다."
      },
      {
        id: "ratio-q3",
        question: "투자 지표를 볼 때 가장 적절한 태도는?",
        options: ["여러 지표와 상황을 함께 본다", "하나의 지표만 믿는다", "숫자는 전혀 보지 않는다"],
        answerIndex: 0,
        explanation: "단일 지표보다 맥락과 조합이 중요합니다."
      }
    ],
    rewardBadge: {
      name: "지표 조합 배지",
      description: "PER, PBR, ROE를 단일 답이 아닌 비교 도구로 이해했습니다.",
      icon: "bar-chart-3"
    },
    learningPoints: [
      "PER은 이익 대비 가격 수준을 봅니다.",
      "PBR은 자산 대비 가격 수준을 봅니다.",
      "ROE는 자본을 얼마나 효율적으로 쓰는지 봅니다.",
      "하나의 지표만으로 판단하면 맥락을 놓칠 수 있습니다."
    ],
    keyConcepts: [
      { term: "PER", easyMeaning: "이익에 비해 주가가 비싼지 싼지 보는 숫자" },
      { term: "PBR", easyMeaning: "회사의 자산에 비해 주가가 어느 정도인지 보는 숫자" },
      { term: "ROE", easyMeaning: "내 돈을 얼마나 효율적으로 불렸는지 보는 숫자" }
    ],
    newsCards: [
      {
        headline: "밸류전자 PER 8배, ROE 5%",
        tone: "neutral",
        detail: "낮은 PER이 항상 좋은 의미는 아닙니다."
      },
      {
        headline: "수익클린 ROE 22%, 부채도 증가",
        tone: "neutral",
        detail: "높은 수익성 뒤에 위험 요인이 있는지 확인해야 합니다."
      }
    ],
    priceSeries: [18000, 18400, 18100, 18600, 18900, 18800]
  },
  {
    id: "diversification",
    title: "분산투자",
    difficulty: "입문",
    estimatedMinutes: 8,
    conceptSummary:
      "분산투자는 한 종목이나 한 테마에 모든 위험을 몰지 않도록 나누는 방법입니다.",
    beginnerExplanation:
      "달걀을 한 바구니에 모두 담으면 바구니를 떨어뜨릴 때 모두 깨질 수 있습니다. 여러 바구니에 나누면 충격을 줄일 수 있습니다.",
    simulationScenario:
      "가상 투자금 1,000만 원을 배분합니다. 전부 한 종목에 넣을 수도, 서로 다른 산업에 나눌 수도 있습니다.",
    choices: [
      {
        id: "A",
        label: "한 종목에 100% 배분한다",
        detail: "맞으면 크게 좋아 보일 수 있지만 틀리면 충격이 큽니다.",
        quality: "risky",
        points: 12,
        impact: {
          cashChange: -3_000_000,
          holdings: [
            {
              symbol: "HOT",
              name: "핫테마원",
              sector: "테마",
              quantity: 150,
              averagePrice: 20_000,
              currentPrice: 17_600
            }
          ],
          riskDelta: 22,
          diversificationDelta: -12,
          note: "집중도가 높아 전체 가상 포트폴리오의 흔들림이 커졌습니다."
        }
      },
      {
        id: "B",
        label: "서로 다른 산업 4개에 나눠 배분한다",
        detail: "한 산업의 악재가 전체에 미치는 영향을 줄입니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -2_000_000,
          holdings: [
            {
              symbol: "EDU",
              name: "에듀링크",
              sector: "교육",
              quantity: 25,
              averagePrice: 20_000,
              currentPrice: 20_700
            },
            {
              symbol: "GRN",
              name: "그린홈",
              sector: "생활",
              quantity: 25,
              averagePrice: 20_000,
              currentPrice: 20_200
            },
            {
              symbol: "MED",
              name: "메디체크",
              sector: "헬스케어",
              quantity: 20,
              averagePrice: 25_000,
              currentPrice: 25_400
            },
            {
              symbol: "LOG",
              name: "로지클라우드",
              sector: "물류",
              quantity: 25,
              averagePrice: 20_000,
              currentPrice: 19_900
            }
          ],
          riskDelta: -8,
          diversificationDelta: 18,
          note: "서로 다른 산업에 나눠 담아 분산투자 점수가 크게 좋아졌습니다."
        }
      },
      {
        id: "C",
        label: "유행하는 테마주 여러 개에만 나눈다",
        detail: "겉으로는 여러 개지만 같은 위험에 묶여 있을 수 있습니다.",
        quality: "mixed",
        points: 26,
        impact: {
          cashChange: -2_000_000,
          holdings: [
            {
              symbol: "AI1",
              name: "AI스타",
              sector: "AI테마",
              quantity: 50,
              averagePrice: 20_000,
              currentPrice: 18_900
            },
            {
              symbol: "AI2",
              name: "뉴AI랩",
              sector: "AI테마",
              quantity: 50,
              averagePrice: 20_000,
              currentPrice: 18_400
            }
          ],
          riskDelta: 12,
          diversificationDelta: -2,
          note: "종목 수는 늘었지만 같은 테마에 묶여 진짜 분산 효과가 약했습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "B",
    feedbackByChoice: {
      A: "한 종목 집중은 결과가 크게 흔들릴 수 있습니다. 초보자에게는 감정 관리도 어려워집니다.",
      B: "서로 다른 산업에 나눠 위험을 낮춘 선택입니다. 분산은 단순히 종목 수를 늘리는 것이 아니라 위험의 종류를 나누는 일입니다.",
      C: "겉보기에는 여러 종목이지만 같은 테마에 몰리면 비슷한 악재에 함께 흔들릴 수 있습니다."
    },
    quiz: [
      {
        id: "div-q1",
        question: "분산투자의 핵심 목적은?",
        options: ["위험을 한 곳에 몰지 않기", "수익을 보장하기", "항상 최고 수익을 내기"],
        answerIndex: 0,
        explanation: "분산투자는 수익 보장이 아니라 위험을 나누는 방법입니다."
      },
      {
        id: "div-q2",
        question: "가짜 분산에 가까운 예는?",
        options: ["같은 테마 종목에만 여러 개 투자", "산업을 나누어 투자", "현금도 일부 보유"],
        answerIndex: 0,
        explanation: "같은 위험에 묶인 종목들은 함께 흔들릴 수 있습니다."
      }
    ],
    rewardBadge: {
      name: "분산 설계자 배지",
      description: "진짜 분산과 가짜 분산의 차이를 이해했습니다.",
      icon: "pie-chart"
    },
    learningPoints: [
      "분산은 위험을 나누는 방법입니다.",
      "종목 수보다 위험의 종류가 중요합니다.",
      "같은 테마에만 나누는 것은 분산 효과가 약할 수 있습니다."
    ],
    keyConcepts: [
      { term: "분산투자", easyMeaning: "돈을 여러 위험에 나눠 담는 방법" },
      { term: "집중투자", easyMeaning: "한 곳에 큰 비중을 싣는 방법" },
      { term: "테마", easyMeaning: "같은 이야기나 유행으로 묶인 종목 무리" }
    ],
    newsCards: [
      {
        headline: "AI 테마 전반 동반 하락",
        tone: "negative",
        detail: "같은 테마에 묶인 종목은 함께 움직일 수 있습니다."
      },
      {
        headline: "생활·교육·헬스케어 업종은 보합",
        tone: "neutral",
        detail: "위험을 나누면 특정 악재의 충격을 줄일 수 있습니다."
      }
    ],
    priceSeries: [100, 102, 99, 101, 103, 102]
  },
  {
    id: "risk-management",
    title: "리스크 관리와 손실 제한",
    difficulty: "기초",
    estimatedMinutes: 8,
    conceptSummary:
      "리스크 관리는 손실을 없애는 기술이 아니라 감당 가능한 손실 안에서 판단 기준을 지키는 연습입니다.",
    beginnerExplanation:
      "비 오는 날 우산을 챙긴다고 비를 멈출 수는 없지만, 젖는 정도를 줄일 수 있습니다. 리스크 관리도 비슷합니다.",
    simulationScenario:
      "보유한 가상 종목이 15% 하락했습니다. 뉴스는 불안하고 커뮤니티 반응은 엇갈립니다.",
    choices: [
      {
        id: "A",
        label: "사전에 정한 기준에 따라 점검한다",
        detail: "하락 이유, 비중, 감당 가능한 손실 범위를 확인합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          riskDelta: -8,
          diversificationDelta: 4,
          note: "감정 대신 기준을 확인해 포트폴리오 위험 점수가 낮아졌습니다."
        }
      },
      {
        id: "B",
        label: "무조건 물타기한다",
        detail: "근거 없이 더 사면 손실 규모가 커질 수 있습니다.",
        quality: "risky",
        points: 16,
        impact: {
          cashChange: -1_000_000,
          holdings: [
            {
              symbol: "AVG",
              name: "애버리지텍",
              sector: "기술",
              quantity: 50,
              averagePrice: 20_000,
              currentPrice: 17_000
            }
          ],
          riskDelta: 16,
          note: "원인 점검 없이 비중을 늘려 하락 위험 노출이 커졌습니다."
        }
      },
      {
        id: "C",
        label: "공포에 전량 정리한다",
        detail: "기준 없이 움직이면 다음 판단도 감정에 끌릴 수 있습니다.",
        quality: "mixed",
        points: 24,
        impact: {
          cashChange: 300_000,
          riskDelta: 8,
          note: "현금은 조금 늘었지만 감정적 판단 습관이 위험 점수에 반영됐습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "좋은 리스크 관리는 감정을 없애는 것이 아니라 기준을 먼저 세우고 확인하는 일입니다.",
      B: "물타기는 전략이 될 수도 있지만, 이유 없이 반복하면 손실 비중만 커질 수 있습니다.",
      C: "손실 제한은 중요하지만 공포만으로 결정하면 다음에도 같은 상황에서 흔들릴 가능성이 큽니다."
    },
    quiz: [
      {
        id: "risk-q1",
        question: "리스크 관리의 목적에 가까운 것은?",
        options: ["감당 가능한 범위 안에서 판단하기", "손실을 완전히 없애기", "항상 가격을 맞히기"],
        answerIndex: 0,
        explanation: "리스크 관리는 불확실성을 인정하고 대응 기준을 세우는 일입니다."
      },
      {
        id: "risk-q2",
        question: "보유 종목이 크게 하락했을 때 먼저 할 일은?",
        options: ["하락 이유와 내 기준을 점검한다", "무조건 더 산다", "뉴스 제목만 보고 결정한다"],
        answerIndex: 0,
        explanation: "기준과 원인을 확인해야 감정적 결정을 줄일 수 있습니다."
      }
    ],
    rewardBadge: {
      name: "리스크 가드 배지",
      description: "손실 제한과 기준 기반 판단의 중요성을 이해했습니다.",
      icon: "shield-check"
    },
    learningPoints: [
      "손실 가능성은 투자 학습에서 피할 수 없는 주제입니다.",
      "사전에 기준을 정하면 감정적 결정을 줄일 수 있습니다.",
      "비중 조절은 리스크 관리의 핵심 도구입니다."
    ],
    keyConcepts: [
      { term: "손절", easyMeaning: "정해둔 기준에 따라 손실을 제한하는 행동" },
      { term: "비중", easyMeaning: "전체 돈 중 특정 자산에 들어간 비율" },
      { term: "감당 가능한 손실", easyMeaning: "내 생활과 마음을 크게 흔들지 않는 손실 범위" }
    ],
    newsCards: [
      {
        headline: "애버리지텍, 실적 우려로 15% 하락",
        tone: "negative",
        detail: "하락 폭보다 하락 이유와 내 비중을 함께 확인해야 합니다."
      }
    ],
    priceSeries: [24000, 23000, 22000, 20500, 19800, 20400]
  },
  {
    id: "investor-psychology",
    title: "투자 심리",
    difficulty: "입문",
    estimatedMinutes: 7,
    conceptSummary:
      "FOMO, 공포 매도, 확증편향, 과신은 투자 판단을 흐릴 수 있는 대표적인 심리입니다.",
    beginnerExplanation:
      "친구들이 모두 맛집에 간다고 하면 배가 고프지 않아도 줄을 서고 싶어질 때가 있습니다. 투자에서도 비슷한 마음이 생깁니다.",
    simulationScenario:
      "친구들이 모두 가상 종목 문샷게임즈로 돈을 벌었다고 말합니다. 채팅방은 축제 분위기이고 당신은 뒤처지는 기분이 듭니다.",
    choices: [
      {
        id: "A",
        label: "나만 뒤처지는 것 같아 바로 산다",
        detail: "FOMO는 판단 속도를 높이지만 확인 과정을 줄입니다.",
        quality: "risky",
        points: 16,
        impact: {
          cashChange: -1_500_000,
          holdings: [
            {
              symbol: "MSG",
              name: "문샷게임즈",
              sector: "게임",
              quantity: 50,
              averagePrice: 30_000,
              currentPrice: 25_500
            }
          ],
          riskDelta: 16,
          note: "군중심리에 따라 들어가 급격한 가격 변동을 경험했습니다."
        }
      },
      {
        id: "B",
        label: "기업과 가격을 확인하고 판단한다",
        detail: "기분과 자료를 분리해서 봅니다.",
        quality: "recommended",
        points: 50,
        impact: {
          riskDelta: -6,
          diversificationDelta: 3,
          note: "불안한 마음을 알아차리고 확인 과정을 지켜 위험 점수가 낮아졌습니다."
        }
      },
      {
        id: "C",
        label: "빚을 내서라도 크게 산다",
        detail: "초보자에게 레버리지는 손실과 불안을 크게 키울 수 있습니다.",
        quality: "risky",
        points: 4,
        impact: {
          cashChange: -3_000_000,
          holdings: [
            {
              symbol: "MSG",
              name: "문샷게임즈",
              sector: "게임",
              quantity: 100,
              averagePrice: 30_000,
              currentPrice: 23_400
            }
          ],
          riskDelta: 28,
          diversificationDelta: -8,
          note: "과신과 FOMO가 겹쳐 가상 포트폴리오의 위험이 크게 상승했습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "B",
    feedbackByChoice: {
      A: "FOMO는 나만 놓치는 것 같은 불안입니다. 이 감정은 자연스럽지만 투자 판단의 근거가 되기는 어렵습니다.",
      B: "감정을 부정하지 않고 확인 과정을 지킨 선택입니다. 초보자에게 가장 중요한 마음 근육입니다.",
      C: "빚을 활용한 선택은 손실뿐 아니라 심리적 압박도 키웁니다. 이 앱은 실제 투자 권유가 아닌 가상 학습입니다."
    },
    quiz: [
      {
        id: "psy-q1",
        question: "FOMO에 가까운 마음은?",
        options: ["나만 기회를 놓치는 것 같은 불안", "숫자를 차분히 확인하는 태도", "수수료를 계산하는 습관"],
        answerIndex: 0,
        explanation: "FOMO는 Fear Of Missing Out, 즉 놓칠 것 같은 두려움입니다."
      },
      {
        id: "psy-q2",
        question: "확증편향은 무엇일까요?",
        options: ["내 생각에 맞는 정보만 찾는 경향", "모든 정보를 균형 있게 보는 습관", "계산기를 쓰는 행동"],
        answerIndex: 0,
        explanation: "확증편향은 이미 믿고 싶은 결론을 강화하는 정보만 보는 경향입니다."
      }
    ],
    rewardBadge: {
      name: "마음 신호등 배지",
      description: "FOMO와 군중심리를 알아차리는 연습을 했습니다.",
      icon: "traffic-cone"
    },
    learningPoints: [
      "투자 판단에는 감정이 강하게 개입될 수 있습니다.",
      "FOMO는 확인 과정을 건너뛰게 만듭니다.",
      "내 생각과 반대되는 정보도 확인하는 습관이 필요합니다."
    ],
    keyConcepts: [
      { term: "FOMO", easyMeaning: "나만 기회를 놓칠 것 같은 불안" },
      { term: "확증편향", easyMeaning: "내 생각에 맞는 정보만 골라 보는 습관" },
      { term: "과신", easyMeaning: "내 판단이 항상 맞을 거라고 믿는 마음" }
    ],
    newsCards: [
      {
        headline: "문샷게임즈, 커뮤니티 인기 급등",
        tone: "positive",
        detail: "인기와 기업 가치가 항상 같은 뜻은 아닙니다."
      },
      {
        headline: "단기 급등 후 변동성 확대",
        tone: "negative",
        detail: "사람들의 관심이 몰린 뒤 가격이 크게 흔들릴 수 있습니다."
      }
    ],
    priceSeries: [18000, 23000, 30000, 28500, 26000, 25500]
  },
  {
    id: "etf-basics",
    title: "ETF 기초",
    difficulty: "입문",
    estimatedMinutes: 8,
    conceptSummary:
      "ETF는 여러 자산을 한 바구니에 담아 거래할 수 있는 상품입니다. 분산투자에 유용할 수 있지만 구성 자산과 비용을 확인해야 합니다.",
    beginnerExplanation:
      "과일을 하나만 사는 대신 과일 바구니를 사는 것과 비슷합니다. 바구니 안에 무엇이 들었는지 확인하는 것이 중요합니다.",
    simulationScenario:
      "개별 종목 하나와 넓게 분산된 가상 ETF, 이름만 멋진 테마 ETF를 비교합니다.",
    choices: [
      {
        id: "A",
        label: "초보자로서 넓게 분산된 ETF를 검토한다",
        detail: "구성 자산과 수수료를 확인한 뒤 가상 배분합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -1_200_000,
          holdings: [
            {
              symbol: "BASK",
              name: "바스켓100 ETF",
              sector: "ETF",
              quantity: 60,
              averagePrice: 20_000,
              currentPrice: 20_250
            }
          ],
          riskDelta: -7,
          diversificationDelta: 16,
          note: "넓게 분산된 ETF로 포트폴리오의 분산 점수가 좋아졌습니다."
        }
      },
      {
        id: "B",
        label: "모르는 개별 종목에 전액 투자한다",
        detail: "초보자에게 단일 종목 전액 배분은 학습 위험이 큽니다.",
        quality: "risky",
        points: 10,
        impact: {
          cashChange: -2_000_000,
          holdings: [
            {
              symbol: "UNK",
              name: "언노운테크",
              sector: "기술",
              quantity: 100,
              averagePrice: 20_000,
              currentPrice: 17_800
            }
          ],
          riskDelta: 18,
          diversificationDelta: -8,
          note: "모르는 개별 종목 집중으로 위험 노출이 커졌습니다."
        }
      },
      {
        id: "C",
        label: "이름이 좋아 보이는 ETF를 아무거나 고른다",
        detail: "ETF도 구성 종목과 수수료, 추적 대상이 모두 다릅니다.",
        quality: "mixed",
        points: 24,
        impact: {
          cashChange: -1_200_000,
          holdings: [
            {
              symbol: "WOW",
              name: "와우테마 ETF",
              sector: "테마ETF",
              quantity: 60,
              averagePrice: 20_000,
              currentPrice: 18_900
            }
          ],
          riskDelta: 8,
          diversificationDelta: 2,
          note: "ETF이긴 하지만 테마 집중도가 높아 분산 효과가 제한적이었습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "ETF의 분산 장점을 이해하면서도 구성 자산과 비용을 확인한 선택입니다.",
      B: "개별 종목은 더 많이 알아볼수록 판단이 좋아집니다. 모르는 상태에서 전액 배분은 학습용으로도 위험한 선택입니다.",
      C: "ETF라는 이름만으로 안전하다고 볼 수 없습니다. 어떤 자산을 담고 있는지 확인해야 합니다."
    },
    quiz: [
      {
        id: "etf-q1",
        question: "ETF를 가장 쉽게 설명하면?",
        options: ["여러 자산을 묶어 거래하는 바구니", "반드시 원금이 보장되는 예금", "한 회사의 사무실"],
        answerIndex: 0,
        explanation: "ETF는 여러 자산을 묶어 거래할 수 있는 상품입니다."
      },
      {
        id: "etf-q2",
        question: "ETF를 볼 때 확인할 항목은?",
        options: ["구성 자산과 수수료", "이름의 느낌만", "댓글 수만"],
        answerIndex: 0,
        explanation: "ETF도 무엇을 담는지, 비용은 얼마인지 확인해야 합니다."
      }
    ],
    rewardBadge: {
      name: "ETF 바구니 배지",
      description: "ETF의 분산 장점과 확인 포인트를 배웠습니다.",
      icon: "package-check"
    },
    learningPoints: [
      "ETF는 여러 자산을 묶은 상품입니다.",
      "분산에 도움이 될 수 있지만 위험이 사라지는 것은 아닙니다.",
      "구성 자산과 수수료를 확인해야 합니다."
    ],
    keyConcepts: [
      { term: "ETF", easyMeaning: "여러 자산을 담은 바구니처럼 거래되는 상품" },
      { term: "구성 자산", easyMeaning: "ETF 안에 실제로 들어 있는 종목이나 자산" },
      { term: "수수료", easyMeaning: "상품을 운용하고 거래할 때 드는 비용" }
    ],
    newsCards: [
      {
        headline: "바스켓100 ETF, 100개 가상 기업에 분산",
        tone: "positive",
        detail: "넓게 담긴 ETF는 개별 기업 위험을 줄이는 데 도움이 될 수 있습니다."
      },
      {
        headline: "와우테마 ETF, 특정 테마 비중 80%",
        tone: "neutral",
        detail: "ETF여도 집중도가 높으면 변동성이 커질 수 있습니다."
      }
    ],
    priceSeries: [20000, 20100, 20250, 20180, 20320, 20250]
  },
  {
    id: "news-disclosure",
    title: "뉴스와 공시 해석",
    difficulty: "기초",
    estimatedMinutes: 9,
    conceptSummary:
      "호재와 악재는 제목만으로 판단하기 어렵습니다. 선반영, 과장 표현, 실제 숫자를 함께 확인해야 합니다.",
    beginnerExplanation:
      "식당이 대형 단체 예약을 받았다는 소식도 몇 명인지, 매출에 얼마나 도움 되는지 봐야 진짜 의미를 알 수 있습니다.",
    simulationScenario:
      "가상 기업 메가솔라가 대형 계약 체결 뉴스를 냈습니다. 제목은 화려하지만 공시 원문에는 계약 기간과 규모가 자세히 적혀 있습니다.",
    choices: [
      {
        id: "A",
        label: "계약 규모와 실제 매출 영향을 확인한다",
        detail: "뉴스 제목과 공시 숫자를 함께 비교합니다.",
        quality: "recommended",
        points: 50,
        impact: {
          cashChange: -900_000,
          holdings: [
            {
              symbol: "MSL",
              name: "메가솔라",
              sector: "에너지",
              quantity: 30,
              averagePrice: 30_000,
              currentPrice: 30_900
            }
          ],
          riskDelta: -3,
          diversificationDelta: 4,
          note: "뉴스 원문과 숫자를 확인해 과장 가능성을 걸러냈습니다."
        }
      },
      {
        id: "B",
        label: "제목만 보고 바로 산다",
        detail: "대형이라는 표현이 실제 매출 비중과 다를 수 있습니다.",
        quality: "risky",
        points: 14,
        impact: {
          cashChange: -1_500_000,
          holdings: [
            {
              symbol: "MSL",
              name: "메가솔라",
              sector: "에너지",
              quantity: 50,
              averagePrice: 30_000,
              currentPrice: 27_600
            }
          ],
          riskDelta: 14,
          note: "제목만 보고 반응해 실제 영향 대비 높은 가격에 체결됐습니다."
        }
      },
      {
        id: "C",
        label: "댓글 반응만 보고 판단한다",
        detail: "댓글은 시장 감정을 보여줄 수 있지만 검증 자료는 아닙니다.",
        quality: "mixed",
        points: 22,
        impact: {
          riskDelta: 8,
          note: "감정적 정보에 의존해 판단 신뢰도가 낮아졌습니다."
        }
      }
    ],
    correctOrRecommendedChoice: "A",
    feedbackByChoice: {
      A: "뉴스와 공시를 함께 확인한 신중한 선택입니다. 숫자는 과장된 표현을 걸러내는 필터가 됩니다.",
      B: "제목은 빠르지만 불완전합니다. 계약 규모가 회사 매출에서 얼마나 큰지 확인해야 합니다.",
      C: "댓글은 분위기를 볼 수는 있지만 근거가 되기 어렵습니다. 원문과 숫자를 먼저 확인하세요."
    },
    quiz: [
      {
        id: "disc-q1",
        question: "대형 계약 뉴스에서 먼저 확인하면 좋은 것은?",
        options: ["계약 규모와 회사 매출 대비 영향", "댓글의 이모티콘 수", "뉴스 제목의 느낌"],
        answerIndex: 0,
        explanation: "계약이 실제로 회사에 얼마나 중요한지 숫자로 확인해야 합니다."
      },
      {
        id: "disc-q2",
        question: "선반영이란 무엇에 가까울까요?",
        options: ["기대가 이미 가격에 들어가 있는 상태", "정보가 절대 가격에 반영되지 않는 상태", "거래가 불가능한 상태"],
        answerIndex: 0,
        explanation: "좋은 소식이어도 시장이 이미 예상했다면 가격 반응은 약할 수 있습니다."
      },
      {
        id: "disc-q3",
        question: "뉴스 해석에 적절한 태도는?",
        options: ["제목보다 원문과 숫자를 확인한다", "댓글만 믿는다", "강한 표현은 모두 사실로 본다"],
        answerIndex: 0,
        explanation: "공시 원문과 숫자를 확인하면 과장된 표현을 줄여 볼 수 있습니다."
      }
    ],
    rewardBadge: {
      name: "공시 탐정 배지",
      description: "뉴스 제목보다 원문과 숫자가 중요하다는 점을 익혔습니다.",
      icon: "search-check"
    },
    learningPoints: [
      "호재와 악재는 실제 숫자로 확인해야 합니다.",
      "좋은 뉴스가 이미 가격에 반영되었을 수 있습니다.",
      "공시 원문은 뉴스 해석의 중요한 출발점입니다."
    ],
    keyConcepts: [
      { term: "호재", easyMeaning: "회사에 좋게 작용할 수 있는 소식" },
      { term: "악재", easyMeaning: "회사에 부담이 될 수 있는 소식" },
      { term: "선반영", easyMeaning: "예상된 일이 이미 가격에 들어가 있는 상태" },
      { term: "공시", easyMeaning: "회사가 투자자에게 공식적으로 알리는 자료" }
    ],
    newsCards: [
      {
        headline: "메가솔라, 대형 계약 체결",
        tone: "positive",
        detail: "제목만 보면 강한 호재처럼 보입니다."
      },
      {
        headline: "계약 규모는 전년 매출의 4%, 3년 분할 인식",
        tone: "neutral",
        detail: "원문 숫자를 보면 실제 영향의 크기를 더 차분히 볼 수 있습니다."
      }
    ],
    priceSeries: [30000, 33000, 32500, 31000, 30200, 30900]
  }
];

export function getModuleById(id: string) {
  return learningModules.find((module) => module.id === id);
}

export function getNextModule(currentModuleId?: string) {
  if (!currentModuleId) {
    return learningModules[0];
  }

  const currentIndex = learningModules.findIndex((module) => module.id === currentModuleId);
  return learningModules[currentIndex + 1] ?? learningModules[0];
}
