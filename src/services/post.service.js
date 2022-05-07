import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(urls.posts + '/' + id)
};

export {postService};