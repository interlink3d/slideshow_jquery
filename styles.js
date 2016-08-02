console.log("JS file linked")

$(document).ready(function () {
  console.log('I am ready');

  $('#lButton').click(function() {
    var activeImage = $('.active')
    var nextImage = activeImage.prev()

    activeImage.removeClass('active')
    nextImage.addClass('active')

  })

  $('#rButton').click(function() {
    var activeImage = $('.active')
    var nextImage = activeImage.next()

    activeImage.removeClass('active')
    nextImage.addClass('active')
    
  })
})
