import { Component } from '@angular/core';
import { ToDOList } from '../../moduls/to-dolist';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent {

  toDoItem: ToDOList[] = [];

  newTask: string = '';

  addTask(): void {

    if (this.newTask.trim() !== '') {

      const newTaskItem: ToDOList = {
        id: Date.now(),
        task: this.newTask,
        coplated: false,
      };

      this.toDoItem.push(newTaskItem);

      this.newTask = '';
    }
  }

  todoUbdet(index: number): void {

    this.toDoItem[index].coplated =
      !this.toDoItem[index].coplated;

  }

  delete(id: number): void {

    this.toDoItem =
      this.toDoItem.filter(item => item.id !== id);

  }

}