import httpAxios from "../httpAxios";

const PostService = {
  get_list: () => {
    return  httpAxios.get("post/index");
  },

  list: async (type,page,limit) => {
    return await  httpAxios.get(`post/list/${type}/${page}/${limit}`);
  },

  get_by_topicid: (topicid) => {
    return  httpAxios.get(`post/listbytopicid/${topicid}`);
  },

  list_post_page: (topicid,page,limit) => {
    return  httpAxios.get(`post/listpostpage/${topicid}/${page}/${limit}`);
  },

  get_list_by_type: (type) => {
    return  httpAxios.get(`post/listbytype/${type}`);
  },

  list_new: async (post,limit) => {
    return await  httpAxios.get(`post/listnew/${post}/${limit}`);
  },

  get_pagedetail: (slug)=>{
    return  httpAxios.get(`post/pagedetail/${slug}`);
  },

  get_postdetail: (slug,limit)=>{
    return  httpAxios.get(`post/postdetail/${slug}/${limit}`);
  },

  store: (formData) => {
    return  httpAxios.post("post/store", formData);
  },

  show: (id) => {
    return  httpAxios.get(`post/show/${id}`);
  },

  update: (id, formData) => {
    return  httpAxios.put(`post/update/${id}`, formData);
  },

  delete: (id) => {
    return  httpAxios.delete(`post/delete/${id}`);
  },
};
export default PostService;