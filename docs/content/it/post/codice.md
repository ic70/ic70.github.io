+++
author = "Hugo Authors"
title = "Codice"
date = "2019-06-28"
description = "Guide to code"
tags = [
    "markdown",
    "css",
    "html",
    "themes",
    "code",
]
categories = [
    "themes",
    "syntax",
    "codeHigh",
]
+++

~~~scss
/*
Theme Name: ql
Theme URI: https://github.com/labsforge/ql
Author: Ivan Chiappori
Author URI: https://labsforge.github.io/
Description: ql
Version: 0.0.1a
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: two-columns, right-sidebar, flexible-header, custom-background, custom-colors, custom-header, custom-menu, custom-logo, editor-style, featured-images, microformats, footer-widgets, post-formats, sticky-post, theme-options, threaded-comments, translation-ready, blog
Text Domain: ql
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

@charset "utf-8";
@import "assets/scss/theme-css/01-variables.scss";
@import "assets/scss/theme-css/02-base-reset.scss";
@import "assets/scss/theme-css/03-reset.scss";
@import "assets/scss/theme-css/04-main.scss";
@import "assets/scss/theme-css/05-header.scss";
@import "assets/scss/theme-css/06-navigation-main.scss";
@import "assets/scss/theme-css/07-forms.scss";
@import "assets/scss/theme-css/08-layout.scss";
@import "assets/scss/theme-css/09-sidebar.scss";
@import "assets/scss/theme-css/10-footer.scss";
@import "assets/scss/theme-css/11-comments.scss";
@import "assets/scss/theme-css/12-print.scss";

.grid,
.grid-large {
    margin: 0 auto;
    position: relative;
    width: 100%;
    @include clearfix-after;
}

.grid {
    max-width: $grid-width;
}

.grid-large {
    max-width: $grid-large-width;
}
~~~







~~~scss
/*
Theme Name: ql
Theme URI: https://github.com/labsforge/ql
Author: Ivan Chiappori
Author URI: https://labsforge.github.io/
Description: ql
Version: 0.0.1a
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: two-columns, right-sidebar, flexible-header, custom-background, custom-colors, custom-header, custom-menu, custom-logo, editor-style, featured-images, microformats, footer-widgets, post-formats, sticky-post, theme-options, threaded-comments, translation-ready, blog
Text Domain: ql
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

@charset "utf-8";
@import "assets/scss/theme-css/01-variables.scss";
@import "assets/scss/theme-css/02-base-reset.scss";
@import "assets/scss/theme-css/03-reset.scss";
@import "assets/scss/theme-css/04-main.scss";
@import "assets/scss/theme-css/05-header.scss";
@import "assets/scss/theme-css/06-navigation-main.scss";
@import "assets/scss/theme-css/07-forms.scss";
@import "assets/scss/theme-css/08-layout.scss";
@import "assets/scss/theme-css/09-sidebar.scss";
@import "assets/scss/theme-css/10-footer.scss";
@import "assets/scss/theme-css/11-comments.scss";
@import "assets/scss/theme-css/12-print.scss";

.grid,
.grid-large {
    margin: 0 auto;
    position: relative;
    width: 100%;
    @include clearfix-after;
}

.grid {
    max-width: $grid-width;
}

.grid-large {
    max-width: $grid-large-width;
}
~~~



~~~php
$current_Url = Http::getUriString();
if ( $current_Url == '' ) {
    echo '<h1 class="site-logo">' .	Registry::get( 'settings.title' ) .	'</h1>';
    echo '<h2 class="site-description">' . Registry::get( 'settings.description' ) . '</h2>';
} else {
    echo '<span class="site-logo">' . Registry::get( 'settings.title' ) . '</span>';
    echo '<span class="site-description">' . Registry::get( 'settings.description' ) . '</span>';
}
~~~
~~~markup
<div class="grid-large">
        <div class="cookie-banner-box">
            <p>The site uses cookies.</p>
            <span class="button-info"><a href="<?= Http::getBaseUrl() ?>/privacy">privacy</a></span>
            <span id="cookie-button" class="button-ok"><button onclick="setcookie()">I accept</button></span>
        </div>
    </div>
</div>
~~~