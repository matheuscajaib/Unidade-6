import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
groceryList: string[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.groceryList.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1);
    }
  }

  doneItem(item: string) {
    // Implement doneItem logic here (e.g., mark item as completed)
  }
}