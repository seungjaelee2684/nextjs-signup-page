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
import { useForm } from "react-hook-form"

export default function PaymentPage() {

  const form = useForm({
    resolver: zodResolver(saleSchema),
    defaultValues: {

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
          <ProductInfo className="rounded-none" />
          <UserInfo className="rounded-none" />
          <LocationInfo className="rounded-none" />
          <Coupon className="rounded-none" />
          <div className="flex gap-2">
            <PaymentPrice className="rounded-none w-[50%]" />
            <PaymentMethod className="rounded-none w-[50%]" />
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