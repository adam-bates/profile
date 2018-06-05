import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalabilityComponent } from './scalability.component';

describe('ScalabilityComponent', () => {
  let component: ScalabilityComponent;
  let fixture: ComponentFixture<ScalabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
