# Simulated Mom Test Notes: VIS Paper Planner

**Project Context:** An application that helps users compare their paper idea with all papers from the `vispubdata` dataset.

### Key Note-Taking Symbols (from The Mom Test)
* `:)` Excited | `:(` Angry | `:|` Embarrassed | `☇` Pain or problem | `⚽` Goal or job-to-be-done | `☐` Obstacle | `⤴` Workaround | `^` Background or context | `☑` Feature request | `＄` Money/budget | `♀` Mentioned specific person/company | `☆` Follow-up task

---

## Interview 1: "Sarah" (2nd-Year PhD Student in VIS)

`^` Sarah is preparing her second first-author paper for IEEE VIS and is in the ideation phase.
`⚽` **Goal:** Ensure her idea hasn't been done before and is novel enough to be accepted.

**Q: "Walk me through how you evaluated your last paper idea before starting the implementation."**
* "I spent weeks reading papers. I just searched Google Scholar and the IEEE Xplore library for keywords."
* `☇` **Pain:** "It was terrifying because I kept finding papers that sounded exactly like my idea. I had to read 30 papers just to realize my specific approach was slightly different."
* `⤴` **Workaround:** "I created a giant spreadsheet with columns for 'technique', 'dataset', 'evaluation type' to map out the space."
* `☐` **Obstacle:** "Sometimes older papers use different terminology for the exact same concepts, so my keyword searches completely miss them."

**Q: "How do you know when you've done enough literature review?"**
* `:|` "I don't. I just stop when my advisor says it's enough or the deadline is too close."

**Analysis:** Sarah's core problem isn't access to papers, it's *confidence in novelty* and *mapping the problem space* efficiently without relying solely on exact keyword matches.

---

## Interview 2: "Dr. Chen" (Professor / Principal Investigator)

`^` Dr. Chen runs a lab of 5 PhD students and serves on the IEEE VIS program committee.
`⚽` **Goal:** Quickly assess if a student's proposed project is publishable and point them to relevant prior work.

**Q: "When a student pitches a new paper idea, what's your process for validating its novelty?"**
* "I rely mostly on my own memory of the literature. If it sounds familiar, I tell them to look up specific authors or papers."
* `☇` **Pain:** "I can't remember everything, especially from 10 years ago. Sometimes a student works on something for months and then a reviewer points out a paper from 2012 that did the exact same thing."
* `⤴` **Workaround:** "I have them write an 'X but Y' statement. Like, 'We do X like paper A, but Y is our novel contribution.' I force them to find paper A."
* `☐` **Obstacle:** "Students often cite recent papers but miss foundational papers from the 90s and early 00s because search algorithms favor recent highly-cited work."

**Q: "How do you handle the literature review section when writing?"**
* "We usually write it last, just to justify why our paper exists. We look at papers cited by similar recent works."

**Analysis:** Dr. Chen needs a way to catch "blind spots" (especially older papers) that his memory and standard citation trees might miss. The "X but Y" framework is a strong mental model we could leverage.

---

## Interview 3: "Alex" (Post-doc Researcher)

`^` Alex has published 6+ VIS papers and is currently writing a State of the Art (STAR) report.
`⚽` **Goal:** Comprehensively map an entire sub-domain and find structural gaps in the literature.

**Q: "Tell me about the last time you had to map out existing research for a new project."**
* "I actually downloaded everything from the `vispubdata` dataset because it's clean and has all VIS papers."
* `⤴` **Workaround:** "I wrote a Python script to extract TF-IDF keywords from all abstracts to cluster them."
* `☇` **Pain:** "The script took me a week to refine, and even then, the clusters were noisy. I still had to manually organically read hundreds of abstracts."
* `☐` **Obstacle:** "`vispubdata` doesn't have full text, only abstracts. So I only know what the authors claim in the abstract, not the specifics of their actual evaluation methodology."
* `☑` **Feature request:** "I wish I could just throw in a paragraph describing my idea and see what clusters around it." *(Note: Behind this request is the desire to move from keyword-matching to semantic-matching).*

**Analysis:** Power users are already trying to hack `vispubdata` to do this programmatically but struggle with the tooling and the manual effort of semantic clustering.

---

## Synthesis & Key Takeaways
1. **The Problem:** Keyword search is broken for idea validation due to terminology shifts over time.
2. **The Workaround:** Users manually build spreadsheets mapping out "features" or dimensions of papers. 
3. **The Goal:** Provide confidence that a specific 'idea' is novel, particularly highlighting foundational/older works that might share semantic similarity but differ in exact terminology.
