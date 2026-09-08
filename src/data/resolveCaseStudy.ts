import { CASE_STUDIES_MAP } from './caseStudiesData';
import { PROJECTS_DATA } from './portfolioData';
import type { CaseStudyData } from '../types';
import receptionistImage from '../assets/images/ai_receptionist.jpg';

/** Complete the receptionist detail view from its existing project record. */
export function resolveCaseStudy(id: string): CaseStudyData | null {
  if (Object.hasOwn(CASE_STUDIES_MAP, id)) return CASE_STUDIES_MAP[id];
  const project = PROJECTS_DATA.find(item => item.id === id);
  if (!project || id !== 'proj-6') return null;
  return {
    id: project.id, title: project.title, tagline: project.shortDescription,
    clientType: project.clientType, category: project.category,
    heroScreenshot: { imageUrl: receptionistImage, title: project.browserTitle, caption: project.shortDescription, badge: 'Workflow screenshot', browserUrl: project.browserUrl },
    overview: { executiveSummary: project.fullOverview, scopeHighlights: project.solutionArchitecture },
    challenge: { summary: project.problemSolved, frictionPoints: [{ title: 'Missed calls and manual bookings', description: project.problemSolved }] },
    solution: { summary: project.fullOverview, corePillars: project.flowSteps.map(step => ({ title: step.title, description: step.description })) },
    architecture: { description: project.fullOverview, steps: project.flowSteps.map((step, index) => ({ ...step, stepNumber: String(index + 1).padStart(2, '0') })) },
    features: project.flowSteps.map(step => ({ title: step.title, description: step.description, tag: step.tech })),
    techStack: project.techStack.map(name => ({ name, category: 'Integration', role: project.flowSteps.filter(step => step.tech.includes(name)).map(step => step.description).join(' ') || project.browserTitle })),
    businessValue: { summary: project.shortDescription, metrics: project.metrics },
    gallery: [{ id: 'receptionist-workflow', title: project.browserTitle, category: project.category, imageUrl: receptionistImage, caption: project.fullOverview }],
    prevProject: { id: 'proj-5', title: 'Dental Clinic Patient Journey Automation', category: 'GoHighLevel' },
    nextProject: { id: 'proj-1', title: 'AI-Powered Facebook Messenger Support Agent', category: 'AI Agents' }
  };
}
