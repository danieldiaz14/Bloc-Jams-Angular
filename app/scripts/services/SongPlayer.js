(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
        var current Album = Fixtures.getAlbum();
        /**
        @dec Buzz object audio file
        @type {Object}
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        SongPlayer.currentSong = null;
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
            
            SongPlayer.currentSong = song;
        };
        
        var playSong = function() {
            currentBuzzObject.play(currentBuzzObject);
            song.playing = true: song.playing = true;
        }
        /**
        @function play
        @desc Play current or new song
        @param {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                
            setSong(song); 
            playSong();
            song.playing = true;
        } else if ( SongPlayer.currentSong === song) {
            if(currentBuzzObject.isPaused()) {
                playSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        }
        
      };
        /**
        @function pause
        @desc Pause current song
        @param {Object} song
        */
        
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
        };
        
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex <0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures',SongPlayer]);
})();