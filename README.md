# Y U no validate

A Firefox and SeaMonkey extension.

In the "Add Security Exception" dialog makes "Permanently store this
exception" checkbox unchecked by default.

Project's homepage: <http://wodny.org/projects/y-u-no-validate.html>

THIS PROJECT IS DISCONTINUED. IT DOES NOT WORK SINCE XUL DEPRECATION.

Fortunately, it is no longer needed. Since Firefox 66 there is the 
`about:config` pref:

    security.certerrors.permanentOverride

Thanks to Jakub Wilk (@jwilk) for pointing that out.

See the [bug report][bug] and the [changeset][chgset].

## Packages

* At addons.mozilla.org:
  <https://addons.mozilla.org/en-US/firefox/addon/y-u-no-validate/>
* From the Debian repository:
  <https://packages.debian.org/unstable/xul-ext-y-u-no-validate>


[bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1492498
[chgset]: https://hg.mozilla.org/mozilla-central/rev/6aefbed9ce430f1da6b59a4ff98fb69375fa4f8f
