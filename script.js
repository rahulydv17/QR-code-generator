let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        imgBox.classList.add("loading");
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        qrImage.onload = () => {
            imgBox.classList.remove("loading");
            imgBox.classList.add("show-img");
        };
        qrImage.onerror = () => {
            imgBox.classList.remove("loading");
            alert("Failed to load QR code. Please try again.");
        };
        qrText.classList.remove('error');
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}