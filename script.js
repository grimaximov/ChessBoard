function chessBoard() {
    let container = document.querySelector('.container');
    let place;
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;
            place = document.createElement('div');
            if (flag) place.className = 'place black';
            else place.className = 'place white';
            container.appendChild(place);
            flag = !flag;

        }
    }
}

chessBoard();