import type { GHLWorkflow, ProjectItem, TechItem, ServiceItem, TestimonialItem } from '../types';

export const GHL_WORKFLOWS: GHLWorkflow[] = [
  {
    id: 'ghl-confirmation',
    title: 'Appointment Confirmation',
    tagline: 'Instant Omni-Channel Booking Verification & Calendar Lock',
    category: 'High-Intent Acquisition',
    description: 'Autonomous multi-channel trigger system executing within 400ms of any booking. Synchronizes Google Calendar, locks GoHighLevel custom fields, generates dynamic ICS calendar invites, dispatches tailored WhatsApp & SMS confirmations, and tags high-intent leads.',
    businessValue: 'Eliminates booking abandonment, verifies contact details in real-time, and elevates customer trust before the initial consultation.',
    impactMetrics: [
      { label: 'Instant Delivery SLA', value: '< 1.2s', trend: '+99.8% Speed' },
      { label: 'Confirmation Rate', value: '98.4%', trend: '+34% vs Manual' },
      { label: 'Double-Booking Errors', value: '0.00%', trend: 'Absolute Zero' }
    ],
    features: [
      'Instant Webhook Dispatch with HMAC signature verification',
      'Dual-channel SMS + WhatsApp Business API message with 1-click add to Google/Apple Calendar',
      'Smart time-zone detection and localized dynamic timestamp formatting',
      'Automatic CRM contact deduplication and pipeline opportunity stage auto-advancement',
      'Custom intake questionnaire pre-fill link generated on the fly'
    ],
    triggers: ['GHL Appointment Status: Confirmed', 'Custom Webhook: Calendly / Cal.com', 'Inbound Booking Form Submission'],
    channels: ['WhatsApp API', 'Twilio SMS', 'SendGrid Email', 'Google Calendar', 'Slack Alerts'],
    browserUrl: 'https://app.gohighlevel.com/v2/location/yas-auto/workflows/appointment-confirmation',
    browserTitle: 'GHL Automation Hub — 01. Appointment Confirmation Engine v4.2',
    colorScheme: {
      primary: 'cyan',
      border: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    steps: [
      {
        id: 'c1',
        name: 'Trigger: Booking Event Received',
        type: 'trigger',
        icon: 'Zap',
        description: 'Receives webhook payload with lead contact, calendar ID, and appointment UTC timestamp.'
      },
      {
        id: 'c2',
        name: 'AI Payload Sanitization & Timezone Sync',
        type: 'ai',
        icon: 'Cpu',
        description: 'Normalizes phone format to E.164, resolves recipient timezone, and parses custom booking questions.'
      },
      {
        id: 'c3',
        name: 'CRM Opportunity & Tagging Engine',
        type: 'crm',
        icon: 'Database',
        description: 'Updates pipeline stage to "Appointment Booked", assigns account executive, and attaches campaign tags.'
      },
      {
        id: 'c4',
        name: 'Multi-Channel Dispatch Matrix',
        type: 'notification',
        icon: 'Send',
        description: 'Simultaneously sends customized WhatsApp, SMS with unique ICS link, and branded rich HTML confirmation email.'
      },
      {
        id: 'c5',
        name: 'Internal Team Slack Notification',
        type: 'action',
        icon: 'Bell',
        description: 'Posts structured summary card to #sales-leads with 1-click CRM record shortcut.'
      }
    ]
  },
  {
    id: 'ghl-reminder',
    title: 'Appointment Reminder',
    tagline: 'Predictive Multi-Touch Cadence with Self-Service Rescheduling',
    category: 'Show-Up Optimization',
    description: 'Dynamic timed sequence operating at 24h, 2h, and 15m intervals before appointment. Features 2-way conversational SMS logic: if the prospect replies "RESCHEDULE", the system pauses reminders and serves personalized calendar open slots without agent intervention.',
    businessValue: 'Dramatically slashes client drop-offs, protects executive calendar bandwidth, and boosts show-up rates from 62% to 92%+.',
    impactMetrics: [
      { label: 'Show-Up Rate', value: '92.6%', trend: '+30.6% Lift' },
      { label: 'Reschedule Self-Service', value: '78%', trend: 'No Human Needed' },
      { label: 'Late Arrival Rate', value: '< 4%', trend: '-85% Reduction' }
    ],
    features: [
      'Multi-touch sequence triggered precisely at T-24h, T-2h, and T-15m',
      'Natural language 2-way SMS intent parsing for CONFIRM, DELAY, or RESCHEDULE',
      'Dynamic Zoom link validation and live meeting room ping 15 minutes prior',
      'Conditional branching: VIP high-ticket clients receive personalized voice drop or concierge SMS',
      'Automated time slot lock preventing double booking during reschedule flows'
    ],
    triggers: ['Appointment Time minus 24 Hours', 'Appointment Time minus 2 Hours', 'Appointment Time minus 15 Minutes'],
    channels: ['Conversational SMS', 'WhatsApp Interactive Buttons', 'Dynamic Email', 'Zoom Webhook'],
    browserUrl: 'https://app.gohighlevel.com/v2/location/yas-auto/workflows/appointment-reminders',
    browserTitle: 'GHL Automation Hub — 02. Smart Reminder & Show-Up Engine v3.8',
    colorScheme: {
      primary: 'emerald',
      border: 'border-emerald-500/30',
      bgGlow: 'bg-emerald-500/10',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    steps: [
      {
        id: 'r1',
        name: 'Scheduled Cadence Trigger',
        type: 'trigger',
        icon: 'Clock',
        description: 'Calculates exact offset relative to user timezone and initiates T-24h touchpoint.'
      },
      {
        id: 'r2',
        name: 'Interactive Confirmation Request',
        type: 'notification',
        icon: 'MessageSquare',
        description: 'Dispatches SMS & WhatsApp: "Reply 1 to Confirm or 2 to Choose a New Time".'
      },
      {
        id: 'r3',
        name: '2-Way Conversational Webhook Handler',
        type: 'condition',
        icon: 'GitBranch',
        description: 'Evaluates customer reply using regex & AI sentiment. If Reschedule -> routes to self-service booking link.'
      },
      {
        id: 'r4',
        name: 'T-15min Zoom Link + Prep Checklist',
        type: 'action',
        icon: 'Video',
        description: 'Dispatches direct 1-click meeting access button and prep agenda notes.'
      }
    ]
  },
  {
    id: 'ghl-cancellation',
    title: 'Appointment Cancellation',
    tagline: 'Instant Calendar Cleanup, Waitlist Auto-Fill & Pipeline Re-routing',
    category: 'Inventory Recovery',
    description: 'When a prospect or client cancels, this workflow automatically wipes calendar holds, flags the deal stage in CRM, notifies the sales rep, and instantly alerts high-priority waitlisted leads with the newly opened calendar spot.',
    businessValue: 'Prevents dead calendar dead-time, recovers lost revenue potential, and keeps CRM pipeline integrity 100% clean.',
    impactMetrics: [
      { label: 'Calendar Re-fill Speed', value: '4.8 min', trend: 'Waitlist Auto-Ping' },
      { label: 'Pipeline Accuracy', value: '100%', trend: 'Zero Ghost Deals' },
      { label: 'Rep Time Saved', value: '45m / day', trend: 'Automated Sync' }
    ],
    features: [
      'Instant cancellation webhook listener across Google Calendar, Outlook, and GHL native calendar',
      'Automated slot reopening with priority blast to VIP waitlist segment',
      'Polite cancellation confirmation email with embedded 1-click "Rebook When Ready" dynamic link',
      'Automated feedback loop: captures reason for cancellation for operational analytics',
      'Slack channel announcement notifying assigned rep with previous meeting notes attached'
    ],
    triggers: ['GHL Appointment Status: Cancelled', 'Client Clicked "Cancel Appointment" link', 'Rep Manual Status Override'],
    channels: ['Email Automation', 'Priority Waitlist SMS', 'Slack Sales Alert', 'CRM Webhook'],
    browserUrl: 'https://app.gohighlevel.com/v2/location/yas-auto/workflows/cancellation-handler',
    browserTitle: 'GHL Automation Hub — 03. Cancellation & Slot Recovery Matrix v2.9',
    colorScheme: {
      primary: 'amber',
      border: 'border-amber-500/30',
      bgGlow: 'bg-amber-500/10',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    steps: [
      {
        id: 'x1',
        name: 'Cancellation Event Trigger',
        type: 'trigger',
        icon: 'AlertTriangle',
        description: 'Catches cancellation event payload with reason codes and user notes.'
      },
      {
        id: 'x2',
        name: 'Calendar Slot Release & CRM Status Update',
        type: 'crm',
        icon: 'Database',
        description: 'Moves lead to "Cancelled - Re-engagement Queue" and frees up Google Calendar time block.'
      },
      {
        id: 'x3',
        name: 'Waitlist Auto-Fill Broadcast',
        type: 'action',
        icon: 'Users',
        description: 'Pings the top 3 waitlisted prospects via SMS: "A premium spot just opened today at 3 PM".'
      },
      {
        id: 'x4',
        name: 'Polite Cancellation Rebook Nudge',
        type: 'notification',
        icon: 'Mail',
        description: 'Sends gentle, non-pushy email with re-booking link valid for 30 days.'
      }
    ]
  },
  {
    id: 'ghl-noshow',
    title: 'No Show Recovery',
    tagline: 'Empathy-Driven Automated Win-Back Sequence with Dynamic Frictionless Reschedule',
    category: 'Revenue Salvage',
    description: 'Triggered 10 minutes after a prospect fails to enter the meeting room. Instead of aggressive sales spam, it deploys a high-converting empathy-first omnichannel sequence that makes rebooking effortless, reviving 38%+ of lost opportunities.',
    businessValue: 'Salvages expensive paid marketing spend, re-engages qualified prospects, and stops lost deals from falling through the cracks.',
    impactMetrics: [
      { label: 'Re-booking Recovery Rate', value: '38.4%', trend: 'Revived Pipeline' },
      { label: 'Average Re-engage Time', value: '2.4 hrs', trend: 'Speedy Win-Back' },
      { label: 'Cost Per Acquisition Saved', value: '$420+', trend: 'Per Saved Lead' }
    ],
    features: [
      'Automated trigger 10 minutes post meeting start time upon rep tagging or Zoom absence webhook',
      'Empathy-first multi-touch sequence (T+10m SMS, T+4h Email with video message, T+48h check-in)',
      '1-Click "Zero-Form" Instant Rebooking personalized link',
      'Rep task generation in CRM if prospect fails to rebook after 3 automated attempts',
      'Custom tag assignment `Status: No-Show-Recovery-Active` preventing conflicting nurture sequences'
    ],
    triggers: ['Rep marks appointment: "No Show"', 'Zoom Host Meeting End (Participant count = 1)', 'Timer: T+10m post-start'],
    channels: ['Personalized SMS', 'Loom/Video Email', 'WhatsApp Nudge', 'CRM Task Queue'],
    browserUrl: 'https://app.gohighlevel.com/v2/location/yas-auto/workflows/no-show-recovery',
    browserTitle: 'GHL Automation Hub — 04. Autonomous No-Show Win-Back Pipeline v4.0',
    colorScheme: {
      primary: 'rose',
      border: 'border-rose-500/30',
      bgGlow: 'bg-rose-500/10',
      badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    },
    steps: [
      {
        id: 'ns1',
        name: 'Trigger: No-Show Condition Met',
        type: 'trigger',
        icon: 'UserX',
        description: 'Fires when client does not connect within 10 minutes of meeting start time.'
      },
      {
        id: 'ns2',
        name: 'Immediate Empathy SMS (T+10m)',
        type: 'notification',
        icon: 'MessageSquare',
        description: '"Hey [First_Name], hope everything is okay! We were waiting on Zoom. Click here to grab another time whenever you are ready."'
      },
      {
        id: 'ns3',
        name: 'Smart Wait Delay (4 Hours)',
        type: 'condition',
        icon: 'Hourglass',
        description: 'Waits 4 hours to verify if the contact self-rebooked before triggering the next step.'
      },
      {
        id: 'ns4',
        name: 'Executive Video Email Nudge (T+4h)',
        type: 'action',
        icon: 'Video',
        description: 'Sends rich personalized email with rep Loom thumbnail and direct rebook link.'
      }
    ]
  },
  {
    id: 'ghl-postfollowup',
    title: 'Post Appointment Follow-Up',
    tagline: 'Instant Proposal Delivery, 5-Star Review Engine & CRM Lifecycle Sync',
    category: 'Retention & Conversion',
    description: 'Post-call automation engine that runs the second an appointment concludes. Automatically classifies the call outcome (Closed Won, Proposal Sent, Not Qualified), dispatches proposal PDFs, triggers automated Google Review requests, and schedules onboarding milestones.',
    businessValue: 'Accelerates deal velocity, drives organic 5-star Google reviews on autopilot, and delivers a memorable enterprise client onboarding experience.',
    impactMetrics: [
      { label: 'Proposal Delivery Time', value: '< 3 mins', trend: 'Instant Velocity' },
      { label: 'Google Review Collection', value: '4.9 ⭐', trend: '+45 Reviews/mo' },
      { label: 'Client Onboarding Velocity', value: '3.2x Faster', trend: 'Automated Hand-off' }
    ],
    features: [
      'Call outcome routing based on rep single-click dropdown status in GHL mobile/desktop app',
      'Dynamic proposal generation with pre-populated scope of work and pricing table',
      'Conditional review request: sends Google Review invite exclusively to happy/qualified clients',
      'Automated invoice generation & Stripe payment link creation via webhooks',
      'Post-call summary transcript sent to client with action item checklist'
    ],
    triggers: ['GHL Appointment Status: Completed', 'Call Outcome Tagged in CRM', 'Stripe Invoice Created'],
    channels: ['Stripe Payments', 'Google Reviews API', 'DocuSign / PandaDoc', 'Email & SMS', 'Client Portal'],
    browserUrl: 'https://app.gohighlevel.com/v2/location/yas-auto/workflows/post-appointment-suite',
    browserTitle: 'GHL Automation Hub — 05. Post-Appointment Conversion & Review Matrix v5.1',
    colorScheme: {
      primary: 'purple',
      border: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    steps: [
      {
        id: 'pf1',
        name: 'Trigger: Appointment Completed',
        type: 'trigger',
        icon: 'CheckCircle2',
        description: 'Call concludes and rep logs outcome tag: "Proposal Requested".'
      },
      {
        id: 'pf2',
        name: 'AI Call Transcript & Next Steps Summary',
        type: 'ai',
        icon: 'Sparkles',
        description: 'Parses meeting recording notes and generates bulleted action items for the client.'
      },
      {
        id: 'pf3',
        name: 'Proposal Generation & Stripe Setup',
        type: 'action',
        icon: 'FileText',
        description: 'Creates customized contract and payment milestone schedule automatically.'
      },
      {
        id: 'pf4',
        name: 'Conditional Review & Referral Engine (T+24h)',
        type: 'notification',
        icon: 'Star',
        description: 'Triggers Google Business Profile review request with direct 5-star direct rating link.'
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AI-Powered Facebook Messenger Support Agent',
    clientType: 'Customer Support & Social Commerce',
    category: 'AI Agents',
    shortDescription: 'AI-powered Facebook Messenger automation that instantly responds to customer inquiries, answers FAQs, qualifies leads, and provides 24/7 customer engagement.',
    fullOverview: 'Designed and developed an intelligent Messenger automation workflow that integrates AI responses with automated lead qualification. The workflow handles customer conversations in real time, reduces repetitive support tasks, and seamlessly routes important inquiries for follow-up.',
    problemSolved: 'Businesses often experience delayed Facebook Messenger responses due to manual customer support. This automation provides instant AI-powered replies, captures customer information, qualifies leads, and significantly reduces response time.',  
    solutionArchitecture: [
       'Facebook Messenger Webhook Trigger',
  'Message Validation & Intent Detection',
  'Google Gemini AI Response Generation',
  'Lead Qualification Logic',
  'CRM / Google Sheets Integration',
  'Human Handoff for Complex Inquiries'
    ],
    techStack: ['n8n', 'Facebook Messenger', 'Google Gemini', 'Webhook', 'HTTP Request', 'Google Sheets'],
    metrics: [
      { label: 'Execution Speed', value: '6.28s SLA' },
      { label: 'Inquiries Automated', value: '85%+' },
      { label: 'Context Accuracy', value: '99.4%' }
    ],
    browserUrl: 'https://hayabusaw.app.n8n.cloud/workflow/fb-messenger-support-agent',
    browserTitle: 'n8n Cloud — May 18 Execution #23 (Succeeded in 6.289s)',
    featured: true,
    flowSteps: [
      { title: 'Inbound Webhook', description: 'Captures Messenger customer query event', tech: 'n8n Webhook Node' },
      { title: 'Knowledge Lookup', description: 'Fetches product facts from Google Docs', tech: 'Google Docs API' },
      { title: 'AI Agent & Memory', description: 'Gemini reasoning with conversation memory', tech: 'Google Gemini Chat' },
      { title: 'Messenger Dispatch', description: 'Posts reply via Meta Graph API endpoint', tech: 'HTTP Request' }
    ]
  },
 {
  id: 'proj-2',
  title: 'AI Job Scraper & Resume Optimization System',
  clientType: 'Recruitment & Career Acceleration',
  category: 'n8n',
  shortDescription: 'Automatically searches job opportunities, analyzes job descriptions, optimizes resumes with AI, and prepares tailored applications.',
  fullOverview: 'This end-to-end automation monitors multiple job sources, extracts relevant openings, compares them with the candidate profile, generates optimized resumes using AI, and prepares application-ready documents while logging every opportunity into Google Sheets.',
  problemSolved: 'Manual job searching, resume customization, and application preparation consume hours every day and often result in missed opportunities.',
  solutionArchitecture: [
    'Job Scraper (RapidAPI / Web Scraping)',
    'AI Resume Analyzer',
    'Resume Optimization with Google Gemini',
    'Google Docs Resume Generator',
    'Google Drive Storage',
    'Google Sheets Tracking',
    'Slack Notification System'
  ],
  techStack: [
    'n8n',
    'Google Gemini',
    'Google Docs',
    'Google Drive',
    'Google Sheets',
    'RapidAPI',
    'Slack'
  ],
  metrics: [
    { label: 'Applications Prepared', value: '100+' },
    { label: 'Time Saved', value: '90%' },
    { label: 'Resume Match', value: 'ATS Optimized' }
  ],
  browserTitle: 'AI Job Scraper & Resume Optimizer',
  browserUrl: 'job-scraper.demo',
  featured: true,
  flowSteps: [
    { title: 'Collect Job Listings', description: 'Scrapes multiple job boards based on keywords.', tech: 'RapidAPI' },
    { title: 'Analyze Job Description', description: 'AI extracts required skills and qualifications.', tech: 'Google Gemini' },
    { title: 'Optimize Resume', description: 'Creates an ATS-friendly version of the resume.', tech: 'Google Docs' },
    { title: 'Generate Application Files', description: 'Exports resume and cover letter automatically.', tech: 'Google Drive' },
    { title: 'Track Applications', description: 'Logs every submitted application.', tech: 'Google Sheets' }
  ]
},
  {
  id: 'proj-3',
  title: 'AI Email Support Automation System',
  clientType: 'Customer Service & Operations',
  category: 'n8n',
  shortDescription: 'Automatically classifies incoming emails, generates AI-powered replies, routes tickets, and keeps support teams updated in real time.',
  fullOverview: 'This workflow monitors incoming Gmail messages, analyzes the intent using AI, categorizes customer requests, drafts accurate responses, routes complex tickets to human agents, logs all conversations, and notifies the support team through Slack.',
  problemSolved: 'Businesses spend significant time manually reading, sorting, and responding to repetitive customer emails, causing slow response times and inconsistent support quality.',
  solutionArchitecture: [
    'Gmail Trigger',
    'AI Email Classification',
    'Intent Detection',
    'Automatic Reply Generation',
    'Support Ticket Routing',
    'Google Sheets Logging',
    'Slack Notifications'
  ],
  techStack: [
    'n8n',
    'Gmail API',
    'Google Gemini',
    'Google Sheets',
    'Slack',
    'Webhook',
    'HTTP Request'
  ],
  metrics: [
    { label: 'Emails Automated', value: '95%' },
    { label: 'Average Response', value: '<30 sec' },
    { label: 'Manual Work Reduced', value: '90%' }
  ],
  browserTitle: 'AI Email Support Automation',
  browserUrl: 'email-support.demo',
  featured: true,
  flowSteps: [
    {
      title: 'Receive Incoming Email',
      description: 'Monitors Gmail for new customer emails.',
      tech: 'Gmail Trigger'
    },
    {
      title: 'Analyze Email',
      description: 'AI detects customer intent, urgency, and category.',
      tech: 'Google Gemini'
    },
    {
      title: 'Generate Smart Reply',
      description: 'Creates a personalized draft response automatically.',
      tech: 'AI'
    },
    {
      title: 'Route Ticket',
      description: 'Escalates complex requests while replying instantly to common inquiries.',
      tech: 'n8n'
    },
    {
      title: 'Log & Notify',
      description: 'Stores ticket details in Google Sheets and sends Slack notifications.',
      tech: 'Google Sheets + Slack'
    }
  ]
},
 {
  id: 'proj-4',
  title: 'AI Lead Qualification & CRM Automation',
  clientType: 'Sales & Lead Generation',
  category: 'n8n',
  shortDescription: 'Automatically validates, scores, qualifies, and routes incoming leads while generating AI summaries and notifying the sales team in real time.',
  fullOverview: 'This workflow automates the entire lead qualification process. Every incoming lead is validated, scored using business rules, classified as Hot, Warm, or Cold, summarized with AI, stored in Airtable, logged in Google Sheets, and instantly routed to the sales team through Slack notifications.',
  problemSolved: 'Sales teams waste valuable time manually reviewing leads, updating CRMs, and deciding which prospects deserve immediate attention. This automation eliminates repetitive work and helps teams focus on high-value opportunities.',
  solutionArchitecture: [
    'Webhook Lead Capture',
    'Lead Validation',
    'AI Lead Scoring',
    'Hot / Warm / Cold Classification',
    'AI Summary Generation',
    'Airtable CRM Storage',
    'Google Sheets Logging',
    'Slack Sales Notification'
  ],
  techStack: [
    'n8n',
    'Webhook',
    'OpenRouter AI',
    'Airtable',
    'Google Sheets',
    'Slack',
    'Gmail'
  ],
  metrics: [
    { label: 'Lead Processing', value: '100% Automated' },
    { label: 'Qualification', value: 'Instant' },
    { label: 'Sales Alerts', value: 'Real-time' }
  ],
  browserTitle: 'AI Lead Qualification & CRM Automation',
  browserUrl: 'lead-qualification.demo',
  featured: true,
  flowSteps: [
    {
      title: 'Capture Lead',
      description: 'Receives lead information through a webhook.',
      tech: 'Webhook'
    },
    {
      title: 'Validate Data',
      description: 'Checks required fields before processing.',
      tech: 'n8n IF'
    },
    {
      title: 'Score Lead',
      description: 'Calculates lead score using predefined business rules.',
      tech: 'Code Node'
    },
    {
      title: 'Generate AI Summary',
      description: 'Creates a concise summary for the sales team.',
      tech: 'OpenRouter AI'
    },
    {
      title: 'Store & Notify',
      description: 'Saves qualified leads and notifies sales instantly.',
      tech: 'Airtable + Slack'
    }
  ]
},
{
  id: 'proj-6',
  title: 'AI Voice Receptionist & Smart Appointment Booking',
  clientType: 'Service Business',
  category: 'n8n',
  shortDescription: 'AI receptionist that answers calls, checks availability, books appointments, updates calendars, and logs customer information automatically.',

  fullOverview: 'An advanced AI Voice Receptionist built in n8n that handles incoming customer calls, understands natural language, checks available schedules, books appointments, updates Google Calendar, records customer information, and responds intelligently without human intervention.',

  problemSolved: 'Businesses lose leads because phone calls are missed, appointment booking is manual, and customer information is not centralized.',

  solutionArchitecture: [
    'AI Voice Agent',
    'Speech-to-Text',
    'Intent Detection',
    'Availability Checker',
    'Google Calendar Integration',
    'Appointment Booking',
    'Customer Database Update',
    'Webhook Automation'
  ],

  techStack: [
    'n8n',
    'OpenAI',
    'Google Calendar',
    'Webhook',
    'HTTP Request',
    'JavaScript'
  ],

  metrics: [
    { label: 'Voice Calls', value: '24/7' },
    { label: 'Booking', value: 'Automated' },
    { label: 'Response', value: 'Real-time' }
  ],

  browserTitle: 'AI Voice Receptionist Workflow',

  browserUrl: 'voice-receptionist.demo',

  featured: true,

  flowSteps: [
    {
      title: 'Incoming Call',
      description: 'Customer starts a voice conversation with the AI receptionist.',
      tech: 'Webhook'
    },
    {
      title: 'Intent Detection',
      description: 'AI identifies whether the caller wants to book, reschedule, cancel, or ask a question.',
      tech: 'OpenAI'
    },
    {
      title: 'Availability Check',
      description: 'Checks available appointment slots using Google Calendar.',
      tech: 'Google Calendar'
    },
    {
      title: 'Appointment Booking',
      description: 'Creates the appointment automatically.',
      tech: 'Calendar'
    },
    {
      title: 'Customer Record',
      description: 'Stores customer information and booking details.',
      tech: 'Database'
    },
    {
      title: 'Confirmation',
      description: 'Confirms the booking and returns the final response to the customer.',
      tech: 'AI'
    }
  ]
},
];
export const TECH_STACK: TechItem[] = [
  {
    id: 'tech-n8n',
    name: 'n8n',
    category: 'Orchestration',
    logoKey: 'n8n',
    tagline: 'Workflow Automation Platform',
    description: 'Workflow Automation Platform — Advanced node-based workflow orchestration, distributed execution, and real-time error queues.',
    extendedOverview: 'Self-hosted & cloud workflow orchestration, custom JavaScript nodes, webhook routers, and AI agent execution graphs.',
    proficiency: 'Core Infrastructure',
    highlightGlow: 'from-rose-500/20 via-pink-500/20 to-orange-500/20',
    accentColor: '#EA4B71',
    useCases: ['Multi-System Sync', 'Data Transformation', 'AI Agent Graphs', 'Webhook Handlers']
  },
  {
    id: 'tech-ghl',
    name: 'GoHighLevel',
    category: 'Core CRM',
    logoKey: 'gohighlevel',
    tagline: 'CRM & Marketing Automation',
    description: 'CRM & Marketing Automation — Enterprise pipelines, custom snapshots, 2-way SMS/email triggers, and appointment funnels.',
    extendedOverview: 'Full-funnel client acquisition, automated booking pipelines, sub-account snapshots, and omnichannel lead nurture.',
    proficiency: 'Master Architect',
    highlightGlow: 'from-blue-500/20 via-orange-500/20 to-cyan-500/20',
    accentColor: '#3B82F6',
    useCases: ['Omnichannel Nurture', 'Appointment Engine', 'Review Generation', 'Pipeline Auto-Routing']
  },
  {
    id: 'tech-openai',
    name: 'OpenAI',
    category: 'AI & LLMs',
    logoKey: 'openai',
    tagline: 'AI Language Models',
    description: 'AI Language Models — Custom function-calling agents, deterministic JSON structured outputs, and conversational intelligence.',
    extendedOverview: 'Multi-agent reasoning, deterministic JSON schema responses, prompt chains, and natural language classification algorithms.',
    proficiency: 'Production Implementation',
    highlightGlow: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
    accentColor: '#10A37F',
    useCases: ['Lead Scoring', 'Natural Language SMS', 'Ticket Resolution', 'Copywriting Engines']
  },
  {
    id: 'tech-gemini',
    name: 'Google Gemini',
    category: 'AI & LLMs',
    logoKey: 'gemini',
    tagline: 'Generative AI',
    description: 'Generative AI — Multimodal vision parsing for invoices/documents, high-speed reasoning, and massive context comprehension.',
    extendedOverview: 'Multimodal document comprehension, 1M+ token context windows, visual extraction, and real-time structured reasoning.',
    proficiency: 'Official Partner Ready',
    highlightGlow: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
    accentColor: '#1BA1E3',
    useCases: ['PDF Invoice Extraction', 'Visual Data Extraction', 'Large Corpus Analysis', 'Real-Time Agents']
  },
  {
    id: 'tech-slack',
    name: 'Slack',
    category: 'Productivity & DB',
    logoKey: 'slack',
    tagline: 'Team Communication',
    description: 'Team Communication — Interactive alert blocks, 1-click lead approvals, executive KPI summaries, and incident alerting.',
    extendedOverview: 'Human-in-the-loop executive approval gates, real-time lead alerts, and interactive team command bots.',
    proficiency: 'Full Integration',
    highlightGlow: 'from-amber-500/20 via-emerald-500/20 to-sky-500/20',
    accentColor: '#E01E5A',
    useCases: ['Deal Alerts', 'Escalation Notifications', 'Interactive Command Bot', 'Daily KPIs']
  },
  {
    id: 'tech-airtable',
    name: 'Airtable',
    category: 'Productivity & DB',
    logoKey: 'airtable',
    tagline: 'Cloud Database',
    description: 'Cloud Database — Relational data modeling, centralized operations hubs, automation scripts, and single source-of-truth tables.',
    extendedOverview: 'Dynamic relational tables, custom metadata catalogs, linked records, and automated single-source-of-truth syncing.',
    proficiency: 'Schema Architect',
    highlightGlow: 'from-yellow-500/20 via-sky-500/20 to-red-500/20',
    accentColor: '#FCB400',
    useCases: ['Single Source of Truth', 'Inventory Tracking', 'Client Portal Backend', 'Automated Views']
  },
  {
    id: 'tech-gmail',
    name: 'Gmail',
    category: 'Productivity & DB',
    logoKey: 'gmail',
    tagline: 'Email Automation',
    description: 'Email Automation — Inbound lead ingestion, AI draft generation, attachment scrapers, and transactional sequences.',
    extendedOverview: 'Smart inbox filters, attachment extraction pipelines, and high-converting personalized email follow-ups.',
    proficiency: 'Production Setup',
    highlightGlow: 'from-red-500/20 via-amber-500/20 to-blue-500/20',
    accentColor: '#EA4335',
    useCases: ['Inbound Lead Ingestion', 'Transactional Alerts', 'Automated Invoice Scrapers', 'AI Draft Replies']
  },
  {
    id: 'tech-googledocs',
    name: 'Google Docs',
    category: 'Productivity & DB',
    logoKey: 'googledocs',
    tagline: 'Knowledge Base & Docs',
    description: 'Knowledge Base & Docs — Automated contract generation, proposal templates, and dynamic RAG documentation grounding.',
    extendedOverview: 'Automated variable replacement for proposals, client agreements, and real-time vector RAG documentation.',
    proficiency: 'Full Automation',
    highlightGlow: 'from-blue-500/20 to-cyan-500/20',
    accentColor: '#4285F4',
    useCases: ['Proposal Generation', 'Client Agreements', 'RAG Knowledge Base', 'SOP Publishing']
  },
  {
    id: 'tech-googlesheets',
    name: 'Google Sheets',
    category: 'Productivity & DB',
    logoKey: 'googlesheets',
    tagline: 'Data Management',
    description: 'Data Management — Real-time transaction ledgers, executive dashboards, bulk CSV data parsing, and formula reconciliation.',
    extendedOverview: 'Zero-latency row updates via API, automated pivot calculations, and multi-team transaction tracking.',
    proficiency: 'Full Automation',
    highlightGlow: 'from-emerald-500/20 to-teal-500/20',
    accentColor: '#0F9D58',
    useCases: ['Real-Time Ledgers', 'Financial Auditing', 'Reporting Dashboards', 'Bulk CSV Processing']
  },
  {
    id: 'tech-googledrive',
    name: 'Google Drive',
    category: 'Productivity & DB',
    logoKey: 'googledrive',
    tagline: 'Cloud File Storage',
    description: 'Cloud File Storage — Automated client asset organization, file permissions management, and centralized media archival.',
    extendedOverview: 'Automated folder hierarchy provisioning for new clients, attachment storage, and secure shared drive syncing.',
    proficiency: 'Full Integration',
    highlightGlow: 'from-amber-500/20 via-blue-500/20 to-emerald-500/20',
    accentColor: '#2684FC',
    useCases: ['Client Folder Provisioning', 'Document Archiving', 'Media Ingestion', 'Permission Provisioning']
  },
  {
    id: 'tech-webhook',
    name: 'Webhook',
    category: 'Protocols & APIs',
    logoKey: 'webhook',
    tagline: 'Real-Time Event Trigger',
    description: 'Real-Time Event Trigger — Zero-latency event listeners, HMAC signature verification, and deduplicated asynchronous queues.',
    extendedOverview: 'Sub-second event ingestion across any platform with cryptographic payload verification and retry queues.',
    proficiency: 'Deep Engineering',
    highlightGlow: 'from-cyan-500/20 via-indigo-500/20 to-purple-500/20',
    accentColor: '#06B6D4',
    useCases: ['Instant Event Triggers', 'HMAC Verification', 'Deduplication Queues', 'Cross-Platform Sync']
  },
  {
    id: 'tech-restapi',
    name: 'REST API',
    category: 'Protocols & APIs',
    logoKey: 'restapi',
    tagline: 'Application Integration',
    description: 'Application Integration — Bespoke microservice endpoints, OAuth 2.0 security handshakes, and schema-validated JSON payloads.',
    extendedOverview: 'Standardized CRUD interfaces, token refresh routines, and structured data exchange across modern cloud ecosystems.',
    proficiency: 'Deep Engineering',
    highlightGlow: 'from-emerald-500/20 via-cyan-500/20 to-blue-500/20',
    accentColor: '#10B981',
    useCases: ['Custom Endpoints', 'OAuth 2.0 Auth', 'JSON Schema Validation', 'Software Bridges']
  },
  {
    id: 'tech-httprequest',
    name: 'HTTP Request',
    category: 'Protocols & APIs',
    logoKey: 'httprequest',
    tagline: 'External Service Communication',
    description: 'External Service Communication — Custom headers, multipart uploads, rate-limit backoffs, and status code error handling.',
    extendedOverview: 'Low-level HTTP protocol handling with automated exponential backoff retries and payload sanitization.',
    proficiency: 'Core Infrastructure',
    highlightGlow: 'from-amber-500/20 via-rose-500/20 to-purple-500/20',
    accentColor: '#F59E0B',
    useCases: ['Raw Payload Posting', 'Exponential Backoff', 'Multipart Uploads', 'External Service Handshakes']
  },
  {
    id: 'tech-javascript',
    name: 'JavaScript',
    category: 'Protocols & APIs',
    logoKey: 'javascript',
    tagline: 'Custom Code & Logic',
    description: 'Custom Code & Logic — Bespoke data transformations, complex business calculations, async promises, and workflow script nodes.',
    extendedOverview: 'Advanced data mapping, regex extraction, asynchronous array manipulation, and node-level custom compute scripts.',
    proficiency: 'Full-Stack Code',
    highlightGlow: 'from-yellow-500/20 via-amber-500/20 to-yellow-600/20',
    accentColor: '#F7DF1E',
    useCases: ['Array Transformations', 'Regex Parsing', 'Async Node Scripts', 'Math Calculation']
  },
  {
    id: 'tech-json',
    name: 'JSON',
    category: 'Protocols & APIs',
    logoKey: 'json',
    tagline: 'Data Exchange Format',
    description: 'Data Exchange Format — Nested schema validation, normalized payload payloads, data serialization, and LLM structured output.',
    extendedOverview: 'Deterministic JSON Schema guarantees for AI models, deep object destructuring, and serialized payload streaming.',
    proficiency: 'Core Standard',
    highlightGlow: 'from-sky-500/20 via-cyan-500/20 to-indigo-500/20',
    accentColor: '#38BDF8',
    useCases: ['LLM Structured Outputs', 'API Payloads', 'Schema Validation', 'Data Normalization']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Autonomous AI Agents & Multi-Agent Swarms',
    subtitle: 'Custom reasoning engines that execute real work across your business software.',
    iconName: 'Bot',
    deliverables: [
      'Tailored LLM prompt architecture & deterministic tool calling',
      'Autonomous lead qualification and CRM enrichment agents',
      'Multimodal document & invoice parsing with 99.8%+ accuracy',
      'Human-in-the-loop fallback safeguards and approval workflows',
      'Continuous prompt testing and latency optimization'
    ],
    idealFor: 'B2B Companies, Agencies & SaaS scaling past manual operations',
    timeline: '2–4 Weeks',
    badge: 'High Demand'
  },
  {
    id: 'srv-2',
    title: 'GoHighLevel Infrastructure & Growth Architecture',
    subtitle: 'Enterprise CRM setup, custom snapshots, and bulletproof appointment retention engines.',
    iconName: 'Building2',
    deliverables: [
      'Complete 5-stage appointment lifecycle engine (Confirmation, Reminder, Reschedule, No-Show, Follow-Up)',
      'Custom sub-account snapshots with reusable custom values and fields',
      'Conversational 2-way SMS/WhatsApp booking bots',
      'Stripe recurring billing, invoices, and membership portal setup',
      'Rep leaderboard and team commission tracking workflows'
    ],
    idealFor: 'Agencies, Medical/Clinic Networks, Service Contractors & Consultancies',
    timeline: '1–3 Weeks',
    badge: 'Flagship Service'
  },
  {
    id: 'srv-3',
    title: 'Complex n8n & Make Workflow Orchestration',
    subtitle: 'High-throughput, self-healing data pipelines connecting your entire software stack.',
    iconName: 'Workflow',
    deliverables: [
      'Self-hosted or Cloud n8n cluster setup with Docker and Redis queues',
      'Advanced error routing, automatic retry queues, and Slack alert webhooks',
      'Two-way multi-system synchronization without data drift',
      'Custom JavaScript/Python nodes for specialized calculations',
      'Full API documentation and architecture flow diagrams'
    ],
    idealFor: 'Enterprises needing reliable custom integrations beyond standard Zapier limits',
    timeline: '2–5 Weeks'
  },
  {
    id: 'srv-4',
    title: 'Bespoke API Integrations & Webhook Systems',
    subtitle: 'Connecting proprietary databases, legacy software, and modern cloud tools with zero friction.',
    iconName: 'Network',
    deliverables: [
      'Custom RESTful endpoints and microservices',
      'Secure OAuth 2.0 flow integrations and API key rotation',
      'HMAC webhook signature validation and payload sanitization',
      'Automated rate-limit throttling and bulk batching algorithms',
      'Complete end-to-end telemetry and execution logging'
    ],
    idealFor: 'Companies with bespoke internal tools or legacy ERPs',
    timeline: '2–4 Weeks'
  }
];

export const IMPACT_METRICS = [
  {
    metric: '75%',
    label: 'Reduction in Repetitive Manual Work',
    detail: 'Routine admin, copy-pasting data, and calendar chasing eliminated completely through automated triggers.'
  },
  {
    metric: '< 45s',
    label: 'Average Lead Response Time',
    detail: 'Down from 4.8 hours industry average. Inbound prospects are engaged while buying intent is at its peak.'
  },
  {
    metric: '3.4x',
    label: 'Increase in Qualified Pipeline',
    detail: 'Higher conversion from initial click to booked consultation with zero ghosting or missed touchpoints.'
  },
  {
    metric: '99.9%',
    label: 'System Uptime & Data Accuracy',
    detail: 'Built with fault-tolerant retry queues and automated fallback pathways for continuous enterprise reliability.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Vanguard Growth Advisory',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'YAS Automation completely re-engineered our client acquisition pipeline. The GoHighLevel reminder and no-show recovery workflow alone recovered over $45,000 in deals within our first 60 days. Yasser builds like a true senior systems architect.',
    highlight: 'Recovered $45,000 in pipeline within 60 days',
    metricsResult: '+34% Show-up Rate'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'VP of Operations',
    company: 'Aether Logistics Group',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'Our team was drowning in vendor invoices and manual ERP entries. The custom Gemini vision parsing pipeline designed by Yasser reduced our billing cycle from 4 days to literally under 2 minutes with zero data entry errors.',
    highlight: 'Saved 140+ hours per month of manual accounting',
    metricsResult: '99.9% Accuracy'
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'Managing Director',
    company: 'ScalePoint Media',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Unlike most freelancers who just throw basic Zapier templates together, Yasser Usman builds enterprise-grade n8n systems with proper error logging and failover logic. A world-class partner for any serious agency.',
    highlight: 'Enterprise-grade architecture with zero downtime',
    metricsResult: '68% Support Automation'
  }
];

export const FAQS = [
  {
    question: 'How is YAS Automation different from hiring a standard freelancer?',
    answer: 'I focus on business workflows using GoHighLevel, n8n, and AI integrations. We identify the operational problem, map the integrations, and agree on error handling, validation, queueing, and documentation appropriate to the project.'
  },
  {
    question: 'How long does a typical automation project take to build and deploy?',
    answer: 'Indicative timelines are 7–14 days for focused GoHighLevel or n8n workflows and 2–4 weeks for more complex AI and API integrations. Scope, access to your tools, testing, and feedback determine the actual schedule; confirm it before work starts.'
  },
  {
    question: 'What happens if a third-party API changes or experiences downtime?',
    answer: 'We plan how the workflow should handle outages: retries, queued events, validation, and alerts to the right person. The approach depends on the connected tools and data. Agree on monitoring, support, and exception handling as part of the scope.'
  },
  {
    question: 'Can you integrate with our existing proprietary or legacy software?',
    answer: 'I assess the APIs, webhooks, database access, and permission requirements of your existing tools before recommending an integration. Some legacy systems have limits; we clarify those during scoping.'
  }
];
