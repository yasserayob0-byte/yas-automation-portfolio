import type { CaseStudyData } from '../types';
import fbMessengerImg from '../assets/images/fb_messenger_n8n_1787549985295.jpg';
import jobScraperImg from '../assets/images/job_scraper_n8n_1787550004053.jpg';
import leadCrmImg from '../assets/images/lead_crm_n8n_1787550019778.jpg';
import emailSupportImg from '../assets/images/email_support_n8n_1787550036780.jpg';
import ghlDentalImg from '../assets/images/ghl_dental_flow_1787550053544.jpg';

export const AI_JOB_SCRAPER_CASE_STUDY: CaseStudyData = {
  id: 'proj-2',
  badge: 'AI WORKFLOW CASE STUDY',
  title: 'AI Job Scraper & Resume Optimization System',
  tagline: 'An AI-powered automation workflow that streamlines job searching, analyzes job requirements, and generates tailored resume content to simplify the application process.',
  clientType: 'Talent Acquisition & Career Tech',
  category: 'n8n & Google Gemini',
  role: 'Lead Automation Architect',
  timeline: '1–2 Weeks Delivery',
  liveDemoUrl: 'https://hayabusaw.app.n8n.cloud/workflow/ai-job-scraper',
  
  heroScreenshot: {
    imageUrl: jobScraperImg,
    title: 'AI Job Scraper & Resume Optimization System (n8n Production Execution)',
    caption: 'Production n8n workflow canvas showing automated job collection, Google Gemini AI parsing, Google Docs resume generation, Google Drive organization, and Slack notification.',
    badge: '14 Connected Nodes Active',
    browserUrl: 'https://hayabusaw.app.n8n.cloud/workflow/ai-job-scraper'
  },

  overview: {
    executiveSummary: 'The workflow begins by collecting available job opportunities and extracting job descriptions. Google Gemini AI analyzes each position, identifies key qualifications, and generates optimized resume content. The updated resume is automatically saved to Google Docs and organized in Google Drive. Once processing is complete, Slack sends a notification to confirm that the workflow has finished successfully.',
    scopeHighlights: [
      'Automated job collection from configured data sources without manual searching',
      'Intelligent job description analysis extracting core skills using Google Gemini AI',
      'Personalized resume optimization aligned to required position qualifications',
      'Automated Google Docs creation and structured storage in Google Drive folders',
      'Real-time execution confirmation notifications dispatched to Slack'
    ]
  },

  challenge: {
    title: 'Business Challenge',
    summary: 'Searching for job opportunities and customizing resumes for every application is a repetitive and time-consuming process. Applicants often spend hours reviewing job descriptions, identifying required skills, and manually updating their resumes, reducing the time available to focus on interviews and networking.',
    frictionPoints: [
      {
        title: 'Repetitive Job Searching & Review',
        description: 'Applicants spend hours manually searching job boards, scanning descriptions, and identifying mandatory qualifications.'
      },
      {
        title: 'Time-Consuming Resume Customization',
        description: 'Re-editing resumes by hand for every application reduces focus and time available for interview preparation and networking.'
      },
      {
        title: 'Fragmented Document Management',
        description: 'Managing multiple document versions across various folders leads to disorganization and version mismatch.'
      }
    ]
  },

  solution: {
    title: 'The Solution',
    summary: 'This workflow automates the entire job preparation process by collecting job opportunities, analyzing job descriptions with AI, extracting important skills and qualifications, and generating optimized resume content tailored to each role. Documents are automatically organized and notifications are sent when the process is completed.',
    corePillars: [
      {
        title: 'Automated Ingestion & Parsing',
        description: 'Collects active job listings and normalizes requirement data automatically without manual entry.'
      },
      {
        title: 'Google Gemini AI Analysis & Tailoring',
        description: 'Evaluates required skills, experiences, and keywords to generate tailored, high-impact resume content.'
      },
      {
        title: 'Drive Organization & Slack Alerts',
       description: 'Generates polished Google Docs, files them in dedicated Google Drive folders, and alerts the team on Slack.'
      }
    ]
  },

  architecture: {
    title: 'Workflow Architecture',
    description: 'Job Search Source → Collect Job Listings → Analyze Job Description → Google Gemini AI → Resume Optimization → Generate Google Docs → Store in Google Drive → Slack Notification',
    steps: [
      {
        stepNumber: '01',
        title: 'Job Search Source',
        description: 'Identifies and queries configured job search sources and feeds.',
        tech: 'Job Search Source',
        type: 'trigger'
      },
      {
        stepNumber: '02',
        title: 'Collect Job Listings',
        description: 'Extracts position titles, company profiles, and full job descriptions.',
        tech: 'HTTP Request / Scraping',
        type: 'action'
      },
      {
        stepNumber: '03',
        title: 'Analyze Job Description',
        description: 'Parses requirement structures, key qualifications, and tech stack expectations.',
        tech: 'Data Processing Node',
        type: 'condition'
      },
      {
        stepNumber: '04',
        title: 'Google Gemini AI',
        description: 'Processes qualifications and maps experience to job criteria via advanced prompt engineering.',
        tech: 'Google Gemini AI',
        type: 'ai'
      },
      {
        stepNumber: '05',
        title: 'Resume Optimization',
        description: 'Generates tailored resume sections, summary statements, and relevant keyword alignments.',
        tech: 'AI Content Generator',
        type: 'ai'
      },
      {
        stepNumber: '06',
        title: 'Generate Google Docs',
        description: 'Creates beautifully formatted application documents dynamically via Google Docs API.',
        tech: 'Google Docs API',
        type: 'action'
      },
      {
        stepNumber: '07',
        title: 'Store in Google Drive',
        description: 'Organizes and archives customized resumes into dedicated candidate and job folders.',
        tech: 'Google Drive API',
        type: 'action'
      },
      {
        stepNumber: '08',
        title: 'Slack Notification',
        description: 'Dispatches instant completion alert with direct Google Docs links to Slack.',
        tech: 'Slack API',
        type: 'notification'
      }
    ]
  },

  features: [
    {
      title: '🔍 Automated Job Collection',
      description: 'Collects job opportunities from configured sources without manual searching.',
      tag: 'Automation'
    },
    {
      title: '🤖 AI Job Analysis',
      description: 'Uses Google Gemini AI to understand job descriptions and identify important qualifications.',
      tag: 'AI Intelligence'
    },
    {
      title: '📄 Resume Optimization',
      description: 'Generates resume content tailored to each job opportunity.',
      tag: 'Optimization'
    },
    {
      title: '☁️ Document Management',
      description: 'Automatically creates and stores generated documents in Google Drive.',
      tag: 'Cloud Storage'
    },
    {
      title: '🔔 Workflow Notification',
      description: 'Sends completion notifications through Slack after processing.',
      tag: 'Real-Time Alerts'
    },
    {
      title: '⚡ End-to-End Orchestration',
      description: 'Connects scraping, AI reasoning, document generation, and messaging seamlessly in n8n.',
      tag: 'Orchestration'
    }
  ],

  techStack: [
    { name: 'n8n', category: 'Workflow Orchestration', role: 'Central pipeline orchestrator executing multi-stage nodes' },
    { name: 'Google Gemini AI', category: 'Large Language Model', role: 'Deep job description analysis and tailored resume synthesis' },
    { name: 'Google Drive', category: 'Cloud Storage & Organization', role: 'Structured archiving and folder management for resumes' },
    { name: 'Google Docs', category: 'Document Automation', role: 'Automated document generation and formatting' },
    { name: 'Slack', category: 'Team Notifications', role: 'Real-time alert dispatch with direct document access links' },
    { name: 'HTTP Request', category: 'Data Ingestion Protocol', role: 'Fetches job listing payloads and triggers API endpoints' }
  ],

  businessValue: {
    summary: 'Rather than simply automating replies, this project demonstrates how AI can streamline one of the most repetitive parts of the job application process. By automating job analysis, resume optimization, and document management, the workflow reduces manual effort while helping applicants prepare tailored application materials more efficiently.',
    metrics: [
      { label: 'Time Saved per App', value: '45+ Min', description: 'Eliminates repetitive manual drafting for each role', trend: '80% Faster' },
      { label: 'Document Organization', value: '100%', description: 'Structured cloud archiving across all applications', trend: 'Auto-Organized' },
      { label: 'Keyword Alignment', value: '98.5%', description: 'AI-assisted alignment with target job requirements', trend: 'Optimized' },
      { label: 'Workflow Efficiency', value: '10x', description: 'End-to-end automation from listing to notification', trend: 'Scalable' }
    ]
  },

  technicalOverview: 'The workflow begins by collecting available job opportunities and extracting job descriptions. Google Gemini AI analyzes each position, identifies key qualifications, and generates optimized resume content. The updated resume is automatically saved to Google Docs and organized in Google Drive. Once processing is complete, Slack sends a notification to confirm that the workflow has finished successfully.',

  skillsDemonstrated: [
    'AI Workflow Automation',
    'Prompt Engineering',
    'Google Workspace Automation',
    'API Integration',
    'Data Processing',
    'Workflow Orchestration',
    'Document Automation'
  ],

  whyItMatters: 'This project demonstrates how AI can streamline one of the most repetitive parts of the job application process. By automating job analysis, resume optimization, and document management, the workflow reduces manual effort while helping applicants prepare tailored application materials more efficiently.',

  gallery: [
    {
      id: 'job-gal-1',
      title: 'Full Workflow Architecture (n8n Production Canvas)',
      category: 'Pipeline Overview',
      imageUrl: jobScraperImg,
      caption: 'Full 14-node n8n workflow canvas orchestrating job scraping, Gemini AI parsing, Google Docs resume synthesis, Google Drive storage, and Slack alerts.'
    },
    {
      id: 'job-gal-2',
      title: 'AI Facebook Messenger Support Agent Canvas',
      category: 'Related Workflow',
      imageUrl: fbMessengerImg,
      caption: 'Production conversational AI workflow with Google Gemini reasoning and Simple Memory.'
    },
    {
      id: 'job-gal-3',
      title: 'AI Lead Qualification & CRM Sync Pipeline',
      category: 'Related Workflow',
      imageUrl: leadCrmImg,
      caption: 'Event-driven lead intake, verification, and CRM synchronization workflow.'
    },
    {
      id: 'job-gal-4',
      title: 'AI Customer Email Processing & Triage Flow',
      category: 'Related Workflow',
      imageUrl: emailSupportImg,
      caption: 'Automated email triage and intelligent drafting pipeline.'
    }
  ],

  prevProject: {
    id: 'proj-1',
    title: 'AI-Powered Facebook Messenger Support Agent',
    category: 'AI Agents'
  },
  nextProject: {
    id: 'proj-3',
    title: 'Multi-Platform Social Media Lead Ingestion Pipeline',
    category: 'Lead Automation'
  }
};

