/* Painting Brighton - Scout, the shop dog */
(function () {
  "use strict";
  var TEL = "+17202085645", DISP = "720-208-5645";

  /* ---------- Scout artwork: a retro hotline phone with a painter's cap ---------- */
  function dog(extra) {
    return '<svg class="' + (extra || '') + '" viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scout, the Painting Brighton shop dog">' +
      '<defs><linearGradient id="scCoat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b86a3"/><stop offset="1" stop-color="#48617a"/></linearGradient>' +
      '<linearGradient id="scCap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f6f4e"/><stop offset="1" stop-color="#1d4733"/></linearGradient></defs>' +
      /* paint can beside the dog */
      '<path d="M16 214 h58 l-6 70 h-46z" fill="#dfe3e8" stroke="#b9bdc2" stroke-width="3"/>' +
      '<rect x="14" y="206" width="62" height="11" rx="4" fill="#b9bdc2"/>' +
      '<rect x="26" y="232" width="38" height="18" rx="4" fill="#2f6f4e"/>' +
      '<text x="45" y="245" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">PAINT</text>' +
      /* tail */
      '<path class="sc-tail" d="M196 214 q34 -10 36 -44" fill="none" stroke="url(#scCoat)" stroke-width="18" stroke-linecap="round"/>' +
      /* body */
      '<ellipse cx="146" cy="226" rx="56" ry="48" fill="url(#scCoat)"/>' +
      '<ellipse cx="132" cy="246" rx="34" ry="28" fill="#e9eef3"/>' +
      /* front legs */
      '<rect x="110" y="250" width="20" height="40" rx="10" fill="url(#scCoat)"/>' +
      '<rect x="152" y="250" width="20" height="40" rx="10" fill="url(#scCoat)"/>' +
      '<ellipse cx="120" cy="290" rx="13" ry="8" fill="#e9eef3"/><ellipse cx="162" cy="290" rx="13" ry="8" fill="#e9eef3"/>' +
      /* bandana */
      '<path d="M104 176 q44 26 86 0 l-10 26 q-33 18 -66 0z" fill="#c6472c"/>' +
      '<path d="M140 198 l10 20 l12 -16z" fill="#a13a21"/>' +
      /* head */
      '<ellipse cx="146" cy="142" rx="50" ry="44" fill="url(#scCoat)"/>' +
      '<ellipse cx="146" cy="164" rx="28" ry="24" fill="#e9eef3"/>' +
      /* ears */
      '<path class="sc-ear" d="M106 112 q-16 -42 6 -52 q18 -6 22 42z" fill="#48617a"/>' +
      '<path d="M186 112 q16 -42 -6 -52 q-18 -6 -22 42z" fill="#48617a"/>' +
      /* face */
      '<circle cx="130" cy="140" r="6" fill="#1d2b3a"/><circle cx="132" cy="138" r="2" fill="#fff"/>' +
      '<circle cx="162" cy="140" r="6" fill="#1d2b3a"/><circle cx="164" cy="138" r="2" fill="#fff"/>' +
      '<ellipse cx="146" cy="160" rx="10" ry="8" fill="#1d2b3a"/>' +
      '<path d="M146 168 q-12 12 -22 4" stroke="#1d2b3a" stroke-width="3.4" fill="none" stroke-linecap="round"/>' +
      '<path d="M146 168 q12 12 22 4" stroke="#1d2b3a" stroke-width="3.4" fill="none" stroke-linecap="round"/>' +
      '<path class="sc-tongue" d="M140 176 q6 18 14 2z" fill="#e2788c"/>' +
      /* painter cap */
      '<path d="M98 116 a50 36 0 0 1 96 0z" fill="url(#scCap)"/>' +
      '<path d="M188 112 h30 a7 7 0 0 1 0 14 h-30z" fill="#2f6f4e"/>' +
      '<rect x="118" y="96" width="56" height="16" rx="4" fill="#e9a826"/>' +
      '<text x="146" y="109" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="bold" fill="#1d4733" text-anchor="middle">BRIGHTON</text>' +
      /* brush in mouth area, held low */
      '<rect x="196" y="236" width="10" height="56" rx="5" fill="#c98b3a" transform="rotate(12 201 264)"/>' +
      '<rect x="190" y="286" width="22" height="13" rx="3" fill="#b9bdc2" transform="rotate(12 201 292)"/>' +
      /* bark bubbles */
      '<g class="sc-bark" fill="none" stroke="#e9a826" stroke-width="5" stroke-linecap="round">' +
      '<path d="M214 120 q12 -12 10 -30"/><path d="M230 132 q18 -16 16 -42"/></g>' +
      '</svg>';
  }

  var css = document.createElement('style');
  css.textContent = [
    '.sc-launch{position:fixed;right:16px;bottom:16px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px}',
    '.sc-btn{width:148px;height:170px;background:none;border:0;padding:0;cursor:pointer;filter:drop-shadow(0 10px 20px rgba(7,51,111,.32));transition:transform .2s}',
    '.sc-btn:hover{transform:translateY(-4px) rotate(-2deg)}',
    '.sc-btn svg{width:100%;height:100%;display:block}',
    '.sc-ear{transform-origin:120px 112px;animation:scshake 4.6s ease-in-out infinite}',
    '.sc-tail{transform-origin:196px 214px;animation:sctail 1.6s ease-in-out infinite}',
    '.sc-tongue{transform-origin:146px 176px;animation:sctongue 2.8s ease-in-out infinite}',
    '@keyframes scshake{0%,72%,100%{transform:rotate(0)}78%{transform:rotate(-10deg)}86%{transform:rotate(6deg)}}',
    '@keyframes sctail{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(14deg)}}',
    '@keyframes sctongue{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}',
    '.sc-bark{opacity:0;animation:scring 4.6s ease-in-out infinite}',
    '@keyframes scring{0%,70%,100%{opacity:0}76%{opacity:1}86%{opacity:.4}}',
    '.sc-led{animation:scled 2.2s ease-in-out infinite}',
    '@keyframes scled{0%,100%{opacity:1}50%{opacity:.35}}',
    '.sc-cord{stroke-dasharray:6 10;animation:sccord 2.4s linear infinite}',
    '@keyframes sccord{to{stroke-dashoffset:-32}}',
    '.sc-tip{background:#fff;color:#122033;border:2px solid #0a4fae;border-radius:14px 14px 4px 14px;padding:10px 30px 10px 13px;font:700 .92rem/1.3 Inter,system-ui,sans-serif;max-width:238px;box-shadow:0 10px 26px rgba(7,51,111,.2);position:relative;margin-right:22px;cursor:pointer}',
    '.sc-tip button{position:absolute;top:3px;right:5px;border:0;background:none;font-size:1.05rem;color:#5d6b7e;cursor:pointer;line-height:1}',
    '.sc-dock{position:fixed;right:0;top:44%;transform:translateY(-50%);z-index:975;display:flex;flex-direction:column;gap:8px;align-items:flex-end}',
    '.sc-dock button{display:flex;align-items:center;gap:9px;background:#07336f;color:#fff;border:0;border-radius:12px 0 0 12px;padding:12px 14px 12px 12px;font:700 .86rem Inter,system-ui,sans-serif;cursor:pointer;box-shadow:-4px 6px 18px rgba(7,51,111,.26)}',
    '.sc-dock button.alt{background:#b03a2e}',
    '.sc-dock button:hover{filter:brightness(1.1);padding-right:18px}',
    '.sc-dock .mini{width:30px;height:34px;flex-shrink:0}',
    '.sc-dock .mini svg{width:100%;height:100%}',
    '.sc-panel{position:fixed;right:16px;bottom:16px;width:400px;max-width:calc(100vw - 24px);height:646px;max-height:calc(100vh - 110px);background:#fff;border:1px solid #dce3ec;border-radius:16px;box-shadow:0 28px 72px rgba(7,51,111,.32);z-index:1000;display:flex;flex-direction:column;overflow:hidden}',
    '.sc-head{background:linear-gradient(135deg,#07336f,#14323a);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
    '.sc-head .av{width:46px;height:46px;border-radius:14px;background:#fff;display:grid;place-items:center;overflow:hidden;flex-shrink:0}',
    '.sc-head .av svg{width:42px;height:auto}',
    '.sc-head b{font:700 1.02rem Inter,system-ui,sans-serif;display:block}',
    '.sc-head i{font-style:normal;font-size:.76rem;color:rgba(255,255,255,.82);display:flex;align-items:center;gap:6px}',
    '.sc-head i::before{content:"";width:8px;height:8px;border-radius:50%;background:#2ee07a;box-shadow:0 0 0 0 rgba(46,224,122,.7);animation:scled 2.2s ease-in-out infinite}',
    '.sc-head .call{margin-left:auto;background:#ffc233;color:#3a2b00;border:0;border-radius:8px;padding:8px 10px;font:700 .82rem Inter,system-ui,sans-serif;text-decoration:none}',
    '.sc-head .x{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:8px;padding:6px 9px;cursor:pointer;font-weight:700}',
    '.sc-tape{height:5px;background:linear-gradient(90deg,#b03a2e,#ffc233,#0f7e74,#14323a);}',
    '.sc-prog{height:4px;background:#e7edf5}.sc-prog i{display:block;height:100%;width:0;background:#b03a2e;transition:width .35s}',
    '.sc-body{flex:1;overflow-y:auto;padding:14px;background:#eceae3;font:1rem/1.55 Inter,system-ui,sans-serif;color:#122033}',
    '.sc-msg{max-width:88%;padding:10px 13px;border-radius:14px;margin-bottom:10px;font-size:.95rem}',
    '.sc-msg.bot{background:#fff;border:1px solid #dce3ec;border-bottom-left-radius:4px}',
    '.sc-msg.me{background:#07336f;color:#fff;margin-left:auto;border-bottom-right-radius:4px}',
    '.sc-msg a{color:inherit}',
    '.sc-opts{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #dce3ec}',
    '.sc-opt{background:#fff;border:1px solid #0a4fae;color:#0a4fae;border-radius:9px;padding:8px 11px;font:600 .88rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.sc-opt:hover{background:#0a4fae;color:#fff}',
    '.sc-opt.hot{background:#b03a2e;border-color:#b03a2e;color:#fff}',
    '.sc-foot{display:flex;gap:7px;padding:10px 14px;border-top:1px solid #dce3ec;background:#fff}',
    '.sc-foot input{flex:1;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#eceae3}',
    '.sc-foot button{background:#ffc233;border:0;border-radius:9px;padding:10px 14px;font-weight:700;color:#3a2b00;cursor:pointer}',
    '.sc-f{background:#fff;border:1px solid #dce3ec;border-radius:12px;padding:14px;margin-bottom:10px}',
    '.sc-f label{display:block;font:600 .84rem Inter,system-ui,sans-serif;color:#122033;margin:9px 0 4px}',
    '.sc-f input,.sc-f select,.sc-f textarea{width:100%;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#eceae3;color:#122033}',
    '.sc-f .duo{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}',
    '.sc-f button.go{width:100%;margin-top:12px;background:#b03a2e;color:#fff;border:0;border-radius:9px;padding:13px;font:700 1rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.sc-note{font-size:.8rem;color:#5d6b7e;margin-top:8px}',
    '.sc-ticket{background:#07336f;color:#fff;border-radius:12px;padding:16px;margin-bottom:12px;font-family:Inter,system-ui,sans-serif}',
    '.sc-ticket b{display:block;font-size:1.35rem;color:#ffc233;letter-spacing:.04em}',
    '.sc-ticket .ln{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;padding:5px 0;border-bottom:1px dashed rgba(255,255,255,.26)}',
    '.sc-ticket .ln:last-of-type{border-bottom:0}',
    '.sc-ticket small{display:block;margin-top:8px;color:rgba(255,255,255,.82);font-size:.82rem}',
    '@media (max-width:640px){.sc-panel{right:6px;left:6px;width:auto;bottom:74px;top:60px;height:auto;max-height:none}',
    '.sc-launch{right:4px;bottom:74px}.sc-btn{width:104px;height:120px}.sc-tip{font-size:.84rem;max-width:176px;margin-right:12px}',
    '.sc-dock{top:150px;bottom:auto;transform:none}.sc-dock button{padding:10px 10px 10px 8px;font-size:.74rem}.sc-dock .mini{width:24px;height:28px}}',
    '@media (prefers-reduced-motion:reduce){.sc-ear,.sc-tail,.sc-tongue,.sc-bark,.sc-led{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }

  var launch = el('<div class="sc-launch"><button class="sc-btn" id="scBtn" aria-label="Chat with Scout, our shop dog" aria-expanded="false">' + dog('') + '</button></div>');
  document.body.appendChild(launch);
  var dock = el('<div class="sc-dock">' +
    '<button data-mode="quote"><span class="mini">' + dog('') + '</span>Quick quote</button>' +
    '<button class="alt" data-mode="callback"><span class="mini">' + dog('') + '</span>Call me back</button></div>');
  document.body.appendChild(dock);

  var panel = null, answers = {}, log = [], capture = null, started = false;

  function openPanel(mode) {
    if (!panel) {
      panel = el('<div class="sc-panel" role="dialog" aria-modal="false" aria-label="Painter Hotline chat">' +
        '<div class="sc-head"><span class="av">' + dog('') + '</span><span><b>Scout</b><i>Brighton, CO</i></span>' +
        '<a class="call" href="tel:' + TEL + '">' + DISP + '</a><button class="x" aria-label="Close us chat">X</button></div>' +
        '<div class="sc-tape"></div><div class="sc-prog"><i id="scProg"></i></div>' +
        '<div class="sc-body" id="scBody"></div><div class="sc-opts" id="scOpts"></div>' +
        '<div class="sc-foot"><label class="sr" for="scIn">Type a message to us</label>' +
        '<input id="scIn" placeholder="Ask us anything..." autocomplete="off"><button id="scSend">Send</button></div></div>');
      document.body.appendChild(panel);
      panel.querySelector('.x').addEventListener('click', closePanel);
      panel.querySelector('#scSend').addEventListener('click', typed);
      panel.querySelector('#scIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') typed(); });
    }
    panel.hidden = false;
    launch.style.display = 'none';
    document.getElementById('scBtn').setAttribute('aria-expanded', 'true');
    if (mode === 'quote') startQuote();
    else if (mode === 'callback') startCallback();
    else if (!started) greet();
  }
  function closePanel() {
    if (panel) panel.hidden = true;
    launch.style.display = '';
    document.getElementById('scBtn').setAttribute('aria-expanded', 'false');
  }
  document.getElementById('scBtn').addEventListener('click', function () { openPanel(); });
  dock.querySelectorAll('button').forEach(function (b) { b.addEventListener('click', function () { openPanel(b.dataset.mode); }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-quote]');
    if (a) { e.preventDefault(); openPanel('quote'); }
  });

  function say(html, who) {
    var b = document.getElementById('scBody');
    b.appendChild(el('<div class="sc-msg ' + (who || 'bot') + '">' + html + '</div>'));
    b.scrollTop = b.scrollHeight;
  }
  function opts(list) {
    var o = document.getElementById('scOpts'); o.innerHTML = '';
    list.forEach(function (x) {
      var b = el('<button class="sc-opt' + (x.hot ? ' hot' : '') + '" type="button">' + x.label + '</button>');
      b.addEventListener('click', function () { say(x.label, 'me'); log.push('Visitor: ' + x.label); o.innerHTML = ''; x.fn(); });
      o.appendChild(b);
    });
  }
  function prog(p) { var b = document.getElementById('scProg'); if (b) b.style.width = (p * 100) + '%'; }
  function form(html) {
    document.getElementById('scOpts').innerHTML = '';
    var b = document.getElementById('scBody'), f = el('<div class="sc-f">' + html + '</div>');
    b.appendChild(f); b.scrollTop = b.scrollHeight; return f;
  }

  /* ---------- knowledge base ---------- */
  var SITE_ID = "paintingbrighton.com";
  var KB = [
    [/\\b(hail|storm|dent|pit|claim|insurance|adjuster|damage)\\b/i, 'Order of operations matters here more than anything. Document before you paint. A fresh coat leaves an adjuster looking at a wall with no record of what was underneath. We photograph and write up damage by elevation before any prep starts, free, whether you file or not. Look at all four sides too, not just the street side, because hail comes in at an angle and north and west usually take the worst. <a href="/hail-damage-repainting/">Hail repaints</a>.'],
    [/\\b(new (house|build|home)|builder|three years|five years|fading|chalk|why.*already)\\b/i, 'Production builders put on one thin coat of the cheapest paint that passes walkthrough. Less binder means UV breaks it down faster, so fading and chalking at three to five years is the product doing exactly what it was bought to do. Not a defect and usually not a warranty claim. Rub the sunny wall: powder on your hand means it is time. <a href="/guides/builder-grade-paint/">The full explanation</a>.'],
    [/\\b(barn|outbuilding|shop|pole building|metal building|shed|farm|agricultur|livestock)\\b/i, 'We quote these, which most residential painters will not. Metal needs rust taken back to sound metal mechanically and a primer made for metal, plus attention to every fastener and seam because that is where it starts. Old wood barns usually want a penetrating stain rather than a film coating, since film bonds to surface fibers that are already loose. <a href="/barn-and-outbuilding-painting/">Barns and outbuildings</a>.'],
    [/\\b(lochbuie|hudson|fort lupton|keenesburg|platteville|henderson|todd creek|corridor|how far|travel)\\b/i, 'All of those are on our regular route, not the far edge of a service radius. Brighton, Lochbuie, Hudson, Fort Lupton, Keenesburg, Platteville, Henderson and Todd Creek. We group projects into corridor trips, so there is no travel premium; it just means booking a little further ahead for the outer towns. <a href="/service-area/">The whole corridor</a>.'],
    [/\\b(wind|windy|dust|gust|open|plains|exposed)\\b/i, 'Different from the foothills. Out here it blows steadily for hours rather than gusting, which skins a coating faster than the manufacturer intended and drives agricultural dust straight into a wet film. We move to a sheltered elevation, switch to brush and roller, or stop for the day. It occasionally costs a day and it is always the right call.'],
    [/\\b(hoa|covenant|approval|palette|architectural|board)\\b/i, 'Common in Brighton Crossing, Prairie Center and most of Todd Creek, and some communities want approval even for a similar shade. Check the covenants before you fall in love with a color. We prepare samples and the submission, and boards move faster than people expect when the paperwork arrives complete.'],
    [/\\b(hardboard|masonite|siding|swollen|soft|bottom edge|cut end)\\b/i, 'Classic finding on 1990s and 2000s corridor housing. Swollen soft bottom edges mean the hardboard is taking on water, usually because the cut ends were never sealed. Failed sections get replaced and every cut end sealed before coating; paint over a swollen board is a cosmetic delay.'],
    [/\\b(cost|price|how much|expensive|quote|budget)\\b/i, 'Published 2026 Front Range figures: exteriors roughly $1.55 to $4.10 a square foot, interiors about $1.50 to $3.50, cabinets $2,000 to $8,000 a kitchen. Out here hail repair and the state of chalked builder paint move it more than square footage. Estimates are free, and the 25% off labor runs through October 31. <a href="/painting-cost-brighton-co/">Breakdown</a>.'],
    [/\\b(cheap|cheaper|lowest|compare|bid.*(low|differ)|why.*(difference|gap))\\b/i, 'Ask every bidder five things in writing: the insurance certificate, the prep itemized by surface, the exact product line and sheen, the coat count with primer separate, and whether they walked all four elevations for hail. The gap between quotes nearly always sits in one of those five.'],
    [/\\b(fence|linear|perimeter|acreage|long run)\\b/i, 'Fences out here are a volume question because the lots are bigger. Three things to settle before you collect quotes: one side or both, which roughly doubles it; solid or semi-transparent, and on fencing we usually push solid; and whether failed pickets and leaning posts are in scope. All three move the number a lot.'],
    [/\\b(deck|stain|seal|railing|pergola)\\b/i, 'Pour a cup of water on the boards. Beads means the seal is holding; soaks in means it is time. Clean, brighten to put the pH back, sand where the grain raised, then seal. Stain rather than paint on anything horizontal. Open-exposure decks out here often need attention every two to three years since nothing shades them.'],
    [/\\b(cabinet|kitchen|oak|thermofoil|spray|refinish)\\b/i, 'Degrease, scuff sand, bonding primer, sprayed cabinet-grade topcoat, doors done off-site. One Brighton-specific warning: a lot of newer builder kitchens are thermofoil, which is vinyl film over fiberboard. It can be painted, but if it is already peeling or bubbling near a heat source, paint will not fix that and those doors need replacing. <a href="/cabinet-painting-brighton-co/">Cabinets</a>.'],
    [/\\b(prep|preparation|what.*included|scope|process|how do you)\\b/i, 'Exterior: protect everything, wash, treat mildew, assess for hail, scrape to a sound edge, repair substrate, sand transitions, fill, caulk every joint, prime all bare and repaired areas, then two finish coats. Interior: cover and protect, patch, match texture, caulk, spot prime, two coats. Every step itemized by surface on the estimate.'],
    [/\\b(season|when can you|winter|spring|weather|cold|temperature|book)\\b/i, 'Mid-May through early October for exteriors. Local records put the average last spring freeze near May 5 and the first autumn freeze near October 7. What governs a given day is the overnight low, because the film cures after dark, though out here wind often decides the afternoon. Interiors year-round, and November to March has the open calendar.'],
    [/\\b(warranty|guarantee|if it fails|stand behind)\\b/i, 'Five years on workmanship, written, exclusions printed. Covers peeling, flaking and adhesion failure from our prep or application. Does not cover UV fading, or new hail after we paint, which is an insurance matter rather than a workmanship one. Free inspection on any claim. <a href="/warranty/">Full terms</a>.'],
    [/\\b(insur|licen|bonded|certificate)\\b/i, 'Fully insured, certificate at the estimate rather than on request afterward. Colorado issues no statewide painting license, so insurance plus a detailed written scope is the whole of your protection. Ask every bidder for both.'],
    [/\\b(lead|1978|old house|downtown|historic)\\b/i, 'Downtown Brighton and the older cores of Fort Lupton and Platteville are largely pre-1978, where federal EPA rules require certified firms plus containment, defined work methods and verified cleanup when painted surfaces get disturbed. It adds real time and it is in the estimate honestly.'],
    [/\\b(brand|sherwin|ppg|what paint|product)\\b/i, 'Sherwin-Williams and PPG. Your estimate names the exact line and sheen per surface, so you can pull the manufacturer data sheet and check it yourself.'],
    [/\\b(deposit|payment|pay|invoice|financ)\\b/i, 'A deposit holds your dates and the balance follows the walkthrough, once you have looked at everything and signed off. Both figures are printed on the written estimate.'],
    [/\\b(how long|how many days|duration|schedule)\\b/i, 'A straightforward corridor exterior is often three to five days. One interior room is usually a day, a full interior three days to two weeks. Hail repair and outbuildings add time, and your estimate states the real schedule rather than an optimistic one.'],
  ];

  function lookup(t) { for (var i = 0; i < KB.length; i++) if (KB[i][0].test(t)) return KB[i][1]; return null; }

  function typed() {
    var inp = document.getElementById('scIn'), t = inp.value.trim();
    if (!t) return;
    inp.value = ''; say(t, 'me'); log.push('Visitor: ' + t);
    if (capture) { var fn = capture; capture = null; fn(t); return; }
    var a = lookup(t);
    say(a || 'I would rather get you a real answer than guess at that one. The fastest path is a quick quote, or call <a href="tel:' + TEL + '">' + DISP + '</a> and ask a painter directly.');
    menu();
  }
  function menu() {
    opts([{ label: 'Run a quick quote', hot: true, fn: startQuote },
          { label: 'Have someone call me', fn: startCallback },
          { label: 'Another question', fn: function () { say('Go ahead, type it below.'); } }]);
  }

  function greet() {
    started = true;
    say('Hey there, I am <strong>Scout</strong>, the shop dog around here. I can do three things well: run a <strong>quick quote</strong> in about ninety seconds, get a painter to <strong>call you back</strong> in a window you pick, or just answer what you actually want to know before anybody talks price. Where do you want to start?');
    opts([{ label: 'Quick quote', hot: true, fn: startQuote },
          { label: 'Call me back', fn: startCallback },
          { label: 'What makes you different?', fn: whyUs },
          { label: 'I have a question first', fn: function () { say('Ask away. Cost, timing, prep, warranty, towns we cover, anything.'); } }]);
  }

  /* ---------- value building ---------- */
  function whyUs() {
    log.push('Visitor asked why Painter Hotline');
    say('Short version, and none of it is hard to verify.');
    setTimeout(function () {
      say('<strong>Specialized crews.</strong> Exterior, interior, cabinets and commercial are different skills. You get the crew that does your kind of work every day, not whoever was free.');
    }, 350);
    setTimeout(function () {
      say('<strong>20+ years in Colorado.</strong> Which mostly means we know what fails here: south walls chalking, sprinklers soaking the bottom courses, caulk joints opening over the freeze-thaw season.');
    }, 900);
    setTimeout(function () {
      say('<strong>A dedicated project manager</strong> so one person owns your project, <strong>full insurance</strong> with the certificate in your file, and a <strong>5-year workmanship warranty</strong> in writing.');
      opts([
        { label: 'What does doing it twice cost?', fn: twiceCost },
        { label: 'Run a quick quote', hot: true, fn: startQuote },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 1500);
  }
  function twiceCost() {
    say('Here is the math nobody enjoys. A cheap repaint that skips washing, scraping and priming usually looks fine through the first season. By the second or third Colorado winter the trim is peeling and the south wall is chalking.');
    setTimeout(function () {
      say('Now the next painter has to <strong>remove</strong> the failed coating before they can start, which is work nobody paid for the first time. So you pay for the cheap job, the removal, and then the job done correctly. That is why our preparation is itemized in writing instead of hidden in a lump sum.');
      opts([
        { label: 'Makes sense, price my project', hot: true, fn: startQuote },
        { label: 'What is in your prep?', fn: function () { say(lookup('prep') || ''); menu(); } },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 900);
  }

  /* ---------- quick quote ---------- */
  var Q = {};
  function startQuote() {
    Q = {}; answers = {}; prog(.1);
    say('Quick quote it is. <strong>What are we painting?</strong>');
    opts([
      { label: 'Home exterior', fn: function () { Q.t = 'ext'; answers.project = 'Exterior house painting'; qExtSize(); } },
      { label: 'Interior rooms', fn: function () { Q.t = 'int'; answers.project = 'Interior painting'; qIntSize(); } },
      { label: 'Kitchen cabinets', fn: function () { Q.t = 'cab'; answers.project = 'Cabinet painting'; qCab(); } },
      { label: 'Deck or fence', fn: function () { Q.t = 'deck'; answers.project = 'Deck or fence staining'; qDeck(); } },
      { label: 'Commercial property', fn: function () { Q.t = 'com'; answers.project = 'Commercial property'; qCommercial(); } }
    ]);
  }
  function qExtSize() {
    prog(.25); say('<strong>What size is the building?</strong>');
    opts([
      { label: 'Single story', fn: function () { Q.sq = 1600; Q.h = 1; answers.size = 'Single story'; qExtCond(); } },
      { label: 'Two story', fn: function () { Q.sq = 2600; Q.h = 1.12; answers.size = 'Two story'; qExtCond(); } },
      { label: 'Large or walkout', fn: function () { Q.sq = 3400; Q.h = 1.2; answers.size = 'Large or walkout'; qExtCond(); } },
      { label: 'Townhome or condo', fn: function () { Q.sq = 1100; Q.h = 1.05; answers.size = 'Townhome or condo'; qExtCond(); } }
    ]);
  }
  function qExtCond() {
    prog(.45); say('<strong>How is the existing paint holding up?</strong> Rub a sunny wall and look at the trim.');
    opts([
      { label: 'Faded but sound', fn: function () { Q.c = 1; answers.condition = 'Faded but sound'; qZone(); } },
      { label: 'Chalky, caulk cracking', fn: function () { Q.c = 1.14; answers.condition = 'Chalky with cracked caulk'; qZone(); } },
      { label: 'Peeling in spots', fn: function () { Q.c = 1.3; Q.visit = true; answers.condition = 'Peeling in spots'; qZone(); } },
      { label: 'Peeling badly, bare wood', fn: function () { Q.c = 1.45; Q.visit = true; answers.condition = 'Peeling badly with bare wood'; qZone(); } }
    ]);
  }
  function qIntSize() {
    prog(.25); say('<strong>How much space?</strong>');
    opts([
      { label: '1 room', fn: function () { Q.sq = 350; answers.size = '1 room'; qIntScope(); } },
      { label: '2-3 rooms', fn: function () { Q.sq = 850; answers.size = '2-3 rooms'; qIntScope(); } },
      { label: '4-6 rooms', fn: function () { Q.sq = 1600; answers.size = '4-6 rooms'; qIntScope(); } },
      { label: 'Whole house', fn: function () { Q.sq = 2400; answers.size = 'Whole house'; qIntScope(); } }
    ]);
  }
  function qIntScope() {
    prog(.45); say('<strong>Walls only, or trim and ceilings too?</strong>');
    opts([
      { label: 'Walls only', fn: function () { Q.c = 1; answers.scope = 'Walls only'; qZone(); } },
      { label: 'Walls and trim', fn: function () { Q.c = 1.14; answers.scope = 'Walls and trim'; qZone(); } },
      { label: 'Walls, trim and ceilings', fn: function () { Q.c = 1.3; answers.scope = 'Walls, trim and ceilings'; qZone(); } },
      { label: 'Repairs needed first', fn: function () { Q.c = 1.35; Q.visit = true; answers.scope = 'Repairs needed before painting'; qZone(); } }
    ]);
  }
  function qCab() {
    prog(.3); say('<strong>Roughly how many cabinet doors and drawer fronts?</strong>');
    opts([
      { label: '10-18', fn: function () { Q.d = 15; answers.size = '10-18 pieces'; qCabFinish(); } },
      { label: '20-35', fn: function () { Q.d = 28; answers.size = '20-35 pieces'; qCabFinish(); } },
      { label: '36-50', fn: function () { Q.d = 43; answers.size = '36-50 pieces'; qCabFinish(); } },
      { label: 'More than 50', fn: function () { Q.d = 60; answers.size = 'More than 50 pieces'; qCabFinish(); } }
    ]);
  }
  function qCabFinish() {
    prog(.5); say('<strong>What is on them now?</strong>');
    opts([
      { label: 'Stained wood', fn: function () { Q.c = 1.05; answers.condition = 'Stained wood'; qZone(); } },
      { label: 'Factory painted, good', fn: function () { Q.c = 1; answers.condition = 'Factory painted, good shape'; qZone(); } },
      { label: 'Painted and chipping', fn: function () { Q.c = 1.25; Q.visit = true; answers.condition = 'Previously painted, chipping'; qZone(); } },
      { label: 'Laminate or thermofoil', fn: function () { Q.c = 1.18; Q.visit = true; answers.condition = 'Laminate or thermofoil'; qZone(); } }
    ]);
  }
  function qDeck() {
    prog(.3); say('<strong>What are we sealing?</strong>');
    opts([
      { label: 'Small deck', fn: function () { Q.sq = 260; answers.size = 'Small deck'; qDeckCond(); } },
      { label: 'Medium deck', fn: function () { Q.sq = 450; answers.size = 'Medium deck'; qDeckCond(); } },
      { label: 'Large deck with rails', fn: function () { Q.sq = 700; answers.size = 'Large deck with railings'; qDeckCond(); } },
      { label: 'Fence, or deck and fence', fn: function () { Q.sq = 850; answers.size = 'Fence, or deck and fence'; qDeckCond(); } }
    ]);
  }
  function qDeckCond() {
    prog(.5); say('<strong>What shape is the wood in?</strong>');
    opts([
      { label: 'Maintained', fn: function () { Q.c = 1; answers.condition = 'Maintained'; qZone(); } },
      { label: 'Gray and weathered', fn: function () { Q.c = 1.18; answers.condition = 'Gray and weathered'; qZone(); } },
      { label: 'Old stain peeling', fn: function () { Q.c = 1.4; Q.visit = true; answers.condition = 'Old stain peeling, stripping needed'; qZone(); } },
      { label: 'Boards may need replacing', fn: function () { Q.c = 1.32; Q.visit = true; answers.condition = 'Possible board replacement'; qZone(); } }
    ]);
  }
  function qCommercial() {
    answers.project = 'Commercial property'; Q.visit = true;
    prog(.5); say('Commercial work always starts with a walkthrough so the scope, access and phasing are right before anyone quotes a number. <strong>What kind of property?</strong>');
    opts([
      { label: 'Office or suite', fn: function () { answers.size = 'Office or suite'; qZone(); } },
      { label: 'Retail or restaurant', fn: function () { answers.size = 'Retail or restaurant'; qZone(); } },
      { label: 'Warehouse or industrial', fn: function () { answers.size = 'Warehouse or industrial'; qZone(); } },
      { label: 'HOA or multi-unit', fn: function () { answers.size = 'HOA or multi-unit'; qZone(); } }
    ]);
  }
  function qZone() {
    prog(.68); say('<strong>Where is the property?</strong> Region affects scheduling and sometimes product choice.');
    opts([
      { label: 'Denver metro', fn: function () { Q.z = 1; answers.region = 'Denver metro'; qWhen(); } },
      { label: 'North or Boulder County', fn: function () { Q.z = 1.02; answers.region = 'North / Boulder County'; qWhen(); } },
      { label: 'Eastern plains', fn: function () { Q.z = 1.04; answers.region = 'Eastern plains'; qWhen(); } },
      { label: 'Foothills or mountains', fn: function () { Q.z = 1.12; answers.region = 'Foothills or mountain town'; qWhen(); } }
    ]);
  }
  function qWhen() {
    prog(.82); say('<strong>How soon do you want it done?</strong>');
    opts([
      { label: 'This week if possible', fn: function () { answers.timeline = 'This week if possible'; result(); } },
      { label: 'Within a month', fn: function () { answers.timeline = 'Within a month'; result(); } },
      { label: '1 to 3 months', fn: function () { answers.timeline = '1 to 3 months'; result(); } },
      { label: 'Pricing and planning', fn: function () { answers.timeline = 'Pricing and planning'; result(); } }
    ]);
  }
  function ticket() {
    var n = Math.floor(Math.random() * 9000) + 1000;
    return 'PH-' + (new Date().getMonth() + 1) + (new Date().getDate()) + '-' + n;
  }
  function result() {
    prog(.9);
    var c = Q.c || 1, z = Q.z || 1, lo, hi;
    if (Q.t === 'ext') { lo = Q.sq * 1.55 * (Q.h || 1); hi = Q.sq * 4.10 * (Q.h || 1); }
    else if (Q.t === 'int') { lo = Q.sq * 1.50; hi = Q.sq * 3.50; }
    else if (Q.t === 'cab') { lo = 1800 + (Q.d - 20) * 62; hi = 3600 + (Q.d - 20) * 126; }
    else if (Q.t === 'deck') { lo = Q.sq * 2.10; hi = Q.sq * 4.60; }
    else { lo = 0; hi = 0; }
    Q.ticket = ticket();
    answers.ticket = Q.ticket;
    if (lo) {
      lo = Math.round(lo * c * z / 50) * 50; hi = Math.round(hi * c * z / 50) * 50;
      var lod = Math.round(lo * .75 / 50) * 50, hid = Math.round(hi * .75 / 50) * 50;
      answers.ballpark = '$' + lo.toLocaleString() + ' - $' + hi.toLocaleString();
      answers.ballpark_after_discount = '$' + lod.toLocaleString() + ' - $' + hid.toLocaleString();
      say('<div class="sc-ticket"><b>$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + '</b>' +
        '<span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span>' +
        '<span class="ln"><span>Scope</span><span>' + (answers.size || answers.scope || '') + '</span></span>' +
        '<span class="ln"><span>Region</span><span>' + (answers.region || '') + '</span></span>' +
        '<span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span>' +
        '<small>Published 2026 Front Range range for this scope. With 25% off labor on projects booked by October 31, 2026, most of this scope lands around <strong>$' + lod.toLocaleString() + ' - $' + hid.toLocaleString() + '</strong>. Paint and materials are not included in the discount.</small></div>');
    } else {
      say('<div class="sc-ticket"><b>Walkthrough first</b><span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span><span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span><small>Commercial scopes get measured on site so the bid is line-item accurate rather than a guess.</small></div>');
    }
    if (Q.visit) {
      say('Heads up: what you described is worth <strong>seeing in person</strong>. Peeling, water damage, failing finishes and commercial access all change the prep plan, and the visit is free either way.');
      answers.recommendation = 'Site visit recommended';
    } else {
      answers.recommendation = 'Photo quote suitable';
    }
    setTimeout(function () {
      say('One honest question before I take your details: if a written proposal comes back at that number, with the preparation spelled out and your dates confirmed, is that something you would be ready to move forward on?');
      opts([
        { label: 'Yes, if the details are right', hot: true, fn: function () { answers.intent = 'Ready to move forward if details fit'; collect('quote'); } },
        { label: 'Maybe, I want to compare', fn: function () { answers.intent = 'Comparing options'; say('Smart. When you compare, look at four lines: the preparation, the exact product and sheen, the number of coats, and the warranty. A lower number is almost always one of those four being smaller. Let me get you the written version so you have something real to compare.'); collect('quote'); } },
        { label: 'Just gathering information', fn: function () { answers.intent = 'Information gathering'; say('No pressure at all. I will still get you the written scope so you have a real benchmark whenever you are ready.'); collect('quote'); } }
      ]);
    }, 700);
  }

  function startCallback() {
    answers = {}; log.push('Visitor chose callback'); prog(.5);
    say('Easy. Pick a window and a painter will call you back at that time.');
    opts([
      { label: 'Next hour or two', fn: function () { answers.callback_window = 'Next hour or two'; collect('callback'); } },
      { label: 'This afternoon', fn: function () { answers.callback_window = 'This afternoon'; collect('callback'); } },
      { label: 'Tomorrow morning', fn: function () { answers.callback_window = 'Tomorrow morning'; collect('callback'); } },
      { label: 'Any time, just call', fn: function () { answers.callback_window = 'Any time'; collect('callback'); } }
    ]);
  }

  function collect(kind) {
    prog(.95);
    say(kind === 'callback' ? 'Who am I putting on the board?' : 'Last step. Where should the written quote go, and can you add photos?');
    var f = form(
      '<label for="scNm">Your name</label><input id="scNm" autocomplete="name">' +
      '<div class="duo"><div><label for="scPh">Phone</label><input id="scPh" type="tel" inputmode="tel" autocomplete="tel"></div>' +
      '<div><label for="scZp">ZIP code</label><input id="scZp" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div></div>' +
      '<label for="scEm">Email</label><input id="scEm" type="email" autocomplete="email">' +
      (kind === 'callback' ? '<label for="scWhat">What is the project?</label><input id="scWhat" placeholder="Exterior repaint, cabinets, deck...">' :
        '<label for="scPhotos">Photos (up to 4)</label><input id="scPhotos" type="file" accept="image/*" multiple>') +
      '<label for="scMs">Anything else?</label><textarea id="scMs" rows="2"></textarea>' +
      '<button class="go" type="button" id="scGo">' + (kind === 'callback' ? 'Put me on the callback list' : 'Send it to us') + '</button>' +
      '<p class="sc-note">Used only to prepare your quote. Prefer to talk now? Call <a href="tel:' + TEL + '">' + DISP + '</a>.</p>');
    f.querySelector('#scGo').addEventListener('click', function () { send(kind, f, this); });
  }

  function send(kind, f, btn) {
    var nm = f.querySelector('#scNm').value.trim(), ph = f.querySelector('#scPh').value.trim();
    if (!nm || ph.replace(/\D/g, '').length < 10) { say('I need a name and a 10-digit number so someone can actually reach you.'); return; }
    btn.disabled = true; btn.textContent = 'Sending...';
    var fd = new FormData();
    fd.append('source_site', 'paintingbrighton.com Scout ' + (kind === 'callback' ? 'callback request' : 'quick quote'));
    fd.append('user_name', nm); fd.append('user_phone', ph);
    fd.append('user_email', f.querySelector('#scEm').value.trim());
    fd.append('user_zip', f.querySelector('#scZp').value.trim());
    if (f.querySelector('#scWhat')) fd.append('project_type', f.querySelector('#scWhat').value.trim());
    fd.append('user_message', f.querySelector('#scMs').value.trim());
    fd.append('request_type', kind === 'callback' ? 'Callback requested' : 'Quick quote');
    Object.keys(answers).forEach(function (k) { fd.append(k, answers[k]); });
    fd.append('chat_transcript', log.join('\n') || 'Hotline intake only');
    var fin = f.querySelector('#scPhotos');
    var pics = (window.PBX && PBX.photos) ? PBX.photos(fin) : Promise.resolve([]);
    pics.then(function (list) {
      list.forEach(function (p, i) { fd.append('photo_' + (i + 1), p); });
      return (window.PBX && PBX.send) ? PBX.send(fd, 'HOTLINE ' + (kind === 'callback' ? 'CALLBACK' : 'QUICK QUOTE') + ': Painter Hotline') : Promise.resolve('fail');
    }).then(function (state) {
      prog(1);
      if (state === 'ok') {
        f.remove();
        say('You are on the board, ' + nm.split(' ')[0] + '.' + (answers.ticket ? ' Ticket <strong>' + answers.ticket + '</strong>.' : '') + ' A painter will call to confirm the details. Need us sooner, call <a href="tel:' + TEL + '">' + DISP + '</a>.');
        opts([{ label: 'Thanks, Scout', fn: closePanel }]);
      } else if (state === 'blocked' || state === 'fast') {
        btn.disabled = false; btn.textContent = 'Send it to us';
        say('Give that one more second, then send it again.');
      } else {
        btn.disabled = false; btn.textContent = 'Try again';
        say('I could not confirm that went through. Please call <a href="tel:' + TEL + '">' + DISP + '</a> so it does not get lost.');
      }
    });
  }

  var hid = false;
  try { hid = sessionStorage.getItem('scTipX') === '1'; } catch (e) { }
  if (!hid) {
    setTimeout(function () {
      if (panel && !panel.hidden) return;
      var tip = el('<div class="sc-tip" role="status">I can price your Brighton project in about ninety seconds. Want to try?<button type="button" aria-label="Dismiss">&times;</button></div>');
      launch.insertBefore(tip, launch.firstChild);
      tip.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') { tip.remove(); try { sessionStorage.setItem('scTipX', '1'); } catch (x) { } }
        else openPanel();
      });
    }, 1400);
  }

  var s2 = document.createElement('style');
  s2.textContent = '.ringer b{white-space:nowrap}@media (max-width:760px){.ringer b{font-size:1.08rem!important;letter-spacing:-.02em}}@media (max-width:400px){.ringer b{font-size:1rem!important}}';
  document.head.appendChild(s2);
})();
