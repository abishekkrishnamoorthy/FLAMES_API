const mongo=require("mongoose")

const Dataschema=mongo.Schema(
   {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    crushname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
)
const data=mongo.model('Data',Dataschema)
module.exports=data;