class DigitalClock {
  constructor(element) {
    this.element = element;
    this.timeEl = element.querySelector('.clock-time');
    this.ampmEl = element.querySelector('.clock-ampm');
    this.dateEl = element.querySelector('.dates');
  }

  start() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 500);
  }

  stop() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, '0');
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const ampm = parts.isAm ? 'AM' : 'PM';
    const nowdate = `${parts.day}, ${parts.daynu} ${parts.month} ${parts.year}`;

    if (this.timeEl) this.timeEl.textContent = timeFormatted;
    if (this.ampmEl) this.ampmEl.textContent = ampm;
    if (this.dateEl) this.dateEl.textContent = nowdate;
  }

  getTimeParts() {
    const now = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12,
      year: now.getFullYear(),
      day: weekday[now.getDay()],
      daynu: now.getDate(),
      month: months[now.getMonth()],
    };
  }
}

/* ---------- Clock ---------- */
const clockElement = document.querySelector('.clock');
if (clockElement) {
  const clock = new DigitalClock(clockElement);
  clock.start();
}

/* ---------- Search ---------- */
const queryInput = document.querySelector('.query');
if (queryInput) {
  queryInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = queryInput.value.trim();
      if (query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_self');
        queryInput.value = '';
      }
    }
  });
}

/* ---------- Quotes ---------- */
const quotesContainer = document.querySelector('.quotes');

const fallbackQuotes = [
  {
    content:
      "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.",
    character: { name: 'Roy Mustang' },
  },
  {
    content: "If you don't take risks, you can't create a future.",
    character: { name: 'Monkey D. Luffy' },
  },
  {
    content: 'Power comes in response to a need, not a desire.',
    character: { name: 'Goku' },
  },
  {
    content:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    character: { name: 'Kenshin Himura' },
  },
  {
    content: 'The world is not beautiful, therefore it is.',
    character: { name: 'Kino' },
  },
];

function createQuoteCard(quote) {
  const content = quote.content || 'No quote available.';
  const character = quote.character?.name || 'Unknown';

  return `
    <div class="quote-card">
      <button class="quote-refresh" aria-label="New quote" title="New quote">↻</button>
      <p class="quote-text">“${content}”</p>
      <p class="quote-character">— ${character}</p>
    </div>
  `;
}

function renderQuote(quote) {
  if (!quotesContainer) return;
  quotesContainer.innerHTML = createQuoteCard(quote);

  const refreshBtn = quotesContainer.querySelector('.quote-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', fetchQuote);
  }
}

async function fetchQuote() {
  if (!quotesContainer) return;

  // Loading state
  quotesContainer.innerHTML = `
    <div class="quote-card">
      <p class="quote-text">Loading quote…</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.animechan.io/v1/quotes/random');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    // API returns { data: { content, character: { name } } }
    const quote = data.data || data;

    if (quote && quote.content && quote.character) {
      renderQuote(quote);
    } else {
      throw new Error('Invalid quote format');
    }
  } catch (error) {
    console.warn('Failed to fetch quote, using fallback:', error);
    const randomFallback =
      fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    renderQuote(randomFallback);
  }
}

if (quotesContainer) {
  fetchQuote();
}
