(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-75978547-1', 'auto');
	  ga('send', 'pageview');
     // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '603360305177-8sijq4vs3cpisl709pjmd600d90lv7jm.apps.googleusercontent.com';
      var SCOPES = ["https://www.googleapis.com/auth/calendar"];
      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }
      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }
      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
	console.log("Google authentication");
	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('send', {
	  hitType: 'event',
	  eventCategory: 'Google Login',
	  eventAction: 'Click'
	});
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }
      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
	console.log("Loading Google events..");
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }
      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEvents() {
	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('send', {
	  hitType: 'event',
	  eventCategory: 'ShowGoogleEvents',
	  eventAction: 'Click'
	});
		console.log("Show Google events");
        var request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 5,
          'orderBy': 'startTime'
        });
        request.execute(function(resp) {
          var events = resp.items;
         // appendPre('Upcoming events:');
	document.getElementById('out').innerHTML='<h3>Upcoming events</h3>';
	var tableBody=	'<h3>Upcoming events on your Google Calendar</h3><div class="CSSTableGenerator"><table border=1 cellspacing=2><tr><th>Event</th><th>Start Date and Time</th><th>End Date and Time</th><th>Creator</th></tr>';
          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
		console.log("Upcoming event: "+i);
              var event = events[i];
              var when = event.start.dateTime;
              var when1 = event.end.dateTime;
	      var creator=event.creator.email;
              if (!when) {
                when = event.start.date;
              }
             //appendPre(event.summary + ' (' + when + ')')
	tableBody+='<tr><td>'+event.summary + '</td><td> (' + when + ')</td>'+'<td>'+when1+'</td><td>'+creator+'</td></tr>';
            }
          } else {
            //appendPre('No upcoming events found.');
	tableBody+='No upcoming events';
          }
	tableBody+='</table></div><br><br>';
	document.getElementById('out').innerHTML=tableBody;	
        });
      }
      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }