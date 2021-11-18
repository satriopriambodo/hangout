const chatForm = document.getElementById('chat-form')
const socket = io()

socket.on('message',(message)=>{
    console.log(message);
    outputMessage(message)
})

chatForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let msg = e.target.elements.msg.value
    console.log(msg);
    socket.emit('chatMessage',msg)
    msg.value = ''
})

function outputMessage(message){
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="text">${message}</p>`
    document.querySelector('.chat-messages').appendChild(div)
}

