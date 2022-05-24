// ==UserScript==
// @name         Back2source
// @version      0.1.110
// @description  Redirecting to source sites from sites with machine translation, etc.
// @namespace    vladgba
// @author       vladgba@gmail.com
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @downloadURL  https://github.com/vladgba/Back2source/raw/master/back2source.user.js
// @updateURL    https://github.com/vladgba/Back2source/raw/master/back2source.user.js
// @homepageURL  https://github.com/vladgba/Back2source
// @supportURL   https://github.com/vladgba/Back2source/issues
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.browser.yandex.ru
// @noframes
// @match        *://*.*.nina.az/wiki/*
// @match        *://*.360wiki.ru/wiki/*
// @match        *://*.5axxw.com/*/*/*
// @match        *://*.8101010108.cn/zh/*
// @match        *://*.abcdef.wiki/*
// @match        *://*.amuddycup.com/*
// @match        *://*.answacode.com/questions/*
// @match        *://*.answer-id.com/*
// @match        *://*.answeright.com/*
// @match        *://*.antwortenhier.me/*
// @match        *://*.arip-photo.org/*
// @match        *://*.ask-dev.ru/info/*
// @match        *://*.ask-ubuntu.ru/questions/*
// @match        *://*.askcodez.com/*
// @match        *://*.askdev.info/questions/*
// @match        *://*.askdev.ru/q-*
// @match        *://*.askdev.ru/q/*
// @match        *://*.askdevz.com/question/*
// @match        *://*.askentire.net/q/*-*
// @match        *://*.askfrance.me/*
// @match        *://*.askubuntu.ru/questions/*
// @match        *://*.askvoprosy.com/voprosy/*
// @match        *://*.athabasca-foto.com/*
// @match        *://*.bcqaw.com/*.html
// @match        *://*.bildiredi.com/*
// @match        *://*.bilee.com/*.html
// @match        *://*.buildwiki.ru/wiki/*
// @match        *://*.bytemeta.vip/*
// @match        *://*.cainiaojiaocheng.com/questions/*
// @match        *://*.catwolf.org/qs*
// @match        *://*.cfadnc.org/*
// @match        *://*.ciupacabra.com/*
// @match        *://*.cloud.tencent.com/developer/ask/*
// @match        *://*.cndgn.com/question/*
// @match        *://*.code-examples.net/*/q/*
// @match        *://*.code.i-harness.com/*/q/*
// @match        *://*.codefactor.io/repository/*
// @match        *://*.codefaq.info/*
// @match        *://*.codefaq.ru/*
// @match        *://*.codegear.dev/*/questions/*
// @match        *://*.codegrepper.com/*
// @match        *://*.codeguides.site/questions/*
// @match        *://*.codehero.jp/*
// @match        *://*.codeindex.ru/q/*
// @match        *://*.codengineering.ru/q/*
// @match        *://*.codenong.com/*
// @match        *://*.coder.work/article/*
// @match        *://*.coderedirect.com/*
// @match        *://*.coderoad.in/questions/*
// @match        *://*.coderoad.ru/*
// @match        *://*.coderoad.wiki/*
// @match        *://*.coderquestion.ru/q/*
// @match        *://*.codersatellite.com/question-with-identifier-*
// @match        *://*.coredump.biz/questions/*
// @match        *://*.culinarydegree.info/*
// @match        *://*.datewiki.ru/wiki/*
// @match        *://*.de-vraag.com/*
// @match        *://*.debugcn.com/*article/*
// @match        *://*.debugko.com/article/*
// @match        *://*.desarrollo-web-br-bd.com/es/*
// @match        *://*.devdreamz.com/question/*
// @match        *://*.developreference.com/article/*
// @match        *://*.devfaq.fr/question/*
// @match        *://*.dir.md/*
// @match        *://*.domainelespailles.net/*
// @match        *://*.donolik.com/*
// @match        *://*.e-learn.cn/topic/*
// @match        *://*.ec-europe.org/*
// @match        *://*.ecnf2016.org/*
// @match        *://*.editcode.net/article-*
// @match        *://*.edupro.id/questions/*
// @match        *://*.encyclopaedia.bid/*
// @match        *://*.exceptionshub.com/*
// @match        *://*.extutorial.com/ask/*
// @match        *://*.faithcov.org/*
// @match        *://*.fitforlearning.org/*
// @match        *://*.fixes.pub/*/*.html
// @match        *://*.fluffyfables.com/*
// @match        *://*.fooobar.com/questions/*
// @match        *://*.fullstackuser.com/questions/*
// @match        *://*.gaz.wiki/wiki/*
// @match        *://*.generacodice.com/*
// @match        *://*.ghcc.net/*
// @match        *://*.giters.com/*
// @match        *://*.githubhot.com/*
// @match        *://*.githublab.com/*/*
// @match        *://*.githubmemory.com/*
// @match        *://*.gitrush.ru/*/*/*
// @match        *://*.gupgallery.com/*
// @match        *://*.higithub.com/*/*
// @match        *://*.hmong.ru/wiki/*
// @match        *://*.hmong.wiki/wiki/*
// @match        *://*.howtobuildsoftware.com/index.php/how-do/*
// @match        *://*.howtosolves.com/q/*
// @match        *://*.html-agility-pack.net/knowledge-base/*
// @match        *://*.husl.ru/questions/*
// @match        *://*.icode9.com/*
// @match        *://*.icopy.site/questions/*
// @match        *://*.intellipaat.com/community/*
// @match        *://*.iquestion.pro/q/*
// @match        *://*.isolution.pro/q/*
// @match        *://*.itectec.com/*/*
// @match        *://*.issue.life/questions/*
// @match        *://*.issueantenna.com/*/*
// @match        *://*.issueexplorer.com/repo/*/*
// @match        *://*.it-brain.online/question/*
// @match        *://*.itdaan.com/*
// @match        *://*.itnan.ru/post.php*
// @match        *://*.itranslater.com/qa/details/*
// @match        *://*.jablogs.com/detail/*
// @match        *://*.javaer101.com/*/*
// @match        *://*.jejakjabar.com/wiki/*
// @match        *://*.jike.in/forum.php?mod=viewthread&tid=*
// @match        *://*.jpdebug.com/p/*
// @match        *://*.jscodetips.com/examples/*
// @match        *://*.jsrepos.com/*/*
// @match        *://*.knews.vip/q/*
// @match        *://*.kompsekret.ru/q/*
// @match        *://*.kotaeta.com/*
// @match        *://*.legkovopros.ru/questions/*
// @match        *://*.lifesaver.codes/answer/*
// @match        *://*.livepcwiki.ru/wiki/*
// @match        *://*.living-sun.com/*/*
// @match        *://*.localcoder.org/*
// @match        *://*.microeducate.tech/*
// @match        *://*.mediatagtw.com/*/*
// @match        *://*.mihalicdictionary.org/*
// @match        *://*.mlink.in/*
// @match        *://*.mlog.club/article/*
// @match        *://*.narkive.jp/*
// @match        *://*.nwikiit.cyou/wiki/*
// @match        *://*.newbedev.com/*
// @match        *://*.noblenaz.org/*
// @match        *://*.npmmirror.com/package/*
// @match        *://*.ntcdoon.org/*
// @match        *://*.nuomiphp.com/*/*
// @match        *://*.ostack.cn/*?*=*
// @match        *://*.ourladylakes.org/*
// @match        *://*.overcoder.net/q/*
// @match        *://*.overcoder.ru/q/*
// @match        *://*.overstack.in/qa/*
// @match        *://*.pakostnici.com/*
// @match        *://*.panaindustrial.com/*
// @match        *://*.pcbconline.org/*
// @match        *://*.pengembangan-web-mp-pd.com/id/*
// @match        *://*.poweruser.guru/*
// @match        *://*.prog-help.ru/*
// @match        *://*.progi.pro/*
// @match        *://*.programmierfrage.com/items/*
// @match        *://*.projectbackpack.org/*
// @match        *://*.projectbackpack.org/*
// @match        *://*.proubuntu.ru/*/*
// @match        *://*.py4u.net/discuss/*
// @match        *://*.pythonq.com/*/*/*
// @match        *://*.qa-help.ru/*
// @match        *://*.qa-stack.pl/*
// @match        *://*.qa.1r1g.com/sf/ask/*
// @match        *://*.qacode.ru/questions/*
// @match        *://*.qapicks.com/question/*
// @match        *://*.qarchive.ru/*
// @match        *://*.qaru.tech/questions/*
// @match        *://*.qarus.ru/*
// @match        *://*.qastack.in.th/*
// @match        *://*.qastack.info.tr/*
// @match        *://*.qastack.net.bd/*
// @match        *://*.qi-u.com/forum.php?mod=viewthread&tid=*
// @match        *://*.quabr.com/*
// @match        *://*.quares.ru/?id=*
// @match        *://*.question-it.com/questions/*
// @match        *://*.questu.ru/questions/*
// @match        *://*.recalll.co/*
// @match        *://*.reddit.fun/*/*
// @match        *://*.reponse-question-developpement-web-bd.com/fr/*
// @match        *://*.respuestas.me/*
// @match        *://*.risposta-alla-domanda-sullo-sviluppo-web-bd.com/it/*
// @match        *://*.routinepanic.com/questions/*
// @match        *://*.ru.encyclopedia.kz/index.php/*
// @match        *://*.rudata.ru/wiki/*
// @match        *://*.ruphp.com/*.html
// @match        *://*.safehavenpetrescue.org/*
// @match        *://*.savepearlharbor.com/?p=*
// @match        *://*.sbup.com/wiki/*
// @match        *://*.sch22.org/*
// @match        *://*.semicolonworld.com/question/*
// @match        *://*.serveanswer.com/questions/*
// @match        *://*.sierrasummit2005.org/*
// @match        *://*.siwib.org/*
// @match        *://*.snyk.io/advisor/npm-package/*
// @match        *://*.sobrelinux.info/questions/*
// @match        *://*.softwareuser.asklobster.com/posts/*
// @match        *://*.soinside.com/question/*
// @match        *://*.sprosi.pro/questions/*
// @match        *://*.sqlite.in/*
// @match        *://*.stackanswers.net/questions/*
// @match        *://*.stackfinder.jp.net/questions/*
// @match        *://*.stackfinder.ru/questions/*
// @match        *://*.stackguides.com/questions/*
// @match        *://*.stackoom.com/*question/*
// @match        *://*.stackoverflood.com/*
// @match        *://*.stackovergo.com/*q/*
// @match        *://*.stackru.com/questions/*
// @match        *://*.stormcrow.dev/*/questions/*
// @match        *://*.string.quest/read/*
// @match        *://*.sunflowercreations.org/*
// @match        *://*.switch-case.com/*
// @match        *://*.sysadminde.com/questions/*
// @match        *://*.techarks.ru/qa/*
// @match        *://*.techfeed.net/*
// @match        *://*.territorioscuola.it/*
// @match        *://*.theshuggahpies.com/*
// @match        *://*.thinbug.com/q/*
// @match        *://*.tipsfordev.com/*
// @match        *://*.tousu.in/qa/*
// @match        *://*.tra-loi-cau-hoi-phat-trien-web.com/vi/*
// @match        *://*.try2explore.com/*
// @match        *://*.tutorialmore.com/questions-*
// @match        *://*.ubuntuaa.com/*q/*
// @match        *://*.ubuntugeeks.com/questions/*
// @match        *://*.utyatnishna.ru/info/*
// @match        *://*.uwenku.com/question/*
// @match        *://*.v-resheno.ru/*
// @match        *://*.voidcc.com/question/*
// @match        *://*.vvikipedla.com/wiki/*
// @match        *://*.waymanamechurch.org/*
// @match        *://*.wekeepcoding.com/article/*/*
// @match        *://*.web-answers.ru/*/*
// @match        *://*.web-dev-qa-db-fr.com/fr/*
// @match        *://*.web-dev-qa-db-ja.com/ja/*
// @match        *://*.web-dev-qa-db-pt.com/pt/*
// @match        *://*.web-gaebal-jilmun-dabbyeon-db.com/ko/*
// @match        *://*.web-gelistirme-sc.com/tr/*
// @match        *://*.webdevdesigner.com/q*
// @match        *://*.webentwicklung-frage-antwort-db.com.de/de/*
// @match        *://*.while-do.com/*
// @match        *://*.wiki-org.ru/*
// @match        *://*.wiki-wiki.ru/wp/*
// @match        *://*.wiki.cologne/*
// @match        *://*.wiki2.info/*
// @match        *://*.wiki2.net/*
// @match        *://*.wiki2.online/*
// @match        *://*.wiki2.org/*
// @match        *://*.wiki2.wiki/wiki/*
// @match        *://*.wikichi.ru/wiki/*
// @match        *://*.wikidark.ru/*
// @match        *://*.wikies.wiki/wiki/*
// @match        *://*.wikipe.wiki/wiki/*
// @match        *://*.wikipedia-on-ipfs.org/wiki/*
// @match        *://*.wikipedia.tel/*
// @match        *://*.wikipedia24.ru/*
// @match        *://*.wikiredia.ru/*
// @match        *://*.wikiroot.ru/question/*
// @match        *://*.wikivisually.com/wiki/*
// @match        *://*.wikiwand.com/*/*
// @match        *://*.wikizero.com/*/*
// @match        *://*.wujigu.com/*?*=*
// @match        *://*.xbuba.com/*
// @match        *://*.xcv.wiki/*
// @match        *://*.xiu2.net/it/details/*
// @match        *://*.xsprogram.com/content/*
// @match        *://*.xszz.org/*/question-*
// @match        *://*.yingqusp.com/so/*
// @match        *://*.ylhow.com/*
// @match        *://*.younggeeks.in/questions/*
// @match        *://*.yuanmacha.com/*.html
// @match        *://*.zapytay.com/*
// @match        *://*.zsharp.org/*
// @match        *://catchconsole.com/code-example/*
// @match        *://geek-tips.imtqy.com/articles/*/*.html
// @match        *://helpex.vn/question/*
// @match        *://itecnote.com/tecnote/*
// @match        *://phptime.ru/questions/*
// @include      *://qastack.tld/*
// ==/UserScript==
/* jshint esversion: 10 */
/* eslint quotes: ['warn', 'single'] */
/* eslint userscripts/better-use-match: 'off' */
/* eslint no-fallthrough: 'off' */
(async () => {
    'use strict';

    var sitecolor = '#333';
    var lang = 'ru';
    var badCode = false;
    var badImgs = false;
    var _ = undefined;
    var ll, tt;
    const _p = location.pathname;
    const _ps = _p.split('/');
    const _h = location.href;
    /** Checks if a given object is a string */
    var _$s = (s) => typeof s === 'string' || s instanceof String;
    /** Gets the subdomain (host part) of the site */
    var _hp = (p = 3) => (ll = location.hostname.split('.')) && ll[ll.length-p];
    /** Gets the element by a given selector */
    var _t = (s) => document.querySelector(s);
    /** Tests if the path of the site matches the given regex */
    var _c = (r) => r.test(_p);
    /** Redirects to link, if it exists */
    var _go = (s) => s && window.location.replace(s);
    /** Checks if a string is part of the hostname */
    var _hst = (s) => location.hostname.includes(s);
    /** Sets the color for the bottom bar, if it's not set */
    var clr = (c, f) => (sitecolor = (f || sitecolor == '#333') ? c : sitecolor);
    /** Sets the language for translating and searching, if it's not set */
    var lng = (c, f) => (lang = (f || lang == 'ru') ? c : lang);
    /** Gets the last part of a path */
    var lastPathPart = () => _ps.filter(Boolean).slice(-1)[0];
    /** Gets the href attribute (or any other attribute) of a selected element, if it exists */
    var bySel = (s, a = 'href') => _t(s)?.getAttribute(a);
    /** Removes the auxiliary words of the textcontent of: the header if no parameter is given; a element matching the given selector; the first element, if the parameter is an array*/
    var getHeader = (h) => removeAuxiliary(h ? (Array.isArray(h) ? h[0] : textContent(h)) : textContent('h1'));
    /** Get an array of the textcontent of: elements with the tag-class if no parameter is given; elements matching the given selector; or the first element, if the parameter is an array*/
    var getTags = (t) => t ? (Array.isArray(t) ? [t[0]] : allTexts(t)) : allTexts('.tag');
    /** Replaces in a string all occurrences of the first element of an arraygroup with the second */
    var mulreplace = (str, a) => a.forEach((v) => (str = str.replace(v[0], v[1]))) || str;
    /** Creates a Wikipedia link with language and article text or the number of the part in the website url, optionally adding the /wiki/ part */
    var wiki = (l = 0, p = 2, w = true) => 'https://' + (_$s(l) ? l : _ps[l]) + '.wikipedia.org' + (w ? '/wiki/' : '') + (_$s(p) ? p : _ps[p]);
    /** Creates the bottom bar with the text, the code parts and images to search for */
    var prepareSearch = (h, t, s) => promtRedirect(sitecolor, toSearch(h + ' ' + getTags(t).join(' ').replace(/\s+/g, ' '), s), !badCode && allTexts('pre code'), !badImgs && [...new Set([...allAttr('img[src*="://i.stack.imgur.com/"]', 'src'), ...allAttr('a[href*="://i.stack.imgur.com/"]', 'href')])], s);
    /** Translates all tags given as an array */
    var transTags = async (t) => (await yaTranslate(allTexts(t).join(' '), lang)).split(' ');
    /** Creates the Google search link with the slightly aligned text to search for, the sites to search on, optionally searching for images */
    var toSearch = (s, site, i) => (s = dropMarks(s) && s ? 'https://google.com/search?q=' + ((site && Array.isArray(site)) ? (site.length < 1 ? '' : 'site%3A' + site.join('+OR+site%3A') + '+') : 'site%3Astackexchange.com+OR+site%3Astackoverflow.com+') + encodeURIComponent(s) + (i ? '&tbm=isch' : '') : null);
    /** Gets the textcontent of a selected element, if it exists */
    var textContent = (s) => _t(s)?.textContent.trim();
    /** Creates StackOverflow link by article id, optionally mofifying it before */
    var byNumber = (s, radix) => (s = parseInt(s, radix)) && s > 0 ? _go('https://stackoverflow.com/questions/' + s) : null;
    /** Adds surrounding spaces and make the string lowercase, if it exists */
    var normalize = (s) => s && ' ' + s.toLowerCase() + ' ';
    /** Pipes multiple functions after each other */
    var pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
    /** Creates an array of the elements matched by given selector */
    var all = (s) => [...document.querySelectorAll(s)];
    /** Creates an array of the textcontent of all elements matched by given selector */
    var allTexts = (s) => all(s).map(a => a.textContent.trim());
    /** Creates an array of the attributes of all elements matched by given selector */
    var allAttr = (s, t) => all(s).map(a => a[t].trim());
    /** Gets the attribute of a given element, if it exists, and get a specific text part by regex or replace it with anoter text */
    var getAttr = (t, a, r, s = '$1') => (t.hasAttribute(a)) && t.getAttribute(a).replace(r, s);
    /** Removes marks of a string, if it exists */
    var dropMarks = (s) => s && s.replace(/\[(на удержании|on hold|duplikować|duplicado|duplicar|duplikat|dublicate|duplicate|дубликат|закрыто|закрытый|closed|geschlossen|zamknięte|cerrado|重复|repeat)\]\s*$/i, '').trim();
    /** Removes the beginning of a text that precedes a given part */
    var removePartBefore = (t, p) => textContent(t).replace(new RegExp('.*?'+ p), '');
    /** Returns text in parentheses **/
    var fromParentheses = (t) => (ll = t.split("(")) && (ll.length == 1 ? ll[0] : (ll.length == 2 ? ll[1] : ll.slice((ll.length - 2) / 2 + 1).join("(")).slice(0, -1));

    /** Gets the first link by a given selector, that links to an stack exchange site */
    function _tc(s) {
        var allw = ['stackoverflow.com/q','superuser.com/q','mathoverflow.net/q','askubuntu.com/q','stackexchange.com/q'];
        var nods = all(s);
        for (var nod in nods) for (var pt in allw) if(nods[nod]?.href?.indexOf(allw[pt])>=0) return nods[nod].href;
        allw = allw.map(i => i.replace('/q','/a/'));
        for (nod in nods) for (pt in allw) if(nods[nod]?.href?.indexOf(allw[pt])>=0) return nods[nod].href.replace('/a/','/q/');
    }

    /** Gets the image url with the site where the image is from, optionally with by selector and cutting the path */
    function urlByImg(v, s = 'img[src*="/images/content/"]', n = 3) {
        var p = _t(s)?.src;
        if (!p) return;
        var l = (new URL(p)).pathname.split('/')[n];
        return l && (v + l);
    }

    var db = JSON.parse(GM_getValue('b2s') || '{}');
    for (var y in db) if (location.href == db[y][0]) return _go(db[y][1]);

    /** Gets a redirect for the opened site from an online database */
    var dfgdr = fetch(`https://api.zcxv.icu/b2s.php?q=get&url=${encodeURIComponent(_h)}`, { credentials: 'omit' })
        .then(r => r.json())
        .then(r => r.res && r.response && _go(r.response));

    /** Allows the user to specify a url to which the opened site should be redirected */
    GM_registerMenuCommand('Redirect', () => {
        var re = prompt('Enter source url:');
        var dfgdr = re && fetch(
            `https://api.zcxv.icu/b2s.php?q=set&url=${encodeURIComponent(_h)}&redir=${encodeURIComponent(re)}`, {
                method: 'GET', credentials: 'omit'
            });
    });

    /** Adds the given JavaScript code as inline code to the opened site */
    function addJS(code){
        var scriptElm = document.createElement('script');
        var inlineCode = document.createTextNode(code);
        scriptElm.appendChild(inlineCode);
        document.body.appendChild(scriptElm);
    }

    /** Replaces different quote variants, optionally removes them, replaces various control characters */
    function filterText(text, rmquotes) {
        var out = text.replace(/(\u02B9|\u0374|\u2018|\u201A|\u2039|\u203A|\u201B|\u2019)+/g, '\'').replace(/(\u00AB|\u00BB|\u201E|\u201C|\u201F|\u201D|\u2E42)+/g, '"');
        return (rmquotes ? out.replace(/(\'|")+/g, ' ') : out).replace(/ /g, ' ').replace(/(\r|\n)+/g, ' ').replace(/\s\s+/g, ' ').trim().replace(/\.$/, '').trim();
    }

    /** Creates the bottom bar to search for a question */
    async function promtRedirect(bgcolor, link, codef, imgf, site) {
        const dialog = document.createElement('div');
        try {
            document.body.appendChild(dialog);
            const shadowRoot = dialog.attachShadow ?
                dialog.attachShadow({ mode: 'open' }) :
                //@ts-ignore
                dialog.createShadowRoot && dialog.createShadowRoot();
            if (!shadowRoot) throw 'Shadow dom required!';
            shadowRoot.innerHTML = `
<style>
:host{
    position: fixed;
    bottom: 0;
    z-index: 16777271;
    width: 100%;
    color: white;
    background-color: ${bgcolor}!important;
}
.m{
    padding: 14px;
    font-family: Ubuntu,Segoe UI,Optima,Trebuchet MS,-apple-system,BlinkMacSystemFont,sans-serif;
    font-size: 14px;
}
#close-btn{
    float: right;
    cursor: pointer;
}
a{
    color: white;
}
.search-icon{
    font-size: 24px;
    line-height: 0;
    text-decoration: none;
}
</style>
<div class="m">[ Back2Source ]
<a id="ok-btn" href="#">Try to find the original question? <span class="search-icon">&#8981;<span></a> ` +
                (codef && codef.length > 0 ? '<a href="' + toSearch(codef.join(' '), site) + '">[ByCode]</a>' : '') +
                (imgf && imgf.length > 0 ? '<a href="' + toSearch(imgf.join(' '), site, true) + '">[ByImgs]</a>' : '') +
                `<span id="close-btn">&#10006;</span>
</div>`;
            shadowRoot.querySelector('#ok-btn').href = link;
            await new Promise((_, reject) => {
                shadowRoot.querySelector('#close-btn').addEventListener('click', reject);
            });
        } finally {
            document.body.removeChild(dialog);
        }
    }

    //https://yandex.com/dev/translate/doc/dg/concepts/api-overview.html
    /** Translates a slightly aligned text with Yandex from one language to english or any other given language */
    async function yaTranslate(q, sourceLang, targetLang) {
        q = dropMarks(q);
        if (!q) return null;
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=' + (targetLang ? targetLang : 'en') + '&text=' + encodeURIComponent(q) + (sourceLang ? '&fromLang=' + sourceLang : '')
        try {
            //doesn't work in chrome
            return await fetch(q, {
                    mode: 'no-cors',
                    credentials: 'omit'
                })
                .then(r => r.json())
                .then(r => r.text);
        } catch (e) {
            //works only in tampermonkey
            return new Promise((resolve, reject) => {
                //@ts-ignore
                GM_xmlhttpRequest({
                    url: q,
                    responseType: 'json',
                    anonymous: true,
                    onload: (xhr) => {
                        xhr.status === 200 ? resolve(xhr.response.text) : reject(xhr);
                    },
                    onerror: reject
                })
            })
        }
    }

    var auxiliaryRe = null;
    /** Removes auxiliary words of a given string */
    function removeAuxiliary(s) {
        return s && s.replace(auxiliaryRe || (auxiliaryRe = new RegExp([
            'a', 'an', 'the',
            //Conjunctions http://englishgu.ru/soyuzyi-v-angliyskom-yazyike-tablitsa-spisok/
            //https://7esl.com/english-conjunctions/
            'according to', 'after', 'against', 'also', 'although', 'and', 'as far as', 'as if', 'as long as', 'as much as', 'as soon as', 'as though', 'as well as', 'as', 'assuming that', 'at last', 'at least', 'because of', 'because', 'before', 'beyond', 'both', 'but', 'by the time', 'either', 'even if', 'even though', 'for', 'from now on', 'from time to time', 'how', 'however', 'if', 'in case', 'in order', 'in spite of', 'in terms of', 'lest', 'like', 'meanwhile', 'moreover', 'neither', 'nevertheless', 'no matter how', 'no matter what', 'no matter when', 'no matter where', 'no matter who', 'no matter why', 'nor', 'not so as', 'not yet', 'now that', 'on behalf of', 'on condition', 'on the contrary', 'on the other hand', 'once', 'only if', 'or', 'otherwise', 'owing to', 'provided that', 'rather than', 'since', 'so that', 'so', 'still', 'than', 'that is why', 'that', 'therefore', 'though', 'thus', 'till', 'unless', 'unlike', 'until', 'what', 'whatever', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether', 'which', 'whichever', 'while', 'who', 'whoever', 'whom', 'whomever', 'whose', 'with', 'within', 'without', 'yet',
            //some of Preposition https://www.englishclub.com/grammar/prepositions-list.htm
            //https://www.talkenglish.com/vocabulary/top-50-prepositions.aspx
            'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'at', 'behind', 'below', 'beneath', 'beside', 'besides', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'including', 'inside', 'into', 'of', 'off', 'on', 'onto', 'opposite', 'out', 'outside', 'over', 'past', 'per', 'regarding', 'since', 'than', 'through', 'throughout', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'within', 'without',
            //some of https://7esl.com/interjections-exclamations/
            'aah', 'ah', 'aha', 'ahem', 'alas', 'argh', 'aw', 'aww', 'bah', 'behold', 'bingo', 'boo', 'bravo', 'brr', 'dear', 'duh', 'eek', 'eh', 'er', 'eww', 'gah', 'gee', 'grr', 'hah', 'hello', 'hey', 'hi', 'hmm', 'huh', 'hullo', 'humph', 'hurrah', 'meh', 'mhm', 'muahaha', 'nuh-uh', 'oh', 'ooh', 'ooh-la-la', 'oomph', 'oops', 'ouch', 'oww', 'oy', 'pew', 'pff', 'phew', 'psst', 'sheesh', 'shh', 'shoo', 'tsk-tsk', 'uh-hu', 'uh-oh', 'uh-uh', 'uhh', 'um', 'umm', 'wee', 'well', 'whoa', 'wow', 'yahoo', 'yay', 'yeah', 'yikes', 'yippee', 'yoo-hoo', 'yuck', 'yuh-uh', 'zing',
            //modals
            'can', 'could', 'be able to', 'may', 'might', 'shall', 'should', 'must', 'have to', 'will', 'would',
        ].sort((a, b) => b.length - a.length).map(w => `\\W${w}(?!\\w)`).join('|'), 'g')), ' ');
    }

    /**
     * Searches a text with the Stack Exchange API, optionally with a timeframe and the tags
     * @param {string} q
     * @param {Date} [before]
     * @param {Date} [after]
     * @param {string[]} [tags]
     */
    async function findByApi(q, before, after, tags) {
        var dfgdr = (q = dropMarks(q)) && q && fetch(
            `https://api.stackexchange.com/2.2/search?page=1&pagesize=1&order=desc&sort=relevance&intitle=${encodeURIComponent(q)}&site=stackoverflow` +
            (after ? '&fromdate=' + (after.getTime() / 1000 - 120 | 0) : '') +
            (before ? '&todate=' + (before.getTime() / 1000 + 120 | 0) : '') +
            (Array.isArray(tags) && tags.length > 0 ? '&tagged=' + encodeURIComponent(Array.from(new Set(tags)).join(';')) : ''), {
                credentials: 'omit'
            })
            .then(r => r.json())
            .then(r => r?.items[0]?.link);
        return dfgdr;
    }

    /**
     * Takes the slightly aligned text of the header or a given selector, optionally translates it, tries to find it per API and otherwise creates the bottom bar to search for
     * @param {string|array} [h] - header selector (def: 'h1')
     * @param {string|array} [t] - tags selector (def: '.tag')
     * @param {string} [l] - lang (def: none)
     * @param {string} [s] - target site(s) (def: ['stackoverflow.com'])
     */
    async function byHeader(h, t, l, s) {
        var sbh = (l == 'en') ? (Array.isArray(h) ? h[0] : textContent(h ? h : 'h1')) : filterText(await yaTranslate(getHeader(h), l), 1);
        return sbh && (await findByApi(sbh, _, _, getTags(t)) || prepareSearch(sbh, t, s));
    }

    /** Gets the text to search for from a part of the path, tries to find it per API and otherwise creates the bottom bar to search for */
    async function byPath(pos, s) {
        var fbp = _ps[pos].replace(/(-closed|-duplicate)?(\.html)?$/, '').replace(/^\d+-/, '').replace(/[-+]/g, ' ');
        return (await findByApi(fbp)) || prepareSearch(fbp, '', s);
    }

    /** Matches elements by a given selector, searches for elements whose inner text starts with a given search text and returns the link of an element matched by a second given selector or the inner text that follows the search text */
    function startsByText(selector, text, href = false) {
        const e = document.querySelectorAll(selector);
        for (var i = 0; i < e.length; i++) {
            var t = e[i].innerText.trim();
            var f = t.indexOf(text);
            if (f == 0) return (href ? e[i].querySelector(href)?.href : t.substr(text.length).trim());
        }
    }

    /** Matches elements by a given selector, searches for elements whose inner text includes a given search text and returns their link */
    function byInner(selector, text) {
        const e = document.querySelectorAll(selector);
        for (var i = 0; i < e.length; i++) {
            if (e[i].innerText.trim().indexOf(text) >= 0) return e[i].href;
        }
    }

    var link;
    const host = location.hostname.split('.').slice(-2).join('.');
    console.log('Checking site: ' + location.hostname + ' as ' + host);

    switch (host) {
        case '1r1g.com':
            return clr('#343a40') && byHeader();
        case '5axxw.com':
            return byHeader('h1','.badge-tag','zh') && byHeader('h2',_,'zh');
        case '8101010108.cn':
        case 'desarrollo-web-br-bd.com':
        case 'pengembangan-web-mp-pd.com':
        case 'reponse-question-developpement-web-bd.com':
        case 'risposta-alla-domanda-sullo-sviluppo-web-bd.com':
        case 'tra-loi-cau-hoi-phat-trien-web.com':
        case 'web-dev-qa-db-fr.com':
        case 'web-dev-qa-db-ja.com':
        case 'web-gaebal-jilmun-dabbyeon-db.com':
        case 'web-gelistirme-sc.com':
        case 'web-dev-qa-db-pt.com':
            return bySel('.q-source > a');
        case 'amuddycup.com':
        case 'arip-photo.org':
        case 'athabasca-foto.com':
        case 'cfadnc.org':
        case 'culinarydegree.info':
        case 'domainelespailles.net':
        case 'ec-europe.org':
        case 'ecnf2016.org':
        case 'faithcov.org':
        case 'fitforlearning.org':
        case 'fluffyfables.com':
        case 'gupgallery.com':
        case 'noblenaz.org':
        case 'ntcdoon.org':
        case 'ourladylakes.org':
        case 'pakostnici.com':
        case 'panaindustrial.com':
        case 'pcbconline.org':
        case 'projectbackpack.org':
        case 'safehavenpetrescue.org':
        case 'sch22.org':
        case 'sierrasummit2005.org':
        case 'siwib.org':
        case 'sunflowercreations.org':
        case 'theshuggahpies.com':
        case 'waymanamechurch.org':
        case 'zsharp.org':
            var fbip = document.querySelector('meta[property="og:image"]').content.split('/').pop().split('.')[0].replace(/-/g,' ');
            return fbip && (await findByApi(fbip) || prepareSearch(fbip, '', ['stackoverflow.com','superuser.com','askubuntu.com','stackexchange.com']));
        case 'answacode.com':
        case 'asklobster.com':
        case 'bestecode.com':
        case 'bonprog.com':
        case 'cainiaojiaocheng.com':
        case 'codehero.jp': // site offline / empty site / 2022-05-22
        case 'coderquestion.ru':
        case 'coredump.biz':
        case 'gitrush.ru':
        case 'html-agility-pack.net':
        case 'icopy.site':
        case 'issue.life':
        case 'profikoder.com':
        case 'progaide.com':
        case 'progexact.com':
        case 'programqa.com':
        case 'qaru.tech':
        case 'stackfinder.ru':
        case 'thinbug.com':
        case 'xbuba.com': // site offline / site not found / 2022-05-01
            return byNumber(_ps[2]);
        case 'antwortenhier.me':
            lng('de');
        case 'askfrance.me':
            lng('fr');
        case 'respuestas.me':
            lng('es');
        case 'askentire.net':
            clr('#2c3e50') && lng('ru');
            return byHeader('h1', [await transTags('ul.x-tags li a[href*="/t/"]')], lang);
        case 'ask-dev.ru':
        case 'coderoad.in':
            return byPath(3);
        case 'askdev.ru':
            return clr('#970f1b') && urlByImg('https://superuser.com/questions/') || byHeader('h1', [await transTags('.block_taxonomies a')], 'ru');
        case 'askdevz.com':
        case 'askvoprosy.com':
        case 'living-sun.com':
            return byPath(2);
        case 'askubuntu.ru':
            return byHeader('h1', 'nav .col-tag', 'ru', ['askubuntu.com']);
        case 'bcqaw.com':
            return byHeader('h1.article-title', _, 'zh');
        case 'bildiredi.com':
        case 'ciupacabra.com':
        case 'de-vraag.com':
        case 'donolik.com':
        case 'kotaeta.com':
        case 'pytannie.com':
        case 'sozdizimi.com':
        case 'switch-case.com':
        case 'while-do.com':
        case 'zapytay.com':
            return bySel('a.link.block');
        case 'bilee.com':
            clr('#178acc');
        case 'techarks.ru':
            clr('#20a169');
        case 'quares.ru': // site offline / site not found / 2022-05-01
            clr('#fcdb00');
        case 'question-it.com':
            clr('#2c3e50');
        case 'legkovopros.ru':
            return clr('#55b252') && byHeader('h1', '.tag', 'ru');
        case 'catchconsole.com':
            return byHeader([dropMarks(textContent('h1'))], _, 'en');
        case 'cndgn.com':
            return 'https://' + _ps[2].replace(/(.+)stack/,'$1.stackexchange').replace(/^(stack)$/,'$1overflow') + '.com/questions/' + _ps[3];
        case 'codeguides.site':
        case 'stormcrow.dev': // site offline / other content /2022-05-22
            return byNumber(_ps[3]);
        case 'code-examples.net':
        case 'ffff65535.com':
        case 'i-harness.com':
        case 'src-bin.com':
            return byNumber(lastPathPart(), 16);
        case 'codegrepper.com':
            return bySel('.answer_source > a');
        case 'codeindex.ru': // site offline / Cloudflare error / 2022-05-01
        case 'qa-help.ru': // site offline / Cloudflare error / 2022-05-01
            return bySel('span.text-muted.fake_url', 'src') || _tc('.text-muted.small');
        case 'codengineering.ru':
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'codenong.com':
        case 'coderoad.ru':
        case 'coderoad.wiki': // site offline / Cloudflare error / 2022-05-01
        case 'quabr.com':
            return byNumber(_ps[1]);
        case 'coder.work':
            return bySel('div>p>a[rel="noreferrer noopener nofollow"]') || startsByText('p', 'stackoverflow链接', 'a[href*="stackoverflow.com"]') || startsByText('p', 'stackoverflow原址', 'a[href*="stackoverflow.com"]') || byHeader('h1', _/*'div[style="width: 100%;"] a[href*="/blog?tag="]'*/, 'zh');
        case 'coderedirect.com': // site redirects to fullstackuser.com / 2022-05-22
        case 'fullstackuser.com':
            return byHeader('h1', '.custom-head .post-tag', 'en');
        case 'codersatellite.com': // site offline / timeout / 2022-05-01
            return byNumber(_ps[1].split('-')[3]);
        case 'debugcn.com':
            lng(_ps[1] == 'article' ? 'zh' : _ps[1]);
        case 'debugko.com':
        case 'jablogs.com':
            lng('ja');
        case 'xsprogram.com':
            lng('en');
            return byHeader('h1', _, lang);
        case 'devdreamz.com':
            return byHeader('h1','[class^="ButtonTags_tags_container"] a', 'en');
        case 'developreference.com':
            var parts = document.title.split(' - ');
            var devpref = _ps[3].replace(/[-+]/g, ' ').replace(/(%ef|%bc|%9f)+$/i, '');
            return (await findByApi(devpref)) || (await findByApi(parts[0], _, _, [parts.pop()])) || promtRedirect(sitecolor, toSearch(devpref));
        case 'devfaq.fr':
            return byHeader('h1', '.badge-info', 'fr');
        case 'e-learn.cn':
            return startsByText('div.content p:last-child', '来源：');
        case 'editcode.net':
            return byHeader([removePartBefore('h1', ':')], _,'en');
        case 'edupro.id':
            lng('id');
        case 'younggeeks.in':
            lng('hi');
            return clr('#2c3e50') && byHeader('h1', '.tag', lang);
        case 'exceptionshub.com': // site offline / Cloudflare error / 2022-05-01
            return _c(/\.html$/) && byPath(1);
        case 'extutorial.com':
            return byHeader('h1', 'a[href*="/tags/"]', 'en');
        case 'fixes.pub':
            return byHeader('h1', 'aside li a[href*="fixes.pub/topics"]', 'ja');
        case 'ghcc.net':
            return _go([...document.querySelectorAll('.clearfix code')].pop().innerHTML);
        case 'helpex.vn':
            return _t('#viewSource>span')?.innerText.replace(/^: /,'');
        case 'howtobuildsoftware.com':
            return byHeader([removePartBefore('title',' - ')], '#list .email-content-subtitle a', 'en');
        case 'imtqy.com':
            return byHeader('.question-header>h1', _, 'en');
        case 'intellipaat.com':
            return byHeader('h1', '.qa-q-view-tag-item', 'en');
        case 'itectec.com':
            return byHeader([removePartBefore('h1', ' – ')], '.badge','en', ['askubuntu.com','mathoverflow.net','serverfault.com','stackexchange.com','stackoverflow.com','superuser.com']);
        case 'javaer101.com':
            return byHeader('h1', 'nav .col-tag', _ps[1] == 'article' ? 'ja' : _ps[1]);
        case 'jike.in':
        case 'ostack.cn':
        case 'qi-u.com':
        case 'wujigu.com':
            var jt = textContent('h1').split(' - ');
            tt = removePartBefore('h1',' - ');
            if(tt.match(/[\u4e00-\u9fa5]{2,}/)) tt = fromParentheses(tt); //if detected chinese symbols, then we need to extract text from the parentheses
            return byHeader([dropMarks(tt)], _, 'en');
        case 'jscodetips.com':
            return byHeader('h1', '.contentBox > div:nth-child(3) > a', 'en');
        case 'kompsekret.ru':
            return clr('#292d2f') && (urlByImg('https://superuser.com/questions/') || byHeader([lastPathPart().replace(/(-closed|-duplicate)?(\d+)?(\.html)?$/, '').replace(/-/g, ' ')], '.tags a', 'en', ['superuser.com']));
        case 'localcoder.org':
            return byHeader('h1', '.categories a', 'en');
        case 'mlink.in':
        case 'sqlite.in':
            if(!_t('h1 a')) return;
            badImgs = true;
            return bySel('a[rel="nofollow"][target="_blank"]') || byHeader([_t('.qa-main-heading h1').innerText.replace(/^(\s+)?([a-z])+\s-/, '').trim()], '.qa-q-view-main .qa-tag-link', 'en', '');
        case 'microeducate.tech':
        case 'programmierfrage.com':
        case 'routinepanic.com':
            return _tc('a');
        case 'mediatagtw.com':
            if (_ps[1] == 'article') _go(bySel('#social_only > h3 > a'));
            if (_ps[1] == 'exit') _go(bySel('.h5 > a'));
            break;
        case 'mlog.club':
            addJS('var redir = window.__NUXT__.data[0].article.sourceUrl; redir && window.location.replace(redir);');
            return lng('zh') && byHeader('h1', [await transTags('.article-tag')], 'zh');
        case 'newbedev.com':
            return _t('article') && byHeader('h1', 'h4.tags a.item-tag', 'en', ['superuser.com', 'serverfault.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'overstack.in':
            return byHeader([removePartBefore('h1',' - ')], _, 'en');
        case 'itecnote.com':
            return byHeader([removePartBefore('h1',' – ').replace(/How to/, '')], _, 'en');
        case 'phptime.ru':
            return _go(bySel('.float-right>small>a.text-muted'));
        case 'poweruser.guru':
            return _t('div.post-menu a.suggest-edit-post[href*="superuser.com/questions/"]');
        case 'progi.pro':
            return clr('#4e82c2') && byHeader('h1[itemprop="name"]', '.tag-list a', 'ru');
        case 'proubuntu.ru':
            return byHeader('h1>a>span[itemprop="name"]', [await transTags('a[rel="tag"]')],'ru', ['askubuntu.com']);
        case 'qapicks.com':
            return byNumber(_ps[2].split('-')[0]);
        case 'questu.ru':
            return byInner('a', 'источник');
        case 'recalll.co': // site offline / site not found / 2022-05-01
            return _t('div.label-wrap a[href*="stackoverflow.com/"][target="_blank"]')?.href || byHeader('h2#mainTitle', 'a[href*="/tags/"]', 'en');
        case 'reddit.fun':
            return byHeader('h1', '.qa-q-view-tags .qa-tag-link', 'en');
        case 'ruphp.com':
            return byHeader('h1', '.breadcrumb-item .badge a', 'ru');
        case 'semicolonworld.com':
            return byHeader('h1', '.post__category', 'en');
        case 'sobrelinux.info':
            return byHeader('h1', '.tags .tag a', 'pt', ['superuser.com', 'serverfault.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'soinside.com':
            return clr('#333') && byHeader('h1', '.q-tag', 'zh');
        case 'stackanswers.net':
            clr('#999') && lng('en');
            return location.hostname.startsWith('publish.') && all('.panel-body a')[1].href;
        case 'stackoom.com':
            return byNumber(document.querySelector('[id^=question_content_]').id.split('_')[2]);
        case 'stackoverflood.com':
            return (tt = _h.match(/^https?:\/\/stackoverflood\.com\/([a-zA-Z]{2})\/q\/(.+)/)) && byNumber(tt[2]);
        case 'string.quest':
            return byHeader([removePartBefore('h1', ' - ')], '.tag-links a', 'zh');
        case 'sysadminde.com':
            return 'https://serverfault.com/questions/' + _ps[2];
        case 'techfeed.net':
            return byHeader('main h1', '.tag', 'ru');
        case 'tencent.com':
            return byHeader('.ask-title h2', _, 'zh');
        case 'tipsfordev.com':
            return byHeader('h1', '.blog-pagination > a', 'en');
        case 'tousu.in':
            return byHeader([removePartBefore('h1',' - ')], _, 'en');
        case 'tutorialmore.com':
            return byHeader([removePartBefore('h1',' - ')], '.tags a', 'ja', ['superuser.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'utyatnishna.ru':
            return byHeader('h1.entry-title', '.tag', 'ru');
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'wekeepcoding.com':
            return byHeader('h4', _, 'en');
        case 'webdevdesigner.com':
            var wdd = (_ps[1] == 'q' ? _ps[2] : _ps[1].replace(/^q-/, '')).replace(/-\d+$/, '').replace(/-/g, ' ');
            return (await findByApi(wdd)) || prepareSearch(wdd, '.tags a', ['superuser.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'wikiroot.ru':
            tt = _t('section section div.footer-post div.d-inline-block button');
            tt = tt && (getAttr(tt, 'data-url', /https?:\/\/wikiroot\.ru\/comment\/new\/([0-9]+)/) || getAttr(tt, 'data-target', /#buttoncollapse-([0-9]+)/));
            return tt ? 'https://superuser.com/questions/' + tt : byHeader('h1', 'ul.tags-list li a', 'ru');
        case 'xiu2.net':
            addJS('var redir = window.__NUXT__.data[0].info.sourceUrl; redir && window.location.replace(redir);');
            return lng('zh') && byHeader('h1', '.contents .tag-time a[href*="/it/tag/"]', 'zh');
        case 'xszz.org':
            return clr('#ff6f06') && byHeader('.post-h1title h1', 0, 'en');
        case 'ylhow.com':
            return (tt = _t('.entry-content > p > a[href*="stackoverflow.com/"]')) && tt.innerText.includes('原文') && tt.href;
        case 'yuanmacha.com':
            return (ll = _t('h1')?.innerHTML.match(/\((.+)\)/)) && byHeader([ll[1]], '.tag a', 'en', ['stackoverflow.com']);
        /* Wikipedia */
        case '360wiki.ru':
        case 'buildwiki.ru':
        case 'datewiki.ru':
        case 'hmong.ru':
        case 'hmong.wiki':
        case 'livepcwiki.ru':
        case 'nwikiit.cyou':
        case 'vvikipedla.com':
        case 'wiki2.wiki':
        case 'wikichi.ru':
        case 'wikivisually.com':
            return wiki('en', 2);
        case 'abcdef.wiki':
            return wiki('en', _p, false);
        case 'encyclopaedia.bid':
            return wiki('ru', _p.replace(/^\/%D0%B2%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F/, '/wiki'), false);
        case 'encyclopedia.kz':
            return _hst('ru.encyclopedia.kz') && wiki('ru', 2);
        case 'gaz.wiki':
            return wiki('en', 3);
        case 'jejakjabar.com': // all pages 404 / 2022-05-01
            return (tt = _h.match(/https?:\/\/([a-zA-z]+\.)?jejakjabar\.com\/wiki\/(.+)/)) && wiki('en', tt[2]);
        case 'mihalicdictionary.org': // site offline / site not found / 2022-05-01
            return (tt = _h.match(/https?:\/\/([a-zA-Z]{2})?\.?mihalicdictionary\.org(.+)/)) && wiki(tt[1], tt[2], false);
        case 'nina.az':
            return (tt = _h.match(/https?:\/\/wikipedia\.(([a-z]{2})\.)?nina\.az\/wiki\/(.+)/)) && wiki(mulreplace(tt[2], [ ['ua', 'uk'], ['us', 'en'] ]), tt[3]);
        case 'rudata.ru':
            return bySel('a.external[href*="ru.wikipedia.org"]');
        case 'sbup.com':
        case 'wiki-org.ru':
        case 'wikiredia.ru':
            return wiki('ru', _p, false);
        case 'territorioscuola.it':
            return (tt = _h.match(/https?:\/\/enhancedwiki\.territorioscuola\.it\/\?title=(.+)/)) && wiki('it', tt[1]);
        case 'wiki-wiki.ru':
            return wiki('ru', 3);
        case 'wiki.cologne':
        case 'wiki2.info':
        case 'wiki2.online': // other content / 2022-05-01
        case 'wikipedia24.ru':
            return _t('.mw-parser-output') && wiki('ru', 1);
        case 'wiki2.net':
        case 'wikipedia.tel':
            return 'https://ru.wikipedia.org/wiki' + _p;
        case 'wiki2.org':
            if (/\?search=/.test(location.search)) return;
            return (tt = _h.match(/https?:\/\/(([a-z]{2})\.)?wiki2\.org\/([a-zA-z]{2})\/(.+)/)) && wiki(tt[3], '/wiki/' + tt[4], false);
        case 'wikidark.ru':
            return _go('https://ru.wikipedia.org' + _p + location.search);
        case 'wikies.wiki':
        case 'wikipe.wiki':
            return wiki(2, 3);
        case 'wikipedia-on-ipfs.org':
            return wiki(_hp(3), 2);
        case 'wikiwand.com':
            return !(/(\?|&)fullSearch=(true|false)/.test(location.search)) && wiki(1, 2);
        case 'wikizero.com':
            return wiki(1, 2);
        case 'xcv.wiki':
            return (tt = _h.match(/https?:\/\/([a-zA-z]{2,4})\.xcv\.wiki\/wiki\/(.+)/)) && wiki('de', tt[2]);
        /* GitHub */
        case 'bytemeta.vip':
        case 'githubhot.com':
        case 'githubmemory.com':
            return _c(/^\/(repo\/|@)/) && _go('https://github.com' + _p.replace(/^\/(repo\/|@)/,'/'));
        case 'codefactor.io':
            document.addEventListener('DOMContentLoaded', (e)=>{
                if (_ps[2]=='github' && _ps[5]=='source') return _go(bySel('a[title^="View on"]') + '/blob/' + _ps.splice(6).join('/'));
                return _go(bySel('a.page-title-link') || bySel('a[analytics-event^="View file on"]') || bySel('a[title^="View on"]'));
            });
            break;
        case 'giters.com':
            return _go('https://github.com' + _p);
        case 'githublab.com':
            return _go('https://github.com' + _p.replace(/^\/(repository|profile)/,'').replace(/^(\/issues)(\/.*\/.*)(\/.*)/,'$2$1$3').replace(/^(\/issues)(\/.*\/.*)/,'$2$1'));
        case 'higithub.com':
            return _go('https://github.com' + _p.replace(/\/(repo\/|user$)/,'/').replace(/^(\/.*)(\/issue)(\/.*)(\/.*)/,'$1$3$2s$4').replace(/^(\/.*)\/repo_(issues)(\/.*)/,'$1$3/$2'));
        case 'issueantenna.com':
            return _go('https://github.com' + _p.replace(/^\/(repo|author)/,''));
        case 'issueexplorer.com': // other content / 2022-05-01
            return _go('https://github.com' + _p.replace(/^\/repo/,''));
        case 'jsrepos.com':
            return _go(bySel('article.markdown-body>a[rel="nofollow"]:last-child'));
        case 'lifesaver.codes':
            return byInner('a[role="link"]','Original');
        /* Other */
        case 'dir.md':
            return (tt = _h.match(/^https?:\/\/dir.md\/(.+)(&|\?)host=([a-zA-Z\.-]+)$/)) && _go('https://' + tt[3] + '/' + tt[1]);
        case 'icode9.com':
            return _go(textContent('#paragraph > p:last-child').split('来源：', 2)[1].trim());
        case 'it-brain.online':
            return 'https://tutorialspoint.com/' + _ps[2];
        case 'itdaan.com':
            return _go(bySel('input[name="url"]', 'value'));
        case 'itnan.ru':
            return _h.match(/https?:\/\/([a-zA-Z]{2})?\.?itnan\.ru\/post\.php\?(.+)?p=([0-9]+)/) && bySel('article.entry .entry-meta a[title="Оригинальная публикация"]');
        case 'npmmirror.com':
            return _go('https://www.npmjs.com'+_p);
        case 'savepearlharbor.com':
            return bySel('article.post > div.entry-content > p > a[href*="://habr.com/"]');
        case 'snyk.io':
            return _go('https://www.npmjs.com/'+_ps[3]);
        default:
            if (_hst('qastack') || _hst('qa-stack')) {
                return bySel('span.text-muted.fake_url a, span.text-muted.fake_url', 'src') ||
                    bySel('.text-muted a:last-child[href*="stackoverflow.com/"],.text-muted a:last-child[href*="stackexchange.com/"],.text-muted a:last-child[href*="serverfault.com/"],.text-muted a:last-child[href*="superuser.com/"],.text-muted a:last-child[href*="mathoverflow.net/"]') ||
                    ((tt = _h.match(/https?:\/\/qa-?stack\.([a-z\.]+)\/([a-z]+)\/([0-9]+)\/(.+)/)) && 'https://' + tt[2] + '.stackexchange.com/questions/' + tt[3] + '/' + tt[4]);
            } else if (_hst('stackfinder.jp.net')) {
                return byNumber(_ps[2]);
            } else if (_hst('webentwicklung-frage-antwort-db.com.de')) {
                return bySel('.q-source > a');
            } else {
                console.log('check by selectors');
                const cssSelectors = {
                    '4answered.com': '.view_body span a',
                    'answer-id.com': 'a.link', // redirects to de-vraag.com / 2022-05-22
                    'answeright.com': 'a.link',
                    'ask-ubuntu.ru': '.q-source',
                    'askcodez.com': '.orli a',
                    'askdev.info': '.question-text > .a-link', // site offline / site not found / 2022-05-01
                    'catwolf.org': '.text-left.small > a',
                    'codefaq.info': '.aa-link',
                    'codefaq.ru': '.aa-link',
                    'codegear.dev': 'p.text-right > a',
                    'e-learn.cn': '.zhuanzai + div a',
                    'fooobar.com': '.question-text > .aa-link', // all pages 404 / 2022-05-01
                    'generacodice.com': '#fontePrincipale > a.link',
                    'howtosolves.com': '#question .question .source a',
                    'husl.ru': '.source-link',
                    'isolution.pro': '.box-body div:nth-child(3) .pull-right',
                    'itranslater.com': '.body > div:last-child > a',
                    'iquestion.pro': '.box-body div:nth-child(3) .pull-right',
                    'jpdebug.com': '.text-warning',
                    'knews.vip': '.box-body div:nth-child(3) .pull-right',
                    'narkive.jp': '#postq > div > div > a',
                    'nuomiphp.com': '.alert-warning a',
                    'overcoder.net': '.info_outlink',
                    'overcoder.ru': '.info_outlink',
                    'prog-help.ru': '.eclip > a',
                    'programmerz.ru': '.source-share-link',
                    'py4u.net': '.question .author .src a', // site offline / site not found / 2022-05-01
                    'pythonq.com':'a[style="color:red"]', // site offline / site not found / 2022-05-01
                    'qacode.ru': '.question-info .cc-link', // all pages 404 / 2022-05-01
                    'qarchive.ru': 'cite > a',
                    'qarus.ru': 'em > a',
                    'qna.one': '.page-container-question .source-share-block a',
                    'rstopup.com': '.td-post-content .origlink > a',
                    'serveanswer.com':'a[title="Source"]',
                    'sprosi.pro': '#qsource > a',
                    'stackguides.com': 'a[title="Go to Source post"]',
                    'stackovergo.com': '.qeditacti a:nth-child(2)',
                    'stackru.com': '.q-source',
                    'try2explore.com': 'div.tagsandsource span.source a[target="_blank"]', // site offline / site not found / 2022-05-01
                    'ubuntugeeks.com': '.question-text > .a-link', // site offline / site not found / 2022-05-01
                    'ubuntuaa.com': '.post-info a',
                    'uwenku.com': '.post-info a', // site offline / site not found / 2022-05-01
                    'voidcc.com': '.source > a',
                    'web-answers.ru': '.source > a',
                    'yingqusp.com': '.container>div>div>div>p>a'
                };
                link = cssSelectors[host] && _tc(cssSelectors[host]);
                console.log(link);
            }
    }
    return link;
})().then(link => {
    /** Saves the redirect to an online database */
    var sredir = (r) => r && fetch(`https://api.zcxv.icu/b2s.php?q=set&url=${encodeURIComponent(location.href)}&redir=${encodeURIComponent(r)}`, { method: 'GET', credentials: 'omit' });

    /** Saves the url and the source url in a local db */
    function cbufw(u, s) {
        var count = 10;
        var pos = GM_getValue('b2s-pos') || 0;
        var db = JSON.parse(GM_getValue('b2s') || '{}');
        pos = pos > count ? 0 : ++pos;
        GM_setValue('b2s-pos', pos);
        db[pos] = [u, s];
        GM_setValue('b2s', JSON.stringify(db));
    }

    /** Saves the redirect online and local, redirects to source */
    function run(u, s) {
        console.log('Redirect link: ' + u) || sredir(u);
        cbufw(location.href, u) || window.location.replace(u);
    }

    /** Fixes incorrect link parts */
    var fix = (a, b, s = 0) => (link.match(a)) ? (run(link.replace(a, b), s) || true) : false;

    link = link?.href ?? link;
    console.log('Result link: ' + link);
    if (!link || typeof link !== 'string') return;
    if (link.includes('wikipedia.org/wiki/wiki')) link = link.replace(/wikipedia\.org\/wiki\/wiki/, 'wikipedia.org/wiki');

    //valid links
    if (/^https?:\/\/((pt|ja|ru|es)\.)?stackoverflow\.com\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(([a-zA-z\-]+\.)?)stackexchange\.com\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(superuser\.com|askubuntu\.com|mathoverflow\.net|serverfault.com)\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(([a-zA-z\-]+\.)?)(habr\.com|geektimes\.ru)\/(.+)/.test(link)) {
        return run(link, 1);
    }
    if (/^https?:\/\/(([a-zA-z\-]+\.)?)wikipedia\.org\/wiki\/(.+)/.test(link) ||
        /^https?:\/\/github\.com\/(.+)?/.test(link) ||
        /^https?:\/\/tutorialspoint\.com\/(.+)/.test(link)) {
        return run(link);
    }
    fix(/^https?:\/\/((pt|ja|ru|es)\.)?stackoverflow\.com\/([a-z]+)\/([0-9]{1,12})/, 'https://$1stackoverflow.com/questions/$4', 1) ||
        fix(/^https?:\/\/([a-z]+\.)?stackexchange\.com\/q\/([0-9]{1,12})/, 'https://$1stackexchange.com/questions/$2', 1) ||
        fix(/^https?:\/\/([a-z]+\.)?stackexchange\.com\/([a-z]+)\/([0-9]{1,12})/, 'https://$2.stackexchange.com/questions/$3', 1) ||
        fix(/^https?:\/\/([a-z]+\.)?(superuser\.com|askubuntu\.com|mathoverflow\.net|serverfault.com)\/([a-z]+)\/([0-9]{1,12})/, 'https://$1$2/questions/$4', 1) ||
        fix(/^https?:\/\/([a-z]+\.)?wikipedia\.org\/w\/index\.php\?title=(.+)&oldid=([0-9]{1,12})/, 'https://$1wikipedia.org/wiki/$2');

}).catch(console.error.bind(console));
