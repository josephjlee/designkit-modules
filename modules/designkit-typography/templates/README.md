<p align="center">
  <h3 align="center">Design Kit Modules</h3>
</p>

<br>

<h3><%= module.name %> <span>v<%= module.version %></span></h3>

[![npm version](https://img.shields.io/npm/v/<%= module.name %>.svg)](https://www.npmjs.org/package/<%= module.name %>)

<br>

<%= module.description %>

## Install
```
npm i --save <%= module.name %>
```

## Demos

<% _.forEach(module.demos, function(demo) { %>- [<%- demo.name %>](http://rightscale-design.github.io/<%= module.name %>/docs/<%- demo.file %>)
<% }); %>

## CSS

```css
<%= srcCSS %>
```

## Author

<%= module.author %>

## License

<%= module.license %>
