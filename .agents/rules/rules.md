---
trigger: always_on
---

# Antigravity Rules: VIS Paper Planner

## 1. Tech Stack
- Frontend: Next.js (React), TailwindCSS.
- Backend: Supabase (PostgreSQL backend), Node.js / TypeScript API routes.
- Vector DB: Supabase `pgvector`.
- AI/Embeddings: `transformers.js` (No paid APIs).
- Data Source: `project_memory/IEEE VIS papers 1990-2024 - Main dataset.csv`.

## 2. Methodology: Scrum & Sprints
**MANDATORY SCURM/SPRINT WORKFLOW:**
- Work must be organized into clear **Sprints** (Milestones).
- Every sprint must aim to produce a functional **MVP** or deployable feature increment.
- **GitHub Issues:** Use a GitHub Issues-style adaptation to track all work. When implementing new features, they *must* be structured as specific issues/tasks within a sprint. No ad-hoc development.

## 3. Test-Driven Development (TDD)
**MANDATORY TDD WORKFLOW:**
- **Write Tests First:** Everything we implement *should be properly tested*. Do not write production code until a failing test has been established.
- **Mandatory Testing:** All new features, utility functions, and API endpoints must have adequate test coverage.
- **Framework:** Use standard testing libraries compatible with Next.js and Node (e.g., Jest, React Testing Library, Supabase testing utilities).

## 4. Code Quality: Linting & Formatting
**MANDATORY LINTING RULES:**
- All code must pass strict linting and formatting rules before being considered "done."
- No `any` types allowed in TypeScript unless absolutely necessary and documented.
- Run `npm run lint` regularly and before wrapping any Sprint task.

## 5. UI/UX Aesthetics
- Interface must feel responsive, premium, and alive.
- Use TailwindCSS for dynamic animations, hover effects, and modern typography.
- Emphasize clarity in data presentation (especially when comparing related papers).

## 6. File Management
- All major project architecture and reasoning documents go to `project_memory/`.
- Ensure `README.md` at the root is constantly updated with the list of main files and project structural decisions.