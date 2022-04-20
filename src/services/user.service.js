import {urls} from "../constants";
import {axiosService} from "./axios.service";

const userService = {
    getUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPosts:(id)=> axiosService.get(`${urls.users}/${id}/posts`)
};

export {userService};