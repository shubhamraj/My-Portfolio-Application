import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPofessionalProfileComponent } from './my-pofessional-profile.component';

describe('MyPofessionalProfileComponent', () => {
  let component: MyPofessionalProfileComponent;
  let fixture: ComponentFixture<MyPofessionalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPofessionalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPofessionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
