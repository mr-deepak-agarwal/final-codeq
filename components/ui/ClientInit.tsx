'use client';
import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let killed = false;
    const loadAndInit = async () => {
      const [THREE, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('three'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      if (!killed) runLoader(THREE, gsap, ScrollTrigger);
    };
    loadAndInit();
    return () => {
      killed = true;
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      });
    };
  }, []);
  return null;
}

/* ─── LOADER ─────────────────────────────────────────────── */
const runLoader = (THREE: any, gsap: any, ST: any) => {
  const ldw = document.getElementById('ldw');
  const ldb = document.getElementById('ldb') as HTMLElement;
  const ldn = document.getElementById('ldn');
  const loader = document.getElementById('loader');
  if (ldw) setTimeout(() => ldw.classList.add('up'), 100);
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 8 + 2;
    if (p >= 100) {
      clearInterval(iv);
      if (ldb) ldb.style.width = '100%';
      if (ldn) ldn.textContent = '100%';
      setTimeout(() => { loader?.classList.add('gone'); runMain(THREE, gsap, ST); }, 380);
    } else {
      if (ldb) ldb.style.width = p + '%';
      if (ldn) ldn.textContent = Math.floor(p) + '%';
    }
  }, 40);
};

/* ─── MAIN ────────────────────────────────────────────────── */
const runMain = (THREE: any, gsap: any, ST: any) => {
  initCursor();
  initNav();
  initHeroThree(THREE);
  initHeroTerminal();
  initHeroWords(gsap);
  initStory();
  initServicesPeel();       // raw-scroll peel — no GSAP
  initNumbers(gsap, ST);
  initRevealObserver(ST);
  initProcess(ST);
  initAbout(gsap);
  initMagnetic(gsap);
  initFlipCardTilt();
  initParallax(gsap, ST);
  initCTAParticles();
};

/* ─── CURSOR ──────────────────────────────────────────────── */
const initCursor = () => {
  const isTouch = window.matchMedia('(hover: none)').matches;
  const cq = document.getElementById('cursor-q') as HTMLElement | null;
  const lbl = document.getElementById('clabel') as HTMLElement | null;
  if (isTouch || !cq) return;
  cq.style.display = 'block';
  if (lbl) lbl.style.display = 'block';
  let mx = 0, my = 0, qx = 0, qy = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (lbl) { lbl.style.left = mx + 'px'; lbl.style.top = (my + 28) + 'px'; }
  });
  const ql = () => {
    qx += (mx - qx) * 0.18; qy += (my - qy) * 0.18;
    cq.style.left = qx + 'px'; cq.style.top = qy + 'px';
    requestAnimationFrame(ql);
  };
  ql();
  document.querySelectorAll('a,button,.nc,.ps,.fcard').forEach((el) => {
    el.addEventListener('mouseenter', () => cq.classList.add('big'));
    el.addEventListener('mouseleave', () => { cq.classList.remove('big', 'view-mode'); lbl?.classList.remove('show'); });
  });
  document.querySelectorAll('.fcard').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cq.classList.remove('big'); cq.classList.add('view-mode');
      if (lbl) { lbl.textContent = 'Flip'; lbl.classList.add('show'); }
    });
    el.addEventListener('mouseleave', () => { cq.classList.remove('view-mode'); lbl?.classList.remove('show'); });
  });
};

/* ─── NAV ─────────────────────────────────────────────────── */
const initNav = () => {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  window.addEventListener('scroll', () => { nav?.classList.toggle('up', window.scrollY > 20); }, { passive: true });
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }
};

