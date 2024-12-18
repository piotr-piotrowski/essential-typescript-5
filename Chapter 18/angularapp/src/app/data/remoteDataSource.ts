import { Injectable, numberAttribute } from '@angular/core';
import { DataSourceImpl } from './dataSource';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order, Product } from './entities';

const protocol = 'http';
const hostname = 'localhost';
const port = 4600;

const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`,
};

@Injectable()
export class RemoteDataSource extends DataSourceImpl {
  constructor(private http: HttpClient) {
    super();
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(urls.products);
  }

  storeOrder(order: Order): Observable<number> {
    let orderData = {
      lines: [...order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
      })),
    };
    return this.http
      .post<{ id: number }>(urls.orders, orderData)
      .pipe<number>(map((val) => val.id));
  }
}
