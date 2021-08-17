import axios from 'axios' //DAL (Data access layer)
//https://social-network.samuraijs.com/docs#auth
//import sta

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '310b70b3-cb33-4c51-85e6-7df60ee131fc' },
})

// /param1/param2 -uri params (part of url or params) strict sequense
// /param1?param2 "?param2"  (GET request) do not characterise end-point it's allways params not strict sequence

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(({ data }) => data)
  },

  getProfile(userId = 18953) {
    console.warn('Obsolete method, please, use profileAPI object.')
    return profileAPI.getProfile(userId)
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

export const profileAPI = {
  getProfile(userId = 18953) {
    return instance.get(`profile/${userId}`).then(({ data }) => data)
  },
  getStatus(userId = 18953) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
}

//get, delete - works only with url
//post put can send payload (object)