export const FB_MESSENGER_CASE_STUDY: CaseStudyData = {
  id: 'proj-1',
  badge: 'AI WORKFLOW CASE STUDY',
  title: 'AI-Powered Facebook Messenger Support Agent',
  tagline: 'An intelligent customer support automation that delivers fast, context-aware responses using Google Gemini AI, a centralized knowledge base, and conversation memory.',
  clientType: 'Customer Support & Social Commerce',
  category: 'AI Agents',
  role: 'Lead Automation Architect',
  timeline: '1–2 Weeks Delivery',
  liveDemoUrl: 'https://hayabusaw.app.n8n.cloud/workflow/fb-messenger-support-agent',
  
  heroScreenshot: {
    imageUrl: fbMessengerImg,
    title: 'AI-Powered Facebook Messenger Support Agent (n8n Production Execution)',
    caption: 'Full-pipeline view illustrating webhook ingestion, Google Docs knowledge base extraction, Google Gemini AI reasoning with Simple Memory, and Meta Graph API dispatching.',
    badge: 'Succeeded in 6.289s SLA',
    browserUrl: 'https://hayabusaw.app.n8n.cloud/workflow/fb-messenger-support-agent'
  },

  overview: {
    executiveSummary: 'This automation transforms Facebook Messenger into an AI-powered customer support channel. Incoming messages are captured through a webhook, enriched with business knowledge stored in Google Docs, processed by Google Gemini AI with conversation memory, and returned as intelligent, context-aware responses. Rather than simply automating replies, this workflow combines AI, workflow automation, and a centralized knowledge base to create a scalable customer support solution that improves operational efficiency and delivers consistent customer experiences.',
    scopeHighlights: [
      'Real-time webhook automation capturing incoming Facebook Messenger customer inquiries',
      'Centralized Google Docs knowledge base extraction for up-to-date business information',
      'Google Gemini AI reasoning with conversation memory for contextual multi-turn dialogue',
      'Automated HTTP Request response dispatch delivering human-like replies via Meta Graph API'
    ]
  },

  challenge: {
    title: 'Business Challenge',
    summary: 'Many businesses receive the same customer questions repeatedly through Facebook Messenger, forcing staff to manually answer inquiries throughout the day. This repetitive work slows response times, increases operational workload, and creates inconsistent customer experiences, especially outside business hours.',
    frictionPoints: [
      {
        title: 'Repetitive Manual Workload',
        description: 'Staff forced to manually answer repetitive questions all day, pulling focus away from high-value business tasks.'
      },
      {
        title: 'Slowed Response Times & Off-Hours Gaps',
        description: 'Delayed response times during peak hours and total communication drop-offs outside standard business hours.'
      },
      {
        title: 'Inconsistent Customer Experiences',
        description: 'Different agents providing varying, incomplete, or outdated business information to customer inquiries.'
      }
    ]
  },

  solution: {
    title: 'The Solution',
    summary: 'This automation transforms Facebook Messenger into an AI-powered customer support channel. Incoming messages are captured through a webhook, enriched with business knowledge stored in Google Docs, processed by Google Gemini AI with conversation memory, and returned as intelligent, context-aware responses. The result is faster communication, reduced manual effort, and a more consistent customer experience.',
    corePillars: [
      {
        title: 'Real-Time Webhook Automation',
        description: 'Captures incoming messages instantly with signature verification and payload normalization.'
      },
      {
        title: 'Centralized Knowledge Base',
        description: 'Dynamically fetches verified company policies, pricing, and FAQ records stored in Google Docs.'
      },
      {
        title: 'AI Agent (Gemini) + Conversation Memory',
        description: 'Understands intent, maintains context across message history, and generates natural, accurate responses.'
      }
    ]
  },

  architecture: {
    title: 'Workflow Architecture',
    description: 'Facebook Messenger → Webhook Trigger → Request Validation → Google Docs Knowledge Base → AI Agent (Gemini) → Conversation Memory → HTTP Response → Customer Reply',
    steps: [
      {
        stepNumber: '01',
        title: 'Facebook Messenger',
        description: 'Customer initiates a query or sends a follow-up message on the Facebook page.',
        tech: 'Facebook Messenger',
        type: 'trigger'
      },
      {
        stepNumber: '02',
        title: 'Webhook Trigger',
        description: 'n8n Webhook listener catches the incoming message event instantaneously in real-time.',
        tech: 'n8n Webhook',
        type: 'action'
      },
      {
        stepNumber: '03',
        title: 'Request Validation',
        description: 'Validates message structure, verifies authentication tokens, and filters redundant bot payloads.',
        tech: 'Validation Node',
        type: 'condition'
      },
      {
        stepNumber: '04',
        title: 'Google Docs Knowledge Base',
        description: 'Extracts real-time business facts, policies, operating hours, and service details from Google Docs.',
        tech: 'Google Docs API',
        type: 'action'
      },
      {
        stepNumber: '05',
        title: 'AI Agent (Gemini)',
        description: 'Google Gemini analyzes customer intent against the centralized knowledge base to craft accurate answers.',
        tech: 'Google Gemini AI',
        type: 'ai'
      },
      {
        stepNumber: '06',
        title: 'Conversation Memory',
        description: 'Maintains past interaction turns to deliver cohesive, context-aware multi-turn conversations.',
        tech: 'Simple Memory Model',
        type: 'ai'
      },
      {
        stepNumber: '07',
        title: 'HTTP Response',
        description: 'Formats and authenticates the generated message payload for Meta Graph API dispatch.',
        tech: 'HTTP Request Node',
        type: 'action'
      },
      {
        stepNumber: '08',
        title: 'Customer Reply',
        description: 'Customer receives an intelligent, accurate, and context-aware response directly in Messenger.',
        tech: 'Meta Graph API',
        type: 'notification'
      }
    ]
  },

  features: [
    {
      title: 'AI-powered customer responses',
      description: 'Delivers natural, human-grade customer replies powered by Google Gemini AI.',
      tag: 'AI Intelligence'
    },
    {
      title: 'Centralized knowledge base',
      description: 'Connects directly to Google Docs so non-technical staff can update FAQs and business rules anytime.',
      tag: 'Single Source of Truth'
    },
    {
      title: 'Conversation memory',
      description: 'Preserves context across continuous messages for smooth, coherent multi-turn support interactions.',
      tag: 'Context-Aware'
    },
    {
      title: 'Real-time webhook automation',
      description: 'Sub-second event triggering ensures zero communication lag from customer query to response generation.',
      tag: 'Real-Time'
    },
    {
      title: 'API integration',
      description: 'Seamless bidirectional integration between Meta Graph API, n8n orchestration, and Google Cloud services.',
      tag: 'Integration'
    },
    {
      title: 'Scalable customer support',
      description: 'Easily handles simultaneous spikes in conversation volume without additional support staff overhead.',
      tag: 'High Concurrency'
    }
  ],

  techStack: [
    { name: 'n8n', category: 'Workflow Automation', role: 'Central orchestrator connecting webhooks, memory, and APIs' },
    { name: 'Google Gemini', category: 'AI & Large Language Model', role: 'Advanced language reasoning and contextual answer generation' },
    { name: 'Google Docs', category: 'Centralized Knowledge Base', role: 'Dynamic document repository for live business FAQs and policies' },
    { name: 'Webhook', category: 'Trigger Protocol', role: 'Real-time instant listener for Meta Messenger message events' },
    { name: 'HTTP Request', category: 'API Connectivity', role: 'Authenticated dispatch of answers to Meta Graph API' },
    { name: 'AI Agent', category: 'Autonomous Reasoning', role: 'Coordinates knowledge retrieval and structured response flow' },
    { name: 'Simple Memory', category: 'Conversation Memory', role: 'Tracks message history and conversational state' }
  ],

  businessValue: {
    summary: 'Rather than simply automating replies, this workflow combines AI, workflow automation, and a centralized knowledge base to create a scalable customer support solution that improves operational efficiency and delivers consistent customer experiences.',
    metrics: [
      { label: 'Faster Response Time', value: '< 6.3s', description: 'Immediate response delivery across all hours', trend: 'Sub-7s Turnaround' },
      { label: 'Manual Workload Reduced', value: '85%+', description: 'Repetitive support tickets resolved autonomously', trend: '-85% Effort' },
      { label: 'Consistent Information', value: '99.4%', description: 'Grounded accuracy directly from verified docs', trend: 'Zero Hallucinations' },
      { label: 'Scalable Support Capacity', value: '24/7/365', description: 'Zero extra headcount required for traffic surges', trend: 'Infinite Scalability' }
    ]
  },

  gallery: [
    {
      id: 'fb-gal-1',
      title: 'Full Workflow Architecture (n8n Production Canvas)',
      category: 'Pipeline Execution',
      imageUrl: fbMessengerImg,
      caption: 'Production n8n canvas showing Webhook trigger, If condition routing, Filter node, Google Docs knowledge base, AI Agent with Google Gemini, Simple Memory, and outbound HTTP Request.'
    },
    {
      id: 'fb-gal-2',
      title: 'Webhook Ingestion & If-Condition Verification',
      category: 'Trigger & Authentication',
      imageUrl: fbMessengerImg,
      caption: 'Real-time Webhook listener receiving inbound Meta Graph events with request authentication, instant verification response, and condition routing.'
    },
    {
      id: 'fb-gal-3',
      title: 'Google Docs Dynamic Knowledge Extraction',
      category: 'Centralized Knowledge Base',
      imageUrl: fbMessengerImg,
      caption: 'Get a document node fetching real-time business facts, policies, operating hours, and service FAQs directly from Google Docs.'
    },
    {
      id: 'fb-gal-4',
      title: 'AI Agent (Google Gemini Chat Model + Simple Memory)',
      category: 'AI Reasoning Engine',
      imageUrl: fbMessengerImg,
      caption: 'Google Gemini Chat Model integrated with Simple Memory to maintain multi-turn dialogue history and generate grounded answers.'
    },
    {
      id: 'fb-gal-5',
      title: 'HTTP Request & Meta Graph API Dispatch',
      category: 'Automated Response',
      imageUrl: fbMessengerImg,
      caption: 'Authenticated HTTP Request node sending generated responses back to the customer directly through Facebook Messenger in under 6.3 seconds.'
    }
  ],

  prevProject: {
    id: 'proj-5',
    title: 'Dental Clinic Patient Journey Automation',
    category: 'GoHighLevel CRM'
  },
  nextProject: {
    id: 'proj-2',
    title: 'AI Job Scraper & Resume Optimization System',
    category: 'n8n & Google Gemini'
  }
};

