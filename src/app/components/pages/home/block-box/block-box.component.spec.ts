import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBoxComponent } from './block-box.component';

describe('BlockBoxComponent', () => {
  let component: BlockBoxComponent;
  let fixture: ComponentFixture<BlockBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
