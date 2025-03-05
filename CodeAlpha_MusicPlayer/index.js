const range = document.querySelector('#range');
const playButton = document.querySelector('.fa-play');
const song = document.querySelector('#song');
const container = document.querySelectorAll('.thumbnail');
const playIcon = document.querySelectorAll('.playIcon');
const ImgDiv = document.querySelectorAll('img-div');
range.value = 0;

playIcon.forEach(icon => {
    icon.addEventListener('mouseover', (e) => {
        e.target.classList.add('playIconAnimation')
    })
})
playIcon.forEach(icon => {
    icon.addEventListener('mouseout', (e) => {
        e.target.classList.remove('playIconAnimation')
    })
})

// Play or pause the song when the play button is clicked
playButton.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        playButton.classList.replace('fa-play', 'fa-pause'); // Change icon to pause
    } else {
        song.pause();
        playButton.classList.replace('fa-pause', 'fa-play'); // Change icon to play
    }
});

// Update the range input as the song plays
song.addEventListener('timeupdate', () => {
    range.value = (song.currentTime / song.duration) * 100;
});

// Allow seeking through the song by clicking on the range
range.addEventListener('input', () => {
    song.currentTime = (range.value / 100) * song.duration;
    song.play();
    playButton.classList.replace('fa-play', 'fa-pause');
});

container.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        console.log(e.target);
    })
})