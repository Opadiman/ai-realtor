const replayButton = document.querySelector('#process-replay');
const processStage = document.querySelector('#process-stage');

replayButton?.addEventListener('click', () => {
  processStage.classList.remove('is-replaying');
  void processStage.offsetWidth;
  processStage.classList.add('is-replaying');
});

processStage?.addEventListener('animationend', event => {
  if (event.target.classList.contains('process-result')) {
    processStage.classList.remove('is-replaying');
  }
});
