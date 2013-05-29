---
title: How to add htop to a CentOS and Ubuntu server
author: Derek
layout: post
permalink: /how-to-add-htop-to-a-centos-and-ubuntu-server.html
categories:
  - Web Hosting
---

Are you currently using `top` and looking for a more detailed and visual representation of your server resources?

### CentOS server

1.  Check your version of Centos `$ cat /etc/redhat-release`
2.  Check you architecture `$ uname -m`
3.  Check this list for your version and grab the latest 
4.  Download to your server `$ wget http://pkgs.repoforge.org/htop/htop-1.0.2-1.el5.rf.x86_64.rpm`
5.  Install `$ rpm -i htop-1.0.2-1.el5.rf.x86_64.rpm`
6.  Open it with `$ htop`

### Ubuntu server

`$ sudo apt-get install htop`