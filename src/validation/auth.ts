import { z } from "zod";

export const formSchema : any = z.object({
    username: z
        .string()
        .min(1, {
            message: "이름을 입력해주세요."
        })
        .max(10, {
            message: "이름은 10자리 이하여야 합니다."
        }),
    nickname: z
        .string()
        .min(2, {
            message: "닉네임은 2자리 이상이어야 합니다."
        })
        .min(12, {
            message: "닉네임은 12자리 이하여야 합니다."
        }),
    id: z
        .string()
        .regex(/^[a-z\d]{3,16}$/, {
            message: "아이디는 3~16자리, 영문(소문자)과 숫자조합이어야 합니다."
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
        }),
    password: z
        .string()
        .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
        .max(16, "비밀번호는 16자리 이하이어야 합니다.")
        .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            { message: "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다." }
        ),
    confirmPassword: z
        .string()
        .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
        .max(16, "비밀번호는 16자리 이하이어야 합니다.")
        .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
        ),
});