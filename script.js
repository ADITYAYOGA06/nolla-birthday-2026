let musicStarted = false;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function nextPage(current) {
    const music = document.getElementById('bgMusic');

  // Mulai musik saat interaksi pertama
  if (!musicStarted) {
    console.log('playing music in background');
    music.play().catch(() => {});
    musicStarted = true;
  }

  const next = current + 1;

  if (next === 3) {
    music.pause();
    music.currentTime = 0; // opsional: reset lagu ke awal
  }else{
    music.play().catch(() => {});
  }

  showPage(next);
}

function goToStart() {
  showPage(1);
}