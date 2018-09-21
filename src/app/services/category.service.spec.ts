import { TestBed, inject } from "@angular/core/testing";

import { ProductService } from "./product.service";
import { AngularFireModule } from "angularfire2";
import { environment } from "../../environments/environment";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

describe("ProductService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
      providers: [ProductService]
    });
  });

  it("Servicio deberia ser creado e inyectado", inject(
    [ProductService],
    (service: ProductService) => {
      expect(service).toBeTruthy();
    }
  ));
});
