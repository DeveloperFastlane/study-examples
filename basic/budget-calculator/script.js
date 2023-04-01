const expenseCategories = [
  { id: "주거비", placeholder: "주거비를 입력해주세요. (전세, 월세, 관리비 등)" },
  { id: "식비", placeholder: "식비를 입력해주세요. (식료품, 외식비, 간식 등)" },
  { id: "교통비", placeholder: "교통비를 입력해주세요. (자동차유지비, 주유비, 교통카드 등)" },
  { id: "통신비", placeholder: "통신비를 입력해주세요. (인터넷, 휴대폰 요금 등)" },
  { id: "생활용품", placeholder: "생활용품비를 입력해주세요. (세제, 화장지, 칫솔 등)" },
  { id: "의료비", placeholder: "의료비를 입력해주세요. (약값, 병원비, 보험료 등)" },
  { id: "교육비", placeholder: "교육비를 입력해주세요. (학원비, 교재비, 학비 등)" },
  { id: "문화생활", placeholder: "문화생활비를 입력해주세요. (영화, 책, 공연 등)" },
  { id: "기타", placeholder: "기타비를 입력해주세요. (패션, 뷰티, 취미 등)" },
];

const form = document.getElementById("expense-form");

expenseCategories.forEach((category) => {
  const label = document.createElement("label");
  label.setAttribute("for", category.id);
  label.textContent = category.id;
  form.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", category.id);
  input.setAttribute("placeholder", category.placeholder);
  form.appendChild(input);
});

const totalExpenses = document.getElementById("total-expenses");

form.addEventListener("input", () => {
  let sum = 0;

  for (const input of form.elements) {
    if (input.type === "number") {
      sum += parseInt(input.value) || 0;
    }
  }

  totalExpenses.textContent = sum.toLocaleString();
});