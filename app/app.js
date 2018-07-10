import css from './stylesheet.css'
import * as service from "./product-service"
import ProductCard from "./product-card"
import ProductCarousel from "./product-carousel"

service.getAllProducts()
    .then(products => {
        let html = "";
        products.groups.forEach((group, index) => {
            html += (new ProductCard(group, index)).displayProduct();
            html += (new ProductCarousel(group, index)).showCarousel();
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(error => console.log(error)
);
