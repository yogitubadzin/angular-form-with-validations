import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInputComponent } from './shared-input.component';

describe('SharedInputComponent', () => {
  let component: SharedInputComponent;
  let fixture: ComponentFixture<SharedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
