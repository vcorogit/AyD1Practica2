import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessComponent } from './order-success.component';

describe('OrderSuccessComponent', () => {
  let component: OrderSuccessComponent;
  let fixture: ComponentFixture<OrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Order success deberia ser creado', () => {
    expect(component).toBeTruthy();
  });
});
