import MainContent from './Main-content';
import ProductNew from './ProductNew';
import ProductSale from './ProductSale';
import Slide from './Slide';



const Home = () => {

    return (
        <>
           <div className="" >
                <Slide />
            </div>
            {/* <About /> */}
            {/* <Blog /> */}
            {/* <ProductItems/> */}
            {/* <Checkout /> */}
            {/* <Contact /> */}
            {/* <ProductDetail /> */}
            {/* <MainContent /> */}
            <ProductNew />
            <ProductSale />
            <section className="counter spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item">
                            <div className="counter__item__number">
                                <h2 className="cn_num">102</h2>
                            </div>
                            <span>
                                Our <br />
                                Clients
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item">
                            <div className="counter__item__number">
                                <h2 className="cn_num">30</h2>
                            </div>
                            <span>
                                Total <br />
                                Categories
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item">
                            <div className="counter__item__number">
                                <h2 className="cn_num">102</h2>
                            </div>
                            <span>
                                In <br />
                                Country
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter__item">
                            <div className="counter__item__number">
                                <h2 className="cn_num">98</h2>
                                <strong>%</strong>
                            </div>
                            <span>
                                Happy <br />
                                Customer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Counter Section End */}
        {/* Team Section Begin */}
        <section className="team spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Our Team</span>
                            <h2>Meet Our Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team__item">
                            <img src="img/about/team-1.jpg" alt="" />
                            <h4>John Smith</h4>
                            <span>Fashion Design</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team__item">
                            <img src="img/about/team-2.jpg" alt="" />
                            <h4>Christine Wise</h4>
                            <span>C.E.O</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team__item">
                            <img src="img/about/team-3.jpg" alt="" />
                            <h4>Sean Robbins</h4>
                            <span>Manager</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="team__item">
                            <img src="img/about/team-4.jpg" alt="" />
                            <h4>Lucy Myers</h4>
                            <span>Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Team Section End */}
        {/* Client Section Begin */}
        <section className="clients spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Partner</span>
                            <h2>Happy Clients</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-1.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-2.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-3.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-4.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-5.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-6.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-7.png" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <a href="#" className="client__item">
                            <img src="img/clients/client-8.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
          
        </>
    );
}

export default Home;