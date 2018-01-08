import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { TodoService} from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [TodosComponent]
  providers: [TodoService]

})


export class AppComponent {
  title = 'app';
}
