// ============================================================
// СЛОВАРИ (перенесите полные массивы из исходного файла)
// ============================================================
const DICT_STOP = ['вот', 'сейчас', 'он', 'со', 'все', 'она', 'но', 'да', 'ты', 'только', 'было', 'ему', 'теперь', 'даже', 'ну', 'вдруг', 'ни', 'быть', 'был', 'него', 'вас', 'нибудь', 'опять', 'уж', 'вам', 'ведь', 'потом', 'себя', 'ничего', 'ей', 'может', 'они', 'над', 'очень', 'через', 'день', 'этот', 'эти', 'те', 'мой', 'твой', 'наш', 'ваш'
];
const DICT_CLICHE = ['в настоящее время', 'на сегодняшний день', 'на данный момент', 'следует отметить', 'стоит отметить', 'как уже было сказано', 'в связи с этим', 'на самом деле', 'безусловно', 'без сомнения', 'в общем и целом', 'по большому счету', 'так или иначе', 'тем не менее', 'в первую очередь', 'как таковой', 'имеет место', 'в рамках', 'в целях', 'в сфере', 'является', 'осуществляет', 'производит'];
const DICT_BUREAUCRACY = ['населения', 'с целью',
  // Устойчивые предлоги и связки
  'в целях', 'в рамках', 'в части', 'на предмет', 'в отношении', 'по линии', 'в соответствии с',
  'на основании', 'посредством',
  // Типичные бюрократические обстоятельства
  'в установленном порядке', 'в обязательном порядке', 'на безвозмездной основе',
  'по мере необходимости', 'в рабочем порядке',
  // Глаголы-«пустышки» и связки (превращают действие в состояние)
  'осуществлять', 'производить', 'оказывать', 'обеспечивать', 'является',
  'представляет собой', 'имеет место', 'имеет место быть' // классическая канцелярская ошибка
];
const DICT_AMPLIFIER = ['Самые', 'особенно', 'самый', 'точно', 'фактическая', 'очень',
  'крайне', 'чрезвычайно', 'абсолютно', 'совершенно', 'действительно', 'безусловно', 'несомненно', 'прямо', 'просто', 'даже', 'уж', 'чертовски', 'невероятно', 'максимально', 'предельно', 'безумно', 'жутко', 'страшно', 'капитально', 'реально', 'по-настоящему', 'в высшей степени', 'сверх', 'исключительно'
];
const DICT_INPUT = ['короче', 'типа', 'как бы', 'в общем', 'значит', 'так сказать', 'собственно',
  'собственно говоря', 'в принципе', 'вообще', 'понимаете', 'видите ли', 'скажем', 'допустим',
  'так вот', 'по сути', 'к слову', 'между прочим', 'знаете', 'понятное дело', 'мягко говоря',
  'так или иначе'];
const DICT_STAMP = ['То же самое', 'повестки дня', 'в политической жизни', 'лучший на рынке',
  'высочайшее качество', 'инновационные решения', 'уникальное предложение', 'лидер отрасли',
  'индивидуальный подход', 'комплексный подход', 'передовые технологии', 'максимальная выгода',
  'безупречная репутация', 'динамично развивающаяся компания', 'команда профессионалов',
  'гарантированный результат', 'эксклюзивные условия', 'революционный прорыв', 'самые низкие цены', 'проверенный временем', 'абсолютная безопасность', '100% результат', 'мировой уровень',
  'первоклассный сервис', 'высококвалифицированные специалисты', 'ведущей', 'преддверии'
];
const DICT_WEAK = ['был', 'Есть', 'является', 'существовало', 'существуют', 'являются', 'являться', 'осуществляет', 'осуществляют', 'осуществлять', 'производит', 'производят', 'производить', 'процесс', 'осуществление', 'производство', 'возможность', 'наличии', 'отсутствии', 'случае', 'причине', 'факт', 'уровне', 'целях', 'рамках', 'порядке', 'основе', 'обладает'
];
const DICT_VAGUE = ['многие', 'достаточно', 'вроде', 'вроде бы', 'кажется', 'наверное', 'возможно', 'может быть', 'примерно', 'приблизительно', 'где-то', 'около', 'какой-то', 'некий', 'некоторые', 'определенный', 'чуть ли не', 'вряд ли', 'по всей видимости', 'скорее всего', 'в каком-то смысле', 'условно', 'предположительно', 'как бы', 'чего-либо'
];
const DIST_PERSONAL = ['его', 'ему', 'они', 'Их', 'мы', 'ее', 'он',
  'я', 'меня', 'мне', 'мной', 'ты', 'тебя', 'тебе', 'тобой', 'его', 'она', 'её', 'ней', 'оно', 'нему', 'нас', 'нам', 'нами', 'вы', 'вас', 'вам', 'вами', 'ним', 'ними', 'ими'
];
const DIST_POSSESSIVE = ['своей', 'своих', 'мой', 'моего', 'моему', 'моим', 'моем', 'моя', 'моей', 'мою', 'моё', 'мои', 'моих', 'моими', 'твой', 'твоего', 'твоему', 'твоим', 'твоем', 'твоя', 'твоей', 'твою', 'твоё', 'твои', 'твоих', 'твоими', 'наш', 'нашего', 'нашему', 'нашим', 'нашем', 'наша', 'нашей', 'нашу', 'наши', 'наших', 'нашими', 'ваш', 'вашего', 'вашему', 'вашим', 'вашем', 'ваша', 'вашей', 'вашу', 'ваши', 'ваших', 'вашими', 'его', 'её', 'их', 'свой', 'своего', 'своему', 'своим', 'своем', 'своя', 'свою', 'своё', 'свои', 'своими'
];
const DIST_BIASED = ['Реальная', 'скромные', 'реальные', 'обычно', 'масштабные', 'хорошо', 'значительное', 'реальных', 'полномасштабного', 'современных', 'революционная', 'мощной', 'огромны', 'важный',
  // Базовые оценочные прилагательные
  'хороший', 'плохой', 'прекрасный', 'ужасный', 'отвратительный', 'великолепный', 'скучный', 'интересный', 'странный', 'нелепый', 'абсурдный', 'глупый', 'замечательный', 'чудесный', 'безобразный', 'идеальный', 'совершенный', 'посредственный',
  // Вводные конструкции, указывающие на личное мнение
  'на мой взгляд', 'по моему мнению', 'я считаю', 'мне кажется', 'как мне кажется', 'по-моему', 'на мой скромный взгляд',
  // Эмоциональные наречия и фразы
  'к сожалению', 'к счастью', 'увы', 'слава богу', 'честно говоря', 'без преувеличения', 'справедливости ради',
  'к чести', 'к стыду'
];
const DIST_GENERALIZATION = ['всю', 'все', 'всегда', 'никогда', 'никто', 'каждый', 'любой', 'абсолютно все', 'везде', 'всюду', 'нигде', 'полностью', 'целиком', 'единственный', 'без исключений', 'сплошь и рядом', 'всем известно', 'стопроцентно', 'повсеместно', 'тотально', 'вечно', 'постоянно', 'безусловно все', 'более'
];
const DIST_MODAL = ['может', 'смог',
  // Долженствование и обязанность
  'должен', 'должна', 'должно', 'должны', 'обязан', 'обязана', 'обязано', 'обязаны', 'надлежит', 'следует',
  // Необходимость
  'нужно', 'надо', 'необходимо', 'требуется', 'придется', 'придётся',
  // Возможность и способность
  'может', 'могут', 'мог', 'могла', 'могли', 'мог бы', 'могла бы', 'могли бы', 'способен', 'способна', 'способны', 'в состоянии',
  // Запрет и нежелательность
  'нельзя', 'не следует', 'не должен', 'не стоит', 'не рекомендуется',
  // Желание и намерение
  'хочет', 'хотят', 'желаю', 'желает', 'намерен', 'намерена', 'намерены', 'собирается', 'собираются', 'планирует', 'планируют',
  // Вероятность и допущение
  'возможно', 'вероятно', 'вряд ли', 'может быть', 'должно быть'
];
const DIST_TIME = ['В наши дни', 'в данный момент', 'на сегодняшний день', 'в настоящее время',
  'в ближайшее время', 'в скором времени', 'скоро', 'вскоре', 'когда-нибудь', 'когда-то',
  'в будущем', 'в свое время', 'пока что', 'до сих пор', 'в последнее время', 'недавно',
  'давно', 'в любой момент', 'со дня на день', 'вот-вот', 'в перспективе', 'на данном этапе'
];

