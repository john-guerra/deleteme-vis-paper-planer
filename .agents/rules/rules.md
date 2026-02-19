---
trigger: always_on
---

# Antigravity Rules: VIS Paper Planner

## 1. Tech Stack
- Frontend: Next.js (React), Vanilla CSS.
- Backend: Node.js / TypeScript.
- AI/Embeddings: `transformers.js` (No paid APIs).
- Database/Data: Parsing local CSV (`project_memory/IEEE VIS papers 1990-2024 - Main dataset.csv`) and running in-memory or lightweight vector search.

## 2. Methodology: Scrum & Sprints
- Work must be organized into clear **Sprints** (Milestones).
- Every sprint must aim to produce a functional **MVP** or deployable feature increment.
- **Task Tracking:** We will use a GitHub Issues-style approach (or a structured markdown equivalent in `.agents/workflows` or `project_memory`) to track tasks.

## 3. Test-Driven Development (TDD)
- **Mandatory Testing:** All new features, utility functions, and API endpoints must be fully tested.
- **Workflow:** Write tests *before* or alongside the implementation. If a feature is requested, the very first step of execution should be setting up the test harness for it.
- **Framework:** Use standard testing libraries compatible with Next.js and Node (e.g., Jest, React Testing Library).

## 4. UI/UX Aesthetics
- Interface must feel responsive, premium, and alive.
- Use Vanilla CSS for dynamic animations, hover effects, and modern typography.
- Emphasize clarity in data presentation (especially when comparing related papers).

## 5. File Management
- All major project architecture and reasoning documents go to `project_memory/`.
- Ensure `README.md` at the root is constantly updated with the list of main files and project structural decisions.