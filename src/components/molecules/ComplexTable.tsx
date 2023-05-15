import { Button, Card, CardActions, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, styled } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const CardStyled = styled(Card)({
    minWidth: 275,
    maxWidth: 850,
})

type Column = {
    id?: string | number;
    label: string;
    minWidth?: string | number;
    align?: "center" | "left" | "right" | "inherit" | "justify";
}

interface TableProps {
    columns: Column[],
    rows: (React.ReactElement[] | any[])[],
    fullwidth?: boolean
}

const ComplexTable = (props: TableProps) => {

    const [page, setpage] = useState<number>(0);
    const [rowsPerPage, setrowsPerPage] = useState(10);

    const handleChangePage = (_: any, newPage: number) => {
        setpage(newPage);
    }

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setrowsPerPage(+event.target.value);
        setpage(0);
    }

    return (
        <CardStyled sx={{ maxWidth: props.fullwidth ? 'none' : 850, width: '100%' }}>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <TableContainer>
                <Table>
                    <TableHead sx={{
                        color: (theme) => theme.palette.primary.main
                    }}>
                        {
                            props.columns.map((element, index) => {
                                return (
                                    <TableCell
                                        sx={{
                                            minWidth: element.minWidth
                                        }}
                                        align={element.align}
                                        key={element.id || index}>
                                        {element.label}
                                    </TableCell>)
                            })
                        }
                    </TableHead>
                    <TableBody>
                        {
                            props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return <TableRow hover key={index}>
                                        {
                                            element.map((element, index) => {
                                                return (
                                                    <TableCell align={props.columns[index].align} key={index}>{element}</TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={props.rows.length}
                                page={page}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage} />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </CardStyled>
    )
}

export default ComplexTable
export type { Column }