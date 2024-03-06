const numeros = [];
    const elm = document.querySelectorAll(".grid-item");
 
    for (let i = 0; i < 15; i++) {
        let numeroSort;
        do {
            numeroSort = Math.floor(Math.random() * 25) + 1;
        } while (numeros.includes(numeroSort));
       
        numeros.push(numeroSort);
        elm[i].textContent = numeroSort;
}
