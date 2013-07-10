---
title: Batch rename file extension 
author: Derek
layout: post
permalink: /batch-rename-file-extension.html
Keywords: file extension,batch
---

Today I needed to batch rename the file extensions of some files on the server so they were all lowercase.

~~~ bash

$ cd /path/to/folder/

$ find -name '*.JPG' | sed 's/\(.*\)\.JPG/mv "\1.JPG" "\1.jpg"/' | sh

~~~

A lot quicker than handbombing them.