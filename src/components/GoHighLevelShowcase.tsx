import WorkflowDisclosure from './WorkflowDisclosure';
import Section from './Section';
import { useMotionPreference } from './MotionPreferences';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  UserX,
  Star,
  CheckCircle2,
  Mail,
  MessageSquare,
  Layers,
  FileCheck
} from 'lucide-react';
import { GhlLogo } from './BrandLogos';
import workflow1Img from '../assets/images/ghl-workflow-1.jpg';
import workflow2Img from '../assets/images/ghl-workflow-2.jpg';
import workflow3Img from '../assets/images/ghl-workflow-3.jpg';
import workflow4Img from '../assets/images/ghl-workflow-4.jpg';
import workflow5Img from '../assets/images/ghl-workflow-5.jpg';
import workflow6Img from '../assets/images/ghl-workflow-6.jpg';

interface GoHighLevelShowcaseProps {
  onConsultWorkflow: (workflowTitle: string) => void;
}

interface WorkflowSlide {
  id: string;
  stepNum: string;
  title: string;
  category: string;
  image: string;
  description: string;
  impactMetric: { label: string; value: string; trend: string };
  trigger: string;
  actions: string[];
  nodes: {
    id: string;
    label: string;
    type: 'trigger' | 'action' | 'wait' | 'condition' | 'review';
    icon: LucideIcon;
    desc: string;
    tag: string;
  }[];
}

