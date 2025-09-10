document.querySelector('button').addEventListener('click', calc);
window.addEventListener('keydown', (event) => {
    if (event.key === "Enter") calc();
});

function calc() {
    document.querySelector('.output-name').innerText = `Name: ${document.querySelector('.input-name').value}`;

    const birth = new Date(document.querySelector('.input-date').value); 

    document.querySelector('.output-age').innerText = `Age: ${ageCalc(birth)}`;
}

function ageCalc(birth, today = new Date()){
    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || month === 0 && today.getDate() < birth.getDate()) --age;   
    return age;
}
