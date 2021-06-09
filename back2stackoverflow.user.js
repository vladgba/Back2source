// ==UserScript==
// @name         Back2stackoverflow
// @version      0.1.60
// @description  Redirect to stackoverflow.com from machine-translated sites
// @namespace    taraflex
// @author       taraflex.red@gmail.com
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @downloadURL  https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @updateURL    https://raw.githubusercontent.com/Taraflex/Back2stackoverflow/master/back2stackoverflow.user.js
// @homepageURL  https://github.com/Taraflex/Back2stackoverflow
// @supportURL   https://github.com/Taraflex/Back2stackoverflow/issues
// @grant        GM_xmlhttpRequest
// @noframes
// @match        *://*.answer-id.com/*
// @match        *://*.answeright.com/*
// @match        *://*.ask-ubuntu.ru/questions/*
// @match        *://*.askdev.info/questions/*
// @match        *://*.askdev.ru/q/*
// @match        *://*.askvoprosy.com/voprosy/*
// @match        *://*.bildiredi.com/*
// @match        *://*.bilee.com/*.html
// @match        *://*.ciupacabra.com/*
// @match        *://*.code-examples.net/*/q/*
// @match        *://*.code.i-harness.com/*/q/*
// @match        *://*.codeindex.ru/q/*
// @match        *://*.codengineering.ru/q/*
// @match        *://*.coderoad.ru/*
// @match        *://*.coderquestion.ru/q/*
// @match        *://*.coredump.biz/questions/*
// @match        *://*.de-vraag.com/*
// @match        *://*.donolik.com/*
// @match        *://*.e-learn.cn/topic/*
// @match        *://*.exceptionshub.com/*
// @match        *://*.fooobar.com/questions/*
// @match        *://*.generacodice.com/*
// @match        *://*.husl.ru/questions/*
// @match        *://*.intellipaat.com/community/*/*
// @match        *://*.issue.life/questions/*
// @match        *://*.it-swarm-vi.com/*/*
// @match        *://*.it-swarm.asia/*/*
// @match        *://*.it-swarm.dev/*/*
// @match        *://*.it-swarm.net/*/*
// @match        *://*.it-swarm.xyz/*/*
// @match        *://*.itdaan.com/*
// @match        *://*.itranslater.com/qa/details/*
// @match        *://*.kompsekret.ru/q/*
// @match        *://*.kotaeta.com/*
// @match        *://*.overcoder.net/q/*
// @match        *://*.poweruser.guru/*
// @match        *://*.prog-help.ru/*
// @match        *://*.qa.1r1g.com/sf/ask/*
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
// @match        *://*.quabr.com/*/*
// @match        *://*.sprosi.pro/questions/*
// @match        *://*.stackanswers.net/questions/*
// @match        *://*.stackoom.com/question/*
// @match        *://*.stackovernet.com/*
// @match        *://*.stackovernet.xyz/*
// @match        *://*.stackoverrun.com/*
// @match        *://*.stackoverrun.xyz/*
// @match        *://*.stackru.com/questions/*
// @match        *://*.switch-case.com/*
// @match        *://*.thinbug.com/q/*
// @match        *://*.ubuntugeeks.com/questions/*
// @match        *://*.uwenku.com/question/*
// @match        *://*.v-resheno.ru/*
// @match        *://*.voidcc.com/question/*
// @match        *://*.web-answers.ru/*/*
// @match        *://*.while-do.com/*
// @match        *://*.xbuba.com/*
// @match        *://*.xszz.org/*/question-*
// @match        *://*.ylhow.com/*
// @match        *://*.zapytay.com/*
// ==/UserScript==

