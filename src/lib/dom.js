// 创建一个element
export function createElement(tag, classes) {
  var element = document.createElement(tag);
  element.className = classes;
}

// 把字符串转为dom
export function createTemplate(str) {
  var element = document.createElement(tag);
  element.innerHTML = str.trim();
  return element.childNodes[0];
}
