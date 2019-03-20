// 验证类 ES6实现
class Validate {
  constructor (rules = [], message = [], field = []) {
    // @rules: 数据的验证规则
    // @message: 验证提示信息
    // @field: 验证字段描述信息
    
  }
  
  /**
   * 数据自动验证
   * @param {Array} data 数据
   * @param {Array} rules 验证规则
   * @param {String} scene 验证场景
   * @return {Boolean}
   */
  check (data, rules = [], scene = '') {
    this.error = [];
    
    if (rules.length === 0) {
      rules = this.rule;
    }
    
    this.getScene(scene);
    
    // ...
  }
}
