import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicQuoteComponent } from './mechanic-quote.component';

describe('MechanicQuoteComponent', () => {
  let component: MechanicQuoteComponent;
  let fixture: ComponentFixture<MechanicQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
