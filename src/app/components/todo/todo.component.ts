import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from 'src/app/action/todo.actions';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];

  removeTodo (index:number){
    this.store.dispatch( new TodoRemove(index))

  }
constructor(private store:Store<{todos:Todo[] }>) { 
    store.pipe(select('todos')).subscribe((values) => {
      this.todos =values;
      console.log(values);

    });
  }

  ngOnInit(): void {
  }

}
