# PROJECT_CONTEXT.md

# Project BioGuard
### AI-Powered Livestock Biosecurity Tracking & Outbreak Intelligence Platform

**Project Status:** Active Development

**Project Owner:** @SainTjoe

**Primary AI Engineering Assistant:** Claude AI

**Secondary AI Consultant:** ChatGPT

---

# 1. Executive Summary

Project BioGuard is an AI-powered livestock biosecurity platform designed to modernize livestock disease surveillance, reporting, outbreak detection, and response.

The objective is to replace fragmented and manual disease reporting processes with an intelligent system capable of collecting field reports, analyzing disease risk using AI, orchestrating automated workflows, notifying stakeholders, and supporting evidence-based outbreak management.

The project is intentionally being developed using lightweight technologies that can be built and maintained from an Android device, proving that enterprise-grade automation can be created without expensive infrastructure.

BioGuard is also the capstone project for an AI Automation learning journey and is intended to demonstrate production-level software engineering, AI orchestration, and workflow automation skills.

---

# 2. Project Vision

To become an intelligent livestock biosecurity platform capable of:

- Early disease detection
- AI-assisted outbreak assessment
- Automated emergency response
- Regional surveillance
- Government and veterinary reporting
- Farm risk scoring
- Supply-chain protection

The long-term goal is to evolve BioGuard into a scalable platform that can support livestock industries across multiple countries.

---

# 3. Problem Statement

Livestock disease reporting in many regions suffers from:

- Delayed reporting
- Manual paperwork
- Poor communication
- Lack of centralized records
- Slow outbreak response
- Limited access to veterinary intelligence

BioGuard addresses these issues through automation and artificial intelligence.

---

# 4. Core Objectives

The project aims to:

- Digitize disease reporting.
- Standardize field data collection.
- Automate report processing.
- Integrate AI into disease assessment.
- Reduce response time.
- Support veterinary decision-making.
- Build a scalable outbreak intelligence system.

---

# 5. Development Philosophy

This project follows several engineering principles.

## Simplicity

Prefer straightforward solutions over unnecessary complexity.

## Incremental Development

Features are added gradually and tested individually.

## AI-Assisted Engineering

AI is used to accelerate development while maintaining human oversight.

## Mobile-First Development

The project is primarily developed using an Android phone with Termux and code-server.

## Automation First

Where possible, workflows should be automated rather than handled manually.

---

# 6. Development Timeline

## Phase 1

Project conception.

Initial planning.

Research into livestock biosecurity.

---

## Phase 2

Frontend prototype.

HTML

CSS

JavaScript

---

## Phase 3

Multi-step disease reporting wizard.

Navigation.

Validation.

Progress tracking.

---

## Phase 4

n8n integration planning.

Webhook architecture.

Cloudflare Tunnel.

JSON payload design.

---

## Phase 5

AI integration planning.

Disease analysis.

Automation workflows.

Notification system.

---

## Phase 6 (Current)

System integration.

Webhook communication.

Testing.

Bug fixing.

Repository organization.

---

# 7. Current Technology Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

---

## Automation

- n8n

---

## AI

Planned:

- OpenAI
- Google Gemini

---

## Backend

Current:

Webhook-based architecture.

Future:

Supabase / PostgreSQL

---

## Development Environment

Primary device:

Android smartphone.

Development tools:

- Termux
- Ubuntu (proot-distro)
- code-server
- Git
- GitHub
- Cloudflared

---

# 8. High-Level Architecture

```
User

↓

BioGuard Frontend

↓

JSON Payload

↓

n8n Webhook

↓

Validation

↓

AI Analysis

↓

Decision Engine

↓

Database

↓

Notifications

↓

Reporting Dashboard
```

---

# 9. Current Features

Completed:

✔ Responsive frontend

✔ Multi-step reporting wizard

✔ Navigation controls

✔ Form validation

✔ Modular JavaScript

✔ Cloudflare Tunnel setup

✔ n8n deployment

✔ GitHub repository

✔ Project documentation

---

# 10. Features Under Development

- Reliable webhook submission
- AI disease analysis
- Risk classification
- Database storage
- Dashboard
- Analytics
- Notification workflows

---

# 11. Planned Future Features

- Authentication
- User accounts
- Farm management
- GPS integration
- Offline reporting
- Image upload
- AI image analysis
- Vaccination management
- Quarantine recommendations
- Veterinary scheduling
- Interactive dashboards
- Predictive outbreak modeling
- Mobile application
- Public health reporting
- Regional analytics
- National disease surveillance

---

# 12. Design Principles

Maintain:

- Modular code
- Readable functions
- Clear naming
- Reusable components
- Separation of concerns

Avoid:

- Monolithic files
- Duplicate code
- Hidden logic
- Hardcoded configuration

---

# 13. Coding Standards

- Prefer descriptive names.
- Document important logic.
- Keep functions focused.
- Validate inputs.
- Handle errors gracefully.
- Maintain consistent formatting.

---

# 14. Current Repository Structure

The repository is organized around a lightweight frontend with supporting JavaScript modules and documentation.

Future directories may include backend services, database schemas, AI prompt libraries, testing, and deployment automation as the platform grows.

---

# 15. AI Integration Strategy

Artificial intelligence will be used for:

- Disease classification
- Outbreak risk scoring
- Recommendation generation
- Report summarization
- Decision support
- Pattern recognition

AI should assist human experts rather than replace them.

---

# 16. Current Challenges

Current engineering priorities include:

- Stable webhook communication
- End-to-end testing
- Robust error handling
- Workflow reliability
- Improved validation
- Scalable architecture

---

# 17. Engineering Constraints

This project is intentionally developed on limited hardware.

Development primarily occurs on:

- Android phone
- Termux
- Ubuntu container
- code-server

Solutions should remain lightweight and avoid unnecessary dependencies whenever practical.

---

# 18. Roadmap

## Short-Term

Complete webhook integration.

Connect frontend to n8n.

Validate payloads.

Improve reliability.

---

## Medium-Term

Integrate AI analysis.

Connect database.

Build dashboards.

Improve reporting.

---

## Long-Term

Scale BioGuard into a production-ready livestock biosecurity platform supporting multiple diseases, regions, and users with advanced AI-powered analytics.

---

# 19. AI Assistant Guidelines

If you are an AI assistant contributing to this project:

1. Read this entire document before making recommendations.
2. Understand the repository before suggesting changes.
3. Preserve the existing architecture unless there is a compelling engineering reason to change it.
4. Explain major architectural recommendations before implementing them.
5. Prefer incremental improvements over complete rewrites.
6. Maintain compatibility with existing workflows whenever possible.
7. Keep the code modular and well documented.
8. If requirements are unclear, ask questions before making assumptions.
9. Prioritize maintainability, readability, and scalability.
10. When proposing new features, explain the trade-offs, dependencies, and implementation steps.

---

# 20. Definition of Success

BioGuard will be considered successful when it can:

- Collect disease reports reliably.
- Analyze outbreak risk with AI.
- Trigger automated workflows.
- Store structured records.
- Notify stakeholders automatically.
- Support scalable livestock disease surveillance.
- Serve as a production-quality demonstration of AI automation and software engineering.

---

# 21. Living Document

This document is intended to evolve alongside the project.

Whenever significant architectural decisions, milestones, technologies, or workflows change, this file should be updated to reflect the current state of Project BioGuard.

It serves as the primary knowledge base for developers, collaborators, and AI assistants working on the project.
