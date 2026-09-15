// ============================================================
// СЛОВАРИ (перенесите полные массивы из исходного файла)
// ============================================================
const DICT_STOP = ['вот', 'сейчас'];
const DICT_CLICHE = [];
const DICT_BUREAUCRACY = ['населения', 'с целью'];
const DICT_AMPLIFIER = ['Самые', 'особенно', 'самый', 'точно'];
const DICT_INPUT = [];
const DICT_STAMP = ['То же самое', 'повестки дня', 'в политической жизни'];
const DICT_WEAK = ['был', 'Есть', 'является', 'существовало', 'существуют'];
const DICT_VAGUE = ['многие', 'достаточно'];
const DIST_PERSONAL = ['его', 'оно', 'ему', 'они', 'Их', 'мы', 'ее', 'он'];
const DIST_POSSESSIVE = ['своей', 'своих'];
const DIST_BIASED = ['Реальная', 'скромные', 'Реальная', 'реальные', 'обычно', 'масштабные', 'хорошо'];
const DIST_GENERALIZATION = ['всю'];
const DIST_MODAL = ['может', 'смог'];
const DIST_TIME = ['В наши дни'];

// ============================================================
// ПРАВИЛА ГРАММАТИКИ
// ============================================================
const GRAMMAR_RULES = [
  { regex: /\s{2,}/g, message: 'Двойной пробел', suggest: ' ' },
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
  stop: DICT_STOP, cliche: DICT_CLICHE, bureaucracy: DICT_BUREAUCRACY,
  personal: DIST_PERSONAL, possessive: DIST_POSSESSIVE, biased: DIST_BIASED, generalization: DIST_GENERALIZATION,
  amplifier: DICT_AMPLIFIER, input: DICT_INPUT, stamp: DICT_STAMP,
  weak: DICT_WEAK, vague: DICT_VAGUE
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
  possessive: 'Притяжательное местоимение', biased: 'Необъективная оценка', modal: 'Модальный глагол', time: 'Паразит времени',
  spelling: '✏️ Орфография', grammar: '📐 Грамматика', style: '📝 Стиль и грамматика'
};

// ============================================================
// СОСТОЯНИЕ
// ============================================================
let lastFindings = {};
let lastSpellingSuggestions = {};
let activeDropdownCat = null;
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
const scoreComment = document.getElementById('scoreComment');
const spellingStatus = document.getElementById('spellingStatus');
const errorsBadges = document.getElementById('errorsBadges');
const errorDropdown = document.getElementById('errorDropdown');
const errorDropdownList = document.getElementById('errorDropdownList');
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
editor.addEventListener('scroll', () => {
  overlay.scrollTop = editor.scrollTop;
});

