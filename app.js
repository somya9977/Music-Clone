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
    },
    {
        name : "Andaax e Karam",
        img : "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Andaaz e Karam (Official Video) Madhur Sharma, Moin, ER, Roheb.mp3"
    },

    {
        name : "Indila - Love story",
        img : "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Indila - Love Story (Lyrics).mp3"
    },
    {
        name : "Ishqa ve",
        img : "https://plus.unsplash.com/premium_photo-1682125896993-12a1758b6cb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Ishqa Ve Lyrics - Zeeshan Ali  ishqa ve chhaddeya tu kakh da nai saanu.mp3"
    },
    {
        name : "Malang",
        img : "https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Malang Song  DHOOM_3  Aamir Khan, Katrina Kaif  Siddharth Mahadevan, Shilpa Rao, Pritam, Sameer.mp3"
    },
    {
        name : "Nede Nede",
        img : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "Nede Nede - Alisha Chinoy (Lyrics)  Dil kehnda main tenu bola  Yaraan da katchup.mp3"
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


window.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight")
    {
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
    }
    if(e.code == "ArrowLeft")
    {
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
    }
    if(e.code == "Space")
    {
        e.preventDefault();
        if (playSong.paused) {
            playSong.play();
            play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            playSong.pause();
            play.innerHTML = '<i class="fa-solid fa-play"></i>';
        }

    }
})