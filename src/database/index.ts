import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:zSBvHt4VxIwBld9q@cluster0.8kzhfgh.mongodb.net"
  )
  .then(() => {
    console.log("mongoose collection done");
  })
  .catch(() => {
    console.log("mongoose collection faild");
  });