/* ─── HERO THREE.JS ───────────────────────────────────────── */
const initHeroThree = (THREE: any) => {
  const canvas = document.getElementById('hcanvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  r.setPixelRatio(Math.min(devicePixelRatio, 2));
  r.setSize(window.innerWidth, window.innerHeight);
  const s = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  cam.position.z = 50;

  // Particle field
  const cnt = window.innerWidth < 768 ? 1000 : 2800;
  const pArr = new Float32Array(cnt * 3);
  const cArr = new Float32Array(cnt * 3);
  for (let i = 0; i < cnt; i++) {
    pArr[i*3] = (Math.random()-.5)*160; pArr[i*3+1] = (Math.random()-.5)*100; pArr[i*3+2] = (Math.random()-.5)*80;
    const g = Math.random(); cArr[i*3] = g*.08; cArr[i*3+1] = g*.4+.08; cArr[i*3+2] = g*.18;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pArr, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(cArr, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size:.32, vertexColors:true, transparent:true, opacity:.65 }));
  s.add(pts);

  // Wireframe Q builder
  const buildQ = (rad: number, px: number, py: number, pz: number, rz: number, op1: number, op2: number) => {
    const grp = new THREE.Group();
    const cp: any[] = [];
    for (let ci = 0; ci <= 120; ci++) {
      const ang = (ci/120)*Math.PI*1.82 - Math.PI*0.1;
      cp.push(new THREE.Vector3(Math.cos(ang)*rad, Math.sin(ang)*rad, 0));
    }
    grp.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cp), 200, rad*0.021, 8, false),
      new THREE.MeshBasicMaterial({ color:0x2E7D4F, wireframe:true, transparent:true, opacity:op1 })
    ));
    const tail = [
      new THREE.Vector3(rad*.46,-rad*.69,0),
      new THREE.Vector3(rad*.77,-rad*.92,0),
      new THREE.Vector3(rad*1.23,-rad*1.23,0),
    ];
    grp.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tail), 40, rad*0.024, 8, false),
      new THREE.MeshBasicMaterial({ color:0x52C97A, wireframe:true, transparent:true, opacity:op2 })
    ));
    grp.position.set(px, py, pz); grp.rotation.z = rz;
    return grp;
  };

  let qGroup: any, qGroup2: any;
  let tmx = 0, tmy = 0;
  if (window.innerWidth > 768) {
    qGroup  = buildQ(13,  14, -2,  -5,  0.08, 0.13, 0.18); s.add(qGroup);
    qGroup2 = buildQ(7, -14,  6, -12, -0.15, 0.09, 0.10); s.add(qGroup2);
  }

  document.addEventListener('mousemove', (e) => {
    tmx = (e.clientX / window.innerWidth - 0.5);
    tmy = (e.clientY / window.innerHeight - 0.5);
  });

  (function tick() {
    requestAnimationFrame(tick);
    pts.rotation.y += .0003; pts.rotation.x += .0001;
    if (qGroup) {
      qGroup.rotation.y  += .004;
      qGroup.rotation.x  += .002;
    }
    if (qGroup2) {
      qGroup2.rotation.y -= .003;
      qGroup2.rotation.z += .0025;
    }
    cam.position.x += (tmx * 5  - cam.position.x) * .028;
    cam.position.y += (-tmy * 3.5 - cam.position.y) * .028;
    cam.lookAt(s.position);
    r.render(s, cam);
  })();

  window.addEventListener('resize', () => {
    r.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix();
  }, { passive: true });
};

/* ─── HERO TERMINAL (syntax-highlighted) ─────────────────── */
const initHeroTerminal = () => {
  const htb = document.getElementById('htb');
  if (!htb) return;
  htb.innerHTML = '';

  const termLines: { text: string; cls?: string; parts?: {t:string;c:string}[] }[] = [
    { text: '// codeq.tech · 2025', cls: 'c' },
    { text: "const studio = {",            parts: [{t:'const ',c:'k'},{t:'studio',c:'s'},{t:' = {',c:'w'}] },
    { text: '  quality: "non-negotiable",', parts: [{t:'  quality',c:'k'},{t:': ',c:'w'},{t:'"non-negotiable"',c:'s'},{t:',',c:'w'}] },
    { text: '  stack: ["Next.js","AI"],',   parts: [{t:'  stack',c:'k'},{t:': ',c:'w'},{t:'["Next.js","AI"]',c:'s'},{t:',',c:'w'}] },
    { text: '  onTime: 100 + "percent",',   parts: [{t:'  onTime',c:'k'},{t:': ',c:'w'},{t:'100',c:'s'},{t:' + ',c:'w'},{t:'"percent"',c:'s'},{t:',',c:'w'}] },
    { text: '};' },
    { text: 'export default studio; ✓',     parts: [{t:'export default ',c:'k'},{t:'studio',c:'s'},{t:'; ',c:'w'},{t:'✓',c:'c'}] },
  ];

  function typeLine(lineData: typeof termLines[0], doneCb: () => void) {
    const span = document.createElement('span');
    span.style.cssText = 'display:block;min-height:1.7em';
    htb!.appendChild(span);
    const raw = lineData.text;
    let charIdx = 0;
    const cursor = document.createElement('span');
    cursor.textContent = '▋';
    cursor.style.cssText = 'color:var(--ga);animation:blink .7s step-end infinite';
    function typeChar() {
      if (charIdx >= raw.length) {
        if (lineData.parts) {
          span.innerHTML = lineData.parts.map(p => {
            const cc = p.c==='k' ? 'var(--ga)' : p.c==='s' ? 'rgba(240,237,228,.7)' : p.c==='c' ? 'rgba(240,237,228,.3)' : 'inherit';
            return `<span style="color:${cc}">${p.t}</span>`;
          }).join('');
        }
        setTimeout(doneCb, 60);
        return;
      }
      const col = lineData.cls === 'c' ? 'rgba(240,237,228,.3)' : 'rgba(240,237,228,.55)';
      span.innerHTML = `<span style="color:${col}">${raw.slice(0, charIdx + 1)}</span>`;
      span.appendChild(cursor);
      charIdx++;
      setTimeout(typeChar, 28 + Math.random() * 18);
    }
    typeChar();
  }

  let lineIdx = 0;
  function nextLine() {
    if (lineIdx >= termLines.length) return;
    typeLine(termLines[lineIdx++], () => setTimeout(nextLine, 80));
  }
  setTimeout(nextLine, 1600);
};

