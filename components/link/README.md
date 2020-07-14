# link

## Tags

- `<a>`
- `<(span|div|button|label|*) role=link>`
- `<(span|div|button|label|*) data-shape=link>`
- \*`<input type=file>` (see below)

---

## Special case

- `<input type=file>`

```
<span data-shape=link>
    <input type=file> Pick a file
</span>
```

```
<span data-shape=link>
    <input type=file id=file_picker>
    <label for=file_picker>Pick a file</label>
</span>
```

---

- [Demo](https://axtk.me/x/web_essentials#link)
