import { Coupon } from "@/components/payment/coupon-card"
import { LocationInfo } from "@/components/payment/location-info-card"
import { PaymentMethod } from "@/components/payment/payment-method-card"
import { PaymentPrice } from "@/components/payment/payment-price-card"
import { ProductInfo } from "@/components/payment/product-info-card"
import { UserInfo } from "@/components/payment/user-info-card"

export default function PaymentPage() {
  return (
    <div className="
      absolute
      -translate-x-1/2
      top-10
      left-1/2
      w-[60%]
      flex
      flex-col
      gap-5">
      <ProductInfo />
      <UserInfo />
      <LocationInfo />
      <Coupon />
      <PaymentPrice />
      <PaymentMethod />
    </div>
  )
};