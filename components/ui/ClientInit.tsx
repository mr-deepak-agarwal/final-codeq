'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Three.js & GSAP so they never run on the server
function ClientInit() {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    let gsapLoaded = false;

    async function loadAndInit() {
      const [THREE, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('three'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      gsapLoaded = true;
      init(THREE, gsap, ScrollTrigger);
    }

    loadAndInit();

    return () => {
      // Cleanup ScrollTrigger on unmount
      if (gsapLoaded) {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((t: any) => t.kill());
        });
      }
    };
  }, []);

  return null;
}

function init(THREE: any, gsap: any, ScrollTrigger: any) {

  /* ── LOADER ── */
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
      setTimeout(() => {
        loader?.classList.add('gone');
        postLoaderInit(THREE, gsap, ScrollTrigger);
      }, 380);
    } else {
      if (ldb) ldb.style.width = p + '%';
      if (ldn) ldn.textContent = Math.floor(p) + '%';
    }
  }, 40);
}

function postLoaderInit(THREE: any, gsap: any, ScrollTrigger: any) {

  /* ── CURSOR (desktop only) ── */
  const isTouch = window.matchMedia('(hover: none)').matches;
  const cq  = document.getElementById('cursor-q') as HTMLElement;
  const lbl = document.getElementById('clabel') as HTMLElement;

  if (!isTouch && cq) {
    cq.style.display = 'block';
    if (lbl) lbl.style.display = 'block';
    let mx = 0, my = 0, qx = 0, qy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (lbl) { lbl.style.left = mx + 'px'; lbl.style.top = (my + 28) + 'px'; }
    });

    (function ql() {
      qx += (mx - qx) * 0.18;
      qy += (my - qy) * 0.18;
      cq.style.left = qx + 'px';
      cq.style.top  = qy + 'px';
      requestAnimationFrame(ql);
    })();

    document.querySelectorAll('a,button,.nc,.ps,.fcard').forEach((el) => {
      el.addEventListener('mouseenter', () => { cq.classList.add('big'); });
      el.addEventListener('mouseleave', () => { cq.classList.remove('big'); cq.classList.remove('view-mode'); if (lbl) lbl.classList.remove('show'); });
    });

    document.querySelectorAll('.fcard').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cq.classList.remove('big'); cq.classList.add('view-mode');
        if (lbl) { lbl.textContent = 'Flip'; lbl.classList.add('show'); }
      });
      el.addEventListener('mouseleave', () => {
        cq.classList.remove('view-mode'); if (lbl) lbl.classList.remove('show');
      });
    });
  }

  /* ── MOBILE HAMBURGER ── */
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav?.classList.add('up');
    else nav?.classList.remove('up');
  }, { passive: true });

  /* ── HERO THREE.JS ── */
  const canvas = document.getElementById('hcanvas') as HTMLCanvasElement;
  if (canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const cam   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    cam.position.z = 50;

    // Particle field
    const cnt = window.innerWidth < 768 ? 1000 : 2800;
    const pos = new Float32Array(cnt * 3);
    const col = new Float32Array(cnt * 3);
    for (let i = 0; i < cnt; i++) {
      pos[i*3]   = (Math.random()-.5)*160;
      pos[i*3+1] = (Math.random()-.5)*100;
      pos[i*3+2] = (Math.random()-.5)*80;
      const g = Math.random();
      col[i*3] = g*.08; col[i*3+1] = g*.4+.08; col[i*3+2] = g*.18;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size:.32, vertexColors:true, transparent:true, opacity:.65 }));
    scene.add(pts);

    // Q wireframe
    const makeQ = (r: number, qpos: number[], rotZ: number, opacity1: number, opacity2: number) => {
      const g = new THREE.Group();
      const cp: any[] = [];
      for (let ci = 0; ci <= 120; ci++) {
        const ang = (ci/120)*Math.PI*1.82 - Math.PI*0.1;
        cp.push(new THREE.Vector3(Math.cos(ang)*r, Math.sin(ang)*r, 0));
      }
      const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cp), 200, r*0.021, 8, false);
      g.add(new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color:0x2E7D4F, wireframe:true, transparent:true, opacity:opacity1 })));
      const tail = [new THREE.Vector3(r*.46,-r*.69,0), new THREE.Vector3(r*.77,-r*.92,0), new THREE.Vector3(r*1.23,-r*1.23,0)];
      const tailTube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tail), 40, r*0.024, 8, false);
      g.add(new THREE.Mesh(tailTube, new THREE.MeshBasicMaterial({ color:0x52C97A, wireframe:true, transparent:true, opacity:opacity2 })));
      g.position.set(qpos[0], qpos[1], qpos[2]);
      g.rotation.z = rotZ;
      return g;
    };

    if (window.innerWidth > 768) {
      scene.add(makeQ(13, [14,-2,-5],  0.08, 0.13, 0.18));
      scene.add(makeQ(7,  [-14,6,-12],-0.15, 0.09, 0.10));
    }

    const animate = () => {
      requestAnimationFrame(animate);
      pts.rotation.y += 0.0003;
      pts.rotation.x += 0.0001;
      renderer.render(scene, cam);
    };
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
    }, { passive: true });
  }

  /* ── HERO TERMINAL ── */
  const htb = document.getElementById('htb');
  if (htb) {
    const lines = [
      { t: '$ npx create-next-app codeq --typescript', c: '' },
      { t: '✓ TypeScript — done', c: '#52C97A' },
      { t: '✓ Tailwind CSS — done', c: '#52C97A' },
      { t: '✓ App Router — done', c: '#52C97A' },
      { t: '$ npm run dev', c: '' },
      { t: '▶ ready on localhost:3000', c: '#2E7D4F' },
    ];
    let i = 0;
    function typeNext() {
      if (i >= lines.length) return;
      const ln = lines[i++];
      const el = document.createElement('div');
      el.style.color = ln.c || 'inherit';
      el.style.marginBottom = '2px';
      let j = 0;
      const iv2 = setInterval(() => {
        el.textContent = ln.t.slice(0, ++j);
        if (j >= ln.t.length) { clearInterval(iv2); setTimeout(typeNext, 300); }
      }, 28);
      htb.appendChild(el);
    }
    setTimeout(typeNext, 600);
  }

  /* ── HERO WORD REVEAL ── */
  document.querySelectorAll('.h1w').forEach((el, i) => {
    gsap.fromTo(el, { y: '100%' }, {
      y: '0%', duration: 1, ease: 'power3.out',
      delay: 0.1 + i * 0.08,
    });
  });

  /* ── STORY SCROLL REVEAL ── */
  const words = document.querySelectorAll('.tw');
  if (words.length) {
    ScrollTrigger.create({
      trigger: '#story',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self: any) => {
        const prog = self.progress;
        words.forEach((w: any, i: number) => {
          const threshold = i / words.length;
          if (prog >= threshold) w.classList.add('lit');
          else w.classList.remove('lit');
        });
      },
    });
  }

  /* ── SERVICES SCROLL PEEL ── */
  const svcWrap = document.getElementById('svcWrap');
  if (svcWrap && document.getElementById('svc1')) {
    const hint = document.getElementById('svcHint');

    gsap.set('#svc2', { y: 60, scale: 0.94, rotateX: 8 });
    gsap.set('#svc3', { y: 120, scale: 0.88, rotateX: 16 });

    ScrollTrigger.create({
      trigger: '#svcWrap',
      start: 'top top',
      end: 'bottom bottom',
      pin: false,
      onUpdate: () => { if (hint) hint.style.opacity = '0'; },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#svcWrap',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    tl.to('#svc1', { y: -400, scale: 0.8, rotateX: -25, opacity: 0.15, duration: 1 })
      .to('#svc2', { y: 0, scale: 1, rotateX: 0, duration: 1 }, '<')
      .to('#svc2', { y: -400, scale: 0.8, rotateX: -25, opacity: 0.15, duration: 1 })
      .to('#svc3', { y: 0, scale: 1, rotateX: 0, duration: 1 }, '<');
  }

  /* ── NUMBERS COUNT-UP ── */
  const numObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const nc = entry.target as HTMLElement;
      nc.classList.add('in');
      const nv = nc.querySelector('.nv') as HTMLElement;
      if (!nv) return;
      const target = parseInt(nv.dataset.t || '0');
      const suffix = nv.dataset.s || '';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { nv.textContent = Math.round(obj.v) + suffix; },
        onComplete: () => { nv.textContent = target + suffix; },
      });
      numObserver.unobserve(nc);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.nc').forEach((el) => numObserver.observe(el));

  /* ── SCROLL REVEALS (.rv) ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.rv, .rvl').forEach((el) => revealObserver.observe(el));

  /* ── PROCESS STEP REVEALS ── */
  document.querySelectorAll('.ps').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => el.classList.add('revealed'),
    });
  });

  /* ── ABOUT LAPTOP ANIMATION ── */
  const laptopScene = document.getElementById('laptopScene');
  if (laptopScene) {
    const abObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        abObserver.disconnect();
        gsap.to(laptopScene, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
        runAboutAnimation(gsap);
      }
    }, { threshold: 0.3 });
    gsap.set(laptopScene, { opacity: 0, y: 30 });
    abObserver.observe(document.getElementById('about') as HTMLElement);
  }

  // About section text reveals
  ['abTop','abHl','abDesc','abVals','abNums'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const abRevObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { el.classList.add('on'); abRevObs.disconnect(); }
    }, { threshold: 0.2 });
    abRevObs.observe(el);
  });

  // About number counters
  const abNumObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    abNumObs.disconnect();
    document.querySelectorAll('.ab-num-val').forEach((el: any, i: number) => {
      const target = parseInt(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.5, ease: 'power2.out', delay: i * 0.07,
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
        onComplete: () => { el.textContent = target + suffix; },
      });
    });
  }, { threshold: 0.3 });
  const abNums = document.getElementById('abNums');
  if (abNums) abNumObs.observe(abNums);

  /* ── CTA FALLING CODE ── */
  const ctap = document.getElementById('ctap');
  if (ctap) {
    const snippets = [
      'const q = "quality"', 'npm run build', 'git push origin main',
      'type: "production"', '✓ 98 lighthouse', 'export default function',
      'next.js 14', 'zero downtime', 'mobile-first',
    ];
    for (let i = 0; i < 12; i++) {
      const cp = document.createElement('div');
      cp.className = 'cp';
      cp.textContent = snippets[i % snippets.length];
      cp.style.left = (Math.random() * 95) + '%';
      cp.style.animationDuration = (8 + Math.random() * 12) + 's';
      cp.style.animationDelay = (Math.random() * 10) + 's';
      ctap.appendChild(cp);
    }
  }
}

