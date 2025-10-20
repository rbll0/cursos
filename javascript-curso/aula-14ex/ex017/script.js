function tabuada() {
    const num = Number(document.getElementById('txti').value);
    const tab = document.getElementById('tabuada');
    tab.innerHTML = '';

    for (let c=1; c<=10; c++) {
       const i = document.createElement('option');
       i.text = `${num} x ${c} = ${num*c}`
       tab.appendChild(i);
    }
}

