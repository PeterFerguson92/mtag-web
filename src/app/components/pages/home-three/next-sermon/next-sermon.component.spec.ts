import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSermonComponent } from './next-sermon.component';

describe('NextSermonComponent', () => {
  let component: NextSermonComponent;
  let fixture: ComponentFixture<NextSermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextSermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
