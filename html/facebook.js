function getList(){
	console.log("See Facebook appointments");
	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('send', {
	  hitType: 'event',
	  eventCategory: 'SeeFacebookEvents',
	  eventAction: 'Click'
	});
FB.api(
    "/780001448800563",
    function (response) {
      if (response && !response.error) {
document.getElementById('eventOut').innerHTML='<br>Event name: '+JSON.stringify(response.name)+'<br>';
document.getElementById('eventOut').innerHTML+='Event location: '+JSON.stringify(response.description)+'<br>';
document.getElementById('eventOut').innerHTML+='Event time: '+JSON.stringify(response.start_time);
      }
    }
);
FB.api(
    "/573084389517665",
    function (response) {
      if (response && !response.error) {
document.getElementById('eventOut').innerHTML+='<br><br>Event name: '+JSON.stringify(response.name)+'<br>';
document.getElementById('eventOut').innerHTML+='Event location: '+JSON.stringify(response.description)+'<br>';
document.getElementById('eventOut').innerHTML+='Event time: '+JSON.stringify(response.start_time);
      }
    }
);
}
function getPermissions(){
FB.api(
    "/me/friends/",
    function (response) {
      if (response && !response.error) {
 alert(JSON.stringify(response));
document.getElementById('eventOut').innerHTML=JSON.stringify(response);
      }
    }
);
}
window.fbAsyncInit = function() {
	  FB.init({
	    appId      : '825565214222595',
	    cookie     : true,  // enable cookies to allow the server to access 
	                        // the session
	    xfbml      : true,  // parse social plugins on this page
	    version    : 'v2.5' // use graph api version 2.5
	  });
	  FB.getLoginStatus(function(response) {
	    statusChangeCallback(response);
	  });
	  };
	  // Load the SDK asynchronously
	  (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) return;
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	  // This is called with the results from from FB.getLoginStatus().
	  function statusChangeCallback(response) {
	    console.log('statusChangeCallback');
	    console.log(response);
	    // The response object is returned with a status field that lets the
	    // app know the current login status of the person.
	    // Full docs on the response object can be found in the documentation
	    // for FB.getLoginStatus().
	    if (response.status === 'connected') {
	      // Logged into your app and Facebook.
	      testAPI();
	    } else if (response.status === 'not_authorized') {
	      // The person is logged into Facebook, but not your app.
	      document.getElementById('status').innerHTML = 'Please log ' +
	        'into this app.';
	    } else {
	      // The person is not logged into Facebook, so we're not sure if
	      // they are logged into this app or not.
	      document.getElementById('status').innerHTML = '<br>Please log ' +
	        'into Facebook.';
	    }
	  }
	  // Login status check
	  function checkLoginState() {
			 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		  ga('send', {
		  hitType: 'event',
		  eventCategory: 'Facebook login',
		  eventAction: 'Click'
		});
			console.log("Facebook login");
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response);
	    });
	  }
	  // Here we run a very simple test of the Graph API after login is
	  // successful.  See statusChangeCallback() for when this call is made.
	  function testAPI() {
	    console.log('Welcome!  Fetching your information.... ');
	    FB.api('/me', function(response) {
	      console.log('Successful login for: ' + response.name);
	      document.getElementById('status').innerHTML =
	        'Thanks for logging in, ' + response.name + '!';
	    });
	  }