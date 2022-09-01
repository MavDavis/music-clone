import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      isPlaying: false,
      index: 0,
      currentImageSrc: "https://source.unsplash.com/crs2vlkSe98/400x400",
      playlist: [
        {
          title: "[FREE] Freestyle Type Beat",
          artist: "Unknown",
          url: require("../assets/audio/beats.mp3"),
          image: "https://source.unsplash.com/crs2vlkSe98/400x400",
          isPlaying:false,
          isLiked:false,
        },
        {
          title: " Hard Drill Instrumental  ",
          artist: "Mastermind Drake x Popsmoke",
          url: require("../assets/audio/hardDrill.mp3"),
          image: "https://source.unsplash.com/35bE_njbG9E/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: " For My Hand ",
          artist: "Burna Boy -feat. Ed Sheeran",
          url: require("../assets/audio/formyhand.mp3"),
          image: "https://source.unsplash.com/Esax9RaEl2I/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "It s Plenty",
          artist: "Burna Boy  ",
          url: require("../assets/audio/itsPlenty.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "Juice WRLD DID (Official Audio)",
          artist: "DJ Khaled - ft. Juice WRLD  ",
          url: require("../assets/audio/juicedid.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "CYMATICS Science",
          artist: "Nigel Stanford  ",
          url: require("../assets/audio/physics.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: " Mockingbird ",
          artist: "Eminem ",
          url: require("../assets/audio/mockingbird.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "Older ",
          artist: "Sasha Sloan",
          url: require("../assets/audio/older.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "Silent Night ",
          artist: " Hillsong",
          url: require("../assets/audio/silent.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "God Will Make A Way",
          artist: "Don Moen",
          url: require("../assets/audio/makeaway.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "Holy Spirit (Official audio)",
          artist: "Jesus Culture ",
          url: require("../assets/audio/holyspirit.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
        {
          title: "I'm a prisoner",
          artist: "Lucky Dube ",
          url: require("../assets/audio/prisoner.mp3"),
          image: "https://source.unsplash.com/j0g8taxHZa0/400x400",
          isPlaying:false,
          isLiked:false,

        },
      ],
      url: require("../assets/audio/older.mp3"),
      currentTitle: "",
      currentArtist: "",
  
    };
  },
  mutations: {
    playSingle(state, n){
let array = state.playlist;
let song = array.find(item => item.title == n);
let songs = array.filter(item => item.title !== n);
songs.map(item=> item.isPlaying = false)
state.index = (array.indexOf(song)); 
state.isPlaying = true;
state.currentTitle =song.title;
state.currentArtist = song.artist;
state.currentImageSrc = song.image;
state.url = song.url;
song.isPlaying = true

    },
    pauseSingle(state, n){
      let array = state.playlist;
      let song = array.find(item => item.title == n);
      song.isPlaying = false
      state.isPlaying = false;
    },
    played(state) {
      state.isPlaying = true;
      state.currentTitle = state.playlist[state.index].title;
      state.currentArtist = state.playlist[state.index].artist;
      state.currentImageSrc = state.playlist[state.index].image;

      state.player.src = state.playlist[state.index].url;   
      state.currentImageSrc = state.playlist[state.index].image;
    },

    paused(state) {
      state.isPlaying = false;
      state.duration = state.player.duration;
    
    },
    next(state) {
      if (state.index <= state.playlist.length - 2) {
        state.index = state.index + 1;
        state.isPlaying = true;

        state.currentImageSrc = state.playlist[state.index].image;
        state.currentTitle = state.playlist[state.index].title;
        state.currentArtist = state.playlist[state.index].artist;
        state.url = state.playlist[state.index].url;
      }
    },
    prev(state) {
      if (state.index > 0) {
        state.index = state.index - 1;
        state.isPlaying = true;
        state.currentImageSrc = state.playlist[state.index].image;
        state.currentTitle = state.playlist[state.index].title;
        state.currentArtist = state.playlist[state.index].artist;
        state.url = state.playlist[state.index].url;
   
      }
    },
  },
});
