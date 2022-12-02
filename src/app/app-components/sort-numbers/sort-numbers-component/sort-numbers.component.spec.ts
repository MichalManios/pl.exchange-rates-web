import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNumbersComponent } from './sort-numbers.component';

describe('SortNumbersComponent', () => {
  let component: SortNumbersComponent;
  let fixture: ComponentFixture<SortNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
