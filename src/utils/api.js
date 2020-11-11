import axios from "axios";

export const getStory = (idx) => axios.get(`/story/${idx}`);

export const getImgs = (idx) => axios.get(`/story/${idx}/image`);
