import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  statValue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Strength', statValue: 6},
  {name: 'Agility', statValue: 12},
  {name: 'Will', statValue: 23},
  {name: 'Knowledge', statValue: 25},
  {name: 'Resourcefulness', statValue: 12},
];

@Component({
  selector: 'left-card',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class LeftCard {
  displayedColumns: string[] = ['name', 'statValue'];
  dataSource = ELEMENT_DATA;
 
}