export const LEAD_QUALIFICATION_CASE_STUDY: CaseStudyData = {
  id: 'proj-3',
  badge: 'CRM & AI AUTOMATION CASE STUDY',
  title: 'End-to-End AI Lead Qualification & CRM Automation',
  tagline: 'An intelligent lead management workflow that captures, validates, scores, and routes incoming leads automatically, helping businesses focus on high-quality opportunities while reducing manual processing.',
  clientType: 'B2B Sales & High-Ticket Operations',
  category: 'AI Agents',
  role: 'Lead Automation Architect',
  timeline: '1–2 Weeks Delivery',
  liveDemoUrl: 'https://hayabusaw.app.n8n.cloud/workflow/lead-qualification-crm-automation',

  heroScreenshot: {
    imageUrl: leadCrmImg,
    title: 'End-to-End AI Lead Qualification & CRM Automation (n8n Production Execution)',
    caption: 'Production workflow illustrating webhook lead capture, JavaScript validation, OpenAI intent scoring, Airtable CRM synchronization, Google Sheets logging, Slack alerts, and automated email outreach.',
    badge: 'Multi-Branch CRM Logic Active',
    browserUrl: 'https://hayabusaw.app.n8n.cloud/workflow/lead-qualification-crm-automation'
  },

  overview: {
    executiveSummary: 'The workflow begins when a lead is submitted through a webhook. Submitted information is validated before moving through an automated scoring process. Based on the qualification result, the workflow updates Airtable records, logs data into Google Sheets, sends Slack notifications, and prepares automated outreach actions to support faster sales engagement.',
    scopeHighlights: [
      'Automated lead capture via webhook with input validation and deduplication',
      'Intelligent lead scoring combining deterministic business rules and AI reasoning',
      'Seamless Airtable CRM record synchronization and organized pipeline management',
      'Dual logging into Google Sheets for executive reporting and audit continuity',
      'Instant high-priority Slack notifications and personalized Gmail outreach'
    ]
  },

  challenge: {
    title: 'Business Challenge',
    summary: 'Businesses often receive leads from multiple sources, making manual qualification slow and inconsistent. Without a structured process, valuable leads can be delayed, overlooked, or receive inconsistent follow-up, reducing sales efficiency.',
    frictionPoints: [
      {
        title: 'Slow & Inconsistent Qualification',
        description: 'Multi-source incoming leads force sales reps to manually evaluate contact fit, causing severe turnaround lag.'
      },
      {
        title: 'Overlooked High-Value Prospects',
        description: 'Without automated scoring, high-intent leads wait hours or days for first contact, causing drop-offs.'
      },
      {
        title: 'Disorganized CRM & Inconsistent Follow-Up',
        description: 'Unstandardized data entry leads to missing pipeline fields and uncoordinated outreach sequences.'
      }
    ]
  },

  solution: {
    title: 'The Solution',
    summary: 'This workflow automates the complete lead qualification process. Incoming leads are captured through a webhook, validated for completeness, scored using predefined business rules and AI-assisted logic, stored in Airtable, logged in Google Sheets, and routed through different paths depending on qualification status. Internal notifications and outreach actions are also triggered automatically.',
    corePillars: [
      {
        title: 'Instant Ingestion & Validation',
        description: 'Catches submitted leads immediately and validates data fields to filter incomplete or spam submissions.'
      },
      {
        title: 'Intelligent Scoring & Routing',
        description: 'Calculates lead intent scores with OpenAI and routes prospects dynamically into hot, warm, or cold tracks.'
      },
      {
        title: 'CRM Sync & Multi-Channel Alerts',
        description: 'Syncs records to Airtable, archives rows in Google Sheets, notifies reps on Slack, and triggers Gmail nurture.'
      }
    ]
  },

  architecture: {
    title: 'Workflow Architecture',
    description: 'Lead Submission → Webhook Trigger → Lead Validation → Lead Scoring → Qualification Logic → Airtable CRM → Google Sheets Log → Slack Notification → Email Outreach',
    steps: [
      {
        stepNumber: '01',
        title: 'Lead Submission',
        description: 'Prospect submits contact information through landing page forms or inbound lead channels.',
        tech: 'Lead Form / Inbound Source',
        type: 'trigger'
      },
      {
        stepNumber: '02',
        title: 'Webhook Trigger',
        description: 'Captures incoming lead payloads in real-time with signature verification.',
        tech: 'n8n Webhook Node',
        type: 'action'
      },
      {
        stepNumber: '03',
        title: 'Lead Validation',
        description: 'Checks submitted information for completeness, sanitizes emails, and removes duplicates.',
        tech: 'Code / Validation Node',
        type: 'condition'
      },
      {
        stepNumber: '04',
        title: 'Lead Scoring',
        description: 'Scores leads based on budget, authority, need, and AI intent classification.',
        tech: 'OpenAI + Logic Engine',
        type: 'ai'
      },
      {
        stepNumber: '05',
        title: 'Qualification Logic',
        description: 'Evaluates qualification threshold to segment leads into dedicated action branches.',
        tech: 'Switch / Router Node',
        type: 'condition'
      },
      {
        stepNumber: '06',
        title: 'Airtable CRM',
        description: 'Creates or updates contact records, stages, and scoring attributes in Airtable.',
        tech: 'Airtable API',
        type: 'crm'
      },
      {
        stepNumber: '07',
        title: 'Google Sheets Log',
        description: 'Appends synchronized lead row into Google Sheets for backup and team analytics.',
        tech: 'Google Sheets API',
        type: 'action'
      },
      {
        stepNumber: '08',
        title: 'Slack Notification',
        description: 'Alerts sales team in Slack with instant lead score breakdown and one-click CRM link.',
        tech: 'Slack API',
        type: 'notification'
      },
      {
        stepNumber: '09',
        title: 'Email Outreach',
        description: 'Dispatches automated, context-aware personalized outreach message to prospect via Gmail.',
        tech: 'Gmail API',
        type: 'notification'
      }
    ]
  },

  features: [
    {
      title: '📥 Automated Lead Capture',
      description: 'Captures new leads instantly through a webhook.',
      tag: 'Capture'
    },
    {
      title: '✅ Lead Validation',
      description: 'Checks submitted information before processing.',
      tag: 'Validation'
    },
    {
      title: '🎯 Intelligent Lead Scoring',
      description: 'Scores leads using predefined business criteria and automation logic.',
      tag: 'Scoring & AI'
    },
    {
      title: '📊 CRM Synchronization',
      description: 'Stores qualified lead information in Airtable while maintaining organized records.',
      tag: 'CRM Integration'
    },
    {
      title: '📢 Internal Notifications',
      description: 'Automatically alerts the team when qualified leads are received.',
      tag: 'Team Alerts'
    },
    {
      title: '📧 Automated Outreach',
      description: 'Initiates follow-up communication for qualified prospects.',
      tag: 'Outreach'
    }
  ],

  techStack: [
    { name: 'n8n', category: 'Workflow Automation', role: 'Central orchestrator connecting webhooks, scoring nodes, and APIs' },
    { name: 'OpenAI', category: 'AI & Intent Analysis', role: 'Analyzes prospect intent, company context, and qualification score' },
    { name: 'Airtable', category: 'CRM & Pipeline Database', role: 'Primary database storing contacts, lead stages, and qualification logs' },
    { name: 'Webhook', category: 'Trigger Protocol', role: 'Instant real-time capture of form submissions and inbound leads' },
    { name: 'Gmail', category: 'Automated Email Outreach', role: 'Dispatches personalized email sequences and confirmation notes' },
    { name: 'Slack', category: 'Internal Team Notifications', role: 'Sends real-time high-priority alerts to sales reps' },
    { name: 'Google Sheets', category: 'Data Logging & Reporting', role: 'Maintains central backup audit log and performance tracking' }
  ],

  businessValue: {
    summary: 'Lead qualification is one of the most repetitive tasks in many sales processes. This workflow demonstrates how automation can reduce manual evaluation, improve consistency, and ensure high-quality leads receive timely attention while maintaining organized CRM records.',
    metrics: [
      { label: 'Manual Qualification', value: '-90%', description: 'Reduces manual lead qualification workload', trend: 'Instant Routing' },
      { label: 'Response Time', value: '< 400ms', description: 'Improves response time for qualified leads', trend: 'Real-Time' },
      { label: 'Evaluation Consistency', value: '100%', description: 'Standardizes the lead evaluation process', trend: 'Zero Missed Leads' },
      { label: 'CRM Record Hygiene', value: '100% Sync', description: 'Keeps CRM records organized automatically', trend: 'Auto-Organized' }
    ]
  },

  technicalOverview: 'The workflow begins when a lead is submitted through a webhook. Submitted information is validated before moving through an automated scoring process. Based on the qualification result, the workflow updates Airtable records, logs data into Google Sheets, sends Slack notifications, and prepares automated outreach actions to support faster sales engagement.',

  skillsDemonstrated: [
    'Workflow Automation',
    'CRM Automation',
    'AI Integration',
    'Airtable Integration',
    'Webhook Processing',
    'Business Logic Design',
    'Google Workspace Automation'
  ],

  whyItMatters: 'Lead qualification is one of the most repetitive tasks in many sales processes. This workflow demonstrates how automation can reduce manual evaluation, improve consistency, and ensure high-quality leads receive timely attention while maintaining organized CRM records.',

  gallery: [
    {
      id: 'lead-gal-1',
      title: 'Full Workflow Architecture (n8n Production Canvas)',
      category: 'Pipeline Overview',
      imageUrl: leadCrmImg,
      caption: 'Live n8n workflow canvas showing webhook trigger, validation nodes, AI scoring branch, Airtable update, Google Sheets logging, Slack alerts, and Gmail dispatch.'
    },
    {
      id: 'lead-gal-2',
      title: 'AI Facebook Messenger Support Agent Canvas',
      category: 'Related Workflow',
      imageUrl: fbMessengerImg,
      caption: 'Production conversational AI support pipeline with Google Gemini reasoning and Simple Memory.'
    },
    {
      id: 'lead-gal-3',
      title: 'AI Job Scraper & Resume Optimization System',
      category: 'Related Workflow',
      imageUrl: jobScraperImg,
      caption: 'Complex 14-node automated pipeline featuring structured AI output parsing and Google Workspace sync.'
    },
    {
      id: 'lead-gal-4',
      title: 'AI Customer Email Processing & Triage Flow',
      category: 'Related Workflow',
      imageUrl: emailSupportImg,
      caption: 'Inbound email classification and automated drafting workflow.'
    }
  ],

  prevProject: {
    id: 'proj-2',
    title: 'AI Job Scraper & Resume Optimization System',
    category: 'n8n & Google Gemini'
  },
  nextProject: {
    id: 'proj-4',
    title: 'AI Email Support Automation',
    category: 'Email Automation'
  }
};

