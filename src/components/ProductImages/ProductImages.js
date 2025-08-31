import React from "react";
import "./ProductImages.css";

function ProductImages() {
  return (
    <div className="product-image-container">
      <div className="product-images">
      {/* Main product image */}
      <div className="main-image">
        <img src="images/img_button_previous.svg" alt="Beauty Bundle" className="slide-image" />
        <img src="https://i.postimg.cc/8krF9mtZ/img-manuka-honey-nz-removebg-preview.png" alt="Main Product" className="main-product-image" />
        
      <img src="images/img_button_next_slide.svg" alt="Beauty Bundle" className="slide-image" />
      </div>

      {/* Thumbnail images */}
      <div className="thumbnail-list">
        <div>
        <img src="/images/img_1_manuka_honey_web_24_5_png.png" alt="Thumbnail 1" className="thumbnail-1"/>
        <img src="/images/img_1_manuka_honey_web_24_png.png" alt="Thumbnail 2" className="thumbnail-2"/>
        </div>
        <img src="/images/img_image_330x584.png" alt="Thumbnail 3" className="thumbnail-3"/>
        <div>
        <img src="/images/img_1_manuka_honey_web_24_1_png.png" alt="Thumbnail 4" className="thumbnail-4" />
        <img src="/images/img_1_manuka_honey_web_24_3_png.png" alt="Thumbnail 5" className="thumbnail-5" />
        </div>
        <div>
        <img src="/images/img_us_24_product_t.png" alt="Thumbnail 6" className="thumbnail-6" />
        <img src="/images/img_newzealandmanuk.png" alt="Thumbnail 7" className="thumbnail-7" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductImages;
