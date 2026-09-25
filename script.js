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

const CAT_INFO = {
  stop: { name: 'Стоп-слова', badge: 'badge-stop' },
  cliche: { name: 'Штампы', badge: 'badge-cliche' },
  bureaucracy: { name: 'Канцелярит', badge: 'badge-bureaucracy' },
  amplifier: { name: 'Усилители', badge: 'badge-amplifier' },
  input: { name: 'Вводные', badge: 'badge-input' },
  stamp: { name: 'Рекламные', badge: 'badge-stamp' },
  weak: { name: 'Слабые', badge: 'badge-weak' },
  vague: { name: 'Неопределённость', badge: 'badge-vague' },
  personal: { name: 'Личное местоимение', badge: 'badge-personal' },
  possessive: { name: 'Притяжательное местоимение', badge: 'badge-possessive' },
  biased: { name: 'Необъективная оценка', badge: 'badge-biased' },
  generalization: { name: 'Обобщение', badge: 'badge-generalization' },
  modal: { name: 'Модальный глагол', badge: 'badge-modal' },
  time: { name: 'Паразит времени', badge: 'badge-time' },
  spelling: { name: '✏️ Орфография', badge: 'badge-spelling' },
  grammar: { name: '📐 Грамматика', badge: 'badge-grammar' },
  style: { name: '📝 Стиль', badge: 'badge-style' }
};

const CAT_NAMES = {
  stop: 'Стоп-слово', cliche: 'Штамп/клише', bureaucracy: 'Канцелярит',
  amplifier: 'Усилитель', input: 'Вводное слово', stamp: 'Рекламный штамп',
  weak: 'Слабая конструкция', vague: 'Неопределённость', personal: 'Личное местоимение',
  possessive: 'Притяжательное местоимение', biased: 'Необъективная оценка', modal: 'Модальный глагол', time: 'Паразит времени', spelling: '✏️ Орфография', grammar: '📐 Грамматика', style: '📝 Стиль и грамматика'
};

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
const spellingStatus = document.getElementById('spellingStatus');
const tooltip = document.getElementById('tooltip');

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

// ============================================================
// СИНХРОНИЗАЦИЯ СКРОЛЛА
// ============================================================
function syncOverlayGeometry() {
  overlay.style.right = 'auto';
  overlay.style.bottom = 'auto';

  // Учитываем место, которое занимает полоса прокрутки textarea.
  overlay.style.width = `${editor.clientWidth}px`;
  overlay.style.height = `${editor.clientHeight}px`;

  overlay.scrollTop = editor.scrollTop;
  overlay.scrollLeft = editor.scrollLeft;
}

editor.addEventListener('scroll', () => {
  syncOverlayGeometry();
  hideEditorTooltip();
});

const editorResizeObserver = new ResizeObserver(() => {
  syncOverlayGeometry();
  hideEditorTooltip();
});

editorResizeObserver.observe(editor);
syncOverlayGeometry();

// ============================================================
// АНАЛИЗ ТЕКСТА
// ============================================================
function analyzeLocal(text) {
  const textLower = text.toLowerCase();
  const findings = {};
  let totalIssues = 0;

  for (const [cat, dict] of Object.entries(DICT)) {
    if (!dict || dict.length === 0) { findings[cat] = []; continue; }

    const counts = {};
    const sortedDict = [...dict].sort((a, b) => b.length - a.length);
    const foundPositions = new Array(textLower.length).fill(false);

    for (const word of sortedDict) {
      const wordLower = word.toLowerCase();
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
            counts[word] = (counts[word] || 0) + 1;
            totalIssues++;
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

  return { findings, totalIssues };
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

  // Разбиваем текст на чанки по 9500 символов (с запасом до лимита 10000)
  const chunkSize = 9500;
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  const allErrors = [];
  const suggestions = {};

  try {
    // Обрабатываем чанки последовательно, чтобы не перегружать API
    for (const chunk of chunks) {
      const response = await fetch(
        'https://speller.yandex.net/services/spellservice.json/checkText',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'text=' + encodeURIComponent(chunk) + '&lang=ru&options=5'
        }
      );
      if (!response.ok) throw new Error('API error: ' + response.status);
      const errors = await response.json();
      allErrors.push(...errors);
    }

    // Группируем по словам
    const grouped = {};
    for (const err of allErrors) {
      if (!grouped[err.word]) grouped[err.word] = { word: err.word, count: 0 };
      grouped[err.word].count++;
      suggestions[err.word.toLowerCase()] = err.s || [];
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

async function checkLanguageTool(text) {
  if (!text.trim()) return { errors: [] };
  const chunks = [];
  const chunkSize = 5000;
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push({ text: text.slice(i, i + chunkSize), offset: i });
  }
  const allMatches = [];
  try {
    for (const chunk of chunks) {
      const response = await fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `text=${encodeURIComponent(chunk.text)}&language=ru-RU&enabledOnly=false`
      });
      if (!response.ok) throw new Error('LanguageTool API error');
      const data = await response.json();
      if (data.matches) {
        for (const m of data.matches) {
          const word = text.slice(chunk.offset + m.offset, chunk.offset + m.offset + m.length);
          allMatches.push({
            word: word,
            message: m.message,
            suggest: m.replacements && m.replacements.length > 0
              ? m.replacements.slice(0, 3).map(r => r.value).join(', ')
              : null,
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
        grouped[key] = { word: m.word, count: 0, message: m.message, suggest: m.suggest };
      }
      grouped[key].count++;
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
    const { findings: localFindings } = analyzeLocal(trimmed);
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
  for (const m of marks) {
    if (!filtered.some(f => (m.start >= f.start && m.start < f.end) || (m.end > f.start && m.end <= f.end))) {
      filtered.push(m);
    }
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
  blockTooltip();

  // Не вызываем preventDefault():
  // браузер сам устанавливает курсор и начинает выделение.
});

editor.addEventListener('pointerleave', hideEditorTooltip);

editor.addEventListener('keydown', () => {
  hideEditorTooltip();
  blockTooltip();
});

window.addEventListener('resize', hideEditorTooltip);
window.addEventListener('scroll', hideEditorTooltip, true);

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
  goToCurrentIssue();
}

function goToCurrentIssue() {
  const marks = overlay.querySelectorAll('mark');
  const mark = marks[issueIndex];
  if (!mark) return;
  const rect = mark.getClientRects()[0];
  if (!rect) return;
  const top = rect.top - overlay.getBoundingClientRect().top + overlay.scrollTop;
  marks.forEach(item => item.classList.toggle('current-issue', item === mark));
  editor.scrollIntoView({ block: 'center', behavior: 'instant' });
  editor.focus({ preventScroll: true });
  editor.setSelectionRange(Number(mark.dataset.start), Number(mark.dataset.end));
  editor.scrollTop = Math.max(0, top - editor.clientHeight / 3);
  syncOverlayGeometry();
  hideEditorTooltip();
}

function updateStats() {
  const text = editor.value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(w => w.length > 0).length : 0;
  stats.textContent = `${words} слов · ${text.length} знаков`;
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
  blockTooltip();
  syncOverlayGeometry();
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
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeButtons);
window.addEventListener('pagehide', persistDraft);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') persistDraft();
});
document.getElementById('go-to-issue').addEventListener('click', goToCurrentIssue);
document.getElementById('issue-content').addEventListener('click', goToCurrentIssue);
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
  document.getElementById('save-status').textContent = 'Черновик восстановлен';
}
updateThemeButtons();
updateStats();
setActiveCheck('style');
