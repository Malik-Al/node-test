const EventsEmitter = require('events')


// const emitter = new EventsEmitter()
// emitter.on('anything', data => {
//   console.log('ON: anything ', data);
// })
// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventsEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]');
    this.on(eventName, cb)
  }

  dispatch(eventName, cb){
    console.log('[Dispatch...]');
    this.emit(eventName, cb)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
  console.log('ON: aa', data);
})

dis.dispatch('aa', {aa: 22})
