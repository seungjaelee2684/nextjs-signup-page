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
import { useState } from "react";
import DaumPostcode from 'react-daum-postcode';

type registerInputType = z.infer<typeof formSchema>;

export default function SignUp() {

  const { toast } = useToast();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);

  const form = useForm<registerInputType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      nickname: "",
      id: "",
      email: "",
      select: "",
      location: "",
      detailLocation: "",
      password: "",
      confirmPassword: ""
    }
  });

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(current => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      form.setValue('location', data.address);
      setOpenPostcode(false);
    },
  }

  const onSubmit = async (data: registerInputType) => { // 비밀번호 확인 작업
    const {
      username,
      nickname,
      id,
      email,
      select,
      location,
      detailLocation,
      password,
      confirmPassword
    } = data;
    const formData = {
      username,
      nickname,
      id,
      email: email + select,
      location: location + " " + detailLocation,
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
    alert("회원가입이 완료되었습니다.");
    window.location.href = "/login";
  };

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className={cn("w-[450px]")}>
        <CardHeader>
          <CardTitle>계정 등록하기</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>아이디</FormLabel>
                    <FormControl>
                      <Input placeholder="next1234" {...field} />
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
                      <Input placeholder="개발노예" {...field} />
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
                        <Input placeholder="next242" {...field} />
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
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>주소</FormLabel>
                    <div className="flex gap-3">
                      <FormControl>
                        <Input placeholder="지역주소" {...field} />
                      </FormControl>
                      <Button variant="outline" onClick={handle.clickButton}>주소찾기</Button>
                    </div>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="detailLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="상세주소" {...field} />
                    </FormControl>
                    <FormDescription>
                      <FormMessage />
                    </FormDescription>
                  </FormItem>
                )}
              />
              {openPostcode &&
              <div className="absolute top-20 left-20">
                <DaumPostcode
                  onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                  defaultQuery='' // 팝업을 열때 기본적으로 입력되는 검색어 
                />
                </div>}
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
