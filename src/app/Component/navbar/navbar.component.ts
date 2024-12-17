import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ngOnInit(): void {
    // استدعاء الوظيفة عند تحميل المكون
    this.initializeNavbarToggle();
  }

  initializeNavbarToggle(): void {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const navbarMenu = document.getElementById('navbar-sticky');

    if (toggleButton && navbarMenu) {
      toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('hidden');
      });
    } else {
      console.error('Navbar elements not found!');
    }
  }
}
