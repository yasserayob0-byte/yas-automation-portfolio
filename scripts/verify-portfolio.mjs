import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
const result = await build({
  stdin: {
    contents: `export { resolveCaseStudy } from './src/data/resolveCaseStudy';
      export { PROJECTS_DATA } from './src/data/portfolioData';
      export { default as CaseStudy } from './src/components/CaseStudyTemplate';`,
    resolveDir: process.cwd(), loader: 'ts'
  },
  bundle: true, write: false, platform: 'node', format: 'cjs',
  external: ['react', 'react-dom', 'react-dom/server'],
  loader: { '.jpg': 'dataurl', '.png': 'dataurl' }
});
const require = createRequire(import.meta.url);
const module = { exports: {} };
new Function('module', 'exports', 'require', result.outputFiles[0].text)(module, module.exports, require);
const { resolveCaseStudy, PROJECTS_DATA, CaseStudy } = module.exports;
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const detailIds = [...new Set([...PROJECTS_DATA.map(project => project.id), 'proj-5'])];
for (const id of detailIds) {
  const project = { id };
  const study = resolveCaseStudy(project.id);
  assert.ok(study, `${project.id} must resolve`);
  assert.equal(study.id, project.id, 'A project must never open another project');
  assert.ok(study.heroScreenshot.imageUrl, `${project.id} requires its screenshot`);
  assert.ok(study.architecture.steps.length, `${project.id} requires its architecture`);
  const html = renderToStaticMarkup(createElement(CaseStudy, { data: study }));
  assert.match(html, /<h1[\s>]/, `${project.id} must render a heading`);
  assert.ok(html.includes('data:image/'), `${project.id} must render its original screenshot`);
  assert.ok(!html.includes('[Large Workflow Screenshot Placeholder]'), 'Do not render placeholder content');
}
assert.equal(resolveCaseStudy('proj-6').title, PROJECTS_DATA.find(project => project.id === 'proj-6').title);
for (const id of ['unknown', '__proto__', 'toString']) assert.equal(resolveCaseStudy(id), null);
console.log(`PASS: ${PROJECTS_DATA.length} project associations and ${detailIds.length} static case-study renders, receptionist identity, and unknown-ID safety.`);
console.log('This checks rendering and data integrity; it does not simulate browser layout or interaction.');
