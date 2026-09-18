import type { ReactNode } from 'react';
import type { CaseStudyData } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TechnologyLogo } from './BrandLogos';
import DiscoveryCallButton from './DiscoveryCallButton';

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

/** One detail body for inline cards and dedicated case-study routes. */
export default function WorkflowDetails({ study }: { study: CaseStudyData }) {
  const project = PROJECTS_DATA.find(item => item.id === study.id);
  const seen = new Set([study.title, study.tagline, study.category || '', project?.shortDescription || ''].map(normalize));
  const unique = (texts: (string | undefined)[]) => texts.filter((text): text is string => {
    if (!text?.trim() || seen.has(normalize(text))) return false;
    seen.add(normalize(text));
    return true;
  });
  const paragraphs = (texts: (string | undefined)[]) => unique(texts).map(text => <p key={text} className="text-sm text-slate-300 leading-relaxed">{text}</p>);
  const note = (item: { title: string; description: string; tag?: string }) => {
    const text = paragraphs([item.description]);
    return text.length ? <div key={item.title} className="space-y-2"><h5 className="text-sm font-semibold text-white">{item.title}</h5>{text}{item.tag && <span className="text-xs text-slate-400">{item.tag}</span>}</div> : null;
  };
  const section = (title: string, content: ReactNode) => <section className="space-y-4"><h4 className="text-lg font-bold font-heading text-cyan-300">{title}</h4>{content}</section>;
  // Reserve process descriptions so identical feature/pillar entries appear only here.
  const steps = study.architecture.steps;
  steps.forEach(step => seen.add(normalize(step.description)));
  const tech = [...study.techStack];
  for (const name of project?.techStack || []) if (!tech.some(item => normalize(item.name) === normalize(name))) tech.push({ name, category: 'Integration', role: '' });
  const metricKeys = new Set<string>();
  const metrics = study.businessValue.metrics.filter(metric => {
    const key = normalize(metric.label);
    if (metricKeys.has(key)) return false;
    metricKeys.add(key); return true;
  });
  const images = new Set([study.heroScreenshot.imageUrl]);
  const gallery = study.gallery.filter(item => {
    if (!item.imageUrl || images.has(item.imageUrl)) return false;
    images.add(item.imageUrl); return true;
  });
  return <div className="p-6 sm:p-8 space-y-8 min-w-0">
    {section('Business Problem', <>{paragraphs([study.challenge.summary])}{study.challenge.frictionPoints.map(note)}</>)}
    {section('Automation Solution', <>{paragraphs([study.solution.summary])}{study.solution.corePillars.map(note)}{paragraphs([...(study.overview.scopeHighlights || [])])}</>)}
    {section('Workflow Architecture / Process', <>{paragraphs([study.architecture.description, study.technicalOverview])}
      <h5 className="text-sm font-semibold text-white">Key Steps</h5>
      <ol className="grid sm:grid-cols-2 gap-4">{steps.map((step, index) => <li key={step.stepNumber} className="min-w-0 p-4 rounded-xl bg-slate-900/60 border border-slate-800"><h6 className="font-semibold text-cyan-300">{index + 1}. {step.title}</h6><p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.description}</p></li>)}</ol>
      {study.workflowModules?.map(note)}
      {study.features.map(note)}
      {study.skillsDemonstrated && <div className="flex flex-wrap gap-2">{unique(study.skillsDemonstrated).map(skill => <span key={skill} className="text-xs text-slate-300 border border-slate-800 rounded-lg px-3 py-2">{skill}</span>)}</div>}
    </>)}
    {section('Tech Stack', <ul className="grid sm:grid-cols-2 gap-3">{tech.map(item => <li key={item.name} className="flex gap-3 min-w-0 p-4 rounded-xl border border-slate-800 bg-slate-900/60"><TechnologyLogo name={item.name} className="w-6 h-6 shrink-0" /><div><h5 className="font-semibold text-white">{item.name}</h5>{paragraphs([item.role])}</div></li>)}</ul>)}
    {section('Business Impact / Results', <>{paragraphs([study.businessValue.summary, study.whyItMatters])}<div className="grid sm:grid-cols-3 gap-3">{metrics.map(metric => <div key={metric.label} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60"><div className="font-bold text-xl text-cyan-300">{metric.value}</div><h5 className="text-sm text-white mt-1">{metric.label}</h5>{paragraphs([metric.description])}</div>)}</div></>)}
    {gallery.length > 0 && section('Additional Screenshots', <div className="grid sm:grid-cols-2 gap-4">{gallery.map(item => <figure key={item.id}><a href={item.imageUrl} target="_blank" rel="noreferrer" aria-label={'Open full screenshot: ' + item.title} className="block rounded-xl focus-visible:outline-2 focus-visible:outline-cyan-300"><img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" className="w-full h-auto rounded-xl border border-slate-800" /></a><figcaption className="mt-2 text-sm text-slate-400">{item.caption}</figcaption></figure>)}</div>)}
    <DiscoveryCallButton className="inline-flex px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">Discuss this on a discovery call</DiscoveryCallButton>
  </div>;
}
