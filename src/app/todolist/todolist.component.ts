import { Component,OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TodoService } from './todolist.service';

@Component({
	selector: 'todolist-app',
	templateUrl: 'todolist.component.html',
    styleUrls: ['todolist.component.scss'],
    providers:[TodoService],
	encapsulation: ViewEncapsulation.None
})
export class ToDoListComponent implements OnInit {
    public todoText: string;
    public todoDate: Date;

    constructor(private todoService: TodoService){
        this.todoText = "";
    }
    ngOnInit(){

    }
    addTodo(){
        this.todoService.addTodos(this.todoText, this.todoDate);
        this.todoText = '';
    }
}
