import axios from "axios";

export const getStory = (idx) => axios.get(`/story/${idx}`);

export const getImgs = (idx) => axios.get(`/story/${idx}/image`);

export const getAllComments = (idx, filter) =>
  axios.get(`/support/?story_idx=
${idx}&filter=${filter}`);