// Пробрасываем колесо мыши с оверлея в textarea
overlay.addEventListener('wheel', (e) => {
  if (!editorWrapper.classList.contains('highlight-active')) return;

  // Если textarea вообще не скроллится — не перехватываем, страница крутится сама
  if (editor.scrollHeight <= editor.clientHeight) return;

  // Защита от «застревания» на границах: если уже уперлись — отдаём событие странице
  const atTop = editor.scrollTop === 0 && e.deltaY < 0;
  const atBottom = (editor.scrollTop + editor.clientHeight) >= editor.scrollHeight - 1 && e.deltaY > 0;
  if (atTop || atBottom) return;

  editor.scrollTop += e.deltaY;
  e.preventDefault();
}, { passive: false });

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
  try {
    const url = 'https://speller.yandex.net/services/spellservice.json/checkText?text='
      + encodeURIComponent(text) + '&lang=ru&options=5';
    const response = await fetch(url);
    if (!response.ok) throw new Error('API error');
    const errors = await response.json();
    const grouped = {};
    const suggestions = {};
    for (const err of errors) {
      if (!grouped[err.word]) grouped[err.word] = { word: err.word, count: 0 };
      grouped[err.word].count++;
      suggestions[err.word.toLowerCase()] = err.s || [];
    }
    return {
      errors: Object.values(grouped).sort((a, b) => b.count - a.count),
      suggestions
    };
  } catch (e) {
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
    const grammarErrors = analyzeGrammar(trimmed);
    const gc = {};
    for (const err of grammarErrors) {
      if (!gc[err.message]) gc[err.message] = { word: err.message, count: 0, _details: [] };
      gc[err.message].count++;
      gc[err.message]._details.push(err);
    }
    findings.grammar = Object.values(gc).sort((a, b) => b.count - a.count);
  }

  lastFindings = findings;
  const words = trimmed.split(/\s+/).filter(w => w.length > 0).length;
  const styleCategories = ['stop', 'cliche', 'bureaucracy', 'amplifier', 'input', 'stamp', 'weak', 'vague', 'personal', 'possessive', 'modal', 'biased'];
  const styleIssues = styleCategories.reduce((s, cat) =>
    s + (findings[cat] || []).reduce((ss, i) => ss + i.count, 0), 0);
  const grammarIssues = (findings.grammar || []).reduce((s, i) => s + i.count, 0)
    + (findings.spelling || []).reduce((s, i) => s + i.count, 0)
    + (findings.style || []).reduce((s, i) => s + i.count, 0);

  const stylePercent = words > 0 ? (styleIssues / words) * 100 : 0;
  const grammarPercent = words > 0 ? (grammarIssues / words) * 100 : 0;
  const styleScore = Math.max(0, Math.min(10, 10 - stylePercent * 0.5));
  const grammarScore = Math.max(0, Math.min(10, 10 - grammarPercent * 0.5));

  updateScore(styleScore, grammarScore);
  updateBadges(findings);

  if (text !== lastRenderedText) {
    renderHighlight(text);
    lastRenderedText = text;
  }
  editorWrapper.classList.add('highlight-active');
}

// ============================================================
// ПОДСВЕТКА
// ============================================================
function renderHighlight(text) {
  if (!text || !text.trim()) { overlay.innerHTML = ''; return; }
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
    result += `<mark data-cat="${m.cat}">${escapeHtml(orig)}</mark>`;
    lastIdx = m.end;
  }
  result += escapeHtml(text.slice(lastIdx));
  overlay.innerHTML = result;
}

// ============================================================
// TOOLTIP
// ============================================================
function showTooltip(mark, e) {
  if (tooltipBlocked) return;
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

  tooltip.querySelector('.custom-tooltip-content').innerHTML = html;
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
  if (activeCheckType === type) return;
  activeCheckType = type;
  document.querySelectorAll('.check-btn').forEach(btn => btn.classList.remove('active'));
  const btnId = { style: 'btn-style', regex: 'btn-regex', speller: 'btn-speller', languageTool: 'btn-lt' }[type];
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('active');

  lastFindings = { stop: [], cliche: [], bureaucracy: [], amplifier: [], input: [], stamp: [], weak: [], vague: [], personal: [], possessive: [], biased: [], generalization: [], modal: [], time: [], grammar: [], spelling: [], style: [] };
  lastRenderedText = null;
  const text = editor.value.trim();
  if (!text) return;

  if (type === 'style' || type === 'regex') runFullAnalysis();
  else if (type === 'speller') runSpellerOnly();
  else if (type === 'languageTool') runLanguageToolOnly();
}

function switchToEditMode() {
  editorWrapper.classList.remove('highlight-active');
  tooltip.classList.remove('visible');
  blockTooltip();
  requestAnimationFrame(() => { editor.focus(); });
}

// ============================================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================================
overlay.addEventListener('mouseover', (e) => {
  const mark = e.target.closest('mark');
  if (mark) showTooltip(mark, e);
});

overlay.addEventListener('mouseout', (e) => {
  const mark = e.target.closest('mark');
  if (mark) {
    const related = e.relatedTarget;
    if (!related || !mark.contains(related)) tooltip.classList.remove('visible');
  }
});

overlay.addEventListener('mousemove', (e) => {
  const mark = e.target.closest('mark');
  if (mark) positionTooltipAtMark(mark);
});

