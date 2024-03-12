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
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell className="text-right">
                        <Button
                            variant="outline"
                            onClick={() => window.location.href = "/product/payment/1"}>
                            구매
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    )
}
