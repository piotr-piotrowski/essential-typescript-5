// import { LocalDataSource } from "./data/localDataSource";
import "bootstrap/dist/css/bootstrap.css";
import { HtmlDisplay } from "./htmlDisplay";
import { RemoteDataSource } from "./data/remoteDataSource";

let ds = new RemoteDataSource();

async function displayData(): Promise<HTMLElement> {
  let display = new HtmlDisplay();
  display.props = {
    // products: await ds.getProducts("name"),
    // order: ds.order,
    dataSource: ds,
  };
  return display.getContent();
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    displayData().then((elem) => {
      let rootElement = document.getElementById("app");
      rootElement.innerHTML = "";
      rootElement.appendChild(elem);
    });
  }
};