/* ─── HERO WORD ANIMATION ─────────────────────────────────── */
const initHeroWords = (gsap: any) => {
  gsap.set('.h1w', { y: 90, opacity: 0 });
  document.querySelectorAll('.h1w').forEach((w, i) => {
    gsap.to(w, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: 0.5 + i * 0.13 });
  });
  gsap.from('.hero-badge', { y: 20, opacity: 0, duration: .8, ease: 'power3.out', delay: .3 });
  gsap.from('.hero-right',  { y: 30, opacity: 0, duration: .9, ease: 'power3.out', delay: 1.4 });
};

/* ─── STORY WORD REVEAL (raw scroll, no GSAP quirks) ─────── */
const initStory = () => {
  const storyEl = document.getElementById('story');
  const tws = document.querySelectorAll('#story .tw');
  if (!storyEl || !tws.length) return;

  function updateStoryWords() {
    const sectionTop    = storyEl!.offsetTop;
    const sectionHeight = storyEl!.offsetHeight;
    const scrollable    = sectionHeight - window.innerHeight;
    const scrolled      = window.scrollY - sectionTop;
    const progress      = Math.max(0, Math.min(1, scrolled / scrollable));
    tws.forEach((w: any, i: number) => {
      w.classList.toggle('lit', progress >= i / (tws.length - 1));
    });
  }
  window.addEventListener('scroll', updateStoryWords, { passive: true });
  updateStoryWords();
};

