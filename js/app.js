/* Nuestro Primer Año — lógica de las 20 paradas.
   Todo lo personalizable está en CONFIG: cámbialo sin miedo. */
(() => {
'use strict';

const CONFIG = {
  // Nombres de los dos. Si lo dejas vacío, la portada dice "Tú & yo".
  nombres: ['', ''],
  // Día en que empezaron (año-mes-día). De aquí sale el contador de la portada.
  fechaInicio: '2025-11-20T00:00:00',
  // Clave del candado (parada 13). Es la hora que sale escrita en la foto: 8:14.
  clave: '814',
  firma: 'Con todo mi amor, yo.',
  carta: [
    'Mi amor:',
    'Hace un año empezamos algo que yo no sabía que iba a ser tan grande. Desde entonces llenamos el teléfono de fotos con filtros ridículos, de selfies torcidas y de momentos que no cambiaría por nada.',
    'Gracias por reírte conmigo, por aguantar mis caras, por abrazarme como en la foto de las flores y por hacer que un día cualquiera se sienta especial.',
    'Hice esta página para que recuerdes, cada vez que quieras, que eres mi persona favorita. Este fue solo el primer año. Quiero muchos más contigo.',
    'Te amo.',
  ],
  diario: [
    { f: 29, titulo: 'El día de las flores', texto: 'Un ramo envuelto en papel blanco y una sonrisa que no cabía en la foto. De esos días que uno quisiera repetir.', nota: 'Las flores se marchitan. Ese día no.', alt: 'Ella sonriendo con un ramo de flores en la mano' },
    { f: 17, titulo: 'La graduación', texto: 'Birrete, diploma y los dos sonriendo en medio del auditorio. Los logros saben mejor cuando se celebran juntos.', nota: 'Orgullo total.', alt: 'Los dos en la graduación, con birrete y diploma' },
    { f: 16, titulo: 'Tarde de camisetas', texto: 'La albiceleste de un lado, la Vinotinto del otro y un peinado en plena construcción. Nadie ganó, pero nos reímos un montón.', nota: 'Quedamos empatados. Como siempre.', alt: 'Ella arreglándole el pelo, los dos con camisetas de fútbol' },
    { f: 26, titulo: 'Selfie con viento', texto: 'Cielo azul, un árbol atrás y la cámara demasiado cerca. Salió movida y aun así es de mis favoritas.', nota: 'Movida, pero perfecta.', alt: 'Selfie de cerca, al aire libre' },
    { f: 5, titulo: 'Par de zorros', texto: 'Empezamos probando un filtro y terminamos con cien fotos. Así son nuestras tardes en el sofá.', nota: 'Te quedan bien las orejas.', alt: 'Selfie con filtro de orejas de zorro' },
    { f: 2, titulo: 'Perritos con brillo', texto: 'Orejas, nariz y brillantina por toda la cara. Nadie nos pidió tanto glamour y aquí estamos.', nota: 'Guau.', alt: 'Selfie con filtro de perritos y brillantina' },
  ],
  caras: [
    { f: 6, t: 'Aquí ninguno de los dos tiene cara. Literal.', alt: 'Selfie con un filtro que borra las caras' },
    { f: 21, t: 'Un primer plano que nadie pidió.', alt: 'Primer plano sacando la lengua' },
    { f: 4, t: 'Cerdito con lazo y lengua afuera. Dupla ganadora.', alt: 'Selfie con filtro de cerdito' },
    { f: 9, t: 'Demasiado estilo para una sola foto.', alt: 'Selfie en blanco y negro con lentes pixelados' },
    { f: 28, t: 'Lentes blancos y alguien escondiéndose detrás del teléfono.', alt: 'Él con lentes blancos, ella tapándose con el teléfono' },
    { f: 14, t: 'Cuánto cariño en un solo gesto.', alt: 'Los dos con camisetas de fútbol haciendo muecas' },
    { f: 12, t: 'Listos para viajar al futuro.', alt: 'Selfie con filtro de lentes espejados' },
  ],
  quiz: [
    { f: 15, ok: 'Fresa y banana', op: ['Fresa y banana', 'Piña y sandía', 'Tomate y pepino'], r: 'La fresa y la banana más enamoradas del mercado.' },
    { f: 3, ok: 'El Hombre Araña', op: ['Un pulpo abrazador', 'El Hombre Araña', 'Un astronauta'], r: 'Trepado en plena selfie, sin pedir permiso.' },
    { f: 8, ok: 'Lentes pixelados', op: ['Bigotes de gato', 'Coronas de flores', 'Lentes pixelados'], r: 'Blanco y negro, lentes puestos y cero sonrisas.' },
    { f: 27, ok: 'Dálmatas con brillo', op: ['Dálmatas con brillo', 'Conejitos', 'Vaquitas'], r: 'Orejas con manchas y brillantina por todos lados.' },
    { f: 22, ok: 'Ojos y boca gigantes', op: ['Caras de bebé', 'Ojos y boca gigantes', 'Payasos'], r: 'La foto más bella que nos hemos tomado. Sin discusión.' },
  ],
  citas: [
    { corto: 'Peli y cobija', largo: 'Una noche de peli, cobija y cotufas' },
    { corto: 'Helado', largo: 'Un helado del sabor que tú elijas' },
    { corto: 'Picnic', largo: 'Un picnic para los dos' },
    { corto: 'Cocinar', largo: 'Cocinar juntos (yo lavo los platos)' },
    { corto: 'Atardecer', largo: 'Un paseo para ver el atardecer' },
    { corto: 'Bailar', largo: 'Un baile lento en la sala' },
    { corto: 'Más fotos', largo: 'Una sesión de fotos con los filtros más feos' },
    { corto: 'Masajes', largo: 'Una hora completa de masajes' },
  ],
  palabras: ['AMOR', 'BESOS', 'RISAS', 'ABRAZO', 'JUNTOS', 'SIEMPRE', 'FOTOS'],
  razones: [
    'Porque te ríes hasta con mis peores chistes.',
    'Porque ningún filtro te queda mal. Ni el de fresa.',
    'Porque me abrazas y se me olvida todo lo demás.',
    'Porque en los días importantes siempre estamos juntos.',
    'Porque contigo hasta cocinar es un plan.',
    'Porque contigo cualquier día de pelo rebelde tiene arreglo.',
    'Porque haces payasadas conmigo sin que te dé pena.',
    'Porque tu risa es mi sonido favorito.',
    'Porque me haces querer ser mejor.',
    'Porque en todas las fotos salgo bien si estoy contigo.',
    'Porque un año a tu lado se me pasó volando.',
    'Porque eres tú. Con eso me basta.',
  ],
};

/* ── Utilidades ──────────────────────────────────────────────── */
document.documentElement.classList.add('js');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const dos = n => String(n).padStart(2, '0');
const foto = n => `fotos/f${dos(n)}.jpg`;
const mini = n => `fotos/mini/m${dos(n)}.jpg`;
const azar = (a, b) => a + Math.random() * (b - a);
const entero = n => Math.floor(Math.random() * n);
const lim = (v, a, b) => Math.max(a, Math.min(b, v));
const mezcla = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = entero(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
const vibra = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) { /* sin vibración */ } };
const CORA_SVG = '<svg aria-hidden="true"><use href="#i-cora"/></svg>';
const CORA = new Path2D('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

/* ── Sonido (sintetizado, sin archivos) ──────────────────────── */
let audio = null, sonido = true;
function tono(f, dur = .12, tipo = 'sine', vol = .08, cuando = 0) {
  if (!sonido) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
    const t = audio.currentTime + cuando, o = audio.createOscillator(), g = audio.createGain();
    o.type = tipo; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(audio.destination); o.start(t); o.stop(t + dur + .02);
  } catch (e) { /* sin audio */ }
}
const sfx = {
  pop: () => tono(azar(380, 640), .09, 'triangle', .1),
  tic: () => tono(880, .05, 'sine', .05),
  mal: () => tono(150, .18, 'sawtooth', .04),
  bien: () => [523, 659, 784].forEach((f, i) => tono(f, .16, 'sine', .07, i * .07)),
  logro: () => [523, 659, 784, 1047].forEach((f, i) => tono(f, .3, 'triangle', .08, i * .1)),
};

/* ── Confeti ─────────────────────────────────────────────────── */
const confeti = (() => {
  const c = $('#confeti'), x = c.getContext('2d');
  const colores = ['#b9f27c', '#2fbf71', '#9163f7', '#cdb4ff', '#ffffff'];
  let ps = [], raf = 0, W = 0, H = 0, d = 1;
  const mide = () => { d = dpr(); W = c.width = innerWidth * d; H = c.height = innerHeight * d; };
  mide(); addEventListener('resize', mide);
  function paso() {
    x.clearRect(0, 0, W, H);
    ps = ps.filter(p => p.v > 0 && p.y < H + 40);
    for (const p of ps) {
      p.vy += .25 * d; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.g += p.vg; p.v -= 1;
      x.save(); x.translate(p.x, p.y); x.rotate(p.g); x.globalAlpha = Math.min(1, p.v / 30); x.fillStyle = p.c;
      if (p.cora) { x.scale(p.s / 20, p.s / 20); x.translate(-12, -12); x.fill(CORA); }
      else x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      x.restore();
    }
    raf = ps.length ? requestAnimationFrame(paso) : 0;
  }
  return (cx = innerWidth / 2, cy = innerHeight / 2, n = 60) => {
    if (calma) n = Math.min(n, 10);
    for (let i = 0; i < n; i++) {
      const a = azar(0, Math.PI * 2), v = azar(3, 13) * d;
      ps.push({ x: cx * d, y: cy * d, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 5 * d, g: azar(0, 6), vg: azar(-.3, .3), s: azar(8, 16) * d, c: colores[i % 5], v: azar(60, 110), cora: i % 3 === 0 });
    }
    if (!raf) raf = requestAnimationFrame(paso);
  };
})();

/* ── Progreso, avisos, mapa y visor ──────────────────────────── */
const hechas = new Set();
const secciones = $$('.sec');
let tAviso = 0;
function aviso(texto) {
  const a = $('#aviso'); a.textContent = texto; a.classList.add('ver');
  clearTimeout(tAviso); tAviso = setTimeout(() => a.classList.remove('ver'), 2400);
}
function completar(n, texto) {
  if (hechas.has(n)) return;
  hechas.add(n);
  const sec = $('#s' + n); sec.classList.add('hecha');
  const p = $('.premio', sec); if (p) p.hidden = false;
  $('#selloN').textContent = hechas.size; $('#finalN').textContent = hechas.size;
  const sello = $('#sello'); sello.classList.remove('salta'); void sello.offsetWidth; sello.classList.add('salta');
  const li = $(`#mapaLista li[data-n="${n}"]`); if (li) li.classList.add('ok');
  confeti(innerWidth / 2, innerHeight * .45, 70);
  sfx.logro(); vibra(30);
  aviso(texto || `Parada ${n} completada`);
}

function irA(el) { el.scrollIntoView({ behavior: calma ? 'auto' : 'smooth', block: 'start' }); }

(function mapa() {
  const caja = $('#mapa'), lista = $('#mapaLista');
  secciones.forEach((s, i) => {
    const li = document.createElement('li'); li.dataset.n = i + 1;
    li.innerHTML = `<button><span class="n">${i + 1}</span><span>${s.dataset.nombre}</span></button>`;
    $('button', li).addEventListener('click', () => { caja.hidden = true; irA(s); });
    lista.append(li);
  });
  $('#sello').addEventListener('click', () => { caja.hidden = !caja.hidden; });
  $('#mapaCerrar').addEventListener('click', () => { caja.hidden = true; });
  caja.addEventListener('click', e => { if (e.target === caja) caja.hidden = true; });
  $('#chkSonido').addEventListener('change', e => { sonido = e.target.checked; if (sonido) sfx.tic(); });
})();

const visor = $('#visor');
function abrirVisor(src, alt = '') { $('#visorImg').src = src; $('#visorImg').alt = alt; visor.hidden = false; }
visor.addEventListener('click', () => { visor.hidden = true; });
document.addEventListener('click', e => {
  const z = e.target.closest('[data-zoom]'); if (!z) return;
  const img = z.tagName === 'IMG' ? z : $('img', z);
  abrirVisor(z.dataset.zoom || img.src, img ? img.alt : '');
});
addEventListener('keydown', e => { if (e.key === 'Escape') { visor.hidden = true; $('#mapa').hidden = true; } });

$$('.sig').forEach(a => a.addEventListener('click', e => {
  const dest = $(a.getAttribute('href')); if (!dest) return;
  e.preventDefault(); irA(dest);
}));

/* Barra de avance y línea del diario */
let tictac = false;
function alDesplazar() {
  tictac = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#barraScroll').style.transform = `scaleX(${max > 0 ? lim(scrollY / max, 0, 1) : 0})`;
  const d = $('#diario'), r = d.getBoundingClientRect();
  if (r.bottom > 0 && r.top < innerHeight) $('#diarioLinea').style.height = lim((innerHeight * .62 - r.top) / r.height, 0, 1) * 100 + '%';
}
addEventListener('scroll', () => { if (!tictac) { tictac = true; requestAnimationFrame(alDesplazar); } }, { passive: true });

/* ── 1 · Portada: mantener presionado el corazón ─────────────── */
function iniPortada() {
  const sec = $('#s1'), b = $('#latido'), anillo = $('#anillo'), L = 339.3;
  const fl = $('.flotantes', sec);
  for (let i = 0; i < 14; i++) {
    const t = azar(12, 30).toFixed(0);
    fl.insertAdjacentHTML('beforeend', `<svg style="left:${azar(2, 94).toFixed(1)}%;width:${t}px;height:${t}px;color:${i % 2 ? '#b9f27c' : '#a985ff'};animation-duration:${azar(10, 20).toFixed(1)}s;animation-delay:-${azar(0, 20).toFixed(1)}s"><use href="#i-cora"/></svg>`);
  }
  const [a, c] = CONFIG.nombres;
  if (a && c) $('#pareja').textContent = `${a} & ${c}`;

  let p = 0, pres = false, raf = 0, t0 = 0, abierto = false, tDown = 0;
  function tick(t) {
    const dt = Math.min(50, t - t0); t0 = t;
    p = lim(p + (pres ? dt / 1300 : -dt / 2800), 0, 1);
    anillo.style.strokeDashoffset = L * (1 - p);
    if (p >= 1) return abrir();
    raf = (pres || p > 0) ? requestAnimationFrame(tick) : 0;
  }
  const arranca = () => { if (!raf && !abierto) { t0 = performance.now(); raf = requestAnimationFrame(tick); } };
  b.addEventListener('pointerdown', e => {
    e.preventDefault(); pres = true; tDown = performance.now();
    try { b.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ }
    sfx.tic(); arranca();
  });
  const suelta = () => { if (pres && performance.now() - tDown < 260) p = Math.min(.99, p + .22); pres = false; arranca(); };
  b.addEventListener('pointerup', suelta); b.addEventListener('pointercancel', suelta);
  b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
  b.addEventListener('contextmenu', e => e.preventDefault());

  function abrir() {
    if (abierto) return; abierto = true; cancelAnimationFrame(raf); raf = 0;
    const r = b.getBoundingClientRect();
    sec.classList.add('abierto');
    $('#pistaLatido').hidden = true; $('#sigPortada').hidden = false;
    iniContador();
    completar(1, 'Empieza el recorrido');
    confeti(r.left + r.width / 2, r.top + r.height / 2, 90);
  }
}
function iniContador() {
  const ini = new Date(CONFIG.fechaInicio).getTime();
  if (!isFinite(ini) || ini > Date.now()) return;
  $('#contador').hidden = false;
  const pinta = () => {
    let s = Math.floor((Date.now() - ini) / 1000);
    const d = Math.floor(s / 86400); s %= 86400;
    $('#cD').textContent = d; $('#cH').textContent = dos(Math.floor(s / 3600));
    $('#cM').textContent = dos(Math.floor(s % 3600 / 60)); $('#cS').textContent = dos(s % 60);
  };
  pinta(); setInterval(pinta, 1000);
}

/* ── 2 · Jalar el hilo y reventar los globos ─────────────────── */
function iniGlobos() {
  const caja = $('#globos'), hilo = $('#hilo'), aro = $('#hiloAro'), capa = $('#globosCapa'), instr = $('#globosInstr');
  const colores = ['#7c3aed', '#2fbf71', '#a985ff', '#b9f27c', '#5b21b6', '#16794a', '#cdb4ff', '#58d98f'];
  const TOTAL = 16;
  let y0 = 0, tira = 0, arr = false, usado = false, quedan = TOTAL;
  const pon = v => hilo.style.setProperty('--tira', v + 'px');

  aro.addEventListener('pointerdown', e => {
    if (usado) return; e.preventDefault();
    try { aro.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ }
    arr = true; y0 = e.clientY; tira = 0; hilo.classList.add('suelto'); hilo.classList.remove('vuelve');
  });
  aro.addEventListener('pointermove', e => { if (!arr) return; tira = lim(e.clientY - y0, 0, 130); pon(tira); });
  const fin = () => {
    if (!arr) return; arr = false; hilo.classList.add('vuelve');
    if (tira > 55) { pon(0); soltar(); }
    else if (tira < 6) { pon(90); setTimeout(() => { pon(0); soltar(); }, 320); } // un toque también vale
    else { pon(0); hilo.classList.remove('suelto'); }
  };
  aro.addEventListener('pointerup', fin); aro.addEventListener('pointercancel', fin);
  aro.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); soltar(); } });

  function soltar() {
    if (usado) return; usado = true; hilo.classList.add('usado'); sfx.bien(); vibra(20);
    for (let i = 0; i < TOTAL; i++) {
      const col = i % 4, fil = Math.floor(i / 4), g = document.createElement('button');
      g.className = 'globo'; g.setAttribute('aria-label', 'Reventar globo');
      g.style.cssText = `left:${(-5 + col * 26 + azar(-3, 3)).toFixed(1)}%;top:${(-3 + fil * 25 + azar(-2.5, 2.5)).toFixed(1)}%;--c:${colores[(i * 3 + fil) % 8]};--r:${azar(-9, 9).toFixed(1)}deg;--d:${azar(0, .7).toFixed(2)}s`;
      g.addEventListener('click', () => pum(g));
      capa.append(g);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => caja.classList.add('caidos')));
    setTimeout(() => $$('.globo', capa).forEach(g => g.classList.add('listo')), 2000);
    instr.textContent = `Ahora revienta los ${TOTAL} globos para ver qué tapan.`;
  }
  function pum(g) {
    if (g.classList.contains('pum')) return;
    g.classList.add('pum'); sfx.pop(); vibra(12);
    const r = g.getBoundingClientRect(); confeti(r.left + r.width / 2, r.top + r.height / 2, 9);
    setTimeout(() => g.remove(), 220);
    quedan--;
    if (quedan === 0) { instr.textContent = 'Ni un globo en pie.'; completar(2, 'Globos reventados'); }
    else instr.textContent = quedan === 1 ? 'Queda 1 globo.' : `Quedan ${quedan} globos.`;
  }
}

