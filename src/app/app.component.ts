import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, faArrowDown } from '@fortawesome/free-solid-svg-icons';

declare var displayThemeButton: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Marvin verdera Portfolio';
  faMoon = faMoon;
  faSun = faSun;
  faArrowDown = faArrowDown;

  ngOnInit(): void {
    new displayThemeButton();
  }
}


