/*
Replace the default href for mybinder.org links to point to my own binder instance.
*/
$( document ).ready(function() {
    var mybinderUrl = document.querySelectorAll("a[href^='https://mybinder.org']");
    for (var i = 0, l = mybinderUrl.length; i < l; i++) {
        var el = mybinderUrl[i];
        el.href = el.href.replace("document-understanding-ebook/master?urlpath=tree/binder/", "binder/master?urlpath=tree/");
    };
});