/* ── 3 · Rompecabezas ────────────────────────────────────────── */
function iniPuzzle() {
  const caja = $('#puzzle'), C = 3, F = 4, N = C * F, src = foto(20);
  let pos = [...Array(N).keys()], sel = null, mov = 0, listo = false;
  const piezas = pos.map(i => {
    const b = document.createElement('button'); b.className = 'pieza'; b.setAttribute('aria-label', `Pieza ${i + 1}`);
    b.style.backgroundImage = `url(${src})`;
    b.style.backgroundPosition = `${(i % C) * 100 / (C - 1)}% ${Math.floor(i / C) * 100 / (F - 1)}%`;
    b.addEventListener('click', () => toca(i)); caja.append(b); return b;
  });
  const pinta = () => piezas.forEach((b, i) => { b.style.left = (pos[i] % C) * 100 / C + '%'; b.style.top = Math.floor(pos[i] / C) * 100 / F + '%'; });
  const armado = () => pos.every((p, i) => p === i);
  function mezclar() {
    do { pos = mezcla(pos); } while (armado());
    mov = 0; $('#puzzleMov').textContent = 0; listo = false; sel = null;
    piezas.forEach(b => b.classList.remove('sel')); caja.classList.remove('armado'); pinta();
  }
  function toca(i) {
    if (listo) return; sfx.tic();
    if (sel === null) { sel = i; piezas[i].classList.add('sel'); return; }
    if (sel !== i) { [pos[sel], pos[i]] = [pos[i], pos[sel]]; mov++; $('#puzzleMov').textContent = mov; }
    piezas[sel].classList.remove('sel'); sel = null; pinta();
    if (armado()) { listo = true; caja.classList.add('armado'); setTimeout(() => completar(3, `Armado en ${mov} movimientos`), 450); }
  }
  $('#puzzleMezclar').addEventListener('click', mezclar);
  $('#puzzlePista').addEventListener('click', () => {
    if ($('.puzzle-pista', caja)) return;
    const p = document.createElement('div'); p.className = 'puzzle-pista'; p.style.backgroundImage = `url(${src})`;
    caja.append(p); setTimeout(() => p.remove(), 1400);
  });
  mezclar();
}

