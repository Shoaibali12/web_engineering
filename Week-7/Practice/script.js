var accpara = document.querySelectorAll("div > div > p")
        //  console.log(accpara)
        for (const iterator of accpara) {
            iterator.onclick = function(){
                iterator.style.color = "blue"
            }
          }