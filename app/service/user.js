/**
 * time:2019/5/14
 * 作者:xzc
 * 功能:
 */
const Service = require('egg').Service;

class UserService extends Service {
  async find(id) {
    const user = await this.app.mysql.get('user', { id });
    return user;
  }
}

module.exports = UserService;