document.getElementById('topupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const phoneInput = document.getElementById('phone').value.trim();
    const amountInput = document.getElementById('amount').value;
  
    if (!phoneInput || !amountInput) {
      alert('Mohon lengkapi semua data.');
      return;
    }
  
    // Format nomor telepon: hapus 0 di awal dan tambahkan kode negara 62
    let formattedPhone = phoneInput;
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '62' + formattedPhone.slice(1);
    } else if (!formattedPhone.startsWith('62')) {
      formattedPhone = '62' + formattedPhone;
    }
  
    const message = `Halo, saya ingin melakukan top-up pulsa ${amountInput} ke nomor ${phoneInput}. Mohon diproses. Terima kasih!`;
  
    const whatsappNumber = '6285791728684'; // Ganti dengan nomor WhatsApp tujuan (tanpa +)
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, '_blank');
  });
  