import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditindividualComponent } from './editindividual.component';

describe('EditindividualComponent', () => {
  let component: EditindividualComponent;
  let fixture: ComponentFixture<EditindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditindividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
