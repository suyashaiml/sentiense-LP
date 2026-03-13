import { useEffect, useRef, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Applications', href: '#applications' },
  { label: 'Systems', href: '#systems' },
  { label: 'Research', href: '#research' },
]

const advantageItems = [
  {
    title: 'Multimodal perception at the edge',
    description:
      'Ingest vision, audio, telemetry, text, and sensor streams through one intelligence layer built for cloud and edge deployment.',
  },
  {
    title: 'Context that persists across decisions',
    description:
      'Sentiense combines memory, task context, and environment signals so systems do not react blindly to single-frame inputs.',
  },
  {
    title: 'Decision loops that make sense',
    description:
      'Translate perception into structured reasoning, confidence scoring, and action orchestration with guardrails for real-world use.',
  },
  {
    title: 'Built for responsible autonomy',
    description:
      'Observability, simulation, and human-in-the-loop controls help teams deploy intelligent systems without losing operational clarity.',
  },
]

const capabilityCards = [
  {
    title: 'Perception',
    description:
      'Fuse live sensor, visual, and textual signals into a coherent model of the environment.',
  },
  {
    title: 'Reasoning',
    description:
      'Ground every decision in context, memory, and interpretable planning rather than isolated predictions.',
  },
  {
    title: 'Adaptation',
    description:
      'Continuously update behavior based on changing conditions, confidence thresholds, and operator feedback.',
  },
  {
    title: 'Deployment',
    description:
      'Run across cloud, edge, and embedded surfaces with the same control plane and observability model.',
  },
]

const applicationCards = [
  {
    title: 'Autonomous operations',
    description:
      'Coordinate agents and workflows that monitor, reason, and act in dynamic environments.',
  },
  {
    title: 'Robotics and edge AI',
    description:
      'Power embodied systems that need situational awareness, planning, and safe execution near the source.',
  },
  {
    title: 'Industrial intelligence',
    description:
      'Convert machinery signals and infrastructure telemetry into predictive, actionable system behavior.',
  },
  {
    title: 'Smart environments',
    description:
      'Enable adaptive spaces that interpret occupancy, motion, intent, and operational state in real time.',
  },
]

const systemMetrics = [
  {
    label: 'Sensor fusion accuracy',
    value: 96,
    note: 'Vision, telemetry, and event alignment',
  },
  {
    label: 'Decision latency',
    value: 88,
    note: 'Optimized for real-time operational loops',
  },
  {
    label: 'Context retention',
    value: 92,
    note: 'Cross-session memory and environmental state',
  },
  {
    label: 'Edge deployment readiness',
    value: 85,
    note: 'Portable execution across constrained devices',
  },
]

const platformCards = [
  {
    eyebrow: 'API',
    title: 'Intelligence layer',
    description:
      'Unify sensing, reasoning, and orchestration behind a developer-ready runtime and API surface.',
    cta: 'Explore API',
  },
  {
    eyebrow: 'Studio',
    title: 'Simulation and testing',
    description:
      'Validate behavior against synthetic environments, replayed telemetry, and policy stress tests.',
    cta: 'Open Studio',
  },
  {
    eyebrow: 'Edge',
    title: 'Runtime for the field',
    description:
      'Deploy near sensors and devices while preserving low latency, resilience, and centralized observability.',
    cta: 'View Runtime',
  },
  {
    eyebrow: 'Control',
    title: 'Monitoring and oversight',
    description:
      'Track confidence, state transitions, and decision traces for every autonomous workflow.',
    cta: 'See Control Center',
  },
]

const promptPhrases = [
  'what is on the menu today?',
  'मेरी अगली मीटिंग कब है?',
  'ಇವತ್ತು ಮನೆಗೆ ಯಾರಾದರೂ ಬಂದರಾ?',
  'माझा कुत्रा कसा आहे?',
  'hey sent, whats cooking today?',
  'நாளைக்கு நான் வீட்டிலிருந்து வேலைக்குச் செல்லலாமா?',
  'आज के मौसम का बा?',
  'ਲੋਕ ਕਿਸ ਬਾਰੇ ਗੱਲ ਕਰ ਰਹੇ ਹਨ?',
]

const footerColumns = [
  {
    title: 'Platform',
    links: ['Intelligence Layer', 'Edge Runtime', 'Simulation Studio', 'Control Center'],
  },
  {
    title: 'Capabilities',
    links: ['Perception', 'Reasoning', 'Adaptation', 'Deployment'],
  },
  {
    title: 'Research',
    links: ['Applied AI', 'Systems Design', 'Safety', 'Case Studies'],
  },
  {
    title: 'Company',
    links: ['About Sentiense', 'Contact', 'Careers', 'Legal'],
  },
]

