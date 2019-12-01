import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckComponent } from './service-check.component';

describe('ServiceCheckComponent', () => {
  let component: ServiceCheckComponent;
  let fixture: ComponentFixture<ServiceCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
