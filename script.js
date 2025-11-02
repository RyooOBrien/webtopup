let selectedDiamond = null;

// Pilih paket diamond
document.querySelectorAll('.topup-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.topup-card').forEach(c => c.style.border = 'none');
        card.style.border = '3px solid #00c9ff';
        selectedDiamond = {
            diamond: card.getAttribute('data-diamond'),
            price: card.getAttribute('data-price')
        };
    });
});

// Submit form
document.getElementById('topupForm').addEventListener('submit', function(e){
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;

    if(!selectedDiamond){
        alert('Silakan pilih paket Diamond terlebih dahulu!');
        return;
    }

    const confirmationText = `
        Top-Up berhasil!<br>
        User ID: ${userId} <br>
        Server ID: ${serverId} <br>
        Paket: ${selectedDiamond.diamond} Diamond <br>
        Harga: Rp${selectedDiamond.price}
    `;
    document.getElementById('confirmationText').innerHTML = confirmationText;
    document.getElementById('confirmation').classList.remove('hidden');
});
