import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'middle-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CdkDrag, CdkDropList],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleCard {

  equipped : any[] = [];

  items = [
    {
      title: 'Armet',
      picture: 'https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/5b/Armet.png/90px-Armet.png',
    },
    {
      title: 'Barbuta Helm',
      picture:
        'https://darkanddarker.wiki.spellsandguns.com/images/thumb/0/0c/Barbuta_Helm.png/90px-Barbuta_Helm.png',
    },
    {
      title: 'Chapel de Fer',
      picture:
        'https://darkanddarker.wiki.spellsandguns.com/images/thumb/a/a3/Chapel_De_Fer.png/90px-Chapel_De_Fer.png',
    },
  ];



  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
