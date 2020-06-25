let context = null
let oscillator = null

const calculateFrequency = function (mouseXPosition) {
  const minFrequency = 20
  const maxFrequency = 2000
  return ((mouseXPosition / window.innerWidth) * maxFrequency) + minFrequency
};

document.addEventListener('mousedown', function (e) {
    const f = calculateFrequency(e.clientX)
    context = new AudioContext()
    oscillator = context.createOscillator()

//     oscillator.frequency.value = f
    oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 1)

    oscillator.connect(context.destination)
    oscillator.start(context.currentTime)
//     oscillator.stop(context.currentTime + 10)
})

document.addEventListener('mouseup', function () {
    setTimeout(() => {
        oscillator.stop(context.currentTime)
        oscillator.disconnect()
    }, 1000)
})