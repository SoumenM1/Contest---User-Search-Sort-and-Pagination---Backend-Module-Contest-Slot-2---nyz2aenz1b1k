//Before implementing queryController.js plz refer to userModel first

const User = require('../models/userModel');

const filterQueries = async (req, res) => {
  try {
    // const {name, limit,}= req.query
    //Write your code here for sorting,pagination and searching
    //1) For sorting sort salary from ascending to descending order
    //2) For Pagination set limit 5 as a default limit and default page is 1
    //3) Implement serching on 'first_name' and 'last_name'
    // Formulae to implementing pagination: (page - 1) * limit
    // For Sorting use    .sort('salary')
    // const searchQuery = {
    //   $or: [
    //     { first_name: { $regex: na, $options: 'i' } },
    //     { last_name: { $regex: search, $options: 'i' } },
    //   ],
    // };
 const users= await User.find().limit(10)

    res.json({data: users}).status(200)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { filterQueries };
