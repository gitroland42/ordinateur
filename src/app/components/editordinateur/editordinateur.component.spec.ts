import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordinateurComponent } from './editordinateur.component';

describe('EditordinateurComponent', () => {
  let component: EditordinateurComponent;
  let fixture: ComponentFixture<EditordinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditordinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditordinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
