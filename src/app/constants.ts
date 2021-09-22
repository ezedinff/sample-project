import {environment} from "../environments/environment";

export const apiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh'
  },
  users: {
    users: "/users",
    addFriend: "/users/add-friend"
  },
  post: "/posts"
};


// function
export function getUrl(path: string) {
  return `${environment.base_url}${path}`;
}
