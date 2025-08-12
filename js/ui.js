class UI {

    //KURUCU METOD
    constructor() {
        //HTML DEN JS E ELEMAN ÇEK 
        this.musicList = document.querySelector("#music-list");
        this.form = document.querySelector("form");
        this.sectionTitle = document.querySelector("#section-title");
        this.player = document.querySelector(".player");


    }


    //Şarkı kartlarını render edecek fonk.
    renderCarts(songs) {

        //Arayüzü sıfırla. 
        // Bunu loaderı ortlamak için stillendirme yaptığımızda orataya ve karmaşık olarak gelmekteydi. bu yüzden arayüzü sıfırlayaral çözüm sağlanmış olur.

        this.musicList.innerHTML = "";

        //dışarıdan verilen şarkı verisinin içerisindeki her eleman için bir html oluştur
        songs.forEach((song) => {
            console.log(song);


            //bir tane cart elemanı oluştur
            const card = document.createElement("div");

            //oluşturulan card elemanına class ekle

            card.className = "card";

            //*card elemanına şarkıya ait resim, tatil,şarkıcı veya grup adı, mp3 bilgilerini atama
            card.dataset.title = song.title;
            card.dataset.subtitle = song.subtitle;
            card.dataset.image = song.images.coverarthq;
            card.dataset.mp3 = song.hub.actions[1].uri;

            //oluşturulan class a html ini belirle

            card.innerHTML = `
             <figure>
                            <img src="
                            ${song.images.coverarthq}"
                                alt="card-image" />
                            <div class="play">
                                <i class="bi bi-play-fill"></i>
                            </div>
                        </figure>

                        <div class="card-info">
                            <h4>${song.title}</h4>
                        <h4>${song.subtitle}</h4>
                        </div>`;

            this.musicList.appendChild(card);





        });


    }

    //Loader render eden fonksiyon
    renderLoader() {
        this.musicList.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`;
    }





    //player dinamik render eden fonksiyon
    renderPlayer(data) {


        //arayüzdeki player kısmını dinamikleştirme

        this.player.innerHTML = `
        
        <div class="info">
    <img
          src="${data.image}"
          alt="music-image"
          id="music-image"
        />
        <div>
            <h5 id="music-title">${data.title}</h5>
            <p id="artist-title">${data.subtitle}</p>
        </div>
</div>

        <audio
        src="${data.mp3}"
        id="music-sound"
        controls
        autoplay
      ></audio>

     
       <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
       </div> `;

        //audio elemanına eriş
        const audioElement = document.querySelector("#music-sound");


        //audio elemanlarının oynatılma ve durdurma olaylarını takip et
        audioElement.addEventListener("play", () => {

            //animasyon eklenecek elemana eriş
            const image = document.querySelector("#music-image");

            //erişilen erisime animasyon ekle
            image.classList.toggle("animate");

        });

        audioElement.addEventListener("pause", () => {
            // Animasyon eklenecek elemana eriş
            const image = document.querySelector("#music-image");

            // Erişilen resim'e animasyon ekle-çıkar
            image.classList.remove("animate");
        });
    }
}




export default UI;