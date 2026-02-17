const expandIcon = document.getElementById("arrow")
const icon = expandIcon.querySelector("i")
const songList = document.getElementById("song-list")
const musicContainer = document.getElementById("music-container")
const song = document.getElementById("songs")
const songName = document.getElementById("songname")
const coverImage = document.getElementById("cover-image")
const play  = document.getElementById("play")
let playSong = new Audio(`./media/Alexander Rybak - Fairytale (Ambassador TikTok Remix) Shang Chi [Fight Scene].mp3`); 
let currentSongIndex = 0
const nextBtn = document.getElementById("forward")
const previousBtn = document.getElementById("backward")
const musicRange = document.getElementById("music-range")
const volumeBar = document.getElementById("volume-bar")
playSong.volume = 0.5




expandIcon.addEventListener("click", () => {
    
    if(icon.classList.contains("fa-arrow-left"))
    {
        icon.classList.remove("fa-arrow-left")
        icon.classList.add("fa-arrow-right")

        songList.style.width = "0"
        musicContainer.style.width = "100vw"
    }
    else
    {
        icon.classList.remove("fa-arrow-right")
        icon.classList.add("fa-arrow-left")
        songList.style.width = "20vw"
          musicContainer.style.width = "80vw"

    }
})

const songInfo = [
    {
        name : "Alexdender Rybak",
        img : "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Alexander Rybak - Fairytale (Ambassador TikTok Remix) Shang Chi [Fight Scene].mp3"
    },
    {
        name : "wake up",
        img :"https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "WAKE UP!.mp3"
    },
    {
        name : "Tere Liye",
        img : "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Tere Liye - Lyrical - Prince  Vivek Oberoi  Atif Aslam, Shreya Ghoshal  Hindi Hits Dance Songs.mp3"
    }

]

let foundSong = songInfo[0]

for(let item of songInfo)
{
    const songItem = document.createElement("p")
    songItem.innerText = item.name
    songItem.setAttribute("class", "songItem")
    song.append(songItem)
}

const allSong = document.querySelectorAll(".songItem")


for (let item of allSong) {
    item.addEventListener("click", (e) => {
        play.innerHTML ='<i class="fa-solid fa-pause"></i>'

        let clickedSong = e.target.innerText

         foundSong = songInfo.find((song, index) => {
            currentSongIndex = index
            return song.name == clickedSong
        });

         songName.innerText = foundSong.name
         coverImage.src = foundSong.img
        
         
       playSong.pause()
       
       playSong.src = `./media/${foundSong.trackName}`

       playSong.play()
       
    });
}

play.addEventListener("click", () => {
    
    if (playSong.paused) 
        {
        playSong.play();
        play.innerHTML ='<i class="fa-solid fa-pause"></i>'
        songName.innerText = foundSong.name
        coverImage.src = foundSong.img
    }
     else
         {
        playSong.pause();
       
         play.innerHTML = '<i class="fa-solid fa-play"></i>'
        }

})

nextBtn.addEventListener("click", () => {
    playSong.pause()
    currentSongIndex++
    if(currentSongIndex == songInfo.length)
    {
        currentSongIndex = 0
    }
    play.innerHTML ='<i class="fa-solid fa-pause"></i>'

    foundSong = songInfo[currentSongIndex]
    songName.innerText = foundSong.name
    coverImage.src = foundSong.img
    playSong.src = `./media/${foundSong.trackName}`
    playSong.play()

})

previousBtn.addEventListener("click", () => {
    playSong.pause()
    currentSongIndex--
     if(currentSongIndex < 0)
    {
        currentSongIndex = songInfo.length-1
    }

     play.innerHTML ='<i class="fa-solid fa-pause"></i>'
    foundSong = songInfo[currentSongIndex]
    songName.innerText = foundSong.name
    coverImage.src = foundSong.img
    playSong.src = `./media/${foundSong.trackName}`
    playSong.play()


})

playSong.addEventListener("timeupdate", () => {
    musicRange.value = (playSong.currentTime / playSong.duration) * 100
})

musicRange.addEventListener("input", () => {
    playSong.currentTime = (musicRange.value *playSong.duration)/100
})

volumeBar.addEventListener("input", () => {
    playSong.volume = volumeBar.value/100
})