import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Data from '../../../public/database.json';

const TopicCreate = () => {
  const topics = Data.topics;
  const [data, setData] = useState({
    name: "",
    description: "",
    status: 1,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      name: "",
      description: "",
      status: 1,
    });
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="fs-4">Chủ đề bài viết</strong>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  <strong>Tên chủ đề (*)</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={data.name || ""}
                  onChange={handleChange}
                  placeholder="Nhập tên danh mục"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputDes" className="form-label">
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  rows={4}
                  id="inputDes"
                  name="description"
                  value={data.description || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập mô tả"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Trạng thái</strong>
                </label>
                <select
                  className="form-select"
                  name="status"
                  value={data.status}
                  onChange={handleChange}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="text-end">
                <div>

                <button type="submit" className="btn btn-sm btn-success">
                  <FaSave className="me-1" />
                  Lưu[Thêm]
                </button> 
                </div>
              </div>
              <Link to="/admin/topic" ><button type="submit" className="btn btn-sm btn-success" >
                  <FaSave className="me-1" />
                  Về Trang Trước
                </button></Link>
              
            </form>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-8 mt-2">
                <span className="px-1 " style={{ borderRight: "1px solid" }}>
                  Tất cả(123)
                </span>
                <span className="px-1 " style={{ borderRight: "1px solid" }}>
                  Xuất bản(12)
                </span>
                <span className="px-1 ">Rác(1)</span>
              </div>
              <div className="col-md-4 text-end pb-2">
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
              </div>
            </div>
            <table class="table mb-0 table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">Tên chủ đề</th>
                  <th scope="col">Tên slug</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>
              <tbody>
                {topics.length > 0 &&
                  topics.map((topic, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">
                          <input type="checkbox" />
                        </th>
                        <td>
                          {topic.name}
                          <div className="mt-2">
                            <Link
                              className="btn btn-sm btn-warning me-2 mb-1"
                              to={"/admin/topic/edit/" + topic.id}
                            >
                              <FaEdit className="m-1 fs-5" />
                              Edit
                            </Link>
                            <button className="btn btn-sm btn-danger mb-1">
                              <MdDelete className="m-1 fs-5" />
                              Delete
                            </button>
                          </div>
                        </td>
                        <td>{topic.slug}</td>
                        <td>{topic.id}</td>
                      </tr>
                    );
                  })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCreate;
