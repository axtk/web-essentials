# Optional utilities

## Style bundling

Run `node bundle.js` to create a bundle containing all components' styles combined. 

Run `node bundle.js <component1> <component2> ...` to create a bundle of the specified components.

Add an optional `-d <path>` argument to this command to specify a destination file path.

## Updating component icons

Run `node dataurls.js --currentColor` to re-inject updated `assets` SVGs into `components/index.css` as data URLs and replace occurrences of `currentColor` with the text color value.

## IE11, or Legacy compatibility mode for CSS variables

Run `node compat.js --no-vars --tweak-hover-media` to produce a compatibility version of the styles without CSS variables and with the tweaked `hover` media query.

Run `node compat.js --rm` to remove the generated compat styles.
