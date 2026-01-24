// app.js dosyasının içeriği

// HTML'deki menü açma/kapama butonunu seçiyoruz (ID: menuToggle)
const menuToggle = document.getElementById('menuToggle');

// HTML'deki ana navigasyon elementini seçiyoruz (ID: mainNav)
const mainNav = document.getElementById('mainNav');

// Eğer bu elementler varsa devam et
if (menuToggle && mainNav) {
    // Menü butonuna tıklandığında çalışacak fonksiyon
    menuToggle.addEventListener('click', function() {
        // mainNav elementine "active" CSS sınıfını ekle veya çıkar.
        // CSS'teki .nav.active kuralı bu sayede menüyü görünür yapar.
        mainNav.classList.toggle('active');
        
        // Opsiyonel: Hamburger simgesini X işaretine çevirme (daha iyi kullanıcı deneyimi için)
        if (mainNav.classList.contains('active')) {
            menuToggle.innerHTML = '&times;'; // X simgesi
        } else {
            menuToggle.innerHTML = '&#9776;'; // Hamburger (üç çizgi) simgesi
        }
    });
}