import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostService from "../../../services/PostServices";
import ReactPaginate from "react-paginate";

const Blog = () => {
  const [limit, setLimit] = useState(6);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("post");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [totalPages, setTotalPages] = useState(0); // Số trang tổng cộng
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (selectedTopic === "news") {
          result = await PostService.list_new("post", 1);
        } else if (selectedTopic === "") {
          result = await PostService.get_list();
        } else {
          result = await PostService.get_by_topicid(selectedTopic);
        }
        setPosts(result[type]);
        setTotalPages(Math.ceil(result[type].length / limit)); // Tính tổng số trang dựa trên số lượng bài viết và giới hạn mỗi trang
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [limit, type, selectedTopic]);

  const handlePageClick = (selectedItem) => {
    const selectedPage = selectedItem.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <section
        className="breadcrumb-blog"
        style={{ backgroundImage: "url('img/breadcrumb-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container my-4">
          <div className="shop__product__option__right">
            <p>Sort by Topic:</p>
            <select
              className="mx-2"
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value="">ALL</option>
              <option value="1">Post</option>
              <option value="2">Services</option>
              <option value="3">Trending</option>
              <option value="news">NewPost</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {posts &&
              posts
                .slice(currentPage * limit, (currentPage + 1) * limit)
                .map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div
                        className="blog__item__pic set-bg"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="blog__item__text">
                        <span>
                          <img src="img/icon/calendar.png" alt="" />{" "}
                          {item.created_at}
                        </span>
                        <h5>{item.title}</h5>
                        <Link to={`/post-detail/${item.slug}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            pageClassname="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </section>
    </>
  );
};

export default Blog;
