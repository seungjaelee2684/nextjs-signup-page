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
    defaultValues: {
      name: "홍길동",
      phone: "",
      location: "",
      shippingMemo: "",
      paymentPrice: 0,
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
          <ProductInfo className="rounded-none" form={form} />
          <UserInfo className="rounded-none" form={form} />
          <LocationInfo className="rounded-none" form={form} />
          <Coupon className="rounded-none" form={form} />
          <div className="flex gap-2">
            <PaymentPrice className="rounded-none w-[50%]" form={form} />
            <PaymentMethod className="rounded-none w-[50%]" form={form} />
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