import { Box, Typography, styled } from '@mui/material'

const TitleBadge = styled('span')({
    height: 12,
    width: 12,
    borderRadius: 100
});

interface ChartLabelProps {
    color: string,
    title: string,
    value?: string
}

const ChartLabel = (props: ChartLabelProps) => {
    return (
        <>
            <Box display='flex' flexDirection='column' gap={1}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                    <TitleBadge sx={{ backgroundColor: props.color }} />
                    <Typography variant='caption' fontSize={10}>{props.title}</Typography>
                </div>
                {props.value &&
                    <Typography align='center' variant='h4' fontWeight={500} sx={{ color: (theme) => theme.palette.primary.main }}>
                        {props.value}
                    </Typography>
                }
            </Box>
        </>
    )
}

export default ChartLabel