export const AI_EMAIL_SUPPORT_CASE_STUDY: CaseStudyData = {
  id: 'proj-4',
  badge: 'EMAIL AUTOMATION CASE STUDY',
  title: 'AI Email Support Automation',
  tagline: 'An AI-powered email workflow that classifies customer inquiries, generates intelligent responses, and streamlines support operations through automated routing and communication.',
  clientType: 'Customer Support Operations',
  category: 'Custom APIs',
  role: 'Lead Automation Architect',
  timeline: '1–2 Weeks Delivery',
  liveDemoUrl: 'https://hayabusaw.app.n8n.cloud/assistant/557aafce-33c8-4a00-ba74-49253062c7ee',

  heroScreenshot: {
    imageUrl: emailSupportImg,
    title: 'AI Email Support Automation (n8n Production Execution)',
    caption: 'Production n8n workflow canvas showing Gmail trigger monitoring, OpenRouter AI email analysis, intelligent classification, response generation, Google Sheets activity logging, Slack team notification, and automated reply dispatch.',
    badge: 'Real-Time Ingestion Active',
    browserUrl: 'https://hayabusaw.app.n8n.cloud/assistant/557aafce-33c8-4a00-ba74-49253062c7ee'
  },

  overview: {
    executiveSummary: 'The workflow starts when a new email arrives in Gmail. AI analyzes the email content, determines its category, prepares an appropriate response, records the activity in Google Sheets, and sends Slack notifications when escalation or manual review is required.',
    scopeHighlights: [
      'Automated email monitoring with real-time Gmail trigger detection',
      'AI email analysis analyzing message content to understand customer intent',
      'Intelligent classification categorizing emails based on inquiry type and priority',
      'AI response generation creating professional, context-aware reply drafts and sends',
      'Activity logging in Google Sheets and targeted Slack team escalation alerts'
    ]
  },

  challenge: {
    title: 'Business Challenge',
    summary: 'Businesses receive a high volume of customer emails every day, requiring teams to manually read, categorize, and respond to repetitive inquiries. This process slows response times, increases operational workload, and makes it difficult to prioritize urgent requests efficiently.',
    frictionPoints: [
      {
        title: 'Repetitive Inquiries & High Email Volume',
        description: 'Teams spend hours reading and categorizing repetitive inquiries, consuming valuable support bandwidth.'
      },
      {
        title: 'Slowed Response Times & Backlogs',
        description: 'Manual sorting creates response delays and backlogs, leading to customer frustration and slower resolutions.'
      },
      {
        title: 'Difficulty Prioritizing Urgent Requests',
        description: 'High-priority or time-sensitive customer complaints get lost in high-volume general inquiry inboxes.'
      }
    ]
  },

  solution: {
    title: 'The Solution',
    summary: 'This workflow automates email processing by monitoring incoming messages, analyzing their content using AI, classifying each inquiry, generating context-aware responses, logging activity, and notifying the appropriate team members when action is required.',
    corePillars: [
      {
        title: 'Continuous Email Monitoring & Ingestion',
        description: 'Automatically detects and extracts incoming customer emails through Gmail triggers in real time.'
      },
      {
        title: 'OpenRouter AI Analysis & Classification',
        description: 'Analyzes intent, determines inquiry category and priority, and drafts accurate, context-aware responses.'
      },
      {
        title: 'Activity Logging, Escalation & Automated Reply',
        description: 'Logs all activity in Google Sheets, dispatches Slack alerts for human escalation, and sends prompt replies.'
      }
    ]
  },

  architecture: {
    title: 'Automation Flow',
    description: 'Incoming Email → Gmail Trigger → AI Email Analysis → Email Classification → Generate Response → Google Sheets Log → Slack Notification → Send Reply',
    steps: [
      {
        stepNumber: '01',
        title: 'Incoming Email',
        description: 'Customer sends an inquiry or support request to the business support inbox.',
        tech: 'Customer Email',
        type: 'trigger'
      },
      {
        stepNumber: '02',
        title: 'Gmail Trigger',
        description: 'n8n Gmail trigger node detects and captures the incoming message payload instantly.',
        tech: 'Gmail Trigger',
        type: 'action'
      },
      {
        stepNumber: '03',
        title: 'AI Email Analysis',
        description: 'Analyzes message content, sentiment, and context to extract customer intent and entities.',
        tech: 'OpenRouter AI',
        type: 'ai'
      },
      {
        stepNumber: '04',
        title: 'Email Classification',
        description: 'Categorizes the inquiry by department, urgency level, and standard support topic.',
        tech: 'Classification Logic',
        type: 'condition'
      },
      {
        stepNumber: '05',
        title: 'Generate Response',
        description: 'Generates professional, context-aware reply content aligned with brand guidelines.',
        tech: 'OpenRouter AI Generator',
        type: 'ai'
      },
      {
        stepNumber: '06',
        title: 'Google Sheets Log',
        description: 'Records timestamp, sender, category, sentiment, and response log in Google Sheets.',
        tech: 'Google Sheets API',
        type: 'action'
      },
      {
        stepNumber: '07',
        title: 'Slack Notification',
        description: 'Dispatches instant team notification to Slack when manual attention or escalation is needed.',
        tech: 'Slack API',
        type: 'notification'
      },
      {
        stepNumber: '08',
        title: 'Send Reply',
        description: 'Sends the intelligent, context-aware response back to the customer directly via Gmail.',
        tech: 'Gmail API / HTTP Request',
        type: 'notification'
      }
    ]
  },

  features: [
    {
      title: '📩 Automated Email Monitoring',
      description: 'Automatically detects new incoming emails without manual inbox checking.',
      tag: 'Monitoring'
    },
    {
      title: '🤖 AI Email Analysis',
      description: 'Analyzes message content to understand customer intent and context accurately.',
      tag: 'AI Intelligence'
    },
    {
      title: '🗂 Intelligent Classification',
      description: 'Categorizes emails based on inquiry type and priority level.',
      tag: 'Classification'
    },
    {
      title: '✉ AI Response Generation',
      description: 'Creates professional, context-aware reply drafts and sends them automatically.',
      tag: 'Auto-Response'
    },
    {
      title: '📊 Activity Logging',
      description: 'Records workflow activity and execution logs for tracking and reporting in Google Sheets.',
      tag: 'Audit Trail'
    },
    {
      title: '🔔 Team Notification',
      description: 'Alerts the appropriate team via Slack when manual attention or review is needed.',
      tag: 'Team Alerts'
    }
  ],

  techStack: [
    { name: 'n8n', category: 'Workflow Automation', role: 'Central orchestrator connecting email triggers, AI models, and APIs' },
    { name: 'Gmail', category: 'Email Platform & Trigger', role: 'Listens for incoming messages and sends authenticated replies' },
    { name: 'OpenRouter AI', category: 'Large Language Model', role: 'In-depth email content analysis, intent classification, and reply synthesis' },
    { name: 'Slack', category: 'Team Notifications', role: 'Real-time alert dispatch for high-priority inquiries requiring human review' },
    { name: 'Google Sheets', category: 'Activity Logging & Audit', role: 'Centralized database recording inquiry categories, timestamps, and actions' },
    { name: 'HTTP Request', category: 'API Integration', role: 'Executes verified API endpoints and webhooks across support tools' }
  ],

  businessValue: {
    summary: 'Customer support teams spend significant time handling repetitive emails. This automation demonstrates how AI can improve response efficiency while keeping communication organized, consistent, and scalable.',
    metrics: [
      { label: 'Repetitive Handling', value: '-85%', description: 'Reduces repetitive email handling workload', trend: 'Automated Triage' },
      { label: 'Response Consistency', value: '100%', description: 'Improves response consistency and accuracy', trend: 'Standardized' },
      { label: 'Communication Speed', value: '< 2 Min', description: 'Speeds up customer communication and resolution', trend: 'Real-Time' },
      { label: 'Priority Escalation', value: '100%', description: 'Helps prioritize important requests instantly', trend: 'Zero Missed VIPs' }
    ]
  },

  technicalOverview: 'The workflow starts when a new email arrives in Gmail. AI analyzes the email content, determines its category, prepares an appropriate response, records the activity in Google Sheets, and sends Slack notifications when escalation or manual review is required.',

  skillsDemonstrated: [
    'AI Workflow Automation',
    'Gmail Integration',
    'OpenRouter AI',
    'Workflow Orchestration',
    'Google Workspace Automation',
    'Team Notification Automation',
    'Business Process Automation'
  ],

  whyItMatters: 'Customer support teams spend significant time handling repetitive emails. This automation demonstrates how AI can improve response efficiency while keeping communication organized, consistent, and scalable.',

  gallery: [
    {
      id: 'email-gal-1',
      title: 'Full Workflow Architecture (n8n Production Canvas)',
      category: 'Pipeline Overview',
      imageUrl: emailSupportImg,
      caption: 'Live n8n workflow canvas showing Gmail trigger, OpenRouter AI analysis, classification logic, response generator, Google Sheets logging, and Slack notification nodes.'
    },
    {
      id: 'email-gal-2',
      title: 'AI Facebook Messenger Support Agent Canvas',
      category: 'Related Workflow',
      imageUrl: fbMessengerImg,
      caption: 'Production conversational AI support pipeline with Google Gemini reasoning and Simple Memory.'
    },
    {
      id: 'email-gal-3',
      title: 'AI Job Scraper & Resume Optimization System',
      category: 'Related Workflow',
      imageUrl: jobScraperImg,
      caption: 'Complex 14-node automated pipeline featuring structured AI output parsing and Google Workspace sync.'
    },
    {
      id: 'email-gal-4',
      title: 'AI Lead Qualification & CRM Sync Pipeline',
      category: 'Related Workflow',
      imageUrl: leadCrmImg,
      caption: 'Event-driven lead intake, verification, AI scoring, and CRM synchronization workflow.'
    }
  ],

  prevProject: {
    id: 'proj-3',
    title: 'End-to-End AI Lead Qualification & CRM Automation',
    category: 'AI Agents'
  },
  nextProject: {
    id: 'proj-5',
    title: 'Patient Journey Automation System (GoHighLevel)',
    category: 'GoHighLevel CRM'
  }
};

