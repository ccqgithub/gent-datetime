import {createElement, createTemplate} from '../lib/dom';
import {getMonthDatesByDate} from '../lib/date';

class DateView {
  constructor() {
    this.date = new Date();
  }

  create() {
    var dates, datesHtml;

    this.$el = createElement('div', 'dtp__date');

    this.$month = createTemplate(`
      <div class="dtp__month">
        <a className="dtp__prev-year">&lt;&lt;</a>
        <a className="dtp__prev-month">&lt;</a>
        <span className="dtp__cur-month">二月</span>
        <span className="dtp__cur-year">2017</span>
        <a className="dtp__next-year">&gt;&gt;</a>
        <a className="dtp__next-month">&gt;</a>
      </div>
    `);

    this.$weekTitle = createTemplate(`
      <div class="dtp__wt">
        <span>日</span>
        <span>一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
      </div>
    `);

    dates = getMonthDatesByDate(this.date);
    datesHtml = dates.map(function(item) {
      return `<span>${item}</span>`;
    }).join('');

    this.$dates = createTemplate(`
      <div className="dtp__dates">{$datesHtml}</div>
    `);

    this.$el.append(this.$month);
    this.$el.append(this.$weekTitle);
    this.$el.append(this.$dates);
  }
}
