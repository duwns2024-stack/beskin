const countries = [
  {
    id: "korea",
    name: "대한민국",
    image: "https://flagcdn.com/w640/kr.png",
    teaser: "첨단 기술과 K-컬처로 대표되는 동아시아의 민주 공화국",
    description:
      "대한민국은 한반도 남부에 위치한 민주 공화국으로 빠른 경제 성장을 이룬 국가입니다. 반도체, 자동차, 조선 산업이 발달했으며 K-팝과 드라마 등 대중문화가 세계적으로 사랑받고 있습니다."
  },
  {
    id: "usa",
    name: "미국",
    image: "https://flagcdn.com/w640/us.png",
    teaser: "다양한 문화와 거대한 경제 규모를 가진 연방 공화국",
    description:
      "미국은 50개 주로 이루어진 연방 공화국으로 세계에서 가장 큰 경제 규모를 지닌 나라 중 하나입니다. 실리콘밸리에서 헐리우드까지 다양한 산업과 문화가 공존하며, 글로벌 외교와 안보에 중요한 역할을 하고 있습니다."
  },
  {
    id: "germany",
    name: "독일",
    image: "https://flagcdn.com/w640/de.png",
    teaser: "공업과 과학 기술이 발달한 유럽의 중심",
    description:
      "독일은 유럽 중앙에 위치한 연방 공화국으로 자동차, 기계, 화학 산업 등 공업이 발달했습니다. 과학기술과 환경 정책에서도 선도적인 국가이며, 깊은 역사와 문화 유산을 보유하고 있습니다."
  },
  {
    id: "japan",
    name: "일본",
    image: "https://flagcdn.com/w640/jp.png",
    teaser: "전통과 최첨단 기술이 공존하는 섬나라",
    description:
      "일본은 동아시아에 위치한 섬나라로, 독특한 전통 문화와 함께 로봇공학, 전자공학 등 첨단 기술 분야에서도 세계적인 경쟁력을 갖고 있습니다. 사시사철 아름다운 자연 경관을 즐길 수 있는 관광지로도 유명합니다."
  },
  {
    id: "uk",
    name: "영국",
    image: "https://flagcdn.com/w640/gb.png",
    teaser: "왕실 문화와 금융 산업이 발달한 전통 강국",
    description:
      "영국은 잉글랜드, 스코틀랜드, 웨일스, 북아일랜드로 구성된 입헌 군주국입니다. 런던은 세계적인 금융 중심지이며, 역사적인 건축물과 다양한 문화 예술이 발달한 도시가 많습니다."
  },
  {
    id: "france",
    name: "프랑스",
    image: "https://flagcdn.com/w640/fr.png",
    teaser: "예술과 패션의 수도, 유럽 관광 대국",
    description:
      "프랑스는 서유럽에 위치한 공화국으로 파리, 프로방스 등 세계적으로 유명한 관광지를 보유하고 있습니다. 미식, 패션, 예술 분야에서 오랜 전통과 영향력을 지니고 있으며 유럽연합의 핵심 회원국입니다."
  }
];

const grid = document.getElementById("country-grid");
const panel = document.getElementById("detail-panel");
const backdrop = document.getElementById("panel-backdrop");
const panelFlag = document.getElementById("detail-flag");
const panelName = document.getElementById("detail-name");
const panelDescription = document.getElementById("detail-description");
const closeButton = document.getElementById("close-panel");

function createCard(country) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-pressed", "false");
  card.innerHTML = `
    <img src="${country.image}" alt="${country.name} 국기">
    <div class="card__label">
      <h3>${country.name}</h3>
      <p>${country.teaser}</p>
    </div>
  `;

  card.addEventListener("click", () => openPanel(country));
  card.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPanel(country);
    }
  });

  return card;
}

function openPanel(country) {
  panelFlag.src = country.image;
  panelFlag.alt = `${country.name} 국기 이미지`;
  panelName.textContent = country.name;
  panelDescription.textContent = country.description;

  panel.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  panel.focus();
}

function closePanel() {
  panel.classList.add("hidden");
  backdrop.classList.add("hidden");
}

countries.forEach((country) => {
  grid.appendChild(createCard(country));
});

closeButton.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !panel.classList.contains("hidden")) {
    closePanel();
  }
});
