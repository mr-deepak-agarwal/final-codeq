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

const runMain = (THREE: any, gsap: any, ST: any) => {
  initCursor();
  initNav();
  initHeroThree(THREE);
  initHeroTerminal();
  initHeroWords(gsap);
  initStory(ST);
  initServicesPeel(gsap, ST);
  initNumbers(gsap);
  initRevealObserver();
  initProcess(ST);
  initAbout(gsap);
  initCTAParticles();
};

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

const initHeroThree = (THREE: any) => {
  const canvas = document.getElementById('hcanvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  cam.position.z = 50;
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
  scene.add(pts);
  const buildQ = (r: number, px: number, py: number, pz: number, rz: number, op1: number, op2: number) => {
    const grp = new THREE.Group();
    const cp: any[] = [];
    for (let ci = 0; ci <= 120; ci++) {
      const ang = (ci/120)*Math.PI*1.82 - Math.PI*0.1;
      cp.push(new THREE.Vector3(Math.cos(ang)*r, Math.sin(ang)*r, 0));
    }
    grp.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cp), 200, r*0.021, 8, false),
      new THREE.MeshBasicMaterial({ color:0x2E7D4F, wireframe:true, transparent:true, opacity:op1 })
    ));
    const tail = [new THREE.Vector3(r*.46,-r*.69,0), new THREE.Vector3(r*.77,-r*.92,0), new THREE.Vector3(r*1.23,-r*1.23,0)];
    grp.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tail), 40, r*0.024, 8, false),
      new THREE.MeshBasicMaterial({ color:0x52C97A, wireframe:true, transparent:true, opacity:op2 })
    ));
    grp.position.set(px, py, pz); grp.rotation.z = rz;
    return grp;
  };
  if (window.innerWidth > 768) {
    scene.add(buildQ(13, 14,-2,-5, 0.08, 0.13, 0.18));
    scene.add(buildQ(7, -14,6,-12, -0.15, 0.09, 0.10));
  }
  const tick = () => { requestAnimationFrame(tick); pts.rotation.y+=.0003; pts.rotation.x+=.0001; renderer.render(scene,cam); };
  tick();
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    cam.aspect=window.innerWidth/window.innerHeight; cam.updateProjectionMatrix();
  }, { passive:true });
};

const initHeroTerminal = () => {
  const htb = document.getElementById('htb');
  if (!htb) return;
  const lines = [
    { t: '$ npx create-next-app codeq --typescript', c: '' },
    { t: '✓ TypeScript — done', c: '#52C97A' },
    { t: '✓ Tailwind CSS — done', c: '#52C97A' },
    { t: '✓ App Router — done', c: '#52C97A' },
    { t: '$ npm run dev', c: '' },
    { t: '▶ ready on localhost:3000', c: '#2E7D4F' },
  ];
  let idx = 0;
  const typeNext = () => {
    if (idx >= lines.length) return;
    const ln = lines[idx++];
    const el = document.createElement('div');
    el.style.color = ln.c || 'inherit'; el.style.marginBottom = '2px';
    let j = 0;
    const t = setInterval(() => {
      el.textContent = ln.t.slice(0,++j);
      if (j >= ln.t.length) { clearInterval(t); setTimeout(typeNext, 300); }
    }, 28);
    htb.appendChild(el);
  };
  setTimeout(typeNext, 600);
};

const initHeroWords = (gsap: any) => {
  document.querySelectorAll('.h1w').forEach((el, i) => {
    gsap.fromTo(el, { y:'100%' }, { y:'0%', duration:1, ease:'power3.out', delay:0.1+i*0.08 });
  });
};

const initStory = (ST: any) => {
  const words = document.querySelectorAll('.tw');
  if (!words.length) return;
  ST.create({
    trigger: '#story', start: 'top top', end: 'bottom bottom',
    onUpdate: (self: any) => {
      words.forEach((w: any, i: number) => {
        w.classList.toggle('lit', self.progress >= i / words.length);
      });
    },
  });
};

const initServicesPeel = (gsap: any, ST: any) => {
  if (!document.getElementById('svcWrap') || !document.getElementById('svc1')) return;
  const hint = document.getElementById('svcHint');
  gsap.set('#svc2', { y:60, scale:0.94, rotateX:8 });
  gsap.set('#svc3', { y:120, scale:0.88, rotateX:16 });
  ST.create({ trigger:'#svcWrap', start:'top top', end:'bottom bottom', onUpdate:()=>{ if(hint) hint.style.opacity='0'; } });
  gsap.timeline({ scrollTrigger:{ trigger:'#svcWrap', start:'top top', end:'bottom bottom', scrub:1.5 } })
    .to('#svc1',{ y:-400, scale:0.8, rotateX:-25, opacity:0.15, duration:1 })
    .to('#svc2',{ y:0, scale:1, rotateX:0, duration:1 },'<')
    .to('#svc2',{ y:-400, scale:0.8, rotateX:-25, opacity:0.15, duration:1 })
    .to('#svc3',{ y:0, scale:1, rotateX:0, duration:1 },'<');
};

