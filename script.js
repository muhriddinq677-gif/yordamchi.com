// 1. Sehrli buyumlar ro'yxati
const sehrliBuyumlar = ['✨'];
let tunRejimi = true;

// 2. Rejimni almashtirish tugmasi (Knopka)
const tugma = document.createElement('button');
tugma.innerText = '🌙 Tun / ☀️ Kun';
tugma.style.cssText = 'position:fixed; top:20px; right:20px; z-index:10001; padding:12px 24px; cursor:pointer; border-radius:30px; border:none; background:gold; font-weight:bold; font-family:sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.4); transition: 0.3s;';
document.body.appendChild(tugma);

// 3. Sehrli tayoqcha dizayni
const tayoqcha = document.createElement('div');
tayoqcha.style.cssText = 'position:fixed; width:12px; height:100px; background:linear-gradient(to bottom, #5d3411, #2b1604); border-radius:4px; pointer-events:none; z-index:10000; transform-origin:top center; transform:rotate(-45deg); transition: transform 0.1s;';

const tayoqchaUchi = document.createElement('div');
tayoqchaUchi.style.cssText = 'width:12px; height:30px; background:gold; border-radius:4px 4px 0 0; box-shadow:0 0 20px 8px gold; position:absolute; top:0; left:0;';

tayoqcha.appendChild(tayoqchaUchi);
document.body.appendChild(tayoqcha);
document.body.style.cursor = 'none'; // Haqiqiy sichqonchani yashirish

// 4. Osmon qatlami (Fon uchun)
const osmonQatlami = document.createElement('div');
osmonQatlami.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1; pointer-events:none; overflow:hidden; transition: 1s;';
document.body.insertBefore(osmonQatlami, document.body.firstChild);

// 5. CSS Animatsiyalar (Harakatlar)
const uslub = document.createElement('style');
uslub.innerHTML = `
    /* Sehrli buyumlar uchishi */
    @keyframes sehrUchishi { 
        0% { transform:translate(0,0) scale(0.5); opacity:1; } 
        100% { transform:translate(var(--xYunalish), var(--yYunalish)) scale(0) rotate(1080deg); opacity:0; } 
    }
    /* Portlash harakati */
    @keyframes portlashHarakati {
        0% { transform: translate(0,0) scale(1); opacity: 1; }
        100% { transform: translate(var(--pX), var(--pY)) scale(0); opacity: 0; }
    }
    /* Quyosh va oyni tushishi */
    @keyframes sakrashEffekti {
        0% { transform: translateY(-500px); opacity: 0; }
        60% { transform: translateY(30px); opacity: 1; }
        80% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
    }
    /* Bulutlar yurishi */
    @keyframes bulutYurishi { from { left: -200px; } to { left: 100%; } }

    .sehr-zarrachasi { position:fixed; pointer-events:none; font-size:28px; z-index:9998; animation: sehrUchishi 1s forwards ease-out; }
    .portlash-zarrachasi { position:fixed; width:10px; height:10px; border-radius:50%; pointer-events:none; z-index:9999; animation: portlashHarakati 0.8s forwards ease-out; }
    .osmon-jismi { position: absolute; top: 50px; left: 80px; font-size: 100px; animation: sakrashEffekti 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
    .yulduzcha { position: absolute; font-size: 15px; color: white; }
    .bulutcha { position: absolute; font-size: 80px; animation: bulutYurishi linear infinite; opacity: 0.7; }
`;
document.head.appendChild(uslub);

// 6. Rejimni yangilash funksiyasi
function rejimniYangila() {
    osmonQatlami.innerHTML = ''; // Ekranni tozalash
    const jism = document.createElement('div');
    jism.className = 'osmon-jismi';

    if (tunRejimi) {
        document.body.style.backgroundColor = '#050a16';
        tugma.innerText = '🌙 Tungi rejim';
        tugma.style.background = '#1a1a2e';
        tugma.style.color = '#fbfcd9';
        jism.innerText = '🌙';
        for(let i=0; i<40; i++) {
            const yulduz = document.createElement('div');
            yulduz.className = 'yulduzcha'; yulduz.innerText = '⭐';
            yulduz.style.top = Math.random()*100+'%'; yulduz.style.left = Math.random()*100+'%';
            osmonQatlami.appendChild(yulduz);
        }
    } else {
        document.body.style.backgroundColor = '#4facfe';
        tugma.innerText = '☀️ Kunduzgi rejim';
        tugma.style.background = 'gold'; tugma.style.color = '#000';
        jism.innerText = '☀️';
        for(let i=0; i<4; i++) {
            const bulut = document.createElement('div');
            bulut.className = 'bulutcha'; bulut.innerText = '☁️';
            bulut.style.top = (20 + i*15) + '%'; bulut.style.animationDuration = (20 + i*10) + 's';
            osmonQatlami.appendChild(bulut);
        }
    }
    osmonQatlami.appendChild(jism);
}

// 7. Rangli portlash yaratish funksiyasi
function portlashYarat(x, y) {
    const ranglar = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFFF33', '#00FFFF'];
    for (let i = 0; i < 25; i++) {
        const zarracha = document.createElement('div');
        zarracha.className = 'portlash-zarrachasi';
        zarracha.style.left = x + 'px';
        zarracha.style.top = y + 'px';
        const rang = ranglar[Math.floor(Math.random() * ranglar.length)];
        zarracha.style.backgroundColor = rang;
        zarracha.style.boxShadow = `0 0 12px ${rang}`;
        
        zarracha.style.setProperty('--pX', (Math.random() - 0.5) * 450 + 'px');
        zarracha.style.setProperty('--pY', (Math.random() - 0.5) * 450 + 'px');
        
        document.body.appendChild(zarracha);
        setTimeout(() => zarracha.remove(), 850);
    }
}

// 8. Sichqoncha harakati hodisasi
document.addEventListener('mousemove', (e) => {
    tayoqcha.style.left = e.clientX + 'px';
    tayoqcha.style.top = e.clientY + 'px';

    const p = document.createElement('div');
    p.className = 'sehr-zarrachasi';
    p.innerText = sehrliBuyumlar[Math.floor(Math.random()*sehrliBuyumlar.length)];
    p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
    p.style.color = tunRejimi ? '#fff' : '#222';
    
    p.style.setProperty('--xYunalish', (Math.random()-0.5)*300+'px');
    p.style.setProperty('--yYunalish', (Math.random()-0.5)*300+'px');
    
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1000);
});

// 9. Sichqoncha bosilganda portlash
document.addEventListener('mousedown', (e) => {
    if (e.target === tugma) return;
    portlashYarat(e.clientX, e.clientY);
    tayoqcha.style.transform = 'rotate(-15deg) scale(1.3)';
    setTimeout(() => { tayoqcha.style.transform = 'rotate(-45deg) scale(1)'; }, 150);
});

// 10. Tugma bosilganda rejimni o'zgartirish
tugma.addEventListener('click', (e) => { 
    e.stopPropagation();
    tunRejimi = !tunRejimi; 
    rejimniYangila(); 
});

rejimniYangila();
