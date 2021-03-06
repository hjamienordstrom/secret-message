//destructuring hash
const { hash } = window.location;
const message = atob(hash.replace('#',''))

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}
//pulls text from input and outputs into console
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide')

    const input = document.querySelector('#message-input');

    //encrypts into a string and prints out
    const encrypted = btoa(input.value);
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();

    //console.log(input.value)
})


  