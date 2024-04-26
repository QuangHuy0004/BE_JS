import httpAxios from "../httpAxios";

const UserServices = {
  get_list: () => {
    return   httpAxios.get( "user/index");
  },
  getByRoles: (roles) => {
    return httpAxios.get(`user/index/${roles}`);
  },
  store: (formData) => {
    return   httpAxios.post("user/store", formData);
  },

  show: (id) => {
    return   httpAxios.get(`user/show/${id}`);
  },

  update: (id, formData) => {
    return   httpAxios.put(`user/update/${id}`, formData);
  },

  delete: (id) => {
    return   httpAxios.delete(`user/delete/${id}`);
  },
};
export default UserServices;