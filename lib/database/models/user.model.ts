import { Document, Schema, model, models } from 'mongoose'

// i asked to create a user schema and i have created this correct me where i am wrong

export interface UUser extends Document {
    firstName?: string;
    lastName?: string;
    clerkId: string;
    planId?: number;
    email: string;
    username: string;
    photo: string;
    creditBalance?: number;
  }

// clerkId, email, username, photo, firstName, lastName, planId, creditBalance
const userSchema = new Schema ({
    firstName : {type : String,  },
    lastName : {type : String,  },
    clerkId : {type : String, required : true, unique : true },
    planId : {type : Number, default : 1 },
    email : {type : String, required : true, unique : true },
    username : {type : String, required : true, unique : true },
    photo : {type : String, required : true, },
    creditBalance : {type : Number, default : 10, },
})


const User = models?.User || model("User", userSchema)
export default User