const express =  require ('express');
const router = express.Router();
const Joi = require('joi');
let HeaderElements = {
    "HeaderElements": [


        {
            "HeaderElement": 1,
            "ARCommercialName":"Aswan Trips",
            "ENCommercialName":"Aswan Trips",
            "TechnicalName":"AswanSummerPackage",
            "SubElements":[]




        },


        {
            "HeaderElement": 2,
            "ARCommercialName":"Hiij Packages",
            "ENCommercialName":"Hiij Packages",
            "TechnicalName":"HiijPackage",
            "SubElements":[]

        },

        {
            "HeaderElement": 3,
            "ARCommercialName":"Summer Packages",
            "ENCommercialName":"Summer Packages",
            "TechnicalName":"SummerPackages",
            "SubElements":[

                {
                    "Element":1,
                    "ARCommercialName":"Sa7el",
                    "ENCommercialName":"Sa7el",
                    "TechnicalName":"Sa7elPackage"
                },

                {
                    "Element":2,
                    "ARCommercialName":"Dahab",
                    "ENCommercialName":"Dahab",
                    "TechnicalName":"DahabPackage"
                }


            ]

        }




    ]
};


router.get('/',(req, res) => {


    res.send(HeaderElements);

});




module.exports = router;








