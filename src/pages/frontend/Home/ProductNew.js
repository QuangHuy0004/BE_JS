import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import ProductItems from "./ProductItems";

const ProductNew = () => {
const [products, setProducts] = useState([]);
const [limit, setLimit] = useState(4);

    useEffect(() => {
        (async () => {
          const result = await ProductService.list_new(limit);
          setProducts(result.products);
        })();
      }, [limit]);

    return ( 
    <>
      <section className="related spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="related-title">New Product</h3>
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
      </section>
    </> 
    );
}
 
export default ProductNew;