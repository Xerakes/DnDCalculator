import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeftCard } from './components/card/card.component';
import { MiddleCard } from './components/middleCard/card.component';
import { RightCard } from './components/rightCard/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, LeftCard, MiddleCard, RightCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dndFront';
}
