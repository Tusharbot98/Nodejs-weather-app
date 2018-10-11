const request = require('request')

var geocodeAdress=(address,callback)=>{

    var encodedAdress =encodeURIComponent(address)
    const GoogleGeocodeApiKey ='AIzaSyC33haUUnVnC-0n83lXlGMJ1USLqY4ggJE';
request({
    url:  `https://maps.google.com/maps/api/geocode/json?key=${GoogleGeocodeApiKey}=&address=${encodedAdress}`,
    json :true
},(error, response, body)=>{
    // error handling model

    if (error) {
        callback('unable to connect the google server')
    } else if(body.status==='ZERO_RESULTS'){
        callback('unable to find address')
    } else if(body.status==='OK'){

        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng,
        })
    }
    
    
})

}

module.exports={
    geocodeAdress
}


// key  01771f1d7751bc206e9ca27588020ded