/* ── 언어 전환 ── */
function setLang(lang) {
  if (lang === 'en') {
    document.body.classList.add('en');
  } else {
    document.body.classList.remove('en');
  }
  document.getElementById('btn-ko').classList.toggle('active', lang === 'ko');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  // 테이블 헤더 교체
  var labels = lang === 'en'
    ? ['Category','Conventional (Lab 3.0)','Rond Lab™ (Lab 4.0)']
    : ['비교 항목','기존 접근 (Lab 3.0)','Rond Lab™ (Lab 4.0)'];
  ['th1','th2','th3'].forEach(function(id,i){ document.getElementById(id).textContent = labels[i]; });
}

/* ── 스크롤 fade-up 애니메이션 ── */
var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(function(el){ io.observe(el); });

/* ── 차트 바 애니메이션 ── */
var chartIO = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.chart-bar-fill').forEach(function(bar) {
        var w = bar.getAttribute('data-w');
        if (w) { setTimeout(function(){ bar.style.width = w; }, 200); }
      });
      chartIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
var tc = document.getElementById('tatChart');
if (tc) chartIO.observe(tc);

/* ── 앵커 스크롤 ── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
