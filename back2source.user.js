// ==UserScript==
// @name         Back2source
// @version      0.1.73
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
// @noframes
// @include      *://*.google.*/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.*.nina.az/wiki/*
// @match        *://*.360wiki.ru/wiki/*
// @match        *://*.answer-id.com/*
// @match        *://*.answeright.com/*
// @match        *://*.ask-ubuntu.ru/questions/*
// @match        *://*.askdev.info/questions/*
// @match        *://*.askdev.ru/q/*
// @match        *://*.askentire.net/q/*
// @match        *://*.askubuntu.ru/questions/*
// @match        *://*.askvoprosy.com/voprosy/*
// @match        *://*.bildiredi.com/*
// @match        *://*.bilee.com/*.html
// @match        *://*.buildwiki.ru/wiki/*
// @match        *://*.ciupacabra.com/*
// @match        *://*.code-examples.net/*/q/*
// @match        *://*.codeindex.ru/q/*
// @match        *://*.codengineering.ru/q/*
// @match        *://*.coderoad.ru/*
// @match        *://*.coderquestion.ru/q/*
// @match        *://*.coredump.biz/questions/*
// @match        *://*.datewiki.ru/wiki/*
// @match        *://*.de-vraag.com/*
// @match        *://*.developreference.com/*
// @match        *://*.dir.md/*
// @match        *://*.donolik.com/*
// @match        *://*.dwf.life/*
// @match        *://*.e-learn.cn/topic/*
// @match        *://*.encyclopaedia.bid/*
// @match        *://*.exceptionshub.com/*
// @match        *://*.extutorial.com/ask/*
// @match        *://*.fluffyfables.com/*
// @match        *://*.fooobar.com/questions/*
// @match        *://*.gaz.wiki/wiki/*
// @match        *://*.generacodice.com/*
// @match        *://*.hmong.wiki/wiki/*
// @match        *://*.howtosolves.com/q/*
// @match        *://*.husl.ru/questions/*
// @match        *://*.intellipaat.com/community/*/*
// @match        *://*.issue.life/questions/*
// @match        *://*.it-brain.online/question/*
// @match        *://*.it-swarm-vi.com/*/*
// @match        *://*.it-swarm.asia/*/*
// @match        *://*.it-swarm.com.ru/*/*
// @match        *://*.it-swarm.dev/*/*
// @match        *://*.it-swarm.net/*/*
// @match        *://*.it-swarm.xyz/*/*
// @match        *://*.itnan.ru/post.php*
// @match        *://*.itdaan.com/*
// @match        *://*.itranslater.com/qa/details/*
// @match        *://*.javaer101.com/article/*
// @match        *://*.jejakjabar.com/wiki/*
// @match        *://*.kompsekret.ru/q/*
// @match        *://*.kotaeta.com/*
// @match        *://*.legkovopros.ru/questions/*
// @match        *://*.livepcwiki.ru/wiki/*
// @match        *://*.mihalicdictionary.org/*
// @match        *://*.nina.az/wiki/*
// @match        *://*.overcoder.net/q/*
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
// @match        *://*.qastack.mx/*
// @match        *://*.qastack.net.bd/*
// @match        *://*.qastack.pl/*
// @match        *://*.qastack.ru/*
// @match        *://*.qastack.vn/*
// @match        *://*.quabr.com/*
// @match        *://*.quares.ru/?id=*
// @match        *://*.question-it.com/questions/*
// @match        *://*.rudata.ru/wiki/*
// @match        *://*.sbup.com/wiki/*
// @match        *://*.savepearlharbor.com/?p=*
// @match        *://*.sprosi.pro/questions/*
// @match        *://*.stackanswers.net/questions/*
// @match        *://*.stackoom.com/question/*
// @match        *://*.stackoverflood.com/*
// @match        *://*.stackovernet.com/*
// @match        *://*.stackovernet.xyz/*
// @match        *://*.stackoverrun.com/*
// @match        *://*.stackoverrun.xyz/*
// @match        *://*.stackru.com/questions/*
// @match        *://*.stormcrow.dev/*
// @match        *://*.switch-case.com/*
// @match        *://*.techarks.ru/*
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
// @match        *://*.while-do.com/*
// @match        *://*.wiki-org.ru/*
// @match        *://*.wiki-wiki.ru/wp/*
// @match        *://*.wiki2.net/*
// @match        *://*.wiki2.org/*
// @match        *://*.wiki2.wiki/wiki/*
// @match        *://*.wikichi.ru/wiki/*
// @match        *://*.wikies.wiki/wiki/*
// @match        *://*.wikipe.wiki/wiki/*
// @match        *://*.wikipedia-on-ipfs.org/wiki/*
// @match        *://*.wikipedia.tel/*
// @match        *://*.wikiredia.ru/*
// @match        *://*.wikivisually.com/wiki/*
// @match        *://*.wikiwand.com/*/*
// @match        *://*.wikizero.com/*/*
// @match        *://*.xbuba.com/*
// @match        *://*.xcv.wiki/*
// @match        *://*.xszz.org/*/question-*
// @match        *://*.ylhow.com/*
// @match        *://*.zapytay.com/*
// @match        *://code.i-harness.com/*/q/*
// @match        *://qa.1r1g.com/sf/ask/*
// @match        *://ru.encyclopedia.kz/index.php/*
// ==/UserScript==

