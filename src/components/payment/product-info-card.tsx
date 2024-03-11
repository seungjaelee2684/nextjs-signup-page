import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";

export function ProductInfo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>상품 정보</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-8">
        <img className="w-[80px] h-[80px]" src=""/>
        <div className="flex flex-col gap-3">
          <Label htmlFor="name">Name</Label>
          <CardDescription>detail</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
};