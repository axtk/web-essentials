# button

## Tags

- `<button>`
- `<(span|div|a|label|*) role=button>`
- `<(span|div|a|label|*) data-shape=button>`
- \*`<input type=file>` (see below)
- `<input type=button>`
- `<input type=submit>`
- `<input type=reset>`

## Styled attributes

- `... aria-busy=true>`
- `... data-shape=boxless>`
- `... data-shape=emphasized>`

---

## Example

```
<button>
    <svg data-shape="rtl-flip icon"
        width="20" height="20" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" stroke="currentColor" fill="none"/>
        <circle cx="14" cy="10" r="5" fill="currentColor"/>
    </svg>
    Click here
</button>
```

In a right-to-left (RTL) language environment, apart from the text and the icon following the RTL order, the images of the icons are often mirrored as well. Adding the `data-shape=rtl-flip` attribute to the icon will result in a mirrored image in an RTL environment (inside a `[dir=rtl]` container). _NB_: not any image should be mirrored [[1](https://medium.com/@khalidaljaaidi/rtl-a-story-of-motion-and-direction-part-1-1f411cede765), [2](https://material.io/design/usability/bidirectionality.html)].

---

## Special case

- `<input type=file>`

```
<span data-shape=button>
    <input type=file> Pick a file
</span>
```

```
<span data-shape=button>
    <input type=file id=file_picker>
    <label for=file_picker>Pick a file</label>
</span>
```

---

- [Demo](https://axtk.me/x/web_essentials#button)