function runAboutAnimation(gsap: any) {
  const editor  = document.getElementById('phaseEditor');
  const browser = document.getElementById('phaseBrowser');
  const edCode  = document.getElementById('edCode');
  const edLines = document.getElementById('edLines');
  if (!editor || !browser || !edCode || !edLines) return;

  const codeLines = [
    ['<span class="sp">export default</span> <span class="sk">function</span> <span class="sf">HomePage</span>() {'],
    ['  <span class="sk">return</span> ('],
    ['    <span class="sg">&lt;main</span> <span class="sf">className</span>=<span class="ss">"hero"</span><span class="sg">&gt;</span>'],
    ['      <span class="sg">&lt;nav&gt;</span>'],
    ['        <span class="sg">&lt;Logo</span> <span class="sf">brand</span>=<span class="ss">"codeq"</span> <span class="sg">/&gt;</span>'],
    ['        <span class="sg">&lt;NavLinks</span> <span class="sg">/&gt;</span>'],
    ['      <span class="sg">&lt;/nav&gt;</span>'],
    ['      <span class="sg">&lt;section</span> <span class="sf">className</span>=<span class="ss">"hero-content"</span><span class="sg">&gt;</span>'],
    ["        <span class=\"sg\">&lt;h1&gt;</span>We build what <span class=\"sg\">&lt;em&gt;</span>others can't<span class=\"sg\">&lt;/em&gt;&lt;/h1&gt;</span>"],
    ['        <span class="sg">&lt;CTA</span> <span class="sf">primary</span>=<span class="ss">"View our work"</span> <span class="sg">/&gt;</span>'],
    ['      <span class="sg">&lt;/section&gt;</span>'],
    ['      <span class="sg">&lt;Services</span> <span class="sf">data</span>={services} <span class="sg">/&gt;</span>'],
    ['    <span class="sg">&lt;/main&gt;</span>'],
    ['  )'], ['}'],
  ];

  function typeCode(cb: () => void) {
    edCode.innerHTML = ''; edLines.innerHTML = '';
    codeLines.forEach((line, i) => {
      setTimeout(() => {
        const num = document.createElement('span');
        num.className = 'ed-line-num'; num.textContent = String(i + 1);
        edLines.appendChild(num);
        const div = document.createElement('div');
        div.className = 'ed-line'; div.innerHTML = line[0];
        edCode.appendChild(div);
        requestAnimationFrame(() => div.classList.add('show'));
      }, i * (85 + Math.random() * 55));
    });
    setTimeout(cb, codeLines.length * 100 + 500);
  }

  function showBrowser() {
    gsap.to(browser, { opacity: 1, duration: 0.5, onComplete: animateSite });
  }

  function animateSite() {
    const items  = ['siteNav','siteTag','shl1','shl2','siteSub','sbtn1','sbtn2','sc1','sc2','sc3','ss1','ss2','ss3','ss4'];
    const delays = [0,150,280,440,580,680,780,900,1040,1160,1300,1400,1500,1600];
    items.forEach((id, i) => {
      setTimeout(() => { document.getElementById(id)?.classList.add('show'); }, delays[i]);
    });
    setTimeout(resetLoop, 7200);
  }

  function resetLoop() {
    gsap.to(browser, { opacity: 0, duration: 0.6, onComplete: () => {
      ['siteNav','siteTag','shl1','shl2','siteSub','sbtn1','sbtn2','sc1','sc2','sc3','ss1','ss2','ss3','ss4']
        .forEach((id) => document.getElementById(id)?.classList.remove('show'));
      gsap.set(editor, { opacity: 0 });
      gsap.to(editor, { opacity: 1, duration: 0.4, delay: 0.2 });
      typeCode(() => { gsap.to(editor, { opacity: 0, duration: 0.5 }); setTimeout(showBrowser, 400); });
    }});
  }

  gsap.to(editor, { opacity: 1, duration: 0.4, delay: 0.3 });
  typeCode(() => { gsap.to(editor, { opacity: 0, duration: 0.5 }); setTimeout(showBrowser, 400); });
}

export default ClientInit;
