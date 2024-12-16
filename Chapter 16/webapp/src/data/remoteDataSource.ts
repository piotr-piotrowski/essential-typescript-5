import Axios from "axios";
import { AbstractDataSource } from "./abstractDataSource";
import { Product, Order } from "./entities";

const protocol = "http";
const hostname = "localhost";
const port = 4600;

const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`,
};

export class RemoteDataSource extends AbstractDataSource {
  loadProducts(): Promise<Product[]> {
    return Axios.get(urls.products).then((respose) => respose.data);
  }

  storeOrder(): Promise<number> {
    let orderData = {
      lines: [...this.order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
      })),
    };
    return Axios.post(urls.orders, orderData).then(
      (response) => response.data.id
    );
  }
}
