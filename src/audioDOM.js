class AudioDOM{
    toggleAudio() {
        var audio =
     document.getElementById("playerid");
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
        console.log(audio);
      }
}
document.addEventListener("DOMContentLoaded", () => {
    const ui = new AudioDOM()
ui.toggleAudio
})