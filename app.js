const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = 
   yargs.
option({ 
    a:{
        demand:true,
        alias:'address',
        describe:'Adress to fetch wheater for',
        String:true,
    }
    }).help()
    .alias('help','h')
    .argv;

geocode.geocodeAdress(argv.address,(errorMessage ,results)=>{
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address)
        weather.getwether(results.latitude,results.longitude,(errorMessage ,weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Its cureently ${weatherResults.temperature} , It feels like ${weatherResults.apparentTemperature}`);
            }
        });
        
    }
})

