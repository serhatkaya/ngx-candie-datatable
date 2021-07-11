/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CandieRowComponent } from './candie-row.component';

describe('CandieRowComponent', () => {
  let component: CandieRowComponent;
  let fixture: ComponentFixture<CandieRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandieRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandieRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
