import { ArrowRight, Workflow, ChartNoAxesCombined, Bot, Cable } from 'lucide-react';
import { motion } from 'motion/react';
import { useMotionPreference } from './MotionPreferences';
import './ServicesPreview.css';
const services = [
  { title: 'Workflow Automation', description: 'Automate repetitive tasks and streamline your operations.', icon: Workflow },
  { title: 'CRM Automation', description: 'Set up and optimize GoHighLevel CRM workflows and lead pipelines.', icon: ChartNoAxesCombined },
  { title: 'AI Agents', description: 'Build AI voice, chat, and data automation agents.', icon: Bot },
  { title: 'API Integrations', description: 'Connect your tools and systems with custom integrations.', icon: Cable },
];
export default function ServicesPreview({ onSelectService }: { onSelectService: (service: string) => void }) {
  const { enabled } = useMotionPreference();
  return <section id="services-preview" className="agency-services" aria-labelledby="services-preview-title"><div className="agency-width">
    <p className="agency-services-eyebrow">WHAT I DO</p>
    <div className="agency-services-heading"><h2 id="services-preview-title">Automation Solutions for Modern Businesses</h2><a href="#services">View All Services <ArrowRight size={15} aria-hidden="true" /></a></div>
    <div className="agency-services-grid">{services.map(({ title, description, icon: Icon }, index) => <motion.button key={title} type="button" onClick={() => onSelectService(title)} className="agency-service" initial={enabled ? { opacity: 0, y: 12 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: enabled ? .5 : 0, delay: enabled ? index * .06 : 0 }}>
      <span className="agency-service-icon"><Icon size={26} strokeWidth={1.6} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><ArrowRight className="agency-service-arrow" size={17} aria-hidden="true" />
    </motion.button>)}</div>
  </div></section>;
}
