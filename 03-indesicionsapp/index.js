const form = document.querySelector('#formQuestion'); 

const question = document.querySelector('#question');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    console.log(question.value);
    const decision = await getDecision();
    console.log(decision);
    document.querySelector('#h1').innerHTML = `<h1>${question.value}</h1>
    <img src='${decision.image}'>
    `
    
})

// const getDecision = async () => {
//     return await fetch('https://yesno.wtf/api').then(resp => resp.json())
// }

const getDecision = async () => {
// pedimos informacion al servidor
    const resp = await fetch('https://yesno.wtf/api');
// convertimos la informacion en un json
    const data = await resp.json();
    return data
}