/* ── 4 · Rasca y descubre ────────────────────────────────────── */
function iniRasca() {
  const caja = $('#rasca'), c = $('#rascaLienzo'), x = c.getContext('2d');
  let bw = 0, bh = 0, listo = false, abajo = false, ult = null, trazos = 0;
  function prepara() {
    const r = caja.getBoundingClientRect(), d = dpr(); bw = r.width; bh = r.height;
    c.width = bw * d; c.height = bh * d; x.setTransform(d, 0, 0, d, 0, 0);
    x.globalCompositeOperation = 'source-over';
    const g = x.createLinearGradient(0, 0, bw, bh); g.addColorStop(0, '#8a55f0'); g.addColorStop(.55, '#5b21b6'); g.addColorStop(1, '#2fbf71');
    x.fillStyle = g; x.fillRect(0, 0, bw, bh);
    x.fillStyle = 'rgba(255,255,255,.13)';
    for (let f = 0, yy = 10; yy < bh; yy += 44, f++) for (let xx = f % 2 ? 6 : 28; xx < bw; xx += 44) { x.save(); x.translate(xx, yy); x.fill(CORA); x.restore(); }
    x.fillStyle = '#fff'; x.textAlign = 'center';
    x.font = `400 ${Math.round(bw * .115)}px Caprasimo, Georgia, serif`; x.fillText('Rasca aquí', bw / 2, bh / 2);
    x.font = `500 ${Math.round(bw * .05)}px Outfit, sans-serif`; x.fillText('hay algo bonito debajo', bw / 2, bh / 2 + bw * .09);
  }
  prepara();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!trazos && !listo) prepara(); });
  const punto = e => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * bw / r.width, (e.clientY - r.top) * bh / r.height]; };
  function raspa(e) {
    const p = punto(e), o = ult || p;
    x.globalCompositeOperation = 'destination-out'; x.lineWidth = 46; x.lineCap = 'round'; x.lineJoin = 'round';
    x.beginPath(); x.moveTo(o[0], o[1]); x.lineTo(p[0] + .01, p[1]); x.stroke(); ult = p;
    if (++trazos % 10 === 0) mide();
  }
  function mide() {
    const d = x.getImageData(0, 0, c.width, c.height).data; let t = 0, n = 0;
    for (let i = 3; i < d.length; i += 4 * 41) { n++; if (d[i] < 40) t++; }
    if (t / n > .5) fin();
  }
  function fin() { if (listo) return; listo = true; caja.classList.add('listo'); $('#rascaSaltar').hidden = true; completar(4, 'Tarjeta destapada'); }
  c.addEventListener('pointerdown', e => { e.preventDefault(); abajo = true; ult = null; try { c.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ } raspa(e); });
  c.addEventListener('pointermove', e => { if (abajo) raspa(e); });
  const sube = () => { if (abajo) { abajo = false; mide(); } };
  c.addEventListener('pointerup', sube); c.addEventListener('pointercancel', sube);
  $('#rascaSaltar').addEventListener('click', fin);
}

