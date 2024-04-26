import React, { useEffect, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import BrandServices from "./../../../services/BrandServices";
import { MdDelete } from "react-icons/md";
import { ImgUrl } from "../../../basePath/ImgUrl";

const BrandCreate = () => {
  const [load, setLoad] = useState(1);
  const [brands, setBrand] = useState([]);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
    status: 1,
  });

  useEffect(() => {
    (async () => {
      const result = await BrandServices.get_list();
      setBrand(result.brands);
    })();
  }, [load]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = document.querySelector("#image");
    const brandData = new FormData();
    brandData.append("id", data.id);
    brandData.append("name", data.name);
    brandData.append("description", data.description);
    brandData.append("status", data.status);
    brandData.append("image", image.files.length === 0 ? null : image.files[0]);

    try {
      const result = await BrandServices.store(brandData);
      if (result.status) {
        alert(result.message);
        setData({
          id: "",
          name: "",
          description: "",
          status: 1,
        });
        image.value = null;
        setLoad((prevLoad) => prevLoad + 1);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    const editBrand = brands.find((brand) => brand.id === id);
    if (editBrand) {
      setData({
        id: editBrand.id,
        name: editBrand.name,
        description: editBrand.description,
        status: editBrand.status,
      });
    }
  };

  const handleSave = async () => {
    const image = document.querySelector("#image");
    const brandData = new FormData();
    brandData.append("id", data.id);
    brandData.append("name", data.name);
    brandData.append("description", data.description);
    brandData.append("status", data.status);
    brandData.append(
      "image",
      image.files.length === 0 ? null : image.files[0]
    );

    try {
      const result = await BrandServices.update(editId, brandData);
      if (result.status) {
        alert(result.message);
        setEditId(null);
        setLoad((prevLoad) => prevLoad + 1);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleXoa = async (id) => {
    try {
      const result = await BrandServices.delete(id);
      if (result.status) {
        alert(result.message);
        setLoad((prevLoad) => prevLoad + 1);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="fs-4">Thương hiệu</strong>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                <strong>Tên thương hiệu (*)</strong>
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
                <marquee className="px-1 ">
                  <h4>Tất cả thương hiệu !</h4>
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
                {brands.map((cat, index) => (
                  <tr key={cat.id}>
                    <th scope="row" className="text-center">
                      {index}
                    </th>
                    <td>
                      <img
                        className="img-fluid"
                        src={ImgUrl + "brand/" + cat.image}
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

export default BrandCreate;
