# Web essentials

_A way to customizable UIs with minimal markup_

[Showcase](https://axtk.me/x/web_essentials)

## Guiding points

The goal is to make customizable and accessible UI components available to a developer with [least effort](https://en.wikipedia.org/wiki/Principle_of_least_effort).

Approaches introducing custom APIs for web components disregard the developer's familiarity with HTML features instead of taking instant advantage of it. Custom APIs are also more likely to end up with inconsistencies and version compatibility issues than a conventional standard developed by a dedicated working group (such as WHATWG). Abandoning the standard would only make sense if the standard proved hard to use, which is apparently not the case with HTML.

A way worth starting with is&mdash;

**following the conventional API**<br>
the web components API should conform to HTML without introducing another API serving the same purpose:<br>
&mdash; web components should be represented by the semantically closest match in HTML;<br>
&mdash; custom implementations should act as polyfills to HTML;<br>
&mdash; custom properties unrepresented in the HTML spec should have semantically valid fallbacks.

**avoiding trivial markup wrappers or additional class names**

**maintaining components' dimensions without introducing size presets**<br>
components should scale consistently with the surrounding content out of the box;<br>
`font-size` of the environment and relative dimensions in `em` units should be sufficient.

**introducing JS only when necessary**<br>
no JS has been required for the components in this package yet.

In essence:

```diff
- <Button caption="Click me"/>
- <span class="btn btn-size-normal"><span class="btn-caption">Click me</span></span>
+ <button>Click me</button>
```

---

Concerns settled with HTML and CSS out of the box:

**accessible focus management and keyboard navigation**

**interaction with compound components as single units**<br>
`<fieldset>` container receives `change` events from nested elements and disables them when it is itself marked as `disabled`.

**sharing styling features across components**<br>
with CSS variables, consistent visual changes can be introduced throughout all components from a single entry point (see [`components/index.css`](components/index.css)).

---

## Optional utilities

### Updating SVG data URLs

Run `node dataurls.js --currentColor` to re-inject updated `assets` SVGs into `components/index.css` as data URLs and replace occurrences of `currentColor` with the text color value.

### IE11, or Compatibility mode for CSS variables

Run `node compat.js --no-vars --tweak-hover-media` to produce a compatibility version of the styles without CSS variables and with the tweaked `hover` media query.

Run `node compat.js --rm` to remove the generated compat styles.

### Bundling

Run `node bundle.js` to create a bundle containing all components' styles combined. 

Run `node bundle.js <component1> <component2> ...` to create a bundle of the specified components.

Add an optional `-d <path>` argument to this command to specify a destination file path.
