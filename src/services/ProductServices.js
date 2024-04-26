import httpAxios from "../httpAxios";

const ProductService = {
  get_list: async () => {
    return await  httpAxios.get("product/index");
  },

  get_list_brandAll: async (brandid) => {
    return await  httpAxios.get(`product/list_brand/${brandid}`);
  },

  get_list_parentidAll: async (parentid) => {
    return await  httpAxios.get(`product/list_parentid/${parentid}`);
  },

  get_list_categoryAll: async (categoryid) => {
    return await  httpAxios.get(`product/list_category/${categoryid}`);
  },

  list_product_brand: async (brandid,page,limit) => {
    return await  httpAxios.get(`product/list_product_brand/${brandid}/${page}/${limit}`);
  },

  list_product_category: async (categoryid,page,limit) => {
    return await  httpAxios.get(`product/list_product_category/${categoryid}/${page}/${limit}`);
  },

  list_product_search: async (keyword) => {
    return await  httpAxios.get(`product/list_product_search/${keyword}`);
  },

  list_product_search_by_page: async (keyword,page,limit) => {
    return await  httpAxios.get(`product/list_product_search_by_page/${keyword}/${page}/${limit}`);
  },

  store: (formData) => {
    return  httpAxios.post("product/store", formData);
  },

  show: (id) => {
    return  httpAxios.get(`product/show/${id}`);
  },

  update: (id, formData) => {
    return  httpAxios.put(`product/update/${id}`, formData);
  },

  delete: (id) => {
    return  httpAxios.delete(`product/delete/${id}`);
  },

  list_new: async (limit) => {
    return await  httpAxios.get(`product/listnew/${limit}`);
  },

  list_sale: async (limit) => {
    return await  httpAxios.get(`product/listsale/${limit}`);
  },

  list: async (page,limit) => {
    return await  httpAxios.get(`product/list/${page}/${limit}`);
  },
  detail: async (slug, limit) => {
    return await  httpAxios.get(`product/productdetail/${slug}/${limit}`);
  },
};
export default ProductService;