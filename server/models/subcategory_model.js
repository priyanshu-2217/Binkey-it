import moongoose from "moongoose";

const subcategorySchema = new moongoose.Schema(
  {
    name: { type: String, required: true },
    image: {
      type: String,
      default: "",
    },
    category: [
      {
        type: moongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SubCategoryModel = moongoose.model("subcategory", subcategorySchema);

export default SubCategoryModel;
