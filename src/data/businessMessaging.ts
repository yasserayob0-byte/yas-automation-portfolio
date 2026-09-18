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
  { title: 'Discover', description: 'Understand the business problem, goals, and current workflow.' },
  { title: 'Map', description: 'Design the automation flow, integrations, and logic.' },
  { title: 'Build', description: 'Develop, test, and validate the automation.' },
  { title: 'Launch', description: 'Deploy, document, and optimize the system.' },
];
