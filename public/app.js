$('#login').on('click', function() {
        location.href = "slots.html";

              var showAlertMessage = document.getElementById("showMessage");
              var name = document.getElementById('addName').value.toUpperCase();
              var password = document.getElementById('addPassword').value;
              var contact = document.getElementById('addContact').value;
              if (name == null || name.length == 0 && password == null || password.length == 0 && contact == null || contact.length == 0) {
                      showAlertMessage.innerHTML = "These fields must not be empty"
                      return false;
              }
              var addDetails = {
                      Name: name,
                      Password: password,
                      Contact: contact
              }
              console.log(addDetails);
              $.ajax({
                      type: "POST",
                      url: 'https://tranquil-scrubland-72485.herokuapp.com/api/plumber',
                      dataType: "json",
                      data: addDetails,
                      success: function(data) {
                              console.log(data);
                        //       addDisplay.innerHTML = theTemplate({
                        //               stock: addDetails
                        //       })
                      },
                      error: function(error) {
                              // alert('failed while adding stock');
                      }
              })
              name = "";
              password = "";
              contact = "";
      })

      $(document).ready(function() {
       $('#mycheckbox').change(function() {
           $('#mycheckboxdiv').toggle();
       });
   });
      $(document).ready(function() {
       $('#mycheckbox2').change(function() {
           $('#mycheckboxdiv2').toggle();
       });
   });
