import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurdetailComponent } from './ordinateurdetail.component';

describe('OrdinateurdetailComponent', () => {
  let component: OrdinateurdetailComponent;
  let fixture: ComponentFixture<OrdinateurdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
