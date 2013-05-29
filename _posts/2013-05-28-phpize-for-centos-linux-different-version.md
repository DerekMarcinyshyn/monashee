---
title: PHPIZE for Centos Linux with different version
author: Derek
layout: post
permalink: /phpize-for-centos-linux-different-version.html
Keywords: amazon,ubuntu
---

I maintain and work on a couple of cPanel - CentOS systems and had upgraded them to using PHP 5.4 a few months back. The other day I needed to install a custom PHP module from GitHub. I did the usual wget package and then phpize. 

However, the command phpize would build the module against the 2009026 config. To target a specific version of phpize

~~~ bash

$ cd /path/to/extracted/module/

$ /usr/local/bin/phpize

$ ./configure --with-php-config=/usr/local/bin/php-config

$ make

$ make test

$ make install

~~~

It will now compile the new module to your specific version of PHP installed on your machine.