document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Disini bisa ditambahkan logika untuk mengirim data form ke server
    alert('Terima kasih telah mendaftar sebagai volunteer! Kami akan menghubungi Anda segera.');
    this.reset();
});