/* ── 5 · Memoria ─────────────────────────────────────────────── */
function iniMemo() {
  const caja = $('#memo'), ids = [2, 15, 22, 27, 4, 12];
  let abiertas = [], bloqueo = false, pares = 0, intentos = 0;
  mezcla([...ids, ...ids]).forEach(id => {
    const b = document.createElement('button'); b.className = 'carta-m'; b.dataset.id = id; b.setAttribute('aria-label', 'Carta boca abajo');
    b.innerHTML = `<i class="dorso">${CORA_SVG}</i><i class="cara" style="background-image:url(${mini(id)})"></i>`;
    b.addEventListener('click', () => {
      if (bloqueo || b.classList.contains('vista') || b.classList.contains('ok')) return;
      b.classList.add('vista'); sfx.tic(); abiertas.push(b);
      if (abiertas.length < 2) return;
      intentos++; $('#memoIntentos').textContent = intentos;
      const [p, q] = abiertas; abiertas = [];
      if (p.dataset.id === q.dataset.id) {
        setTimeout(() => { p.classList.add('ok'); q.classList.add('ok'); sfx.bien(); if (++pares === ids.length) completar(5, `Memoria completa en ${intentos} intentos`); }, 380);
      } else {
        bloqueo = true;
        setTimeout(() => { p.classList.remove('vista'); q.classList.remove('vista'); bloqueo = false; }, 950);
      }
    });
    caja.append(b);
  });
}

/* ── 6 · Diario: fotos que se voltean ────────────────────────── */
function iniDiario() {
  const caja = $('#diario'); let leidas = 0;
  CONFIG.diario.forEach((d, k) => {
    const art = document.createElement('article'); art.className = 'entrada rv2';
    art.innerHTML = `
      <button class="volteable" style="--giro:${k % 2 ? 3 : -3}deg" aria-label="Voltear la foto: ${d.titulo}">
        <span><i class="frente"><img src="${foto(d.f)}" alt="${d.alt}" loading="lazy"></i><i class="atras">${d.nota}</i></span>
      </button>
      <div class="entrada-texto"><p class="cap">Página ${k + 1}</p><h3>${d.titulo}</h3><p>${d.texto}</p></div>`;
    $('.volteable', art).addEventListener('click', e => {
      e.currentTarget.classList.toggle('girada'); sfx.tic();
      if (!art.classList.contains('leida')) {
        art.classList.add('leida'); leidas++; $('#diarioN').textContent = leidas;
        if (leidas === CONFIG.diario.length) completar(6, 'Diario leído completo');
      }
    });
    caja.append(art); obsSuelto.observe(art);
  });
}

/* ── 7 · Carta ───────────────────────────────────────────────── */
function iniCarta() {
  const sobre = $('#sobre'), papel = $('#papel'), cont = $('#papelTexto');
  let escribiendo = false, saltar = false;
  $('#sobreSello').addEventListener('click', () => {
    if (sobre.classList.contains('abierto')) return;
    sobre.classList.add('abierto'); sfx.bien(); vibra(20);
    setTimeout(() => { sobre.classList.add('fuera'); papel.hidden = false; escribe(); completar(7, 'Carta abierta'); }, calma ? 50 : 1500);
  });
  papel.addEventListener('click', () => { if (escribiendo) saltar = true; });
  async function escribe() {
    escribiendo = true;
    const cursor = document.createElement('span'); cursor.className = 'cursor';
    for (const parrafo of CONFIG.carta) {
      const p = document.createElement('p'); cont.append(p);
      if (saltar || calma) { p.textContent = parrafo; continue; }
      const txt = document.createTextNode(''); p.append(txt, cursor);
      for (let i = 0; i < parrafo.length; i += 2) {
        if (saltar) break;
        txt.data = parrafo.slice(0, i + 2);
        await new Promise(r => setTimeout(r, 26));
      }
      txt.data = parrafo;
    }
    cursor.remove(); escribiendo = false;
    $('#papelFirma').textContent = CONFIG.firma; papel.classList.add('completa');
  }
}

