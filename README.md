# Carbon React Tooltips Playwright debugging

Trying to reproduce why Playwright's `.click()` doesn't open up a tooltip starting in `@carbon/react` 1.53.0.

The user behavior works as expected: when clicking a term with `openOnHover={false}`, the definition comes up. It also works in the developer console to use `.click()` on the `<button>` for the term. The issue is when using Playwright's `.click()`.

## Workarounds to get a passing test

### Downgrade to 1.52.0

1. Downgrade version in `package.json`
2. `npm install`
3. `npm test`

(Remember to run `npm install` again when reverting this change!)

### Click button twice

1. Add a second call to `await term.click()` before the `expect()`
2. `npm test`

### Use `page.evaluate()`

This simulates calling `.click()` directly in the developer console.

1. Replace `await term.click()` with this code:

```javascript
  await page.evaluate(() => {
    const button = document.querySelector("button.cds--definition-term");
    button.click();
  });
```

2. `npm test`