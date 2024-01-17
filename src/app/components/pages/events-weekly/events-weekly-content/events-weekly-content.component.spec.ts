import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsWeeklyContentComponent } from './events-weekly-content.component';

describe('EventsWeeklyContentComponent', () => {
  let component: EventsWeeklyContentComponent;
  let fixture: ComponentFixture<EventsWeeklyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsWeeklyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsWeeklyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
