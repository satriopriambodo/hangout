const session = require('express-session')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const router = require('./routers/index')
const PORT = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('views'))
app.use(session({
    secret: 'hangout',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
}))

app.use(session({
  secret: 'hangout',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true }
}))

// app.get('/chat',(req,res)=>{
//     res.render('chat')
// })

app.use('/',router)


io.on('connection',socket=>{
    console.log('connect io.on');
    socket.emit('message','<i>Welcome to Hangout\</i>')
    socket.broadcast.emit('message',`<i>User has join the chat</i>`)
    socket.on('disconnect',()=>{
        io.emit('message','<i>User has left the chat</i>')
    })
    socket.on('chatMessage',(msg)=>{
        io.emit('message', msg)
    })
})

server.listen(PORT,()=>{
    console.log(`this server run on port http://localhost:${PORT}`);
})
// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
//   }) // kalo pake app socket.io ga jalan




