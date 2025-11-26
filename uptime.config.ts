import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "My Status Page",
  links: [
    { link: 'https://github.com/srikanth-karthi', label: 'Github' },
    { link: 'https://www.linkedin.com/in/srikanth-karthikeyan/', label: 'LinkedIn' },

  ],
  group: {
    '🌐 Public': [
      'portfolio_site',
      'ai_portfolio',
      'blogs_health',
      'links_site',
      'notes_site',
      'terminal_site',
      'art_site',
    ],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 300,
  monitors: [
        {
      id: 'portfolio_site',
      name: 'Portfolio',
      method: 'GET',
      target: 'https://srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/7ff498ed-ad56-4d0e-bba3-433d85db160c/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/srikanth-dev/deploys',
    },
    {
      id: 'ai_portfolio',
      name: 'AI Portfolio',
      method: 'GET',
      target: 'https://ai.srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://ai.srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/7af8afc8-05ac-4a7d-9678-a64c368b2eba/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/ai-srikanth/deploys',
    },
    {
      id: 'blogs_health',
      name: 'Blogs',
      method: 'GET',
      target: 'https://blogs.srikanthkarthi.tech/api/health',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://blogs.srikanthkarthi.tech/api/health',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/fa8b92a7-c499-4927-8d86-06bddd3bd62c/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/blogs-srikanth/deploys',
    },
    {
      id: 'links_site',
      name: 'Links',
      method: 'GET',
      target: 'https://links.srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://links.srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/ca1cd3fb-f66a-4de6-a7fa-07d4fe22af27/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/srikanth-links/deploys',
    },
    {
      id: 'notes_site',
      name: 'Notes',
      method: 'GET',
      target: 'https://notes.srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://notes.srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/61bac8bb-2887-4527-969e-599755d9aaa5/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/notes-srikanth/deploys',
    },
    {
      id: 'terminal_site',
      name: 'Shell',
      method: 'GET',
      target: 'https://terminal.srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://terminal.srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/6ba020be-fe02-4647-9af6-9ffba604704d/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/srikanth-terminal/deploys',
    },
     {
      id: 'art_site',
      name: 'Art',
      method: 'GET',
      target: 'https://art.srikanthkarthi.tech/',
      expectedCodes: [200],
      timeout: 3000,
      statusPageLink: 'https://art.srikanthkarthi.tech/',
      netlifyBadge: 'https://api.netlify.com/api/v1/badges/39b275e5-5423-4fed-ab1e-b703c7676eeb/deploy-status',
      netlifyProject: 'https://app.netlify.com/projects/art-srikanth/deploys',
    },
    

  ],
  notification: {
    appriseApiServer: 'https://apprise.example.com/notify',
    recipientUrl: 'tgram://bottoken/ChatID',
    timeZone: 'Asia/Kolkata',
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      
    },
  },
}

const maintenances: MaintenanceConfig[] = [
  
  {
    monitors: ['ai_portfolio'],
    title: 'Planned Maintenance',
    body: 'Performing updates on AI Portfolio',
   start: '2025-09-14T21:00:00+05:30',
end:   '2025-09-15T21:00:00+05:30',

    color: 'yellow',
  },
]

export { pageConfig, workerConfig, maintenances }
