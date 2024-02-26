import { Document, Schema, model, models } from 'mongoose'

export interface TTransaction extends Document {
    createdAt: Date;
  stripeId: string;
  number: number;
  buyer: Schema.Types.ObjectId | string; // Assuming 'User' is a Mongoose model
  credits?: number;
  plan?: string;

}

const transactionSchema = new Schema({
    createdAt : {type : Date, default : Date.now},
    stripeId : {type: String, required : true, unique : true},
    number : {type: Number, required : true},
    buyer : {type : Schema.Types.ObjectId, ref : 'User'},
    credits : {type : Number}, 
    plan : {type : String}, 

})

const Transaction = models?.Transaction || model("Transaction", transactionSchema)
export default Transaction