# wa_seeds_vue_menu_active

# introduce

## index.js

進入 router/index.js
在`new VueRouter`加入這兩行

```js
linkActiveClass: 'active', //命名一個叫做 active 的class
linkExactActiveClass: 'exact-active', //命名一個叫做 exact-active 的class
```

此外也不要忘了用 `redirect`重新導向頁面的路徑，用法請看 router/index.js

## template

在 `<template>` 中使用 要這樣用

```html
<!-- 這個是前面path都一樣的都會觸發 -->
<router-link to="/foo" active-class="active">foo</router-link>

<!-- 這個是完全一樣的path才會觸發 -->
<router-link to="/bar" exact-active-class="exact-active">bar</router-link>
```

## CSS

當然，要記得給 Class 套上效果
例如

```
.active{
  color:red
}
```

如此一來點擊按鈕時就會觸發 帶有`active-class="active` 的 `<router-link>`
