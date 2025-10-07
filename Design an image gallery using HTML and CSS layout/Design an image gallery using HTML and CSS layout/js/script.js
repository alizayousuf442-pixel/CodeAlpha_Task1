

const togglerbtn = document.getElementById("toggleBtn");

const sidebar = document.getElementById("MobileSidebar");

togglerbtn.addEventListener("click" , ()=>{
    sidebar.classList.toggle("active")

});


const image= document.querySelectorAll(".image-box img");
const  Lightboximage = document.getElementById("lightbox-img");
const Lightbox = document.getElementById("lightbox");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
let currentIndex = 0;

image.forEach(img => {

    img.addEventListener("click" , () =>{
      Lightbox.style.display = "flex";
      openLightbox(img.src)
    })
})
function openLightbox(src){
    
    Lightboximage.src = src;
}
function closeLightbox(){

      Lightbox.style.display = "none";

}
nextbtn.addEventListener("click" , ()=>{

    currentIndex = (currentIndex +1) % image.length;
    Lightboximage.src = image[currentIndex].src
})
prevbtn.addEventListener("click" , ()=>{

    currentIndex =(currentIndex - 1  + image.length) % image.length;
    Lightboximage.src = image[currentIndex].src;
})
document.addEventListener("keydown" , (e)=>{

    if(e.key === "Escape"){

        closeLightbox();
    }
        if(e.key === "ArrowRight"){
            nextbtn.click();
        }
        if(e.key === "ArrowLeft"){

            prevbtn.click();
        }
})