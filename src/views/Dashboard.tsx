import { WindowsLogo, AppleLogo, LinuxLogo } from '@/components/icons/Icons'
import BlurHeader from '@/components/molecules/BlurHeader'
import ComplexTable from '@/components/molecules/ComplexTable'
import SearchBar from '@/components/molecules/SearchBar'
import StatisticCard from '@/components/molecules/StatisticCard'
import Bar from '@/components/organisms/charts/Bar'
import Line from '@/components/organisms/charts/Line'
import Pie from '@/components/organisms/charts/Pie'
import Polygon from '@/components/organisms/charts/Polygon'
import { pieChartData, lineChartData, polygonChartData, barChartData } from '@/variables/chart'
import { columns, rows } from '@/variables/tables'
import { AndroidOutlined, ArrowDropUp, CheckCircle } from '@mui/icons-material'
import { Box, Button, Typography, useTheme } from '@mui/material'

function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Dashboard = () => {
    const theme = useTheme();



    const colors = shuffleArray([
        theme.palette.red[400]?.toString(), theme.palette.red[500]?.toString(), theme.palette.red[600]?.toString(),
        theme.palette.blue[400]?.toString(), theme.palette.blue[500]?.toString(), theme.palette.blue[600]?.toString(),
        theme.palette.green[400]?.toString(), theme.palette.green[500]?.toString(), theme.palette.green[600]?.toString(),
    ]);

    return (
        <>
            <BlurHeader
                title="Dashboard">
                <SearchBar />
            </BlurHeader>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <StatisticCard
                    color={theme.palette.green[500]}
                    icon={<AndroidOutlined sx={{ color: theme.palette.green[500] }} />}
                    text='714K'
                    title='Android Users' />
                <StatisticCard
                    color={theme.palette.blue[500]}
                    icon={<WindowsLogo color={theme.palette.blue[500]} />}
                    text='714K'
                    title='Windows Users' />
                <StatisticCard
                    color={theme.palette.red[500]}
                    icon={<AppleLogo color={theme.palette.red[500]} />}
                    text='714K'
                    title='IOS Users' />
                <StatisticCard
                    color='#303030'
                    icon={<LinuxLogo color='#303030' />}
                    text='714K'
                    title='Linux Users' />
            </div>
            <Box sx={{
                padding: 0,
                width: '100wh',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                "&>*": {
                    width: '100%'
                }
            }}>
                <Pie
                    actions={<Button size="small" variant='outlined'>Learn More</Button>}
                    colors={colors}
                    data={pieChartData} />
                <Line
                    header={
                        <>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='h1'>$37.5K</Typography>
                                <span style={{ display: 'flex' }}>
                                    <Typography variant='caption' >Total Spent</Typography>
                                    <Typography
                                        display='flex'
                                        variant='caption'
                                        fontWeight='bold'
                                        alignItems='center'
                                        sx={{
                                            color: theme.palette.green[500]
                                        }}><ArrowDropUp /> +2.45%</Typography></span>
                                <br />
                                <Typography display='flex' variant='body1' fontWeight='bold' alignItems='center' sx={{
                                    color: theme.palette.green[500]
                                }}> <CheckCircle /> On track</Typography>
                            </Box>
                        </>
                    }
                    actions={<Button size="small">Learn More</Button>}
                    colors={colors}
                    data={lineChartData} />
                <Polygon
                    actions={<Button size="small">Learn More</Button>}
                    colors={colors}
                    data={polygonChartData} />
                <Bar
                    header={
                        <>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='caption'>Daily Traffic</Typography>
                                <span style={{ display: 'flex' }}><Typography variant='h2'>2.579</Typography> <Typography variant='caption' fontWeight='bold' color='primary'> Visitors</Typography></span>
                            </Box>
                        </>
                    }
                    actions={<Button size="small">Learn More</Button>}
                    colors={colors}
                    data={barChartData}
                />
            </Box>
            <Box sx={{
                paddingX: '1rem',
                width: '100wh',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                "&>*": {
                    width: '100%'
                }
            }}>
                <ComplexTable
                    fullwidth
                    columns={columns}
                    rows={rows} />
            </Box>
        </>
    )
}

export default Dashboard