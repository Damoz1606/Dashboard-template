import { Column } from "@/components/molecules/ComplexTable";
import { Chip, LinearProgress, Typography } from "@mui/material";

export const columns: Column[] = [
    { label: 'Name', minWidth: 70 },
    { label: 'ISO', minWidth: 25 },
    { label: 'Status', minWidth: 50, align: 'center' },
    { label: 'Size', minWidth: 50, align: 'center' },    
    { label: 'Progress', minWidth: 75, align: 'center' },    

];

export const rows = [
    [<Typography>India</Typography>, <Typography>IN</Typography>, <Chip size="small" color="success" label="Approve" />, 3287263, <LinearProgress />],
    [<Typography>China</Typography>, <Typography>CN</Typography>, <Chip size="small" color="warning" label="Disable" />, 9596961, <LinearProgress />],
    [<Typography>Italy</Typography>, <Typography>IT</Typography>, <Chip size="small" color="error" label="Error" />, 301340, <LinearProgress />],
    [<Typography>United States</Typography>, <Typography>US</Typography>, <Chip size="small" color="success" label="Approve" />, 9833520, <LinearProgress />],
    [<Typography>Canada</Typography>, <Typography>CA</Typography>, <Chip size="small" color="success" label="Approve" />, 9984670, <LinearProgress />],
    [<Typography>Australia</Typography>, <Typography>AU</Typography>, <Chip size="small" color="success" label="Approve" />, 7692024, <LinearProgress />],
    [<Typography>Germany</Typography>, <Typography>DE</Typography>, <Chip size="small" color="success" label="Approve" />, 357578, <LinearProgress />],
    [<Typography>Ireland</Typography>, <Typography>IE</Typography>, <Chip size="small" color="warning" label="Disable" />, 70273, <LinearProgress />],
    [<Typography>Mexico</Typography>, <Typography>MX</Typography>, <Chip size="small" color="error" label="Error" />, 1972550, <LinearProgress />],
    [<Typography>Japan</Typography>, <Typography>JP</Typography>, <Chip size="small" color="error" label="Error" />, 377973, <LinearProgress />],
    [<Typography>France</Typography>, <Typography>FR</Typography>, <Chip size="small" color="success" label="Approve" />, 640679, <LinearProgress />],
    [<Typography>United Kingdom</Typography>, <Typography>GB</Typography>, <Chip size="small" color="success" label="Approve" />, 242495, <LinearProgress />],
    [<Typography>Russia</Typography>, <Typography>RU</Typography>, <Chip size="small" color="warning" label="Disable" />, 17098246, <LinearProgress />],
    [<Typography>Nigeria</Typography>, <Typography>NG</Typography>, <Chip size="small" color="warning" label="Disable" />, 923768, <LinearProgress />],
    [<Typography>Brazil</Typography>, <Typography>BR</Typography>, <Chip size="small" color="error" label="Error" />, 8515767, <LinearProgress />],
];