/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CandieTableComponent } from './candie-table.component';

describe('CandieTableComponent', () => {
  let component: CandieTableComponent;
  let fixture: ComponentFixture<CandieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
