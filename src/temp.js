// 재생해줌
document
  .querySelector(
    '#front-screen > div > div.vc-front-screen-btn-container > div.vc-front-screen-btn-wrapper.video1-btn > div'
  )
  .click();

// 이어서 보시겠습니까 okay
document
  .querySelector(
    '#confirm-dialog > div > div > div.confirm-btn-wrapper > div.confirm-ok-btn.confirm-btn'
  )
  .click();

// video tag 재생시킴
document
  .querySelector(
    '#video-play-video1 > div.vc-vplay-container.non-selectable > video'
  )
  .play();
// video 배속
document.querySelector(
  '#video-play-video1 > div.vc-vplay-container.non-selectable > video'
).playbackRate = 2;

// video 종료됬나 check
document.querySelector(
  '#video-play-video1 > div.vc-vplay-container.non-selectable > video'
).paused;
