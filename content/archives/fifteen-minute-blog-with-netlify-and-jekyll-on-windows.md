---
title: 'The fifteen-minute Blog with Netlify and Jekyll on Windows'
url: fifteen-minutes-of-jekyll
date: Fri, 11 Mar 2016 18:22:37 +0000
draft: false
tags: ['Blog', 'Cloud-Native', 'Cloud', 'Static Site Generation']
---

{{< disclosure >}}

Blogging has become a way of life for many, developers use blogs to record
their learnings, journalists to cover news stories in a free form and personal
style. However, my personal bug-bear with blogging has always been maintaining
a hosting platform which is typically is cumbersome and awkward.  Updates come
thick and fast, and even when we keep up to date with all of the patches at
some point, we get hacked and have to unravel the hack or start over.

![WordPress Updates Screen][wordpress-updates]

In 2016 there are better ways, such as LinkedIn's "Posts" publishing platform
and Stack Exchanges's Q&amp;A style publications.  If, however, you would like
a bit more control over the content, there is a third way: static site
generators.  This suite of tools gives us the ability to create content on our
local machines, generate the full optimised site then deploy the static site
to a service such as Netlify manually or by using continuous deployment
techniques.  At the time I am writing this paragraph I have never used Netlify
or Static Site Generators, I am building my first site while writing this
guide.

I have split the work between three sections **installing Jekyll**, **creating
your first site** and **deploying to Netlify**.  I've given myself five
minutes to complete the work in each section, not including writing up my
results.

## **Jekyll:** Quick Setup

I am working on the beautiful {{< amazon-affiliate-link asin="B016OW7EBA" text="Microsoft Surface Book" >}}
running Windows 10 so the instructions below are specific to Windows, however,
the process for other operating systems is similar.

1. Install Ruby from [Ruby Installer][ruby-installer], ensure you check the
box to add Ruby to your path, once complete reboot your machine to ensure
the environment variables are picked up.

2. Install Jekyll and Bundler, you will need both of these to update and
test your site.

    ```bash
    gem install jekyll bundler
    ```

3. Create your first Jekyll site

    ```bash
    jekyll new my-site
    ```

4. Install dependencies for your site

    ```bash
    bundle install
    ```

5. Test your site, run this command and go to the site listed in the output.

    ```bash
    bundle exec jekyll serve
    ```

You should end up with something looking like the screenshot below.  You might
feel that this was a bit of an anti-climax as what we have now isn't
particularly astounding, we will fix that in the next section.

![Screenshot of Default Site][default-site-image]

## **Themes:** Getting Your Style On

Fortunately getting some colour and style into Jekyll is very simple, I
selected a paid theme from [Theme Forest][themeforest] called Steve, however
with a bit of searching you can find free themes that are well written and
look awesome:

[![Theme Forest: Steve][themeforest-steve-image]][themeforest-steve]

Themes installation for static sites follows a pattern, as long as you stick
to it you shouldn't have any issues:

1. Extract the theme to a **new** folder.
2. Install Gem dependencies.
3. Execute `bundle install`.
4. Copy any existing posts into the `_pages` and `_posts` folders.
5. Test your site with `bundle exec jekyll serve`.

> **IMPORTANT:** in the case of Steve I needed to install the
> `jekyll-paginate` gem with `gem install jekyll-paginate`.  I had some Ruby
> Environmental issues, specifically this error message:
>
> ```plain
> Dependency Error: Yikes! It looks like you don't have
> jekyll-paginate or one of its dependencies installed. To use Jekyll
> as currently configured, you'll need to install this gem. The full error
> message from Ruby is: 'cannot load such file -- jekyll-paginate' If you run
> into trouble, you can find helpful resources at http://jekyllrb.com/help/!
> ```
>
> I managed to work around this by adding the following line to my `Gemfile`:
>
> ```ruby
> gem "jekyll-paginate"
> ```

Take a few minutes to review the contents of the supplied `_config.yml` there
are often additional configuration options, such as the blog name included as
part of the theme.  After editing the site preview it with `bundle exec jekyll
serve`:

![Site Preview using the Steve Theme][site-preview]

## **GO GO GO**: Deploying to Netlify

Netlify has brought a product to the market that brings three core best
practices for hosting websites in a single package for a comparatively small
fee:

- **Continuous Delivery** - the act of being capable of deploying content or
functionality on-demand - regularly, reliably and repeatably.  Netlify
achieves this through deep integration with code hosting sites such as
GitHub and BitBucket.

- **Content Delivery Network** - locating your content as close to the user
as possible ensuring delivery to your users in as shorter time as
possible.  Because your site is made up of static content it's possible to
host your site in locations around the globe; there is no need for a
central server.

- **Always Encrypted** - by providing free SSL certificates for users via
Let's Encrypt Netlify deliver your content to your users over an always
encrypted connection.

Let's see how we get our content up onto Netlify:

1. If you don't already have a [GitHub][github-join] account, grab one, there
is a free plan.

1. Install the [GitHub Desktop Client][github-desktop].

1. [Sign up to Netlify][netlify-login] using your GitHub account, don't worry
there again there is a free plan.

1. Add your site to GitHub, by first creating a new Repository from within
GitHub then running the following commands locally:

    ```bash
    git init
    git remote add origin git@github.com:YourUsername/YourRepository.git
    git push origin HEAD
    git branch --set-upstream-to=origin/master
    ```

1. From the [Netlify Dashboard][netlify-dashboard] "New Site" and then choose
Continuous Deployment with GitHub.

1. Select the repository you created in step 1, above.

1. Accept all of the defaults on the next screen then select "Build Your
Site".  This process will take a few minutes to complete as your site is
building and deploying to Netlify servers.

1. Once Netlify you will have a dashboard with a screenshot of your site and
an auto-generated site name:

![Netlify Website Dashboard][netlify-website-dashboard-image]

1. Edit the name of the site to be something slightly more memorable, in my
case; I choose `static-richard-slater`.

1. Click the website link to preview your site and you have completed your
first deployment with Netlify.

All in all the whole process took a little over 15 minutes.  If I hadn't had
issues with Jekyll Paginate, then I would have come in under my original
fifteen-minute estimate.

  [wordpress-updates]: /img/archive/2016/03/11/wordpress-updates.png
  [ruby-installer]: https://rubyinstaller.org
  [default-site-image]: /img/archive/2016/03/11/default-site.png
  [themeforest]: https://themeforest.net/?ref=RichardSlater
  [themeforest-steve]: https://themeforest.net/item/steve-a-minimal-blog-theme-for-jekyll/15601096?ref=RichardSlater
  [themeforest-steve-image]: /img/archive/2016/03/11/themeforest-steve-image.jpg
  [site-preview]: /img/archive/2016/03/11/themed-site-with-steve.png
  [netlify-login]: https://app.netlify.com/
  [github-join]: https://github.com/join
  [github-desktop]: https://desktop.github.com/
  [netlify-dashboard]: https://app.netlify.com/
  [netlify-website-dashboard-image]: /img/archive/2016/03/11/netlify-website-dashboard.png
