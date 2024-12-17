import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit{
  ngAfterViewInit(): void {


    $(document).ready(function () {
      $('#nav li ul').hide(); // Hide all answers initially
      $('#nav li').first().addClass('active').find('ul').show(); // Show the first answer initially

      $('#nav li a').click(function () {
        const isActive = $(this).hasClass('active'); // Check if this is already active

        // Hide all answers and remove 'active' class from all questions
        $('#nav li ul').slideUp();
        $('#nav li a').removeClass('active');

        if (!isActive) {
          // If not already active, open the clicked question's answer
          $(this).addClass('active');
          $(this).next('ul').slideDown();
        }
      });
    });
    
  }
}