const WORKFLOW_SLIDES: WorkflowSlide[] = [
  {
    id: 'ghl-lead-capture',
    stepNum: '01',
    title: 'Lead Capture & Patient Intake',
    category: 'Lead Management',
    image: workflow1Img,
    description:
      'Captures new patient inquiries from the booking form, creates or updates the contact record, and prepares the patient for the appointment process.',
    impactMetric: {
      label: 'Lead Response',
      value: 'Instant',
      trend: '+100%',
    },
    trigger: 'Patient submits Dental Appointment Form',
    actions: [
      'Capture Patient Information',
      'Create / Update Contact',
      'Apply Patient Tags',
      'Prepare CRM Record',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Form Submitted',
        type: 'trigger',
        icon: FileCheck,
        desc: 'Patient submits booking form.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: 'Create Contact',
        type: 'action',
        icon: UserX,
        desc: 'Creates or updates CRM contact.',
        tag: 'CRM',
      },
      {
        id: 'n3',
        label: 'Apply Tags',
        type: 'action',
        icon: Star,
        desc: 'Assigns automation tags.',
        tag: 'Automation',
      },
    ],
  },

  {
    id: 'ghl-confirmation',
    stepNum: '02',
    title: 'Appointment Confirmation',
    category: 'Booking Confirmation',
    image: workflow2Img,
    description:
      'Automatically confirms appointments, updates pipeline stages, removes temporary tags, and sends confirmation SMS and email.',
    impactMetric: {
      label: 'Confirmation Rate',
      value: '100%',
      trend: '+95%',
    },
    trigger: 'Appointment Status = Confirmed',
    actions: [
      'Update Opportunity',
      'Remove Temporary Tags',
      'Send Confirmation SMS',
      'Send Confirmation Email',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Appointment Confirmed',
        type: 'trigger',
        icon: Calendar,
        desc: 'Appointment is confirmed.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: 'Update Opportunity',
        type: 'action',
        icon: Layers,
        desc: 'Moves contact to confirmed stage.',
        tag: 'Pipeline',
      },
      {
        id: 'n3',
        label: 'Confirmation SMS',
        type: 'action',
        icon: MessageSquare,
        desc: 'Patient receives confirmation SMS.',
        tag: 'SMS',
      },
      {
        id: 'n4',
        label: 'Confirmation Email',
        type: 'action',
        icon: Mail,
        desc: 'Patient receives confirmation email.',
        tag: 'Email',
      },
    ],
  },

  {
    id: 'ghl-reminder',
    stepNum: '03',
    title: 'Appointment Reminder',
    category: 'Reminder Automation',
    image: workflow3Img,
    description:
      'Automatically reminds patients 24 hours and 2 hours before their appointment to reduce missed visits.',
    impactMetric: {
      label: 'No-Show Reduction',
      value: '24h + 2h',
      trend: '-40%',
    },
    trigger: 'Upcoming Appointment',
    actions: [
      'Wait 24 Hours',
      'Send Reminder SMS',
      'Wait 2 Hours',
      'Final Reminder SMS',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Appointment Confirmed',
        type: 'trigger',
        icon: Calendar,
        desc: 'Appointment has been confirmed.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: '24 Hour Wait',
        type: 'wait',
        icon: Clock,
        desc: 'Wait until 24 hours before appointment.',
        tag: 'Wait',
      },
      {
        id: 'n3',
        label: 'Reminder SMS',
        type: 'action',
        icon: MessageSquare,
        desc: 'Send first reminder.',
        tag: 'SMS',
      },
      {
        id: 'n4',
        label: '2 Hour Wait',
        type: 'wait',
        icon: Clock,
        desc: 'Wait until 2 hours before appointment.',
        tag: 'Wait',
      },
      {
        id: 'n5',
        label: 'Final Reminder',
        type: 'action',
        icon: MessageSquare,
        desc: 'Final reminder before appointment.',
        tag: 'SMS',
      },
    ],
  },

  {
    id: 'ghl-cancel',
    stepNum: '04',
    title: 'Appointment Cancellation Handling',
    category: 'Cancellation Recovery',
    image: workflow4Img,
    description:
      'Handles cancelled appointments by updating CRM records, notifying patients, and encouraging them to book another appointment.',
    impactMetric: {
      label: 'Rebooking',
      value: 'Automatic',
      trend: '+35%',
    },
    trigger: 'Appointment Status = Cancelled',
    actions: [
      'Apply Cancellation Tag',
      'Update Opportunity',
      'Send Cancellation SMS',
      'Send Rebooking Email',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Appointment Cancelled',
        type: 'trigger',
        icon: Calendar,
        desc: 'Cancellation detected.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: 'Cancellation SMS',
        type: 'action',
        icon: MessageSquare,
        desc: 'Notify patient of cancellation.',
        tag: 'SMS',
      },
      {
        id: 'n3',
        label: 'Rebooking Email',
        type: 'action',
        icon: Mail,
        desc: 'Encourage patient to book again.',
        tag: 'Email',
      },
    ],
  },

  {
    id: 'ghl-noshow',
    stepNum: '05',
    title: 'No-Show Recovery',
    category: 'Patient Recovery',
    image: workflow5Img,
    description:
      'Detects missed appointments and automatically launches SMS and email recovery campaigns encouraging patients to reschedule.',
    impactMetric: {
      label: 'Recovery Rate',
      value: 'Automated',
      trend: '+50%',
    },
    trigger: 'Appointment Status = No Show',
    actions: [
      'Apply No Show Tag',
      'Update Opportunity',
      'Send Recovery SMS',
      'Send Rebooking Email',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Patient No Show',
        type: 'trigger',
        icon: Calendar,
        desc: 'Patient missed appointment.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: 'Recovery SMS',
        type: 'action',
        icon: MessageSquare,
        desc: 'Invite patient back.',
        tag: 'SMS',
      },
      {
        id: 'n3',
        label: 'Recovery Email',
        type: 'action',
        icon: Mail,
        desc: 'Send rescheduling email.',
        tag: 'Email',
      },
    ],
  },

  {
    id: 'ghl-followup',
    stepNum: '06',
    title: 'Post Appointment Follow-up',
    category: 'Patient Retention',
    image: workflow6Img,
    description:
      'Sends thank-you messages and feedback requests after successful appointments to improve patient retention and satisfaction.',
    impactMetric: {
      label: 'Patient Engagement',
      value: 'Post Visit',
      trend: '+60%',
    },
    trigger: 'Appointment Completed',
    actions: [
      'Remove Tags',
      'Wait',
      'Send Thank You SMS',
      'Send Feedback Email',
    ],
    nodes: [
      {
        id: 'n1',
        label: 'Appointment Completed',
        type: 'trigger',
        icon: CheckCircle2,
        desc: 'Appointment successfully completed.',
        tag: 'Trigger',
      },
      {
        id: 'n2',
        label: 'Thank You SMS',
        type: 'action',
        icon: MessageSquare,
        desc: 'Send appreciation message.',
        tag: 'SMS',
      },
      {
        id: 'n3',
        label: 'Feedback Email',
        type: 'action',
        icon: Mail,
        desc: 'Collect patient feedback.',
        tag: 'Email',
      },
    ],
  },
];

const WORKFLOW_PROBLEMS: Record<string, string> = {
  'ghl-lead-capture': 'Manual intake leaves staff transferring patient inquiries into the CRM before appointment handling can begin.',
  'ghl-confirmation': 'Staff need to confirm new bookings and keep patients informed without sending each confirmation manually.',
  'ghl-reminder': 'Patients can forget upcoming appointments, while manual reminders add work for clinic staff.',
  'ghl-cancel': 'Cancellations require timely updates so staff and patient records remain aligned.',
  'ghl-noshow': 'Missed appointments need a consistent follow-up process to help patients rebook.',
  'ghl-followup': 'Post-appointment communication and feedback requests can be missed when follow-up depends on manual work.',
};

const TECH_BADGES = ['GoHighLevel', 'CRM', 'Workflow Automation', 'Email', 'SMS'];