/* ── 8 · Atrapa los corazones ────────────────────────────────── */
function iniAtrapa() {
  const caja = $('#atrapa'), c = $('#atrapaLienzo'), x = c.getContext('2d'), btn = $('#atrapaJugar'), META = 15;
  let W = 0, H = 0, cx = null, items = [], n = 0, activo = false, raf = 0, t0 = 0, prox = 0;
  function mide() {
    const r = c.getBoundingClientRect(), d = dpr(); W = r.width; H = r.height;
    c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0);
    cx = cx == null ? W / 2 : lim(cx, 40, W - 40);
  }
  function corazon(it) {
    x.save(); x.translate(it.x, it.y); x.rotate(it.rot); x.scale(it.s / 24, it.s / 24); x.translate(-12, -12);
    x.fillStyle = it.c; x.shadowColor = it.c; x.shadowBlur = 14; x.fill(CORA); x.restore();
  }
  function canasta() {
    const y = H - 34;
    x.fillStyle = '#b9f27c'; x.beginPath(); x.moveTo(cx - 36, y - 12); x.lineTo(cx + 36, y - 12); x.lineTo(cx + 25, y + 20); x.lineTo(cx - 25, y + 20); x.closePath(); x.fill();
    x.strokeStyle = 'rgba(18,48,10,.35)'; x.lineWidth = 2;
    for (let i = -2; i <= 2; i++) { x.beginPath(); x.moveTo(cx + i * 13, y - 6); x.lineTo(cx + i * 9.5, y + 18); x.stroke(); }
    x.fillStyle = '#e9ffd0'; x.beginPath(); x.roundRect ? x.roundRect(cx - 41, y - 18, 82, 10, 5) : x.rect(cx - 41, y - 18, 82, 10); x.fill();
  }
  function quieto() { x.clearRect(0, 0, W, H); [[.2, .25, '#a985ff'], [.72, .18, '#7be8a6'], [.5, .45, '#a985ff'], [.85, .5, '#7be8a6']].forEach(([a, b, col]) => corazon({ x: W * a, y: H * b, s: 28, c: col, rot: 0 })); canasta(); }
  function paso(t) {
    const dt = Math.min(40, t - t0) / 16.7; t0 = t;
    x.clearRect(0, 0, W, H);
    if (t > prox) { items.push({ x: azar(24, W - 24), y: -24, v: azar(2.2, 3.6) + n * .09, s: azar(24, 34), c: Math.random() < .5 ? '#a985ff' : '#7be8a6', rot: azar(-.3, .3), g: azar(-.02, .02) }); prox = t + azar(380, 760); }
    for (const it of items) {
      it.y += it.v * dt; it.rot += it.g * dt;
      if (it.y > H - 62 && it.y < H - 26 && Math.abs(it.x - cx) < 42) {
        it.m = true; n++; $('#atrapaN').textContent = n; sfx.pop(); vibra(10);
        if (n >= META) { gana(); return; }
        continue;
      }
      corazon(it);
    }
    items = items.filter(i => !i.m && i.y < H + 30);
    canasta();
    raf = requestAnimationFrame(paso);
  }
  function empieza() { pausado = false; mide(); items = []; n = 0; $('#atrapaN').textContent = 0; activo = true; btn.hidden = true; t0 = performance.now(); prox = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(paso); }
  function gana() { activo = false; raf = 0; quieto(); btn.textContent = 'Jugar otra vez'; btn.hidden = false; completar(8, '15 corazones atrapados'); }
  const mueve = e => { const r = c.getBoundingClientRect(); cx = lim(e.clientX - r.left, 40, W - 40); if (!activo) quieto(); };
  c.addEventListener('pointerdown', mueve); c.addEventListener('pointermove', mueve);
  caja.tabIndex = 0; caja.setAttribute('aria-label', 'Juego: usa las flechas izquierda y derecha para mover la canasta');
  caja.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); cx = lim(cx + (e.key === 'ArrowLeft' ? -34 : 34), 40, W - 40); if (!activo) quieto(); }
  });
  let pausado = false;
  btn.addEventListener('click', () => {
    if (!pausado) { empieza(); return; }
    pausado = false; activo = true; btn.hidden = true; t0 = performance.now(); raf = requestAnimationFrame(paso);
  });
  addEventListener('resize', () => { mide(); if (!activo) quieto(); });
  pausas[8] = visible => {
    if (!visible && activo) { activo = false; pausado = true; cancelAnimationFrame(raf); raf = 0; btn.textContent = 'Seguir jugando'; btn.hidden = false; }
  };
  mide(); quieto();
}

/* ── 9 · Ruleta de citas ─────────────────────────────────────── */
function iniRuleta() {
  const disco = $('#ruletaDisco'), btn = $('#ruletaGirar'), vale = $('#vale'), citas = CONFIG.citas, N = citas.length, paso = 360 / N;
  let giro = 0;
  disco.style.background = `conic-gradient(${citas.map((_, i) => `${i % 2 ? '#7be8a6' : '#7c3aed'} ${i * paso}deg ${(i + 1) * paso}deg`).join(',')})`;
  citas.forEach((t, i) => { const s = document.createElement('span'); s.textContent = t.corto; s.style.transform = `rotate(${i * paso + paso / 2 - 90}deg)`; disco.append(s); });
  btn.addEventListener('click', () => {
    btn.disabled = true; vale.hidden = true;
    const k = entero(N), destino = 360 - (k * paso + paso / 2) + azar(-paso * .3, paso * .3);
    giro = Math.ceil(giro / 360) * 360 + 360 * 5 + destino;
    disco.style.transform = `rotate(${giro}deg)`;
    const dur = calma ? 80 : 4500;
    if (!calma) [0, 150, 320, 520, 760, 1050, 1400, 1850, 2400, 3100, 3900].forEach(ms => setTimeout(sfx.tic, ms));
    setTimeout(() => {
      btn.disabled = false; btn.textContent = 'Otra';
      $('#valeTexto').textContent = citas[k].largo; vale.hidden = false; sfx.bien();
      completar(9, 'Cita elegida');
    }, dur);
  });
}

/* ── 10 · Quiz de filtros ────────────────────────────────────── */
function iniQuiz() {
  const rondas = CONFIG.quiz, img = $('#quizImg'), marco = $('.quiz-foto'), ops = $('#quizOpciones'), resp = $('#quizResp'), sig = $('#quizSig');
  let k = 0, aciertos = 0;
  function muestra() {
    const r = rondas[k];
    img.style.transition = 'none'; marco.classList.remove('clara'); img.src = foto(r.f); void img.offsetWidth; img.style.transition = '';
    $('#quizRonda').textContent = k + 1; resp.textContent = ''; sig.hidden = true; ops.classList.remove('cerrado'); ops.innerHTML = '';
    mezcla(r.op).forEach(texto => {
      const b = document.createElement('button'); b.textContent = texto;
      b.addEventListener('click', () => {
        ops.classList.add('cerrado'); marco.classList.add('clara');
        const bien = texto === r.ok;
        if (bien) { aciertos++; b.classList.add('bien'); sfx.bien(); }
        else { b.classList.add('mal'); sfx.mal(); $$('button', ops).find(o => o.textContent === r.ok).classList.add('bien'); }
        resp.textContent = r.r;
        sig.textContent = k === rondas.length - 1 ? 'Ver resultado' : 'Otra foto'; sig.hidden = false;
      });
      ops.append(b);
    });
  }
  sig.addEventListener('click', () => {
    if (k < rondas.length - 1) { k++; muestra(); return; }
    sig.hidden = true; ops.innerHTML = ''; resp.textContent = '';
    $('#quizFinal').textContent = aciertos === rondas.length ? 'Cinco de cinco. Nadie conoce nuestras fotos como tú.'
      : aciertos >= 3 ? `${aciertos} de 5. Aprobado, pero toca repasar la galería conmigo.`
      : `${aciertos} de 5. Castigo: tomarnos más fotos con filtro.`;
    completar(10, `Quiz terminado: ${aciertos} de 5`);
  });
  muestra();
}

