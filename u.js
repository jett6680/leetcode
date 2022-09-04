

class U {
  constructor() {
    this.task = []
  }

  console(message) {
    this.task.push({
      wait: 0,
      type: 'sync',
      taskFun: () => console.log(message)
    })
    return this
  }

  setTimeout(wait) {
    this.task.push({
      wait,
      type: 'async',
      taskFun: () => { console.log('当前等待了 %d 秒', wait) }
    })
    return this
  }


}

const u = new U()

u.console('breakfast')
    .setTimeout(3000)
    .console('lunch')
    .setTimeout(3000)
    .console('dinner')



