import { Component } from '@angular/core';
import { ToDOList } from '../../moduls/to-dolist';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule , NgFor , NgClass],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})





export class ToDoListComponent {

  toDoItem:ToDOList []=[

  ]

  nweTask:string='';
  addTask():void{
    if(this.nweTask.trim() !== ''){
      const nweTaskItem : ToDOList ={
        id:Date.now(),
        task:this.nweTask,
        coplated:false,

      }
      this.toDoItem.push(nweTaskItem)
console.log(this.toDoItem);
this.nweTask = ''


    }

  }
  todoUbdet(index:number):void{

    this.toDoItem[index].coplated = !this.toDoItem[index].coplated
    console.log(this.toDoItem);


  }
  delete(id:number):void{
    this.toDoItem = this.toDoItem.filter(item => item.id !== id)
  }

}
