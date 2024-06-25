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
import { CommonModule } from '@angular/common';


interface Item {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
}

@Component({
    selector: 'right-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule, MatButtonModule, CdkDrag, CdkDropList, CommonModule]
})
export class RightCard {

  categories: string[] = ['All', 'Weapons', 'Helmet', 'Potions'];
  selectedCategory: string = 'All';

  items: Item[] = [
    { id: 1, name: 'Sword', category: 'Weapons', imageUrl: 'assets/sword.png' },
    { id: 2, name: 'Barbuta Helm', category: 'Helmet', imageUrl: 'https://darkanddarker.wiki.spellsandguns.com/images/thumb/0/0c/Barbuta_Helm.png/90px-Barbuta_Helm.png' },
    { id: 3, name: 'Potion', category: 'Potions', imageUrl: 'assets/potion.png' },
    { id: 4, name: 'Armet', category: 'Helmet', imageUrl: 'https://darkanddarker.wiki.spellsandguns.com/images/thumb/5/5b/Armet.png/90px-Armet.png' },
    { id: 5, name: 'Chapel de Fer', category: 'Helmet', imageUrl: 'https://darkanddarker.wiki.spellsandguns.com/images/thumb/a/a3/Chapel_De_Fer.png/90px-Chapel_De_Fer.png' }
  ];
  itemsOld = [
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



  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.items;
    }
    return this.items.filter(item => item.category === this.selectedCategory);
  }

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      this.selectedCategory = target.value;
    }
  }
}
