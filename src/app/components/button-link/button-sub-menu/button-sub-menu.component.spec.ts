import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubMenuComponent } from './button-sub-menu.component';

describe('ButtonSubMenuComponent', () => {
  let component: ButtonSubMenuComponent;
  let fixture: ComponentFixture<ButtonSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
