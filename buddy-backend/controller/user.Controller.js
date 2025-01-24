import User from "../model/user.Model.js";

const getUsers = async (req, res) => {
  try {
    const filters = { ...req.query }; 
    const page = Math.max(1, parseInt(filters.page) || 1); // Default to page 1
    const MAX_LIMIT = 100; // Cap limit to prevent overloading
    const limit = Math.min(MAX_LIMIT, Math.max(1, parseInt(filters.limit) || 10)); // Default to 10 docs per page

    // Remove pagination parameters from filters
    delete filters.page;
    delete filters.limit;

    // Build MongoDB query with filters
    const query = {};
    for (const key in filters) {
      if (filters[key]) {
        query[key] = { $regex: filters[key], $options: "i" };
      }
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Fetch data with filters, skip, and limit
    const users = await User.find(query).skip(skip).limit(limit);

    // Get the total count of documents matching the filters (for frontend)
    const total = await User.countDocuments(query);

    // Return results with pagination info
    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    
    const { email, password } = req.body; 

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    } 

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(isPasswordCorrect);
    

    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    } 

  } catch (error) {
    
  }
}

export default {
  getUsers,
  loginUser,
};
