import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindividualuserComponent } from './addindividualuser.component';

describe('AddindividualuserComponent', () => {
  let component: AddindividualuserComponent;
  let fixture: ComponentFixture<AddindividualuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddindividualuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddindividualuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