/* ── 11 · Baraja para deslizar ───────────────────────────────── */
function iniBaraja() {
  const caja = $('#baraja'), datos = CONFIG.caras; let pila = [];
  const orden = () => { pila.forEach((n, i) => { n.style.setProperty('--p', Math.min(i, 3)); n.style.zIndex = 20 - i; n.style.transform = ''; }); $('#barajaN').textContent = pila.length; };
  function arma() {
    $$('.naipe', caja).forEach(n => n.remove());
    pila = datos.map((d, i) => {
      const n = document.createElement('div'); n.className = 'naipe';
      n.innerHTML = `<img src="${foto(d.f)}" alt="${d.alt}" draggable="false"><p>${d.t}</p>`;
      n.style.setProperty('--lado', i % 2 ? 1 : -1); gestos(n); return n;
    });
    [...pila].reverse().forEach(n => caja.append(n)); orden();
  }
  function lanza(dir) {
    const n = pila.shift(); if (!n) return;
    n.classList.remove('arrastra'); n.classList.add('fuera');
    n.style.transform = `translate(${dir * 150}%, 8%) rotate(${dir * 28}deg)`;
    sfx.pop(); vibra(10); pila.forEach((m, i) => { m.style.setProperty('--p', Math.min(i, 3)); m.style.zIndex = 20 - i; });
    $('#barajaN').textContent = pila.length;
    if (!pila.length) completar(11, 'Colección vista completa');
  }
  function gestos(n) {
    let x0 = 0, y0 = 0, dx = 0, arr = false;
    n.addEventListener('pointerdown', e => { if (n !== pila[0]) return; arr = true; x0 = e.clientX; y0 = e.clientY; dx = 0; });
    n.addEventListener('pointermove', e => {
      if (!arr) return; dx = e.clientX - x0;
      if (!n.classList.contains('arrastra')) { if (Math.abs(dx) < 6) return; n.classList.add('arrastra'); try { n.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ } }
      n.style.transform = `translate(${dx}px, ${(e.clientY - y0) * .15}px) rotate(${dx / 14}deg)`;
    });
    const fin = () => { if (!arr) return; arr = false; n.classList.remove('arrastra'); if (Math.abs(dx) > 80) lanza(Math.sign(dx)); else n.style.transform = ''; };
    n.addEventListener('pointerup', fin); n.addEventListener('pointercancel', fin);
  }
  $('#barajaIzq').addEventListener('click', () => lanza(-1));
  $('#barajaDer').addEventListener('click', () => lanza(1));
  $('#barajaOtra').addEventListener('click', arma);
  arma();
}

/* ── 12 · Constelación ───────────────────────────────────────── */
function iniConstela() {
  const caja = $('#constela'), svg = $('#constelaSvg'), NS = 'http://www.w3.org/2000/svg';
  const pts = [[150, 96], [186, 56], [228, 52], [258, 88], [250, 138], [205, 192], [150, 242], [95, 192], [50, 138], [42, 88], [72, 52], [114, 56]];
  const crea = (tag, at, padre = svg) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); padre.append(e); return e; };
  for (let i = 0; i < 46; i++) crea('circle', { class: 'fondo', cx: azar(0, 300).toFixed(1), cy: azar(0, 280).toFixed(1), r: azar(.4, 1.3).toFixed(2), style: `animation-delay:-${azar(0, 3).toFixed(2)}s` });
  const defs = crea('defs', {}), clip = crea('clipPath', { id: 'recorteCora' }, defs);
  crea('polygon', { points: pts.map(p => p.join(',')).join(' ') }, clip);
  crea('image', { class: 'foto-cora', href: foto(18), x: 10, y: 40, width: 280, height: 210, preserveAspectRatio: 'xMidYMid slice', 'clip-path': 'url(#recorteCora)' });
  const lineas = crea('g', {});
  let sig = 0;
  const linea = (a, b) => crea('line', { class: 'trazo', x1: a[0], y1: a[1], x2: b[0], y2: b[1], pathLength: 1 }, lineas);
  const estrellas = pts.map((p, i) => {
    const g = crea('g', { class: 'estrella', tabindex: 0, role: 'button', 'aria-label': `Estrella ${i + 1}` });
    crea('circle', { class: 'toque', cx: p[0], cy: p[1], r: 19 }, g);
    crea('circle', { class: 'punto', cx: p[0], cy: p[1], r: 5 }, g);
    const dy = p[1] < 150 ? -11 : 19;
    crea('text', { x: p[0], y: p[1] + dy }, g).textContent = i + 1;
    const toca = () => {
      if (sig >= pts.length || g.classList.contains('on')) return;
      if (i !== sig) { g.classList.remove('error'); void g.getBBox(); g.classList.add('error'); sfx.mal(); aviso(`Primero la estrella ${sig + 1}`); return; }
      g.classList.remove('sig'); g.classList.add('on'); tono(392 + i * 44, .2, 'sine', .08); vibra(10);
      if (i > 0) linea(pts[i - 1], p);
      sig++;
      if (sig < pts.length) estrellas[sig].classList.add('sig');
      else { linea(p, pts[0]); setTimeout(() => { caja.classList.add('lista'); completar(12, 'Constelación completa'); }, 500); }
    };
    g.addEventListener('click', toca);
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toca(); } });
    return g;
  });
  estrellas[0].classList.add('sig');
}

/* ── 13 · Candado ────────────────────────────────────────────── */
function iniCandado() {
  const caja = $('#candado'), diales = $('#diales'), msg = $('#candadoMsg'), clave = CONFIG.clave.split('').map(Number);
  const val = clave.map(() => 0); let intentos = 0, abierto = false;
  clave.forEach((_, i) => {
    const d = document.createElement('div'); d.className = 'dial';
    d.innerHTML = `<button aria-label="Subir número ${i + 1}">▲</button><b>0</b><button aria-label="Bajar número ${i + 1}">▼</button>`;
    const b = $('b', d), [mas, menos] = $$('button', d);
    const cambia = dir => { if (abierto) return; val[i] = (val[i] + dir + 10) % 10; b.textContent = val[i]; b.style.setProperty('--dir', dir * -10 + 'px'); b.classList.remove('cambia'); void b.offsetWidth; b.classList.add('cambia'); sfx.tic(); };
    mas.addEventListener('click', () => cambia(1)); menos.addEventListener('click', () => cambia(-1));
    diales.append(d);
  });
  $('#candadoProbar').addEventListener('click', () => {
    if (abierto) return;
    if (val.every((v, i) => v === clave[i])) {
      abierto = true; caja.classList.add('abierto'); msg.textContent = 'Clic. Abierto.'; $('#candadoProbar').disabled = true;
      setTimeout(() => completar(13, 'Candado abierto'), 500); return;
    }
    intentos++; sfx.mal(); vibra(40); caja.classList.remove('mal'); void caja.offsetWidth; caja.classList.add('mal');
    msg.textContent = intentos < 2 ? 'Esa no es. Mira otra vez la foto.' : intentos < 4 ? 'Pista: en la foto hay una hora escrita.' : 'Última pista: son los tres números de esa hora, en orden.';
  });
}

/* ── 14 · Linterna ───────────────────────────────────────────── */
function iniLinterna() {
  const caja = $('#linterna'), sombra = $('.linterna-sombra', caja);
  const sitios = [[17, 11], [84, 24], [52, 55], [13, 79], [80, 90]]; let n = 0;
  const luz = e => { const r = caja.getBoundingClientRect(); caja.style.setProperty('--x', e.clientX - r.left + 'px'); caja.style.setProperty('--y', e.clientY - r.top + 'px'); };
  caja.addEventListener('pointerdown', luz); caja.addEventListener('pointermove', luz);
  sitios.forEach(([px, py], i) => {
    const b = document.createElement('button'); b.className = 'escondido'; b.style.left = px + '%'; b.style.top = py + '%';
    b.setAttribute('aria-label', `Corazón escondido ${i + 1}`); b.innerHTML = CORA_SVG;
    b.addEventListener('focus', () => { caja.style.setProperty('--x', px + '%'); caja.style.setProperty('--y', py + '%'); });
    b.addEventListener('click', () => {
      if (b.classList.contains('hallado')) return;
      b.classList.add('hallado'); n++; $('#linternaN').textContent = n; sfx.bien(); vibra(15);
      if (n === sitios.length) { caja.classList.add('lista'); completar(14, 'Los 5 corazones encontrados'); }
    });
    caja.insertBefore(b, sombra);
  });
}

