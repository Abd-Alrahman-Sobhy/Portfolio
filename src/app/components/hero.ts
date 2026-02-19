import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero" [attr.aria-label]="'Hero section'">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text fade-in">
            <h1 class="hero-title">
              <span class="greeting">Hi, I'm</span>
              <span class="name-highlight">Abdelrahman Sobhy</span>
            </h1>
            <p class="hero-subtitle">ASP.NET Core Backend Developer & API Architect</p>
            <p class="hero-description">
              Crafting scalable, secure backend solutions with modern .NET technologies. 
              Specialized in clean architecture, JWT authentication, and RESTful API design.
            </p>
            <div class="hero-cta">
              <a href="#projects" class="btn btn-primary" aria-label="View my projects">
                View My Work
              </a>
              <a
                href="/Abdelrahman Mohammed Sobhy.pdf"
                download
                class="btn btn-outline"
                aria-label="Download my CV"
              >
                📥 Download CV
              </a>
              <a href="#contact" class="btn btn-outline" aria-label="Contact me">
                Get In Touch
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="profile-image-container">
              <img
                src="/me.png"
                alt="Abdelrahman Sobhy - Backend Developer"
                class="profile-image"
              />
              <div class="image-glow"></div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator" (click)="scrollToSection('#about')" [attr.aria-label]="'Scroll down'">
          <div class="mouse"></div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 80px;
        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(217, 70, 239, 0.1) 0%, transparent 50%);
        pointer-events: none;
      }

      .container {
        position: relative;
        z-index: 1;
      }

      .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }

      .hero-title {
        font-size: 3.5rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        animation: slideInLeft 0.8s ease-out;
      }

      .greeting {
        color: var(--text-secondary);
        display: block;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .name-highlight {
        background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--neon-cyan);
        margin-bottom: 1.5rem;
        animation: slideInLeft 0.8s ease-out 0.2s both;
      }

      .hero-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
        max-width: 500px;
        line-height: 1.8;
        animation: slideInLeft 0.8s ease-out 0.4s both;
      }

      .hero-cta {
        display: flex;
        gap: 1rem;
        animation: slideInLeft 0.8s ease-out 0.6s both;
      }

      .btn {
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
      }

      .hero-visual {
        position: relative;
        animation: slideInRight 0.8s ease-out;
      }

      .profile-image-container {
        width: 380px;
        height: 380px;
        border: 3px solid var(--neon-cyan);
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(217, 70, 239, 0.15));
        animation: borderGlow 3s ease-in-out infinite, float 3s ease-in-out infinite;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 
          0 0 30px rgba(0, 217, 255, 0.4),
          0 0 60px rgba(217, 70, 239, 0.3),
          inset 0 0 30px rgba(0, 217, 255, 0.2);
      }

      .profile-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        transition: transform 0.4s ease, filter 0.4s ease;
        filter: brightness(1);
      }

      .profile-image-container:hover .profile-image {
        transform: scale(1.08);
        filter: brightness(1.1);
      }

      .image-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 410px;
        height: 410px;
        border: 2px solid var(--neon-cyan);
        border-radius: 50%;
        animation: borderGlow 3s ease-in-out infinite;
        pointer-events: none;
        opacity: 0.6;
      }

      .scroll-indicator {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        animation: float 2s ease-in-out infinite;
      }

      .mouse {
        width: 26px;
        height: 40px;
        border: 2px solid var(--neon-cyan);
        border-radius: 13px;
        position: relative;
      }

      .mouse::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 8px;
        background: var(--neon-cyan);
        left: 50%;
        top: 8px;
        transform: translateX(-50%);
        animation: float 1.5s ease-in-out infinite;
      }

      @media (max-width: 768px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .hero-cta {
          flex-direction: column;
        }

        .hero-visual {
          max-width: 300px;
          margin-left: auto;
          margin-right: auto;
        }

        .code-snippet {
          max-width: 200px;
          font-size: 0.75rem;
        }
      }
    `,
  ],
})
export class HeroComponent {
  scrollToSection(id: string): void {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
