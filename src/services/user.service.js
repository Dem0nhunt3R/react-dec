import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getUsers: () => axiosService.get(urls.users),
    getUserById: (userId) => axiosService.get(urls.users + '/' + userId),
    getUserPosts: (userId) => axiosService.get(`${urls.users}/${userId}/posts`)
}

export {userService};