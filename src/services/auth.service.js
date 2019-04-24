import ApiService from './api.service'

export default class AuthService {
  constructor() {
    this.api = new ApiService('tokens')
  }

  /**
   * Get session token
   * @param {Object} data 
   */
  login(data) {
    return this.api.post('session', data)
  }

  resetPassword(data) {
    return this.api.post('password-reset', data)
  }

  signup() {
    
  }
}