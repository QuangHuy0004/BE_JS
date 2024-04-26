import { FaLocationDot, FaPaperPlane, FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactService from "../../../services/ContactServices";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
    title: "",
    replay_id: "",
    user_id: "0",
    status: "1",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = new FormData();
    contact.append("name", data.name);
    contact.append("email", data.email);
    contact.append("phone", data.phone);
    contact.append("title", data.title);
    contact.append("replay_id", data.replay_id);
    contact.append("user_id", data.user_id);
    contact.append("content", data.content);
    contact.append("status", data.status);
    //Service them
    (async () => {
      const result = await ContactService.store(contact);
      if (result.status === true) {
        toast.success("Gửi thành công");
        setData({
          name: "",
          phone: "",
          email: "",
          content: "",
          title: "",
    user_id: "0",
          replay_id: "",
          status: "1",
          
        }
      );
    toast.success("Tin nhắn của bạn đã được gửi đi!")
      } else {
        toast.error("Gửi thất bại");
      }
    })();
  };
  return (
    <>  <div className="map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.768698203672!2d106.70098751402182!3d10.77410336229337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b13fb7d035b%3A0x751e62d176f8c650!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1648263706073!5m2!1sen!2sus" height={500}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
    />
</div>
      <section class="bg-body-tertiary my-5">
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__text">
                            <div className="section-title">
                                <span>Thông tin</span>
                                <h2>Liên hệ</h2>
                                <p>
                                    Bạn có thể nói với chung tôi tất cả những gì bạn muốn nói về trải<br></br>
                                    tại đây của chúng tôi!
                                </p>
                            </div>
                            <ul>
                                <li>
                                    <h4>Hồ Chí Minh</h4>
                                    <p>
                                       491c Đỗ Xuân Hợp - Phước Long B <br></br> Thành Phố Thủ Đức
                                    </p>
                                </li>
                                <li>
                                    <h4>Trần Quang Huy</h4>
                                    <p>
                                       huyitcdct.04@gmail.com <br />
                                       096 193 1401
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__form">
                            <form action="#">
                                <div className="row">
                                <form
                class="bg-white mx-5 bg-body-tertiary"
                onSubmit={handleSubmit}
              >
                <div class="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    class="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    class="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    class="form-control"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    name="content"
                    value={data.content}
                    onChange={handleChange}
                    cols="30"
                    rows="6"
                    class="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="mb-4 d-flex justify-content-end">
                  <button class="btn btn-primary py-3 px-5 site-btn" >
                    Send Message
                  </button>
                  <Toaster
                            position="top-center"
                            reverseOrder={false}
                            gutter={8}
                            containerClassName=""
                            containerStyle={{}}
                            toastOptions={{
                              // Define default options
                              className: "",
                              duration: 5000,
                              style: {
                                background: "#363636",
                                color: "#fff",
                              },
                              success: {
                                duration: 3000,
                                theme: {
                                  primary: "green",
                                  secondary: "black",
                                },
                              },
                            }}
                          />
                </div>
              </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
