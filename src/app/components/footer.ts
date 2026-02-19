import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" [attr.role]="'contentinfo'">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Abdelrahman Sobhy</h3>
            <p class="footer-description">
              ASP.NET Core Backend Developer | API Architect | Clean Code Enthusiast
            </p>
            <a href="#home" class="footer-link">Back to Top ↑</a>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Quick Links</h4>
            <nav class="footer-nav">
              <a href="#home" class="footer-link">Home</a>
              <a href="#about" class="footer-link">About</a>
              <a href="#skills" class="footer-link">Skills</a>
              <a href="#projects" class="footer-link">Projects</a>
              <a href="#contact" class="footer-link">Contact</a>
            </nav>
          </div>

          <div class="footer-section">
            <h4 class="footer-subtitle">Connect</h4>
            <div class="footer-socials">
              <a
                href="https://github.com/Abd-Alrahman-Sobhy"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-mohamed-a9a418357"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a href="mailto:abdelrahman.msobhym@gmail.com" title="Email" aria-label="Email">
                Email
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">
            © {{ currentYear }} Abdelrahman Sobhy. All rights reserved. | Crafted with ❤️ using Angular
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--primary-black);
        border-top: 1px solid var(--neon-cyan);
        color: var(--text-primary);
        padding: 3rem 0 1rem;
        margin-top: 4rem;
        position: relative;
        overflow: hidden;
      }

      .footer::before {
        content: '';
        position: absolute;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 217, 255, 0.05) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .container {
        position: relative;
        z-index: 1;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .footer-section {
        animation: fadeInUp 0.8s ease-out;
      }

      .footer-title {
        font-size: 1.3rem;
        color: var(--neon-cyan);
        margin-bottom: 0.5rem;
        font-weight: bold;
      }

      .footer-subtitle {
        font-size: 1rem;
        color: var(--neon-purple);
        margin-bottom: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .footer-description {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .footer-nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .footer-link {
        color: var(--text-secondary);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.9rem;
      }

      .footer-link:hover {
        color: var(--neon-cyan);
        transform: translateX(5px);
      }

      .footer-socials {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .footer-socials a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.9rem;
      }

      .footer-socials a:hover {
        color: var(--neon-cyan);
        transform: translateX(5px);
      }

      .footer-bottom {
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
        text-align: center;
      }

      .footer-copyright {
        color: var(--text-secondary);
        font-size: 0.85rem;
        margin: 0;
      }

      @media (max-width: 768px) {
        .footer-content {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
