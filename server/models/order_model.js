import moongoose from "moongoose";

const orderSchema = new moongoose.Schema(
  {
    userId: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderId: {
      type: String,
      required: [true, "Provide orderId"],
      unique: true,
    },
    productId: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    product_details: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: "",
    },
    payment_status: {
      type: String,
      default: "",
    },
    delivery_address: {
      type: moongoose.Schema.ObjectId,
      ref: "address",
    },
    subTotalAmt: {
      type: Number,
      default: 0,
    },
    invoice: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = moongoose.model("order", orderSchema);
export default OrderModel;
