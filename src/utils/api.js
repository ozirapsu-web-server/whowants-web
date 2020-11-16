import axios from "axios";

export const getStory = (idx) => axios.get(`/story/${idx}`);

//  api 모음

export const getImgs = (idx) => axios.get(`/story/${idx}/image`);

export const getAllComments = (idx, filter) =>
  axios.get(`/support/?story_idx=
${idx}&filter=${filter}`);

export const addComment = (idx, comment) => {
  axios.post(`/support/?story_idx=${idx}`, comment);
};
