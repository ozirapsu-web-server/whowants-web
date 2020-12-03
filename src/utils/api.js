import axios from "axios";
//  api 모음

export const getRecentStory = () => axios.get(`/story/recent`);

export const getHotStory=()=>axios.get(`/story/hot`);

export const getStory = (idx) => axios.get(`/story/info/${idx}`);

export const getImgs = (idx) => axios.get(`/story/info/${idx}/image`);

export const getAllComments = (idx, filter) =>
  axios.get(`/support/?story_idx=
${idx}&filter=${filter}`);

export const addComment = (idx, comment) => {
  axios.post(`/support/?story_idx=${idx}`, comment);
};
