import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false; // Propriedade para controlar o estado do menu

  constructor(private scroller: ViewportScroller) {}

  // Método para abrir/fechar o menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

   scrollToAnchor(fragment: string) {
    this.scroller.scrollToAnchor(fragment);
    this.isMenuOpen = false; // Feche o menu após clicar no link
  }
}
