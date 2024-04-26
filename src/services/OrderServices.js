import httpAxios from "../httpAxios";
import router from "../router";

const OrderService = {
  get_list: () => {
    return httpAxios.get( "order/index");
  },

  getLatest:() => {
    return httpAxios.get( "order/showlatest");
  },

  store: (formData) => {
    return httpAxios.post("order/store", formData);
  },

  show: (id) => {
    return httpAxios.get(`order/show/${id}`);
  },

  update: (id, formData) => {
    return httpAxios.put(`order/update/${id}`, formData);
  },

  delete: (id) => {
    return httpAxios.delete(`order/delete/${id}`);
  },
};
export default OrderService;