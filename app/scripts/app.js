(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
            .state('landing', {
            url: '/',
            controller: 'LandingCtrl.js',
            templateUrl: '/templates/landing.html'
        })
            .state('album', {
            url: '/',
            controller: 'AlbumCtrl.js',
            templateUrl: '/templates/album.html'
        })
            .state('collection', {
            url: '/',
            controller: 'CollectionCtrl.js',
            templateUrl: '/templates/collection.html'
        });
}
    angular
            .module('blocJams', ['ui.router']);
            .config(config);
})();