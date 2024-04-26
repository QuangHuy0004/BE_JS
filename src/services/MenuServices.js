import httpAxios from "../httpAxios";

const MenuService = {
  get_list: () => {
    return  httpAxios.get("menu/index");
  },

  store: (formData) => {
    return  httpAxios.post("menu/store", formData);
  },

  show: (id) => {
    return  httpAxios.get(`menu/show/${id}`);
  },

  update: (id, formData) => {
    return  httpAxios.put(`menu/update/${id}`, formData);
  },

  delete: (id) => {
    return  httpAxios.delete(`menu/delete/${id}`);
  },

  mainmenu: async (parentid, position, level) => {
    return await  httpAxios.get(`/menu/list/${parentid}/${position}/${level}`);
  },
};
export default MenuService;