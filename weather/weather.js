const request = require('request')
const forcasio_key ='01771f1d7751bc206e9ca27588020ded';
var getwether=(latitude , longitude , callback)=>{
    request({
        url:`https://api.darksky.net/forecast/${forcasio_key}/${latitude},${longitude}`,
        json:true,
    },(error, response, body)=>{
        if (!error && response.statusCode===200) {
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            })
            
        } else {
            callback('unable to connect forcast server')
        }
       
    });
}

module.exports={
    getwether
}