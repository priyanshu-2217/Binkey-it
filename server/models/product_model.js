import moongoose from "moongoose";

const productSchema = new moongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      default: [],
    },
    category: [
      {
        type: moongoose.Schema.ObjectId,
        ref: "category",
      },
    ],
    subCategory: [
      {
        type: moongoose.Schema.ObjectId,
        ref: "subCategory",
      },
    ],
    unit: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      defaul: 0,
    },
    price: {
      type: Number,
      default: null,
    },
    discount: {
      type: Number,
      default: null,
    },
    description: {
      type: Number,
      default: null,
    },
    more_details: {
      type: Object,
      default: {},
    },
    public: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const ProductModel = moongoose.model("product", productSchema);
export default ProductModel;
