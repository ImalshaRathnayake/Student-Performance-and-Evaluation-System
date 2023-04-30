const checkAuth = (req,res,next)=>{
    
    const isLoggedIn = false;

    if(isLoggedIn){
        next()
    }

    res.send('Unauthorized')
}

module.exports = {
    checkAuth
}