import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPlus } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import UserServices from "../../../services/UserServices";
import { ImgUrl } from "../../../basePath/ImgUrl";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    fetchUserList();
  }, [selectedRole]);

  const fetchUserList = async () => {
    try {
      let result;
      // Chỉ gọi hàm getByRoles khi selectedRole có giá trị
      if (selectedRole) {
        result = await UserServices.getByRoles(selectedRole);
      } else {
        result = await UserServices.get_list();
      }
      setUser(result.user);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Bạn có chắc chắn muốn xóa thành viên này?"
      );
      if (confirmed) {
        await UserServices.delete(id);
        setUser(user.filter((b) => b.id !== id));
        toast.success("Xóa thành công!"); // Hiển thị thông báo thành công
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Đã xảy ra lỗi khi xóa."); // Hiển thị thông báo lỗi
    }
  };

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
  };

  // Lọc ra các người dùng theo vai trò được chọn
  const filteredUsers = user.filter((user) => user.roles === selectedRole);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả thành viên</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/user/create">
              <TbPlus className="me-1" />
              Thêm thành viên
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <label htmlFor="role">Chọn vai trò:</label>
            <select
              id="role"
              className="form-select"
              onChange={handleRoleChange}
              value={selectedRole}
            >
              <option value="" disabled selected hidden>
                Hãy chọn vai trò
              </option>
              <option value="0">Admin</option>
              <option value="1">User</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table mb-0 table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Hình ảnh
              </th>
              <th scope="col">Tên thành viên</th>
              <th scope="col">Email</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Chức năng</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((userData, index) => (
                <tr key={index}>
                  <th scope="row">
                    <input type="checkbox" />
                  </th>
                  <td>
                    <img
                      className="img-fluid"
                      src={`${ImgUrl}user/${userData.image}`}
                      alt={userData.name}
                    />
                  </td>
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>{userData.gender ? "Nam" : "Nữ"}</td>
                  <td>{userData.address}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-success me-2 mb-1"
                      to={`/admin/user/show/${userData.id}`}
                    >
                      <IoEye className="m-1 fs-5" />
                      Show
                    </Link>
                    <Link
                      className="btn btn-sm btn-warning me-2 mb-1"
                      to={`/admin/user/edit/${userData.id}`}
                    >
                      <FaEdit className="m-1 fs-5" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(userData.id)}
                      className="btn btn-sm btn-danger mb-1"
                    >
                      <MdDelete className="m-1 fs-5" />
                      Delete
                    </button>
                  </td>
                  <td>{userData.id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
