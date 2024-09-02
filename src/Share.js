$('button').on('click', function() {
  if (navigator.share !== undefined) {
    navigator.share({
      title: "It's really cool dude!",
      url  : "https://zahidefe.net"
    });
  }
})