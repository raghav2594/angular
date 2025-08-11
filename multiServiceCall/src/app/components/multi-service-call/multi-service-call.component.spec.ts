import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiServiceCallComponent } from './multi-service-call.component';

describe('MultiServiceCallComponent', () => {
  let component: MultiServiceCallComponent;
  let fixture: ComponentFixture<MultiServiceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiServiceCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiServiceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
