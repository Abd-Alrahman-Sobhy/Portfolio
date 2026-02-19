import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  highlights: string;
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects" [attr.aria-label]="'Projects section'">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>

        <div class="projects-grid">
          @for (project of projectsData; track project.title) {
            <article class="project-card fade-in hover-lift">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <a
                  [href]="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="github-icon"
                  [attr.aria-label]="'View ' + project.title + ' on GitHub'"
                  title="View on GitHub"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V21"
                    ></path>
                  </svg>
                </a>
              </div>

              <p class="project-description">{{ project.description }}</p>

              <div class="project-highlights">
                <span class="highlight-badge">{{ project.highlights }}</span>
              </div>

              <div class="project-features">
                <h4 class="features-title">Key Features:</h4>
                <ul class="features-list">
                  @for (feature of project.features; track feature) {
                    <li class="feature-item">{{ feature }}</li>
                  }
                </ul>
              </div>

              <div class="project-tech">
                @for (tech of project.tech; track tech) {
                  <span class="tech-badge">{{ tech }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .projects {
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
      }

      .projects::before {
        content: '';
        position: absolute;
        bottom: 0;
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

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .project-card {
        background: linear-gradient(135deg, var(--bg-card), rgba(0, 217, 255, 0.03));
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 2rem;
        transition: all 0.3s ease;
        animation: fadeInUp 0.8s ease-out;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        position: relative;
        overflow: hidden;
      }

      .project-card::before {
        content: '';
        position: absolute;
        top: -100%;
        left: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(135deg, transparent, rgba(0, 217, 255, 0.1), transparent);
        transition: top 0.6s ease;
      }

      .project-card:hover {
        transform: translateY(-10px);
        border-color: var(--neon-cyan);
        box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05);
      }

      .project-card:hover::before {
        top: 100%;
      }

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1rem;
      }

      .project-title {
        font-size: 1.3rem;
        color: var(--neon-cyan);
        font-weight: bold;
        margin: 0;
      }

      .github-icon {
        color: var(--neon-cyan);
        transition: all 0.3s ease;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .github-icon:hover {
        color: var(--neon-purple);
        transform: scale(1.2) rotate(10deg);
      }

      .project-description {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
      }

      .project-highlights {
        display: flex;
        gap: 0.5rem;
      }

      .highlight-badge {
        display: inline-block;
        padding: 4px 12px;
        background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(217, 70, 239, 0.1));
        border: 1px solid var(--neon-cyan);
        border-radius: 12px;
        color: var(--neon-cyan);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .project-features {
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;
      }

      .features-title {
        font-size: 0.85rem;
        color: var(--neon-purple);
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .features-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .feature-item {
        color: var(--text-secondary);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .feature-item::before {
        content: '▸';
        color: var(--neon-cyan);
        font-weight: bold;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .tech-badge {
        display: inline-block;
        padding: 6px 12px;
        background: var(--primary-black);
        border: 1px solid var(--neon-purple);
        border-radius: 6px;
        color: var(--neon-purple);
        font-size: 0.8rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .tech-badge:hover {
        background: var(--neon-purple);
        color: var(--primary-black);
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        .projects-grid {
          grid-template-columns: 1fr;
        }

        .project-card {
          padding: 1.5rem;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  projectsData: Project[] = [
    {
      title: '🛒 E-Commerce API',
      description:
        'Full-featured backend system for an e-commerce platform with advanced filtering, pagination, and secure authentication.',
      tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'JWT'],
      features: [
        '25+ REST endpoints',
        'JWT Authentication & Authorization',
        'Product filtering & pagination',
        'Clean Architecture implementation',
        'Specification Pattern for advanced queries',
      ],
      highlights: 'Production Ready',
      github: 'https://github.com/Abd-Alrahman-Sobhy/E-Commerce-API',
    },
    {
      title: '🏬 Store Management API',
      description:
        'Comprehensive inventory and sales management system with structured validation and proper error handling.',
      tech: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core'],
      features: [
        'Onion Architecture',
        'Secure endpoints with proper authorization',
        'Structured validation framework',
        'Comprehensive error handling',
        'Inventory tracking & reporting',
      ],
      highlights: 'Scalable',
      github: 'https://github.com/Abd-Alrahman-Sobhy/Store-API',
    },
    {
      title: '🥧 Bethany Pie Shop (MVC)',
      description:
        'Full-stack ASP.NET Core MVC application showcasing complete shopping experience with cart management and order processing.',
      tech: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Bootstrap', 'JavaScript'],
      features: [
        'Shopping cart system',
        'Order management & tracking',
        'User authentication & authorization',
        'Product catalog with categories',
        'Admin dashboard',
      ],
      highlights: 'Full Stack',
      github: 'https://github.com/Abd-Alrahman-Sobhy/Bethany-Pie-Shop',
    },
    {
      title: '🔗 Linked List Implementation',
      description:
        'Advanced data structure implementation demonstrating deep understanding of computer science fundamentals and clean code practices.',
      tech: ['C#', 'Algorithms'],
      features: [
        'Complete linked list operations',
        'Node management',
        'Traversal algorithms',
        'Memory efficient design',
        'Well-documented code',
      ],
      highlights: 'Educational',
      github: 'https://github.com/Abd-Alrahman-Sobhy/Linked-List',
    },
    {
      title: '☁️ Google Drive HTTP Client',
      description:
        'Robust HTTP client for Google Drive integration with secure authentication and file management capabilities.',
      tech: ['C#', 'HTTPClient', 'Google APIs'],
      features: [
        'Google Drive API integration',
        'Secure OAuth authentication',
        'File upload/download operations',
        'Error handling & retry logic',
        'Async/await patterns',
      ],
      highlights: 'Integration',
      github: 'https://github.com/Abd-Alrahman-Sobhy/Google-Drive-httpclient',
    },
  ];
}
