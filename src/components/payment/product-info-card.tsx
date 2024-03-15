import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";
import UserDto from "../../../public/userDto.json";

export function ProductInfo({
  className,
  ...props
}: any) {

  const { form, productInfo } = props;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>상품정보</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-8">
        <img className="w-[80px] h-[80px]" src={productInfo?.thumbnail} alt=""/>
        <div className="flex flex-col gap-3">
          <Label htmlFor="name">{productInfo?.product}</Label>
          <CardDescription>{productInfo?.information}</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
};