editorWrapper.addEventListener('mousedown', (e) => {
  blockTooltip();
  tooltip.classList.remove('visible');
  if (editorWrapper.classList.contains('highlight-active')) {
    e.preventDefault();
    switchToEditMode();
  }
});

// ============================================================
// ОБНОВЛЕНИЕ UI
// ============================================================
function updateScore(styleScore, grammarScore) {
  const styleEl = document.getElementById('styleScore');
  const styleFill = document.getElementById('styleProgressFill');
  const styleRounded = Math.round(styleScore * 10) / 10;
  styleEl.textContent = styleRounded.toFixed(1);
  styleFill.style.width = `${styleScore * 10}%`;
  if (styleScore >= 7.5) { styleEl.className = 'score-value good'; styleFill.style.background = '#2d6a4f'; }
  else if (styleScore >= 5) { styleEl.className = 'score-value mid'; styleFill.style.background = '#d97706'; }
  else { styleEl.className = 'score-value bad'; styleFill.style.background = '#e63946'; }

  const grammarEl = document.getElementById('grammarScore');
  const grammarFill = document.getElementById('grammarProgressFill');
  const grammarRounded = Math.round(grammarScore * 10) / 10;
  grammarEl.textContent = grammarRounded.toFixed(1);
  grammarFill.style.width = `${grammarScore * 10}%`;
  if (grammarScore >= 7.5) { grammarEl.className = 'score-value good'; grammarFill.style.background = '#2d6a4f'; }
  else if (grammarScore >= 5) { grammarEl.className = 'score-value mid'; grammarFill.style.background = '#d97706'; }
  else { grammarEl.className = 'score-value bad'; grammarFill.style.background = '#e63946'; }

  const avgScore = (styleScore + grammarScore) / 2;
  if (avgScore >= 7.5) scoreComment.textContent = '✨ Отличный текст!';
  else if (avgScore >= 5) scoreComment.textContent = '⚠️ Текст требует доработки';
  else scoreComment.textContent = '❌ Много словесного мусора';
}

function updateBadges(findings) {
  const cats = ['stop', 'cliche', 'bureaucracy', 'amplifier', 'input', 'stamp', 'weak', 'vague', 'personal', 'possessive', 'biased', 'generalization', 'modal', 'time', 'spelling', 'grammar', 'style'];
  errorsBadges.innerHTML = cats.map(cat => {
    const items = findings[cat] || [];
    const total = items.reduce((s, i) => s + i.count, 0);
    const info = CAT_INFO[cat];
    const empty = total === 0;
    const active = activeDropdownCat === cat;
    return `<div class="error-badge ${info.badge} ${empty ? 'empty' : ''} ${active ? 'active' : ''}"
            data-cat="${cat}">
      <span class="badge-dot"></span>
      <span class="badge-name">${info.name}</span>
      <span class="badge-count">${total}</span>
    </div>`;
  }).join('');

  // Навешиваем обработчики на бейджи
  errorsBadges.querySelectorAll('.error-badge').forEach(badge => {
    badge.addEventListener('click', () => toggleDropdown(badge.dataset.cat));
  });

  if (activeDropdownCat) renderDropdown(activeDropdownCat);
}

function toggleDropdown(cat) {
  const items = lastFindings[cat] || [];
  const total = items.reduce((s, i) => s + i.count, 0);
  if (total === 0) return;

  if (activeDropdownCat === cat) {
    activeDropdownCat = null;
    errorDropdown.classList.remove('visible');
    errorsBadges.querySelectorAll('.error-badge').forEach(b => b.classList.remove('active'));
  } else {
    activeDropdownCat = cat;
    renderDropdown(cat);
    errorDropdown.classList.add('visible');
    errorsBadges.querySelectorAll('.error-badge').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  }
}

function renderDropdown(cat) {
  const items = lastFindings[cat] || [];
  const comment = COMMENTS[cat] || '';
  if (items.length === 0) {
    errorDropdownList.innerHTML = '<li style="padding:14px;text-align:center;color:var(--muted)">✓ Не найдено</li>';
    return;
  }
  errorDropdownList.innerHTML = items.map(i => `
    <li>
      <div class="item-content">
        <span class="word">${escapeHtml(i.word)}</span>
        <span class="comment">${escapeHtml(comment)}</span>
      </div>
      <span class="count">×${i.count}</span>
    </li>
  `).join('');
}

