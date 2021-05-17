import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"


const socketBuilder = new SocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected!', user))
    .setOnUserDisconnected((user) => console.log('user disconnected!', user))
    .build()

const room = {
    id: Date.now(),
    topic: 'Teste'
}

const user = {
    img: '',
    username: 'Erick Wendel'
}
socket.emit(constants.events.JOIN_ROOM, { user, room })