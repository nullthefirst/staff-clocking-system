function createId(text) {
  const textArray = text.split(' ');

  const staffId = [];

  for (let nameItem of textArray) {
    staffId.push(nameItem.toLowerCase());
    staffId.push('-');
  }

  staffId.pop();

  staffId.push('#company');

  return staffId.join('');
}

module.exports = createId;
