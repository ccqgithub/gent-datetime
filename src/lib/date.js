// 获取每月的天数
export function getMonthDays(year, month) {
  var dateNums = [31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 30, 31];
  if (isLeapYear(year)) dateNums[1] = 29;
  return new Array(dateNums[month])
    .fill(1)
    .map(function(item, index) {
      return index;
    });
}

// 获取每月的天数
export function getMonthDaysByDate(date) {
  return getMonthDates(date.getFullYear(), date.getMonth());
}

// 是否是闰年：四年一闰，百年不闰，四百年再闰
export function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