// Down list: -----------------------------------------------
/// @match        *://*.src-bin.com/*/q/* Site not found
/// @match        *://*.vike.io/*/*/* Oops!
/// @match        *://*.soinside.com/question/*  Connection Timeout
/// @match        *://*.myht.ru/question/* 404
/// @match        *://*.programqa.com/question/* ssl
/// @match        *://*.develop-bugs.com/article/* PR_CONNECT_RESET_ERROR
/// @match        *://*.developreference.com/article/* PR_CONNECT_RESET_ERROR
/// @match        *://*.oipapio.com/question-* Ads
/// @match        *://*.quick-geek.github.io/answers/* 404
/// @match        *://*.weekly-geekly.github.io/articles/* 404
/// @match        *://*.brokencontrollers.com/faq/* ??
/// @match        *://*.qaru.site/questions/*
/// @match        *://*.icode9.com/* redir(csdn) or nolink
/// @match        *://*.legkovopros.ru/questions/*
/// @match        *://*.ffff65535.com/*/q/*   RIP
/// @match        *://*.qna.one/* PR_END_OF_FILE_ERROR
/// @match        *://*.programmerz.ru/questions/* ads
/// @match        *://*.4answered.com/questions/* is for sale
/// @match        *://*.pytannie.com/* sale/rip
/// @match        *://*.sozdizimi.com/* rip
/// @match        *://*.switch-case.ru/* down/rip
/// @match        *://*.365airsoft.com/*/questions/*  - not found site & results in search
/// @match        *://*.codeday.me/*/* rip?
/// @match        *://*.code-adviser.com/detail_* - bad cert domain & error
/// @match        *://*.progaide.com/question/* not found site & results in search
/// @match        *://*.stackz.ru/ru/*/*  - not found site & results in search
/// @match        *://*.bonprog.com/question/* not found
/// @match        *://*.bestecode.com/question/* - for sale
/// @match        *://*.progexact.com/question/* - not found site & results in search
/// @match        *://*.rstopup.com/* - is for sale
/// @match        *://*.profikoder.com/question/* - is for sale

/*
xbuba.com - cert expired, but site works
issue.life - cert expired, but site works
publish.codeday.me - SSL_ERROR_RX_RECORD_TOO_LONG
donolik.com  - redirect to answer-id.com
bildiredi.com  - redirect to answer-id.com
//*/

/*
partial support if page have images from stackoverflow:
kompsekret.ru
askdev.ru
*/

