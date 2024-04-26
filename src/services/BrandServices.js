import httpAxios from "../httpAxios";

const BrandServices = {
  get_list: () => {
    return httpAxios.get("/brand/index");
  },
  store: (formData) => {
    return httpAxios.post("/brand/store", formData);
  },
  delete: (id) => {
    return httpAxios.delete("/brand/delete/" + id);
  },
  update: (id, formData) => {
    return httpAxios.put(`/brand/edit/${id}`, formData);
  },
};
export default BrandServices;
