"use client";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";
import { addItem } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import React, { useState } from "react";

const AddToCart = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addItem(formData));
    setFormData({ id: "", name: "", quantity: 1 });
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button>Add Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border border-black shadow-[5px_5px_0_black]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Item to Cart</DialogTitle>
            <DialogDescription>Fill the fields and submit</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-5">
            <Input
              type="text"
              name="id"
              placeholder="Item ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              min={1}
              required
            />
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-purple-500 cursor-pointer rounded hover:bg-purple-400 text-black shadow-[4px_4px_0_black] border border-black"
              type="submit"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCart;
