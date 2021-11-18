const {Profile,User,Destination,DestinationProfile} = require('../models')
const {Op} = require('sequelize')
class Controller{
    static cartForm(req,res){
        Profile.findAll({include:User})
            .then((dataCust)=>{
                res.render('cart',{dataCust, login: req.session.loginUser})
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static cart(req,res){
        res.redirect(`/cart/${req.body.ProfileId}`)
    }
    static cartAll(req,res){
        let id = req.params.id
        Profile.findByPk(id,{
            include:Destination
        })
        .then((dataCust)=>{
            res.render('cartId',{dataCust, login: req.session.loginUser})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static cartDelete(req,res){
        let profileId = req.params.profileId
        let destId = req.params.destinationId
        DestinationProfile.destroy({
            where:{
                [Op.and]:[{ProfileId:profileId},{DestinationId:destId}]
            }
        })
        .then(()=>{
            res.redirect(`/cart/${profileId}`)
        })
    }
    static cartEdit(req,res){
        let profileId = req.params.profileId
        let junctId = req.params.dateId
        let destId = req.params.destinationId
        let dataCust
        Profile.findByPk(profileId,{
            include:Destination
        })
        .then((custData)=>{
            dataCust = custData
            return Destination.findAll()
        })
        .then((destData)=>{
            res.render('formEdit',{dataCust,destData,destId, junctId, login: req.session.loginUser})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static cartEditPost(req,res){
        console.log(req.params)
        let destId = req.params.destinationId
        let profileId = req.params.profileId
        let junctId = req.params.dateId
        let date = req.body.date
        let newDest = req.body.DestinationId

        DestinationProfile.update({DestinationId:newDest,date},{
            where:{
                id:junctId
            }
        })
        .then((data)=>{
            res.redirect(`/cart/${profileId}`)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = Controller