/* ── 15 · Sopa de letras ─────────────────────────────────────── */
function iniSopa() {
  const caja = $('#sopa'), lista = $('#sopaPalabras'), T = 9, palabras = CONFIG.palabras.map(p => p.toUpperCase());
  const dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
  let g = [];
  for (let intento = 0; intento < 80; intento++) {
    g = Array(T * T).fill(''); let todo = true;
    for (const w of [...palabras].sort((a, b) => b.length - a.length)) {
      let puesto = false;
      for (let k = 0; k < 240 && !puesto; k++) {
        const [dx, dy] = dirs[entero(dirs.length)], x0 = entero(T), y0 = entero(T), x1 = x0 + dx * (w.length - 1), y1 = y0 + dy * (w.length - 1);
        if (x1 < 0 || x1 >= T || y1 < 0 || y1 >= T) continue;
        let cabe = true;
        for (let i = 0; i < w.length; i++) { const ch = g[(y0 + dy * i) * T + x0 + dx * i]; if (ch && ch !== w[i]) { cabe = false; break; } }
        if (!cabe) continue;
        for (let i = 0; i < w.length; i++) g[(y0 + dy * i) * T + x0 + dx * i] = w[i];
        puesto = true;
      }
      if (!puesto) { todo = false; break; }
    }
    if (todo) break;
  }
  const abc = 'AEIOULMNRSTCDPG';
  const celdas = g.map(ch => { const s = document.createElement('span'); s.textContent = ch || abc[entero(abc.length)]; caja.append(s); return s; });
  const items = {}; palabras.forEach(p => { const li = document.createElement('li'); li.textContent = p; lista.append(li); items[p] = li; });
  let ini = null, sel = [], faltan = palabras.length;
  const celdaEn = e => {
    const r = caja.getBoundingClientRect(), pad = 8, lado = (r.width - pad * 2) / T;
    return [lim(Math.floor((e.clientX - r.left - pad) / lado), 0, T - 1), lim(Math.floor((e.clientY - r.top - pad) / lado), 0, T - 1)];
  };
  function traza(fin) {
    const dx = fin[0] - ini[0], dy = fin[1] - ini[1], largo = Math.max(Math.abs(dx), Math.abs(dy));
    const oct = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)), ux = Math.round(Math.cos(oct * Math.PI / 4)), uy = Math.round(Math.sin(oct * Math.PI / 4));
    sel.forEach(i => celdas[i].classList.remove('sel')); sel = [];
    for (let i = 0; i <= largo; i++) { const cx = ini[0] + ux * i, cy = ini[1] + uy * i; if (cx < 0 || cx >= T || cy < 0 || cy >= T) break; sel.push(cy * T + cx); }
    sel.forEach(i => celdas[i].classList.add('sel'));
  }
  caja.addEventListener('pointerdown', e => { e.preventDefault(); try { caja.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ } ini = celdaEn(e); traza(ini); sfx.tic(); });
  caja.addEventListener('pointermove', e => { if (ini) traza(celdaEn(e)); });
  const fin = () => {
    if (!ini) return; ini = null;
    const txt = sel.map(i => celdas[i].textContent).join(''), rev = [...txt].reverse().join('');
    const w = palabras.find(p => (p === txt || p === rev) && !items[p].classList.contains('ok'));
    if (w) {
      sel.forEach(i => celdas[i].classList.add('ok')); items[w].classList.add('ok'); sfx.bien(); vibra(15);
      if (--faltan === 0) completar(15, 'Sopa de letras resuelta');
    }
    sel.forEach(i => celdas[i].classList.remove('sel')); sel = [];
  };
  caja.addEventListener('pointerup', fin); caja.addEventListener('pointercancel', fin);
}

