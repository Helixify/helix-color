# HelixColor

HelixColor is a CSS library that provides a color palette based on the color wheel, making it easy to create visually appealing and harmonious interfaces. The library includes variables and classes that apply colors through CSS `background-color` and `color`.

Moreover, HelixColor supports the `prefers-color-scheme` media query, allowing colors to be automatically inverted based on the user's theme preference between light and dark themes.

</br>

## Features:

- Color palette based on the color wheel.
- Variables and classes for applying colors via `background-color` and `color`.
- Support for `prefers-color-scheme` media query for automatic switching between light and dark themes.

</br>

## Getting Started

You can utilize the full range of colors based on the color wheel by importing the desired file and applying it to your code as follows:

```html
<main class="theme-primary">
  <div class="bgc-blue-light">
    <h1 class="color-blue-darken">Welcome to Helix Color</h1>
  </div>
  <h2 class="font-tertiary">Feel free to explore all the colors</h2>
</main>
```

_Example using the color-scheme_

</br>
</br>

### Default

Using the default main file, you will have access to classes for both light and dark themes. However, you won't have the `prefers-color-scheme` media query.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Helixify/HelixColor@v0.1-beta/dist/compressed/main.css"
/>
```

```css
@import url("https://cdn.jsdelivr.net/gh/Helixify/HelixColor@v0.1-beta/dist/compressed/main.css");
```

**Applying in HTML**

```html
<main class="theme-light-primary">
  <h1 class="font-light-primary">Welcome to Helix Color</h1>
</main>
```

</br>

### Color Scheme

By using the color scheme, you can automatically apply colors based on the user's theme, but you won't be able to access classes from another theme as in the previous example.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Helixify/HelixColor@v0.1-beta/dist/compressed/color-scheme.css"
/>
```

```css
@import url("https://cdn.jsdelivr.net/gh/Helixify/HelixColor@v0.1-beta/dist/compressed/color-scheme.css");
```

**Applying in HTML**

```html
<main class="theme-primary">
  <h1 class="font-primary">Welcome to Helix Color</h1>
</main>
```

</br>
</br>

### License

HelixColor is released under the [MIT License](/license.md). You are free to use and modify it for your projects.
