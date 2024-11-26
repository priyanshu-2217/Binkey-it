import moongoose from "moongoose";

const categorySchema = new moongoose.Schema(
  {
    name: { type: String, required: true },
    image: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = moongoose.model("category", categorySchema);

export default CategoryModel;
