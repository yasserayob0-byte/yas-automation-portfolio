import fbMessengerImg from '../assets/images/fb_messenger_n8n_1787549985295.jpg';
import jobScraperImg from '../assets/images/job_scraper_n8n_1787550004053.jpg';
import leadCrmImg from '../assets/images/lead_crm_n8n_1787550019778.jpg';
import emailSupportImg from '../assets/images/email_support_n8n_1787550036780.jpg';
import ghlDentalImg from '../assets/images/ghl_dental_flow_1787550053544.jpg';
import aiReceptionistImg from '../assets/images/ai_receptionist.jpg';
interface ProjectVisualItem {
  id: string;
  img: string;
  title: string;
  category: string;
  tag: string;
}

export const PROJECT_ITEMS: ProjectVisualItem[] = [
  {
    id: 'proj-1',
    img: fbMessengerImg,
    title: 'AI-Powered Facebook Messenger Support Agent (n8n Execution)',
    category: 'AI Agents',
    tag: 'Succeeded in 6.289s'
  },
  {
    id: 'proj-2',
    img: jobScraperImg,
    title: 'AI Jobs Scraper + Resume Optimizer (n8n Canvas)',
    category: 'n8n Workflow',
    tag: 'Published • Live Pipeline'
  },
  {
    id: 'proj-4',
    img: leadCrmImg,
    title: 'End-to-End AI Lead Qualification & CRM Automation (n8n Workflow)',
    category: 'CRM Automation',
    tag: 'Executed Successfully'
  },
  {
    id: 'proj-3',
    img: emailSupportImg,
    title: 'AI Email Support Automation (n8n Cloud Canvas)',
    category: 'Custom APIs',
    tag: 'Success in 333ms'
  },
  {
    id: 'proj-5',
    img: ghlDentalImg,
    title: 'Dental Clinic Patient Journey Automation (GoHighLevel Suite)',
    category: 'GoHighLevel CRM',
    tag: '94.2% Show-Up Rate'
  },
{
  id: 'proj-6',
  img: aiReceptionistImg,
  title: 'AI Receptionist & Appointment Booking Automation',
  category: 'n8n AI Workflow',
  tag: 'Complex AI Workflow'
},
];
export const PROJECT_IMAGE_MAP: Record<string, ProjectVisualItem> = {
  'proj-1': PROJECT_ITEMS[0],
  'ai-messenger-agent': PROJECT_ITEMS[0],
  'proj-2': PROJECT_ITEMS[1],
  'ai-job-scraper': PROJECT_ITEMS[1],
  'proj-4': PROJECT_ITEMS[2],
  'ai-lead-qualification': PROJECT_ITEMS[2],
  'proj-3': PROJECT_ITEMS[3],
  'ai-email-support': PROJECT_ITEMS[3],
  'proj-5': PROJECT_ITEMS[4],
  'dental-patient-journey': PROJECT_ITEMS[4],
  'ghl-dental': PROJECT_ITEMS[4],
  'proj-6': PROJECT_ITEMS[5],
'ai-receptionist': PROJECT_ITEMS[5],
};

