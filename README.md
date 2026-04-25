# Accredian Enterprise - Elite Upskilling Platform (Partial Clone)

An Awwwards-tier, high-performance editorial platform built with **Next.js**, **GSAP**, and **Tailwind CSS**. This project is a partial clone of the Accredian Enterprise landing page, reimagined with an "Obsidian Luxury" design language.

## 🚀 Live Demo
**[Insert Your Vercel Link Here]**

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Animation Engine:** GSAP (GreenSock) + ScrollTrigger
- **Smooth Scrolling:** Lenis
- **Styling:** Tailwind CSS + Vanilla CSS (Aesthetic Tokens)
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🎯 Features & Scope
- **Fully Responsive Architecture:** Custom math-based grid system ensures a "pixel-perfect" experience across mobile, tablet, and ultra-wide displays.
- **Cinematic Interactions:** Staggered text reveals, parallax backgrounds, and smooth-scroll synchronization.
- **Horizontal Hub Scroll:** A high-end horizontal gallery for Expertise Hubs with native snap-scroll support for mobile.
- **Dynamic Mobile Menu:** GSAP-powered "Stairs" transition with morphing hamburger icons.
- **Lead Capture Protocol:** Functional contact form integrated with Next.js API Routes for data processing (Bonus Requirement).
- **Cinematic Preloader:** Typographic loading sequence (0-100%) that establishes the 'Obsidian Luxury' aesthetic before revealing the site.
- **Interactive GSAP Cursor:** Custom dual-layer cursor with magnetic hover states for all interactive elements.
- **Premium Aesthetics:** Custom grain/noise texture overlay and glass-morphic UI components.

## 🤖 AI Usage & Development Thinking

This project was built using **Antigravity (Google DeepMind)** as an advanced agentic coding partner. 

### Where AI Helped:
- **Design System Blueprinting:** AI assisted in generating the initial "Obsidian Luxury" color palette (#0c0c0c) and selecting high-contrast typography pairings (Syne + Inter).
- **Complex GSAP Logic:** AI helped architect the "Stairs" mobile transition and the scroll-velocity-based marquee for the Partners section.
- **Responsiveness Math:** AI provided the `clamp()` logic used in the global layout system to ensure typography scales mathematically across breakpoints.

### Manual Refinements & Improvements:
- **Lenis/GSAP Synchronization:** I manually debugged and synchronized the Lenis RAF loop with the GSAP Ticker to prevent "scroll jitter" on high-refresh-rate monitors.
- **Mobile Interaction Polish:** I manually fine-tuned the mobile "snap points" in the horizontal scroll to ensure it felt tactile and natural for touch users.
- **Content Sync:** I manually audited the original `enterprise.accredian.com` site to ensure all data (10K+ professionals, real client names, CAT framework details) was accurate and not placeholder text.
- **Typography Calibration:** I manually adjusted line-heights and tracking for the "Syne" font to ensure readability on small devices.

## ⚙️ Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone [your-github-repo-link]
   cd Accredian-Clone
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 🧠 Future Improvements
- **CMS Integration:** Connect the programs and testimonials to a headless CMS (like Sanity or Contentful) for dynamic content management.
- **Dark/Light Mode:** Implement a high-contrast light mode that maintains the editorial aesthetic.
- **Advanced Micro-Interactions:** Add 3D WebGL elements or shaders to the Hero section using Three.js/React Three Fiber.

---
**Submission for Accredian Frontend Assignment**
Developed with 1000% effort & Antigravity.
