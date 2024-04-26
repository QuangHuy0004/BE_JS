import httpAxios from "../httpAxios";

const BannerService = {
  get_list: () => {
    return  httpAxios.get( "banner/index");
  },

  store: (formData) => {
    return  httpAxios.post("banner/store", formData);
  },

  show: (id) => {
    return  httpAxios.get(`banner/show/${id}`);
  },

  update: (id, formData) => {
    return  httpAxios.put(`banner/update/${id}`, formData);
  },

  delete: (id) => {
    return  httpAxios.delete(`banner/delete/${id}`);
  },

  slideshow: async (position) => {
    return await  httpAxios.get( `banner/list/${position}`);
  },

};
export default BannerService;