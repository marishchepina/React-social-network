import axios from 'axios' //DAL (Data access layer)

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
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  },

  getProfile(userId = 18953) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data
    })
  },

  follow(id) {
    return instance.post(`follow/${id}`, {})
  },
}
