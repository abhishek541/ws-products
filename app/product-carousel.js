class ProductCarousel {
  constructor(product, i) {
    this.product = product;
    this.index = i;
  }

  showCarousel() {
    return `
          <div class="modal fade" id="myModal_${this.index}">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">

                <div class="modal-body" style="padding: 0">
                  <button type="button" class="btn-close" data-dismiss="modal">&times;</button>
                  <div id="demo_${this.index}" class="carousel slide" data-ride="carousel">
                    <div class="indicator-div">
                      <ul class="carousel-indicators indicators">`
                      + this.getIndicators(this.product.images, this.index) +
                      `</ul>
                    </div>
                    <div class="carousel-inner">`
                    + this.getImages(this.product.images) +
                    `</div>
                    <a class="carousel-control-prev" href="#demo_${this.index}" data-slide="prev">
                      <span class="control"><span class="carousel-control-prev-icon control-dim"></span></span>
                    </a>
                    <a class="carousel-control-next" href="#demo_${this.index}" data-slide="next">
                      <span class="control"><span class="carousel-control-next-icon control-dim"></span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
  }

  getIndicators(imageArr, i) {
    let indicatorHtml = "";
    imageArr.forEach((image, index) => {
      let activeClass = index === 0 ? 'active' : '';
      indicatorHtml += `
        <li data-target="#demo_${i}" data-slide-to="${index}" class="${activeClass}"></li>
      `;
    });
    return indicatorHtml;
  }

  getImages(imageArr) {
    let imageHtml = "";
    imageArr.forEach((image, index) => {
      let activeClass = index === 0 ? 'active' : '';
      imageHtml += `
        <div class="carousel-item ${activeClass}" style="text-align: center">
          <img src="${image.href}" style="width: 100%" />
        </div>
      `;
    });
    return imageHtml;
  }
}

export default ProductCarousel