/* ─── SERVICES PEEL (raw scroll — matches HTML exactly) ──── */
const initServicesPeel = () => {
  const wrap = document.getElementById('svcWrap');
  const c1   = document.getElementById('svc1') as HTMLElement | null;
  const c2   = document.getElementById('svc2') as HTMLElement | null;
  const c3   = document.getElementById('svc3') as HTMLElement | null;
  const hint = document.getElementById('svcHint') as HTMLElement | null;
  if (!wrap || !c1 || !c2 || !c3) return;

  function ease(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

  function updatePeel() {
    const wRect     = wrap.getBoundingClientRect();
    const scrollable = wrap.offsetHeight - window.innerHeight;
    const scrolled   = -wRect.top;
    const prog       = Math.max(0, Math.min(1, scrolled / scrollable));

    // phase 1: 0→0.35  card1 (web) peels off
    // phase 2: 0.35→0.7 card2 (AI) peels off
    // phase 3: 0.7→1.0  card3 (systems) peels off
    const p1 = Math.max(0, Math.min(1, prog / 0.35));
    const p2 = Math.max(0, Math.min(1, (prog - 0.35) / 0.35));
    const p3 = Math.max(0, Math.min(1, (prog - 0.7) / 0.3));

    if (hint) hint.style.opacity = prog > 0.02 ? '0' : '1';

    const e1 = ease(p1), e2 = ease(p2), e3 = ease(p3);

    // CARD 1 (svc1 = web — top of stack, z-index 3)
    const op1 = 1 - e1 * 0.85;
    c1.style.transform   = `perspective(1800px) rotateX(${e1 * -62}deg) translateY(${e1 * -48}px)`;
    c1.style.opacity     = String(op1);
    c1.style.boxShadow   = `0 40px 120px rgba(0,0,0,${0.4 * op1})`;
    c1.style.zIndex      = '3';
    c1.style.visibility  = e1 >= 0.99 ? 'hidden' : 'visible';

    // CARD 2 (svc2 = AI — middle, z-index 2)
    if (p2 > 0) {
      const op2 = 1 - e2 * 0.85;
      c2.style.transform  = `perspective(1800px) rotateX(${e2 * -62}deg) translateY(${e2 * -48}px)`;
      c2.style.opacity    = String(op2);
      c2.style.boxShadow  = `0 40px 120px rgba(0,0,0,${0.4 * op2})`;
      c2.style.visibility = e2 >= 0.99 ? 'hidden' : 'visible';
    } else {
      const rise2 = 22 * (1 - e1);
      const sc2   = 0.96 + e1 * 0.04;
      c2.style.transform  = `perspective(1800px) translateY(${rise2}px) scale(${sc2})`;
      c2.style.opacity    = '1';
      c2.style.boxShadow  = '0 40px 120px rgba(0,0,0,0.4)';
      c2.style.visibility = 'visible';
    }
    c2.style.zIndex = '2';

    // CARD 3 (svc3 = systems — bottom, z-index 1)
    if (p3 > 0) {
      const op3 = 1 - e3 * 0.85;
      c3.style.transform  = `perspective(1800px) rotateX(${e3 * -62}deg) translateY(${e3 * -48}px)`;
      c3.style.opacity    = String(op3);
      c3.style.boxShadow  = `0 40px 120px rgba(0,0,0,${0.4 * op3})`;
      c3.style.visibility = e3 >= 0.99 ? 'hidden' : 'visible';
    } else if (p2 > 0) {
      const rise3 = 22 * (1 - e2);
      const sc3   = 0.96 + e2 * 0.04;
      c3.style.transform  = `perspective(1800px) translateY(${rise3}px) scale(${sc3})`;
      c3.style.opacity    = '1';
      c3.style.boxShadow  = '0 40px 120px rgba(0,0,0,0.4)';
      c3.style.visibility = 'visible';
    } else {
      const rise3   = 44 * (1 - e1);
      const sc3     = 0.92 + e1 * 0.08;
      const op3init = Math.min(1, 0.5 + e1 * 0.5);
      c3.style.transform  = `perspective(1800px) translateY(${rise3}px) scale(${sc3})`;
      c3.style.opacity    = String(op3init);
      c3.style.boxShadow  = `0 40px 120px rgba(0,0,0,${0.4 * op3init})`;
      c3.style.visibility = 'visible';
    }
    c3.style.zIndex = '1';
  }

  window.addEventListener('scroll', updatePeel, { passive: true });
  updatePeel();
};

/* ─── NUMBERS ─────────────────────────────────────────────── */
const initNumbers = (gsap: any, ST: any) => {
  document.querySelectorAll('.nv[data-t]').forEach((el: any) => {
    const cell = el.closest('.nc');
    ST.create({
      trigger: el, start: 'top 82%',
      onEnter: () => {
        cell?.classList.add('in');
        const target = +el.dataset.t;
        const suf    = el.dataset.s || '';
        const dur    = 1800;
        const st     = performance.now();
        function go(n: number) {
          const p = Math.min((n - st) / dur, 1);
          const e = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.floor(e * target) + suf;
          if (p < 1) requestAnimationFrame(go);
        }
        requestAnimationFrame(go);
      },
    });
  });
};

/* ─── REVEALS ─────────────────────────────────────────────── */
const initRevealObserver = (ST: any) => {
  document.querySelectorAll('.rv,.rvl').forEach((el) => {
    ST.create({ trigger: el, start: 'top 87%', onEnter: () => el.classList.add('on') });
  });
};

/* ─── PROCESS (with progress ring + step nav) ────────────── */
const initProcess = (ST: any) => {
  const processSteps = document.querySelectorAll('.ps');
  const progressCircle = document.querySelector('.progress-circle') as SVGCircleElement | null;
  const progressPercent = document.getElementById('progressPercent');
  const processNav = document.querySelector('.process-nav');
  const progressContainer = document.querySelector('.process-progress-container');

  // Show/hide fixed overlays
  if (processNav && progressContainer) {
    ST.create({
      trigger: '#process',
      start: 'top center',
      end: 'bottom center',
      onEnter:      () => { processNav.classList.add('visible'); progressContainer.classList.add('visible'); },
      onLeave:      () => { processNav.classList.remove('visible'); progressContainer.classList.remove('visible'); },
      onEnterBack:  () => { processNav.classList.add('visible'); progressContainer.classList.add('visible'); },
      onLeaveBack:  () => { processNav.classList.remove('visible'); progressContainer.classList.remove('visible'); },
    });
  }

  const totalSteps = processSteps.length;
  processSteps.forEach((ps: any, idx: number) => {
    ST.create({
      trigger: ps,
      start: 'top 75%',
      onEnter: () => {
        ps.classList.add('revealed');
        // Update nav circles
        document.querySelectorAll('.process-nav-item').forEach((item: any, i: number) => {
          item.classList.toggle('active', i === idx);
        });
        // Update progress ring
        const pct = Math.round(((idx + 1) / totalSteps) * 100);
        if (progressCircle) {
          const circumference = 314.159;
          progressCircle.style.strokeDashoffset = String(circumference - (circumference * pct / 100));
        }
        if (progressPercent) progressPercent.textContent = pct + '%';
      },
    });
  });

  // Nav click-to-scroll
  document.querySelectorAll('.process-nav-item').forEach((item: any) => {
    item.addEventListener('click', () => {
      const step = item.dataset.step;
      const target = document.querySelector(`.ps[data-step="${step}"]`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
};

/* ─── ABOUT (laptop animation) ───────────────────────────── */
const initAbout = (gsap: any) => {
  const laptopScene  = document.getElementById('laptopScene');
  const aboutSection = document.getElementById('about');
  if (!laptopScene || !aboutSection) return;

  gsap.set(laptopScene, { opacity: 0, y: 30 });
  const laptopObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    laptopObs.disconnect();
    gsap.to(laptopScene, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' });
    runAboutAnimation(gsap);
  }, { threshold: 0.3 });
  laptopObs.observe(aboutSection);

  ['abTop','abHl','abDesc','abVals','abNums'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const o = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { el.classList.add('on'); o.disconnect(); }
    }, { threshold: 0.2 });
    o.observe(el);
  });

  const abNums = document.getElementById('abNums');
  if (!abNums) return;
  const numObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    numObs.disconnect();
    document.querySelectorAll('.ab-num-val').forEach((el: any, i: number) => {
      const target = parseInt(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.5, ease: 'power2.out', delay: i * .07,
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
        onComplete: () => { el.textContent = target + suffix; },
      });
    });
  }, { threshold: 0.3 });
  numObs.observe(abNums);
};

