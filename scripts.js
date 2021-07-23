document.addEventListener('keyup', function(e){
    var key = document.querySelectorAll("[data-key=" + e.key.toUpperCase() + "]");
    if(!key[key.length - 1]) return false;
    var path = key[key.length - 1].getAttribute('data-src');
    playSound(path);
});

var itemList = document.getElementsByTagName("button");
for(i = 0; i < itemList.length; i++){
    itemList[i].addEventListener('click', function(){
        var path = this.getAttribute('data-src');
        if(!path) return false;
        playSound(path);
    })
}

function playSound(path){
    var audio = new Audio(path);
    if(!audio) return false;
    audio.play();
}