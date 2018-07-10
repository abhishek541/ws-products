class ProductCard {
  constructor(product, i) {
    this.product = product;
    this.index = i;
  }

  displayProduct() {
    let productName = "";
    if(this.product.name.length > 30) {
      productName = this.product.name.substring(0, 30) + "...";
    } else {
      productName = this.product.name;
    }
    return `
      <div class="col-sm-4" style="margin-bottom: 2%">
        <div class="card" data-toggle="modal" data-target="#myModal_${this.index}">
          <img class="card-img-top" src='${this.product.images[0].href}' />
          <div class="card-img-overlay" style="padding: 0px">
            <div class="card-title product-name">${productName.toUpperCase()}</div>
            <h3 class="card-text product-price"><span class="badge badge-secondary">$ ${this.product.priceRange.selling.high}</span></h3>
          </div>
        </div>
      </div>
    `;
  }
}

export default ProductCard
