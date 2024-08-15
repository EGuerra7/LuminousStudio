import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLComponent } from './services-l.component';

describe('ServicesLComponent', () => {
  let component: ServicesLComponent;
  let fixture: ComponentFixture<ServicesLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