// ============================================================
// ПРАВИЛА ГРАММАТИКИ
// ============================================================
const GRAMMAR_RULES = [
  { regex: / {2,}/g, message: 'Двойной пробел', suggest: ' ' },
  { regex: /\s+([,.!?;:])/g, message: 'Пробел перед знаком препинания', suggest: '$1' },
  { regex: /([,.!?;:])([а-яёa-z])/gi, message: 'Отсутствует пробел после знака препинания', suggest: '$1' }
];

// ============================================================
// КОММЕНТАРИИ для каждой категории
// ============================================================
const COMMENTS = {
  stop: 'Слово не несёт смысла. Замените на конкретное или удалите.',
  cliche: 'Избитое выражение. Напишите своими словами.',
  bureaucracy: 'Канцелярский оборот. Замените на простой глагол.',
  amplifier: 'Лишний усилитель. Уберите или оставьте сильное слово.',
  input: 'Вводное слово-паразит. Чаще всего можно удалить.',
  stamp: 'Пустое рекламное обещание. Подкрепите фактами.',
  weak: 'Слабая конструкция. Замените на сильное слово.',
  vague: 'Слово неопределённости. Укажите конкретно: кто, что, где, когда.',
  personal: 'Проверьте, можно ли удалить это местоимение без потери смысла',
  possessive: 'Проверьте, можно ли удалить это местоимение без потери смысла',
  biased: 'Лучше удалить или доказать фактами',
  generalization: 'Лучше использовать только в сравнении с частью',
  modal: 'Попробуйте убрать модальный, оставьте смысловой глагол',
  time: 'Попробуйте убрать, уточните или противопоставьте прошлому или будущему',
  spelling: 'Орфографическая ошибка. Проверьте написание.',
  grammar: 'Грамматическая или пунктуационная ошибка.',
  style: 'Стилистическая или грамматическая ошибка (LanguageTool).'
};

// ============================================================
// СЛОВАРЬ СИНОНИМОВ-ЗАМЕН
// ============================================================
const REPLACEMENTS = {
  // 'является': ['— (убрать)', 'это', 'равно', 'составляет'],
};

// ============================================================
// КОНСТАНТЫ
// ============================================================
const DICT = {
  stop: DICT_STOP,
  cliche: DICT_CLICHE,
  bureaucracy: DICT_BUREAUCRACY,
  personal: DIST_PERSONAL,
  possessive: DIST_POSSESSIVE,
  biased: DIST_BIASED,
  generalization: DIST_GENERALIZATION,
  amplifier: DICT_AMPLIFIER,
  input: DICT_INPUT,
  stamp: DICT_STAMP,
  weak: DICT_WEAK,
  modal: DIST_MODAL,
  time: DIST_TIME,
  vague: DICT_VAGUE
};

const SORTED_DICT = Object.fromEntries(
  Object.entries(DICT).map(([category, words]) => [
    category,
    [...new Set(words.map(word => word.toLowerCase()))].sort((a, b) => b.length - a.length)
  ])
);

