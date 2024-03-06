import { z } from "zod";

export const formSchema : any = z.object({
    username: z
        .string()
        .min(1, {
            message: "이름을 입력해주세요."
        })
        .max(10, {
            message: "이름은 10자 이내여야 합니다."
        }),
    nickname: z
        .string()
        .min(2, {
            message: "닉네임은 2자 이상이어야 합니다."
        })
        .min(12, {
            message: "닉네임은 12자 이내여야 합니다."
        }),
    email: z
        .string()
        .regex(/^[a-zA-Z\d]{3,}$/, {
            message: "이메일을 알맞은 형식으로 입력해주세요."
        }),
    select: z
        .string()
        .min(1, {
            message: "이메일을 선택해주세요."
        })
});