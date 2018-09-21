import { ProductCardComponent } from "./product-card.component";

describe("ProductCardComponent", () => {
  let component: ProductCardComponent;


  beforeEach(() => {
    component = new ProductCardComponent(null);
  });

  it("Componente product-card deberia ser creado", () => {
    expect(component).toBeTruthy();
  });



}); 


