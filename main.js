window.addEventListener('mousemove', (details) => {
  let rectangle = document.querySelector('.rect')

  let valX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + rectangle.getBoundingClientRect().width / 2,
    window.innerWidth - (50 + rectangle.getBoundingClientRect().width / 2),
    details.clientX,
  )
  gsap.to('.rect', {
    left: valX + 'px',
    ease: Power3,
  })
})
