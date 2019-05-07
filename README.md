# Train Scheduler

If you're waiting for a train, this app can tell you when the next train will arrive and how many minutes away it is. 

Just type in the train name, your destination, the first train time--what time the first train of the day arrived--and the frequency--number of minutes between trains:

<img width="1274" alt="Screen Shot 2019-05-06 at 5 24 08 PM" src="https://user-images.githubusercontent.com/44036798/57263070-239aec80-7024-11e9-97ea-4d6cdcc6a255.png">

Sit back and watch the train schedule update!

<img width="1276" alt="Screen Shot 2019-05-06 at 5 28 59 PM" src="https://user-images.githubusercontent.com/44036798/57263142-7c6a8500-7024-11e9-830d-37f1274d50c5.png">

Technologies used to make this app are Firebase, HTML5, CSS, Moment.js, Bootstrap, JQuery and JavaScript.

Link to deployed project on GitHub Pages: https://acl447.github.io/train-schedule/

To make this app, I started by creating a Firebase project with a Realtime Database. After a user entered new input into the "Add Train" form on the web page, I used JQuery to grab the value of the input. 

I used Firebase methods to upload the value to the database and Moment.js to calculate when the next train will arrive and to display it in "hour hour: minute minute PM" format-- for example, 06:30 PM. 

Finally, I used JQuery to add the new data to the "Current Train Schedule" table on the web page. Please see the comments in my code here on GitHub for more information.