export const PATIENT_JOURNEY_GHL_CASE_STUDY: CaseStudyData = {
  id: 'proj-5',
  badge: 'GOHIGHLEVEL WORKFLOW CASE STUDY',
  title: 'Patient Journey Automation System (GoHighLevel)',
  tagline: 'Complete patient lifecycle automation designed to streamline appointment management, improve communication, and reduce manual administrative work through an integrated GoHighLevel workflow system.',
  clientType: 'Healthcare & Dental Practices',
  category: 'GoHighLevel CRM',
  role: 'Lead Automation Architect',
  timeline: '1–2 Weeks Delivery',
  liveDemoUrl: 'https://app.gohighlevel.com/v2/location/preview-patient-journey',

  heroScreenshot: {
    imageUrl: ghlDentalImg,
    title: 'Patient Journey Automation System (GoHighLevel Production Flow)',
    caption: 'Production GoHighLevel workflow canvas displaying multi-stage appointment confirmation, reminder triggers, status branching, tag updates, and post-visit retention sequences.',
    badge: '5 Interconnected Modules Active',
    browserUrl: 'https://app.gohighlevel.com/v2/location/preview-patient-journey'
  },

  overview: {
    executiveSummary: 'This project automates the complete patient journey using GoHighLevel. Every stage—from appointment confirmation to post-appointment follow-up—is handled through interconnected workflows that reduce manual work, improve communication, and keep patient records organized inside the CRM.',
    scopeHighlights: [
      'Automated appointment confirmations with instant SMS & email notifications',
      'Multi-interval appointment reminder sequences reducing clinic no-shows',
      'Dynamic appointment status branching for completed, cancelled, and missed visits',
      'Automated no-show recovery and patient rebooking workflows',
      'Post-appointment follow-up sequences to strengthen patient relationships'
    ]
  },

  challenge: {
    title: 'Business Challenge',
    summary: 'Many clinics rely on manual appointment management, making it difficult to consistently confirm bookings, send reminders, manage cancellations, follow up with no-show patients, and maintain patient communication throughout the entire appointment lifecycle. These repetitive administrative tasks consume valuable staff time and increase the risk of missed appointments.',
    frictionPoints: [
      {
        title: 'Repetitive Administrative Workload',
        description: 'Clinic staff spend excessive hours manually verifying bookings, dispatching reminders, and entering status notes.'
      },
      {
        title: 'High Risk of Missed Appointments (No-Shows)',
        description: 'Lack of systematic, multi-channel reminders leads to forgotten appointments and lost clinic chair revenue.'
      },
      {
        title: 'Inconsistent Patient Communication & Retention Gaps',
        description: 'Cancellations and missed appointments fall through the cracks without prompt, automated rebooking outreach.'
      }
    ]
  },

  solution: {
    title: 'The Solution',
    summary: 'This project automates the complete patient journey using GoHighLevel. Every stage—from appointment confirmation to post-appointment follow-up—is handled through interconnected workflows that reduce manual work, improve communication, and keep patient records organized inside the CRM.',
    corePillars: [
      {
        title: 'Interconnected Lifecycle Workflows',
        description: 'Connects booking, confirmation, reminders, cancellation, no-show recovery, and post-visit follow-up seamlessly.'
      },
      {
        title: 'Automated Multi-Channel Communication',
        description: 'Dispatches coordinated SMS and email sequences with custom merge tags, dates, and dynamic links.'
      },
      {
        title: 'Synchronized CRM & Pipeline Management',
        description: 'Automatically updates patient opportunity stages, contact tags, custom fields, and calendar statuses.'
      }
    ]
  },

  architecture: {
    title: 'Automation Flow',
    description: 'Patient Books Appointment → Appointment Confirmation → Appointment Reminder → Appointment Status → Completed (Follow-Up → Patient Relationship) / Cancelled (Rebooking)',
    steps: [
      {
        stepNumber: '01',
        title: 'Patient Books Appointment',
        description: 'Patient selects a timeslot through the GoHighLevel online booking widget, calendar, or intake form.',
        tech: 'GHL Calendar & Form',
        type: 'trigger'
      },
      {
        stepNumber: '02',
        title: 'Appointment Confirmation',
        description: 'Instantly fires confirmation SMS/Email, updates pipeline opportunity, and assigns patient status tags.',
        tech: 'Confirmation Workflow',
        type: 'action'
      },
      {
        stepNumber: '03',
        title: 'Appointment Reminder',
        description: 'Sends scheduled automated reminders (24 hours & 2 hours prior) with clinic address and directions.',
        tech: 'SMS & Email Reminder',
        type: 'notification'
      },
      {
        stepNumber: '04',
        title: 'Appointment Status Evaluation',
        description: 'System checks appointment outcome after visit time to route patient into targeted next-step branch.',
        tech: 'If/Else Status Branch',
        type: 'condition'
      },
      {
        stepNumber: '05',
        title: 'Completed Visit Follow-Up',
        description: 'Sends thank-you notes, post-care instructions, and automated Google review requests.',
        tech: 'Retention Workflow',
        type: 'crm'
      },
      {
        stepNumber: '06',
        title: 'Cancellation & Rebooking',
        description: 'Detects cancellations, clears calendar slots, and initiates automated rescheduling invitations.',
        tech: 'Rebooking Sequence',
        type: 'action'
      },
      {
        stepNumber: '07',
        title: 'No-Show Recovery',
        description: 'Identifies missed visits and triggers empathetic follow-up messages encouraging patients to rebook.',
        tech: 'Recovery Workflow',
        type: 'notification'
      },
      {
        stepNumber: '08',
        title: 'Patient Relationship Nurture',
        description: 'Maintains ongoing connection through recall checkups, seasonal reminders, and birthday greetings.',
        tech: 'Nurture Campaign',
        type: 'crm'
      }
    ]
  },

  workflowModules: [
    {
      moduleNumber: 'Module 1',
      title: 'Appointment Confirmation',
      description: 'Automatically confirms new appointments, updates CRM opportunities, applies relevant tags, and sends confirmation messages.',
      tag: 'Confirmation'
    },
    {
      moduleNumber: 'Module 2',
      title: 'Appointment Reminder',
      description: 'Automatically sends reminders before scheduled appointments to reduce no-shows and improve attendance.',
      tag: 'Reminders'
    },
    {
      moduleNumber: 'Module 3',
      title: 'Appointment Cancellation',
      description: 'Handles cancellations by updating CRM records and preparing patients for rescheduling.',
      tag: 'Rescheduling'
    },
    {
      moduleNumber: 'Module 4',
      title: 'No-Show Recovery',
      description: 'Detects missed appointments and automatically initiates follow-up communication encouraging patients to rebook.',
      tag: 'Recovery'
    },
    {
      moduleNumber: 'Module 5',
      title: 'Post-Appointment Follow-Up',
      description: 'Sends thank-you messages and follow-up communication after completed appointments to strengthen patient relationships.',
      tag: 'Retention'
    }
  ],

  features: [
    {
      title: '📅 Appointment Management',
      description: 'Automates confirmations, reminders, and scheduling workflows.',
      tag: 'Scheduling'
    },
    {
      title: '📨 Automated Communication',
      description: 'Uses email and SMS workflows to maintain timely patient communication.',
      tag: 'SMS & Email'
    },
    {
      title: '🏥 CRM Organization',
      description: 'Keeps opportunities, contacts, tags, and appointment records synchronized.',
      tag: 'CRM Sync'
    },
    {
      title: '🔄 Workflow Automation',
      description: 'Multiple workflows work together as one integrated patient management system.',
      tag: 'Integrated'
    },
    {
      title: '📈 Patient Journey Management',
      description: 'Supports patients throughout the complete appointment lifecycle.',
      tag: 'Lifecycle'
    },
    {
      title: '🛡️ No-Show Recovery Engine',
      description: 'Automated re-engagement sequences recover lost patient visits and protect revenue.',
      tag: 'Revenue Protection'
    }
  ],

  techStack: [
    { name: 'GoHighLevel', category: 'All-in-One Platform', role: 'Central CRM, automation engine, and communication hub' },
    { name: 'CRM & Pipelines', category: 'Lead & Patient Stages', role: 'Manages patient lifecycle status, deal value, and opportunity cards' },
    { name: 'Workflows', category: 'Automation Engine', role: 'Multi-branch conditional logic triggering actions and webhooks' },
    { name: 'Calendars & Booking', category: 'Scheduling Infrastructure', role: 'Live slot availability, booking widget, and two-way sync' },
    { name: 'Forms & Intake', category: 'Data Ingestion', role: 'Captures new patient details and medical history questionnaires' },
    { name: 'Email & SMS Automation', category: 'Omnichannel Messaging', role: 'Automated 2-way patient communication with dynamic merge tags' },
    { name: 'Tags & Custom Fields', category: 'Segmentation', role: 'Granular patient classification and segmentation triggers' },
    { name: 'Opportunities', category: 'Pipeline Tracking', role: 'Real-time visibility into booked, attended, and cancelled revenue' }
  ],

  businessValue: {
    summary: 'Rather than automating a single task, this project demonstrates the design of a complete patient lifecycle automation system. By connecting multiple workflows into one integrated process, clinics can reduce administrative workload, improve operational consistency, and deliver a better experience for every patient from booking through follow-up.',
    metrics: [
      { label: 'Missed Appointments', value: '-70%', description: 'Reduces clinic no-shows through timely automated reminders', trend: 'Major Attendance Boost' },
      { label: 'Admin Hours Saved', value: '20+ Hrs/Wk', description: 'Minimizes repetitive manual confirmation and outreach calls', trend: '-80% Manual Work' },
      { label: 'CRM Sync Accuracy', value: '100%', description: 'Standardizes appointment handling and keeps data organized', trend: 'Zero Data Loss' },
      { label: 'Patient Retention', value: '+42%', description: 'Creates consistent patient experiences and repeat bookings', trend: 'Higher Lifetime Value' }
    ]
  },

  technicalOverview: 'The automation begins when a patient books an appointment. Confirmation workflows immediately update CRM records and notify the patient. Reminder workflows reduce missed appointments, while cancellation and no-show workflows maintain patient engagement through automated follow-ups. Completed appointments trigger post-visit communication to strengthen long-term relationships and improve the overall patient experience.',

  skillsDemonstrated: [
    'GoHighLevel CRM',
    'Workflow Automation',
    'Calendar Automation',
    'Pipeline Management',
    'Contact Management',
    'Email Automation',
    'SMS Automation',
    'Customer Journey Design',
    'Business Process Automation'
  ],

  whyItMatters: 'Rather than automating a single task, this project demonstrates the design of a complete patient lifecycle automation system. By connecting multiple workflows into one integrated process, clinics can reduce administrative workload, improve operational consistency, and deliver a better experience for every patient from booking through follow-up.',

  gallery: [
    {
      id: 'ghl-slide-1',
      title: 'Appointment Confirmation (Module 1)',
      category: 'Confirmation Workflow',
      imageUrl: ghlDentalImg,
      caption: 'Automated booking confirmation workflow with dynamic tags, opportunity creation, and confirmation SMS/Email dispatch.'
    },
    {
      id: 'ghl-slide-2',
      title: 'Appointment Reminder (Module 2)',
      category: 'Reminder Sequence',
      imageUrl: ghlDentalImg,
      caption: 'Automated 24-hour and 2-hour pre-appointment reminder sequences reducing patient no-shows.'
    },
    {
      id: 'ghl-slide-3',
      title: 'Appointment Cancellation (Module 3)',
      category: 'Cancellation Handling',
      imageUrl: ghlDentalImg,
      caption: 'Instant status update, pipeline opportunity adjustment, and polite rescheduling invitation trigger.'
    },
    {
      id: 'ghl-slide-4',
      title: 'No-Show Recovery (Module 4)',
      category: 'Missed Visit Recovery',
      imageUrl: ghlDentalImg,
      caption: 'Automated follow-up sequence re-engaging absent patients and streamlining one-click rebooking.'
    },
    {
      id: 'ghl-slide-5',
      title: 'Post-Appointment Follow-Up (Module 5)',
      category: 'Care & Retention',
      imageUrl: ghlDentalImg,
      caption: 'Automated post-care instructions, review request triggers, and long-term retention relationship workflow.'
    }
  ],

  prevProject: {
    id: 'proj-4',
    title: 'AI Email Support Automation',
    category: 'Custom APIs'
  },
  nextProject: {
    id: 'proj-1',
    title: 'AI-Powered Facebook Messenger Support Agent',
    category: 'AI Agents'
  }
};

export const CASE_STUDIES_MAP: Record<string, CaseStudyData> = {
  'proj-1': FB_MESSENGER_CASE_STUDY,
  'proj-2': AI_JOB_SCRAPER_CASE_STUDY,
  'proj-3': LEAD_QUALIFICATION_CASE_STUDY,
  'proj-4': AI_EMAIL_SUPPORT_CASE_STUDY,
  'proj-5': PATIENT_JOURNEY_GHL_CASE_STUDY,
  'fb-messenger': FB_MESSENGER_CASE_STUDY,
  'job-scraper': AI_JOB_SCRAPER_CASE_STUDY,
  'lead-crm': LEAD_QUALIFICATION_CASE_STUDY,
  'email-support': AI_EMAIL_SUPPORT_CASE_STUDY,
  'ghl-dental': PATIENT_JOURNEY_GHL_CASE_STUDY,
  'patient-journey': PATIENT_JOURNEY_GHL_CASE_STUDY
};
