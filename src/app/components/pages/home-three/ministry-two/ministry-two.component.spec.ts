import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryTwoComponent } from './ministry-two.component';

describe('MinistryTwoComponent', () => {
  let component: MinistryTwoComponent;
  let fixture: ComponentFixture<MinistryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
