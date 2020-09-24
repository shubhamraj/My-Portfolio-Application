import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalProfileComponent } from './my-personal-profile.component';

describe('MyPersonalProfileComponent', () => {
  let component: MyPersonalProfileComponent;
  let fixture: ComponentFixture<MyPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
