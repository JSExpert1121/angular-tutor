import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPageComponent } from './binding-page.component';

describe('BindingPageComponent', () => {
  let component: BindingPageComponent;
  let fixture: ComponentFixture<BindingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
