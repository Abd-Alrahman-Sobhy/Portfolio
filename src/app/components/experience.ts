import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience" [attr.aria-label]="'Experience section'">
      <div class="container">
        <h2 class="section-title">Experience & Education</h2>

        <div class="experience-container">
          <!-- Professional Experience -->
          <div class="experience-column">
            <h3 class="column-title">
              <span class="icon">💼</span> Professional Experience
            </h3>

            <div class="experience-timeline">
              @for (exp of workExperience; track exp.title) {
                <div class="experience-item fade-in">
                  <div class="timeline-marker"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h4 class="experience-title">{{ exp.title }}</h4>
                      <span class="experience-period">{{ exp.period }}</span>
                    </div>
                    <p class="experience-organization">@ {{ exp.organization }}</p>
                    <p class="experience-description">{{ exp.description }}</p>
                    @if (exp.highlights.length > 0) {
                      <ul class="highlights-list">
                        @for (highlight of exp.highlights; track highlight) {
                          <li class="highlight">{{ highlight }}</li>
                        }
                      </ul>
                    }
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Education -->
          <div class="experience-column">
            <h3 class="column-title">
              <span class="icon">🎓</span> Education
            </h3>

            <div class="experience-timeline">
              @for (edu of education; track edu.title) {
                <div class="experience-item fade-in" [style.animation-delay]="'0.2s'">
                  <div class="timeline-marker education"></div>
                  <div class="experience-card">
                    <div class="experience-header">
                      <h4 class="experience-title">{{ edu.title }}</h4>
                      <span class="experience-period">{{ edu.period }}</span>
                    </div>
                    <p class="experience-organization">@ {{ edu.organization }}</p>
                    <p class="experience-description">{{ edu.description }}</p>
                    @if (edu.highlights.length > 0) {
                      <ul class="highlights-list">
                        @for (highlight of edu.highlights; track highlight) {
                          <li class="highlight">{{ highlight }}</li>
                        }
                      </ul>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="certifications">
          <h3 class="section-subtitle">📜 Certifications & Training</h3>
          <div class="certifications-grid">
            @for (cert of certifications; track cert) {
              <div class="cert-card hover-lift">
                <div class="cert-icon">{{ cert.icon }}</div>
                <h4 class="cert-name">{{ cert.name }}</h4>
                <p class="cert-issuer">{{ cert.issuer }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .experience {
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
      }

      .experience::before {
        content: '';
        position: absolute;
        top: -100px;
        left: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .section-title {
        text-align: center;
      }

      .experience-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin: 3rem 0;
      }

      .experience-column {
        animation: slideInLeft 0.8s ease-out;
      }

      .experience-column:nth-child(2) {
        animation: slideInRight 0.8s ease-out;
      }

      .column-title {
        font-size: 1.5rem;
        color: var(--neon-cyan);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .icon {
        font-size: 1.8rem;
      }

      .experience-timeline {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
      }

      .experience-timeline::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, var(--neon-cyan), transparent);
      }

      .experience-item {
        display: flex;
        gap: 1.5rem;
        animation: fadeInUp 0.8s ease-out;
      }

      .timeline-marker {
        width: 16px;
        height: 16px;
        background: var(--neon-cyan);
        border: 3px solid var(--primary-black);
        border-radius: 50%;
        margin-top: 5px;
        flex-shrink: 0;
        box-shadow: 0 0 15px var(--neon-cyan);
        animation: glowPulse 2s ease-in-out infinite;
      }

      .timeline-marker.education {
        background: var(--neon-purple);
        box-shadow: 0 0 15px var(--neon-purple);
      }

      .experience-card {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1.5rem;
        flex: 1;
        transition: all 0.3s ease;
      }

      .experience-card:hover {
        border-color: var(--neon-cyan);
        box-shadow: 0 10px 30px rgba(0, 217, 255, 0.15);
        transform: translateX(5px);
      }

      .experience-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 0.5rem;
        gap: 1rem;
      }

      .experience-title {
        font-size: 1.1rem;
        color: var(--neon-cyan);
        margin: 0;
        font-weight: bold;
      }

      .experience-period {
        font-size: 0.85rem;
        color: var(--text-secondary);
        white-space: nowrap;
        padding: 4px 12px;
        background: rgba(0, 217, 255, 0.1);
        border-radius: 4px;
      }

      .experience-organization {
        color: var(--neon-purple);
        font-size: 0.95rem;
        margin: 0.5rem 0;
        font-weight: 500;
      }

      .experience-description {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
        margin: 1rem 0;
      }

      .highlights-list {
        list-style: none;
        padding: 0;
        margin: 0.5rem 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .highlight {
        color: var(--text-secondary);
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .highlight::before {
        content: '✓';
        color: var(--neon-cyan);
        font-weight: bold;
      }

      .certifications {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
      }

      .section-subtitle {
        font-size: 1.5rem;
        color: var(--neon-purple);
        margin-bottom: 2rem;
        text-align: center;
      }

      .certifications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .cert-card {
        background: linear-gradient(135deg, var(--bg-card), rgba(0, 217, 255, 0.03));
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
      }

      .cert-card:hover {
        border-color: var(--neon-purple);
        box-shadow: 0 10px 30px rgba(217, 70, 239, 0.2);
      }

      .cert-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .cert-name {
        font-size: 0.95rem;
        color: var(--text-primary);
        margin: 0.5rem 0;
        font-weight: bold;
      }

      .cert-issuer {
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin: 0;
      }

      @media (max-width: 768px) {
        .experience-container {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .experience-column {
          animation: slideInLeft 0.8s ease-out;
        }

        .experience-timeline::before {
          left: 7px;
        }

        .certifications-grid {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
      }
    `,
  ],
})
export class ExperienceComponent {
  workExperience: Experience[] = [
    {
      type: 'work',
      title: 'Backend Developer',
      organization: 'Freelance',
      period: '2024 - Present',
      description:
        'Developing scalable RESTful APIs and backend systems for various clients using ASP.NET Core with clean architecture principles.',
      highlights: [
        'Designed and implemented 25+ REST endpoints',
        'Implemented JWT authentication and authorization systems',
        'Built E-Commerce and Store Management APIs',
        'Applied clean architecture and design patterns',
      ],
    },
  ];

  education: Experience[] = [
    {
      type: 'education',
      title: "Bachelor's in Computer Science",
      organization: 'Thebes Academy',
      period: '2023 - 2027',
      description:
        'Pursuing a comprehensive Computer Science degree with strong focus on software development, algorithms, and system design. Currently maintaining a GPA of 3.05 - 4.0.',
      highlights: [
        'GPA: 3.05 - 4.0',
        'Strong foundation in computer science fundamentals',
        'Active participation in practical coding projects',
      ],
    },
  ];

  certifications = [
    {
      name: 'ASP.NET Core Mastery',
      issuer: 'Self-Certified',
      icon: '🏆',
    },
    {
      name: 'Clean Architecture',
      issuer: 'Practice & Implementation',
      icon: '🏗️',
    },
    {
      name: 'RESTful API Design',
      issuer: 'Professional Projects',
      icon: '🔌',
    },
    {
      name: 'Database Design & SQL',
      issuer: 'Practical Experience',
      icon: '💾',
    },
  ];
}
