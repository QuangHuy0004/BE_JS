import httpAxios from "../httpAxios";

const ContactService = {
  get_list: () => {
    return httpAxios.get( "contact/index");
  },

  store: (formData) => {
    return httpAxios.post("contact/store", formData);
  },

  show: (id) => {
    return httpAxios.get(`contact/show/${id}`);
  },

  delete: (id) => {
    return httpAxios.delete(`contact/delete/${id}`);
  },
};
export default ContactService;