export default function GoHighLevelShowcase({ onConsultWorkflow }: GoHighLevelShowcaseProps) {
  const { enabled: motionEnabled } = useMotionPreference();
  const reduceMotion = !motionEnabled;
  const slideNavRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selected = slideNavRef.current?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (selected && slideNavRef.current) slideNavRef.current.scrollTo({ left: selected.offsetLeft - slideNavRef.current.offsetLeft - 12, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [currentIndex, reduceMotion]);

  const activeSlide = WORKFLOW_SLIDES[currentIndex];
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % WORKFLOW_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + WORKFLOW_SLIDES.length) % WORKFLOW_SLIDES.length);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Section timing={0.08} id="ghl-showcase" className="py-24 relative overflow-hidden bg-slate-950/70 border-y border-slate-800/80">
      {/* Soft Apple-inspired ambient glowing background orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Dental Clinic Patient Journey Showcase */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
              <GhlLogo className="w-3.5 h-3.5" />
              <span>GOHIGHLEVEL SHOWCASE</span>
            </div>
            
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Keep Patients Moving From Inquiry to Appointment
            </motion.h2>
            
            <p className="text-base sm:text-lg text-cyan-300 font-medium mt-2 max-w-2xl">
              Help clinic staff manage bookings, reminders, cancellations, and follow-up through six connected GoHighLevel workflows.
            </p>
          </div>

          {/* Slider Prev / Next Controls & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous workflow slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-slate-400 px-2 select-none">
              <span className="text-cyan-400 font-bold text-sm">0{currentIndex + 1}</span> / 0{WORKFLOW_SLIDES.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Next workflow slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Pills with Category Indicators */}
        <div ref={slideNavRef} aria-label="Choose patient journey workflow" className="relative flex items-center gap-2 overflow-x-auto px-1 py-2 mb-8 scrollbar-none">
          {WORKFLOW_SLIDES.map((slide, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={slide.id}
                aria-pressed={isSelected}
                onClick={() => handleSelectSlide(idx)}
                className={`h-12 shrink-0 px-3 py-3 rounded-2xl text-xs leading-5 font-semibold whitespace-nowrap transition-colors duration-300 cursor-pointer inline-flex items-center justify-center gap-2 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:bg-slate-800'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{slide.stepNum}.</span>
                <span>{slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Slide Stage (Glassmorphism + Apple Card) */}
        <div className="relative" role="region" aria-label="Patient journey workflows" aria-roledescription="carousel">
          <p className="sr-only" aria-live="polite">Workflow {currentIndex + 1} of {WORKFLOW_SLIDES.length}: {activeSlide.title}</p>
          <WorkflowDisclosure key={activeSlide.id} id={'ghl-' + activeSlide.id} title={activeSlide.title} category={activeSlide.category} summary={activeSlide.description} image={activeSlide.image}>
          <div className="p-6 sm:p-8 space-y-8">
            <section className="space-y-3"><h4 className="text-lg font-bold text-cyan-300">Business Problem</h4><p className="text-sm text-slate-300 leading-relaxed">{WORKFLOW_PROBLEMS[activeSlide.id]}</p></section>
            <section className="space-y-3"><h4 className="text-lg font-bold text-cyan-300">Automation Solution</h4><ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">{activeSlide.actions.map(action => <li key={action}>{action}</li>)}</ul></section>
            <section className="space-y-3"><h4 className="text-lg font-bold text-cyan-300">Workflow Architecture / Process</h4><p className="text-sm text-slate-300"><span className="font-semibold text-white">Trigger: </span>{activeSlide.trigger}</p></section>
            <section className="space-y-4"><h4 className="text-lg font-bold text-cyan-300">Key Steps</h4><ol className="grid sm:grid-cols-2 gap-4">{activeSlide.nodes.map(node => <li key={node.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"><div className="flex gap-2 items-center text-cyan-300"><node.icon aria-hidden="true" className="w-4 h-4 shrink-0" /><h5 className="font-semibold">{node.label}</h5></div><p className="mt-2 text-sm text-slate-300">{node.desc}</p><span className="text-xs font-mono text-slate-400">{node.tag}</span></li>)}</ol></section>
            <section className="space-y-3"><h4 className="text-lg font-bold text-cyan-300">Tech Stack</h4><div className="flex flex-wrap gap-2">{TECH_BADGES.map(tech => <span key={tech} className="px-3 py-1 rounded-lg border border-slate-800 text-sm text-slate-300">{tech}</span>)}</div></section>
            <section className="space-y-3"><h4 className="text-lg font-bold text-cyan-300">Business Impact / Results</h4><div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"><p className="text-xl font-bold text-cyan-300">{activeSlide.impactMetric.value}</p><p className="text-sm text-white">{activeSlide.impactMetric.label}</p><p className="text-sm text-slate-400">{activeSlide.impactMetric.trend}</p></div></section>
            <button onClick={() => onConsultWorkflow('Dental Clinic Patient Journey: ' + activeSlide.title)} className="px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">Consult on This Workflow</button>
          </div>
          </WorkflowDisclosure>
        </div>

      </div>
    </Section>
  );
}
