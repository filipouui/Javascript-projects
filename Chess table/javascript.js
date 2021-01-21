const tabla = document.getElementById('tabla');

for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    if(i % 2 != 0) {
        row.style.flexDirection = 'row-reverse';
    }

    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.classList.add('polje');
        row.appendChild(cell);
        if(j % 2 == 0) {
            cell.style.backgroundColor = 'white';
        }
    }

    tabla.appendChild(row);
}