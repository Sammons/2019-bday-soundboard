var volumes = {
    china: 0.2,
    russia: 0.1
};

function play(id) {
    var el = document.getElementById(id);
    if (el) {
        el = el.cloneNode();
        if (volumes[id]) {
            el.volume = volumes[id];
        } else {
            el.volume = 1;
        }
        el.play();
        el.onended = () => {
            el.remove();
        };
    }
}