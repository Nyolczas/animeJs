var btnStart = document.getElementById('btn-start');
var btnBack = document.getElementById('btn-back');
var animDuration = 500;

btnStart.onclick = function() {
    btnStart.style.display='none';
    
    anime({
        targets: '.polymorph',
        points: [
            {
                value: '838.5,0.5 1263,531 839,1080.5 1164,1080.5 1587,524 1163.5,0.5'
            },
        ],
        delay: anime.stagger(10, {easing: 'easeOutQuad'}),
        // duration: animDuration,
        loop: false
    });

    setTimeout(function() {
        btnBack.style.display = 'inline-block';
    }, animDuration);
}

btnBack.onclick = function() {
    btnBack.style.display='none';
    
    anime({
        targets: '.polymorph',
        points: [
            {
                value: '838.5,0.5 838,531 839,1080.5 1164,1080.5 1162,524 1163.5,0.5'
            },
        ],
        delay: anime.stagger(10, {easing: 'easeOutQuad'}),
        // duration: animDuration,
        loop: false
    });

    setTimeout(function() {
        btnStart.style.display = 'inline-block';
    }, animDuration);
}
