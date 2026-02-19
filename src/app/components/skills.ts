import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  skills: string[];
  color: string;
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills" [attr.aria-label]="'Skills section'">
      <div class="container">
        <h2 class="section-title">Technical Stack</h2>

        <div class="skills-grid">
          @for (skillSet of skillsData; track skillSet.category) {
            <div class="skill-category fade-in" [style.--category-color]="skillSet.color" [class]="'skill-card-' + skillSet.category.toLowerCase().replace(/\\s+/g, '-')">
              <h3 class="category-title">{{ skillSet.category }}</h3>
              <div class="skills-list">
                @for (skill of skillSet.skills; track skill) {
                  <div class="skill-item">
                    <span class="skill-badge">{{ skill }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <div class="skills-footer">
          <p class="skills-note">
            💡 Always learning new technologies and best practices to stay updated with industry standards
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .skills {
        padding: 6rem 0;
        position: relative;
      }

      .skills::before {
        content: '';
        position: absolute;
        top: 50%;
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

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }

      .skill-category {
        background: linear-gradient(135deg, var(--bg-card), rgba(0, 217, 255, 0.03));
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 2rem;
        transition: all 0.3s ease;
        animation: fadeInUp 0.8s ease-out;
        position: relative;
        overflow: hidden;
      }

      .skill-category::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 3px;
        background: var(--category-color);
        transition: left 0.3s ease;
      }

      .skill-category:hover {
        transform: translateY(-10px);
        border-color: var(--category-color);
        box-shadow: 0 20px 40px rgba(0, 217, 255, 0.15);
      }

      .skill-category:hover::before {
        left: 0;
      }

      .category-title {
        font-size: 1.3rem;
        color: var(--category-color);
        margin-bottom: 1.5rem;
        font-weight: bold;
      }

      .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .skill-item {
        animation: fadeInUp 0.8s ease-out backwards;
      }

      @for $i from 1 through 20 {
        .skill-category:nth-child(n) .skill-item:nth-child(#{$i}) {
          animation-delay: calc(0.1s * #{$i});
        }
      }

      .skill-badge {
        display: inline-block;
        padding: 8px 16px;
        background: var(--bg-dark);
        border: 1px solid var(--category-color);
        border-radius: 20px;
        color: var(--text-primary);
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
        cursor: default;
      }

      .skill-badge:hover {
        background: var(--category-color);
        color: var(--primary-black);
        transform: scale(1.05);
        box-shadow: 0 0 15px var(--category-color);
      }

      .skills-footer {
        text-align: center;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
      }

      .skills-note {
        color: var(--text-secondary);
        font-size: 1rem;
        font-style: italic;
      }

      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class SkillsComponent {
  skillsData: Skill[] = [
    {
      category: 'Backend',
      skills: [
        'C#',
        'ASP.NET Core',
        'Entity Framework Core',
        'LINQ',
        'RESTful APIs',
        'JWT Authentication',
        'Specification Pattern',
        'Onion Architecture',
      ],
      color: 'var(--neon-cyan)',
    },
    {
      category: 'Database',
      skills: [
        'SQL Server',
        'Query Optimization',
        'Relationships & Constraints',
        'Database Design',
        'Data Integrity',
      ],
      color: 'var(--neon-purple)',
    },
    {
      category: 'Architecture & Design',
      skills: [
        'Clean Architecture',
        'Onion Architecture',
        'SOLID Principles',
        'Design Patterns',
        'API Design',
        'Security Best Practices',
      ],
      color: 'var(--neon-pink)',
    },
    {
      category: 'Frontend (Basic)',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Responsive Design'],
      color: 'var(--neon-cyan)',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git & GitHub', 'Visual Studio', 'Postman', 'Azure', 'Docker', 'Linux'],
      color: 'var(--neon-purple)',
    },
    {
      category: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Code Review',
        'Documentation',
        'Team Collaboration',
        'Communication',
        'Continuous Learning',
      ],
      color: 'var(--neon-pink)',
    },
  ];
}
