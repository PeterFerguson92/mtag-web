import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipContentComponent } from './membership-content.component';

describe('MembershipContentComponent', () => {
  let component: MembershipContentComponent;
  let fixture: ComponentFixture<MembershipContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
