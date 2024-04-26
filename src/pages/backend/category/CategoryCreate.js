import React, { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";

import { ImgUrl } from "../../../basePath/ImgUrl";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Category = () => {
  const [load, setLoad] = useState(1);
  const [category, setCategory] = useState([]);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState({
    name: "",
    parent_id: 0,
    description: "",
    status: 1,
  });

  const handleXoa = async (id) => {
    const result = await CategoryService.delete(id);
    if (result.status) {
      setLoad(load + 1);
      alert(result.message);
    }
  };

  useEffect(() => {
    (async () => {
      const result = await CategoryService.get_list();
      setCategory(result.categorys);
    })();
  }, [load]);
  const handleSubmit = (event) => {
    // event.preventDefault();
    const image = document.querySelector("#image");
    const category = new FormData();
    category.append("name", data.name);
    category.append("parent_id", data.parent_id);
    category.append("sort_order", data.sort_order);
    category.append("description", data.description);
    category.append("status", data.status);
    category.append("image", image.files.length === 0 ? null : image.files[0]);
    console.log(category);
    //Service them
    const a = async () => {
      const result = await CategoryService.store(category);
      console.log(result);
      if (result.status == true) {
        alert(result.message);
        setData({
          name: "",
          parent_id: 0,
          id: "",
          sort_order: 0,
          description: "",
          status: 1,
        });
        image.value = null;
        setLoad(load + 1);
      } else {
        alert(result.message);
      }
    };
    a();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    const image = document.querySelector("#image");
    const categoryData = new FormData();
    categoryData.append("name", data.name);
    categoryData.append("parent_id", data.parent_id);
    categoryData.append("id", data.id );
    categoryData.append("slug", data.slug);
    categoryData.append("description", data.description);
    categoryData.append("status", data.status);
    categoryData.append(
      "image",
      image.files.length === 0 ? null : image.files[0]
    );

    if (editId) {
      const result = await CategoryService.update(editId, categoryData);
      if (result.status) {
        alert(result.message);
        setEditId(null);
        setLoad((prevLoad) => prevLoad + 1);
      } else {
        alert(result.message);
      }
    } else {
      const result = await CategoryService.store(categoryData);
      if (result.status) {
        alert(result.message);
        setData({
          name: "",
          parent_id: 0,
          description: "",
          status: 1,
        });
        image.value = null;
        setLoad((prevLoad) => prevLoad + 1);
      } else {
        alert(result.message);
      }
    }
  };

  const handleEdit = async (id) => {
    setEditId(id);
    const editCategory = category.find((cat) => cat.id === id);
    if (editCategory) {
      setData({
        name: editCategory.name,
        id: editCategory.id,
        description: editCategory.description,
        status: editCategory.status,
      });
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="fs-4">Danh mục sản phẩm</strong>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                <strong>Tên danh mục (*)</strong>
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
              <label htmlFor="inputName" className="form-label">
                <strong>Nhập ID (*)</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputID"
                name="id"
                value={data.id || ""}
                onChange={handleChange}
                placeholder="Nhập id"
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
              <label htmlFor="image" className="form-label">
                <strong>Hình ảnh đại diện (*)</strong>
              </label>
              <input
                type="file"
                name="img"
                onChange={handleChange}
                className="form-control"
                id="image"
              />
            </div>
            <div className="text-end">
              <button onClick={handleSubmit} className="btn btn-sm btn-success">
                <FaSave className="me-1" />
                Lưu[Thêm mới]
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-8 mt-2">
                <marquee className="px-1 " >
                  <h4>Tất cả danh mục sản phẩm !</h4>
                </marquee>
              </div>
              <div className="col-md-4 text-end pb-2">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <table className="table mb-0 table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    STT
                  </th>
                  <th scope="col" style={{ width: "100px", height: "auto" }}>
                    Hình ảnh
                  </th>
                  <th scope="col">Tên thương hiệu</th>
                  <th scope="col">Tên slug</th>
                  <th scope="col">Description</th>
                  <th scope="col">ID</th>
                  <th scope="col">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {category.map((cat, index) => (
                  <tr key={cat.id}>
                    <th scope="row" className="text-center">
                      {index}
                    </th>
                    <td>
                      <img
                        className="img-fluid"
                        src={ImgUrl + "categories/" + cat.image}
                        alt={cat.name}
                      />
                    </td>
                    <td>{cat.name}</td>
                    <td>{cat.slug}</td>
                    <td>{cat.description}</td>
                    <td>{cat.id}</td>
                    <th>
                    {editId === cat.id ? (
                        <button
                          className="btn btn-success mx-1"
                          onClick={() => handleSave(cat.id)}
                        >
                          <FaSave className="m-1 fs-5" />
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning mx-1"
                          onClick={() => handleEdit(cat.id)}
                        >
                          <FaEdit className="m-1 fs-5" />
                        </button>
                      )}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleXoa(cat.id)}
                      >
                        <MdDelete className="m-1 fs-5" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
