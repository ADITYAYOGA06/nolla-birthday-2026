let musicStarted = false;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function nextPage(current) {
  // Mulai musik saat interaksi pertama
  if (!musicStarted) {
    const music = document.getElementById('bgMusic');
    console.log('playing music in background');
    music.play().catch(() => {});
    musicStarted = true;
  }

  showPage(current + 1);
}

function goToStart() {
  showPage(1);
}