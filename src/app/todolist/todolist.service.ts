import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()

export class TodoService {
    private nextID:number;
    private date:Date;

    constructor(){
        let todos = this.getToDos();
        if(todos.length == 0){
            this.nextID = 0;
        }else{
            let maxID = todos[todos.length-1].id;
            this.nextID = maxID + 1;
        }
    }
   public getToDos():Todo[]{
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] :localStorageItem.todos;
   }

   public addTodos(text:string, date:Date){
    let todo = new Todo(this.nextID,text,date);
    let todos = this.getToDos();
    todos.push(todo);
    this.setLocalStorage(todos);
   }

   public removeTodo(id:number){
    let todos = this.getToDos();
    todos = todos.filter((todo)=> todo.id != id);
    this.setLocalStorage(todos);
   }

   public setLocalStorage(todos:Todo[]){
    localStorage.setItem('todos',JSON.stringify({todos}));
   }
}