export interface ProjectBusinessStory {
  headline: string;
  problem: string;
  solution: string;
  impact: string;
}

// Qualitative outcomes based on the existing workflows, not new performance claims.
export const PROJECT_BUSINESS_STORIES: Record<string, ProjectBusinessStory> = {
  'proj-1': {
    headline: 'Answer Customer Questions Without Keeping Them Waiting',
    problem: 'Repetitive Messenger inquiries keep staff busy while customers wait for answers and sales conversations lose momentum.',
    solution: 'An AI assistant uses business information to answer common questions, maintain conversation context, and route inquiries for follow-up.',
    impact: 'Customers can get routine answers outside staffed hours, leaving the team more time for conversations that need personal attention.',
  },
  'proj-2': {
    headline: 'Prepare Tailored Job Applications With Less Manual Work',
    problem: 'Finding suitable openings and rewriting application documents takes time away from candidate preparation and outreach.',
    solution: 'The workflow collects job listings, matches requirements to a candidate profile, prepares tailored documents, and organizes them for review.',
    impact: 'Less repetitive searching and document preparation, with application materials and opportunities easier to review and track.',
  },
  'proj-3': {
    headline: 'Clear Routine Support Emails and Prioritize Urgent Requests',
    problem: 'Manual inbox sorting and repetitive replies delay customer support and make urgent requests harder to spot.',
    solution: 'AI classifies incoming emails, prepares responses, routes complex requests, and logs activity while notifying the support team.',
    impact: 'Routine requests take less staff time, and the team has a clearer queue of issues that need human judgment.',
  },
  'proj-4': {
    headline: 'Help Sales Focus on the Leads That Need Attention',
    problem: 'Sales staff spend time checking lead details and updating records before they can decide whom to follow up with.',
    solution: 'Incoming leads are validated, scored against business rules, summarized, saved to the CRM, and shared with sales through alerts.',
    impact: 'A more consistent qualification process gives sales the context to prioritize follow-up with less manual administration.',
  },
  'proj-5': {
    headline: 'Keep Patients Moving From Inquiry to Appointment',
    problem: 'Manual booking updates, reminders, and follow-up make it harder for clinic staff to manage cancellations and missed appointments.',
    solution: 'Six connected GoHighLevel workflows coordinate booking, confirmation, cancellation, no-show recovery, and post-appointment follow-up.',
    impact: 'Staff can track each patient’s next step while timely reminders and rebooking messages help keep the schedule moving.',
  },
  'proj-6': {
    headline: 'Turn Incoming Calls Into Booked Appointments',
    problem: 'Missed calls and manual scheduling create friction for customers and extra administration for service teams.',
    solution: 'An AI voice receptionist handles booking requests, checks calendar availability, updates appointments, and records customer details.',
    impact: 'Customers can request appointments around the clock, with fewer scheduling tasks left for staff to complete manually.',
  },
};

export const CLIENT_JOURNEY = [
  { title: 'Discovery', description: 'We discuss where work gets delayed, what it costs your team, and what you want to improve. Together, we choose a useful first workflow.' },
  { title: 'Workflow Mapping', description: 'I map the steps, tools, people, and exceptions. We agree on scope and success criteria before development begins.' },
  { title: 'Automation Development', description: 'I build the repeatable steps and connect your existing tools, with checkpoints so you can review how the workflow behaves.' },
  { title: 'AI Integration', description: 'Where AI adds value, I connect it to relevant business information and define when a person should review or take over.' },
  { title: 'Testing', description: 'We check normal requests, missing information, and failure scenarios against the agreed criteria before approving launch.' },
  { title: 'Deployment', description: 'I help launch the approved workflow and walk your team through daily use, monitoring, and the handover documentation.' },
  { title: 'Optimization', description: 'We review usage and results against the original goals, then prioritize improvements. Ongoing support is agreed as part of the scope.' },
];
