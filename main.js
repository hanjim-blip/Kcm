/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://vt.tokopedia.com/t/ZS9SUGbBuVJx2-g8XSz/", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://s.shopee.co.id/3Vk0N7YnVy");
}

function openFacebookPage() {
    window.open("https://vt.tokopedia.com/t/ZS9SUGVjH7cBo-iH7L8/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://s.shopee.co.id/9Uxxrb1ale", "_blank");
});




