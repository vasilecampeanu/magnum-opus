---
title: "Markdown Syntax"
---

# Introduction
This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
<!--more-->

# Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

# Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

# Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

## Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

## Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

# Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

## Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

# Code Blocks

## Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Example HTML5 Document</title>
</head>
<body>
    <p>Test</p>
</body>
</html>
```

```css
.spinner 
{
  display: block;
  width: 32px;
  height: 32px;
}
```

```cpp
#include <iostream>

int main(int argc, char argv**)
{
    int x = 10;
    std::cout << "Hello world!" << std::endl;
}
```

### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Example HTML5 Document.</title>
</head>
<body>
    <!-- This is just a comment -->
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus ligula id ex porttitor aliquam. Curabitur ullamcorper eu sem a efficitur. Vivamus accumsan enim id sem dignissim fringilla. Curabitur pretium, risus at laoreet semper, ipsum nunc sodales eros, at elementum neque ante volutpat nunc. Sed ultrices risus risus, ut fringilla orci condimentum vel. Suspendisse ut lobortis augue. Nulla molestie risus sit amet massa blandit, dapibus sodales massa ultricies. Curabitur augue purus, elementum ut suscipit nec, rhoncus vitae lorem. Mauris quis tellus quis felis eleifend bibendum sit amet a ex. Phasellus imperdiet, ligula sed viverra tempus, quam leo pellentesque felis, ac consectetur magna nisl non urna. Duis a nunc lorem. Pellentesque sollicitudin, mauris sed vulputate sodales, quam arcu lobortis felis, et efficitur mauris sem sed mi. Sed gravida odio in mi euismod ullamcorper. Maecenas consectetur, mi ac rhoncus rutrum, risus est auctor quam, sit amet sagittis magna velit a enim. Aliquam in nisi sed leo pretium dignissim ac ut felis. Praesent varius nec nunc porttitor porta.
    </p>
</body>
</html>
{{< /highlight >}}

## Diff code block

```diff
[dependencies.bevy]
git = "https://github.com/bevyengine/bevy"
rev = "11f52b8c72fc3a568e8bb4a4cd1f3eb025ac2e13"
- features = ["dynamic"]
+ features = ["jpeg", "dynamic"]
```

# List Types

## Ordered List

1. First item
2. Second item
3. Third item

## Unordered List

* List item
* Another item
* And another item

## Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese