'use strict';
const set = new Set;

const mo = new MutationObserver(records => {
  set.forEach(invoke, records);
});

mo.observe(
  document,
  {subtree: true, childList: true}
);

module.exports = set;

function invoke(callback) {
  callback(this, mo);
}
