var APP_CLIENT_ID = "0000000048189A6D";
var REDIRECT_URL = "http://localhost";       
WL.Event.subscribe("auth.login", onLogin);
            WL.init({
                client_id: APP_CLIENT_ID,
                redirect_uri: REDIRECT_URL,
                scope: ["wl.signin", "wl.basic","wl.calendars"],
                response_type: "token"
            });
            WL.ui({
                name: "signin",
                element: "signin"
            });
            function onLogin (session) {
                if (!session.error) {
                    WL.api({
                        path: "me",
                        method: "GET"
                    }).then(
                        function (response) {
                        	document.getElementById("info").innerHTML =
                        		"Welcome " + response.first_name + " " + response.last_name ;
                        },
                        function (responseFailed) {
                            document.getElementById("info").innerText =
                                "Error calling API: " + responseFailed.error.message;
                        }
                       
                        
                    );
                   
                }
                else {
                    document.getElementById("info").innerText =
                        "Error signing in: " + session.error_description;
                }
                
            }
            
         
