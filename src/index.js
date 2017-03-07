import renderTpl from './tpl/default';
import {htmlToElement} from './lib/funs'

class Picker {
  constructor(opts) {
    this.settings = Object.assign({
      renderTpl: renderTpl
    }, opts);
  }

  install(element) {
    var $html = this.settings.renderTpl();
    console.log(htmlToElement($html))
    element.appendChild(htmlToElement($html));
  }
}

module.exports = Picker;
