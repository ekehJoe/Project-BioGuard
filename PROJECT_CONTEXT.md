# PROJECT_CONTEXT.md

# Project BioGuard

**Version:** v0.1.0

**Status:** Active Development

**Project Owner:** @SainTjoe

---

# 1. Project Overview

BioGuard is an AI-powered livestock biosecurity platform currently under development.

The first implementation focuses on **Foot-and-Mouth Disease (FMD)** reporting through a mobile-first web application.

The long-term vision is to expand BioGuard into a comprehensive livestock disease surveillance platform capable of supporting multiple diseases, AI-assisted outbreak assessment, workflow automation, and decision support for veterinarians and livestock stakeholders.

At the current stage, the project consists primarily of a frontend application, with backend automation and AI capabilities under active development.

---

# 2. Project Objectives

The objectives of BioGuard are to:

- Digitize livestock disease reporting.
- Standardize field data collection.
- Reduce delays in disease reporting.
- Support AI-assisted disease assessment.
- Automate reporting workflows.
- Improve outbreak response.
- Build a scalable biosecurity platform.

---

# 3. Current Scope

The current version of BioGuard is limited to **Foot-and-Mouth Disease (FMD)**.

Current capabilities include:

- Mobile-first interface
- Landing page
- Dashboard
- Multi-step FMD reporting wizard
- Client-side form validation

The current application does **not yet** include:

- Database storage
- Authentication
- AI analysis
- Automated notifications
- Disease prediction
- Multi-disease support

These capabilities are planned for future releases.

---

# 4. Technology Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

## Workflow Automation

- n8n (integration in progress)

## AI

Planned:

- OpenAI
- Google Gemini

## Backend

Planned:

- Supabase / PostgreSQL

---

# 5. Development Environment

Development is performed primarily on an Android phone using:

- Termux
- Ubuntu (proot-distro)
- code-server
- Git
- GitHub

This project intentionally demonstrates that meaningful software engineering and AI automation can be developed using lightweight hardware and open-source tools.

---

# 6. Current Architecture

Current architecture:

```
User

↓

BioGuard Frontend

↓

Form Validation

↓

JSON Payload (planned submission)

↓

n8n Webhook (integration in progress)
```

Future architecture:

```
User

↓

BioGuard Frontend

↓

n8n Webhook

↓

Workflow Validation

↓

AI Disease Analysis

↓

Database

↓

Notifications

↓

Reporting Dashboard
```

---

# 7. Current Development Status

## Completed

- GitHub repository established
- Frontend project structure         established
- Landing page
- Dashboard
- Multi-step FMD Reporting Module
- Client-side validation
- GitHub version control

---

## In Progress

- Webhook integration
- JSON payload submission
- End-to-end testing
- AI workflow planning

---

## Planned

- AI disease assessment
- Database integration
- Authentication
- Notifications
- Dashboard analytics
- Multi-disease support

---

# 8. Design Principles

The project follows these principles:

- Keep the architecture modular.
- Prefer readable code over clever code.
- Avoid unnecessary dependencies.
- Build features incrementally.
- Test before expanding functionality.
- Document major engineering decisions.

---

# 9. Repository Organization


The repository currently contains:

```text
assets/
builder/
css/
data/
js/
pages/
index.html
README.md
PROJECT_CONTEXT.md
AI_INSTRUCTIONS.md
CHANGELOG.md
```

As the project evolves, additional directories and files may be introduced for backend services, database schemas, automated testing, deployment, and technical documentation.
---

# 10. Current Engineering Priorities

Current development priorities are:

1. Complete frontend functionality.
2. Connect the frontend to n8n.
3. Validate JSON payloads.
4. Test webhook communication.
5. Improve reliability.
6. Prepare AI integration.

New features should not compromise the stability of existing functionality.

---

# 11. Long-Term Vision

Future versions of BioGuard are expected to support:

- Multiple livestock diseases
- AI-assisted diagnosis support
- Outbreak risk scoring
- Farm management
- Veterinary dashboards
- Image uploads
- GIS/GPS integration
- Predictive analytics
- National disease surveillance
- Decision support for veterinary authorities

These features are aspirational and are **not part of the current implementation**.

---

# 12. Guidance for AI Assistants

If you are assisting with this project:

1. Read this document before analyzing the codebase.
2. Treat the repository as the authoritative source for implemented functionality.
3. Distinguish between:
   - completed features,
   - work in progress,
   - planned features.
4. Do not assume planned features already exist.
5. Before proposing architectural changes, understand the current implementation.
6. Prefer incremental improvements over large rewrites.
7. Preserve working functionality unless there is a clear technical justification for change.
8. Explain significant design recommendations before implementing them.
9. If requirements are unclear, ask questions rather than making assumptions.
10. Keep solutions compatible with the project's lightweight development environment whenever practical.

---

# 13. Definition of Success

The immediate milestone for BioGuard is:

- A fully functional FMD reporting application capable of sending validated reports to an n8n workflow.

The long-term success of BioGuard is:

- A scalable AI-powered livestock biosecurity platform that supports disease reporting, intelligent analysis, workflow automation, and decision support across multiple livestock diseases.

---

# 14. Living Document

This document should be updated whenever:

- major features are completed,
- architecture changes,
- technologies change,
- project priorities change,
- significant engineering decisions are made.

It is intended to remain the primary context document for developers and AI assistants working on Project BioGuard.
