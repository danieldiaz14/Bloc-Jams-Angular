(function() {
    function SongPlayer($rootScope, Fixtures) {
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
        /**
        @desc Current playback time (in seconds) of currently playing song
        @type {Number}
        */
        SongPlayer.currentTime = null;
        
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
            
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    songPlayer.currentTime = currentBuzzObject.getTime();
                });
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
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        }
        
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            var lastSongIndex = currentAlbum.songs.length - 1;

            if (currentSongIndex > lastSongIndex) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        /**
        @function setCurrentTime
        @desc Set current time (in seconds) of currently playing song
        @param {Number} time
        */
        
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
                currentBuzzObject.setVolume(volume);
            }
            SongPlayer.volume = volume;
        };
        
        return SongPlayer;
    };
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();