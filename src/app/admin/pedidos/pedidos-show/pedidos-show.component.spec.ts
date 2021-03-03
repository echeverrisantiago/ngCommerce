import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosShowComponent } from './pedidos-show.component';

describe('PedidosShowComponent', () => {
  let component: PedidosShowComponent;
  let fixture: ComponentFixture<PedidosShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
