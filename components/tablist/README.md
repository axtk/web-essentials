# tablist

## Tags

- `<(ul|div|*) role=tablist>`

---

## Examples

```
<ul role=tablist>
    <li><a href=#tab0 role=tab>Orange</a></li>
    <li><a href=#tab1 role=tab aria-selected=true>Plum</a></li>
    <li><a href=#tab2 role=tab>Lemon</a></li>
    <li><a href=#tab3 role=tab disabled>Apple</a></li>
    <li><span role=tab tabindex=0>Coconut</span></li>
</ul>
<div role=tabpanel>...</div>
```

```
<div role=tablist>
    <a href=#tab0 role=tab>Orange</a>
    <span role=separator>&bull;</span>
    <a href=#tab1 role=tab aria-selected=true>Plum</a>
    <span role=separator>&bull;</span>
    <a href=#tab2 role=tab>Lemon</a>
    <span role=separator>&bull;</span>
    <a href=#tab3 role=tab disabled>Apple</a>
    <span role=separator>&bull;</span>
    <span role=tab tabindex=0>Coconut</span>
</div>
<div role=tabpanel>...</div>
```

---

- [Demo](https://axtk.me/x/web_essentials#tablist)