const CAT_NAMES = {
  stop: 'Стоп-слово', cliche: 'Штамп/клише', bureaucracy: 'Канцелярит',
  amplifier: 'Усилитель', input: 'Вводное слово', stamp: 'Рекламный штамп',
  weak: 'Слабая конструкция', vague: 'Неопределённость', personal: 'Личное местоимение',
  possessive: 'Притяжательное местоимение', biased: 'Необъективная оценка', modal: 'Модальный глагол', time: 'Паразит времени', spelling: '✏️ Орфография', grammar: '📐 Грамматика', style: '📝 Стиль и грамматика'
};

const YANDEX_SPELLER_URL = 'https://speller.yandex.net/services/spellservice.json/checkText';
const LANGUAGE_TOOL_URL = 'https://api.languagetool.org/v2/check';
const REQUEST_TIMEOUT_MS = 15000;

// ============================================================
// СОСТОЯНИЕ
// ============================================================
let lastFindings = {};
let lastSpellingSuggestions = {};
let analysisTimer = null;
let lastRenderedText = null;
let tooltipBlocked = false;
let tooltipBlockTimer = null;
let activeCheckType = 'style';

// ============================================================
// DOM-ССЫЛКИ (убраны мёртвые scoreBadge/progressFill)
// ============================================================
const editor = document.getElementById('editor');
const overlay = document.getElementById('overlay');
const editorWrapper = document.getElementById('editorWrapper');
const stats = document.getElementById('stats');
const issueButton = document.getElementById('btn-issue');
const issueDetail = document.getElementById('issue-detail');
let issueIndex = -1;
let requestRevision = 0;
let saveTimer = null;
let draftDirty = false;
let composing = false;
let suppressSelectionTooltip = false;
const spellingStatus = document.getElementById('spellingStatus');
const tooltip = document.getElementById('tooltip');
const selectionTooltip = document.getElementById('selection-tooltip');
let selectionMirror = null;

// ============================================================
// УТИЛИТЫ
// ============================================================
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getCatName(cat) {
  return CAT_NAMES[cat] || cat;
}

function formatRussianCount(number, one, few, many) {
  const mod100 = number % 100;
  const mod10 = number % 10;
  const form = mod100 >= 11 && mod100 <= 14
    ? many
    : mod10 === 1
      ? one
      : mod10 >= 2 && mod10 <= 4
        ? few
        : many;
  return `${number} ${form}`;
}

function splitTextIntoChunks(text, maxLength) {
  const chunks = [];
  let offset = 0;

  while (offset < text.length) {
    let end = Math.min(offset + maxLength, text.length);

    if (end < text.length) {
      const minimumBreak = offset + Math.floor(maxLength * 0.6);
      for (let i = end; i > minimumBreak; i--) {
        if (/\s/.test(text[i - 1])) {
          end = i;
          break;
        }
      }
    }

    chunks.push({ text: text.slice(offset, end), offset });
    offset = end;
  }

  return chunks;
}

// ============================================================
// СИНХРОНИЗАЦИЯ СКРОЛЛА
// ============================================================
function syncOverlayGeometry() {
  overlay.style.right = 'auto';
  overlay.style.bottom = 'auto';

  overlay.style.width = `${editor.clientWidth}px`;
  overlay.style.height = `${editor.clientHeight}px`;

  // У textarea больше нет собственной прокрутки.
  overlay.scrollTop = 0;
  overlay.scrollLeft = 0;
}

function resizeEditorToContent() {
  /*
   * Сначала уменьшаем поле, чтобы scrollHeight пересчитался.
   * Это позволяет редактору как увеличиваться, так и уменьшаться
   * после удаления текста.
   */
  editor.style.height = 'auto';

  const minimumHeight = window.matchMedia('(max-width: 700px)').matches
    ? 420
    : 440;

  const newHeight = Math.max(
    minimumHeight,
    editor.scrollHeight
  );

  editor.style.height = `${newHeight}px`;

  syncOverlayGeometry();
}

if ('ResizeObserver' in window) {
  const editorResizeObserver = new ResizeObserver(() => {
    syncOverlayGeometry();
    hideEditorTooltip();
  });
  editorResizeObserver.observe(editor);
}
syncOverlayGeometry();

// ============================================================
// АНАЛИЗ ТЕКСТА
// ============================================================
function analyzeLocal(text) {
  const textLower = text.toLowerCase();
  const findings = {};

  for (const [cat, dict] of Object.entries(SORTED_DICT)) {
    if (!dict || dict.length === 0) { findings[cat] = []; continue; }

    const counts = {};
    const foundPositions = new Uint8Array(textLower.length);

    for (const wordLower of dict) {
      let searchFrom = 0;
      while (true) {
        const idx = textLower.indexOf(wordLower, searchFrom);
        if (idx === -1) break;
        const before = idx > 0 ? textLower[idx - 1] : ' ';
        const after = idx + wordLower.length < textLower.length
          ? textLower[idx + wordLower.length] : ' ';

        if (!/[а-яёa-z0-9]/i.test(before) && !/[а-яёa-z0-9]/i.test(after)) {
          let overlaps = false;
          for (let i = idx; i < idx + wordLower.length; i++) {
            if (foundPositions[i]) { overlaps = true; break; }
          }
          if (!overlaps) {
            counts[wordLower] = (counts[wordLower] || 0) + 1;
            for (let i = idx; i < idx + wordLower.length; i++) foundPositions[i] = true;
          }
        }
        searchFrom = idx + 1;
      }
    }

    findings[cat] = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([word, count]) => ({ word, count }));
  }

  return { findings };
}

