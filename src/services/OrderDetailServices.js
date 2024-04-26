import httpAxios from "../httpAxios";

const OrderDetailService = {
  get_list: () => {
    return httpAxios.get( "orderdetail/index");
  },

  store: (formData) => {
    return httpAxios.post("orderdetail/store", formData);
  },

  show: (id) => {
    return httpAxios.get(`orderdetail/show/${id}`);
  },

  delete: (id) => {
    return httpAxios.delete(`orderdetail/delete/${id}`);
  },
};
export default OrderDetailService;