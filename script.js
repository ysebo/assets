
const qrCode = new QRCode(document.getElementById("qr-code"), {
    text: "https://example.com",
    width: 100,
    height: 100
});
const departureTime = new Date("2023-12-15T03:45:00Z");
const departureTimeFormatted = departureTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    weekday: 'short',
    month: 'short',
    day: 'numeric'
});
document.querySelector('.departure').textContent = departureTimeFormatted;