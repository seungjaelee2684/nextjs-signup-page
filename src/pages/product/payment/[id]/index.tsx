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
import { useEffect, useRef, useState } from "react"
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
  ANONYMOUS
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import usePaymentWidget from "../../../../components/payment/toss-payment-hook";

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || '';
const customerKey = nanoid();

export default function PaymentPage() {

  const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey);
  // const { data: paymentWidget } = usePaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const agreementsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderAgreement"]
  > | null>(null);

  
  const user = UserDto[UserDto?.length - 1];
  const productInfo = ProductDto[0]
  const [sales, setSales] = useState<number>(productInfo?.price);

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

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    // ------  결제위젯 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: sales },
      { variantKey: "DEFAULT" }
    );

    paymentMethodsWidgetRef.current = paymentMethodsWidget;

    // ------  이용약관 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
    const agreementsWidget = paymentWidget.renderAgreement("#agreement", {
      variantKey: "AGREEMENT",
    });

    agreementsWidgetRef.current = agreementsWidget;
  }, [paymentWidget]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(sales);
  }, [sales]);

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
          <PaymentPrice className="rounded-none" sales={sales} setSales={setSales} form={form} productInfo={productInfo} />
          <div id="payment-widget" style={{ width: "100%" }} />
          <div id="agreement" style={{ width: "100%" }} />
          <Button
            className="rounded-none
              mb-8
              h-[40px]
              bg-blue-600
              text-white
              hover:bg-blue-500
              font-bold"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                  // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
                  await paymentWidget?.requestPayment({
                    orderId: nanoid(),
                    orderName: productInfo?.product,
                    customerName: UserDto[UserDto?.length - 1]?.name,
                    customerEmail: UserDto[UserDto?.length - 1]?.email,
                    customerMobilePhone: UserDto[UserDto?.length - 1]?.phone,
                    successUrl: `${window.location.origin}/success`,
                    failUrl: `${window.location.origin}/fail`,
                  });
                } catch (error) {
                  // 에러 처리하기
                  console.error(error);
                }
              }}>
                결제하기
              </Button>
        </form>
      </Form>
    </div>
  )
};