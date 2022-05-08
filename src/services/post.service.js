import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getPosts: () => axiosService.get(urls.posts),
    getPostById: (postId) => axiosService.get(`${urls.posts}/${postId}`),
    getPostComments: (postId) => axiosService.get(`${urls.posts}/${postId}/comments`),

};

export {postService};