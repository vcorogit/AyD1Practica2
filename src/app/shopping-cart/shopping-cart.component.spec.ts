import { ShoppingCart } from "./../models/shopping-cart";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartService } from "./../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";

describe("ShoppingCartComponent", () => {
  let component: ShoppingCartComponent;
  let service: ShoppingCartService;

  beforeEach(() => {
    service = new ShoppingCartService(null);
    component = new ShoppingCartComponent(service);
  });

  it("ShoppingCartComponent deberia crearse", () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it("Deberia obtener la propiedad cart$ del objeto retornado del servicio", () => {
    let spy = spyOn(service, "getCart").and.returnValue(
      Observable.from([new ShoppingCart(null)])
    );

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.cart$).not.toBeNull();
  });

  it("Deberia llamar al servicio de shopping cart para liberar todos los items del carro de compras", () => {
    let spy = spyOn(service, "clearCart").and.callFake(() => {
      return Observable.empty;
    });

    component.clearCart();

    expect(spy).toHaveBeenCalled();
  });

  
  it("Deberia retornar 2 como cantidad total de items en el carro para ser comprado", () => {
    expect(component).toBe(2);
  });

  it("Deberia llamar al servicio de shopping cart para liberar todos los items del carro de compras", () => {
    let spy = spyOn(service, "clearCart").and.callFake(() => {
      return Observable.empty;
    });
  });

  it("Deberia crear una instancia con 0 productos en el carro", () => {
    expect(component).toBeTruthy();
    expect(component.clearCart);
  });

});
