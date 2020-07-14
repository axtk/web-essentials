# select

A semantically valid alternative to the barely customizable native single-choice `<select>` is a set of radio buttons. With proper CSS, it can also be turned into a UI component resembling the native `<select>`.

## Tags

- `<fieldset data-shape=select>`

## Styled attributes

- `... data-shape=boxless>`
- `... data-shape=underline>`

---

## Example

```
<fieldset data-shape=select>
    <!-- current value -->
    <input type=radio name=fruit value=0 id=fruit_0>
    <label for=fruit_0>Lime</label>
    <input type=radio name=fruit value=1 id=fruit_1>
    <label for=fruit_1>Plum</label>
    <input type=radio name=fruit value=2 id=fruit_2>
    <label for=fruit_2>Coconut</label>

    <!-- option list -->
    <span role=listbox hidden>
        <label role=option for=fruit_0>Lime</label>
        <label role=option for=fruit_1>Plum</label>
        <label role=option for=fruit_2>Coconut</label>
    </span>
</fieldset>
```

---

- _[listbox](../listbox/README.md)_
- [Demo](https://axtk.me/x/web_essentials#select)
