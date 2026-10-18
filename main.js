function upDate(previewPic) {
    let previewDiv = document.getElementById("image-preview");
    previewDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    previewDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let previewDiv = document.getElementById("image-preview");
    previewDiv.style.backgroundImage = "url('')";
    previewDiv.innerHTML = "Hãy di chuột hoặc dùng phím Tab để chọn ảnh bên dưới.";
}

function initializeGallery() {
    console.log("Trang web đã tải xong! Hàm initializeGallery đã được kích hoạt.");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho ảnh thứ: " + (i + 1));
    }
}
