import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactProfileComponent } from './my-contact-profile.component';

describe('MyContactProfileComponent', () => {
  let component: MyContactProfileComponent;
  let fixture: ComponentFixture<MyContactProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyContactProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContactProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
