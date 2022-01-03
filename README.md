# Preact Safe

This package is preact version of [`react-safe`](https://www.npmjs.com/package/react-safe). It provides a syntactic sugar over the raw `dangerouslySetInnerHTML`.

## Examples

#### Preact

```jsx
<h1 dangerouslySetInnerHTML={{__html: page.title}}></h1>
<div dangerouslySetInnerHTML={{__html: renderMD(page.body)}}></div>
```

#### Preact Safe

```jsx
<Safe.h1>{page.title}</Safe.h1>
<Safe.div>{renderMD(page.body)}</Safe.div>
```

## Warning

Preact Safe is a thin wrapper over [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml). So all the usual concerns about XSS attacks and security in general apply. Check the above link for more information.

## Author

**preact-safe** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/preact-safe/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
