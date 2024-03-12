import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "../ui/input";

export function PaymentMethod({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>결제 방법</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <RadioGroup defaultValue="신용카드" className="w-[400px] flex flex-wrap gap-6">
          <div className="flex items-center space-x-2 w-[100px]">
            <RadioGroupItem value="신용카드" id="r1" />
            <Label htmlFor="r1">신용카드</Label>
          </div>
          <div className="flex items-center space-x-2 w-[100px]">
            <RadioGroupItem value="가상계좌" id="r2" />
            <Label htmlFor="r2">가상계좌</Label>
          </div>
          <div className="flex items-center space-x-2 w-[100px]">
            <RadioGroupItem value="무통장 입금" id="r3" />
            <Label htmlFor="r3">무통장 입금</Label>
          </div>
          <div className="flex items-center space-x-2 w-[100px]">
            <RadioGroupItem value="핸드폰 결제" id="r4" />
            <Label htmlFor="r4">핸드폰 결제</Label>
          </div>
          <div className="flex items-center space-x-2 w-[100px]">
            <RadioGroupItem value="카카오페이" id="r5" />
            <Label htmlFor="r5">카카오페이</Label>
          </div>
        </RadioGroup>
        <Input placeholder="계좌번호를 입력해주세요."/>
      </CardContent>
    </Card>
  )
};