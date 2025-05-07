import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  ngAfterViewInit(): void {
    this.setupFilterButtons();
    this.setupCarousels();
  }

  setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter') || '';

        // Ativa botão clicado
        filterButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category')?.split(' ') || [];
          if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  setupCarousels() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      const imagesContainer = card.querySelector('.carousel-images') as HTMLElement | null;
      const images = imagesContainer?.querySelectorAll('img') || [];
      let index = 0;

      const prevBtn = card.querySelector('.img-prev');
      const nextBtn = card.querySelector('.img-next');

      function updateCarousel() {
        const offset = -index * 100;
        if (imagesContainer) {
          imagesContainer.style.transform = `translateX(${offset}%)`;
        }
      }

      nextBtn?.addEventListener('click', () => {
        if (index < images.length - 1) {
          index++;
          updateCarousel();
        }
      });

      prevBtn?.addEventListener('click', () => {
        if (index > 0) {
          index--;
          updateCarousel();
        }
      });
    });
  }

}