function App() {
  const [openIndex, setOpenIndex] = useState(0)
  const [rotatingPromptIndex, setRotatingPromptIndex] = useState(0)
  const [isPromptTransitionEnabled, setIsPromptTransitionEnabled] = useState(true)
  const platformStageRef = useRef(null)
  const wheelLockRef = useRef(0)
  const releaseLockRef = useRef(0)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsPromptTransitionEnabled(true)
      setRotatingPromptIndex((currentIndex) =>
        currentIndex < promptPhrases.length ? currentIndex + 1 : currentIndex,
      )
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (rotatingPromptIndex !== promptPhrases.length) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setIsPromptTransitionEnabled(false)
      setRotatingPromptIndex(0)
    }, 540)

    return () => window.clearTimeout(timeoutId)
  }, [rotatingPromptIndex])

  useEffect(() => {
    if (isPromptTransitionEnabled) {
      return undefined
    }

    const rafId = window.requestAnimationFrame(() => {
      setIsPromptTransitionEnabled(true)
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [isPromptTransitionEnabled])

  useEffect(() => {
    const stage = platformStageRef.current

    if (!stage) {
      return undefined
    }

    const getStageMetrics = () => {
      if (window.innerWidth <= 1080) {
        return null
      }

      const stickyOffset = 84
      const rect = stage.getBoundingClientRect()
      const lockTop = window.scrollY + rect.top - stickyOffset
      const shouldLock =
        rect.top <= stickyOffset + 24 && rect.bottom >= window.innerHeight - 40
      const isNearEntry =
        rect.top <= stickyOffset + 140 && rect.top >= stickyOffset - 80
      const isNearExit =
        rect.bottom <= window.innerHeight + 120 &&
        rect.bottom >= window.innerHeight - 140

      return {
        rect,
        lockTop,
        shouldLock,
        isNearEntry,
        isNearExit,
      }
    }

    const snapToStage = (top) => {
      window.scrollTo({
        top,
        behavior: 'auto',
      })
    }

    const handleWheel = (event) => {
      const metrics = getStageMetrics()

      if (!metrics) {
        return
      }

      const direction = Math.sign(event.deltaY)
      const now = Date.now()
      const isLocked = now - wheelLockRef.current < 420
      const { shouldLock, isNearEntry, isNearExit, lockTop } = metrics
      const movingThroughStage =
        shouldLock || (direction > 0 && isNearEntry) || (direction < 0 && isNearExit)

      if (!movingThroughStage) {
        return
      }

      if (now < releaseLockRef.current) {
        return
      }

      if (shouldLock || isNearEntry || isNearExit) {
        event.preventDefault()
        snapToStage(lockTop)
      }

      if (direction > 0 && openIndex < advantageItems.length - 1) {
        if (!isLocked) {
          wheelLockRef.current = now
          setOpenIndex((currentIndex) =>
            Math.min(currentIndex + 1, advantageItems.length - 1),
          )
        }

        return
      }

      if (direction < 0 && openIndex > 0) {
        if (!isLocked) {
          wheelLockRef.current = now
          setOpenIndex((currentIndex) => Math.max(currentIndex - 1, 0))
        }

        return
      }

      if (
        (direction > 0 && openIndex === advantageItems.length - 1) ||
        (direction < 0 && openIndex === 0)
      ) {
        releaseLockRef.current = now + 500
      }
    }

    const handleScroll = () => {
      const metrics = getStageMetrics()

      if (!metrics || Date.now() < releaseLockRef.current) {
        return
      }

      const { shouldLock, isNearEntry, isNearExit, lockTop } = metrics
      const shouldSnap =
        (openIndex < advantageItems.length - 1 && (shouldLock || isNearEntry)) ||
        (openIndex > 0 && (shouldLock || isNearExit))

      if (shouldSnap) {
        snapToStage(lockTop)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openIndex])

  return (
    <div className="page-shell">
      <div className="ambient ambient-top" />
      <div className="ambient ambient-middle" />
      <div className="ambient ambient-bottom" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sentiense home">
          <span className="brand-mark" />
          <span className="brand-text">Sentiense</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Get Started
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-minimal">
            <p className="section-kicker">Applied AI for sentient systems</p>
            <h1>
              <span className="hero-title-line">What should</span>
              <span className="hero-title-line">intelligent systems</span>
              <span className="hero-title-line">understand next?</span>
            </h1>
            <p className="hero-text">
              Sentiense helps teams build AI that senses the world, reasons through
              context, and acts with clarity in real environments.
            </p>

            <div className="signal-console minimal-console" aria-label="Sentiense signal console">
              <div className="signal-console-header">
                <span className="signal-console-title">Sense the world...</span>
              </div>
              <div className="signal-input">
                <div className="signal-prompt-window" aria-live="polite">
                  <div
                    className="signal-prompt-track"
                    style={{
                      transform: `translateY(-${rotatingPromptIndex * 1.5}em)`,
                      transition: isPromptTransitionEnabled ? undefined : 'none',
                    }}
                  >
                    {[...promptPhrases, promptPhrases[0]].map((phrase, index) => (
                      <span key={`${phrase}-${index}`} className="signal-prompt-item">
                        {phrase}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="signal-status">Live</span>
              </div>
              <div className="signal-actions">
                <button type="button">Perception</button>
                <button type="button">Decision Loop</button>
                <button type="button">Edge Ready</button>
              </div>
            </div>

            <div className="hero-actions">
              <a className="button button-secondary" href="#platform">
                Scroll to explore
              </a>
            </div>
          </div>
        </section>

        <section
          className="scroll-stage"
          id="platform"
          ref={platformStageRef}
          style={{ '--accordion-steps': advantageItems.length }}
        >
          <div className="section split-section platform-sticky reveal is-visible">
            <div className="section-intro reveal is-visible" style={{ '--delay': '0ms' }}>
              <p className="section-kicker">Why Sentiense</p>
              <h2>From raw signals to intelligent systems that make sense of reality.</h2>
              <p>
                Sentiense turns fragmented sensory input into structured understanding,
                grounded reasoning, and coordinated action for teams building the next
                generation of real-world AI.
              </p>
              <a className="button button-primary" href="#capabilities">
                See capabilities
              </a>
            </div>

            <div className="accordion-list">
              {advantageItems.map((item, index) => {
                const isOpen = openIndex === index

                return (
                  <article
                    key={item.title}
                    className={`accordion-item reveal is-visible ${isOpen ? 'open' : ''}`}
                    style={{ '--delay': `${index * 90}ms` }}
                  >
                    <button
                      type="button"
                      className="accordion-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(index)}
                    >
                      <span>{item.title}</span>
                      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="accordion-body">
                      <p>{item.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="section-heading reveal">
            <p className="section-kicker">Core capabilities</p>
            <h2>What makes Sentiense adaptable, observable, and deployment-ready.</h2>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((card, index) => (
              <article
                key={card.title}
                className="glass-card capability-card reveal"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <div className="card-index">
                  {card.title.slice(0, 2).toUpperCase()}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="applications">
          <div className="section-heading reveal">
            <p className="section-kicker">Applications</p>
            <h2>Designed for systems that need awareness, judgment, and action.</h2>
          </div>

          <div className="application-grid">
            {applicationCards.map((card, index) => (
              <article
                key={card.title}
                className="application-card reveal"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section metrics-section" id="systems">
          <div className="section-heading narrow reveal">
            <p className="section-kicker">System characteristics</p>
            <h2>Performance shaped for real-world decision loops, not just static prompts.</h2>
          </div>

          <div className="metrics-panel glass-card reveal">
            {systemMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="metric-row reveal"
                style={{ '--delay': `${index * 110}ms` }}
              >
                <div className="metric-copy">
                  <div className="metric-header">
                    <h3>{metric.label}</h3>
                    <span>{metric.value}%</span>
                  </div>
                  <p>{metric.note}</p>
                </div>
                <div className="metric-bar">
                  <span style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-heading reveal">
            <p className="section-kicker">Platform surfaces</p>
            <h2>Tools for teams building sentient systems at production depth.</h2>
          </div>

          <div className="platform-grid">
            {platformCards.map((card, index) => (
              <article
                key={card.title}
                className="platform-card glass-card reveal"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <span className="platform-eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#contact">{card.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-card glass-card reveal">
            <p className="section-kicker">Build with Sentiense</p>
            <h2>AI systems that do more than generate. They sense what matters.</h2>
            <p>
              Bring perception, context, and decisioning into one platform designed for
              real-world intelligence.
            </p>
            <a className="button button-primary" href="mailto:hello@sentiense.ai">
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer reveal">
        <div className="footer-brand reveal is-visible" style={{ '--delay': '0ms' }}>
          <a className="brand" href="#top">
            <span className="brand-mark" />
            <span className="brand-text">Sentiense</span>
          </a>
          <p>
            AI systems that bring sentience and sense together for real-world
            intelligence.
          </p>
        </div>

        <div className="footer-links">
          {footerColumns.map((column, index) => (
            <div key={column.title} className="reveal" style={{ '--delay': `${index * 80}ms` }}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