const initNumbers = (gsap: any) => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const nc = entry.target as HTMLElement;
      nc.classList.add('in');
      const nv = nc.querySelector('.nv') as HTMLElement | null;
      if (!nv) return;
      const target = parseInt(nv.dataset.t||'0');
      const suffix = nv.dataset.s||'';
      const obj = { v:0 };
      gsap.to(obj,{ v:target, duration:1.8, ease:'power2.out',
        onUpdate:()=>{ nv.textContent=Math.round(obj.v)+suffix; },
        onComplete:()=>{ nv.textContent=target+suffix; }
      });
      obs.unobserve(nc);
    });
  }, { threshold:0.4 });
  document.querySelectorAll('.nc').forEach((el)=>obs.observe(el));
};

const initRevealObserver = () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('on'); obs.unobserve(entry.target); }
    });
  }, { threshold:0.15 });
  document.querySelectorAll('.rv,.rvl').forEach((el)=>obs.observe(el));
};

const initProcess = (ST: any) => {
  document.querySelectorAll('.ps').forEach((el) => {
    ST.create({ trigger:el, start:'top 80%', onEnter:()=>el.classList.add('revealed') });
  });
};

const initAbout = (gsap: any) => {
  const laptopScene = document.getElementById('laptopScene');
  const aboutSection = document.getElementById('about');
  if (!laptopScene || !aboutSection) return;
  gsap.set(laptopScene, { opacity:0, y:30 });
  const laptopObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    laptopObs.disconnect();
    gsap.to(laptopScene, { opacity:1, y:0, duration:.9, ease:'power3.out' });
    runAboutAnimation(gsap);
  }, { threshold:0.3 });
  laptopObs.observe(aboutSection);
  ['abTop','abHl','abDesc','abVals','abNums'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const o = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { el.classList.add('on'); o.disconnect(); }
    }, { threshold:0.2 });
    o.observe(el);
  });
  const abNums = document.getElementById('abNums');
  if (!abNums) return;
  const numObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    numObs.disconnect();
    document.querySelectorAll('.ab-num-val').forEach((el: any, i: number) => {
      const target = parseInt(el.dataset.target||'0');
      const suffix = el.dataset.suffix||'';
      const obj = { v:0 };
      gsap.to(obj,{ v:target, duration:1.5, ease:'power2.out', delay:i*.07,
        onUpdate:()=>{ el.textContent=Math.round(obj.v)+suffix; },
        onComplete:()=>{ el.textContent=target+suffix; }
      });
    });
  }, { threshold:0.3 });
  numObs.observe(abNums);
};

const initCTAParticles = () => {
  const ctap = document.getElementById('ctap');
  if (!ctap) return;
  const snippets = ['const q = "quality"','npm run build','git push origin main','type: "production"','✓ 98 lighthouse','export default function','next.js 14','zero downtime','mobile-first'];
  for (let i = 0; i < 12; i++) {
    const cp = document.createElement('div');
    cp.className = 'cp'; cp.textContent = snippets[i%snippets.length];
    cp.style.left = (Math.random()*95)+'%';
    cp.style.animationDuration = (8+Math.random()*12)+'s';
    cp.style.animationDelay = (Math.random()*10)+'s';
    ctap.appendChild(cp);
  }
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
        num.className = 'ed-line-num'; num.textContent = String(i+1);
        edLines.appendChild(num);
        const div = document.createElement('div');
        div.className = 'ed-line'; div.innerHTML = line;
        edCode.appendChild(div);
        requestAnimationFrame(() => div.classList.add('show'));
      }, i*(85+Math.random()*55));
    });
    setTimeout(cb, codeLines.length*100+500);
  };
  const animateSite = () => {
    abItems.forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('show'), abDelays[i]));
    setTimeout(resetLoop, 7200);
  };
  const showBrowser = () => gsap.to(browser, { opacity:1, duration:.5, onComplete:animateSite });
  const resetLoop = () => {
    gsap.to(browser, { opacity:0, duration:.6, onComplete:() => {
      abItems.forEach((id) => document.getElementById(id)?.classList.remove('show'));
      gsap.set(editor,{ opacity:0 });
      gsap.to(editor,{ opacity:1, duration:.4, delay:.2 });
      typeCode(() => { gsap.to(editor,{ opacity:0, duration:.5 }); setTimeout(showBrowser,400); });
    }});
  };
  gsap.to(editor, { opacity:1, duration:.4, delay:.3 });
  typeCode(() => { gsap.to(editor,{ opacity:0, duration:.5 }); setTimeout(showBrowser,400); });
};
