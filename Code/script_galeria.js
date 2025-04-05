        function openPopup(src) {
            let popup = document.getElementById('popup');
            document.getElementById('popup-img').src = src;
            popup.style.display = 'flex';
            setTimeout(() => popup.style.opacity = '1', 10);
        }
        function closePopup() {
            let popup = document.getElementById('popup');
            popup.style.opacity = '0';
            setTimeout(() => popup.style.display = 'none', 300);
        }