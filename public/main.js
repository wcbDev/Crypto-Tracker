var star = document.getElementsByClassName("bi-star");
var trash= document.getElementsByClassName("bi-trash")

Array.from(star).forEach(function(element) {
      element.addEventListener('click', function(){
        const string = this.parentNode.parentNode.childNodes[1].innerText.split(': ')
        const coin = string[0]
        const url = document.getElementById('url').getAttribute("href")
        const headline = string[1]
        console.log(coin)
        console.log(url)
        console.log(headline)
        fetch('star', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'coin': coin,
            'headline': headline,
            'url': url
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const string = this.parentNode.parentNode.childNodes[1].innerText.split(': ')
        const coin = string[0]
        const url = document.getElementById('url').getAttribute("href")
        const headline = string[1]
        console.log(coin)
        console.log(url)
        console.log(headline)
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'coin': coin,
            'headline': headline,
            'url': url
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
