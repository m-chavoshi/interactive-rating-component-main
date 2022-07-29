function thankYou () 
      {
        try{
          document.querySelector(".selectedRate").innerHTML = "You selected " + document.querySelector("input[name='rateRadio']:checked").value + " out of 5";
          document.querySelector(".ratingState").style.display = "none";
          document.querySelector(".thankYouState").style.display = "block";
        }
        catch
        {
          console.log("oops");
        }
      }