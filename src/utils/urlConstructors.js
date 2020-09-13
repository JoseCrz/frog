import { baseURL, clientId } from '../config'
export const createUserUrl = ({ username }) => `${baseURL}/users/${username}/?client_id=${clientId}`
export const addClientIdToUrl = url => `${url}/?client_id=${clientId}`