function analyzeGrammar(text) {
  const findings = [];
  const seen = new Set();
  for (const rule of GRAMMAR_RULES) {
    const regex = new RegExp(rule.regex.source, rule.regex.flags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      const key = `${rule.message}|${match[0]}|${match.index}`;
      if (seen.has(key)) continue;
      seen.add(key);
      findings.push({
        word: match[0],
        start: match.index,
        end: match.index + match[0].length,
        message: rule.message,
        suggest: rule.suggest || null
      });
    }
  }
  return findings;
}

async function checkSpelling(text) {
  if (!text.trim()) return { errors: [], suggestions: {} };

  // Для POST Яндекс допускает до 10 000 символов.
  const chunks = splitTextIntoChunks(text, 9500);

  const allErrors = [];
  const suggestions = {};

  try {
    // Последовательная обработка не создаёт всплеск запросов к публичному API.
    for (const chunk of chunks) {
      let errors;

      try {
        errors = await requestYandexPost(chunk.text);
      } catch {
        errors = await requestYandexJsonpChunks(chunk.text);
      }

      for (const error of errors) {
        allErrors.push({
          ...error,
          pos: chunk.offset + Number(error.pos || 0)
        });
      }
    }

    // Группируем для счётчика, сохраняя точные позиции каждого вхождения.
    const grouped = {};
    for (const err of allErrors) {
      if (!err || typeof err.word !== 'string') continue;
      const key = err.word.toLowerCase();
      if (!grouped[key]) grouped[key] = { word: err.word, count: 0, _details: [] };
      grouped[key].count++;
      grouped[key]._details.push({
        start: err.pos,
        end: err.pos + Number(err.len || err.word.length)
      });
      suggestions[key] = Array.isArray(err.s) ? err.s : [];
    }

    return {
      errors: Object.values(grouped).sort((a, b) => b.count - a.count),
      suggestions
    };
  } catch (e) {
    console.warn('Speller API error:', e);
    return { errors: [], suggestions: {}, failed: true };
  }
}

async function fetchJsonWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function requestYandexPost(text) {
  const body = new URLSearchParams({ text, lang: 'ru', options: '5', format: 'plain' });
  const data = await fetchJsonWithTimeout(YANDEX_SPELLER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body
  });
  if (!Array.isArray(data)) throw new Error('Некорректный ответ Яндекс.Спеллера');
  return data;
}

