# listbox

## Tags

- `<fieldset role=listbox>`

## Styled attributes

- `... data-shape=boxless>`
- `... data-shape=checklist>`

---

## Example

```
<fieldset role=listbox data-shape=checklist>
    <span>Subtitle 1</span>

    <input type=radio name=lb value=0 id=lb_0>
    <label role=option for=lb_0>Lime</label>

    <input type=radio name=lb value=1 id=lb_1 checked>
    <label role=option for=lb_1>Plum</label>

    <span role=separator></span>
    <span>Subtitle 2</span>

    <input type=radio name=lb value=2 id=lb_2 disabled>
    <label role=option for=lb_2>Apple</label>
</fieldset>
```

Options can be grouped by nesting in a `<span role=group>`.

---

- [Demo](https://axtk.me/x/web_essentials#listbox)
