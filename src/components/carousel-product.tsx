import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselProduct() {
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
    <Carousel className="w-[220px] lg:w-full max-w-xs">
      <CarouselContent className="">
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card
                key={index}
                className="max-w-[300px] max-h-[400px] flex flex-col items-center justify-center"
              >
                <CardHeader>
                  <CardTitle className="text-center">{product.title}</CardTitle>
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
