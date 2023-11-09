// 音声読み上げON/OFFフラグ
let speakCommentFlg = 0;

// 音声読み上げスイッチ
function speakSwitch() {
  let speakMsg = new SpeechSynthesisUtterance('コメント読み上げをオンにしました。');
  speakMsg.lang = 'ja-JP';
  speakMsg.rate = 1.0;
  if ( speakCommentFlg == 1 ) {
    speakCommentFlg = 0;
    speakMsg.text = 'コメント読み上げをオフにしました。';
    window.speechSynthesis.speak(speakMsg);
    return;
  }
  speakCommentFlg = 1;
  speakMsg.text = 'コメント読み上げをオンにしました。';
  window.speechSynthesis.speak(speakMsg);
}