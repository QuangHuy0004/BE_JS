import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { LuFileEdit } from "react-icons/lu";
import { PiTrashSimpleBold } from "react-icons/pi";
import { TbPlus } from 'react-icons/tb';
import { BiShow } from "react-icons/bi";
import MenuService from './../../../services/MenuServices';
const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm("Bạn có chắc chắn muốn xóa ?");
      if (confirmed === true) {
        await MenuService.delete(id);
        setMenu(menu.filter((b) => b.id !== id));
        toast.success('Xóa thành công!'); // Hiển thị thông báo thành công
      }
    } catch (error) {
      console.log(error);
      toast.error('Đã xảy ra lỗi khi xóa.'); // Hiển thị thông báo lỗi
    }
  };
  useEffect(() => {
    (async () => {
      const result = await MenuService.get_list();
      setMenu(result.menu); 
    })();
  }, []);
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả menu</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/menu/create">
              <TbPlus className="me-1" />
              Thêm menu
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <table class="table mb-0 table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Tên menu</th>
              <th scope="col">Link</th>
              <th scope="col">Chức năng</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            {menu.length > 0 &&
              menu.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">
                      <input type="checkbox" />
                    </th>
                    <td>{menu.name}</td>
                    <td>{menu.link}</td>
                    <td>
                    <Link
                        className="btn btn-sm btn-success me-2 mb-1"
                        to={"/admin/menu/show/" + menu.id}
                      >
                        <BiShow  className="m-1 fs-5" />
                      </Link>
                      <Link
                        className="btn btn-sm btn-warning me-2 mb-1"
                        to={"/admin/menu/edit/" + menu.id}
                      >
                        <LuFileEdit  className="m-1 fs-5" />
                      </Link>
                      <button 
                      onClick={() => {handleDelete(menu.id)}} 
                      className="btn btn-sm btn-danger mb-1">
                        <PiTrashSimpleBold  className="m-1 fs-5" />
                      </button>
                    </td>
                    <td>{menu.id}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MenuList