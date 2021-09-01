import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayerComponent } from './todo-displayer.component';

describe('TodoDisplayerComponent', () => {
  let component: TodoDisplayerComponent;
  let fixture: ComponentFixture<TodoDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
