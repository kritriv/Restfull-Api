const Product = require("../models/product");

const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    
    // ======= Fixing Queries =======

    if (company){
        queryObject.company = company;
    }
    if(featured){
        queryObject.featured = featured;
    }

    if(name){
        queryObject.name = { $regex: name, $options: "i"};
    }

    // ======== Short , Select ======

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // ===== Pagination and limits ====

    let page = Number(req.query.page) || 1 ;
    let limit = Number(req.query.limit) || 5 ;

    let skip  = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit); 

    const Products = await apiData;
    res.status(200).json({ Products, nbHits: Products.length });
}


const getAllProductsTesting = async (req, res) => {
    const Products = await Product.find(req.query).sort("name");
    res.status(200).json({Products});
}

module.exports = { getAllProducts, getAllProductsTesting };