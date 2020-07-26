# shared-document-observer

A `Set` instance that invokes any `{subtree: true, childList: true}` on the current document.

```js
import sdo from 'shared-document-observer';

sdo.add((records, observer) => {
  // ... do anything you need to do with records
});
```
