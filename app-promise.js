const yargs = require('yargs')
const axios = require('axios')


const argv = 
   yargs.
option({ 
    a:{
        demand:true,
        alias:'address',
        describe:'Adress to fetch wheater for',
        String:true
    }
    }).help()
    .alias('help','h')
    .argv;

var encodedAdress =encodeURIComponent(argv.address)
const GoogleGeocodeApiKey ='AIzaSyC33haUUnVnC-0n83lXlGMJ1USLqY4ggJE';
var geocodeUrl  =`https://maps.google.com/maps/api/geocode/json?key=${GoogleGeocodeApiKey}=&address=${encodedAdress}`;

axios.get(geocodeUrl).then((response)=>{

    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('unable to find the address')
    }
    
    const forcasio_key ='01771f1d7751bc206e9ca27588020ded';
    var latitude =response.data.results[0].geometry.location.lat ;
    var longitude =response.data.results[0].geometry.location.lng ; 

    const weatherURL = `https://api.darksky.net/forecast/${forcasio_key}/${latitude},${longitude}`

    console.log(response.data.results[0].formatted_address)
    
    return axios.get(weatherURL);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var visibility = response.data.currently.visibility;
    var windSpeed =  response.data.currently.windSpeed;
    console.log(`Its cureently ${temperature} , It feels like ${apparentTemperature}, Visiblitity in area is ${visibility} , windSpeed is ${windSpeed}`);
}).catch((e) => {
    if(e.code ==='ENOTFOUND'){
        console.log('unable to connect API server')

    }else{
        console.log(e.message)
    }
})
