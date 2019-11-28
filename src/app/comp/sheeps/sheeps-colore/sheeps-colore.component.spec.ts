import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepsColoreComponent } from './sheeps-colore.component';

describe('SheepsColoreComponent', () => {
  let component: SheepsColoreComponent;
  let fixture: ComponentFixture<SheepsColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheepsColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheepsColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
