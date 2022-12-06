# Markdown Sample

## 0. Header 标题

> ```md
> # header text1
> ## header text2
> ### header text3
> #### header text4
> ##### header text5
> ###### header text6
> common text
> 
> h1-alt
> ===
> h2-alt
> ---
> ```
> # header text1
> ## header text2
> ### header text3
> #### header text4
> ##### header text5
> ###### header text6
> common text
> 
> h1-alt
> ===
> h2-alt
> ---

## 1. Emphasis 强调

```md
- 斜体 *italics* aka _emphasis_
- 加粗 **bold** aka __strong emphasis__
- 组合 **combine multi _emphasis_**
- 删除 ~~strikethrough~~
```

- 斜体 *italics* aka _emphasis_
- 加粗 **bold** aka __strong emphasis__
- 组合 **combine multi _emphasis_**
- 删除 ~~strikethrough~~

## 2. List 列表

```md
1. item 1
2. item 2
    1. subitem
    * unordered one
7. actual number don't mater
8. just need number

    indented paragraphs, blank line above is needed
```

1. item 1
2. item 2
    1. subitem
    * unordered one
7. actual number don't mater
8. just need number

    indented paragraphs, blank line above is needed

```
* unorder list item 
- unorder list item 
+ unorder list item 
```

* unorder list item 
- unorder list item 
+ unorder list item 

## 3. Link 链接

```md
- link to [GitHub](https://github.com)
- link to [GitHub](https://github.com "github") with title
- link to [GitHub][github] using reference
- link to [GitHub][1] using reference define with number
- link to [github]
- link to https://github.com
- link to <https://github.com>
- link to [practice/README](../practice/README) which is a relative file

[1]: https://github.com
[github]: https://github.com
```

- link to [GitHub](https://github.com)
- link to [GitHub](https://github.com "github") with title
- link to [GitHub][github] using reference
- link to [GitHub][1] using reference define with number
- link to [github]
- link to https://github.com
- link to <https://github.com>
- link to [practice/README](../practice/README) which is a relative file

[1]: https://github.com
[github]: https://github.com

## 4. Image 图片

```md
- ![logo-stable](https://code.visualstudio.com/assets/updates/1_35/logo-stable.png "logo")
- ![logo-insiders][logo1]
- <img src="https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png" width="50">
- ![invalid-path-alt-text-here](https:this.is.a.invalid.path "logo")

[logo1]: https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png "another logo"
```
- ![logo-stable](https://code.visualstudio.com/assets/updates/1_35/logo-stable.png "logo")
- ![logo-insiders][logo1]
- <img src="https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png" width="50">
- ![invalid-path-alt-text-here](https:this.is.a.invalid.path "logo")

[logo1]: https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png "another logo"

## 5. Code and Syntax Highlighting 代码块

```markdown
    ```javascript
    // a javascript code block
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

    ```cs
    // a C# code block
    using System;
    int s = "C sharp syntax highlighting";
    ```
```

```javascript
// a javascript code block
var s = "JavaScript syntax highlighting";
alert(s);
```

```cs
// a C# code block
using System;
int s = "C sharp syntax highlighting";
```

or insert a `code block` in text

## 6. Table 表格

```md
| A Tabel | at least 3 dashes |               |
| ------- | :---------------: | ------------: |
| 1       |  center-aligned   | right-aligned |
| 2       |       apple       |           $12 |
| 3       |      banana       |            $8 |
```

| A Tabel | at least 3 dashes |               |
| ------- | :---------------: | ------------: |
| 1       |  center-aligned   | right-aligned |
| 2       |       apple       |           $12 |
| 3       |      banana       |            $8 |

```md
markdown|less|pretty|
|---|---|---
|it|renders|nicely
|*inline*|`markdown`|**still works**|
```

markdown|less|pretty|
|---|---|---
|it|renders|nicely
|*inline*|`markdown`|**still works**|

## 7. Blockquote 引用

```md
> text in line 1 and
> continuous text in line 2
>
> new paragraph with a single >
> 
> there is two spaces at the end of this line  
> that create a line break

> break quote with a blank line

> very long line will still be quoted when it wraps. *MarkDown* still can be use.

> quote
>>quote in quote
> > > with space still work
```

> text in line 1 and
> continuous text in line 2
>
> new paragraph with a single >
> 
> there is two spaces at the end of this line  
> that create a line break

> break quote with a blank line

> very long line will still be quoted when it wraps. *MarkDown* still can be use.

> quote
>>quote in quote
> > > with space still work

## 8. Inline HTML 内联 HTML

```html
<div style="border: 1px solid gray; border-radius: 6px; width: 200px;">
  <div style="background: #5b6dcd; border-radius: 5px 5px 0 0; color: black; padding: 3px 10px;">Card Title</div>
  <div style="background: #21212133; border-radius: 0 0 5px 5px; color: white; padding: 10px;">Card Content</div>
</div>
```
<div style="border: 1px solid gray; border-radius: 6px; width: 200px;">
  <div style="background: #5b6dcd; border-radius: 5px 5px 0 0; color: black; padding: 3px 10px;">Card Title</div>
  <div style="background: #21212133; border-radius: 0 0 5px 5px; color: white; padding: 10px;">Card Content</div>
</div>

## 9. Horizontal Rule 水平分隔线

```
---
***
___
```

---
***
___

## 10. Line Breaks 换行规则

```md
text in line 1 and
continuous text in line 2

line3 is separated from the one above by two newlines

there is two spaces at the end of this line  
that create a line break
```

text in line 1 and
continuous text in line 2

line3 is separated from the one above by two newlines

there is two spaces at the end of this line  
that create a line break
