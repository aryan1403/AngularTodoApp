import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { todos } from 'src/app/todos.model';

@Component({
  selector: 'app-todo-displayer',
  templateUrl: './todo-displayer.component.html',
  styleUrls: ['./todo-displayer.component.css']
})
export class TodoDisplayerComponent implements OnInit {

  @Input() todo: todos | undefined;

  todoList: todos[] | undefined;

  constructor(private http: HttpClient) {
  }

  deleteTodo(todo: todos) {
    this.http.get<any>('http://localhost:8080/todolist/del/'+todo.id).subscribe(data => {});
    this.todoList?.splice(this.todoList?.indexOf(todo), 1);

  }

  ngOnInit(): void {
    const data = {'id': 20, 'todo': "meow", "completed": false};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.http.post<any>('http://localhost:8080/todolist/addTodo', data, config).subscribe(
    );
                                
    this.http.get<any>('http://localhost:8080/todolist/getTodo').subscribe(data => {  
      this.todoList = data;
    })
  }

}
