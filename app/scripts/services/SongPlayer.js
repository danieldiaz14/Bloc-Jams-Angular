(function() {
    function SongPlayer() {
        var SongPlayer = {};
        
        var currentSong = null;
        /**
        @dec Buzz object audio file
        @type {Object}
        */
        var currentBuzzObject = null;
        /**
        @ function setSong
        @ desc stops currently playing song and loads new audio file as currentBuzzObject
        @param {Object} song
        */
        
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentSong = song;
        };
        
        var playSong = function() {
            currentBuzzObject.play(currentBuzzObject);
            song.playing = true: song.playing = true;
        }
        
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                
            setSong(song); 
            playSong();
            song.playing = true;
        } else if ( currentSong === song) {
            if(currentBuzzObject.isPaused()) {
                playSong();
            }
        }
        
      };
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();