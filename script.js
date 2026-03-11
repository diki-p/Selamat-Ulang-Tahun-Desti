const message=`Semoga di umur yang baru ini kamu selalu sehat, bahagia, dan dikelilingi banyak hal baik.

Semangat terus ngerjain skripsinya 📚 semoga semua prosesnya dimudahkan.

Semangat juga ngejar wisuda tahun ini 🎓 semoga semua perjuanganmu terbayar.

Tetap jadi pribadi yang hebat dan membanggakan.

Selamat ulang tahun Desti Afyani 💖`;

setTimeout(()=>{
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
},2500);

function nextPage(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function openEnvelope(){
  const env=document.getElementById("env");
  env.classList.add("open");

  setTimeout(()=>{
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
    typeText();
  },1000);
}

function typeText(){
  let i=0;
  const el=document.getElementById("letterText");

  function typing(){
    if(i<message.length){
      el.innerHTML+=message.charAt(i);
      i++;
      setTimeout(typing,35);
    }
  }

  typing();
}

function openGift(){
  const gift=document.getElementById("gift");
  gift.classList.add("open");
  document.getElementById("giftMsg").classList.remove("hidden");
}

for(let i=0;i<120;i++){
  const star=document.createElement("div");
  star.className="star";
  star.style.left=Math.random()*100+"vw";
  star.style.top=Math.random()*100+"vh";
  star.style.animationDuration=(Math.random()*2+1)+"s";
  document.getElementById("stars").appendChild(star);
}
