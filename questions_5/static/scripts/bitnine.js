$(document).ready(function(){
  const signUpUrl = 'http://127.0.0.1:3000/api/v1/register_user';
  const loginUrl = 'http://127.0.0.1:3000/api/v1/login';
  let query_data = {};
  $('form#submit_signup').submit(function(event) {
    // handes user registration.
    event.preventDefault();
    let email = $('#user_email').val();
    let password = $('#user_password').val();
    let name = $('#user_name').val();
    query_data['name'] = name;
    query_data['email'] = email;
    query_data['password'] = password;

    $.ajax({
        type: 'POST',
        url: signUpUrl,
        contentType: 'application/json',
        data: JSON.stringify(query_data),
        success: function(response) {
          window.location = './login-form.html' 
        },

        // handle errors 400 and 500
        error: function(tokenErr, textStatus, errorThrown) {
            $('section.recommendations').empty();
            if (tokenErr.status === 400) {
            // handle error
            let message = `<h4>oops something went wrong, please try again some other time</h4>`;
            $('section.recommendations').append(message);
            } else if (tokenErr.status === 500) {
                // if the error returned is 500, then it is most likely that there is an error in the details submitted
                let message = `<h4>oops something went wrong, please check your submitted details</h4>
                                <p>note: server error</p>`;
                $('section.recommendations').append(message);
            }
        }
    });
});
$('form#submit_login').submit(function(event) {
  console.log('logging in...')
  // handles logging in
  event.preventDefault();
  let email = $('#user_email').val();
  let password = $('#user_password').val();
  query_data['email'] = email;
  query_data['password'] = password;

  $.ajax({
      type: 'POST',
      url: loginUrl,
      contentType: 'application/json',
      data: JSON.stringify(query_data),
      success: function(response) {
        console.log('success ooo')
        window.location = './bitnineclone.html' 
      },

      // handle errors 400 and 500
      error: function(tokenErr, textStatus, errorThrown) {
          $('section.recommendations').empty();
          if (tokenErr.status === 400) {
          // handle error
          let message = `<h4>oops something went wrong, please try again some other time</h4>`;
          $('section.recommendations').append(message);
          } else if (tokenErr.status === 500) {
              // if the error returned is 500, then it is most likely that there is an error in the details submitted
              let message = `<h4>oops something went wrong, please check your submitted details</h4>
                              <p>note: server error</p>`;
              $('section.recommendations').append(message);
          }
      }
  });
});
});