// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    var name;
    var n;
    
    function sayHello (event) {
      this.textContent = "Said it!";
       name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    function sayhi(event){
       n =
       document.getElementById("name2").value;
       var m = "<h2>Hello " + n + "!</h2>";

      document
        .getElementById("content2")
        .innerHTML = m;

        if (name === n) {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title = "SAME STRINGS !!!";
        document
            .querySelector("h1")
            .textContent = title;
      }



    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

      document.querySelector("#two")
        .addEventListener("click",sayhi);

  }
);
