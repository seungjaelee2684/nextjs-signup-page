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
import UserDto from "../../../public/userDto.json";
import CouponDto from "../../../public/coupon.json";
import { useState } from "react";

export function Coupon({
  className,
  ...props
}: any) {

  const { form, productInfo, sales, setSales } = props;
  const couponData = form?.watch("coupon");
  const pointData = form?.watch("point");
  console.log(couponData, pointData);

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>쿠폰, 포인트 사용</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-8">
        <div className="flex flex-col gap-3 w-[100%]">
          <FormField
            control={form.control}
            name="coupon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>쿠폰</FormLabel>
                <div className="flex gap-8">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="선택해주세요."/>
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {UserDto[UserDto?.length - 1]?.coupon.map((item: any) => {
                          return (
                            <SelectItem value={CouponDto[item]?.title}>{CouponDto[item]?.title}</SelectItem>
                          )
                        })}
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
            name="point"
            render={({ field }) => (
              <FormItem>
                <FormLabel>포인트</FormLabel>
                <div className="flex gap-8">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <Button
                    className="bg-blue-400 text-white hover:bg-blue-300 w-[180px] rounded-none"
                    onClick={(e) => {
                      e.preventDefault();
                      form?.setValue("point", UserDto[UserDto?.length - 1]?.point)
                    }}>
                    전액사용
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <Label htmlFor="name">
            보유 포인트
            {' '}
            {UserDto[UserDto?.length - 1]?.point}
          </Label>
          <CardDescription>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (couponData === "") {
              setSales(productInfo?.price - pointData)
            } else {
              if (couponData === "5천원 할인쿠폰") {
                setSales(productInfo?.price - 5000 - pointData)
              } else {
                setSales(productInfo?.price - (productInfo?.price * 0.3) - pointData)
              };
            };
          }}
          className="bg-blue-400 text-white hover:bg-blue-300 w-[100px] rounded-none">
          적용
        </Button>
      </CardFooter>
    </Card>
  )
};