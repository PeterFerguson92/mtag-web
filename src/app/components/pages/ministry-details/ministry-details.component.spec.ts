import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDetailsComponent } from './ministry-details.component';

describe('MinistryDetailsComponent', () => {
  let component: MinistryDetailsComponent;
  let fixture: ComponentFixture<MinistryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
