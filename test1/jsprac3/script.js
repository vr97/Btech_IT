// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.getElementById("exam")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data\name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName

                var q1 = res.q
             
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
                .innerHTML = q1;
            });
      });
  }
);
