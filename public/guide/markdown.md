# Markdown Sample

## 0. Header

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

## 1. Emphasis

*italics* aka _emphasis_

**bold** aka __strong emphasis__

**combine multi _emphasis_**

~~strikethrough~~

## 2. List

1. item 1
2. item 2
    1. subitem
    * unordered one
3. actual number don't mater
4. just need number

    indented paragraphs, blank line above is needed

* unorder list item 
- another item 
+ another item 

## 3. Link

link to [GitHub](https://github.com)

link to [GitHub](https://github.com "github") with title

link to [GitHub][github] using reference

link to [GitHub][1] using reference define with number

link to [github] or https://github.com  directly

link to [README](..\..\..\README.md) which is a relative file

using address like: http://www.github.com or <http://www.github.com>, but github.com not work in github (it work in vscode)

[1]: https://github.com
[github]: https://github.com

## 4. Image

link to a image directly / with refrence / with style

![alt text](https://code.visualstudio.com/assets/updates/1_35/logo-stable.png "logo")
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![this alt text shown while image not load][logo1]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![image][logowithsize]

using `img` tag

<img src="https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png" width="50">

[logo1]: https://code.visualstudio.com/assets/updates/1_35/logo-insiders.png "another logo"
[logowithsize]: https://code.visualstudio.com/assets/updates/1_35/logo-stable.png#thumbnail

[full style setting sample](/Docs/Tool/VSCode.md#image-with-style)

## 5. Code and Syntax Highlighting

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

## 6. Table

| A Tabel | at least 3 dashes needed | outer pipes are optional |
|---------|:------------------------:|-------------------------:|
| 1       | center-aligned           | right-aligned            |
| 2       | apple                    | $12                      |
| 3       | banana                   | $8                       |

markdown|less|pretty|
|---|---|---
|it|renders|nicely
|*inline*|`markdown`|**still works**|

## 7. Blockquote

> blockquotes are very nice in vs code.
> this line is part of the same quote
>
> new paragraph with a single >
> 
> there is two spaces at the end of this line  
> that create a line break

> break quote with a blank line

> very long line will still be quoted when it wraps. *MarkDown* still can be use. I need *italics wrap* **bold wrap** _italics wrap_ __bold wrap__ other wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap wrap

> quote
>>quote in quote
> > > with space still work

## 8. Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## 9. Horizontal Rule

three or more...

---

hyphens

***

asterisks

___

underscroes

## 10. Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.