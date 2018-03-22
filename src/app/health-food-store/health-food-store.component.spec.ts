/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthFoodStoreComponent } from './health-food-store.component';

describe('HealthFoodStoreComponent', () => {
  let component: HealthFoodStoreComponent;
  let fixture: ComponentFixture<HealthFoodStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthFoodStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFoodStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
