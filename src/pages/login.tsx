"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { formSchema } from "@/validation/auth"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

export default function LoginPage() {

    const { toast } = useToast();
    const [userInfoDto, setUserInfoDto] = useState<any>();

    useEffect(() => {
        const local = localStorage.getItem("userInfo");
        if (local) {
            const user = JSON.parse(local);
            setUserInfoDto(user);
            console.log(userInfoDto);
        };
    }, []);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            password: ""
        }
    });
    console.log("입력값 => ", form.watch());

    const onSubmitHandler = (data: z.infer<typeof formSchema>) => {
        const { id, password } = data;

        if ((userInfoDto?.id !== id) || (userInfoDto?.password !== password)) {
            toast({
                title: "로그인 정보가 올바르지 않습니다.",
                variant: "destructive",
                duration: 1000,
            })
            return;
        }
        toast({
            title: "로그인이 완료되었습니다.",
            variant: "default",
            duration: 1000,
        })
    };

    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>로그인</CardTitle>
                    <CardDescription>회원정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>아이디</FormLabel>
                                        <FormControl>
                                            <Input placeholder="아이디를 입력해주세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
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
                                            <Input type="password" placeholder="비밀번호를 입력해주세요." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end">
                                <Button type="submit" className="bg-blue-400 text-white hover:bg-blue-300">
                                    로그인하기
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
};