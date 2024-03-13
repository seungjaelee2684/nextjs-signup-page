import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ProductDto from "../../../public/productDto.json";

export default function DemoPage() {

    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Table className="w-[800px]">
                <TableCaption>판매 상품 목록</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[120px]">상품아이디</TableHead>
                        <TableHead>상품명</TableHead>
                        <TableHead>상세 정보</TableHead>
                        <TableHead className="text-right">가격</TableHead>
                        <TableHead className="w-[120px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ProductDto?.map((item: any) => {
                        return (
                            <TableRow key={item?.id}>
                                <TableCell className="font-medium">A{item?.id}</TableCell>
                                <TableCell>{item?.product}</TableCell>
                                <TableCell>{item?.information}</TableCell>
                                <TableCell className="text-right">{item?.price}원</TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="outline"
                                        onClick={() => window.location.href = `/product/payment/${item?.id}`}>
                                        구매
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
