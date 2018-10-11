const request = require('request')

var geocodeAddress = (address) => {
   
      return new Promise((resolve,reject)=>{
        var encodedAdress =encodeURIComponent(address);
        const GoogleApiKey ='AIzaSyC33haUUnVnC-0n83lXlGMJ1USLqY4ggJE';
    request({
        url:  `https://maps.google.com/maps/api/geocode/json?key=${GoogleApiKey}=&address=${encodedAdress}`,
        json :true
    },(error, response, body)=>{
        // error handling model
    
        if (error) {
            reject('unable to connect the google server')
        } else if(body.status==='ZERO_RESULTS'){
            reject('unable to find address')
        } else if(body.status==='OK'){
    
            resolve({
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng,
            });
        }
        
        
    });
});
};
geocodeAddress('421301').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
} , (errorMessage)=>{
    console.log(errorMessage);
});