import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostService from "../../../services/PostServices";
// import { urlImage } from "../../../config";
const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await PostService.get_postdetail(slug, 4);
      setPost(res.post);
      setPosts(res.posts);
    })();
  }, [slug]);
  return (
    <div className="">
      
    
      <section className="blog-hero spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
              <img style={{
              backgroundImage: `url(../${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "480px",
            }}></img>
                <div className="col-lg-9 text-center">
                    <div className="blog__hero__text ">
                        <h2 className="my-3">{post.title }</h2>
                        <ul>
                            <li>By Deercreative</li>
                            <li>February 21, 2019</li>
                            <li>8 Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="blog-details spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="blog__details__pic">
                        <img src="img/blog/details/blog-details.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="blog__details__content">
                        <div className="blog__details__share">
                            <span>share</span>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" class="youtube"><i class="fa fa-youtube-play"></i></a></li>
                                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div className="blog__details__text">
                            <p>{post.detail}</p>
                        </div>
                        <div className="blog__details__quote">
                            <i className="fa fa-quote-left"></i>
                            <p>“When designing an advertisement for a particular product many things should be
                                researched like where it should be displayed.”</p>
                            <h6>_ John Smith _</h6>
                        </div>
                        <div className="blog__details__text">
                            <p>Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of
                                skin. Problems like dark circles, puffiness, and crow’s feet can be control from the
                                strong effects of this serum.</p>
                            <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving
                                the body a toned shape, also helps in cleansing the skin from the root and not letting
                                the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging
                                from the sensitive near the eyes.</p>
                        </div>
                        <div className="blog__details__option">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__details__author">
                                        <div className="blog__details__author__pic">
                                            <img src="img/blog/details/blog-author.jpg" alt=""/>
                                        </div>
                                        <div className="blog__details__author__text">
                                            <h5>Aiden Blair</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__details__tags">
                                        <a href="#">#Fashion</a>
                                        <a href="#">#Trending</a>
                                        <a href="#">#2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details__btns">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="" className="blog__details__btns__item">
                                        <p><span className="arrow_left"></span> Previous Pod</p>
                                        <h5>It S Classified How To Utilize Free Classified Ad Sites</h5>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <a href="" className="blog__details__btns__item blog__details__btns__item--next">
                                        <p>Next Pod <span className="arrow_right"></span></p>
                                        <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details__comment">
                            <h4>Leave A Comment</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <textarea placeholder="Comment"></textarea>
                                        <button type="submit" className="site-btn">Post Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <h2 className="my-3">Post Related</h2>
      <div className="row mb-3">
        {posts.map((post) => (
          <div className="col-md-3 col-sm-12 key={post.id}">
          <Link
            className="text-decoration-none text-dark "
            to={`/post-detail/${post.slug}`}
          >
            <img
              className="rounded-3 img-fluid "
              src={`${"../"+post.image}`}
              alt={post.title}
            />
            <div className="pt-4">
              <h5 className="text-uppercase">{post.title}</h5>
              <p>{post.detail}</p>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;