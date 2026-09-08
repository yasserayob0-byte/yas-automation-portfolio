import { useState } from 'react';
import Preloader from './components/Preloader';
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
import { FB_MESSENGER_CASE_STUDY, CASE_STUDIES_MAP } from './data/caseStudiesData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contactTopic, setContactTopic] = useState<string>('');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const handleOpenContact = (topic?: string) => {
    if (activeCaseStudyId) {
      setActiveCaseStudyId(null);
      setTimeout(() => {
        if (topic) setContactTopic(topic);
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    if (topic) setContactTopic(topic);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWorkflows = () => {
    const el = document.getElementById('ghl-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (activeCaseStudyId) {
    const currentCaseStudy = CASE_STUDIES_MAP[activeCaseStudyId] || FB_MESSENGER_CASE_STUDY;

    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
        <CustomCursor />
        <CaseStudyTemplate
          data={currentCaseStudy}
          onBack={() => {
            setActiveCaseStudyId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateProject={(projId) => {
            setActiveCaseStudyId(projId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onContactClick={(topic) => handleOpenContact(topic)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Modern Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Subtle Animated Backgrounds & Node Canvas */}
      <BackgroundEffects />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="relative z-10">
        {/* Hero Section with Live Pipeline Visualizer */}
        <HeroSection
          onExploreWorkflows={handleExploreWorkflows}
          onBookAudit={() => handleOpenContact('Enterprise Systems Audit')}
        />

        {/* About Agency & Architect Section */}
        <AboutSection onTalkWithYasser={() => handleOpenContact('Consultation with Yasser Usman')} />

        {/* Services & Capabilities */}
        <ServicesSection onSelectService={(srv) => handleOpenContact(`Service: ${srv}`)} />

        {/* GoHighLevel Apple-Style Horizontal Showcase */}
        <GoHighLevelShowcase onConsultWorkflow={(wf) => handleOpenContact(`GoHighLevel Workflow: ${wf}`)} />

        {/* Projects / Solutions Repository */}
        <ProjectsSection
          onSelectProjectForAudit={(proj) => handleOpenContact(`Project Deployment: ${proj}`)}
          onOpenCaseStudy={(projId) => {
            setActiveCaseStudyId(projId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Floating Tech Stack with 3D Tilt & Glow */}
        <TechStackSection />

        {/* Why Automation Matters & ROI Calculator */}
        <WhyAutomationMatters />

        {/* Enterprise Testimonials & Case Studies */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Systems Audit Discovery */}
        <ContactSection initialTopic={contactTopic} />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
