import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about" [attr.aria-label]="'About section'">
      <div class="container">
        <h2 class="section-title">About Me</h2>

        <div class="about-content">
          <div class="about-text fade-in">
            <h3 class="about-subtitle">Backend Developer & API Architect</h3>
            <p class="about-paragraph">
              I'm a passionate backend developer from Egypt specializing in building scalable, 
              secure, and maintainable API solutions using ASP.NET Core. With a strong foundation 
              in Object-Oriented Programming and SOLID principles, I design clean architectures 
              that stand the test of time.
            </p>

            <p class="about-paragraph">
              My journey in software development has equipped me with expertise in designing 
              robust authentication systems, implementing efficient database queries with Entity Framework Core, 
              and building production-ready backend services that prioritize performance and security.
            </p>

            <div class="about-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">🎯</span>
                <span>Focus: Backend Architecture</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🏗️</span>
                <span>Clean & Onion Architecture</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🔐</span>
                <span>Security & Authentication</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">📊</span>
                <span>Database Optimization</span>
              </div>
            </div>

            <div class="about-cta">
              <a
                href="/Abdelrahman Mohammed Sobhy.pdf"
                download
                class="btn btn-primary"
                aria-label="Download my CV"
              >
                📥 Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-mohamed-a9a418357"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline"
                aria-label="Connect on LinkedIn"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div class="about-stats fade-in">
            <div class="stat-card">
              <div class="stat-number">25+</div>
              <div class="stat-label">API Endpoints</div>
              <div class="stat-desc">Built & Deployed</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">5+</div>
              <div class="stat-label">Projects</div>
              <div class="stat-desc">Completed</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Test Coverage</div>
              <div class="stat-desc">Best Practice</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">∞</div>
              <div class="stat-label">Learning</div>
              <div class="stat-desc">Growth Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
      }

      .about::before {
        content: '';
        position: absolute;
        top: 0;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .section-title {
        text-align: center;
      }

      .about-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }

      .about-text {
        animation: slideInLeft 0.8s ease-out;
      }

      .about-subtitle {
        font-size: 1.8rem;
        color: var(--neon-cyan);
        margin-bottom: 1rem;
      }

      .about-paragraph {
        font-size: 1.05rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        line-height: 1.8;
      }

      .about-highlights {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .highlight-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--bg-card);
        border-left: 3px solid var(--neon-cyan);
        border-radius: 6px;
        transition: all 0.3s ease;
      }

      .highlight-item:hover {
        transform: translateX(5px);
        background: rgba(0, 217, 255, 0.05);
      }

      .highlight-icon {
        font-size: 1.5rem;
      }

      .about-cta {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }

      .about-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        animation: slideInRight 0.8s ease-out;
      }

      .stat-card {
        background: linear-gradient(135deg, var(--bg-card), rgba(0, 217, 255, 0.05));
        border: 1px solid var(--neon-cyan);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .stat-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        border-color: var(--neon-purple);
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .stat-label {
        font-size: 1.1rem;
        color: var(--text-primary);
        margin: 0.5rem 0;
      }

      .stat-desc {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }

      .btn {
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
      }

      @media (max-width: 768px) {
        .about-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .about-highlights {
          grid-template-columns: 1fr;
        }

        .about-stats {
          grid-template-columns: 1fr 1fr;
        }

        .about-cta {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class AboutComponent {}