const runAboutAnimation = (gsap: any) => {
  const editor  = document.getElementById('phaseEditor');
  const browser = document.getElementById('phaseBrowser');
  const edCode  = document.getElementById('edCode');
  const edLines = document.getElementById('edLines');
  if (!editor || !browser || !edCode || !edLines) return;

  const codeLines = [
    '<span class="sp">export default</span> <span class="sk">function</span> <span class="sf">HomePage</span>() {',
    '  <span class="sk">return</span> (',
    '    <span class="sg">&lt;main</span> <span class="sf">className</span>=<span class="ss">"hero"</span><span class="sg">&gt;</span>',
    '      <span class="sg">&lt;nav&gt;</span>',
    '        <span class="sg">&lt;Logo</span> <span class="sf">brand</span>=<span class="ss">"codeq"</span> <span class="sg">/&gt;</span>',
    '        <span class="sg">&lt;NavLinks</span> <span class="sg">/&gt;</span>',
    '      <span class="sg">&lt;/nav&gt;</span>',
    '      <span class="sg">&lt;section</span> <span class="sf">className</span>=<span class="ss">"hero-content"</span><span class="sg">&gt;</span>',
    "        <span class=\"sg\">&lt;h1&gt;</span>We build what <span class=\"sg\">&lt;em&gt;</span>others can't<span class=\"sg\">&lt;/em&gt;&lt;/h1&gt;</span>",
    '        <span class="sg">&lt;CTA</span> <span class="sf">primary</span>=<span class="ss">"View our work"</span> <span class="sg">/&gt;</span>',
    '      <span class="sg">&lt;/section&gt;</span>',
    '      <span class="sg">&lt;Services</span> <span class="sf">data</span>={services} <span class="sg">/&gt;</span>',
    '    <span class="sg">&lt;/main&gt;</span>',
    '  )','}',
  ];

  const abItems  = ['siteNav','siteTag','shl1','shl2','siteSub','sbtn1','sbtn2','sc1','sc2','sc3','ss1','ss2','ss3','ss4'];
  const abDelays = [0,150,280,440,580,680,780,900,1040,1160,1300,1400,1500,1600];

  const typeCode = (cb: () => void) => {
    edCode.innerHTML = ''; edLines.innerHTML = '';
    codeLines.forEach((line, i) => {
      setTimeout(() => {
        const num = document.createElement('span');
        num.className = 'ed-line-num'; num.textContent = String(i + 1);
        edLines.appendChild(num);
        const div = document.createElement('div');
        div.className = 'ed-line'; div.innerHTML = line;
        edCode.appendChild(div);
        requestAnimationFrame(() => div.classList.add('show'));
      }, i * (85 + Math.random() * 55));
    });
    setTimeout(cb, codeLines.length * 100 + 500);
  };

  const animateSite = () => {
    abItems.forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('show'), abDelays[i]));
    setTimeout(resetLoop, 7200);
  };

  const showBrowser = () => gsap.to(browser, { opacity: 1, duration: .5, onComplete: animateSite });

  const resetLoop = () => {
    gsap.to(browser, { opacity: 0, duration: .6, onComplete: () => {
      abItems.forEach((id) => document.getElementById(id)?.classList.remove('show'));
      gsap.set(editor, { opacity: 0 });
      gsap.to(editor, { opacity: 1, duration: .4, delay: .2 });
      typeCode(() => { gsap.to(editor, { opacity: 0, duration: .5 }); setTimeout(showBrowser, 400); });
    }});
  };

  gsap.to(editor, { opacity: 1, duration: .4, delay: .3 });
  typeCode(() => { gsap.to(editor, { opacity: 0, duration: .5 }); setTimeout(showBrowser, 400); });
};

