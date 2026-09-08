import { useEffect, useMemo, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GoHighLevelShowcase from './components/GoHighLevelShowcase';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import WhyAutomationMatters from './components/WhyAutomationMatters';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyTemplate from './components/CaseStudyTemplate';
import { resolveCaseStudy } from './data/resolveCaseStudy';
import { focusSection } from './components/navigation';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [contactTopic, setContactTopic] = useState('');
  const returnPoint = useRef<{ top: number; projectId: string; hash: string } | null>(null);
  const previousCase = useRef(false);
  const originalTitle = useRef(document.title);
  const originalDescription = useRef(document.querySelector('meta[name="description"]')?.getAttribute('content') || '');
  const caseId = hash.startsWith('#case-study/') ? hash.slice('#case-study/'.length) : '';
  const study = useMemo(() => caseId ? resolveCaseStudy(caseId) : null, [caseId]);

  useEffect(() => {
    const change = () => setHash(window.location.hash);
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);

  useEffect(() => {
    document.title = study ? `${study.title} | YAS Automation` : originalTitle.current;
    document.querySelector('meta[name="description"]')?.setAttribute('content', study?.tagline || originalDescription.current);
    const wasCase = previousCase.current;
    previousCase.current = !!study;
    const frame = requestAnimationFrame(() => {
      if (study) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('case-study-content')?.focus({ preventScroll: true });
      } else if (wasCase && returnPoint.current && (hash === '#projects' || hash === returnPoint.current.hash)) {
        window.scrollTo({ top: returnPoint.current.top, behavior: 'instant' });
        document.getElementById(`case-link-${returnPoint.current.projectId}`)?.focus({ preventScroll: true });
      } else if (hash && !caseId) {
        focusSection(hash.slice(1));
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, caseId, study?.id]);

  const navigateSection = (id: string) => {
    if (window.location.hash === `#${id}`) focusSection(id);
    else window.location.hash = id;
  };
  const handleOpenContact = (topic = '') => {
    setContactTopic(topic);
    navigateSection('contact');
  };
  const openCase = (id: string) => {
    if (!resolveCaseStudy(id)) return;
    if (!study) returnPoint.current = { top: window.scrollY, projectId: id, hash: window.location.hash };
    window.location.hash = `case-study/${id}`;
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-clip">
      <CustomCursor />
      <BackgroundEffects />
      <a onClick={(event) => { event.preventDefault(); focusSection(study ? 'case-study-content' : 'main-content'); }} href={study ? '#case-study-content' : '#main-content'} className="skip-link">Skip to content</a>
      <div hidden={!!study}>
        <Navbar onOpenContact={handleOpenContact} />
        <main id="main-content" tabIndex={-1} className="relative z-10">
          {caseId && !study && <div role="status" className="pt-28 px-6 text-center text-slate-300">That case study is unavailable. <a href="#projects" className="text-cyan-300 underline">Browse all projects</a>.</div>}
          <HeroSection onExploreWorkflows={() => navigateSection('ghl-showcase')} onBookAudit={() => handleOpenContact('Automation Project Consultation')} />
          <ProjectsSection onSelectProjectForAudit={(project) => handleOpenContact(`Project: ${project}`)} onOpenCaseStudy={openCase} />
          <ServicesSection onSelectService={(service) => handleOpenContact(`Service: ${service}`)} />
          <GoHighLevelShowcase onConsultWorkflow={(workflow) => handleOpenContact(`GoHighLevel Workflow: ${workflow}`)} />
          <AboutSection onTalkWithYasser={() => handleOpenContact('Consultation with Yasser Usman')} />
          <TechStackSection />
          <WhyAutomationMatters />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection initialTopic={contactTopic} />
        </main>
      </div>
      {study && <main id="case-study-content" tabIndex={-1} className="relative z-10"><CaseStudyTemplate key={study.id} data={study} onBack={() => navigateSection('projects')} onNavigateProject={openCase} onContactClick={handleOpenContact} /></main>}
      <Footer />
    </div>
  );
}
