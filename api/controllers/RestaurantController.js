/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    // create
    create: async function(req,res){
        if(req.method == "GET") return res.view('restaurant/create');

        var restaurant = await Restaurant.create(req.body).fetch();

        return res.status(201).json({id: restaurant.id});
    },

    //update
    update: async function (req, res) {

        if (req.method == "GET") {
    
            var thatRestaurant = await Restaurant.findOne(req.params.id);
    
            if (!thatRestaurant) return res.notFound();
    
            return res.view('restaurant/update', { restaurant: thatRestaurant });
            
        } else {
        
            var updatedRestaurant = await Restaurant.updateOne(req.params.id).set(req.body);
    
            if (!updatedRestaurant) return res.notFound();
    
            return res.ok();
        
    }
},

    //admin
    admin: async function (req, res){
       
        var Restaurants = await Restaurant.find();
            
        if (!Restaurants) return res.notFound();
     
        return res.view('restaurant/admin', { restaurants: Restaurants });
    },


    //list
    list: async function (req, res) {
        
            var KowloonR = await Restaurant.find({
                where: {region : 'Kowloon'},
                sort: 'updatedAt', limit: 2
            });
            var HKIR = await Restaurant.find({
                where: {region : 'HKI'},
                sort: 'updatedAt', limit: 2
            });
            var NTR = await Restaurant.find({
                where: {region : 'NT'},
                sort: 'updatedAt', limit: 2
            });
            return res.view('restaurant/list', { restaurantsK: KowloonR, restaurantsH: HKIR, restaurantsN: NTR });    
        
    },

    

    // read
    read: async function (req, res) {

    var thatRestaurant = await Restaurant.findOne(req.params.id);

    if (!thatRestaurant) return res.notFound();

    return res.view('restaurant/read', { restaurant: thatRestaurant });
},
    // delete
    delete: async function (req, res) {

        var deletedRestaurant = await Restaurant.destroyOne(req.params.id);
    
        if (!deletedRestaurant) return res.notFound();
    
        return res.ok(); 
    },

    // search function
search: async function (req, res) {
    
    var whereClause = {};
    
    var region = req.query.region;
    var date = req.query.Expirydate;
    var PrasedMaxCoins = parseInt(req.query.maxcoins);
    var PrasedMinCoins = parseInt(req.query.mincoins);

    if(region != "region") whereClause.region = region;
    if(date !="not defined") whereClause.Expirydate <= date;
    if(!isNaN(PrasedMaxCoins)) whereClause.coins = {'<=' : PrasedMaxCoins};
    if(!isNaN(PrasedMinCoins)) whereClause.coins = {'>=' : PrasedMinCoins};
    
    var limit = Math.max(req.query.limit, 2) || 2;
    var offset = Math.max(req.query.offset, 0) || 0;

    var thoseRestaurants = await Restaurant.find({
    	where: whereClause,
        limit: limit,
        skip: offset
    });

    var count = await Restaurant.count();

    return res.view('restaurant/search', { Restaurants: thoseRestaurants, numOfRecords: count, Region: region, Expirydate: date, maxcoins: PrasedMaxCoins, mincoins: PrasedMinCoins });
    
   

},
};

