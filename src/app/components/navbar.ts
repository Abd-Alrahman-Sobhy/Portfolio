import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [attr.aria-label]="'Main navigation'">
      <div class="container navbar-content">
        <div class="logo">
          <a href="#home" class="logo-text">
            <span class="logo-bracket">&lt;</span>
            Abdelrahman
            <span class="logo-bracket">/&gt;</span>
          </a>
        </div>

        <button
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="isMobileMenuOpen()"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-menu" [class.active]="isMobileMenuOpen()">
          <li><a href="#home" (click)="closeMobileMenu()" class="nav-link">Home</a></li>
          <li><a href="#about" (click)="closeMobileMenu()" class="nav-link">About</a></li>
          <li><a href="#skills" (click)="closeMobileMenu()" class="nav-link">Skills</a></li>
          <li><a href="#projects" (click)="closeMobileMenu()" class="nav-link">Projects</a></li>
          <li><a href="#experience" (click)="closeMobileMenu()" class="nav-link">Experience</a></li>
          <li><a href="#contact" (click)="closeMobileMenu()" class="nav-link">Contact</a></li>
          <li>
            <a
              href="https://github.com/Abd-Alrahman-Sobhy"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link github-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(15, 15, 30, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--neon-cyan);
        z-index: 1000;
        box-shadow: 0 0 20px rgba(0, 217, 255, 0.1);
      }

      .navbar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: bold;
        background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: glowPulse 3s ease-in-out infinite;
      }

      .logo-bracket {
        color: var(--neon-cyan);
      }

      .nav-menu {
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;
      }

      .nav-link {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        position: relative;
        transition: color 0.3s ease;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
        transition: width 0.3s ease;
      }

      .nav-link:hover {
        color: var(--neon-cyan);
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .github-link {
        padding: 8px 16px;
        border: 1px solid var(--neon-cyan);
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      .github-link:hover {
        background: var(--neon-cyan);
        color: var(--primary-black);
        box-shadow: 0 0 15px var(--neon-cyan);
      }

      .mobile-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        gap: 6px;
      }

      .mobile-toggle span {
        width: 25px;
        height: 3px;
        background: var(--neon-cyan);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .mobile-toggle {
          display: flex;
        }

        .nav-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-dark);
          padding: 2rem;
          border-bottom: 1px solid var(--neon-cyan);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .nav-menu.active {
          max-height: 500px;
        }

        .nav-link {
          display: block;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