(async() => {
    'use strict';

    var sitecolor = '#333';

    function clr(c, f) {
        if (f || sitecolor == '#333') sitecolor = c;
    }

    function mulreplace(str, a){
        a.forEach((v) => {
            str = str.replace(v[0],v[1]);
        });
        return str;
    }

    function wikiPath(p, l = 'en') {
        return 'https://' + l + '.wikipedia.org/wiki/' + location.pathname.split('/', p + 1)[p];
    }

    function wikiLink(p, l = 'en', w = false) {
        return 'https://' + (l ? l : '') + '.wikipedia.org' + (w ? '/wiki/' : '') + p;
    }

    function wikiFull(l = 0, p = 2) {
        return 'https://' + location.host.split('.', l + 1)[l] + '.wikipedia.org/wiki/' + location.pathname.split('/', p + 1)[p];
    }

    function wikiPathLang(l, p) {
        var s = location.pathname.split('/', (l > p ? l : p) + 1);
        return 'https://' + s[l] + '.wikipedia.org/wiki/' + s[p];
    }

    function filterText(text, rmquotes) {
        var out = text.replace(/(\u02B9|\u0374|\u2018|\u201A|\u2039|\u203A|\u201B|\u2019)+/g, '\'').replace(/(\u00AB|\u00BB|\u201E|\u201C|\u201F|\u201D|\u2E42)+/g, '"');
        return (rmquotes ? out.replace(/(\'|")+/g, ' ') : out).replace(/ /g, ' ').replace(/(\r|\n)+/g, ' ').replace(/\s\s+/g, ' ').trim().replace(/\.$/, '').trim();
    }

    /**
     * @param {string} bgcolor
     * @param {string} link
     */
    async function promtRedirect(bgcolor, link) {
        const dialog = document.createElement('div');
        try {
            document.body.appendChild(dialog);
            const shadowRoot = dialog.attachShadow ?
                  dialog.attachShadow({
                      mode: 'open'
                  }) :
            //@ts-ignore
            dialog.createShadowRoot && dialog.createShadowRoot();
            if (!shadowRoot) {
                throw 'Shadow dom required!';
            }
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
<div class="m">[ Back2stackoverflow ]
<a id="ok-btn" href="#">Try to find the original question? <span href="#" class="search-icon">&#8981;<span></a>
<span id="close-btn">&#10006;</span>
</div>`;
            shadowRoot.querySelector('#ok-btn').href = shadowRoot.querySelector('.search-icon').href = link;
            await new Promise((_, reject) => {
                shadowRoot.querySelector('#close-btn').addEventListener('click', reject);
            });
        } finally {
            document.body.removeChild(dialog);
        }
    }

    /**
     * @param {string} q
     * @param {string} sourceLang
     */

    async function yaTranslate(q, sourceLang) {
        q = dropMarks(q);
        if (!q) {
            return null;
        }
        //TODO: google translator inserts spaces where it is not necessary, investigate around which characters it is worth removing spaces
        q = q.replace(/ \/ /g, '/');
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=en&text=' + encodeURIComponent(q) + (sourceLang ? '&fromLang=' + sourceLang : '')
        try {
            //dosn't work in chrome
            return await fetch(q, {
                mode: 'no-cors',
                credentials: 'omit'
            })
                .then(r => r.json())
                .then(r => r.text);
        } catch (_) {
            //works only in tampermonkey
            return new Promise((resolve, reject) => {
                //@ts-ignore
                GM_xmlhttpRequest({
                    url: q,
                    responseType: 'json',
                    anonymous: true,
                    onload: (xhr) => {
                        if (xhr.status === 200) {
                            resolve(xhr.response.text)
                        } else {
                            reject(xhr)
                        }
                    },
                    onerror: reject
                })
            })
        }
    }

    function lastPathPart() {
        return location.pathname.split('/').filter(Boolean).slice(-1)[0];
    }

    function getHeader(h) {
        return (h ? (Array.isArray(h) ? h[0] : textContent(h)) : textContent('h1'));
    }

    async function findBypass(s) {
        var dfgdr = fetch(
            `https://api.zcxv.icu/b2s.php?q=get&url=${encodeURIComponent(s)}`, {
                credentials: 'omit'
            })
        .then(r => r.json())
        .then(r => r.res && r.response);
        return dfgdr;
    }

    /**
     * @param {string} q
     * @param {Date} [before]
     * @param {Date} [after]
     * @param {string[]} [tags]
     */
    async function findByApi(q, before, after, tags) {
        var bp = await findBypass(location.href);
        if(bp) return bp;
        var dfgdr = q && fetch(
            `https://api.stackexchange.com/2.2/search?page=1&pagesize=1&order=desc&sort=relevance&intitle=${encodeURIComponent(q)}&site=stackoverflow` +
            (after ? '&fromdate=' + (after.getTime() / 1000 - 120 | 0) : '') +
            (before ? '&todate=' + (before.getTime() / 1000 + 120 | 0) : '') +
            (Array.isArray(tags) && tags.length > 0 ? '&tagged=' + encodeURIComponent(Array.from(new Set(tags)).join(';')) : ''), {
                credentials: 'omit'
            })
        .then(r => r.json())
        .then(r => r.items && r.items[0] && r.items[0].link);
        return dfgdr;
    }

    /**
     * @param {string|array} [h] - header selector (def: 'h1')
     * @param {string|array} [t] - tags selector (def: '.tag')
     * @param {string} [l] - lang (def: none)
     * @param {string} [s] - target site(s) (def: ['stackoverflow.com'])
     */
    async function byHeader(h, t, l, s) {
        var sbh = filterText(((l == 'en' && !s) || l == s) ? getHeader(h) : await yaTranslate(getHeader(h), l), 1);
        if(!sbh) return;
        return (await findByApi(sbh, null, null, (t ? (Array.isArray(t) ? t[0] : allTexts(t)) : allTexts('.tag')))) || promtRedirect(sitecolor, toSearch(sbh + ' ' + (t ? (Array.isArray(t) ? t[0] : allTexts(t)) : allTexts('.tag')).join(' ').replace(/\s+/g, ' '), s));
    }
    function bySel(s, a = 'href') {
        link = document.querySelector(s);
        return (link && link.getAttribute(a)) ? link.getAttribute(a) : null;
    }

    async function findByPath(pos) {
        var askvopr = location.pathname.split('/')[pos].replace(/[-+ ]/g, ' ').replace(/\.html$/, '').replace(/(-closed|-duplicate)$/, '');
        return (await findByApi(askvopr, null, null, null)) || promtRedirect(sitecolor, toSearch(askvopr));
    }

    /**
     * @param {string} selector
     */
    function textContent(selector) {
        const e = document.querySelector(selector);
        return e ? e.textContent.trim() || null : null
    }

    function startsByText(selector, text) {
        const e = document.querySelectorAll(selector);

        for (var i = 0; i < e.length; i++) {
            var t = e[i].innerText.trim();
            var f = t.indexOf(text);
            console.log(t);
            console.log(f);
            console.log(text.length);
            if (f == 0) {
                return t.substr(text.length).trim();
            }
        }
    }

    /**
     * @param {string} s
     * @param {string} [site]
     */
    function toSearch(s, site) {
        s = dropMarks(s);
        return s ? `https://google.com/search?q=` + encodeURIComponent(s) +
            ((site && Array.isArray(site)) ? `+site%3A` + site.join('+OR+site%3A') : `+site%3Astackexchange.com+OR+site%3Astackoverflow.com`) : null;
    }

    /**
     * @param {string} s
     * @param {number} [radix]
     */
    function byNumber(s, radix) {
        const n = parseInt(s, radix);
        return n > 0 ? 'https://stackoverflow.com/questions/' + n : null;
    }

    /**
     * @param {string} s
     */
    function dropMarks(s) {
        return s && s.replace(/\[(на удержании|on hold|duplikować|duplicado|duplicar|duplikat|dublicate|duplicate|дубликат|закрыто|закрытый|closed|geschlossen|zamknięte|cerrado)\]\s*$/i, '').trim();
    }

    /**
     * @param {string} s
     */
    function normalize(s) {
        return s && ' ' + s.toLowerCase() + ' ';
    }

    /**
     * @param {Function[]} fns
     */
    function pipe(...fns) {
        return (v) => {
            for (let f of fns) {
                v = f(v);
            }
            return v;
        }
    }

    /**
     * @param {string} s
     * @return {HTMLElement[]}
     */
    function all(s) {
        return Array.prototype.slice.call(document.querySelectorAll(s));
    }

    /**
     * @param {string} s
     * @return {string[]}
     */
    function allTexts(s) {
        return all(s).map(a => a.textContent.trim())
    }

    const href = location.href;
    var link;

    const host = location.hostname.split('.').slice(-2).join('.');
    console.log('Checking site: ' + host);

    switch (host) {
        case 'stormcrow.dev':
            return bySel('p.text-right > a[href*="stackoverflow.com/q"]') || byNumber(location.pathname.split('/')[3]);
        case 'stackoom.com':
            return byNumber(document.getElementById('question').dataset.questionid);
        case 'ffff65535.com':
        case 'src-bin.com':
        case 'i-harness.com':
        case 'code-examples.net':
            return byNumber(lastPathPart(), 16);
        case 'coderoad.ru':
        case 'quabr.com':
            return byNumber(location.pathname.split('/', 2)[1]);
        case 'programqa.com':
        case 'thinbug.com':
        case 'profikoder.com':
        case 'progexact.com':
        case 'bestecode.com':
        case 'bonprog.com':
        case 'progaide.com':
        case 'coderquestion.ru':
        case 'coredump.biz':
        case 'issue.life':
        case 'qaru.tech':
        case 'xbuba.com':
            return byNumber(location.pathname.split('/', 3)[2]);
        case 'javaer101.com':
            return await byHeader('h1', 'nav .col-tag');
        case 'askubuntu.ru':
            //#Question div.question-text span[itemprop="author"] span[itemprop="name"]
            return await byHeader('h1', 'nav .col-tag', 'ru', ['askubuntu.com']);
        case 'bilee.com':
            clr('#178acc');
        case 'question-it.com':
            clr('#2c3e50');
        case 'quares.ru':
            clr('#fcdb00');
        case 'askentire.net':
            clr('2c3e50');
        case 'techarks.ru':
            clr('2c3e50');
        case 'legkovopros.ru':
            clr('#55b252');
            return await byHeader('h1', '.tag', 'ru');
        case 'techfeed.net':
            return await byHeader('main h1', '.tag', 'ru');
            /*case 'vike.io':
            return await byHeader([vike.replace(/[^–]+–\s/, '')], '.tags__item--blue', location.pathname.split('/', 2).find(Boolean));*/
        case 'utyatnishna.ru':
            return await byHeader('h1.entry-title', '.tag', 'ru');
        case 'fluffyfables.com':
            //https://ru.fluffyfables.com/281809-article-uncaught-syntaxerror-unexpected-token-u
            if (!/^\/([0-9]+)([a-z\-]+)$/.test(location.pathname)) return;
            clr('#2c3e50');
            return await byHeader('h1', 0, 'ru');
        case 'exceptionshub.com':
            if (!/\.html$/.test(location.pathname)) return;
            return await findByPath(1);
            break;
        case 'extutorial.com':
            return await byHeader('h1', 'a[href*="/tags/"]', 'en');
        case '1r1g.com':
            clr('#343a40');
            return await byHeader();
        case 'soinside.com':
            clr('#007bff');
            return await byHeader('h1', '.q-tag', 'zh');
        case 'xszz.org':
            clr('#ff6f06');
            return await byHeader('.post-h1title h1', 0, 'en');
        case 'progi.pro':
            //.question-type .author a
            clr('#4e82c2');
            return await byHeader('h1[itemprop="name"]', '.tag-list a', 'ru');
        case 'developreference.com':
            var parts = document.title.split(' - ');
            var devpref = await findByApi(parts.join(' - '), null, null, [parts.pop()]);
            if(devpref) return devpref;
            devpref = location.pathname.split('/')[3].replace(/[-+ ]/g, ' ').replace(/(%ef|%bc|%9f)+$/, '');
            return (await findByApi(devpref, null, null, null)) || promtRedirect(sitecolor, toSearch(devpref));
        case 'intellipaat.com':
            var intellipaat = await byHeader('h1', '.qa-q-view-main .qa-tag-link', 'en', '');
            if(intellipaat) window.location.replace(intellipaat);
            return;
        case 'oipapio.com':
            return await findByApi(
                textContent('h1').replace(/^.*? - /, ''),
                new Date(textContent('.post-meta .date')),
                null,
                allTexts('.category')
            );
        case 'ylhow.com':
            var ylhow = document.querySelector('.entry-content > p > a[href*="stackoverflow.com/"]');
            if (ylhow && ylhow.innerText.includes('原文')) {
                return ylhow.href;
            }
            return null;
        case 'e-learn.cn':
            return startsByText('div.content p:last-child', '来源：');
        case 'icode9.com':
            return textContent('#paragraph > p:last-child').split('来源：', 2)[1].trim();
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'poweruser.guru':
            return document.querySelector('div.post-menu a.suggest-edit-post[href*="superuser.com/questions/"]');
        case 'stackanswers.net':
            clr('#999');
            var stackanswers = await findByPath(2);
            if (stackanswers) return stackanswers;
            return await byHeader('h1', '.tags a', 'en');
        case 'askvoprosy.com':
            var askvoprosy = await findByPath(2);
            if (askvoprosy) return askvoprosy;
            return await byHeader('h1', '.tags a', 'ru');
        case 'codeday.me':
            return (location.hostname.startsWith('publish.')) ? all('.panel-body a')[1].href : null;
        case 'codengineering.ru':
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'askdev.ru':
            clr('#970f1b');
            var askdev = await byHeader('h1', '.block_taxonomies a', 'ru');
            if(askdev) return askdev;
            askdev = document.querySelector('img[src*="/images/content/"]');
            if (!askdev) return;
            link = new URL(askdev.src);
            return 'https://stackoverflow.com/questions/' + link.pathname.split('/')[3];
        case 'kompsekret.ru':
            clr('#292d2f');
            var kompsekret = document.querySelector('img[src*="/images/content/"]');
            if (kompsekret && kompsekret.src) {
                link = new URL(kompsekret.src);
                return 'https://superuser.com/questions/' + link.pathname.split('/')[3];
            }
            link = document.querySelector('.question-text > .a-link[href*="stackoverflow.com/q"]');
            return await byHeader('h1', '.tags a', 'ru');
            break;
        case 'itdaan.com':
            var itdaan = bySel('input[name="url"]', 'value');
            if (itdaan) window.location.replace(itdaan);
            return;
        case 'stackoverflood.com':
            var stof = location.href.match(/^https?:\/\/stackoverflood\.com\/([a-zA-Z]{2})\/q\/(.+)/);
            return byNumber(stof[2]);
        case 'it-brain.online':
            return 'https://tutorialspoint.com/' + location.pathname.split('/')[2];
        case 'dwf.life':
            return 'https://github.com' + location.pathname;
        case 'gaz.wiki':
            return wikiPath(3);
        case 'wikipedia-on-ipfs.org':
            return wikiFull();
        case 'wikipe.wiki':
        case 'wikies.wiki':
            return wikiPathLang(2, 3);
        case 'wiki-wiki.ru':
            return wikiPath(3, 'ru');
        case 'livepcwiki.ru':
        case 'datewiki.ru':
        case 'buildwiki.ru':
        case 'wiki2.wiki':
        case 'vvikipedla.com':
        case 'wikichi.ru':
        case '360wiki.ru':
        case 'wikivisually.com':
        case 'hmong.wiki':
            return wikiPath(2);
        case 'wikiredia.ru':
        case 'wiki-org.ru':
        case 'sbup.com':
            return wikiLink(location.pathname, 'ru');
        case 'wiki2.net':
        case 'wikipedia.tel':
            return 'https://ru.wikipedia.org/wiki' + location.pathname;
        case 'wikizero.com':
            return wikiPathLang(1, 2);
        case 'mihalicdictionary.org':
            var mhd = location.href.match(/https?:\/\/([a-zA-Z]{2})?\.?mihalicdictionary\.org(.+)/);
            return (mhd) ? wikiLink(mhd[2], mhd[1]) : null;
        case 'dir.md':
            var dirmd = location.href.match(/^https?:\/\/dir.md\/(.+)(&|\?)host=([a-zA-Z\.-]+)$/);
            if (dirmd !== null) window.location.replace('https://' + dirmd[3] + '/' + dirmd[1]);
            return;
        case 'territorioscuola.it':
            var trscl = location.href.match(/https?:\/\/enhancedwiki\.territorioscuola\.it\/\?title=(.+)/);
            return (trscl !== null) ? wikiPath(trscl[1], 'it') : null;
        case 'encyclopedia.kz':
            return location.hostname.match(/^ru\.encyclopedia\.kz$/) && wikiPath(2, 'ru');
        case 'wikiwand.com':
            return !(/(\?|&)fullSearch=(true|false)/.test(location.search)) && wikiPathLang(1, 2);
        case 'xcv.wiki':
            var xcv = location.href.match(/https?:\/\/([a-zA-z]{2,4})\.xcv\.wiki\/wiki\/(.+)/);
            return (xcv !== null) ? wikiLink(xcv[2], 'de', 1) : null;
        case 'wiki2.org':
            if (location.search.match(/\?search=/) !== null) return;
            var wiki2 = location.href.match(/https?:\/\/(([a-z]{2})\.)?wiki2\.org\/([a-zA-z]{2})\/(.+)/);
            return ((wiki2 !== null) ? wikiLink('/wiki/' + wiki2[4], wiki2[3]) : null);
        case 'encyclopaedia.bid':
            return wikiLink(location.pathname.replace(/^\/%D0%B2%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F/, '/wiki'), 'ru');
        case 'nina.az':
            var ninaz = location.href.match(/https?:\/\/wikipedia\.(([a-z]{2})\.)?nina\.az\/wiki\/(.+)/);
            return ninaz && wikiLink(ninaz[3], mulreplace(ninaz[2], [['ua','uk'],['us','en']]), 1);
        case 'kotaeta.com':
        case 'ciupacabra.com':
        case 'de-vraag.com':
        case 'switch-case.ru':
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
            return bySel('span.text-muted.fake_url','src') || bySel('.text-muted.small[href*="stackoverflow.com/q"]');
        case 'jejakjabar.com':
            var regx = location.href.match(/https?:\/\/([a-zA-z]+\.)?jejakjabar\.com\/wiki\/(.+)/);
            return (regx !== null) ? wikiLink(regx[2], 'en', 1) : null;
        case 'itnan.ru':
            var itnan = location.href.match(/https?:\/\/([a-zA-Z]{2})?\.?itnan\.ru\/post\.php\?(.+)?p=([0-9]+)/);
            return (itnan !== null) ? 'https://habr.com/ru/post/' + itnan[3] : null;
        default:
            if (location.hostname.includes('it-swarm')) {
                return bySel('.gat[data-cat="q-source"]');
            } else if (location.hostname.includes('stackovernet') || location.hostname.includes('stackoverrun')) {
                return bySel('.post-meta a[href*="stackoverflow.com/q"]');
            } else if (location.hostname.includes('qastack')) {
                var qastack = bySel('span.text-muted.fake_url a, span.text-muted.fake_url','src') ||
                    bySel('.text-muted a:last-child[href*="stackoverflow.com/"],.text-muted a:last-child[href*="stackexchange.com/"],.text-muted a:last-child[href*="superuser.com/"],.text-muted a:last-child[href*="mathoverflow.net/"]');
                if(qastack) return qastack;
                qastack = location.href.match(/https?:\/\/qastack\.([a-z\.]+)\/([a-z]+)\/([0-9]+)\/(.+)/);
                if (qastack) {
                    return 'https://' + qastack[2] + '.stackexchange.com/questions/' + qastack[3] + '/' + qastack[4];
                }
            } else {
                console.log('check by selectors');
                const cssSelectors = {
                    'qaru.site': '.question-text > .aa-link[href*="stackoverflow.com/q"]',
                    'fooobar.com': '.question-text > .aa-link',
                    'askdev.info': '.question-text > .a-link',
                    'ubuntugeeks.com': '.question-text > .a-link',
                    'prog-help.ru': '.eclip > a[href*="stackoverflow.com/q"]',
                    'generacodice.com': '#fontePrincipale > a.link',
                    'programmerz.ru': '.source-share-link',
                    '4answered.com': '.view_body span a',
                    'qna.one': '.page-container-question .source-share-block a',
                    '365airsoft.com': '.origin > a',
                    'web-answers.ru': '.source > a',
                    'sprosi.pro': '#qsource > a',
                    'overcoder.net': '.info_outlink',
                    'qacode.ru': '.question-info .cc-link',
                    'rstopup.com': '.td-post-content .origlink > a',
                    'itranslater.com': '.body > div:last-child > a',
                    'voidcc.com': '.source > a',
                    'qarus.ru': 'em > a',
                    'uwenku.com': '.post-info a',
                    'e-learn.cn': '.zhuanzai + div a',
                    'husl.ru': '.source-link',
                    'qarchive.ru': 'cite > a',
                    'answeright.com': 'a.link[href*="stackoverflow.com/q"],a.link[href*="stackexchange.com/q"],a.link[href*="superuser.com/q"],a.link[href*="mathoverflow.net/q"]',
                    'answer-id.com': 'a.link[href*="stackoverflow.com/q"],a.link[href*="stackexchange.com/q"],a.link[href*="superuser.com/q"],a.link[href*="mathoverflow.net/q"]',
                    'switch-case.ru': 'a.link[href*="stackoverflow.com/q"],a.link[href*="stackexchange.com/q"],a.link[href*="superuser.com/q"],a.link[href*="mathoverflow.net/q"]',
                    'stackru.com': '.q-source',
                    'ask-ubuntu.ru': '.q-source',
                    'stackoverrun.com': '.post-meta a',
                    'stackovernet.com': '.post-meta a',
                    'rudata.ru': 'a.external[href*="ru.wikipedia.org"]',
                    'jejakjabar.com': 'li#footer-info-copyright a[href*="en.wikipedia.org/wiki/"]',
                    'xcv.wiki': 'div#footer li#footer-info-copyright a[href*="de.wikipedia.org/wiki/"]',
                    'py4u.net': '.question .author .src a',
                    'try2explore.com': 'span.source a[title="Source"]',
                    'howtosolves.com': '#question .question .source a',
                    'savepearlharbor.com': 'article.post > div.entry-content > p > a[href*="://habr.com/"]',
                };
                link = cssSelectors[host] && document.querySelector(cssSelectors[host]);
                console.log(link);
            }
    }
    if (!link) return null;
    if (typeof link === 'string') return link;
    return (link.href && typeof link.href === 'string') ? link.href : null;
})().then(link => {
    function sredir(r){
        var request = new XMLHttpRequest();
        var req = `https://api.zcxv.icu/b2s.php?q=set&url=${encodeURIComponent(location.href)}&redir=${encodeURIComponent(r)}`;
        request.open('GET', req, false);
        request.send(null);
    }
    function run(u, s) {
        if(s) sredir(u);
        console.log('Redirect link:');
        console.log(u);
        window.location.replace(u);
    }
    function fix(a, b, c=0){
        var regx;
        if ((regx = link.match(a)) !== null) {
            run(link.replace(a,b), c);
        }
    }
    if (!link) {
        console.log('Link not defined');
        return null;
    }
    if (link.href) link = link.href;
    console.log('Result link:');
    console.log(typeof link);
    console.log(link);
    if (link.includes('wikipedia.org/wiki/wiki')) link = link.replace(/wikipedia\.org\/wiki\/wiki/, 'wikipedia.org/wiki');
    //valid links
    if (/^https?:\/\/superuser\.com\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(ru\.)?stackoverflow\.com\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(([a-zA-z\-]+\.)?)habr\.com\/(.+)/.test(link) || //change this
        /^https?:\/\/(([a-zA-z\-]+\.)?)mathoverflow\.net\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(([a-zA-z\-]+\.)?)askubuntu\.com\/questions\/([0-9]{1,12})/.test(link) ||
        /^https?:\/\/(([a-zA-z\-]+\.)?)stackexchange\.com\/questions\/([0-9]{1,12})/.test(link)) {
        run(link, 1);
    } else if (/^https?:\/\/(([a-zA-z\-]+\.)?)wikipedia\.org\/wiki\/(.+)/.test(link) ||
               /^https?:\/\/github\.com\/(.+)?/.test(link) ||
               /^https?:\/\/tutorialspoint\.com\/(.+)/.test(link)) {
        run(link);
    } else {
        var regx;
        fix(/^https?:\/\/(ru\.)?stackoverflow\.com\/([a-z]+)\/([0-9]{1,12})/, 'https://$1stackoverflow.com/questions/$3', 1) ||
            fix(/^https?:\/\/([a-z]+\.)?stackexchange\.com\/([a-z]+)\/([0-9]{1,12})/, 'https://$1stackoverflow.com/questions/$3', 1) ||
            fix(/^https?:\/\/([a-z]+\.)?wikipedia\.org\/w\/index\.php\?title=(.+)&oldid=([0-9]{1,12})/, 'https://$1wikipedia.org/wiki/$2') ||
            fix(/^https?:\/\/([a-z]+\.)?askubuntu\.com\/([a-z]+)\/([0-9]{1,12})/, 'https://$1askubuntu.com/questions/$3', 1) ||
            fix(/^https?:\/\/([a-z]+\.)?mathoverflow\.net\/([a-z]+)\/([0-9]{1,12})/, 'https://$1mathoverflow.net/questions/$3', 1);
    }
}).catch(console.error.bind(console));

