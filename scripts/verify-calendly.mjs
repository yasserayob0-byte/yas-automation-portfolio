import assert from 'node:assert/strict';
import { build } from 'esbuild';
const result = await build({ entryPoints: ['src/components/calendly.ts'], bundle: true, write: false, platform: 'node', format: 'cjs' });
const nodes = []; const timers = new Map(); let timer = 0;
globalThis.window = { setTimeout: callback => { timers.set(++timer, callback); return timer; } };
globalThis.clearTimeout = id => timers.delete(id);
globalThis.document = {
  getElementById: id => nodes.find(node => node.id === id),
  createElement: tag => ({ tag, remove() { nodes.splice(nodes.indexOf(this), 1); } }),
  head: { append: node => nodes.push(node) },
};
const module = { exports: {} };new Function('module', 'exports', result.outputFiles[0].text)(module, module.exports);
const { loadCalendly } = module.exports;
const first = loadCalendly();const concurrent = loadCalendly();assert.equal(first, concurrent);
assert.equal(nodes.filter(node => node.tag === 'script').length, 1);
const rejection = assert.rejects(first); nodes.find(node => node.tag === 'script').onerror();await rejection;
const retry = loadCalendly();const widget = { initInlineWidget() {} };window.Calendly = widget;
nodes.find(node => node.tag === 'script').onload();assert.equal(await retry, widget);
assert.equal(nodes.filter(node => node.tag === 'link').length, 1);assert.equal(await loadCalendly(), widget);
console.log('PASS: Calendly loader deduplicates requests, retries failures, reuses stylesheet and loaded widget.');
