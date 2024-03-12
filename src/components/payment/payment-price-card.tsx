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
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>최종 결제 금액</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="w-[300px] flex justify-between">
          <CardDescription>상품가격</CardDescription>
          <Label>18,000원</Label>
        </div>
        <div className="w-[300px] flex justify-between">
          <CardDescription>쿠폰 할인</CardDescription>
          <Label>-1,000원</Label>
        </div>
        <div className="w-[300px] flex justify-between">
          <CardDescription>포인트 사용</CardDescription>
          <Label>-0원</Label>
        </div>
        <div className="w-[300px] flex justify-between border-b">
          <CardDescription>배송비</CardDescription>
          <Label>+2,500원</Label>
        </div>
        <div className="w-[300px] flex justify-between">
          <Label>총 결제금액</Label>
          <Label className="text-blue-500 font-bold">18,000원</Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Label>700 포인트 적립예정</Label>
      </CardFooter>
    </Card>
  )
};