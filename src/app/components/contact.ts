import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact" [attr.aria-label]="'Contact section'">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>

        <div class="contact-content">
          <div class="contact-info fade-in">
            <h3 class="contact-subtitle">Let's Connect!</h3>
            <p class="contact-description">
              Whether you have a project in mind or just want to chat about backend development, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            <div class="contact-methods">
              <a
                href="mailto:abdalrahman.sobhy14@gmail.com"
                class="contact-method hover-lift"
                aria-label="Email me"
              >
                <div class="method-icon">📧</div>
                <div class="method-content">
                  <div class="method-label">Email</div>
                  <div class="method-value">abdalrahman.sobhy14@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/abdelrahman-mohamed-a9a418357"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-method hover-lift"
                aria-label="Connect on LinkedIn"
              >
                <div class="method-icon">💼</div>
                <div class="method-content">
                  <div class="method-label">LinkedIn</div>
                  <div class="method-value">linkedin.com/in/abdelrahman-mohamed</div>
                </div>
              </a>

              <a
                href="https://github.com/Abd-Alrahman-Sobhy"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-method hover-lift"
                aria-label="Visit my GitHub"
              >
                <div class="method-icon">🐙</div>
                <div class="method-content">
                  <div class="method-label">GitHub</div>
                  <div class="method-value">github.com/Abd-Alrahman-Sobhy</div>
                </div>
              </a>

              <a
                href="https://wa.me/20" 
                class="contact-method hover-lift"
                aria-label="Message on WhatsApp"
              >
                <div class="method-icon">💬</div>
                <div class="method-content">
                  <div class="method-label">WhatsApp</div>
                  <div class="method-value">Available for quick chats</div>
                </div>
              </a>
            </div>

            <div class="social-links">
              <a
                href="https://github.com/Abd-Alrahman-Sobhy"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-mohamed-a9a418357"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.428-.103.25-.129.599-.129.948v5.429h-3.554s.05-8.802 0-9.714h3.554v1.377c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.372v5.565zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.944-1.71 1.173 0 1.915.755 1.94 1.71 0 .951-.767 1.71-1.969 1.71zm1.581 11.597H3.635V9.738h3.283v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="contact-visual fade-in">
            <div class="contact-box">
              <h3 class="contact-box-title">Let's Build Something Amazing</h3>
              <p class="contact-box-text">
                I'm always interested in hearing about new projects and opportunities. 
                If you have a project that requires a skilled backend developer, 
                don't hesitate to reach out!
              </p>

              <div class="contact-stats">
                <div class="stat">
                  <div class="stat-value">100%</div>
                  <div class="stat-name">Responsive</div>
                </div>
                <div class="stat">
                  <div class="stat-value">24/7</div>
                  <div class="stat-name">Available</div>
                </div>
                <div class="stat">
                  <div class="stat-value">∞</div>
                  <div class="stat-name">Dedicated</div>
                </div>
              </div>

              <div class="email-cta">
                <a
                  href="mailto:abdalrahman.sobhy14@gmail.com"
                  class="btn btn-primary"
                  aria-label="Send me an email"
                >
                  Send Me an Email
                </a>
                <a
                  href="/Abdelrahman Mohammed Sobhy.pdf"
                  download
                  class="btn btn-outline"
                  aria-label="Download my CV"
                >
                  📥 Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact {
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
      }

      .contact::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .contact::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
      }

      .section-title {
        text-align: center;
      }

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-top: 3rem;
        align-items: center;
      }

      .contact-info {
        animation: slideInLeft 0.8s ease-out;
      }

      .contact-subtitle {
        font-size: 1.8rem;
        color: var(--neon-cyan);
        margin-bottom: 1rem;
      }

      .contact-description {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
      }

      .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .contact-method {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        transition: all 0.3s ease;
        text-decoration: none;
      }

      .contact-method:hover {
        border-color: var(--neon-cyan);
        background: rgba(0, 217, 255, 0.05);
        transform: translateX(10px);
      }

      .method-icon {
        font-size: 1.8rem;
        flex-shrink: 0;
      }

      .method-label {
        color: var(--text-secondary);
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .method-value {
        color: var(--neon-cyan);
        font-weight: 500;
        font-size: 0.95rem;
      }

      .social-links {
        display: flex;
        gap: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
      }

      .social-links a {
        width: 40px;
        height: 40px;
        border: 1px solid var(--neon-cyan);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--neon-cyan);
        transition: all 0.3s ease;
      }

      .social-links a:hover {
        background: var(--neon-cyan);
        color: var(--primary-black);
        transform: translateY(-5px);
      }

      .contact-visual {
        animation: slideInRight 0.8s ease-out;
      }

      .contact-box {
        background: linear-gradient(135deg, var(--bg-card), rgba(0, 217, 255, 0.05));
        border: 2px solid var(--neon-cyan);
        border-radius: 12px;
        padding: 3rem;
        text-align: center;
        animation: borderGlow 3s ease-in-out infinite;
      }

      .contact-box-title {
        font-size: 1.5rem;
        color: var(--neon-cyan);
        margin-bottom: 1rem;
      }

      .contact-box-text {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.8;
        margin-bottom: 2rem;
      }

      .contact-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-bottom: 2rem;
        padding: 1.5rem 0;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
      }

      .stat {
        text-align: center;
      }

      .stat-value {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--neon-purple);
      }

      .stat-name {
        font-size: 0.8rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .email-cta {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
      }

      .btn-primary {
        background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
        color: var(--primary-black);
        border: 2px solid var(--neon-cyan);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
      }

      @media (max-width: 768px) {
        .contact-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .contact-box {
          padding: 2rem;
        }

        .contact-stats {
          grid-template-columns: 1fr;
        }

        .social-links {
          justify-content: center;
        }
      }
    `,
  ],
})
export class ContactComponent {}
