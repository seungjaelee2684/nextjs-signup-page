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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";

export function LocationInfo({
  className,
  ...props
}: any) {

  const { form } = props;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>배송 정보</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">서울특별시 서대문구 성산로7길 89-8(연혁동) 주식회사 아임웹</Label>
            <Label>(03240)</Label>
          </div>
          <div className="flex flex-col gap-3">
            <Label>배송메모</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="선택해주세요." />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="문 앞에 놓아주세요.">문 앞에 놓아주세요.</SelectItem>
                <SelectItem value="배송 전에 문자주세요.">배송 전에 문자주세요.</SelectItem>
                <SelectItem value="경비실에 맡겨주세요.">경비실에 맡겨주세요.</SelectItem>
                <SelectItem value="부재 시 연락주세요.">부재 시 연락주세요.</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">변경</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>배송 정보 변경</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  주소
                </Label>
                <Input
                  id="name"
                  defaultValue="서울특별시 서대문구 성산로7길 89-8(연혁동) 주식회사 아임웹"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">변경완료</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
};