---
title: Fast search and replace with sed 
author: Derek
layout: post
permalink: /fast-search-and-replace-with-sed.html
Keywords: sed,batch,sql
---

Working with large database files over 1GB and the need to search and replace text presents a bit of a challenge.

First, most text editors will chug and probably not open the file.

Second, even if you could open that large file, it would take forever to do a search and replace text field.

This is where SED shines. Sed is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline). While in some ways similar to an editor which permits scripted edits (such as ed), sed works by making only one pass over the input(s), and is consequently more efficient. But it is sed's ability to filter text in a pipeline which particularly distinguishes it from other types of editors.

~~~ bash

$ cd /path/to/database.sql

$ sed -i 's/myolddomain.com/mynewdomain.dev/g' database.sql

~~~

By executing the command, sed will go through the file, searching and replacing every occurence of myolddomain.com with mynewdomain.dev. Depending on file size, it usually takes moments compared to a text editor or IDE.

Further reading ["Sed & Awk - The dynamic duo"] [1] by Joshua Thijssen.

[Wikipedia entry for sed] [2]

[1]: http://www.slideshare.net/jaytaph/sed-awk-the-dynamic-duo

[2]: http://en.wikipedia.org/wiki/Sed
