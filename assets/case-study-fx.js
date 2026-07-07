/* case-study-fx.js — shared micro-interactions for all case study pages */
(function(){

  /* ── 1. Scroll reveals ── */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var scaleEls  = Array.prototype.slice.call(document.querySelectorAll('[data-scale]'));
  var revealObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add('revealed');
        var sec = en.target.closest && en.target.closest('.sec');
        if(sec) sec.classList.add('sec-revealed');
        revealObs.unobserve(en.target);
      }
    });
  },{ rootMargin:'0px 0px -60px 0px', threshold:0.08 });
  revealEls.concat(scaleEls).forEach(function(el){ revealObs.observe(el); });

  /* ── 2. Sticky nav + dot highlights ── */
  var links    = Array.prototype.slice.call(document.querySelectorAll('.rail a[data-spy]'));
  var ids      = links.map(function(a){ return a.getAttribute('href').slice(1); });
  var sections = ids.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  function setActive(id){ links.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+id); }); }
  setActive(ids[0] || 'context');
  var visible = {};
  var navObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0; });
    var best=null, bestR=-1;
    ids.forEach(function(id){ var r=visible[id]||0; if(r>bestR){bestR=r;best=id;} });
    if(best && bestR>0) setActive(best);
  },{ rootMargin:'-25% 0px -55% 0px', threshold:[0,.25,.5,1] });
  sections.forEach(function(s){ navObs.observe(s); });

  /* ── 3. Cursor follower in hero banner ── */
  var banner = document.querySelector('.banner');
  var follower = document.getElementById('cursor-follow');
  if(banner && follower){
    banner.addEventListener('mousemove', function(e){
      var r = banner.getBoundingClientRect();
      follower.style.top  = (e.clientY - r.top  - 14) + 'px';
      follower.style.left = (e.clientX - r.left - 14) + 'px';
      follower.style.right = 'auto';
    });
    banner.addEventListener('mouseleave', function(){
      follower.style.top   = '24px';
      follower.style.left  = 'auto';
      follower.style.right = '24px';
    });
  }

  /* ── 4. Animated stat counters ── */
  var counters = document.querySelectorAll('[data-count]');
  var countObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target, target = parseInt(el.getAttribute('data-count'), 10);
      var dur = 1100, startTime = null;
      (function step(ts){
        if(!startTime) startTime = ts;
        var prog = Math.min((ts - startTime)/dur, 1);
        var ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.round(target * ease);
        if(prog < 1) requestAnimationFrame(step); else el.textContent = target;
      })(performance.now());
      countObs.unobserve(el);
    });
  },{ threshold:0.5 });
  counters.forEach(function(el){ countObs.observe(el); });

  /* ── 5. Back to top ── */
  var wrap = document.getElementById('rocket-wrap');
  if(wrap){
    window.addEventListener('scroll', function(){
      var show = window.scrollY > 300;
      wrap.style.opacity       = show ? '1' : '0';
      wrap.style.pointerEvents = show ? 'auto' : 'none';
    });
  }
  window.rocketLaunch = function(){
    var btn = document.getElementById('rocket-btn');
    if(!btn) return;
    btn.classList.add('launch');
    setTimeout(function(){ window.scrollTo({top:0,behavior:'smooth'}); }, 300);
    setTimeout(function(){ btn.classList.remove('launch'); btn.style.transform=''; }, 900);
  };

})();
