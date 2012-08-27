---
layout: default
filename: README.md
title: How to work on the Tegola/HUBS web site
---

How to work on the Tegola/HUBS web site
=======================================

The web site is held in a [git] repository. git is just a version
control system that lets you keep track of files and changes, similar
to [mercurial] or [subversion].

We use [Github] to host the repository because it also provides issue
tracking and wikis but most importantly also has an arrangement where
pages written in the wiki-like [markdown] syntax get rendered into
HTML and served by their servers. This is very convenient. It is done
by some free software called [jekyll] that you can also run locally.

The conversion to HTML is done by substituting the [markdown] content
into a template. The template provides the window dressing, layout and
CSS and javascript and such. It is also possible to write HTML
fragments directly if some specialised layout is necessary.

Prerequisites
-------------

You need this software to work locally:

    sudo apt-get install git-core
    sudo apt-get install ruby1.9.1-dev
    sudo apt-get install python-pygments
    sudo gem install jekyll

Working With the Repository
---------------------------

Firstly, check out or update a copy of the web site source:

    git clone git@github.com:tegola-hubs/tegola-hubs.github.com.git tegola-www

or

    git pull

in an already existing local copy.

Then add or edit files as necessary.  It is good practice to work
against an issue or ticket to keep track of things. This is not
necessary but is nice to do.

When done, add any new files and commit the changes:

    git add newfile.md
    git commit -a -m '[#1234] added a new file because ...'

where 1234 is the ticket number. Doing it like this will cause the
commit message and changeset to be linked into the ticket.

Then push the changes:

    git push

which will also cause the public web site to be re-built on [Github]'s
servers.

Preamble
--------

Files that are to be used with the web site need a preamble. The
preamble contains information about which template to use for the
page, as well as some variables like *title* that get substituted into
the template.

    ---
    layout: default
    filename: foo.md
    title: A Foo Page
    ---

    A Foo Page
    ==========

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    fermentum mattis ultrices. Fusce consequat, est vel dapibus
    mattis, lectus risus pulvinar magna, ac egestas lorem diam
    fringilla massa. Donec nibh sem, fermentum vitae cursus ut,
    pulvinar ut dolor. [Morbi] hendrerit rhoncus augue vel...
     
    [Morbi]: http://www.example.org/

The filename bit should be the whole path name of the file in the
repository and will cause the *Page History* link on the web site to
point to the right place.

Blog Posts
----------

Blog posts have a special naming convention and live in the **\_posts**
subdirectory. They are named *YYYY-MM-DD-title-slug.md* and putting
them there will cause them to be linked into the list of news items or
blog entries automatically.

Templates and CSS
-----------------

Templates live in the **\_layouts** subdirectory. There are, at
present only two, *default* and *post*. The latter is for news entries
or blog posts. and the former is for everything else. The templates
are normal HTML5 and use the [Twitter Bootstrap] framework, which is
just some standard scaffolding and common classes to quickly make a
professional-looking website without having to spend too egregiously
long getting the look and feel right.

For most normal purposes it should not be necessary to look too much
at the templates. Simply writing text in the [markdown] shape is
enough to get content on-line.

[git]: http://git-scm.com/
[mercurial]: http://mercurial.selenic.com/
[subversion]: http://subversion.tigris.org/
[Github]: http://github.com/
[markdown]: http://daringfireball.net/projects/markdown/
[jekyll]: https://github.com/mojombo/jekyll/blob/master/README.textile
[Twitter Bootstrap]: http://twitter.github.com/bootstrap/
