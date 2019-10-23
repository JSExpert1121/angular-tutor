import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclePageComponent } from './lifecycle-page.component';

describe('LifecyclePageComponent', () => {
  let component: LifecyclePageComponent;
  let fixture: ComponentFixture<LifecyclePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
