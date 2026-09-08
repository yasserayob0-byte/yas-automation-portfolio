import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
const result = await build({
  stdin: {
    contents: `export { PROJECT_IMAGE_MAP } from './src/data/projectScreenshots';
      export { default as emailImage } from './src/assets/images/email_support_n8n_1787550036780.jpg';
      export { default as leadImage } from './src/assets/images/lead_crm_n8n_1787550019778.jpg';
      export { resolveCaseStudy } from './src/data/resolveCaseStudy';
      export { PROJECTS_DATA } from './src/data/portfolioData';
      export { default as CaseStudy } from './src/components/CaseStudyTemplate';`,
    resolveDir: process.cwd(), loader: 'ts'
  },
  bundle: true, write: false, platform: 'node', format: 'cjs',
  external: ['react', 'react-dom', 'react-dom/server'],
  loader: { '.jpg': 'dataurl', '.png': 'dataurl', '.svg': 'dataurl', '.css': 'empty' }
});
const require = createRequire(import.meta.url);
const module = { exports: {} };
new Function('module', 'exports', 'require', result.outputFiles[0].text)(module, module.exports, require);
const { resolveCaseStudy, PROJECTS_DATA, CaseStudy, PROJECT_IMAGE_MAP, emailImage, leadImage } = module.exports;
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const detailIds = [...new Set([...PROJECTS_DATA.map(project => project.id), 'proj-5'])];
for (const id of detailIds) {
  const project = { id };
  const study = resolveCaseStudy(project.id);
  assert.ok(study, `${project.id} must resolve`);
  assert.equal(study.id, project.id, 'A project must never open another project');
  assert.ok(study.heroScreenshot.imageUrl, `${project.id} requires its screenshot`);
  assert.equal(study.heroScreenshot.imageUrl, PROJECT_IMAGE_MAP[id].img, id + ' card/detail screenshots must agree');
  assert.ok(study.architecture.steps.length, `${project.id} requires its architecture`);
  const html = renderToStaticMarkup(createElement(CaseStudy, { data: study }));
  assert.match(html, /<h1[\s>]/, `${project.id} must render a heading`);
  assert.ok(html.includes('data:image/'), `${project.id} must render its original screenshot`);
  assert.ok(!html.includes('[Large Workflow Screenshot Placeholder]'), 'Do not render placeholder content');
}
assert.equal(resolveCaseStudy('proj-3').heroScreenshot.imageUrl, emailImage, 'Email support must show its email workflow');
assert.equal(resolveCaseStudy('proj-4').heroScreenshot.imageUrl, leadImage, 'Lead qualification must show its CRM workflow');
assert.equal(resolveCaseStudy('proj-6').title, PROJECTS_DATA.find(project => project.id === 'proj-6').title);
for (const id of ['unknown', '__proto__', 'toString']) assert.equal(resolveCaseStudy(id), null);
console.log(`PASS: ${PROJECTS_DATA.length} project associations and ${detailIds.length} static case-study renders, receptionist identity, and unknown-ID safety.`);
console.log('This checks rendering and data integrity; it does not simulate browser layout or interaction.');