function updateStats() {
  const text = editor.value;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(w => w.length > 0).length : 0;
  stats.textContent = `${words} слов · ${text.length} знаков`;
}

// ============================================================
// ДЕЙСТВИЯ
// ============================================================
function clearText() {
  editor.value = '';
  overlay.innerHTML = '';
  lastSpellingSuggestions = {};
  lastFindings = {};
  lastRenderedText = null;
  activeDropdownCat = null;
  errorDropdown.classList.remove('visible');
  editorWrapper.classList.remove('highlight-active');
  tooltip.classList.remove('visible');
  updateStats();
  resetResults();
}

function loadExample() {
  editor.value = `На сегоднешний день данный продукт являеться очень уникальным и инновационным решением в рамках современного мира . Как показывает практика , очень важно обеспечить качественное обслуживание.Конечно,необходимо учитывать все ситуации и вопросы,которые могут возникнуть.`;
  activeDropdownCat = null;
  errorDropdown.classList.remove('visible');
  lastRenderedText = null;
  updateStats();
  runFullAnalysis();
}

function resetResults() {
  document.getElementById('styleScore').textContent = '—';
  document.getElementById('styleScore').className = 'score-value';
  document.getElementById('styleProgressFill').style.width = '0%';
  document.getElementById('grammarScore').textContent = '—';
  document.getElementById('grammarScore').className = 'score-value';
  document.getElementById('grammarProgressFill').style.width = '0%';
  scoreComment.textContent = 'Введите текст для анализа';
  spellingStatus.textContent = '';
  lastFindings = {};
  lastRenderedText = null;
  activeDropdownCat = null;
  errorDropdown.classList.remove('visible');
  errorsBadges.innerHTML = '';
  overlay.innerHTML = '';
  editorWrapper.classList.remove('highlight-active');
}

// ============================================================
// ОБРАБОТКА ВВОДА
// ============================================================
editor.addEventListener('input', () => {
  updateStats();
  editorWrapper.classList.remove('highlight-active');
  clearTimeout(analysisTimer);
  tooltip.classList.remove('visible');
  if (activeDropdownCat) {
    activeDropdownCat = null;
    errorDropdown.classList.remove('visible');
    errorsBadges.querySelectorAll('.error-badge').forEach(b => b.classList.remove('active'));
  }
  if (activeCheckType === 'style' || activeCheckType === 'regex') {
    analysisTimer = setTimeout(runFullAnalysis, 500);
  }
});

editor.addEventListener('blur', () => {
  const text = editor.value.trim();
  if (!text) return;
  if (activeCheckType === 'style' || activeCheckType === 'regex') runFullAnalysis();
  else if (activeCheckType === 'speller') runSpellerOnly();
  else if (activeCheckType === 'languageTool') runLanguageToolOnly();
});

async function runSpellerOnly() {
  const text = editor.value.trim();
  if (!text) {
    spellingStatus.textContent = '';
    lastFindings.spelling = [];
    updateBadges(lastFindings);
    renderHighlight(editor.value);
    lastRenderedText = editor.value;
    return;
  }
  spellingStatus.textContent = '✏️ Проверяем орфографию...';
  const result = await checkSpelling(text);
  if (result.failed) { spellingStatus.textContent = '⚠️ Яндекс недоступен'; return; }

  lastFindings = {
    stop: [], cliche: [], bureaucracy: [], amplifier: [],
    input: [], stamp: [], weak: [], vague: [], personal: [], possessive: [], biased: [], generalization: [], modal: [], time: [],
    grammar: [], spelling: result.errors, style: []
  };
  lastSpellingSuggestions = result.suggestions;
  const totalSpelling = result.errors.reduce((s, i) => s + i.count, 0);
  spellingStatus.textContent = `✓ Орфография: ${totalSpelling} ошибок`;

  const trimmed = editor.value.trim();
  const words = trimmed.split(/\s+/).filter(w => w.length > 0).length;
  const grammarPercent = words > 0 ? (totalSpelling / words) * 100 : 0;
  const grammarScore = Math.max(0, Math.min(10, 10 - grammarPercent * 0.5));
  updateScore(10, grammarScore);
  updateBadges(lastFindings);
  renderHighlight(editor.value);
  lastRenderedText = editor.value;
  editorWrapper.classList.add('highlight-active');

  setTimeout(() => {
    if (spellingStatus.textContent.startsWith('✓')) spellingStatus.textContent = '';
  }, 3000);
}

