---
title: FastCGI Data Timeout Error
author: Derek
layout: post
permalink: /fastcgi-data-timeout-error.html
categories:
  - Web Hosting
---

If you are running a WHM/cPanel server and have FastCGI enabled in Apache you may find the following error which caused your website to hang and display the ’500 Internal Server Error’ message. This can happen when you are asking your site to do something resource hungry such as reindexing a database or clearing a cache. We were having an issue in the admin section of a fairly large Magento Enterprise Edition ecommerce site.

Checking into the **/etc/httpd/logs/error_log** file you may see something like:

    [Sat ...] [warn] [client ...] (104)Connection reset by peer: mod_fcgid: error reading data from FastCGI server
    [Sat ...] [error] [client ...] Premature end of script headers: index.php

This is caused by mod_fcgid reaching its default timeout in processing the request. I thought I had the issue solved with increasing the timeout value for php but found the server logs told a different story. To remedy the issue:

Edit **/usr/local/apache/conf/includes/pre\_virtualhost\_global.conf**

and add:

    
    FcgidMaxRequestLen 1073741824
    FcgidProcessLifeTime 8200
    FcgidIOTimeout 8200
    FcgidConnectTimeout 300
    

You may have different requirements so adjust your settings accordingly.

You will need to restart Apache to load the new settings.

For more information, please refer to the [Apache Module mod_fcgid][1] page.

 [1]: http://httpd.apache.org/mod_fcgid/mod/mod_fcgid.html