function restartVideos(){
    $.each($('video'), function(i, video){
        video.currentTime = 0;
        video.pause();
        var play_for = $(video).data('for');
        if(document.location.hash.slice(2) == play_for){
            video.play();
        }
    });
}

window.addEventListener("popstate", function(e) {
    restartVideos();
});

restartVideos();

$('video').click(function(){
    this.paused ? this.play() : this.pause();
});

$('video').dblclick(function(){
    this.currentTime = 0;
});
