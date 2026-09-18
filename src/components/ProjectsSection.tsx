import Section from './Section';
import { lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { PROJECT_BUSINESS_STORIES } from '../data/businessMessaging';
import { PROJECTS_DATA } from '../data/portfolioData';
import { PROJECT_IMAGE_MAP } from '../data/projectScreenshots';
import { resolveCaseStudy } from '../data/resolveCaseStudy';
import WorkflowDisclosure from './WorkflowDisclosure';
import CaseStudyBoundary from './CaseStudyBoundary';
const CaseStudyTemplate = lazy(() => import('./CaseStudyTemplate'));
interface ProjectsSectionProps {
  onSelectProjectForAudit: (projectName: string) => void;
  onOpenCaseStudy?: (projectId: string) => void;
}
export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'n8n', 'AI Agents', 'GoHighLevel', 'Custom APIs'];
  const filteredProjects = activeCategory === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p =>
    p.category === activeCategory || (activeCategory === 'n8n' && p.techStack.includes('n8n')) ||
    (activeCategory === 'GoHighLevel' && p.techStack.includes('GoHighLevel')));
  return <Section timing={0} id="projects" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="section-intro text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED AUTOMATION SOLUTIONS</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            See What Your Team Could Stop Doing Manually.
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-400">
            Explore real workflow screenshots, the problems each system solves, and how the integrations work. Project metrics are reported outcomes, not guarantees for a new deployment.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {filteredProjects.map(project => {
          const study = resolveCaseStudy(project.id);
          return <WorkflowDisclosure key={project.id} id={project.id} triggerId={'case-link-' + project.id} image={PROJECT_IMAGE_MAP[project.id].img}
            category={project.category} title={PROJECT_BUSINESS_STORIES[project.id]?.headline ?? project.title} summary={project.shortDescription}>
            {study && <CaseStudyBoundary><Suspense fallback={<p role="status" className="p-6 text-slate-300">Loading case study...</p>}><CaseStudyTemplate data={study} embedded onNavigateProject={onOpenCaseStudy} /></Suspense></CaseStudyBoundary>}
          </WorkflowDisclosure>;
        })}
      </div>
    </div>
  </Section>;
}
