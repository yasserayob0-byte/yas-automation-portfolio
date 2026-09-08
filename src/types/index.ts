export interface WorkflowStep {
  id: string;
  name: string;
  type: 'trigger' | 'action' | 'ai' | 'condition' | 'notification' | 'crm';
  icon: string;
  description: string;
  delay?: string;
  payloadSample?: string;
}

export interface GHLWorkflow {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  businessValue: string;
  impactMetrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  features: string[];
  triggers: string[];
  channels: string[];
  browserUrl: string;
  browserTitle: string;
  steps: WorkflowStep[];
  codeSnippet?: string;
  colorScheme: {
    primary: string;
    border: string;
    bgGlow: string;
    badge: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: string;
  category: 'GoHighLevel' | 'n8n' | 'AI Agents' | 'Custom APIs';
  shortDescription: string;
  fullOverview: string;
  problemSolved: string;
  solutionArchitecture: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  browserUrl: string;
  browserTitle: string;
  liveDemoUrl?: string;
  featured: boolean;
  flowSteps: {
    title: string;
    description: string;
    tech: string;
  }[];
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Core CRM' | 'Orchestration' | 'AI & LLMs' | 'Protocols & APIs' | 'Productivity & DB';
  logoKey: 'gohighlevel' | 'n8n' | 'gemini' | 'openai' | 'slack' | 'airtable' | 'googledocs' | 'googlesheets' | 'googledrive' | 'gmail' | 'webhook' | 'restapi' | 'httprequest' | 'javascript' | 'json';
  tagline: string;
  description: string;
  extendedOverview?: string;
  proficiency: string;
  highlightGlow: string;
  accentColor: string;
  useCases: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  highlight: string;
  metricsResult: string;
}

export interface CaseStudyData {
  id?: string;
  badge?: string;
  title: string;
  tagline: string;
  clientType: string;
  category?: string;
  role?: string;
  timeline?: string;
  liveDemoUrl?: string;
  
 heroScreenshot: {
  imageUrl: string;
  title: string;
  caption: string;
  badge: string;
  browserUrl: string;
};

  overview: {
    executiveSummary: string;
    scopeHighlights?: string[];
  };

  challenge: {
    title?: string;
    summary: string;
    frictionPoints: {
      title: string;
      description: string;
    }[];
  };

  solution: {
    title?: string;
    summary: string;
    corePillars: {
      title: string;
      description: string;
    }[];
  };

  architecture: {
    title?: string;
    description: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      tech: string;
      type?: 'trigger' | 'action' | 'ai' | 'condition' | 'notification' | 'crm';
    }[];
  };

  features: {
    title: string;
    description: string;
    tag?: string;
  }[];

  techStack: {
    name: string;
    category: string;
    role: string;
  }[];

  businessValue: {
    summary: string;
    metrics: {
      label: string;
      value: string;
      description?: string;
      trend?: string;
    }[];
  };

  gallery: {
    id: string;
    title: string;
    category: string;
    imageUrl?: string;
    caption: string;
  }[];

  technicalOverview?: string;
  skillsDemonstrated?: string[];
  whyItMatters?: string;
  workflowModules?: {
    moduleNumber: string;
    title: string;
    description: string;
    tag?: string;
  }[];

  prevProject?: {
    id: string;
    title: string;
    category: string;
  };
  nextProject?: {
    id: string;
    title: string;
    category: string;
  };
}