async function runLanguageToolOnly() {
  const text = editor.value.trim();
  if (!text) {
    spellingStatus.textContent = '';
    lastFindings.style = [];
    updateBadges(lastFindings);
    renderHighlight(editor.value);
    lastRenderedText = editor.value;
    return;
  }
  spellingStatus.textContent = '📝 Проверяем грамматику...';
  const result = await checkLanguageTool(text);
  if (result.failed) { spellingStatus.textContent = '⚠️ LanguageTool недоступен'; return; }

  lastFindings = {
    stop: [], cliche: [], bureaucracy: [], amplifier: [],
    input: [], stamp: [], weak: [], vague: [], personal: [], possessive: [], biased: [], generalization: [], modal: [], time: [],
    grammar: [], spelling: [], style: result.errors
  };
  const totalStyle = result.errors.reduce((s, i) => s + i.count, 0);
  spellingStatus.textContent = `✓ Грамматика: ${totalStyle} замечаний`;

  const trimmed = editor.value.trim();
  const words = trimmed.split(/\s+/).filter(w => w.length > 0).length;
  const grammarPercent = words > 0 ? (totalStyle / words) * 100 : 0;
  const grammarScore = Math.max(0, Math.min(10, 10 - grammarPercent * 0.5));
  updateScore(10, grammarScore);
  updateBadges(lastFindings);
  renderHighlight(editor.value);
  lastRenderedText = editor.value;
  editorWrapper.classList.add('highlight-active');

  setTimeout(() => {
    if (spellingStatus.textContent.startsWith('✓')) spellingStatus.textContent = '';
  }, 3000);
}

// ============================================================
// ПРИВЯЗКА КНОПОК (единообразно через addEventListener)
// ============================================================
document.getElementById('btn-clear').addEventListener('click', clearText);
document.getElementById('btn-example').addEventListener('click', loadExample);
document.getElementById('btn-style').addEventListener('click', () => setActiveCheck('style'));
document.getElementById('btn-regex').addEventListener('click', () => setActiveCheck('regex'));
document.getElementById('btn-speller').addEventListener('click', () => setActiveCheck('speller'));
document.getElementById('btn-lt').addEventListener('click', () => setActiveCheck('languageTool'));

// Мобильная обработка
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  // Обработка кнопок тулбара
  document.querySelectorAll('.editor-toolbar button').forEach(btn => {
    btn.addEventListener('touchend', function (e) {
      e.preventDefault();
      btn.click();
    }, { passive: false });
  });

  // Тап по пустому месту оверлея → переход в режим редактирования
  overlay.addEventListener('touchstart', function (e) {
    if (!editorWrapper.classList.contains('highlight-active')) return;
    const mark = e.target.closest('mark');
    if (!mark) {
      // Тап не по слову — переключаемся в режим редактирования
      e.preventDefault();
      switchToEditMode();
    }
  }, { passive: false });

  // Тап по проблемному слову → показ тултипа
  overlay.addEventListener('touchend', function (e) {
    const mark = e.target.closest('mark');
    if (mark) {
      e.preventDefault();
      showTooltip(mark, e);
    }
  }, { passive: false });

  // Скрытие тултипа при тапе вне его
  document.addEventListener('touchstart', function (e) {
    if (!e.target.closest('mark') && !e.target.closest('.custom-tooltip')) {
      tooltip.classList.remove('visible');
    }
  }, { passive: true });
}

// Инициализация
updateStats();
setActiveCheck('style');