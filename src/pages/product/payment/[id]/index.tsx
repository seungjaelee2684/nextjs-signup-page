import { Coupon } from "@/components/payment/coupon-card"
import { LocationInfo } from "@/components/payment/location-info-card"
import { PaymentMethod } from "@/components/payment/payment-method-card"
import { PaymentPrice } from "@/components/payment/payment-price-card"
import { ProductInfo } from "@/components/payment/product-info-card"
import { UserInfo } from "@/components/payment/user-info-card"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { saleSchema } from "@/validation/sale"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import ProductDto from "../../../../../public/productDto.json";
import UserDto from "../../../../../public/userDto.json";
import { useState } from "react"

export default function PaymentPage() {

  const user = UserDto[UserDto?.length - 1];
  const productInfo = ProductDto[0]
  const [sales, setSales] = useState<number | undefined>(productInfo?.price);

  const form = useForm({
    defaultValues: {
      name: user?.name,
      location: user?.location,
      shippingMemo: "",
      point: 0,
      coupon: "",
      paymentPrice: sales,
      paymentMethod: "신용카드",
      accountNumber: ""
    }
  });

  return (
    <div className="
      absolute
      -translate-x-1/2
      top-10
      left-1/2
      w-[800px]">
      <Form {...form}>
        <form className="flex flex-col gap-5">
          <ProductInfo className="rounded-none" form={form} productInfo={productInfo} />
          <UserInfo className="rounded-none" form={form} productInfo={productInfo} />
          <LocationInfo className="rounded-none" form={form} productInfo={productInfo} />
          <Coupon className="rounded-none" sales={sales} setSales={setSales} form={form} productInfo={productInfo} />
          <div className="flex gap-2">
            <PaymentPrice className="rounded-none w-[50%]" sales={sales} setSales={setSales} form={form} productInfo={productInfo} />
            <PaymentMethod className="rounded-none w-[50%]" form={form}productInfo={productInfo}  />
          </div>
          <Button
            className="rounded-none
              mb-8
              h-[40px]
              bg-blue-600
              text-white
              hover:bg-blue-500
              font-bold">결제하기</Button>
        </form>
      </Form>
    </div>
  )
};