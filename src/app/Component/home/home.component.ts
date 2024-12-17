import { AfterViewInit, Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';
import { RouterLink } from '@angular/router';
import { PortofoloComponent } from "../portofolo/portofolo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarqueeComponent, RouterLink, PortofoloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
