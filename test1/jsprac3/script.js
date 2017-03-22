// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.getElementById("exam")
      .addEventListener("click", function () {

        var n = document.getElementById("name")
        document
          .innerHTML=n;


        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName

                var q1 = res.q
             
              

              document.querySelector("#content")
                .innerHTML = q1;
            });
      });
  }
);
