var OUTLOOK_APP_CLIENT_ID = "a70d0bd4-67a2-42fb-b6b4-0bc587d30934";
var OUTLOOK_REDIRECT_URL = "https://effcal.herokuapp.com/";
WL.Event.subscribe("auth.login", onLogin);
WL.Event.subscribe("auth.logout", function(){document.getElementById("infoLabel").innerText = "";});
var session = WL.getSession();
if (session) {
	document.getElementById("infoLabel").innerText ="You are already signed in!";
} else {
    WL.login({ scope: "wl.signin" });
}
            WL.init({
                client_id: OUTLOOK_APP_CLIENT_ID,
                redirect_uri: OUTLOOK_REDIRECT_URL,
                scope: ["wl.signin", "wl.basic","wl.calendars"],
                response_type: "token"
            });
            WL.ui({
                name: "signin",
                element: "signin"
            });
            function onLogin () {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('send', {
  hitType: 'event',
  eventCategory: 'Outlook Login',
  eventAction: 'Click'
});
            	var session = WL.getSession();
                if (!session.error) {
                   WL.api({
                      path: "me",
                      method: "GET"
                   }).then(
                      function (response) {
			    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			  ga('send', {
			  hitType: 'event',
			  eventCategory: 'SeeOutlookEvents',
			  eventAction: 'Click'
			});
                                document.getElementById("infoLabel").innerText =
                                    "Welcome, " +
                                    response.first_name + " " + 
                                    response.last_name + "!\n" + 
                                    "Your list of events are: \n" +
                                    "Test Event 1: start: 2016-04-02 06:00:00 end:2016-04-02 14:00:00 \n" +
                                    "Test Event 2: start: 2016-04-03 06:00:00 end:2016-04-03 14:00:00\n" +
                                    "Test Event 3: start: 2016-04-04 06:00:00 end:2016-04-04 14:00:00\n" ;
                               
                      },
                      function (responseFailed) {
                                document.getElementById("infoLabel").innerText =
                                    "Error calling API: " + responseFailed.error.message;
                      }
                  );
                }
                else {
                     document.getElementById("infoLabel").innerText =
                             "Error signing in: " + session.error_description;
                }
          }