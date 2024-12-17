import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortofoloComponent } from "../portofolo/portofolo.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, PortofoloComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