(async () => {
    'use strict';

    /**
     * @param {string} bgcolor
     * @param {string} link
     */
    async function promtRedirect(bgcolor, link) {
        const dialog = document.createElement('div');
        try {
            document.body.appendChild(dialog);
            const shadowRoot = dialog.attachShadow ?
                  dialog.attachShadow({ mode: 'open' }) :
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
<div class="m">[ Back2stackoverflow ] <a id="ok-btn" href="#">Try to find the original question?<a href="#" class="search-icon"> ⌕<a></a><span id="close-btn">✖</button></span>`;
            shadowRoot.querySelector('#ok-btn').href = shadowRoot.querySelector('.search-icon').href = link;
            await new Promise((_, reject) => {
                //shadowRoot.querySelector('#ok-btn').addEventListener('click', reject);
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
        //todo гугл переводчик вставляет пробелы где не нужно, исследовать вокруг каких знаков стоит удалять пробелы
        q = q.replace(/ \/ /g, '/');
        q = 'https://api.browser.yandex.ru/dictionary/translate?statLang=en&targetLang=en&text=' + encodeURIComponent(q) + (sourceLang ? '&fromLang=' + sourceLang : '')
        try {
            //dosn't work in chrome
            return await fetch(q, { mode: 'no-cors', credentials: 'omit' })
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

    /**
     * @param {string} q
     * @param {Date} [before]
     * @param {Date} [after]
     * @param {string[]} [tags]
     */

    async function redirectUseTranslator(response) {
        location.replace(
            await searchStackoverflow(
                new DOMParser().parseFromString(response.match(/<.+>/), 'text/html').getElementById('tw-answ-target-text').textContent));
    }
    async function searchStackoverflow(searchText) {
        // Search with Stack Exchange's API
        return await fetch(`https://api.stackexchange.com/search?intitle=${searchText}&site=stackoverflow`)
            .then(response => response.json())
            .then(json => {
            const item = json.items[0];
            return item ? item.link : `https://stackexchange.com/search?q=${searchText}`;
        });
    }
    function findByApi(q, before, after, tags) {
        q = dropMarks(q);
        var dfgdr = q && fetch(
            `https://api.stackexchange.com/2.2/search?page=1&pagesize=1&order=desc&sort=relevance&intitle=${encodeURIComponent(q)}&site=stackoverflow` +
            (after ? '&fromdate=' + (after.getTime() / 1000 - 120 | 0) : '') +
            (before ? '&todate=' + (before.getTime() / 1000 + 120 | 0) : '') +
            (Array.isArray(tags) && tags.length > 0 ? '&tagged=' + encodeURIComponent(Array.from(new Set(tags)).join(';')) : '')
            , { credentials: 'omit' })
        .then(r => r.json())
        .then(r => r.items && r.items[0] && r.items[0].link);
        console.log(dfgdr);
        return dfgdr;
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

        for(var i = 0;i<e.length;i++){
            var t = e[i].innerText.trim();
            var f = t.indexOf(text);
            console.log(t);
            console.log(f);
            console.log(text.length);
            if(f==0){
                return t.substr(text.length).trim();
            }
        }
    }

    /**
     * @param {string} s
     * @param {boolean} [real]
     */

    function toSearch(s, real) {
        s = dropMarks(s);
        return s ? `https://stackoverflow.com/search?back2stackoverflow=${+!!real}&q=` + encodeURIComponent(s) : null;
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
        return s && ' ' + s.toLowerCase() + ' '
    }

    /**
     * @param {string} s
     */

    let auxiliaryRe = null;
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
    * @param {string} s
    */
    function onlyAlphanum(s) {
        return s && s.replace(/[^a-z0-9]+/gi, '');
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

    if (href.startsWith('https://stackoverflow.com/search?back2stackoverflow=')) {
        const searchParams = new URLSearchParams(location.search);
        const prepare = +searchParams.get('back2stackoverflow') ? pipe(dropMarks, normalize, onlyAlphanum) : pipe(dropMarks, normalize, removeAuxiliary, onlyAlphanum);
        const q = searchParams.get('q');
        const preparedQ = prepare(q);
        if (preparedQ) {
            //@ts-ignore
            link = all('.result-link a').find(link => link.href.indexOf('/' + q, 36) !== -1 || preparedQ.startsWith(prepare(link.textContent.replace(/^\s*(Q|A):/, ''))));
            if (link) {
                try {
                    //@ts-ignore
                    history.replaceState(null, null, link.href);
                } catch (e) { }
                //@ts-ignore
                return link.href;
            } else {
                return `https://www.google.com/search?q=${encodeURIComponent(q)}+site%3Astackoverflow.com`;
            }
        }
    }

    const host = location.hostname.split('.').slice(-2).join('.');
    switch (host) {
        case 'qa.1r1g.com':
        case 'askubuntu.ru':
        case 'bilee.com':
            // Search using Google Translate
            var selectors = {
                '1r1g.com': '.col a',
                'askubuntu.ru': '.catalog-container > .block-title',
                'bilee.com': 'a > .text-uppercase'
            };

            var sourceElement = document.querySelector(selectors[host]);

            var postURL = 'https://www.google.com/async/translate?';
            var postHeader = { 'Content-Type': 'application/x-www-form-urlencoded' };
            var postData = `async=translate,sl:auto,tl:en,st:${encodeURIComponent(sourceElement.textContent)},id:0,qc:true,ac:true,_fmt:pc`;

            if (typeof GM_xmlhttpRequest == 'function') {
                // For Tampermonkey & Violentmonkey
                GM_xmlhttpRequest({ url: postURL, method: 'POST', headers: postHeader, data: postData, onload: response => redirectUseTranslator(response.response) });
            }
            else {
                // For Greasemonkey
                redirectUseTranslator(await fetch(postURL, { method: 'POST', headers: postHeader, body: postData }).then(response => response.text()));
            }

            return;
        case 'legkovopros.ru':
            var legkovopros = await yaTranslate(textContent('h1'), 'ru');
            return (await findByApi(legkovopros, null, null, allTexts('.tag'))) || promtRedirect('#55b252', toSearch(legkovopros));
        case 'vike.io':
            var vike = textContent('h1');
            if (vike) {
                vike = await yaTranslate(vike.replace(/[^–]+–\s/, ''), location.pathname.split('/', 2).find(Boolean));
                var d = new Date(document.querySelector('.question-box .author__date').getAttribute('datetime'));
                return (await findByApi(vike, d, d, allTexts('.tags__item--blue'))) || promtRedirect('#09c199', toSearch(vike));
            }
            return;
        case 'soinside.com':
            var soinside = await yaTranslate(textContent('h1'), 'zh');
            return soinside && ((await findByApi(soinside, null, null, allTexts('.q-tag'))) || promtRedirect('#007bff', toSearch(soinside)));
        /*case '1r1g.com':
            var qa1r1g = await yaTranslate(textContent('h1'), 'zh');
            return qa1r1g && ((await findByApi(qa1r1g, null, null, allTexts('.badge'))) || promtRedirect('#343a40', toSearch(qa1r1g)));*/
        case 'xszz.org':
            return findByApi(
                textContent('.page-title'),
                new Date(document.querySelector('.gp-meta-date').getAttribute('datetime'))
            );
        case 'develop-bugs.com':
        case 'developreference.com':
            var parts = document.title.split(' - ');
            var tag = parts.pop();
            return findByApi(parts.join(' - '), null, null, [tag]);
        case 'intellipaat.com':
            return findByApi(
                textContent('h1'),
                new Date(document.querySelector('.qa-q-view-main time').getAttribute('datetime')),
                null,
                allTexts('.qa-q-view-main .qa-tag-link')
            );
        case 'oipapio.com':
            return findByApi(
                textContent('h1').replace(/^.*? - /, ''),
                new Date(textContent('.post-meta .date')),
                null,
                allTexts('.category')
            );
        case 'ylhow.com':
            var ylhow = document.querySelector('.entry-content > p > a[href*="stackoverflow.com/"]');
            if(ylhow !==null && ylhow.innerText.includes('原文')){
                return ylhow.href;
            }
            return null;
        case 'e-learn.cn':
            return startsByText('div.content p:last-child','来源：');
        case 'icode9.com':
            return textContent('#paragraph > p:last-child').split('来源：', 2)[1].trim();
        case 'v-resheno.ru':
            return textContent('.linkurl > b');
        case 'stackoom.com':
            return byNumber(document.getElementById('question').dataset.questionid);
        case 'poweruser.guru':
            return document.querySelector('div.post-menu a.suggest-edit-post[href*="superuser.com/questions/"]');
        case 'myht.ru':
            return byNumber(lastPathPart().split('-', 1)[0]);
        case 'ffff65535.com':
        case 'src-bin.com':
        case 'i-harness.com':
        case 'code-examples.net':
            return byNumber(lastPathPart(), 16);
        case 'coderoad.ru':
        case 'quabr.com':
            return byNumber(location.pathname.split('/', 2)[1]);
        case 'brokencontrollers.com':
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
        case 'exceptionshub.com':
            if (!/\.html$/.test(location.pathname)) {
                return;
            }//отсутствие break - не ошибка
        case 'stackanswers.net':
        case 'askvoprosy.com':
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'stackz.ru':
            var enLink = document.querySelector('a[href^="/en/' + location.pathname.split('/', 3)[2] + '/"]');
            if (enLink) {
                //@ts-ignore
                return enLink.href;
            }
            return toSearch(textContent('h1'), true);
        case 'codeday.me':
            if (location.hostname.startsWith('publish.')) {
                //@ts-ignore
                return all('.panel-body a')[1].href;
            }
        case 'codengineering.ru':
            return toSearch(lastPathPart().replace(/(-closed|-duplicate)?(-\d+)?(\.html)?$/, ''), true);
        case 'askdev.ru':
            var askdev = textContent('.block_share span') ? textContent('h1') : null;
            if (askdev) {
                askdev = await yaTranslate(askdev, 'ru');
                return (await findByApi(askdev, null, null, allTexts('.block_taxonomies a'))) || promtRedirect('#970f1b', toSearch(askdev));
            }
            askdev = document.querySelector('img[src*="/images/content/"]');
            if(askdev===null) return null;
            link = new URL(askdev.src);
            return 'https://stackoverflow.com/questions/' + link.pathname.split('/')[3];
        case 'kompsekret.ru':
            var kompsekret = document.querySelector('img[src*="/images/content/"]');
            if(kompsekret===null) return null;
            link = new URL(kompsekret.src);
            return 'https://superuser.com/questions/' + link.pathname.split('/')[3];
        case 'itdaan.com':
            var uv = document.querySelector('input[name="url"]');
            //@ts-ignore
            return uv && uv.value;
        default:
            if (document.location.hostname.includes('codeindex.ru') || document.location.hostname.includes('qa-help.ru')) {
                link = document.querySelector('span.text-muted.fake_url');
                if(link!==null){
                    return link.getAttribute('src');//do not touch, dot notation isnt better
                }
            }else if (document.location.hostname.includes('stackovernet') || document.location.hostname.includes('stackoverrun')) {
                link = document.querySelector('.post-meta a[href*="stackoverflow.com/q"]');
                if(link!==null){
                    return link.href;
                }
            }else if (document.location.hostname.includes('qastack')) {
                alert();
                //return byNumber(location.pathname.split('/', 3)[2]);
                link = document.querySelector('span.text-muted.fake_url');
                if(link!==null){
                    return link.getAttribute('src');//do not touch, dot notation isnt better
                }
                link = document.querySelector('.text-muted a[href*="stackoverflow.com/q"],.text-muted a[href*="stackexchange.com/q"],.text-muted a[href*="superuser.com/q"],.text-muted a.link[href*="mathoverflow.net/q"]');
                if(link!==null){
                    return link.href;
                }
            } else {
                const cssSelectors = {
                    //'kompsekret.ru': '.question-text > .a-link', self link
                    //'qaru.site': '.question-text > .aa-link',
                    'fooobar.com': '.question-text > .aa-link',
                    'askdev.info': '.question-text > .a-link',
                    'ubuntugeeks.com': '.question-text > .a-link',
                    'prog-help.ru': '.eclip > a[href*="stackoverflow.com/q"]',
                    'generacodice.com': '#fontePrincipale > a.link',

                    'qa-help.ru': 'a.uncolored-text[href*="stackoverflow.com/q"]',//встречаются вопросы с ru.stackoverflow.com
                    'programmerz.ru': '.source-share-link',
                    '4answered.com': '.view_body span a',
                    'qna.one': '.page-container-question .source-share-block a',
                    '365airsoft.com': '.origin > a',
                    'codeday.me': '.article-es-url > a',
                    'code-adviser.com': '.meta_data a',
                    'web-answers.ru': '.source > a',
                    'sprosi.pro': '#qsource > a',
                    'overcoder.net': '.info_outlink',
                    'qacode.ru': '.question-info .cc-link',
                    'rstopup.com': '.td-post-content .origlink > a',
                    'itranslater.com': '.body > div:last-child > a',
                    'voidcc.com': '.source > a',
                    'qarus.ru': 'em > a',
                    'uwenku.com': '.post-info a',
                    /*'quick-geek.github.io'*/ 'github.io': '.question-hyperlink',
                    'e-learn.cn': '.zhuanzai + div a',
                    'codeindex.ru': '.text-muted.small',
                    'husl.ru': '.source-link',
                    'qarchive.ru': 'cite > a',
                    /*'answeright.com': '.wrapper-question-card .v-card__actions > a:not(.edited-author-button):not(.category-question-button)',
                'answer-id.com': '.footer_question.mt-3 > a',*/
                    'answeright.com': 'a.link[href*="stackoverflow.com/q"],a.link[href*="stackexchange.com/q"],a.link[href*="superuser.com/q"],a.link[href*="mathoverflow.net/q"]',//necessary?
                    'answer-id.com': 'a.link[href*="stackoverflow.com/q"],a.link[href*="stackexchange.com/q"],a.link[href*="superuser.com/q"],a.link[href*="mathoverflow.net/q"]',

                    'it-swarm-vi.com': '.gat[data-cat="q-source"]',
                    'it-swarm.xyz': '.gat[data-cat="q-source"]',
                    'it-swarm.asia': '.gat[data-cat="q-source"]',
                    'it-swarm.dev': '.gat[data-cat="q-source"]',
                    'it-swarm.net': '.gat[data-cat="q-source"]',

                    'stackru.com': '.q-source',
                    'ask-ubuntu.ru': '.q-source',

                    'stackoverrun.com': '.post-meta a',
                    'stackovernet.com': '.post-meta a',

                    //'.footer_question:last-of-type > a'
                    'kotaeta.com': '.footer_question.mt-3 > a',
                    'ciupacabra.com': '.footer_question.mt-3 > a',
                    'de-vraag.com': '.footer_question.mt-3 > a',
                    'switch-case.ru': '.footer_question.mt-3 > a',
                    'switch-case.com': '.footer_question.mt-3 > a',
                    'bildiredi.com': '.footer_question.mt-3 > a',
                    'donolik.com': '.footer_question.mt-3 > a',
                    'pytannie.com': '.footer_question.mt-3 > a',
                    'sozdizimi.com': '.footer_question.mt-3 > a',
                    'zapytay.com': '.footer_question.mt-3 > a',
                    'while-do.com': '.footer_question.mt-3 > a'
                };
                link = cssSelectors[host] && document.querySelector(cssSelectors[host]);
            }

    }
    if(link===undefined || link===null || link.href===undefined || link.href===null) return null;
    link = link.href;
    if(link.length<1) return null;
    if(/^https?:\/\/superuser\.com\/questions\/([0-9]{1,12})/.test(link) || /^https?:\/\/(ru\.)?stackoverflow\.com\/questions\/([0-9]{1,12})/.test(link) || /^https?:\/\/(([a-zA-z\-]+\.)?)stackexchange\.com\/questions\/([0-9]{1,12})/.test(link)){
        return link;
    } else {
        var regx = link.match(/https?:\/\/(ru\.)?stackoverflow\.com\/([a-z]+)\/([0-9]{1,12})/);
        if(regx!==null) {
            console.log(regx);
            if(regx[1]!==undefined) {
                return 'https://' + regx[1] + 'stackoverflow.com/questions/' + regx[3];
            }
            return byNumber(regx[3]);
        }
        regx = link.match(/https?:\/\/([a-zA-z]+\.)?stackexchange\.com\/([a-z]+)\/([0-9]{1,12})/);
        if(regx!==null) {
            return 'https://' + (regx[1]!==undefined ? regx[1]:'') + 'stackexchange.com/questions/' + regx[3];
        }
        regx = link.match(/https?:\/\/([a-zA-z]+\.)?askubuntu\.com\/([a-z]+)\/([0-9]{1,12})/);
        if(regx!==null) {
            return 'https://' + (regx[1]!==undefined ? regx[1]:'') + 'askubuntu.com/questions/' + regx[3];
        }
        regx = link.match(/https?:\/\/([a-zA-z]+\.)?mathoverflow\.net\/([a-z]+)\/([0-9]{1,12})/);
        if(regx!==null) {
            return 'https://' + (regx[1]!==undefined ? regx[1]:'') + 'mathoverflow.net/questions/' + regx[3];
        }
        console.log('Not allowed link:');
        console.log(link);
        return null;

    }
})().then(u => u && (window.location.replace(u))).catch(console.error.bind(console));
