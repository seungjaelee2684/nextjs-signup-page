import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserDto from "../../../public/userDto.json";
import { FormControl, FormDescription, FormLabel, FormField, FormItem, FormMessage } from "../ui/form";

export function UserInfo({
  className,
  ...props
}: any) {

  const { form } = props;
  const nameForm = form.getValues("name");
  const user = UserDto[UserDto?.length - 1];

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>주문자 정보</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col gap-3">
          <Label htmlFor="name">
            {nameForm} ({user?.nickname} 님)
          </Label>
          <CardDescription>{user?.phone}</CardDescription>
          <CardDescription>{user?.email}</CardDescription>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">수정</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>이름 수정</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">수정완료</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
};