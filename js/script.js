void function (){
'use strict';

const createTable = function(){
    const table = document.createElement('table');
    let cellValue = 1;
    for(let i = 0; i < 10; i++){
        const row = document.createElement('tr');
        table.appendChild(row);
        for(let j = 0; j < 10; j++){
            const cell = document.createElement('td');
            cell.textContent = cellValue;
            row.appendChild(cell);
            cellValue++;
        }
    }
    document.body.prepend(table);
}
createTable();

}()