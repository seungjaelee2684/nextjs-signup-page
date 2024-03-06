import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { formSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type registerInputType = z.infer<typeof formSchema>;

export default function SignUp() {

  const form = useForm<registerInputType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      nickname: "",
      email: "",
      select: ""
    }
  });

  console.log("입력값 => ", form.watch());

  const onSubmit = () => { // 비밀번호 확인 작업

  };

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} />
                    </FormControl>
                    <FormDescription>
                      이름을 입력해주세요.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>닉네임</FormLabel>
                    <FormControl>
                      <Input placeholder="길똥이" {...field} />
                    </FormControl>
                    <FormDescription>
                      나만의 닉네임을 입력해주세요.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <div className={"flex gap-2"}>
                      <FormControl>
                        <Input placeholder="honghong22" {...field} />
                      </FormControl>
                      <FormDescription>
                        @
                      </FormDescription>
                      <FormField
                        control={form.control}
                        name="select"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger id="framework">
                                <SelectValue placeholder="이메일을 선택해주세요." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent position="popper">
                              <SelectItem value="naver">naver.com</SelectItem>
                              <SelectItem value="daum">daum.net</SelectItem>
                              <SelectItem value="gmail">gmail.com</SelectItem>
                              <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <FormDescription>
                      @
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
