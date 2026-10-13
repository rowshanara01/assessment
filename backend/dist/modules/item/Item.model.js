"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const item_types_1 = require("./item.types");
const itemSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: Object.values(item_types_1.ItemCategory),
        lowercase: true,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
itemSchema.static("findByCategory", function (category) {
    return this.find({ category: category.toLowerCase() });
});
exports.Item = mongoose_1.default.model("Item", itemSchema);
