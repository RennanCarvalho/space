import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarsComponent } from './component/stars/stars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
