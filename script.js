function contatoWhatsApp(message) {
    const phoneNumber = '5575999221064'; // Substitua pelo número de contato de Bruno Moura
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
