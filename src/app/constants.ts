import {environment} from "../environments/environment";

export const apiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh'
  },
  post: "/posts"
};


// function
export function getUrl(path: string) {
  return `${environment.base_url}${path}`;
}
