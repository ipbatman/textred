// Browser-only persistence. Cookies mirror small drafts; localStorage holds long ones.
(() => {
  const path = location.pathname.replace(/[^/]*$/, '') || '/';
  const draftKey = `textred:draft:${path}`;
  const themeKey = `textred:theme:${path}`;
  const maxAge = 30 * 24 * 60 * 60;
  let revision = Date.now();

  function readCookie(name) {
    try {
      const prefix = `${name}=`;
      const item = document.cookie.split(';').map(part => part.trim()).find(part => part.startsWith(prefix));
      return item ? decodeURIComponent(item.slice(prefix.length)) : null;
    } catch { return null; }
  }

  function writeCookie(name, value, age = maxAge) {
    try {
      const encoded = encodeURIComponent(value);
      if (encoded.length > 3500) return false;
      document.cookie = `${name}=${encoded}; Path=${path}; Max-Age=${age}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
      return readCookie(name) === value;
    } catch { return false; }
  }

  function readLocal(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function writeLocal(key, value) {
    try {
      localStorage.setItem(key, value);
      return localStorage.getItem(key) === value;
    } catch { return false; }
  }

  function parseDraft(value) {
    try {
      const data = JSON.parse(value);
      if (data && data.version === 1 && typeof data.text === 'string' &&
          Number.isFinite(data.savedAt) && Number.isFinite(data.expiresAt) && data.expiresAt > Date.now()) return data;
    } catch { /* Ignore a damaged or expired draft. */ }
    return null;
  }

  function restoreDraft() {
    const records = [parseDraft(readLocal(draftKey)), parseDraft(readCookie('textred_draft'))]
      .filter(Boolean).sort((a, b) => b.savedAt - a.savedAt);
    if (!records.length) return null;
    revision = Math.max(revision, records[0].savedAt);
    return records[0].text;
  }

  function saveDraft(text) {
    revision = Math.max(Date.now(), revision + 1);
    const data = JSON.stringify({ version: 1, text, savedAt: revision, expiresAt: Date.now() + maxAge * 1000 });
    const localSaved = writeLocal(draftKey, data);
    const cookieSaved = writeCookie('textred_draft', data);
    if (localSaved && !cookieSaved) writeCookie('textred_draft', '', 0);
    return localSaved || cookieSaved;
  }

  const storedTheme = readCookie('textred_theme') || readLocal(themeKey);
  if (storedTheme === 'light' || storedTheme === 'dark') document.documentElement.dataset.theme = storedTheme;

  function saveTheme(theme) {
    document.documentElement.dataset.theme = theme;
    writeLocal(themeKey, theme);
    writeCookie('textred_theme', theme, 365 * 24 * 60 * 60);
  }

  window.TextredStorage = { restoreDraft, saveDraft, saveTheme };
})();
