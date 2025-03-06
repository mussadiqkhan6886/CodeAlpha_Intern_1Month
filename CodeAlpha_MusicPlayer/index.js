const range = document.querySelector('#range');
const playButton = document.querySelector('.fa-play');
let song = document.querySelector('#song');
const container = document.querySelectorAll('.thumbnail');
const playIcon = document.querySelectorAll('.playIcon');
const ImgDiv = document.querySelectorAll('.img-div');
let currentSongName = document.querySelector('#current-song-name');
let currentAuthor = document.querySelector('#current-song-singer');
let currentSongImage = document.querySelector('#current-song')
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

playIcon.forEach(icon => {
    icon.addEventListener('click', function(e){
        let id = e.target.parentElement.id;
        let tempImgCurrent = currentSongImage.src;
        let tempSongName = currentSongName.innerHTML;
        let thumbnailDiv = this.closest(".thumbnail");
        let imgElement = thumbnailDiv.querySelector(".music-img");
        let pElement = thumbnailDiv.querySelector(".music-name");

        if(id == 'dokhtarekhaana'){
            imgElement.src = tempImgCurrent;
            pElement.textContent = tempSongName;
            song.src = "songs/dokhtarekhaana.mp3";
            currentSongName.innerHTML = 'Dokhtar e khaana';
            currentAuthor.innerHTML = 'Sediq shabab';
            currentSongImage.src = "thumbnails/dokhtar ekhaana.webp";
    
        }else if(id == 'pyarbadha'){
            imgElement.src = tempImgCurrent;
            pElement.textContent = tempSongName;
            song.src = "songs/pyarbadha.mp3";
            currentSongName.innerHTML = 'Itna na Mujh sai Pyar badha';
            currentAuthor.innerHTML = 'Talat Mahmood';
            currentSongImage.src = "thumbnails/pyar badha.jpg";

        }
        range.value = 0;
        song.play();
        playButton.classList.replace('fa-play', 'fa-pause');
    })
})