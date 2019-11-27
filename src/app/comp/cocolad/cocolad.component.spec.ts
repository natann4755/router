import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoladComponent } from './cocolad.component';

describe('CocoladComponent', () => {
  let component: CocoladComponent;
  let fixture: ComponentFixture<CocoladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocoladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
