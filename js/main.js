
import API from "./api.js";
import UI from "./ui.js";
 const api=new API();
 const ui=new UI();


 document.addEventListener("DOMContentLoaded", async()=>{

  //loader ı render et
  ui.renderLoader();
   const songs= await api.getPopular();

    ui.renderCarts(songs);
 });

 //!formun gönderilmesini izle
 ui.form.addEventListener("submit", async(e)=>{

//sayfa yenilenmesini engelle
  e.preventDefault();

  //input içerisindeki değere eriş
  const query=e.target[0].value.trim();


  //eğer query değeri yoksa kullanıcıya uyarı ver

  if(!query){
    alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz!!");

    return; //fonksiyonu durudur
  }
  //loarder rener et
  ui.renderLoader();

  //arama sonucunda title güncelle

  ui.sectionTitle.textContent=`${query} için sonuçlar`


  //aratılan kelime ile api itek at

 const songs=await api.getSearchMusic(query);

 
 //api dan gelen veri ile arayüzü render e

 ui.renderCarts(songs);

  

 })

   
//!musicList kısmındaki tıklanmaları izle
ui.musicList.addEventListener("click",(e)=>{
  //play ikonuna tıklandı mı?

  if(e.target.className=="play"){
    //tıklanınlan elemanın kapsayıcısı olan card elmanına eriş
    const card=e.target.closest(".card");

    //card a atanan data özelliğiklerine erişme

    const songData=card.dataset;//dataset dememizin sebebi card elemanınlarındaki özelliklere bu metod ile erişimemiz

    //player kısmını rener et
    ui.renderPlayer(songData);
    

  }
  
})
 
 


