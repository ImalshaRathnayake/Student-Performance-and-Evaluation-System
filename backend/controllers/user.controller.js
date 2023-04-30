const test = (req,res)=> {
    res.render('index')
}

const test2 = (req,res)=>{
    const names = ['dasun', 'nimantha', 'perera']
    res.render('index',{names})
}

module.exports = {
    test,
    test2
}