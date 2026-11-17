import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
const result = await build({
  stdin: {
    contents: `export { PROJECT_IMAGE_MAP } from './src/data/projectScreenshots';
      export { default as emailImage } from './src/assets/images/email_support_n8n_1787550036780.jpg';
      export { default as leadImage } from './src/assets/images/lead_crm_n8n_1787550019778.jpg';
      export { resolveCaseStudy } from './src/data/resolveCaseStudy';
      export { PROJECTS_DATA } from './src/data/portfolioData';
      export { default as WorkflowDisclosure, WorkflowDisclosureProvider } from './src/components/WorkflowDisclosure';
      export { default as ProjectsSection } from './src/components/ProjectsSection';
      export { default as GhlShowcase } from './src/components/GoHighLevelShowcase';
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

const { WorkflowDisclosure, WorkflowDisclosureProvider, ProjectsSection, GhlShowcase } = module.exports;
const collapsed = renderToStaticMarkup(createElement(WorkflowDisclosureProvider, null,
  createElement(WorkflowDisclosure, { id: 'test', title: 'Workflow', category: 'Automation', summary: 'Short summary', image: emailImage },
    createElement('p', null, 'EXPANDED_ONLY_CONTENT'))));
assert.ok(!collapsed.includes('EXPANDED_ONLY_CONTENT'), 'Detailed content is deferred until expansion');
assert.match(collapsed, /aria-expanded="false"/);
assert.match(collapsed, /View Workflow Details/);
const panelId = collapsed.match(/aria-controls="([^"]+)"/)[1];
assert.ok(collapsed.includes('id="' + panelId + '"'), 'Disclosure must control an existing panel');
const projects = renderToStaticMarkup(createElement(WorkflowDisclosureProvider, null, createElement(ProjectsSection, { onSelectProjectForAudit() {} })));
assert.equal((projects.match(/aria-expanded="false"/g) || []).length, PROJECTS_DATA.length, 'Every portfolio project starts collapsed');
assert.ok(!projects.includes('Full System Overview'), 'Project details are not rendered in compact cards');
const ghl = renderToStaticMarkup(createElement(WorkflowDisclosureProvider, null, createElement(GhlShowcase, { onConsultWorkflow() {} })));
assert.equal((ghl.match(/aria-pressed=/g) || []).length, 6, 'All six GHL workflows remain selectable');
assert.equal((ghl.match(/aria-expanded="false"/g) || []).length, 1, 'Only the selected GHL workflow starts collapsed');
console.log('PASS: Compact project, dental case-study, and GHL previews; disclosure accessibility associations and deferred content.');

for (const id of detailIds) {
  const study = resolveCaseStudy(id);
  const details = renderToStaticMarkup(createElement(CaseStudy, { data: study, embedded: true }));
  assert.ok(!details.includes('src="' + study.heroScreenshot.imageUrl + '"'), id + ' must not repeat primary screenshot');
  assert.ok(!/<h[123][\s>]/.test(details), id + ' must not repeat project title');
  assert.equal((details.match(/>Tech Stack</g) || []).length, 1, id + ' has one tech stack');
  assert.equal((details.match(/Discuss this on a discovery call/g) || []).length, 1, id + ' has one discovery CTA');
}
console.log('PASS: All six detail bodies omit primary screenshots and repeated project headers, with one tech stack and discovery CTA.');

const disclosure = 'Independent portfolio demonstration — Built and tested with fictional sample data. The results below describe workflow tests, not measured client revenue or time savings.';
const observed = 'Observed test results: A fictional website inquiry was classified as Medium priority and created in HubSpot, returning a Contact ID. Slack workflow-error notification delivery was also verified.';
assert.equal(PROJECTS_DATA[0].id, 'proj-7', 'HubSpot must lead the portfolio');
assert.equal(PROJECTS_DATA.at(-1).id, 'proj-2', 'Jobs demo follows service-business automations');
assert.equal(resolveCaseStudy('proj-7').businessValue.summary, observed);
assert.ok(projects.includes(observed), 'HubSpot test result is visible without expanding a card');
assert.equal(projects.split(disclosure).length - 1, PROJECTS_DATA.length, 'Every collapsed demo shows the exact disclosure');
assert.ok(ghl.includes(disclosure), 'GHL demos show the disclosure');
for (const id of detailIds) {
  const html = renderToStaticMarkup(createElement(CaseStudy, { data: resolveCaseStudy(id) }));
  assert.ok(html.includes(disclosure));
  assert.doesNotMatch(html.replace(/<[^>]*>/g, ''), /99[.]9%|98[.]5%|85%|100%|45,000|140\+|68%|zero downtime/i);
}
const footer = readFileSync('src/components/Footer.tsx', 'utf8');
assert.ok(footer.includes('href="https://www.linkedin.com/in/yasser-u-98b310364/"'));
assert.ok(!footer.includes('Request LinkedIn Profile'));
assert.ok(!readFileSync('src/App.tsx', 'utf8').includes('<TestimonialsSection'));
console.log('PASS: Audit positioning, project order, exact disclosures and observed results, removed metrics, and LinkedIn URL.');
