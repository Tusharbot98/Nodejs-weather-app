# weather-app
weather app using google map geocode API and forcast.io API 
This project has three main runing file 
1> app.js :- which use normal callback function to return weather information in provided location
2> app-promise.js :- this file use promise in ES6 to return weather information in provided location
3> public_ip.js :- this file automatically take your public ip address of your PC and return information about weather and other things

# How to run

download repositry

install nodeJS and go to the Weather App directory and run : npm install (it will automatically fetch all dependency from package.json file)
example :-  t:\node app\atom\Weather App>npm install


you need to change GoogleGeocodeApiKey and forcasio_key in app.js , app-promise.js , and weather.js and gecode.js within respective folder
you will get GoogleGeocodeApiKey at https://console.developers.google.com  (register and get your google geocode api key)
you will get forcasio_key at https://darksky.net/dev  (register and go to account and get Your Secret Key from account)

# command

1> TO RUN app.js

node app -a your_location
Example:-
t:\node app\atom\Weather App>node app -a kalyan

2>TO RUN app-promise.j
node app-promise.js -a location
Example:-
t:\node app\atom\Weather App>node app-promise.js -a kalyan

3>TO RUN public_ip.js

node public_ip.js
Example:-
t:\node app\atom\Weather App>node public_ip.js

