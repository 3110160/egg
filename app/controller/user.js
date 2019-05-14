'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find(1);
    ctx.body = user;
  }
}

module.exports = UserController;
