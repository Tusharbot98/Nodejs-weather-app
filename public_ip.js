const publicIp = require('public-ip');
var iplocation = require('iplocation');
const axios = require('axios');
 
publicIp.v4().then(ip => {
  iplocation(ip, (error, res)=>{

    if(error){console.log(error)}
    const forcastio_key ='01771f1d7751bc206e9ca27588020ded';
    var latitude =res.longitude;
    var longitude =res.longitude; 

    const weatherURL = `https://api.darksky.net/forecast/${forcastio_key}/${latitude},${longitude}`

    axios.get(weatherURL).then((response)=>{
      var temperature = response.data.currently.temperature;
      var apparentTemperature = response.data.currently.apparentTemperature;
      var visibility = response.data.currently.visibility;
      var windSpeed =  response.data.currently.windSpeed;
      console.log(`
            Your public IP is: ${res.ip}
            country_name:${res.country_name}
            city:${res.city}
            continent_code:${res.continent_code}
            temperature is ${temperature} 
            apparentTemperature is  ${apparentTemperature}
            Visiblitity in area is ${visibility} 
            windSpeed is ${windSpeed}
            timezone:${res.timezone}
            country_calling_code:${res.country_calling_code}
            currency:${res.currency}
             `);
    }).catch((e) => {
      if(e.code ==='ENOTFOUND'){
          console.log('unable to connect API server')
  
      }else{
          console.log(e.message)
      }
  })
  })
});
