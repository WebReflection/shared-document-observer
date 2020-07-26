const set = new Set;

const observer = new MutationObserver(records => {
  set.forEach(invoke, records);
});

observer.observe(
  document,
  {subtree: true, childList: true}
);

set.observer = observer;

export default set;

function invoke(callback) {
  callback(this, observer);
}
