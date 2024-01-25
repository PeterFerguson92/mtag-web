import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineContentComponent } from './online-content.component';

describe('OnlineContentComponent', () => {
  let component: OnlineContentComponent;
  let fixture: ComponentFixture<OnlineContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
