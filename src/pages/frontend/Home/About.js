import { useEffect, useState } from "react";
import "./Style.css";
import PostService from "../../../services/PostServices";

const About = () => {
  const [limit, setLimit] = useState(5);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await PostService.list("page", 1, limit);
        setPosts(result.post);
        console.log(result);
      } catch (error) {
        console.error("Error fetching ser:", error);
      }
    };
    fetchData();
  }, [limit]);
  return (
    <>
      <section className="about mt-3">
        <div className="container">
          <div className="row">
            {posts &&
              posts.map((item, index) => (
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div key={index} className="about__item">
                    <div>
                      <img className="mb-4" src={`${item.image}`} alt=""></img>
                    </div>
                    <h4>{item.title}</h4>
                    <p> {item.detail}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default About;