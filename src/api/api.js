import axios from 'axios' //DAL (Data access layer)
//https://social-network.samuraijs.com/docs#auth

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '310b70b3-cb33-4c51-85e6-7df60ee131fc' },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(({ data }) => data)
  },

  getProfile(userId = 18953) {
    return instance.get(`profile/${userId}`).then(({ data }) => data)
  },

  follow(id) {
    return instance.post(`follow/${id}`, {})
  },

  unfollow(id) {
    return instance.delete(`unfollow/${id}`)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
}
