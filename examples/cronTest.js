const cronMonitor = require('../src/cronMonitor')

console.log('start script')

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const main = async () => {
  console.log('one')
  await sleep(100)
  console.log('two')
  // throw new Error('Erroooor')
  await sleep(200)
  console.log('three')
  console.log('script ended')
}

main()

console.log('hmmmmm')
