---
title: Moving databases in Magento
author: Derek
layout: post
permalink: /moving-databases-in-magento.html
categories:
  - Magento
---

Following best practices of developing on a local development server then pushing your code to a live server, Magento ecommerce platform requires a few steps to prepare your database for an error-free smooth transition between domains.

First. using your favorite code editor open your exported SQL file and search and replace your domain. If you have different `{{unsecure_base_url}}` and `{{secure_base_url}}`

then you will have to search and replace twice.



Second, involves adding some SQL statements at the beginning of the file and at the end.

At the top of the file add:

    SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT;
    SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS;
    SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION;
    SET NAMES utf8;
    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
    SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0;

And at the end of the file add:

    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
    SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT;
    SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS;
    SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION;
    SET SQL_NOTES=@OLD_SQL_NOTES;

Lastly, gzip your sql file. Then create a database using some sort of versioning to help distinguish the different Magento databases and import your `new-database-2012-09-01.sql.gz` into your database.

Open **/app/etc/local.xml** and change the dbname to your new database. These steps need to be done going either way — development to live server — or more common live to development server.