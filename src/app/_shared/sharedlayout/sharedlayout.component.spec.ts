import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedlayoutComponent } from './sharedlayout.component';

describe('SharedlayoutComponent', () => {
  let component: SharedlayoutComponent;
  let fixture: ComponentFixture<SharedlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
