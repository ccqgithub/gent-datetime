import DateView from './date';
import {createElement, createTemplate} from '../lib/dom';
import {getMonthDatesByDate} from '../lib/date';

class Picker {

  constructor() {

  }

  create() {
    this.dateView = new DateView();
    this.$el = createElement('div', 'dtp__picker');
    this.$el.append(this.dateView.$el);
  }
}
