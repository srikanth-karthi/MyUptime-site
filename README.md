[![Netlify Status](https://api.netlify.com/api/v1/badges/7ff498ed-ad56-4d0e-bba3-433d85db160c/deploy-status)](https://app.netlify.com/projects/srikanth-dev/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/7af8afc8-05ac-4a7d-9678-a64c368b2eba/deploy-status)](https://app.netlify.com/projects/ai-srikanth/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa8b92a7-c499-4927-8d86-06bddd3bd62c/deploy-status)](https://app.netlify.com/projects/blogs-srikanth/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca1cd3fb-f66a-4de6-a7fa-07d4fe22af27/deploy-status)](https://app.netlify.com/projects/srikanth-links/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/61bac8bb-2887-4527-969e-599755d9aaa5/deploy-status)](https://app.netlify.com/projects/notes-srikanth/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ba020be-fe02-4647-9af6-9ffba604704d/deploy-status)](https://app.netlify.com/projects/srikanth-terminal/deploys)

[![Netlify Status](https://api.netlify.com/api/v1/badges/39b275e5-5423-4fed-ab1e-b703c7676eeb/deploy-status)](https://app.netlify.com/projects/art-srikanth/deploys)

Uptime Monitoring System Architecture

  Overall System Flow

  The system is a distributed uptime monitor built on Cloudflare infrastructure:

  Config → Cloudflare Worker (cron) → Health Checks → KV Storage → Next.js Frontend → Users

  Key Components

  1. Configuration Layer
  - uptime.config.ts - Defines 5 monitored services, notification settings, maintenance windows
  - deploy.tf - Terraform infrastructure definitions

  2. Monitoring Layer (Cloudflare Worker)
  - Runs every 5 hours via cron trigger
  - Executes HTTP GET checks on configured endpoints
  - Tracks latency, incidents, up/down status
  - Stores results in Cloudflare KV namespace

  3. Storage Layer
  - Cloudflare KV for persistent state
  - Stores incident history (90 days), latency data (12 hours)
  - Uses write cooldown (5 hours) to optimize KV operations

  4. Frontend Layer (Next.js)
  - Status page with grouped service display
  - Auto-refresh when data is stale (>5 minutes)
  - Components: OverallStatus, MonitorList, MaintenanceAlert
  - API endpoint reads KV data and formats for UI

  5. Notification Layer
  - Apprise integration for Telegram alerts
  - Grace period (5 minutes) before notifications
  - Maintenance window suppression

  Pipeline Flow

  1. Scheduled Check: Worker triggered every 5 hours
  2. Health Monitoring: HTTP checks against 5 services with 3s timeout
  3. State Processing: Results processed, incidents tracked
  4. Data Persistence: State saved to KV with cooldown optimization
  5. Alert Processing: Notifications sent on status changes
  6. Frontend Display: Next.js app renders real-time status page

  Deployment Process

  GitHub Actions workflow:
  1. Build worker (TypeScript → JavaScript)
  2. Terraform deploy (worker, KV namespace, cron trigger)
  3. Build Next.js frontend
  4. Deploy to Cloudflare Pages
  5. Manual Durable Object binding setup

  The system provides 24/7 monitoring with global Cloudflare edge locations and real-time status
  updates.