<template>
  <div id="audio-player-root w-full h-2">
    <!-- Hide the default audio player -->
    <div>
      <audio style="display: none" ref="player" :id="playerid">
        <source :src="$store.state.url" type="audio/mpeg" />
      </audio>
    </div>

    <div class="w-full  px-2 pt-2 mt-4 relative">
      <div id="player-row" class="inline-flex flex-wrap w-full max-w-5xl ">
        <div id="button-div" class="flex-initial pr-3">
          <i
            @click="toggleAudio()"
            v-if="!isPlaying"
            class="play-button text-lightest hover:text-white fas fa-play-circle cursor-pointer fa-2x"
          ></i>

          <i
            @click="toggleAudio()"
            v-else
            class="play-button text-lightest hover:text-white  cursor-pointer fas fa-pause fa-2x"
          >
          </i>
        </div>

        <div id="progress-bar" class="flex-grow">
          <div class="overlay-container relative w-full h-1 ">
            <input

              v-model="playbackTime"
              type="range"
              min="0"
              :max="audioDuration"
              class="slider w-full h-full"
              id="position"
              name="position"
            />
            <!-- Show loading indicator until audio has been loaded -->

            <!-- <div
              v-show="audioLoaded"
              class="flex w-full justify-between  px-2 pointer-events-none"
            >
              <span class="text-xs  text-white" >
                {{ elapsedTime }}</span
              >

              <span class="text-xs text-white" 
                >{{ totalTime }}
              </span>
            </div> -->
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- gt -->
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["playerid"],
  
  computed: {
    elapsedTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.currentTime;
        return this.convertTime(seconds);
      } else {
        return "00:00";
      }
    },
    totalTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.duration;
        return this.convertTime(seconds);
      } else {
        return "00:00";
      }
    },
  },
  data() {
    return {
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
    };
  },
  methods: {
    //Set the range slider max value equal to audio duration
    initSlider() {
      var audio = this.$refs.player;
      if (audio) {
        this.audioDuration = Math.round(audio.duration);
      }
    },
    //Convert audio current time from seconds to min:sec display
    convertTime(seconds) {
      const format = (val) => `0${Math.floor(val)}`.slice(-2);
      var hours = seconds / 3600;
      var minutes = (seconds % 3600) / 60;
      return [minutes, seconds % 60].map(format).join(":");
    },
  
    playbackListener(e) {
      var audio = this.$refs.player;
      this.playbackTime = audio.currentTime;

      audio.addEventListener("ended", this.endListener);
      audio.addEventListener("pause", this.pauseListener);
    },
    //Function to run when audio is paused by user
    pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Function to run when audio play reaches the end of file
    endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Remove listeners after audio play stops
    cleanupListeners() {
      var audio = this.$refs.player;
      audio.removeEventListener("timeupdate", this.playbackListener);
      audio.removeEventListener("ended", this.endListener);
      audio.removeEventListener("pause", this.pauseListener);
      //console.log("All cleaned up!");
    },
    toggleAudio() {
      var audio = this.$refs.player;
      //var audio = document.getElementById("audio-player");
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
  },
  mounted: function () {
    // nextTick code will run only after the entire view has been rendered
    this.$nextTick(function () {
      var audio = this.$refs.player;
      //Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider
      // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
      audio.addEventListener(
        "loadedmetadata",
        function (e) {
          this.initSlider();
        }.bind(this)
      );
      // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
      audio.addEventListener(
        "canplay",
        function (e) {
          this.audioLoaded = true;
        }.bind(this)
      );
      //Wait for audio to begin play, then start playback listener function
      this.$watch("isPlaying", function () {
        if (this.isPlaying) {
          var audio = this.$refs.player;
          this.initSlider();
          //console.log("Audio playback started.");
          //prevent starting multiple listeners at the same time
          if (!this.listenerActive) {
            this.listenerActive = true;
            //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
            audio.addEventListener("timeupdate", this.playbackListener);
          }
        }
      });
      //Update current audio position when user drags progress slider
      this.$watch("playbackTime", function () {
        var audio = this.$refs.player;
        var diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);

        //Throttle synchronization to prevent infinite loop between playback listener and this watcher
        if (diff > 0.01) {
          this.$refs.player.currentTime = this.playbackTime;
        }
      });
    });
  },
};
</script>

<style>
/* Play/Pause Button */
.play-button {
  height: 45px;
}
input[type="range"] {
 
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 10px; /* iOS */
  background: transparent;
}
input[type="range"]:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  background: #121212;
}
/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0; /* 1 */
  height: 40px;
  background: #fff;
  box-shadow: -100vw 0 0 100vw #1DB954;
  border: none; /* 2px solid #999; */
}
::-moz-range-track {
  height: 40px;
  background: #ddd;
}
::-moz-range-thumb {
  background: #fff;
  height: 40px;
  width: 0; /* 20px; */
  border: none; /* 3px solid #999; */
  border-radius: 0 !important;
  box-shadow: -100vw 0 0 100vw #1DB954;
  box-sizing: border-box;
}
::-ms-fill-lower {
  background: #1DB954;
}
::-ms-thumb {
  background: #fff;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}
::-ms-ticks-after {
  display: none;
}
::-ms-ticks-before {
  display: none;
}
::-ms-track {
  background: #ddd;
  color: transparent;
  height: 40px;
  border: none;
}
::-ms-tooltip {
  display: none;
}
</style>
