import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShukyComponent } from './shuky.component';

describe('ShukyComponent', () => {
  let component: ShukyComponent;
  let fixture: ComponentFixture<ShukyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShukyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShukyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
