import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Coupon({
  className,
  ...props
}: any) {

  const { form } = props;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>쿠폰, 포인트 사용</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-8">
        <div className="flex flex-col gap-3 w-[100%]">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>쿠폰</FormLabel>
                <div className="flex gap-8">
                  <FormControl>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="선택해주세요." />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="1000">30% 할인 쿠폰</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <Button
                    className="bg-blue-400 text-white hover:bg-blue-300 w-[180px] rounded-none">
                    쿠폰적용
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>포인트</FormLabel>
                <div className="flex gap-8">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <Button
                    className="bg-blue-400 text-white hover:bg-blue-300 w-[180px] rounded-none">
                    전액사용
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <Label htmlFor="name">보유 포인트 2,300</Label>
          <CardDescription>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
};