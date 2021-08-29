# Dirty Calf

I'm a super dirty calf and my job is to poop short CSS classes for you project.

I can reduce your **_CSS bundle size_** by 40-70%.

Use me with [postcss modules](https://github.com/madyankin/postcss-modules).

Example

```js
// Turn these ugly classes
"navbar" "navbar__link" "footer" "btn-closed" "my-wife"

// Into a beautiful alphabet
"a" "b" "c" "d" "e" ... "aa" "ab" "ac" ... "xyz" "xzz" ...

```

Don't use me in small projects, it will not make much difference. **_The bigger CSS file and alphabet, the bigger percentage_**.

## Installation

```
npm i -D dirty-calf
```

## Config

A Super-duper simple config. You can always extend my alphabet and add some sort of prefixes and suffixes.

```ts
{
  alphabet: string; // All characters that will be used, default: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_",

  formatting: {
      prefix: string, // Prepend a string to all classnames, default: ""
      suffix: string, // Append a string to all classnames, default: ""
      digitPrefix: string, // Prepend a string to all classnames that start with a digit, otherwise they're invalid. default: "_".
  },
}

```

## Usage

Put my `poop` method in the [postcss modules generate scooped names](https://github.com/madyankin/postcss-modules#generating-scoped-names) property and that's it.

```js
// Give me birth and config me
const dirtyCalf = new DirtyCalf(config);

// Postcss modules config
...
   // My poop method goes here (important to bind it)
  generateScopedName: dirtyCalf.poop.bind(dirtyCalf)
...

```

## License

MIT

## Ideas

The issues section is open for you. Improve me with any ideas you have
