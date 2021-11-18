const{Destination,Profile,User,DestinationProfile} = require('../models/index')

class Controller{
    static destinationAll(req,res){
        Destination.findAll()
            .then((data)=>{
                res.render('destination',{data, login: req.session.loginUser})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static destinationLocation(req,res){
        let location = req.params.location
        Destination.findOne({
        where:{
                location :location 
            }
        })
            .then((data)=>{
                res.render('destinationLocation',{data, login: req.session.loginUser})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static buyForm(req,res){
        let destId = req.params.id
        let location = req.params.location

        Profile.findAll({include:User})
            .then((dataCust)=>{
                res.render('formBuy',{dataCust,location,destId, login: req.session.loginUser})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static buy(req,res){
        let ProfileId = req.session.loginUser.ProfileId
        let DestinationId = req.body.DestinationId
        let date = DestinationProfile.date(req.body.date)

        DestinationProfile.create({ProfileId,DestinationId,date:date})
            .then(()=>{
                res.redirect('/destinations')
            })
            .catch((err)=>{
                res.send(err)
            })

    }
}

module.exports = Controller