import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IseCreamComponent } from './ise-cream.component';

describe('IseCreamComponent', () => {
  let component: IseCreamComponent;
  let fixture: ComponentFixture<IseCreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IseCreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IseCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
