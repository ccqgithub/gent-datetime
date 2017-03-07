export default function renderTpl(options={}) {
  var options = Object.assign({
    year: '2017',
    month: '12',
    days: [
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7]
    ],
  });

  // top html
  var topHtml = `
    <div class="dtp__date-top">
      <a className="dtp__date-py">&lt;&lt;</a>
      <a className="dtp__date-pm">&lt;</a>
      <span className="dtp__date-y">${options.year}</span>
      <span className="dtp__date-m">${options.month}</span>
      <a className="dtp__date-nm">&gt;&gt;</a>
      <a className="dtp__date-ny">&gt;</a>
    </div>
  `;

  // weeks html
  var weeksHtml = `
    <tr>
      <th>日</th>
      <th>一</th>
      <th>二</th>
      <th>三</th>
      <th>四</th>
      <th>五</th>
      <th>六</th>
    </tr>
  `;

  // days html
  var daysHtml = options.days.map(function(arr) {
    var itemsHtml = arr.map(function(item) {
      return `<td>${item}</td>`;
    }).join('');
    return `<tr>${itemsHtml}</tr>`
  }).join('');

  return `
    <div class="dtp__date">
      ${topHtml}
      <table class="dtp__date-table">
        <thead>
          ${weeksHtml}
        </thead>
        <tbody>
          ${daysHtml}
        </tbody>
      </table>
    </div>
  `;
}
