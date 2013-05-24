---
title: How to remove Amazon ads from Ubuntu
author: Derek
layout: post
permalink: /how-to-remove-amazon-ads-from-ubuntu.html
Keywords: amazon,ubuntu
---

Since Ubuntu 12.10, [Canonical] [1] adding Amazon searches right in your desktop searches. Turning them off in your Ubuntu System Settings will turn off all of your web searches which is kinda annoying.

You will need to open a Terminal window and run:

```
sudo apt-get remove unity-lens-shopping
```

Type in your password when prompted, and when it's finished, log out. When you log back in, you should find that the Amazon ads no longer show up, but you can still search other web services from the Dash.

[1]: http://www.canonical.com