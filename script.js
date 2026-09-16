/* =========================================================
   BIRTHDAY CARD — CUSTOM ANIMATION ENGINE
   Semua personalisasi utama ada di CONFIG.
   ========================================================= */

const CONFIG = {
  friendName: "Theresia Caesarinaito❤️❤️",
  senderName: "Mario Hasibuan",

  shortMessage:
    "Happy Birthday Ibu Guru Cantik🥳🥳🥳",

  letter:
`Selamat ulang tahun!

Dengan Gift Card ini aku mau nyampein  terima kasih banyak udah mau nerima dan merespons aku dengan baik, mau bercerita dengan ku, aku udh pasti lah ya akan berusaha semaksimal mungkin.

Semoga setiap langkah yang kamu ambil membawa kamu semakin dekat dengan hal-hal yang kamu cita-citakan. Kalau suatu hari perjalanan terasa berat, ingatlah bahwa kamu sudah melewati banyak hal sampai berada di titik ini.

Maaf kalau aku suka sarkas tentang kamu yang bingung, aku ga bermaksud untuk mendesak kamu jadi ya take your time selama apapun yang kamu butuhkan

Sekali lagi, selamat ulang tahun. Wopyuuuu ❤️`,

  typingSpeed: 22,
  musicEnabled: true,
  particles: 45
};

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Re-trigger reveal animations setiap pindah halaman
  const reveal = document.querySelector(`#${id} .reveal`);
  if (reveal) {
    reveal.classList.remove("reveal");
    void reveal.offsetWidth;
    reveal.classList.add("reveal");
  }
  window.scrollTo({top:0, behavior:"smooth"});
}

// ===== CONTENT =====
document.getElementById("friendName").textContent = CONFIG.friendName;
document.getElementById("letterName").textContent = CONFIG.friendName;
document.getElementById("senderName").textContent = CONFIG.senderName;
document.getElementById("finalSender").textContent = CONFIG.senderName;
document.getElementById("shortMessage").textContent = CONFIG.shortMessage;
document.title = `Happy Birthday, ${CONFIG.friendName}! 🎉`;

// ===== FLOATING PARTICLES =====
function createParticles() {
  const box = document.getElementById("particles");
  for (let i = 0; i < CONFIG.particles; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = `${Math.random()*100}%`;
    p.style.animationDuration = `${8 + Math.random()*16}s`;
    p.style.animationDelay = `${-Math.random()*18}s`;
    p.style.transform = `scale(${.4 + Math.random()*1.5})`;
    box.appendChild(p);
  }
}
createParticles();

// ===== MOUSE / TOUCH GLOW =====
const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// ===== CONFETTI =====
function launchConfetti(amount=100) {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
  const colors = ["#fbbf24","#fb7185","#60a5fa","#34d399","#c084fc","#f8fafc"];

  for(let i=0;i<amount;i++){
    const piece=document.createElement("span");
    piece.className="confetti";
    piece.style.left=`${Math.random()*100}%`;
    piece.style.setProperty("--drift",`${(Math.random()-.5)*350}px`);
    piece.style.animationDuration=`${2.4+Math.random()*3.2}s`;
    piece.style.animationDelay=`${Math.random()*.8}s`;
    piece.style.background=colors[Math.floor(Math.random()*colors.length)];
    piece.style.width=`${6+Math.random()*8}px`;
    piece.style.height=`${8+Math.random()*13}px`;
    container.appendChild(piece);
  }
  setTimeout(()=>container.innerHTML="",7000);
}

// ===== TYPEWRITER =====
let letterStarted=false;
async function typeLetter(){
  if(letterStarted) return;
  letterStarted=true;
  const target=document.getElementById("letterText");
  target.textContent="";

  for(const char of CONFIG.letter){
    target.textContent += char;
    await new Promise(r=>setTimeout(r,CONFIG.typingSpeed));
  }
}

// ===== BUTTONS =====
document.getElementById("openGift").addEventListener("click",()=>{
  showScreen("birthday");
  launchConfetti(120);
  tryStartMusic();
});

document.getElementById("openLetter").addEventListener("click",()=>{
  showScreen("letter");
  typeLetter();
});

document.getElementById("openMemories").addEventListener("click",()=>{
  showScreen("memories");
});

document.getElementById("finish").addEventListener("click",()=>{
  showScreen("finishScreen");
  launchConfetti(150);
});

document.getElementById("replay").addEventListener("click",()=>{
  letterStarted=false;
  showScreen("landing");
});

// ===== PHOTO LIGHTBOX =====
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");

document.querySelectorAll(".photo-card img").forEach(img=>{
  img.addEventListener("click",()=>{
    lightboxImage.src=img.src;
    lightbox.classList.add("open");
  });
});

function closeLightbox(){
  lightbox.classList.remove("open");
  lightboxImage.src="";
}
document.getElementById("closeLightbox").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{
  if(e.target===lightbox) closeLightbox();
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeLightbox();
});

// ===== MUSIC =====
const music=document.getElementById("bgMusic");
const musicButton=document.getElementById("musicButton");

async function tryStartMusic(){
  if(!CONFIG.musicEnabled)return;
  try{
    await music.play();
    musicButton.classList.add("playing");
    musicButton.textContent="♫";
  }catch(e){
    musicButton.textContent="▶";
  }
}

musicButton.addEventListener("click",async()=>{
  if(music.paused){
    try{
      await music.play();
      musicButton.classList.add("playing");
      musicButton.textContent="♫";
    }catch(e){}
  }else{
    music.pause();
    musicButton.classList.remove("playing");
    musicButton.textContent="▶";
  }
});

// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("pointermove",e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*.12}px,${y*.12}px)`;
  });
  btn.addEventListener("pointerleave",()=>{
    btn.style.transform="";
  });
});
