import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrounComponent } from './broun.component';

describe('BrounComponent', () => {
  let component: BrounComponent;
  let fixture: ComponentFixture<BrounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
