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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast";

type registerInputType = z.infer<typeof formSchema>;

export default function SignUp() {

  const { toast } = useToast();

  const form = useForm<registerInputType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      nickname: "",
      id: "",
      email: "",
      select: "",
      password: "",
      confirmPassword: ""
    }
  });

  console.log("입력값 => ", form.watch("username"));

  const onSubmit = (data: registerInputType) => { // 비밀번호 확인 작업
    const {
      username,
      nickname,
      id,
      email,
      select,
      password,
      confirmPassword
    } = data;
    const formData = {
      username,
      nickname,
      id,
      email: email + select,
      password,
      confirmPassword
    }

    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify(formData));
    alert("회원가입이 완료되었습니다!");
    window.location.href = "/login";
  };

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className={cn("w-[450px]")}>
        <CardHeader>
          <CardTitle>계정 등록하기</CardTitle>
          <CardDescription>승재의 세상으로 빠져들기 위한 준비가 필요해요!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3">
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
                      <FormMessage />
                    </FormDescription>
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
                      <Input placeholder="스파르타" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
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
                        <Input placeholder="sparta242" {...field} />
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
                                <SelectValue placeholder="선택해주세요." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent position="popper">
                              <SelectItem value="@naver.com">naver.com</SelectItem>
                              <SelectItem value="@daum.net">daum.net</SelectItem>
                              <SelectItem value="@gmail.com">gmail.com</SelectItem>
                              <SelectItem value="@hanmail.net">hanmail.net</SelectItem>
                              <SelectItem value="@nate.com">nate.com</SelectItem>
                              <SelectItem value="@hotmail.com">hotmail.com</SelectItem>
                              <SelectItem value="@outlook.com">outlook.com</SelectItem>
                              <SelectItem value="@icloud.com">icloud.com</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>아이디</FormLabel>
                    <FormControl>
                      <Input placeholder="sparta1234" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input type={"password"} {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호 확인</FormLabel>
                    <FormControl>
                      <Input type={"password"} {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div className="flex justify-start gap-10">
                <Button className="bg-blue-400 text-white hover:bg-blue-300" type="submit">
                  계정 등록하기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
