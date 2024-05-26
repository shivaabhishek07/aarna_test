function shareProduct() {
    const productName = "Product 1";
    const productDescription = "Check out this amazing product from Aarna Embroidery Studio!";
    const productImage = document.getElementById('mainProductImage').src;
    const shareText = `${productName}\n${productDescription}\nPrice: 650rs\nLength: 1 meter\nColors Available: Red, Blue, Green`;

    // WhatsApp Share
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}%0A${encodeURIComponent(productImage)}`;
    window.open(whatsappUrl, '_blank');

    // Email Share
    const emailSubject = "Check out this product!";
    const emailBody = `${shareText}\n\n${productImage}`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(emailUrl, '_blank');
    
    // Instagram does not support direct URL sharing with content
    // You would typically need to use Instagram's API for this functionality or share manually through the app
}

document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading');
        const content = document.getElementById('content');

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, 1300);

    const thumbnails = document.querySelectorAll('.product-images img');
    const mainImage = document.getElementById('mainProductImage');
    let currentIndex = 0;

    function updateMainImage(index) {
        const activeThumbnail = document.querySelector('.product-images img.active');
        if (activeThumbnail) {
            activeThumbnail.classList.remove('active');
        }
        thumbnails[index].classList.add('active');
        mainImage.src = thumbnails[index].getAttribute('data-large');
    }

    function highlightThumbnail(index) {
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active');
        });
        thumbnails[index].classList.add('active');
    }

    function startSlideshow() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateMainImage(currentIndex);
        }, 3000);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            currentIndex = index;
            updateMainImage(index);
        });
    });

    updateMainImage(currentIndex);

    // Highlight the corresponding thumbnail when the main image changes
    mainImage.addEventListener('load', function () {
        const mainImageSrc = mainImage.src;
        thumbnails.forEach((thumbnail, index) => {
            if (thumbnail.getAttribute('data-large') === mainImageSrc) {
                highlightThumbnail(index);
            }
        });
    });
});