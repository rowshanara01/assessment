"use client";
import { store } from "@/store/store";
import { IChildren } from "@/types/children.type";
import { Provider } from "react-redux";

const Providers = ({ children }: IChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;