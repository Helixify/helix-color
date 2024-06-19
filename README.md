<img src='./public/doc/cover.png' title='HelixColor' alt='Logo HelixColor' />
<div align="center">
  <h3>A color library for dev</h3>
  	<span>
		<a href="#installation">Get started</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#static-olors">Static Colors</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#dynamic-colors-with-prefers-color-scheme">Dynamic Colors</a>
	</span>
</div>

<br/>
<br/>

HelixColor is a CSS library that provides a color palette
based on the color wheel, making it easy to create visually
appealing and harmonious interfaces. The library includes
variables and classes that apply colors through CSS
`background-color` and `color`.

Moreover, HelixColor supports the `prefers-color-scheme`
media query, allowing colors to be automatically inverted
based on the user's theme preference between light and dark
themes.

</br>

## Features:

- Color palette based on the color wheel.
- Variables and classes for applying colors via
  `background-color` and `color`.
- Support for `prefers-color-scheme` media query for
  automatic switching between light and dark themes.

</br>

## Installation

You can also install the HelixColor library via NPM:

```bash
npm i helix-color
```

</br>

## Static Colors

Static colors are independent of the user's theme settings.
That is, the background and text colors will not change
unless directly defined in the code. This style is ideal for
interfaces that require visual consistency regardless of
user preferences.

### How to use:

Include the following CDN link in your project to use static
colors:

```bash
https://cdn.jsdelivr.net/gh/Helixify/HelixColor@latest/dist/compressed/main.css
```

### Usage example:

```html
<main class="theme-light-primary">
	<h1 class="font-light-primary">Welcome to Helix Color</h1>
</main>
```

</br>

## Dynamic Colors with prefers-color-scheme

Dynamic colors automatically adjust based on the user's
theme settings. If the user sets their system to a dark or
light theme, the background and text colors will adjust to
follow that preference.

### How to use:

Include the following CDN link in your project to use
dynamic colors:

```bash
https://cdn.jsdelivr.net/gh/Helixify/HelixColor@latest/dist/compressed/color-scheme.css
```

### Usage example:

```html
<main class="theme-primary">
	<h1 class="font-primary">Welcome to Helix Color</h1>
</main>
```

</br>

## Conclusion

HelixColor is a powerful tool for developers who want to
create attractive and adaptable interfaces. Whether using
static colors for consistency or dynamic colors to adjust to
user preferences, HelixColor provides the necessary
flexibility for modern, responsive design.

</br>
</br>

### License

HelixColor is released under the [MIT License](/license.md).
You are free to use and modify it for your projects.
