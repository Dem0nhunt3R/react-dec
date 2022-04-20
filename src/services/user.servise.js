import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService(`${urls.users}/${id}`),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {userService};