function requestYandexJsonp(text) {
  return new Promise((resolve, reject) => {
    const callbackName = `textredYandex_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement('script');
    let settled = false;

    const cleanup = () => {
      script.remove();
      try { delete window[callbackName]; } catch { window[callbackName] = undefined; }
    };

    const finish = (callback, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      cleanup();
      callback(value);
    };

    const timeout = setTimeout(
      () => finish(reject, new Error('Превышено время ожидания Яндекс.Спеллера')),
      REQUEST_TIMEOUT_MS
    );

    window[callbackName] = data => {
      if (!Array.isArray(data)) {
        finish(reject, new Error('Некорректный JSONP-ответ Яндекс.Спеллера'));
        return;
      }
      finish(resolve, data);
    };

    const params = new URLSearchParams({
      text,
      lang: 'ru',
      options: '5',
      format: 'plain',
      callback: callbackName
    });
    script.src = `${YANDEX_SPELLER_URL}?${params}`;
    script.async = true;
    script.onerror = () => finish(reject, new Error('Не удалось загрузить JSONP Яндекс.Спеллера'));
    document.head.appendChild(script);
  });
}

async function requestYandexJsonpChunks(text) {
  // GET ограничен длиной URL. 1000 символов безопасны и для кириллицы,
  // которая занимает больше места после URL-кодирования.
  const result = [];

  for (const chunk of splitTextIntoChunks(text, 1000)) {
    const errors = await requestYandexJsonp(chunk.text);
    for (const error of errors) {
      result.push({ ...error, pos: chunk.offset + Number(error.pos || 0) });
    }
  }

  return result;
}

async function checkLanguageTool(text) {
  if (!text.trim()) return { errors: [] };
  const chunks = splitTextIntoChunks(text, 5000);
  const allMatches = [];
  try {
    for (const chunk of chunks) {
      const data = await fetchJsonWithTimeout(LANGUAGE_TOOL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `text=${encodeURIComponent(chunk.text)}&language=ru-RU&enabledOnly=false`
      });
      if (data.matches) {
        for (const m of data.matches) {
          const word = text.slice(chunk.offset + m.offset, chunk.offset + m.offset + m.length);
          allMatches.push({
            word: word,
            message: m.message,
            suggest: m.replacements && m.replacements.length > 0
              ? m.replacements.slice(0, 3).map(r => r.value).join(', ')
              : null,
            start: chunk.offset + m.offset,
            end: chunk.offset + m.offset + m.length,
            ruleId: m.rule.id,
            category: m.rule.category.name
          });
        }
      }
    }
    const grouped = {};
    for (const m of allMatches) {
      const key = m.word.toLowerCase();
      if (!grouped[key]) {
        grouped[key] = { word: m.word, count: 0, message: m.message, suggest: m.suggest, _details: [] };
      }
      grouped[key].count++;
      grouped[key]._details.push({ start: m.start, end: m.end });
    }
    return { errors: Object.values(grouped).sort((a, b) => b.count - a.count) };
  } catch (e) {
    console.warn('LanguageTool API error:', e);
    return { errors: [], failed: true };
  }
}

// ============================================================
// ПОЛНЫЙ АНАЛИЗ
// ============================================================
function runFullAnalysis() {
  const text = editor.value;
  const trimmed = text.trim();
  if (!trimmed) { resetResults(); return; }

  const findings = {
    stop: [], cliche: [], bureaucracy: [], amplifier: [],
    input: [], stamp: [], weak: [], vague: [], personal: [],
    grammar: [], spelling: [], style: []
  };

  if (activeCheckType === 'style') {
    const { findings: localFindings } = analyzeLocal(text);
    findings.stop = localFindings.stop || [];
    findings.cliche = localFindings.cliche || [];
    findings.bureaucracy = localFindings.bureaucracy || [];
    findings.amplifier = localFindings.amplifier || [];
    findings.input = localFindings.input || [];
    findings.stamp = localFindings.stamp || [];
    findings.weak = localFindings.weak || [];
    findings.vague = localFindings.vague || [];
    findings.personal = localFindings.personal || [];
    findings.possessive = localFindings.possessive || [];
    findings.biased = localFindings.biased || [];
    findings.generalization = localFindings.generalization || [];
    findings.modal = localFindings.modal || [];
    findings.time = localFindings.time || [];
  } else if (activeCheckType === 'regex') {
    const grammarErrors = analyzeGrammar(text);
    const gc = {};
    for (const err of grammarErrors) {
      if (!gc[err.message]) gc[err.message] = { word: err.message, count: 0, _details: [] };
      gc[err.message].count++;
      gc[err.message]._details.push(err);
    }
    findings.grammar = Object.values(gc).sort((a, b) => b.count - a.count);
  }

  lastFindings = findings;
  if (text !== lastRenderedText) {
    renderHighlight(text);
    lastRenderedText = text;
  }
  editorWrapper.classList.add('highlight-active');
  updateIssueSummary();
}

// ============================================================
// ПОДСВЕТКА
// ============================================================
function renderHighlight(text) {
  hideEditorTooltip();

  if (!text || !text.trim()) {
    overlay.innerHTML = '';
    syncOverlayGeometry();
    return;
  }
  const textLower = text.toLowerCase();
  const marks = [];

  for (const [cat, items] of Object.entries(lastFindings)) {
    if (cat === 'grammar') continue;
    for (const item of items) {
      if (Array.isArray(item._details)) {
        for (const detail of item._details) {
          marks.push({ start: detail.start, end: detail.end, cat });
        }
        continue;
      }
      const wl = item.word.toLowerCase();
      let sf = 0;
      while (true) {
        const idx = textLower.indexOf(wl, sf);
        if (idx === -1) break;
        const b = idx > 0 ? textLower[idx - 1] : ' ';
        const a = idx + wl.length < textLower.length ? textLower[idx + wl.length] : ' ';
        if (!/[а-яёa-z0-9]/i.test(b) && !/[а-яёa-z0-9]/i.test(a)) {
          marks.push({ start: idx, end: idx + wl.length, cat });
        }
        sf = idx + 1;
      }
    }
  }

  if (lastFindings.grammar) {
    for (const item of lastFindings.grammar) {
      if (!item._details) continue;
      for (const d of item._details) {
        marks.push({ start: d.start, end: d.end, cat: 'grammar' });
      }
    }
  }

  marks.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const filtered = [];
  let coveredUntil = -1;
  for (const m of marks) {
    if (m.start < coveredUntil) continue;
    filtered.push(m);
    coveredUntil = m.end;
  }
  filtered.sort((a, b) => a.start - b.start);

  let result = '';
  let lastIdx = 0;
  for (const m of filtered) {
    result += escapeHtml(text.slice(lastIdx, m.start));
    const orig = text.slice(m.start, m.end);
    result += `<mark data-cat="${m.cat}" data-start="${m.start}" data-end="${m.end}">${escapeHtml(orig)}</mark>`;
    lastIdx = m.end;
  }
  result += escapeHtml(text.slice(lastIdx));

  // Сохраняем высоту последней пустой строки.
  overlay.innerHTML = result + (text.endsWith('\n') ? '\n' : '');
  syncOverlayGeometry();
}

// ============================================================
// TOOLTIP
// ============================================================
function explanationHTML(mark) {
  const cat = mark.dataset.cat;
  const word = mark.textContent;
  const comment = COMMENTS[cat] || '';
  const replacements = REPLACEMENTS[word.toLowerCase()] || [];

  let html = `<div class="tt-category" data-cat="${cat}">${getCatName(cat)}</div>`;
  html += `<div class="tt-word">${escapeHtml(word)}</div>`;
  html += `<div class="tt-hint">${escapeHtml(comment)}</div>`;

  if (replacements.length > 0) {
    html += `<div class="tt-replacements">`;
    html += `<div class="tt-repl-label">💡 Замените на:</div>`;
    html += `<div class="tt-repl-list">`;
    replacements.forEach(repl => {
      const isRemove = repl.startsWith('—');
      const cls = isRemove ? 'tt-repl-item remove' : 'tt-repl-item';
      html += `<span class="${cls}">${escapeHtml(repl)}</span>`;
    });
    html += `</div></div>`;
  }

  if (cat === 'spelling') {
    const suggestions = lastSpellingSuggestions[word.toLowerCase()] || [];
    if (suggestions.length > 0) {
      html += `<div class="tt-replacements">`;
      html += `<div class="tt-repl-label">✅ Возможно, вы имели в виду:</div>`;
      html += `<div class="tt-repl-list">`;
      suggestions.forEach(s => { html += `<span class="tt-repl-item">${escapeHtml(s)}</span>`; });
      html += `</div></div>`;
    }
  }

  if (cat === 'grammar' && lastFindings.grammar) {
    for (const item of lastFindings.grammar) {
      if (!item._details) continue;
      for (const d of item._details) {
        if (d.word === word) {
          html += `<div class="tt-replacements">`;
          html += `<div class="tt-repl-label">⚠️ Ошибка:</div>`;
          html += `<div>${escapeHtml(d.message)}</div>`;
          if (d.suggest) {
            html += `<div class="tt-repl-label" style="margin-top:6px">✅ Замените на:</div>`;
            html += `<div class="tt-repl-list"><span class="tt-repl-item">${escapeHtml(d.suggest)}</span></div>`;
          }
          html += `</div>`;
          break;
        }
      }
    }
  }

  if (cat === 'style' && lastFindings.style) {
    const styleItem = lastFindings.style.find(i => i.word.toLowerCase() === word.toLowerCase());
    if (styleItem) {
      html += `<div class="tt-replacements">`;
      html += `<div class="tt-repl-label">⚠️ LanguageTool:</div>`;
      html += `<div>${escapeHtml(styleItem.message)}</div>`;
      if (styleItem.suggest) {
        html += `<div class="tt-repl-label" style="margin-top:6px">✅ Замените на:</div>`;
        html += `<div class="tt-repl-list"><span class="tt-repl-item">${escapeHtml(styleItem.suggest)}</span></div>`;
      }
      html += `</div>`;
    }
  }

  return html;
}

function showTooltip(mark) {
  if (tooltipBlocked) return;
  tooltip.querySelector('.custom-tooltip-content').innerHTML = explanationHTML(mark);
  positionTooltipAtMark(mark);
  tooltip.classList.add('visible');
}

function positionTooltipAtMark(mark) {
  const markRect = mark.getBoundingClientRect();
  const tooltipContent = tooltip.querySelector('.custom-tooltip-content');
  tooltip.style.visibility = 'hidden';
  tooltip.classList.add('visible');
  const tooltipRect = tooltipContent.getBoundingClientRect();
  const tooltipWidth = tooltipRect.width;
  const tooltipHeight = tooltipRect.height;
  const gap = 10;
  const edgePadding = 12;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const positions = [
    { placement: 'top', x: markRect.left + markRect.width / 2 - tooltipWidth / 2, y: markRect.top - tooltipHeight - gap },
    { placement: 'bottom', x: markRect.left + markRect.width / 2 - tooltipWidth / 2, y: markRect.bottom + gap },
    { placement: 'right', x: markRect.right + gap, y: markRect.top + markRect.height / 2 - tooltipHeight / 2 },
    { placement: 'left', x: markRect.left - tooltipWidth - gap, y: markRect.top + markRect.height / 2 - tooltipHeight / 2 }
  ];

  let chosen = positions[0];
  for (const pos of positions) {
    const fitsX = pos.x >= edgePadding && pos.x + tooltipWidth <= viewportWidth - edgePadding;
    const fitsY = pos.y >= edgePadding && pos.y + tooltipHeight <= viewportHeight - edgePadding;
    if (fitsX && fitsY) { chosen = pos; break; }
  }

  let finalX = chosen.x, finalY = chosen.y;
  if (finalX < edgePadding) finalX = edgePadding;
  if (finalX + tooltipWidth > viewportWidth - edgePadding) finalX = viewportWidth - edgePadding - tooltipWidth;
  if (finalY < edgePadding) finalY = edgePadding;
  if (finalY + tooltipHeight > viewportHeight - edgePadding) finalY = viewportHeight - edgePadding - tooltipHeight;

  tooltip.style.left = finalX + 'px';
  tooltip.style.top = finalY + 'px';
  tooltip.dataset.placement = chosen.placement;
  tooltip.style.visibility = '';
}

function blockTooltip() {
  tooltipBlocked = true;
  if (tooltipBlockTimer) clearTimeout(tooltipBlockTimer);
  tooltipBlockTimer = setTimeout(() => { tooltipBlocked = false; }, 2000);
}

function setActiveCheck(type) {
  clearTimeout(analysisTimer);
  requestRevision++;
  activeCheckType = type;
  const btnId = { style: 'btn-style', regex: 'btn-regex', speller: 'btn-speller', languageTool: 'btn-lt' }[type];
  document.querySelectorAll('.check-btn').forEach(btn => {
    const active = btn.id === btnId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  resetResults();
  if (!editor.value.trim()) return;
  if (type === 'style' || type === 'regex') runFullAnalysis();
  else runOnlineAnalysis(type);
}

let hoverTimer = null;
let hoveredMark = null;

function hideEditorTooltip() {
  clearTimeout(hoverTimer);
  hoverTimer = null;
  hoveredMark = null;
  tooltip.classList.remove('visible');
}

function hideSelectionTooltip() {
  selectionTooltip.hidden = true;
}

function getSelectionRect(start, end) {
  if (!selectionMirror) {
    selectionMirror = document.createElement('div');
    selectionMirror.setAttribute('aria-hidden', 'true');
    document.body.appendChild(selectionMirror);
  }

  const editorRect = editor.getBoundingClientRect();
  const computed = getComputedStyle(editor);
  const copiedProperties = [
    'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight',
    'fontVariant', 'fontStretch', 'lineHeight', 'letterSpacing', 'wordSpacing',
    'tabSize', 'textAlign', 'textIndent', 'textTransform', 'paddingTop',
    'paddingRight', 'paddingBottom', 'paddingLeft', 'borderTopWidth',
    'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'
  ];

  selectionMirror.style.cssText = [
    'position:fixed',
    `left:${editorRect.left}px`,
    `top:${editorRect.top}px`,
    `width:${editorRect.width}px`,
    'height:auto',
    'min-height:0',
    'overflow:hidden',
    'visibility:hidden',
    'pointer-events:none',
    'white-space:pre-wrap',
    'overflow-wrap:break-word',
    'word-break:normal',
    'z-index:-1'
  ].join(';');

  for (const property of copiedProperties) {
    selectionMirror.style[property] = computed[property];
  }

  selectionMirror.replaceChildren();
  selectionMirror.append(document.createTextNode(editor.value.slice(0, start)));

  const selectedSpan = document.createElement('span');
  selectedSpan.textContent = editor.value.slice(start, end) || '\u200b';
  selectionMirror.append(selectedSpan);

  const rects = selectedSpan.getClientRects();
  return rects.length ? rects[rects.length - 1] : editorRect;
}

function updateSelectionTooltip() {
  if (suppressSelectionTooltip) {
    hideSelectionTooltip();
    return;
  }

  const start = editor.selectionStart;
  const end = editor.selectionEnd;

  if (start === end) {
    hideSelectionTooltip();
    return;
  }

  const selectedText = editor.value.slice(start, end);
  const trimmed = selectedText.trim();
  const words = trimmed ? trimmed.split(/\s+/u).length : 0;
  const characters = selectedText.length;

  selectionTooltip.textContent = [
    formatRussianCount(words, 'слово', 'слова', 'слов'),
    formatRussianCount(characters, 'символ', 'символа', 'символов')
  ].join(' · ');
  selectionTooltip.hidden = false;
  selectionTooltip.style.visibility = 'hidden';

  const selectionRect = getSelectionRect(start, end);
  const tooltipRect = selectionTooltip.getBoundingClientRect();
  const edge = 12;
  const gap = 8;

  let left = selectionRect.left + selectionRect.width / 2 - tooltipRect.width / 2;
  left = Math.max(edge, Math.min(left, window.innerWidth - tooltipRect.width - edge));

  let top = selectionRect.top - tooltipRect.height - gap;
  if (top < edge) top = selectionRect.bottom + gap;
  top = Math.max(edge, Math.min(top, window.innerHeight - tooltipRect.height - edge));

  selectionTooltip.style.left = `${left}px`;
  selectionTooltip.style.top = `${top}px`;
  selectionTooltip.style.visibility = '';
  hideEditorTooltip();
}

function findMarkAtPoint(x, y) {
  for (const mark of overlay.querySelectorAll('mark')) {
    // У слова или фразы может быть несколько строк.
    for (const rect of mark.getClientRects()) {
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        return mark;
      }
    }
  }

  return null;
}

editor.addEventListener('pointermove', (event) => {
  if (
    event.pointerType !== 'mouse' ||
    event.buttons !== 0 ||
    editor.selectionStart !== editor.selectionEnd ||
    tooltipBlocked ||
    !editorWrapper.classList.contains('highlight-active')
  ) {
    hideEditorTooltip();
    return;
  }

  const mark = findMarkAtPoint(event.clientX, event.clientY);

  if (mark === hoveredMark) return;

  hideEditorTooltip();
  hoveredMark = mark;

  if (!mark) return;

  hoverTimer = setTimeout(() => {
    if (
      hoveredMark === mark &&
      mark.isConnected &&
      !tooltipBlocked
    ) {
      showTooltip(mark);
    }
  }, 350);
});

editor.addEventListener('pointerdown', () => {
  hideEditorTooltip();
  hideSelectionTooltip();
  blockTooltip();

  // Не вызываем preventDefault():
  // браузер сам устанавливает курсор и начинает выделение.
});

editor.addEventListener('pointerleave', hideEditorTooltip);

editor.addEventListener('keydown', () => {
  hideEditorTooltip();
  blockTooltip();
});

editor.addEventListener('select', updateSelectionTooltip);
editor.addEventListener('keyup', updateSelectionTooltip);
document.addEventListener('pointerdown', event => {
  if (event.target !== editor) hideSelectionTooltip();
});

let resizeTimer = null;

window.addEventListener('resize', () => {
  hideEditorTooltip();
  hideSelectionTooltip();

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    resizeEditorToContent();
  }, 100);
});
window.addEventListener('scroll', () => {
  hideEditorTooltip();
  hideSelectionTooltip();
}, true);

// ============================================================
// ОБНОВЛЕНИЕ UI
// ============================================================
function closeIssue() {
  issueDetail.hidden = true;
  overlay.querySelectorAll('.current-issue').forEach(mark => mark.classList.remove('current-issue'));
  issueButton.setAttribute('aria-expanded', 'false');
}

function updateIssueSummary() {
  const count = overlay.querySelectorAll('mark').length;
  issueIndex = -1;
  closeIssue();
  issueButton.hidden = count === 0;
  issueButton.textContent = `Замечания: ${count} · посмотреть`;
  spellingStatus.textContent = count ? 'Проверено' : 'Замечаний не найдено';
}

function showNextIssue() {
  const marks = overlay.querySelectorAll('mark');
  if (!marks.length) return;
  issueIndex = (issueIndex + 1) % marks.length;
  document.getElementById('issue-content').innerHTML = explanationHTML(marks[issueIndex]);
  issueDetail.hidden = false;
  issueButton.setAttribute('aria-expanded', 'true');
  issueButton.textContent = `${issueIndex + 1} из ${marks.length} · следующее`;
  hideEditorTooltip();
}

function goToCurrentIssue() {
  const marks = overlay.querySelectorAll('mark');
  const mark = marks[issueIndex];

  if (!mark) return;

  marks.forEach(item => {
    item.classList.toggle(
      'current-issue',
      item === mark
    );
  });

  const start = Number(mark.dataset.start);
  const end = Number(mark.dataset.end);

  /*
   * Выделяем ошибку в настоящем textarea.
   * preventScroll не позволяет focus() самостоятельно
   * прыгнуть к началу редактора.
   */
  suppressSelectionTooltip = true;
  editor.focus({ preventScroll: true });
  editor.setSelectionRange(start, end);
  setTimeout(() => { suppressSelectionTooltip = false; }, 0);

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /*
   * mark находится в overlay точно поверх соответствующего
   * текста, поэтому scrollIntoView прокрутит всю страницу
   * к нужной строке.
   */
  mark.scrollIntoView({
    block: 'center',
    inline: 'nearest',
    behavior: reduceMotion ? 'auto' : 'smooth'
  });

  hideEditorTooltip();
}

function updateStats() {
  const text = editor.value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(w => w.length > 0).length : 0;
  stats.textContent = [
    formatRussianCount(words, 'слово', 'слова', 'слов'),
    formatRussianCount(text.length, 'знак', 'знака', 'знаков')
  ].join(' · ');
  document.getElementById('btn-example').hidden = text.length > 0;
}

// ============================================================
// ДЕЙСТВИЯ
// ============================================================
function persistDraft() {
  clearTimeout(saveTimer);
  if (!draftDirty) return;
  const saved = window.TextredStorage.saveDraft(editor.value);
  const status = document.getElementById('save-status');
  status.textContent = saved ? 'Черновик сохранён' : 'Не удалось сохранить черновик';
  status.dataset.failed = String(!saved);
  if (saved) draftDirty = false;
}

function scheduleDraftSave() {
  draftDirty = true;
  clearTimeout(saveTimer);
  document.getElementById('save-status').textContent = 'Сохранение…';
  saveTimer = setTimeout(persistDraft, 250);
}

function updateThemeButtons() {
  const theme = document.documentElement.dataset.theme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.getElementById('theme-light').setAttribute('aria-pressed', String(theme === 'light'));
  document.getElementById('theme-dark').setAttribute('aria-pressed', String(theme === 'dark'));
}

function loadExample() {
  editor.value = 'На сегоднешний день данный продукт являеться очень уникальным решением. Как показывает практика , важно обеспечить качественное обслуживание.Конечно,необходимо учитывать все ситуации.';
  resizeEditorToContent();
  updateStats();
  scheduleDraftSave();
  // Загрузка примера сама по себе не отправляет текст в сеть.
  setActiveCheck('style');
}

function resetResults() {
  hideEditorTooltip();
  closeIssue();
  issueButton.hidden = true;
  issueIndex = -1;
  spellingStatus.textContent = 'Введите текст для проверки';
  lastSpellingSuggestions = {};
  lastFindings = {};
  lastRenderedText = null;
  overlay.innerHTML = '';
  editorWrapper.classList.remove('highlight-active');
}

function handleInput() {
  requestRevision++;
  clearTimeout(analysisTimer);
  updateStats();
  resetResults();
  hideSelectionTooltip();
  blockTooltip();
  resizeEditorToContent();
  scheduleDraftSave();
  if (!editor.value.trim()) return;
  if (activeCheckType === 'style' || activeCheckType === 'regex') {
    spellingStatus.textContent = 'Ожидание проверки…';
    if (!composing) analysisTimer = setTimeout(runFullAnalysis, 400);
  } else {
    spellingStatus.textContent = 'Текст изменён · нажмите сервис для проверки';
  }
}

editor.addEventListener('input', handleInput);
editor.addEventListener('compositionstart', () => {
  composing = true;
  clearTimeout(analysisTimer);
});
editor.addEventListener('compositionend', () => {
  composing = false;
  handleInput();
});

async function runOnlineAnalysis(type) {
  const text = editor.value;
  if (!text.trim()) return;
  const revision = ++requestRevision;
  const service = type === 'speller' ? 'Яндекс' : 'LanguageTool';
  spellingStatus.textContent = `${service}: проверяем…`;
  const result = await (type === 'speller' ? checkSpelling(text) : checkLanguageTool(text));
  // Не применяем ответы для старого текста, режима или предыдущего запроса.
  if (revision !== requestRevision || editor.value !== text || activeCheckType !== type) return;
  if (result.failed) {
    spellingStatus.textContent = `${service} недоступен · нажмите ещё раз`;
    return;
  }
  lastFindings = type === 'speller' ? { spelling: result.errors } : { style: result.errors };
  lastSpellingSuggestions = result.suggestions || {};
  renderHighlight(text);
  lastRenderedText = text;
  editorWrapper.classList.add('highlight-active');
  updateIssueSummary();
}

document.getElementById('theme-light').addEventListener('click', () => {
  window.TextredStorage.saveTheme('light');
  updateThemeButtons();
});
document.getElementById('theme-dark').addEventListener('click', () => {
  window.TextredStorage.saveTheme('dark');
  updateThemeButtons();
});
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (typeof colorSchemeQuery.addEventListener === 'function') {
  colorSchemeQuery.addEventListener('change', updateThemeButtons);
} else if (typeof colorSchemeQuery.addListener === 'function') {
  colorSchemeQuery.addListener(updateThemeButtons);
}
window.addEventListener('pagehide', persistDraft);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') persistDraft();
});
document.getElementById('issue-content').addEventListener('click', goToCurrentIssue);
document.getElementById('issue-content').addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    goToCurrentIssue();
  }
});
document.getElementById('btn-example').addEventListener('click', loadExample);
document.getElementById('btn-style').addEventListener('click', () => setActiveCheck('style'));
document.getElementById('btn-regex').addEventListener('click', () => setActiveCheck('regex'));
document.getElementById('btn-speller').addEventListener('click', () => setActiveCheck('speller'));
document.getElementById('btn-lt').addEventListener('click', () => setActiveCheck('languageTool'));
issueButton.addEventListener('click', showNextIssue);
document.getElementById('close-issue').addEventListener('click', () => {
  closeIssue();
  issueButton.focus({ preventScroll: true });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const wasOpen = !issueDetail.hidden;
    closeIssue();
    hideEditorTooltip();
    if (wasOpen) issueButton.focus({ preventScroll: true });
  }
});

const restoredDraft = window.TextredStorage.restoreDraft();
if (restoredDraft !== null) {
  editor.value = restoredDraft;

  document.getElementById('save-status').textContent =
    'Черновик восстановлен';
}

resizeEditorToContent();
updateThemeButtons();
updateStats();
setActiveCheck('style');
