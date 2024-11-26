import moongoose from "moongoose";

const cartProductSchema = new moongoose.Schema(
  {
    productId: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: moongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);
const CartProductModel = moongoose.model("cartProduct", cartProductSchema);

export default CartProductModel;