/* ─── MAGNETIC BUTTONS ────────────────────────────────────── */
const initMagnetic = (gsap: any) => {
  document.querySelectorAll('.mag').forEach((el: any) => {
    const str = +(el.dataset.s || 22);
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const b = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - (b.left + b.width  / 2)) * (str / 100),
        y: (e.clientY - (b.top  + b.height / 2)) * (str / 100),
        duration: .4, ease: 'power2.out',
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.5)' });
    });
  });
};

/* ─── FLIP CARD SHADOW TILT ───────────────────────────────── */
const initFlipCardTilt = () => {
  document.querySelectorAll('.fcard').forEach((card: any) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const b = card.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width  - .5;
      const y = (e.clientY - b.top)  / b.height - .5;
      card.style.boxShadow = `${-x*20}px ${-y*20}px 40px rgba(7,7,10,.3)`;
    });
    card.addEventListener('mouseleave', () => { card.style.boxShadow = ''; });
  });
};

/* ─── PARALLAX ────────────────────────────────────────────── */
const initParallax = (gsap: any, ST: any) => {
  gsap.to('.orb-a', { y: -50, ease: 'none', scrollTrigger: { trigger: '#story', start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
  gsap.to('.orb-b', { y: -100, x: 30, ease: 'none', scrollTrigger: { trigger: '#story', start: 'top bottom', end: 'bottom top', scrub: 2 } });
  gsap.to('#hcanvas', { y: 100, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
};

/* ─── CTA PARTICLES ───────────────────────────────────────── */
const initCTAParticles = () => {
  const ctap = document.getElementById('ctap');
  if (!ctap) return;
  const snippets = ['const q = "quality"','npm run build','git push origin main','type: "production"','✓ 98 lighthouse','export default function','next.js 14','zero downtime','mobile-first'];
  for (let i = 0; i < 12; i++) {
    const cp = document.createElement('div');
    cp.className = 'cp'; cp.textContent = snippets[i % snippets.length];
    cp.style.left = (Math.random() * 95) + '%';
    cp.style.animationDuration = (8 + Math.random() * 12) + 's';
    cp.style.animationDelay   = (Math.random() * 10) + 's';
    ctap.appendChild(cp);
  }
};
