
        var productcontainer = document.getElementById("products")
        var search = document.getElementById("search")
        var productlist = productcontainer.querySelectorAll("div")
        function searchbar(event) {
            enteredValue = event.target.value.toUpperCase()

            for ( var count = 0; count < productlist.length; count++) {


                if (productlist[count].textContent.toUpperCase() .indexOf(enteredValue) < 0) {
                    productlist[count].style.display = "none"
                }
                else {
                    productlist[count].style.display = "block"
                }
            }
        }