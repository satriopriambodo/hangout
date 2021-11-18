'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinations',[{
      location:"Ancol",
      price:"1000000",
      transport:"Mobil",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://korporat.ancol.com/fm/app/public/WhatsApp%20Image%202019-06-13%20at%2008.11.14.jpeg",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"Malioboro",
      price:"1500000",
      transport:"Mobil",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://gaetlokal.id/cni-content/uploads/modules/posts/20201106023526.png",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"Batu Malang",
      price:"2000000",
      transport:"Mobil",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://www.pegipegi.com/travel/wp-content/uploads/2017/03/batu-spectacular-night.jpg",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      location:"Puncak Lawang",
      price:"2500000",
      transport:"Pesawat",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://rentalmobilpadang.co.id/wp-content/uploads/2019/04/Jangan-Hanya-Fokus-Ke-Danau-Maninjau-Saja-Coba-Lirik-Juga-Puncak-Lawang-1.jpg",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      location:"Raja Ampat",
      price:"10000000",
      transport:"Pesawat",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-2020/revamp-image/raja-ampat/2.jpg",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      location:"Danau Toba",
      price:"2000000",
      transport:"Pesawat",
      lodging:"Hotel",
      meals: "Yes",
      photo:"https://s3-kemenparekraf.s3.ap-southeast-1.amazonaws.com/PARIWISATA_STORYNOMICS_TOURISM_shutterstock_385096972_franshendrik_Tambunan_d03d3440db.jpg",
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Destinations',null,{})
  }
};
