"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CardProduct() {
  const products = [
    {
      title: "Air Jordan",
      img: "/shoes1.jpg",
      price: 1000,
      description: "lorem ipsum dolor sir amt",
    },
    {
      title: "Vantella",
      img: "/shoes2.jpg",
      price: 3000,
      description: "lorem ipsum dolor sir amt",
    },
    {
      title: "Homiped",
      img: "/shoes3.jpg",
      price: 5000,
      description: "lorem ipsum dolor sir amt",
    },
    {
      title: "Air Jordan",
      img: "/shoes1.jpg",
      price: 1000,
      description: "lorem ipsum dolor sir amt",
    },
    {
      title: "Vantella",
      img: "/shoes2.jpg",
      price: 3000,
      description: "lorem ipsum dolor sir amt",
    },
    {
      title: "Homiped",
      img: "/shoes3.jpg",
      price: 5000,
      description: "lorem ipsum dolor sir amt",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2  lg:grid-cols-3">
      {products.map((product, index) => (
        <Card
          key={index}
          className="max-w-[300px] max-h-[400px] hover:scale-110 flex flex-col items-center justify-center shadow-md shadow-slate-500"
        >
          <CardHeader>
            <CardTitle className="text-center">{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={product.img}
              alt={product.title}
              width={100}
              className="rounded"
              height={100}
            />
          </CardContent>
          <CardFooter>{`$${product.price}`}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
