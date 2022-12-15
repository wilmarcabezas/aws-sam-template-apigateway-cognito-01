exports.getData = async(event,context)=>{
    return{
        statusCode:200,
        body: JSON.stringify({data:'OK'}),
    }
}
exports.getDataV = async(event,context)=>{
    return{
        statusCode:200,
        body: JSON.stringify({data:'OK2'}),
    }
}

//8qvkhjbd4mtik4mm9dqacugp1  Api clientId
//https://wilmarux-example-01.auth.us-west-1.amazoncognito.com  Amazon Cognito Domain