# menubar

## Tags

- `<(ul|div|*) role=menubar>`

---

## Examples

```
<ul role=menubar>
    <li><a href=#tab0 role=menuitem>Orange</a></li>
    <li><a href=#tab1 role=menuitem aria-selected=true>Plum</a></li>
    <li><a href=#tab2 role=menuitem>Lemon</a></li>
    <li><a href=#tab3 role=menuitem disabled>Apple</a></li>
    <li><span role=menuitem tabindex=0>Coconut</span></li>
</ul>
```

```
<div role=menubar>
    <a href=#tab0 role=menuitem>Orange</a>
    <span role=separator>&bull;</span>
    <a href=#tab1 role=menuitem aria-selected=true>Plum</a>
    <span role=separator>&bull;</span>
    <a href=#tab2 role=menuitem>Lemon</a>
    <span role=separator>&bull;</span>
    <a href=#tab3 role=menuitem disabled>Apple</a>
    <span role=separator>&bull;</span>
    <span role=menuitem tabindex=0>Coconut</span>
</div>
```

---

- [Demo](https://axtk.me/x/web_essentials#menubar)
