import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function PaymentPrice({
  className,
  ...props
}: any) {

  const { form, productInfo, sales, setSales } = props;
  const couponData = form?.watch("coupon");
  const pointData = form?.watch("point");

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>최종 결제 금액</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between">
          <CardDescription>상품가격</CardDescription>
          <Label>{sales}원</Label>
        </div>
        <div className="flex justify-between">
          <CardDescription>쿠폰 할인</CardDescription>
          <Label>-{(couponData === "")
            ? "0"
            : (couponData === "5천원 할인쿠폰")
              ? "5000"
              : `${productInfo?.price * 0.3}`
          }원</Label>
        </div>
        <div className="flex justify-between border-b">
          <CardDescription>포인트 사용</CardDescription>
          <Label>-{pointData}원</Label>
        </div>
        <div className="flex justify-between">
          <Label>총 결제금액</Label>
          <Label className="text-blue-500 font-bold">{sales}원</Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Label>700 포인트 적립예정</Label>
      </CardFooter>
    </Card>
  )
};