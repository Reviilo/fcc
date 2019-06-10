function withoutSpaces (str) {
  return str.replace(/<[^>]*>/, '').split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

function changeArr (arr) {
  return arr.map((i) => withoutSpaces(i));
}
