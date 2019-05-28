$(document).ready(function() {
  // your code here
  const tones = [
    { note: '.c', audio: '#cAudio', key: 'c' },
    { note: '.d', audio: '#dAudio', key: 'd' },
    { note: '.e', audio: '#eAudio', key: 'e' },
    { note: '.f', audio: '#fAudio', key: 'f' },
    { note: '.g', audio: '#gAudio', key: 'g' },
    { note: '.a', audio: '#aAudio', key: 'a' },
    { note: '.b', audio: '#bAudio', key: 'b' },
  ];

  tones.forEach(tone => {
    const note = $(`${tone.note}`);
    const audio = $(`${tone.audio}`);
    note.click(() => {
      console.log('click');
      audio[0].load();
      audio[0].play();
    });
    $('body').keydown(event => {
      if (event.key === tone.key) {
        audio[0].load();
        audio[0].play();
      }
    });
  });
});
