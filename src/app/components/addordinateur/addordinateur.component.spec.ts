import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddordinateurComponent } from './addordinateur.component';

describe('AddordinateurComponent', () => {
  let component: AddordinateurComponent;
  let fixture: ComponentFixture<AddordinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddordinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddordinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
