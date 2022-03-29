// ==UserScript==
// @name         Back2source
// @version      0.1.88
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
// @match        *://*.360wiki.ru/wiki/*
// @match        *://*.abcdef.wiki/*
// @match        *://*.answacode.com/questions/*
// @match        *://*.answer-id.com/*
// @match        *://*.answeright.com/*
// @match        *://*.ask-ubuntu.ru/questions/*
// @match        *://*.askdev.info/questions/*
// @match        *://*.askdev.ru/q-*
// @match        *://*.askdev.ru/q/*
// @match        *://*.askentire.net/q/*-*
// @match        *://*.askubuntu.ru/questions/*
// @match        *://*.askvoprosy.com/voprosy/*
// @match        *://*.bcqaw.com/*.html
// @match        *://*.bildiredi.com/*
// @match        *://*.bilee.com/*.html
// @match        *://*.buildwiki.ru/wiki/*
// @match        *://*.ciupacabra.com/*
// @match        *://*.code-examples.net/*/q/*
// @match        *://*.codegear.dev/*/questions/*
// @match        *://*.codegrepper.com/*
// @match        *://*.codeindex.ru/q/*
// @match        *://*.codengineering.ru/q/*
// @match        *://*.codenong.com/*
// @match        *://*.coderedirect.com/*
// @match        *://*.coderoad.ru/*
// @match        *://*.coderoad.in/questions/*
// @match        *://*.coderoad.wiki/*
// @match        *://*.coderquestion.ru/q/*
// @match        *://*.codersatellite.com/question-with-identifier-*
// @match        *://*.coder.work/article/*
// @match        *://*.coredump.biz/questions/*
// @match        *://*.datewiki.ru/wiki/*
// @match        *://*.de-vraag.com/*
// @match        *://*.developpaper.com/*
// @match        *://*.developreference.com/*
// @match        *://*.devfaq.fr/question/*
// @match        *://*.dir.md/*
// @match        *://*.donolik.com/*
// @match        *://*.e-learn.cn/topic/*
// @match        *://*.encyclopaedia.bid/*
// @match        *://*.exceptionshub.com/*
// @match        *://*.extutorial.com/ask/*
// @match        *://*.fluffyfables.com/*
// @match        *://*.fixes.pub/*/*.html
// @match        *://*.fooobar.com/questions/*
// @match        *://*.gaz.wiki/wiki/*
// @match        *://*.generacodice.com/*
// @match        *://*.giters.com/*
// @match        *://*.githubhot.com/*
// @match        *://*.githublab.com/*/*
// @match        *://*.githubmemory.com/*
// @match        *://*.gitrush.ru/*/*/*
// @match        *://*.hmong.wiki/wiki/*
// @match        *://*.higithub.com/*/*
// @match        *://*.hmong.ru/wiki/*
// @match        *://*.howtosolves.com/q/*
// @match        *://*.husl.ru/questions/*
// @match        *://*.icode9.com/*
// @match        *://*.intellipaat.com/community/*/*
// @match        *://*.issue.life/questions/*
// @match        *://*.issueexplorer.com/repo/*/*
// @match        *://*.issueantenna.com/*/*
// @match        *://*.it-brain.online/question/*
// @match        *://*.it-roy-ru.com/*/*
// @match        *://*.it-swarm.it/*/*
// @match        *://*.it-swarm-id.com/*/*
// @match        *://*.it-swarm-vi.com/*/*
// @match        *://*.it-swarm.asia/*/*
// @match        *://*.it-swarm.com.de/*/*
// @match        *://*.it-swarm.com.ru/*/*
// @match        *://*.it-swarm.cn/*/*
// @match        *://*.it-swarm.dev/*/*
// @match        *://*.it-swarm-es.com/*/*
// @match        *://*.it-swarm-fr.com/*/*
// @match        *://*.it-swarm-ja.com/*/*
// @match        *://*.it-swarm.net/*/*
// @match        *://*.it-swarm.xyz/*/*
// @match        *://*.itnan.ru/post.php*
// @match        *://*.itdaan.com/*
// @match        *://*.itranslater.com/qa/details/*
// @match        *://*.javaer101.com/article/*
// @match        *://*.jejakjabar.com/wiki/*
// @match        *://*.jsrepos.com/*/*
// @match        *://*.kompsekret.ru/q/*
// @match        *://*.kotaeta.com/*
// @match        *://*.legkovopros.ru/questions/*
// @match        *://*.livepcwiki.ru/wiki/*
// @match        *://*.mihalicdictionary.org/*
// @match        *://*.mlink.in/*
// @match        *://*.mlog.club/article/*
// @match        *://*.newbedev.com/*
// @match        *://*.*.nina.az/wiki/*
// @match        *://*.overcoder.net/q/*
// @match        *://*.overcoder.ru/q/*
// @match        *://*.poweruser.guru/*
// @match        *://*.prog-help.ru/*
// @match        *://*.progi.pro/*
// @match        *://*.py4u.net/discuss/*
// @match        *://*.qa-help.ru/*
// @match        *://*.qacode.ru/questions/*
// @match        *://*.qarchive.ru/*
// @match        *://*.qaru.tech/questions/*
// @match        *://*.qarus.ru/*
// @match        *://*.qastack.cn/*
// @match        *://*.qastack.co.in/*
// @match        *://*.qastack.com.br/*
// @match        *://*.qastack.com.de/*
// @match        *://*.qastack.com.ua/*
// @match        *://*.qastack.fr/*
// @match        *://*.qastack.id/*
// @match        *://*.qastack.in.th/*
// @match        *://*.qastack.info.tr/*
// @match        *://*.qastack.it/*
// @match        *://*.qastack.jp/*
// @match        *://*.qastack.kr/*
// @match        *://*.qastack.lk/*
// @match        *://*.qastack.mx/*
// @match        *://*.qastack.net.bd/*
// @match        *://*.qastack.pl/*
// @match        *://*.qa-stack.pl/*
// @match        *://*.qastack.ru/*
// @match        *://*.qastack.vn/*
// @match        *://*.quabr.com/*
// @match        *://*.quares.ru/?id=*
// @match        *://*.question-it.com/questions/*
// @match        *://*.recalll.co/*
// @match        *://*.rudata.ru/wiki/*
// @match        *://*.ruphp.com/*.html
// @match        *://*.sbup.com/wiki/*
// @match        *://*.serveanswer.com/questions/*
// @match        *://*.savepearlharbor.com/?p=*
// @match        *://*.sobrelinux.info/questions/*
// @match        *://*.soinside.com/question/*
// @match        *://*.sprosi.pro/questions/*
// @match        *://*.stackanswers.net/questions/*
// @match        *://*.stackoom.com/question/*
// @match        *://*.stackoverflood.com/*
// @match        *://*.stackru.com/questions/*
// @match        *://*.stormcrow.dev/*/questions/*
// @match        *://*.sqlite.in/*
// @match        *://*.switch-case.com/*
// @match        *://*.techarks.ru/qa/*
// @match        *://*.techfeed.net/*
// @match        *://*.territorioscuola.it/*
// @match        *://*.thinbug.com/q/*
// @match        *://*.try2explore.com/*
// @match        *://*.ubuntugeeks.com/questions/*
// @match        *://*.utyatnishna.ru/info/*
// @match        *://*.uwenku.com/question/*
// @match        *://*.v-resheno.ru/*
// @match        *://*.voidcc.com/question/*
// @match        *://*.vvikipedla.com/wiki/*
// @match        *://*.web-answers.ru/*/*
// @match        *://*.webdevqa.jp.net/*/*
// @match        *://*.while-do.com/*
// @match        *://*.wiki-org.ru/*
// @match        *://*.wiki-wiki.ru/wp/*
// @match        *://*.wiki2.net/*
// @match        *://*.wiki2.online/*
// @match        *://*.wiki2.info/*
// @match        *://*.wiki2.org/*
// @match        *://*.wiki.cologne/*
// @match        *://*.wiki2.wiki/wiki/*
// @match        *://*.wikichi.ru/wiki/*
// @match        *://*.wikies.wiki/wiki/*
// @match        *://*.wikipe.wiki/wiki/*
// @match        *://*.wikipedia-on-ipfs.org/wiki/*
// @match        *://*.wikipedia.tel/*
// @match        *://*.wikidark.ru/*
// @match        *://*.wikiredia.ru/*
// @match        *://*.wikipedia24.ru/*
// @match        *://*.wikiroot.ru/question/*
// @match        *://*.wikivisually.com/wiki/*
// @match        *://*.wikiwand.com/*/*
// @match        *://*.wikizero.com/*/*
// @match        *://*.xbuba.com/*
// @match        *://*.xiu2.net/it/details/*
// @match        *://*.xcv.wiki/*
// @match        *://*.xszz.org/*/question-*
// @match        *://*.ylhow.com/*
// @match        *://*.yuanmacha.com/*.html
// @match        *://*.zapytay.com/*
// @match        *://antwortenhier.me/*
// @match        *://askfrance.me/*
// @match        *://cloud.tencent.com/developer/ask/*
// @match        *://code.i-harness.com/*/q/*
// @match        *://html-agility-pack.net/knowledge-base/*
// @match        *://qa.1r1g.com/sf/ask/*
// @match        *://respuestas.me/*
// @match        *://ru.encyclopedia.kz/index.php/*
// @match        *://proubuntu.ru/*/*
// @match        *://pythonq.com/*/*/*
// ==/UserScript==
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
    var _$s = (s) => typeof s === 'string' || s instanceof String; //is_string
    var _hp = (p=3) => (ll = location.hostname.split('.')) && ll[ll.length-p];//get_subdomain (host part)
    var _t = (s) => document.querySelector(s);
    var _c = (r) => r.test(_p);
    var _go = (s) => s && window.location.replace(s);
    var _hst = (s) => location.hostname.includes(s);
    var clr = (c, f) => (sitecolor = (f || sitecolor == '#333') ? c : sitecolor);
    var lng = (c, f) => (lang = (f || lang == 'ru') ? c : lang);
    var lastPathPart = () => _ps.filter(Boolean).slice(-1)[0];
    var bySel = (s, a = 'href') => _t(s)?.getAttribute(a);
    var getHeader = (h) => removeAuxiliary(h ? (Array.isArray(h) ? h[0] : textContent(h)) : textContent('h1'));
    var getTags = (t) => t ? (Array.isArray(t) ? t[0] : allTexts(t)) : allTexts('.tag');
    var mulreplace = (str, a) => a.forEach((v) => (str = str.replace(v[0], v[1]))) || str;
    var wiki = (l = 0, p = 2, w = true) => 'https://' + (_$s(l) ? l : _ps[l]) + '.wikipedia.org' + (w ? '/wiki/' : '') + (_$s(p) ? p : _ps[p]);
    var prepareSearch = (h, t, s) => promtRedirect(sitecolor, toSearch(h + ' ' + getTags(t).join(' ').replace(/\s+/g, ' '), s), !badCode && allTexts('pre code'), !badImgs && [...new Set([...allAttr('img[src*="://i.stack.imgur.com/"]', 'src'), ...allAttr('a[href*="://i.stack.imgur.com/"]', 'href')])]);
    var transTags = async (t) => (await yaTranslate(allTexts(t).join(' '), lang)).split(' ');
    var toSearch = (s, site) => (s = dropMarks(s) && s ? `https://google.com/search?q=` + ((site && Array.isArray(site)) ? (site.length < 1 ? '' : `site%3A` + site.join('+OR+site%3A') + `+`) : `site%3Astackexchange.com+OR+site%3Astackoverflow.com+`) + encodeURIComponent(s) : null);
    var textContent = (selector) => _t(selector)?.textContent.trim();
    var byNumber = (s, radix) => (s = parseInt(s, radix)) && s > 0 ? _go('https://stackoverflow.com/questions/' + s) : null;
    var normalize = (s) => s && ' ' + s.toLowerCase() + ' ';
    var pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
    var all = (s) => Array.prototype.slice.call(document.querySelectorAll(s));
    var allTexts = (s) => all(s).map(a => a.textContent.trim());
    var allAttr = (s, t) => all(s).map(a => a[t].trim());
    var getAttr = (t, a, r, s = '$1') => (t.hasAttribute(a)) && t.getAttribute(a).replace(r, s);
    var dropMarks = (s) => s && s.replace(/\[(на удержании|on hold|duplikować|duplicado|duplicar|duplikat|dublicate|duplicate|дубликат|закрыто|закрытый|closed|geschlossen|zamknięte|cerrado|重复|repeat)\]\s*$/i, '').trim();
    var fromBrackets = (h = 'h1', t, l, s) => (ll = _t(h)?.innerHTML.match(/\(([a-zA-Z-_ ])+\)/)) && byHeader([ll[0]], t, l, s);

    function _tc (s) {
        var allw = ['stackoverflow.com/q','superuser.com/q','mathoverflow.net/q','askubuntu.com/q','stackexchange.com/q'];
        var nods = all(s);
        for (var nod in nods) for (var pt in allw) if(nods[nod]?.href?.indexOf(allw[pt])>=0) return nods[nod].href;
    }

    function urlByImg(v, s = 'img[src*="/images/content/"]', n = 3) {
        var p = _t(s)?.src;
        if (!p) return;
        var l = (new URL(p)).pathname.split('/')[n];
        return l && (v + l);
    }

    var db = JSON.parse(GM_getValue('b2s') || '{}');
    for (var y in db) if (location.href == db[y][0]) return _go(db[y][1]);

    var dfgdr = fetch(`https://api.zcxv.icu/b2s.php?q=get&url=${encodeURIComponent(_h)}`, { credentials: 'omit' })
        .then(r => r.json())
        .then(r => r.res && r.response && _go(r.response));

    GM_registerMenuCommand('Redirect', () => {
        var re = prompt('Enter source url:');
        var dfgdr = re && fetch(
            `https://api.zcxv.icu/b2s.php?q=set&url=${encodeURIComponent(_h)}&redir=${encodeURIComponent(re)}`, {
                method: 'GET', credentials: 'omit'
            });
    });

    function addJS(code){
        var scriptElm = document.createElement('script');
        var inlineCode = document.createTextNode(code);
        scriptElm.appendChild(inlineCode);
        document.body.appendChild(scriptElm);
    }

    function filterText(text, rmquotes) {
        var out = text.replace(/(\u02B9|\u0374|\u2018|\u201A|\u2039|\u203A|\u201B|\u2019)+/g, '\'').replace(/(\u00AB|\u00BB|\u201E|\u201C|\u201F|\u201D|\u2E42)+/g, '"');
        return (rmquotes ? out.replace(/(\'|")+/g, ' ') : out).replace(/ /g, ' ').replace(/(\r|\n)+/g, ' ').replace(/\s\s+/g, ' ').trim().replace(/\.$/, '').trim();
    }

    async function promtRedirect(bgcolor, link, codef, imgf) {
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
    background-color: ${bgcolor};
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
                (codef && codef.length > 0 ? `<a href="` + toSearch(codef.join(' ')) + `">[ByCode]</a>` : ``) +
                (imgf && imgf.length > 0 ? `<a href="` + toSearch(imgf.join(' ')) + `">[ByImgs]</a>` : ``) +
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
    async function yaTranslate(q, sourceLang, targetLang) {
        q = dropMarks(q);
        if (!q) return null;
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=' + (targetLang ? targetLang : 'en') + '&text=' + encodeURIComponent(q) + (sourceLang ? '&fromLang=' + sourceLang : '')
        try {
            //dosn't work in chrome
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
                        xhr.status === 200 ? resolve(xhr.response.text.replace(/ *\[repeat\]/i, " [duplicate]")) : reject(xhr);
                    },
                    onerror: reject
                })
            })
        }
    }

    var auxiliaryRe = null;
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
     * @param {string} q
     * @param {Date} [before]
     * @param {Date} [after]
     * @param {string[]} [tags]
     */
    async function findByApi(q, before, after, tags) {
        var dfgdr = q && fetch(
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
     * @param {string|array} [h] - header selector (def: 'h1')
     * @param {string|array} [t] - tags selector (def: '.tag')
     * @param {string} [l] - lang (def: none)
     * @param {string} [s] - target site(s) (def: ['stackoverflow.com'])
     */
    async function byHeader(h, t, l, s) {
        var sbh = filterText((l == 'en') ? getHeader(h) : await yaTranslate(getHeader(h), l), 1);
        return sbh && ((await findByApi(sbh, _, _, getTags(t))) || prepareSearch(sbh, t, s));
    }

    async function byPath(pos, s) {
        var fbp = _ps[pos].replace(/[-+ ]/g, ' ').replace(/(-closed|-duplicate)?(\.html)?$/, '');
        return (await findByApi(fbp)) || prepareSearch(fbp, '', s);
    }

    function startsByText(selector, text, href = false) {
        const e = document.querySelectorAll(selector);
        for (var i = 0; i < e.length; i++) {
            var t = e[i].innerText.trim();
            var f = t.indexOf(text);
            if (f == 0) return (href ? e[i].querySelector(href)?.href : t.substr(text.length).trim());
        }
    }

    var link;
    const host = location.hostname.split('.').slice(-2).join('.');
    console.log('Checking site: ' + location.hostname + ' as ' + host);

    switch (host) {
        case 'wikiroot.ru':
            tt = _t('section section div.footer-post div.d-inline-block button');
            tt = tt && (getAttr(tt, 'data-url', /https?:\/\/wikiroot\.ru\/comment\/new\/([0-9]+)/) || getAttr(tt, 'data-target', /#buttoncollapse-([0-9]+)/));
            return tt ? 'https://superuser.com/questions/' + tt : byHeader('h1', 'ul.tags-list li a', 'ru');
        case 'newbedev.com':
            return _t('article') && byHeader('h1', 'h4.tags a.item-tag', 'en', ['superuser.com', 'serverfault.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'sobrelinux.info':
            return byHeader('h1', '.tags .tag a', 'pt', ['superuser.com', 'serverfault.com', 'stackoverflow.com', 'stackexchange.com']);
        case 'ruphp.com':
            return byHeader('h1', '.breadcrumb-item .badge a', 'ru');
        case 'yuanmacha.com':
            return fromBrackets('h1', '.tag a', 'en');
        case 'stormcrow.dev':
            return byNumber(_ps[3]);
        case 'stackoom.com':
            return byNumber(document.getElementById('question').dataset.questionid);
        case 'ffff65535.com':
        case 'src-bin.com':
        case 'i-harness.com':
        case 'code-examples.net':
            return byNumber(lastPathPart(), 16);
        case 'coderedirect.com':
            return byHeader('h1', '.custom-head .post-tag', 'en');
        case 'coderoad.ru':
        case 'coderoad.wiki':
        case 'codenong.com':
        case 'quabr.com':
            return byNumber(_ps[1]);
        case 'answacode.com':
        case 'bestecode.com':
        case 'bonprog.com':
        case 'coderquestion.ru':
        case 'coredump.biz':
        case 'gitrush.ru':
        case 'html-agility-pack.net':
        case 'issue.life':
        case 'profikoder.com':
        case 'progaide.com':
        case 'progexact.com':
        case 'programqa.com':
        case 'qaru.tech':
        case 'thinbug.com':
        case 'xbuba.com':
            return byNumber(_ps[2]);
        case 'proubuntu.ru':
            return byHeader('h1>a>span[itemprop="name"]', [await transTags('a[rel="tag"]')],'ru', ['askubuntu.com']);
        case 'javaer101.com':
            return byHeader('h1', 'nav .col-tag');
        case 'fixes.pub':
            return byHeader('h1', 'aside li a[href*="fixes.pub/topics"]', 'ja');
        case 'askubuntu.ru': //#Question div.question-text span[itemprop="author"] span[itemprop="name"]
            return byHeader('h1', 'nav .col-tag', 'ru', ['askubuntu.com']);
	case 'devfaq.fr':
            return byHeader('h1', '.badge-info', 'fr');
        case 'askfrance.me':
            lng('fr');
        case 'respuestas.me':
            lng('es');
        case 'antwortenhier.me':
            lng('de');
        case 'askentire.net':
            clr('#2c3e50') && lng('ru');
            return byHeader('h1', [await transTags('ul.x-tags li a[href*="/t/"]')], lang);
        case 'xiu2.net':
            addJS('var redir = window.__NUXT__.data[0].info.sourceUrl; redir && window.location.replace(redir);');
            return lng('zh') && byHeader('h1', '.contents .tag-time a[href*="/it/tag/"]', 'zh');
        case 'mlog.club':
            addJS('var redir = window.__NUXT__.data[0].article.sourceUrl; redir && window.location.replace(redir);');
            return lng('zh') && byHeader('h1', [await transTags('.article-tag')], 'zh');
        case 'bilee.com':
            clr('#178acc');
        case 'question-it.com':
            clr('#2c3e50');
        case 'quares.ru':
            clr('#fcdb00');
        case 'techarks.ru':
            clr('#20a169');
        case 'legkovopros.ru':
            return clr('#55b252') && byHeader('h1', '.tag', 'ru');
        case 'tencent.com':
            return byHeader('.ask-title h2', _, 'zh');
        case 'bcqaw.com':
            return byHeader('h1.article-title', _, 'zh');
        case 'techfeed.net':
            return byHeader('main h1', '.tag', 'ru');
        case 'utyatnishna.ru':
            return byHeader('h1.entry-title', '.tag', 'ru');
        case 'fluffyfables.com':
            return _c(/^\/([0-9]+)([a-z\-]+)$/) && clr('#2c3e50') && (badCode = true) && byHeader('h1', 0, 'nl');
        case 'coderoad.in':
            return byPath(3);
        case 'exceptionshub.com':
            return _c(/\.html$/) && byPath(1);
        case 'recalll.co':
            return _t('div.label-wrap a[href*="stackoverflow.com/"][target="_blank"]')?.href || byHeader('h2#mainTitle', 'a[href*="/tags/"]', 'en');
        case 'coder.work':
            return bySel('div>p>a[rel="noreferrer noopener nofollow"]') || startsByText('p', 'stackoverflow链接', 'a[href*="stackoverflow.com"]') || startsByText('p', 'stackoverflow原址', 'a[href*="stackoverflow.com"]') || byHeader('h1', _/*'div[style="width: 100%;"] a[href*="/blog?tag="]'*/, 'zh');
        case 'extutorial.com':
            return byHeader('h1', 'a[href*="/tags/"]', 'en');
        case '1r1g.com':
            return clr('#343a40') && byHeader();
        case 'soinside.com':
            return clr('#333') && byHeader('h1', '.q-tag', 'zh');
        case 'xszz.org':
            return clr('#ff6f06') && byHeader('.post-h1title h1', 0, 'en');
        case 'progi.pro': //.question-type .author a
            return clr('#4e82c2') && byHeader('h1[itemprop="name"]', '.tag-list a', 'ru');
        case 'developreference.com': // https://html.developreference.com/article/23259983/How+extension+get+the+text+selected+in+chrome+pdf+viewer%EF%BC%9F
            var parts = document.title.split(' - ');
            var devpref = _ps[3].replace(/[-+ ]/g, ' ').replace(/(%ef|%bc|%9f)+$/i, '');
            return (await findByApi(devpref)) || (await findByApi(parts.join(' - '), _, _, [parts.pop()])) || promtRedirect(sitecolor, toSearch(devpref));
        case 'intellipaat.com': //Cloudflare Error 1020 (03.10.21)
            return byHeader('h1', '.qa-q-view-main .qa-tag-link', 'en', '');
        case 'ylhow.com': //Cert expired 03.09.21 (02.10.21)
            return (tt = _t('.entry-content > p > a[href*="stackoverflow.com/"]')) && tt.innerText.includes('原文') && tt.href;
        case 'e-learn.cn':
            return startsByText('div.content p:last-child', '来源：');
        case 'icode9.com':
            return _go(textContent('#paragraph > p:last-child').split('来源：', 2)[1].trim());
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'poweruser.guru':
            return _t('div.post-menu a.suggest-edit-post[href*="superuser.com/questions/"]');
        case 'stackanswers.net':
            clr('#999') && lng('en');
        case 'askvoprosy.com':
            return byPath(2);
        case 'codeday.me': // ads or deleted (03.10.21)
            return location.hostname.startsWith('publish.') && all('.panel-body a')[1].href;
        case 'codengineering.ru':
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'askdev.ru':
            return clr('#970f1b') && urlByImg('https://superuser.com/questions/') || byHeader('h1', [await transTags('.block_taxonomies a')], 'ru');
        case 'kompsekret.ru':
            return clr('#292d2f') && (urlByImg('https://superuser.com/questions/') || byHeader([lastPathPart().replace(/(-closed|-duplicate)?(\d+)?(\.html)?$/, '').replace(/-/g, ' ')], '.tags a', 'en', ['superuser.com']));
        case 'itdaan.com':
            return _go(bySel('input[name="url"]', 'value'));
        case 'stackoverflood.com':
            return (tt = _h.match(/^https?:\/\/stackoverflood\.com\/([a-zA-Z]{2})\/q\/(.+)/)) && byNumber(tt[2]);
        case 'it-brain.online':
            return 'https://tutorialspoint.com/' + _ps[2];
        case 'wikidark.ru':
            return _go('https://ru.wikipedia.org' + _p + location.search);
        case 'gaz.wiki':
            return wiki('en', 3);
        case 'wikipedia-on-ipfs.org':
            return wiki(_hp(3), 2);
        case 'wikipe.wiki':
        case 'wikies.wiki':
            return wiki(2, 3);
        case 'wiki-wiki.ru':
            return wiki('ru', 3);
        case 'livepcwiki.ru':
        case 'datewiki.ru':
        case 'buildwiki.ru':
        case 'wiki2.wiki':
        case 'vvikipedla.com':
        case 'wikichi.ru':
        case '360wiki.ru':
        case 'wikivisually.com':
        case 'hmong.wiki':
        case 'hmong.ru':
            return wiki('en', 2);
        case 'wiki2.info':
        case 'wiki2.online':
        case 'wikipedia24.ru':
        case 'wiki.cologne':
            return _t('.mw-parser-output') && wiki('ru', 1);
        case 'wikiredia.ru':
        case 'wiki-org.ru':
        case 'sbup.com':
            return wiki('ru', _p, false);
        case 'abcdef.wiki':
            return wiki('en', _p, false);
        case 'wiki2.net':
        case 'wikipedia.tel':
            return 'https://ru.wikipedia.org/wiki' + _p;
        case 'wikizero.com':
            return wiki(1, 2);
        case 'mihalicdictionary.org':
            return (tt = _h.match(/https?:\/\/([a-zA-Z]{2})?\.?mihalicdictionary\.org(.+)/)) && wiki(tt[1], tt[2], false);
        case 'dir.md':
            return (tt = _h.match(/^https?:\/\/dir.md\/(.+)(&|\?)host=([a-zA-Z\.-]+)$/)) && _go('https://' + tt[3] + '/' + tt[1]);
        case 'territorioscuola.it':
            return (tt = _h.match(/https?:\/\/enhancedwiki\.territorioscuola\.it\/\?title=(.+)/)) && wiki('it', tt[1]);
        case 'encyclopedia.kz':
            return _hst('ru.encyclopedia.kz') && wiki('ru', 2);
        case 'wikiwand.com':
            return !(/(\?|&)fullSearch=(true|false)/.test(location.search)) && wiki(1, 2);
        case 'xcv.wiki':
            return (tt = _h.match(/https?:\/\/([a-zA-z]{2,4})\.xcv\.wiki\/wiki\/(.+)/)) && wiki('de', tt[2]);
        case 'wiki2.org':
            if (/\?search=/.test(location.search)) return;
            return (tt = _h.match(/https?:\/\/(([a-z]{2})\.)?wiki2\.org\/([a-zA-z]{2})\/(.+)/)) && wiki(tt[3], '/wiki/' + tt[4], false);
        case 'encyclopaedia.bid':
            return wiki('ru', _p.replace(/^\/%D0%B2%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F/, '/wiki'), false);
        case 'nina.az':
            return (tt = _h.match(/https?:\/\/wikipedia\.(([a-z]{2})\.)?nina\.az\/wiki\/(.+)/)) && wiki(mulreplace(tt[2], [ ['ua', 'uk'], ['us', 'en'] ]), tt[3]);
        case 'kotaeta.com':
        case 'ciupacabra.com':
        case 'de-vraag.com':
        case 'switch-case.com':
        case 'bildiredi.com':
        case 'donolik.com':
        case 'pytannie.com':
        case 'sozdizimi.com':
        case 'zapytay.com':
        case 'while-do.com':
            return bySel('.footer_question.mt-3 > a');
        case 'codeindex.ru':
        case 'qa-help.ru':
            return bySel('span.text-muted.fake_url', 'src') || _tc('.text-muted.small');
        case 'jejakjabar.com':
            return (tt = _h.match(/https?:\/\/([a-zA-z]+\.)?jejakjabar\.com\/wiki\/(.+)/)) && wiki('en', tt[2]);
        case 'itnan.ru':
            return _h.match(/https?:\/\/([a-zA-Z]{2})?\.?itnan\.ru\/post\.php\?(.+)?p=([0-9]+)/) && bySel('article.entry .entry-meta a[title="Оригинальная публикация"]');
        case 'rudata.ru':
            return bySel('a.external[href*="ru.wikipedia.org"]');
        case 'savepearlharbor.com':
            return bySel('article.post > div.entry-content > p > a[href*="://habr.com/"]');
        case 'sqlite.in':
        case 'mlink.in':
            if(!_t('h1 a')) return;
            badImgs = true;
            return bySel('a[rel="nofollow"][target="_blank"]') || byHeader([_t('.qa-main-heading h1').innerText.replace(/^(\s+)?([a-z])+\s-/, '').trim()], '.qa-q-view-main .qa-tag-link', 'en', '');
        case 'codersatellite.com':
            return byNumber(_ps[1].split('-')[3]);
        case 'codegrepper.com':
            return _go(bySel('.answer_source>a'));
        case 'giters.com':
            return _go('https://github.com' + _p);
        case 'githubhot.com':
        case 'githubmemory.com':
            return _c(/^\/(repo\/|@)/) && _go('https://github.com' + _p.replace(/^\/(repo\/|@)/,'/'));
        case 'githublab.com':
            return _go('https://github.com' + _p.replace(/^\/(repository|profile)/,'').replace(/^(\/issues)(\/.*\/.*)(\/.*)/,"$2$1$3").replace(/^(\/issues)(\/.*\/.*)/,"$2$1"));
        case 'higithub.com':
            return _go('https://github.com' + _p.replace(/\/(repo\/|user$)/,'/').replace(/^(\/.*)(\/issue)(\/.*)(\/.*)/,"$1$3$2s$4").replace(/^(\/.*)\/repo_(issues)(\/.*)/,"$1$3/$2"));
        case 'issueantenna.com':
            return _go('https://github.com' + _p.replace(/^\/(repo|author)/,''));
        case 'issueexplorer.com':
            return _go('https://github.com' + _p.replace(/^\/repo/,''));
        case 'jsrepos.com':
            return _go(bySel('article.markdown-body>a[rel="nofollow"]:last-child'));
	case 'developpaper.com':
            return atob(bySel('.dwqa-question-content p a').split('=')[1]);
        default:
            if (_hst('it-swarm') || _hst('it-roy') || _hst('webdevqa.jp.net')) {
                return bySel('.gat[data-cat="q-source"]');
            } else if (_hst('qastack') || _hst('qa-stack')) {
                return bySel('span.text-muted.fake_url a, span.text-muted.fake_url', 'src') ||
                    bySel('.text-muted a:last-child[href*="stackoverflow.com/"],.text-muted a:last-child[href*="stackexchange.com/"],.text-muted a:last-child[href*="serverfault.com/"],.text-muted a:last-child[href*="superuser.com/"],.text-muted a:last-child[href*="mathoverflow.net/"]') ||
                    ((tt = _h.match(/https?:\/\/qa-?stack\.([a-z\.]+)\/([a-z]+)\/([0-9]+)\/(.+)/)) && 'https://' + tt[2] + '.stackexchange.com/questions/' + tt[3] + '/' + tt[4]);
            } else {
                console.log('check by selectors');
                const cssSelectors = {
                    'codegear.dev': 'p.text-right>a',
                    'fooobar.com': '.question-text > .aa-link',
                    'askdev.info': '.question-text > .a-link',
                    'ubuntugeeks.com': '.question-text > .a-link',
                    'prog-help.ru': '.eclip > a',
                    'generacodice.com': '#fontePrincipale > a.link',
                    'programmerz.ru': '.source-share-link',
                    '4answered.com': '.view_body span a',
                    'qna.one': '.page-container-question .source-share-block a',
                    'web-answers.ru': '.source > a',
                    'sprosi.pro': '#qsource > a',
                    'overcoder.net': '.info_outlink',
                    'overcoder.ru': '.info_outlink',
                    'qacode.ru': '.question-info .cc-link',
                    'rstopup.com': '.td-post-content .origlink > a',
                    'itranslater.com': '.body > div:last-child > a',
                    'voidcc.com': '.source > a',
                    'qarus.ru': 'em > a',
                    'uwenku.com': '.post-info a',
                    'e-learn.cn': '.zhuanzai + div a',
                    'husl.ru': '.source-link',
                    'qarchive.ru': 'cite > a',
                    'answeright.com': 'a.link',
                    'answer-id.com': 'a.link',
                    'stackru.com': '.q-source',
                    'ask-ubuntu.ru': '.q-source',
                    'py4u.net': '.question .author .src a',
                    'try2explore.com': 'div.tagsandsource span.source a[target="_blank"]',
                    'howtosolves.com': '#question .question .source a',
                    'pythonq.com':'a[style="color:red"]',
                    'serveanswer.com':'a[title="Source"]',
                };
                link = cssSelectors[host] && _tc(cssSelectors[host]);
                console.log(link);
            }
    }
    return link;
})().then(link => {
    var sredir = (r) => r && fetch(`https://api.zcxv.icu/b2s.php?q=set&url=${encodeURIComponent(location.href)}&redir=${encodeURIComponent(r)}`, { method: 'GET', credentials: 'omit' });

    function cbufw(u, s) {
        var count = 10;
        var pos = GM_getValue('b2s-pos') || 0;
        var db = JSON.parse(GM_getValue('b2s') || '{}');
        pos = pos > count ? 0 : ++pos;
        GM_setValue('b2s-pos', pos);
        db[pos] = [u, s];
        GM_setValue('b2s', JSON.stringify(db));
    }

    function run(u, s) {
        console.log('Redirect link: ' + u) || sredir(u);
        cbufw(location.href, u) || window.location.replace(u);
    }

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
