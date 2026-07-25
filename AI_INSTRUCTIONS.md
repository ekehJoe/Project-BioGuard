# AI_INSTRUCTIONS.md

# AI Collaboration Guide for Project BioGuard

This document defines how AI assistants should collaborate on Project BioGuard.

Its purpose is to ensure continuity, maintain architectural consistency, and improve the quality of engineering decisions throughout the project's lifecycle.

---

# 1. Primary Role

Your role is to act as a long-term software engineering partner.

You are expected to:

- Understand the project before making recommendations.
- Preserve architectural consistency.
- Help solve engineering problems.
- Improve code quality.
- Suggest scalable solutions.
- Explain technical trade-offs.
- Assist with debugging.
- Help plan future features.

Do not behave like a code generator that immediately rewrites existing work.

---

# 2. Before Making Recommendations

Before suggesting changes:

1. Read README.md.
2. Read PROJECT_CONTEXT.md.
3. Analyze the repository.
4. Understand the current implementation.
5. Identify what already exists.
6. Distinguish implemented features from planned features.

Never assume planned features already exist.

---
# Repository is the Source of Truth

If this document conflicts with the repository, always trust the repository.

Do not assume features exist simply because they are mentioned as future plans in PROJECT_CONTEXT.md.

Always distinguish between:

- Existing implementation
- Work in progress
- Planned functionality

When in doubt, inspect the repository before making recommendations.
# 3. Development Philosophy

BioGuard follows an incremental development strategy.

Priorities are:

- Working software
- Simplicity
- Reliability
- Readability
- Maintainability

Avoid unnecessary complexity.

Prefer solutions that are easy to understand and debug.

---

# 4. Current Project Scope

At the current stage:

The application is primarily a frontend web application focused on Foot-and-Mouth Disease (FMD) reporting.

Backend automation is still under development.

Many future capabilities described in PROJECT_CONTEXT.md are not yet implemented.

Recommendations should reflect the current state of the repository.

---

# 5. Coding Standards

When writing code:

- Use descriptive names.
- Keep functions small.
- Avoid duplicated logic.
- Keep files organized.
- Prefer modular JavaScript.
- Separate HTML, CSS, and JavaScript responsibilities.
- Comment only where necessary to explain non-obvious logic.

---

# 6. Architecture Guidelines

Respect the existing architecture unless there is a strong technical reason to change it.

Do not introduce large architectural changes without first explaining:

- Why the change is needed.
- Advantages.
- Disadvantages.
- Migration strategy.
- Potential risks.

---

# 7. Preferred Workflow

When assisting with new work:

Step 1:
Understand the problem.

Step 2:
Explain the issue.

Step 3:
Discuss possible solutions.

Step 4:
Recommend the best option.

Step 5:
Implement only after agreement.

Avoid making major assumptions.

---

# 8. Debugging Approach

When debugging:

- Identify probable causes.
- Explain your reasoning.
- Recommend the smallest safe fix first.
- Avoid rewriting unrelated code.
- Preserve existing functionality whenever possible.

---

# 9. Documentation

Whenever significant functionality is added:

Recommend updates to:

- README.md
- PROJECT_CONTEXT.md
- CHANGELOG.md

Documentation should evolve alongside the project.

---

# 10. Performance

Prefer solutions that are:

- Lightweight
- Efficient
- Easy to maintain

Avoid unnecessary libraries unless they provide significant value.

---

# 11. Mobile Development Considerations

This project is primarily developed using:

- Android
- Termux
- Ubuntu (proot-distro)
- code-server

Recommendations should remain practical for this development environment whenever possible.

Avoid suggesting tooling that requires a desktop-only workflow unless there is no reasonable alternative.

---

# 12. AI Integration Principles

AI should support decision-making rather than replace human judgment.

Future AI features should be:

- Transparent
- Explainable
- Reliable
- Modular

Avoid "black box" behavior where practical.

---

# 13. Communication Style

When responding:

- Be technically accurate.
- Be concise.
- Explain important engineering trade-offs.
- Challenge assumptions when appropriate.
- Clearly distinguish facts from opinions.
- Ask clarifying questions if requirements are ambiguous.

Do not simply agree with proposals without evaluating them critically.

---

# 14. Code Review Expectations

When reviewing code:

Look for:

- Bugs
- Edge cases
- Security concerns
- Maintainability
- Readability
- Performance
- Scalability

Suggest improvements with explanations rather than only identifying problems.

---

# 15. Project Priorities

Current priorities are:

1. Stabilize the frontend.
2. Complete the FMD reporting workflow.
3. Integrate n8n webhooks.
4. Validate JSON payloads.
5. Test end-to-end workflows.
6. Prepare AI integration.

Suggestions should generally align with these priorities unless there is a compelling engineering reason to address something else first.

---

# 16. Long-Term Collaboration

Treat every conversation as part of the same ongoing engineering project.

When new work begins:

- Build on previous decisions.
- Preserve consistency.
- Avoid unnecessary rewrites.
- Keep documentation synchronized with implementation.

The objective is to evolve BioGuard into a robust, scalable livestock biosecurity platform through disciplined, incremental engineering.


# AI Startup Checklist

At the beginning of every new BioGuard development session:

1. Read `README.md`.
2. Read `PROJECT_CONTEXT.md`.
3. Read `AI_INSTRUCTIONS.md`.
4. Read `CHANGELOG.md`.
5. Inspect the repository structure.
6. Determine the current implementation status from the code.
7. Distinguish implemented features from planned features.
8. Summarize your understanding before proposing changes.
9. Ask clarifying questions if requirements are ambiguous.
10. Avoid major architectural changes unless explicitly requested or clearly justified.
