const news = [
    {
        title: "Хабарҳои Тоҷикистон",
        category: "Тоҷикистон",
        text: "Маълумоти нав аз воқеаҳои Тоҷикистон."
    },
    {
        title: "Хабарҳои байналмилалӣ",
        category: "Ҷаҳон",
        text: "Муҳимтарин рӯйдодҳои ҷаҳон."
    },
    {
        title: "Варзиш дар Тоҷикистон",
        category: "Варзиш",
        text: "Натиҷаҳои мусобиқаҳои варзишӣ."
    },
    {
        title: "Пешрафти технология",
        category: "Технология",
        text: "Навгониҳои компютер ва зеҳни сунъӣ."
    },
    {
        title: "Рушди иқтисоди Тоҷикистон",
        category: "Тоҷикистон",
        text: "Маълумоти намунавӣ дар бораи иқтисод."
    },
    {
        title: "Технологияҳои оянда",
        category: "Технология",
        text: "Технологияҳои нав дар ҷаҳон."
    }
];

const newsList = document.getElementById("news-list");
const search = document.getElementById("search");

function showNews(data) {

    newsList.innerHTML = "";

    if (data.length === 0) {
        newsList.innerHTML = "<p>Хабар ёфт нашуд!</p>";
        return;
    }

    data.forEach(item => {

        const card = document.createElement("div");

        card.className = "news-card";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const text = document.createElement("p");
        text.textContent = item.text;

        const category = document.createElement("small");
        category.textContent = "Категория: " + item.category;

        card.appendChild(title);
        card.appendChild(text);
        card.appendChild(category);

        newsList.appendChild(card);

    });
}

function filterNews(category) {

    if (category === "Ҳама") {
        showNews(news);
    } else {
        const result = news.filter(
            item => item.category === category
        );

        showNews(result);
    }
}

search.addEventListener("input", function() {

    const word = search.value.toLowerCase();

    const result = news.filter(item =>

        item.title.toLowerCase().includes(word) ||
        item.text.toLowerCase().includes(word) ||
        item.category.toLowerCase().includes(word)

    );

    showNews(result);
});

// Намоиши хабарҳо ҳангоми кушодани сайт
showNews(news);