/* ── 16 · Jardín ─────────────────────────────────────────────── */
function iniJardin() {
  const caja = $('#jardin'), ids = [25, 23, 29, 1, 24], petalos = ['#cdb4ff', '#b9f27c', '#a985ff', '#e9ffd0', '#d9c6ff'];
  let flores = 0;
  ids.forEach((id, k) => {
    const b = document.createElement('button'); b.className = 'planta'; b.dataset.nivel = 0; b.setAttribute('aria-label', `Regar la maceta ${k + 1}`);
    b.innerHTML = `<span class="flor" style="--pet:${petalos[k]}">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<b style="--a:${i * 45}deg"></b>`).join('')}<img src="${mini(id)}" alt=""></span><span class="tallo"></span><span class="maceta"></span>`;
    b.addEventListener('click', () => {
      let n = +b.dataset.nivel;
      if (n >= 3) { abrirVisor(foto(id), 'Foto de la flor'); return; }
      const gota = document.createElement('i'); gota.className = 'gota'; b.append(gota); setTimeout(() => gota.remove(), 600);
      n++; b.dataset.nivel = n; tono(500 + n * 120, .12, 'sine', .07);
      if (n === 3) { b.setAttribute('aria-label', `Ver la foto de la flor ${k + 1}`); sfx.bien(); if (++flores === ids.length) setTimeout(() => completar(16, 'Jardín florecido'), 900); }
    });
    caja.append(b);
  });
}

/* ── 17 · Mesa de fotos ──────────────────────────────────────── */
function iniMesa() {
  const mesa = $('#mesa'), nota = $('#mesaNota'), ids = [2, 8, 13, 3, 22, 15, 27];
  let z = 10, listo = false;
  const pinta = f => { f.style.transform = `translate(${f._x}px, ${f._y}px) rotate(${f._r}deg)`; };
  const limita = f => { const R = mesa.getBoundingClientRect(), w = f.offsetWidth, h = f.offsetHeight; f._x = lim(f._x, -w * .12, R.width - w * .88); f._y = lim(f._y, -h * .12, R.height - h * .88); };
  const fichas = ids.map((id, k) => {
    const f = document.createElement('div'); f.className = 'suelta'; f.tabIndex = 0; f.style.left = '0'; f.style.top = '0';
    f.setAttribute('role', 'button'); f.setAttribute('aria-label', `Foto ${k + 1}. Muévela con las flechas`);
    f.innerHTML = `<img src="${mini(id)}" alt="" draggable="false">`; mesa.append(f);
    let ox = 0, oy = 0, arr = false;
    f.addEventListener('pointerdown', e => { e.preventDefault(); arr = true; ox = e.clientX - f._x; oy = e.clientY - f._y; f.style.zIndex = ++z; f.classList.add('agarrada'); try { f.setPointerCapture(e.pointerId); } catch (err) { /* da igual */ } });
    f.addEventListener('pointermove', e => { if (!arr) return; f._x = e.clientX - ox; f._y = e.clientY - oy; limita(f); pinta(f); });
    const fin = () => { if (!arr) return; arr = false; f.classList.remove('agarrada'); revisa(); };
    f.addEventListener('pointerup', fin); f.addEventListener('pointercancel', fin);
    f.addEventListener('keydown', e => {
      const m = { ArrowLeft: [-28, 0], ArrowRight: [28, 0], ArrowUp: [0, -28], ArrowDown: [0, 28] }[e.key]; if (!m) return;
      e.preventDefault(); f._x += m[0]; f._y += m[1]; f.style.zIndex = ++z; limita(f); pinta(f); revisa();
    });
    return f;
  });
  const R = mesa.getBoundingClientRect();
  fichas.forEach((f, k) => {
    const w = f.offsetWidth, h = f.offsetHeight || w * 1.2, a = k / (fichas.length - 1) * Math.PI * 2, rad = k ? 38 : 0;
    f._x = R.width / 2 - w / 2 + Math.cos(a) * rad + azar(-8, 8); f._y = R.height / 2 - h / 2 + Math.sin(a) * rad * .7 + azar(-8, 8); f._r = azar(-14, 14); pinta(f);
  });
  function revisa() {
    if (listo) return;
    const n = nota.getBoundingClientRect(), area = n.width * n.height;
    const tapada = fichas.some(f => { const r = f.getBoundingClientRect(); const w = Math.min(r.right, n.right) - Math.max(r.left, n.left), h = Math.min(r.bottom, n.bottom) - Math.max(r.top, n.top); return w > 0 && h > 0 && w * h > area * .14; });
    if (!tapada) { listo = true; completar(17, 'Nota encontrada'); }
  }
}

/* ── 18 · Frasco de razones ──────────────────────────────────── */
function iniFrasco() {
  const frasco = $('#frasco'), vidrio = $('#frascoVidrio'), tarjeta = $('#razon'), razones = CONFIG.razones;
  const colores = ['#cdb4ff', '#b9f27c', '#a985ff', '#7be8a6', '#eadffc', '#e9ffd0'];
  let k = 0, vistas = 0;
  const papeles = razones.map((_, i) => { const p = document.createElement('i'); p.style.cssText = `left:${azar(8, 108).toFixed(0)}px;bottom:${(6 + (i % 4) * 22 + azar(0, 12)).toFixed(0)}px;--c:${colores[i % 6]};--r:${azar(-40, 40).toFixed(0)}deg`; vidrio.append(p); return p; });
  frasco.addEventListener('click', () => {
    frasco.classList.remove('agita'); tarjeta.classList.remove('sale'); void frasco.offsetWidth; frasco.classList.add('agita'); tarjeta.classList.add('sale');
    if (k === 0) papeles.forEach(p => p.classList.remove('usado'));
    papeles[papeles.length - 1 - k].classList.add('usado');
    $('#razonN').textContent = `Razón ${k + 1} de ${razones.length}`; $('#razonTexto').textContent = razones[k];
    k = (k + 1) % razones.length; vistas++; sfx.pop(); vibra(10);
    if (vistas === 5) completar(18, 'Cinco razones leídas');
  });
}

/* ── 19 · Pastel y deseo ─────────────────────────────────────── */
function iniPastel() {
  const vela = $('#vela'), form = $('#deseoForm'), instr = $('#pastelInstr'), vuela = $('#deseoVuela');
  vela.addEventListener('click', () => {
    if (vela.classList.contains('prendida') || vela.classList.contains('apagada')) return;
    vela.classList.add('prendida'); tono(700, .25, 'sine', .06); form.hidden = false;
    instr.textContent = 'Ahora escribe un deseo y sopla.';
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!vela.classList.contains('prendida')) return;
    const txt = $('#deseoTxt').value.trim(); $('#deseoTxt').blur(); $('#deseoTxt').value = '';
    vela.classList.remove('prendida'); vela.classList.add('apagada'); form.hidden = true;
    vuela.textContent = '★ ' + (txt || 'Un deseo secreto'); vuela.classList.add('va');
    tono(300, .5, 'sine', .05); instr.textContent = 'Shhh. Los deseos no se cuentan.';
    setTimeout(() => completar(19, 'Deseo pedido'), 1100);
  });
}

/* ── 20 · Final: mosaico y fuegos artificiales ───────────────── */
function iniFinal() {
  const sec = $('#s20'), c = $('#fuegos'), x = c.getContext('2d'), mos = $('#mosaico');
  const forma = ['011000110', '111101111', '111111111', '111111111', '011111110', '001111100', '000111000', '000010000'];
  const orden = [...mezcla([...Array(31).keys()]), ...mezcla([...Array(31).keys()])]; let k = 0;
  forma.join('').split('').forEach(v => {
    if (v === '0') { mos.append(document.createElement('i')); return; }
    const id = orden[k % orden.length] + 1, img = document.createElement('img');
    img.src = mini(id); img.alt = ''; img.loading = 'lazy'; img.dataset.zoom = foto(id); img.style.setProperty('--k', k++); mos.append(img);
  });

  const colores = ['#b9f27c', '#a985ff', '#7be8a6', '#cdb4ff', '#ffffff'];
  let W = 0, H = 0, ps = [], raf = 0, ultimo = 0;
  function mide() { const r = sec.getBoundingClientRect(), d = dpr(); W = r.width; H = r.height; c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0); }
  function lanza(px, py, callado) {
    const col = colores[entero(colores.length)], n = calma ? 14 : 56;
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + azar(-.1, .1), v = azar(1.4, 5.4); ps.push({ x: px, y: py, vx: Math.cos(a) * v, vy: Math.sin(a) * v, v: azar(50, 92), c: i % 5 ? col : '#ffffff', s: azar(1.4, 3) }); }
    if (!callado) { sfx.pop(); tono(azar(180, 260), .4, 'sine', .05, .05); }
    arranca();
  }
  function paso(t) {
    x.globalCompositeOperation = 'destination-out'; x.globalAlpha = 1; x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(0, 0, W, H);
    x.globalCompositeOperation = 'lighter';
    for (const p of ps) { p.vx *= .985; p.vy = p.vy * .985 + .045; p.x += p.vx; p.y += p.vy; p.v--; x.globalAlpha = Math.min(1, p.v / 40); x.fillStyle = p.c; x.beginPath(); x.arc(p.x, p.y, p.s, 0, 7); x.fill(); }
    ps = ps.filter(p => p.v > 0);
    const visible = visibles.has(20);
    if (visible && !calma && t - ultimo > 1200) { ultimo = t; lanza(azar(.1, .9) * W, azar(.05, .45) * H, true); }
    if (ps.length || visible) raf = requestAnimationFrame(paso); else { raf = 0; x.clearRect(0, 0, W, H); }
  }
  const arranca = () => { if (!raf) raf = requestAnimationFrame(paso); };
  sec.addEventListener('click', e => {
    if (e.target.closest('button, a, img')) return;
    const r = sec.getBoundingClientRect(); lanza(e.clientX - r.left, e.clientY - r.top);
    completar(20, 'Feliz primer año');
  });
  $('#reiniciar').addEventListener('click', () => irA($('#s1')));
  addEventListener('resize', mide);
  pausas[20] = visible => { if (visible) { mide(); arranca(); } };
  mide(); if (visibles.has(20)) arranca();
}

/* ── Arranque: cada parada se prepara cuando está por entrar ─── */
const inicios = { 1: iniPortada, 2: iniGlobos, 3: iniPuzzle, 4: iniRasca, 5: iniMemo, 6: iniDiario, 7: iniCarta, 8: iniAtrapa, 9: iniRuleta, 10: iniQuiz,
  11: iniBaraja, 12: iniConstela, 13: iniCandado, 14: iniLinterna, 15: iniSopa, 16: iniJardin, 17: iniMesa, 18: iniFrasco, 19: iniPastel, 20: iniFinal };
const visibles = new Set(), pausas = {};
const numero = el => +el.id.slice(1);

const obsSuelto = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ya'); obsSuelto.unobserve(e.target); } }), { threshold: .2 });
const obsInicio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  obsInicio.unobserve(e.target);
  try { inicios[numero(e.target)](); } catch (err) { console.error('Parada ' + numero(e.target), err); }
}), { rootMargin: '90% 0px' });
const obsVista = new IntersectionObserver(es => es.forEach(e => {
  const n = numero(e.target);
  if (e.isIntersecting) { e.target.classList.add('en-vista'); visibles.add(n); } else visibles.delete(n);
  if (pausas[n]) pausas[n](e.isIntersecting);
}), { threshold: .08 });

secciones.forEach(s => {
  $$('.rv', s).forEach((el, i) => el.style.setProperty('--i', i));
  obsInicio.observe(s); obsVista.observe(s);
});
alDesplazar();
})();
