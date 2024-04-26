import httpAxios from "../httpAxios";

const TopicService = {
  get_list: () => {
    return   httpAxios.get( "topic/index");
  },

  detail: (slug) => {
    return   httpAxios.get(`topic/topicdetail/${slug}`);
  },

  store: (formData) => {
    return   httpAxios.post("topic/store", formData);
  },

  show: (id) => {
    return   httpAxios.get(`topic/show/${id}`);
  },

  update: (id, formData) => {
    return   httpAxios.put(`topic/update/${id}`, formData);
  },

  delete: (id) => {
    return   httpAxios.delete(`topic/delete/${id}`);
  },
};
export default TopicService;