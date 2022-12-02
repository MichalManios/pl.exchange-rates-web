import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNumbersComponent } from './sort-numbers.component';
import { SortNumbersService } from '../sort-numbers.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SortNumbersComponent', () => {
  let component: SortNumbersComponent;
  let fixture: ComponentFixture<SortNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SortNumbersComponent ],
      providers: [ SortNumbersService, FormBuilder ]
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
