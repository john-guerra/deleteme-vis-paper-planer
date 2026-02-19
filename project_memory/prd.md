# VIS Paper Planner: Product Requirements Document (PRD)

## 1. Project Overview
VIS Paper Planner is a web application designed to help visualization (VIS) researchers evaluate their paper ideas, drafts, and research queries against the history of IEEE VIS publications (1990-2024). It allows users to confidently discover related work, evaluate conference fit, find appropriate application areas, and receive actionable writing feedback.

## 2. Target Audience
- **Novice Researchers & Students:** Validating idea novelty.
- **Principal Investigators:** Quickly evaluating student pitches and finding historical blind spots.
- **Writers:** Streamlining the literature review process.

## 3. Core Features & Value Proposition

### 3.1. Semantic Literature Search
- **Input:** User provides a paper idea, a draft abstract, or an open research question.
- **Process:** The system generates a semantic embedding of the input and retrieves the most conceptually similar papers from the `vispubdata` (1990-2024) dataset.
- **Output:** A ranked list of related work, highlighting similarities beyond exact keyword matches.

### 3.2. Conference Fit & Application Area Analysis
- **Process:** Based on the retrieved nearest neighbors, the system analyzes historical trends.
- **Output:** Suggestions on whether the idea fits the IEEE VIS scope and recommendations for appropriate application domains (e.g., biology, finance, systems).

### 3.3. Actionable Feedback
- **Output:** Recommendations on what elements of the paper the user should focus on to improve success (e.g., "Your idea is similar to Paper X, but they lacked a robust user study. You should focus your evaluation there.").

## 4. Technical Requirements

### 4.1. Data & Processing
- **Source:** `IEEE VIS papers 1990-2024 - Main dataset.csv` (provided in `project_memory`).
- **Embeddings:** Use `transformers.js` to generate sentence embeddings. Note: We will use only Abstract, Title, and relevant metadata.
- **Database:** Supabase with PostgreSQL. We will utilize the `pgvector` extension in Supabase to store and perform efficient nearest-neighbor searches on the generated embeddings.

### 4.2. Tech Stack
- **Frontend:** Next.js (React), TailwindCSS (for rapid, consistent design system implementation).
- **Backend/API:** Node.js / TypeScript (Next.js API routes), Supabase Edge Functions.
- **Database/Search:** Supabase (PostgreSQL + `pgvector`).

## 5. Development Methodology
- **Process:** Adaptation of Scrum using GitHub issues for coordination.
- **TDD:** Test-Driven Development approach. All implemented features must have corresponding tests.
- **Sprints:** Work is organized into sprints/milestones, with each sprint delivering a Minimum Viable Product (MVP) or strict feature increment.
