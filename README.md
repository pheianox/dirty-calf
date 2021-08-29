# Dirty Calf

I'm super dirty calf and my job is to shorten your ugly CSS classes.

I can reduce your **_CSS bundle size_** by 40-70%. 

Use me with [postcss modules](https://github.com/madyankin/postcss-modules).

Example
```js
// Turn these ugly class names
"navbar" "navbar__link" "footer" "btn-closed" "my-wife"

// Into beautiful alphabet
"a" "b" "c" "d" "e" ... "aa" "ab" "ac" ... "xyz" "xzz" ...

```

Don't use me in small projects, it will not make much difference. **_The bigger CSS file, the bigger percentage_**.

## Installation 
```
npm i --save-dev dirty-calf 
```


## Config
Super-duper simple config
```ts
{
  alphabet: string; // All characters that will be used, default: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_",
  
  formatting: {
      prefix: string, // Prepend a string to all classnames, default: ""
      suffix: string, // Append a string to all classnames, default: ""
      digitPrefix: string, // Prepend a string to all classnames that start with a digit, default: ""
  },
}

```

## Usage
Put my `poop` method in [postcss modules generate scooped names](https://github.com/madyankin/postcss-modules#generating-scoped-names) property and that's it. 
```js
const dirtyCalf = new DirtyCalf(config);

// Postcss modules config
...
  generateScopedName: dirtyCalf.poop
...

```

## License 
MIT
