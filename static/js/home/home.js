// Aguarda a página carregar
window.onload = () => {
    const popup = document.getElementById("popup-start");
    const btnStart = document.getElementById("btn-start");
    const audio = document.getElementById("home-song");

    // Exibe o pop-up adicionando a classe 'active'
    popup.classList.add("active");

    audio.volume = 0.5;

    // Ao clicar no botão
    btnStart.onclick = () => {
        popup.classList.remove("active"); // Esconde o pop-up
        
        // Tenta tocar a música (o navegador permite após o clique)
        if (audio) {
            audio.muted = false;
            audio.play().catch(e => console.log("Erro ao tocar áudio:", e));
        }
    };
};
