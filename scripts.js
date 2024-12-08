function copyIP() {
    const textArea = document.createElement('textarea');
    textArea.value = 'MineNight.us';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const popup = document.getElementById('copy-popup');
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}
