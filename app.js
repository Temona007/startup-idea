/**
 * Startup Builder AI - MVP
 * Demo data, no API calls
 */

// Demo startup plan templates - varied content for different idea types
const DEMO_PLANS = [
  {
    overview: {
      icon: '◆',
      title: 'Overview',
      content: 'A focused product addressing a clear market need. The concept shows strong potential for early adopters and can be validated quickly with minimal investment.'
    },
    problem: {
      icon: '!',
      title: 'Problem Statement',
      content: 'Target users face friction in their daily workflow. Current solutions are either too complex, expensive, or don\'t address the core pain point effectively.'
    },
    solution: {
      icon: '✓',
      title: 'Proposed Solution',
      content: 'A streamlined approach that simplifies the experience. Key differentiators: ease of use, affordable pricing, and a focused feature set that does one thing exceptionally well.'
    },
    market: {
      icon: '◈',
      title: 'Target Market',
      content: 'Primary audience: professionals and small teams who value efficiency. TAM is substantial with clear growth trends. Initial focus on early adopters in tech-savvy segments.'
    },
    mvp: {
      icon: '▶',
      title: 'MVP Scope',
      content: 'Phase 1 (4–6 weeks): Core functionality, single user flow, basic UI. Phase 2: Key integrations and feedback loop. Phase 3: Monetization and scale features.'
    },
    nextSteps: {
      icon: '→',
      title: 'Next Steps',
      content: [
        'Validate with 5–10 target user interviews',
        'Build clickable prototype or landing page',
        'Define success metrics (signups, engagement)',
        'Identify 3 potential technical co-founders or contractors'
      ]
    }
  },
  {
    overview: {
      icon: '◆',
      title: 'Overview',
      content: 'An innovative approach to an underserved niche. Strong product-market fit potential with opportunities for network effects as the user base grows.'
    },
    problem: {
      icon: '!',
      title: 'Problem Statement',
      content: 'Users struggle with fragmented tools and manual processes. Time spent on repetitive tasks could be automated, freeing capacity for higher-value work.'
    },
    solution: {
      icon: '✓',
      title: 'Proposed Solution',
      content: 'An intelligent platform that automates the tedious parts while keeping humans in the loop for decisions. Combines automation with a delightful user experience.'
    },
    market: {
      icon: '◈',
      title: 'Target Market',
      content: 'SMBs and freelancers seeking affordable, modern tools. Market is growing 15%+ annually. Start with a narrow vertical before expanding horizontally.'
    },
    mvp: {
      icon: '▶',
      title: 'MVP Scope',
      content: 'Week 1–2: Core value proposition in a single flow. Week 3–4: Onboarding and first "aha" moment. Week 5–6: Basic analytics and iteration based on feedback.'
    },
    nextSteps: {
      icon: '→',
      title: 'Next Steps',
      content: [
        'Create a one-pager and share with 20 potential users',
        'Build a waitlist or beta signup page',
        'Set up basic analytics (Mixpanel, PostHog, or similar)',
        'Draft a 30-day build plan with weekly milestones'
      ]
    }
  },
  {
    overview: {
      icon: '◆',
      title: 'Overview',
      content: 'A platform play with potential for recurring revenue. The idea taps into behavioral shifts and digital adoption trends accelerated in recent years.'
    },
    problem: {
      icon: '!',
      title: 'Problem Statement',
      content: 'Existing solutions are legacy, clunky, or built for larger enterprises. There\'s a gap for a modern, user-friendly alternative that fits today\'s workflows.'
    },
    solution: {
      icon: '✓',
      title: 'Proposed Solution',
      content: 'A cloud-native, mobile-first product designed for how people work today. Emphasis on speed, simplicity, and seamless collaboration across devices.'
    },
    market: {
      icon: '◈',
      title: 'Target Market',
      content: 'Growing segment of remote-first teams and digital nomads. Strong willingness to pay for tools that save time. Start with a specific use case or industry.'
    },
    mvp: {
      icon: '▶',
      title: 'MVP Scope',
      content: 'Solo founder MVP: 6–8 weeks to first usable version. Include: auth, core feature, basic dashboard. Use no-code where possible to ship faster.'
    },
    nextSteps: {
      icon: '→',
      title: 'Next Steps',
      content: [
        'Write a lean canvas or one-page business model',
        'Identify 3 competitors and document their weaknesses',
        'Schedule 5 customer discovery calls this week',
        'Choose a tech stack and set up the dev environment'
      ]
    }
  }
];

// DOM elements
const landingSection = document.getElementById('landing');
const resultsSection = document.getElementById('results');
const ideaForm = document.getElementById('idea-form');
const ideaInput = document.getElementById('idea-input');
const generateBtn = document.getElementById('generate-btn');
const backBtn = document.getElementById('back-btn');
const resultsIdea = document.getElementById('results-idea');
const planCards = document.getElementById('plan-cards');

/**
 * Pick a demo plan based on input (simple hash for variety)
 */
function getDemoPlan(idea) {
  const hash = idea.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return DEMO_PLANS[hash % DEMO_PLANS.length];
}

/**
 * Render plan cards
 */
function renderPlan(plan) {
  const sections = [
    plan.overview,
    plan.problem,
    plan.solution,
    plan.market,
    plan.mvp,
    plan.nextSteps
  ];

  planCards.innerHTML = sections.map((section, i) => {
    const isList = Array.isArray(section.content);
    const contentHtml = isList
      ? `<ul>${section.content.map(item => `<li>${item}</li>`).join('')}</ul>`
      : `<p>${section.content}</p>`;

    return `
      <article class="plan-card">
        <div class="plan-card-header">
          <span class="plan-card-icon">${section.icon}</span>
          <h3 class="plan-card-title">${section.title}</h3>
        </div>
        <div class="plan-card-content">${contentHtml}</div>
      </article>
    `;
  }).join('');
}

/**
 * Show results section
 */
function showResults(idea) {
  resultsIdea.textContent = idea;
  const plan = getDemoPlan(idea);
  renderPlan(plan);

  landingSection.classList.remove('active');
  resultsSection.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Show landing section
 */
function showLanding() {
  resultsSection.classList.remove('active');
  landingSection.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Simulate generation delay
 */
function simulateGeneration() {
  return new Promise(resolve => setTimeout(resolve, 1500));
}

// Form submit
ideaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const idea = ideaInput.value.trim();
  if (!idea) return;

  generateBtn.classList.add('loading');
  generateBtn.disabled = true;

  await simulateGeneration();

  generateBtn.classList.remove('loading');
  generateBtn.disabled = false;

  showResults(idea);
});

// Back button
backBtn.addEventListener('click', showLanding);
