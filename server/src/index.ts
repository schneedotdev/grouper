import express from 'express'
import http from 'http'
const app = express()
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server, {
	cors: {
		origin: '*',
	},
})

io.on('connection', (socket) => {
	console.log('Connected!', socket.id)
	socket.emit('connected')
})

server.listen(4000, () => {
	console.log('Server running on http://localhost:4000/')
})
