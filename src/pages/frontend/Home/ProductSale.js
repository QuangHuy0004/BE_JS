import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import ProductItems from "./ProductItems";

const ProductSale = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    
        useEffect(() => {
            (async () => {
              const result = await ProductService.list_sale(limit);
              setProducts(result.products);
            })();
          }, [limit]);

        return ( 
        <>
          <section className="related spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="related-title">Product Sale Hot</h3>
                </div>
              </div>
              <div className="row ">
                {products &&
                  products.length > 0 &&
                  products.map((product) => (
                    <div key={product.id} className="col-md-3">
                      <ProductItems product={product} />
                    </div>
                  ))}
              </div>
            </div>
            <marquee>
              <h5>  FashionShop là đơn vị mua bán thời trang uy tín, hợp tác với
                nhiều brand lớn, với sứ mệnh mong muốn đem đến cho người dùng
                những sản phảm tốt nhất!</h5>
              </marquee>
          </section>
        </> 
        );
    }
 
export default ProductSale;