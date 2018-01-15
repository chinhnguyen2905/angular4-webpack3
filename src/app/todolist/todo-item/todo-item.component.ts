import { Component,OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todolist.service';

@Component({
	selector: 'todo-item-app',
	templateUrl: 'todo-item.component.html',
	styleUrls: ['todo-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
    @Input() todo: Todo;
    constructor(private todoService:TodoService){}
    ngOnInit(){
        
    }

    private removeItem(): void {
        this.todoService.removeTodo(this.todo.id);
    }
}
