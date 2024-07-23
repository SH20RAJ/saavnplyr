




'use client'

export function DecodeHtmlEntities({children : html}) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return String(doc.documentElement.textContent);
}

