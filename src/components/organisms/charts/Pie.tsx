import { Box, Card, CardActions, styled, useTheme } from '@mui/material'
import ChartLabel from '../../molecules/ChartLabel'
import { ChartProps, ChartStyledBox, ReactApexChart, chartMap, useChart } from '../../atoms/chart';

const ChartStyledContainer = styled(ChartStyledBox)(({ theme }) => ({
    transition: 'all .3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    "& .chart-labels": {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: '2rem'
    },
    '@media (min-width: 600px)': {
        flexDirection: 'row',
        ".chart-labels": {
            paddingLeft: '10px',
            borderLeft: '1px solid',
            borderColor: theme.palette.divider,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '2.5rem'
        }
    },
}));

const Pie = (props: ChartProps) => {

    const theme = useTheme();

    const { colors, data, actions } = props;

    const { chartLabels, chartSeries } = chartMap(data);

    const pieChartOptions = useChart({
        colors: colors,
        labels: chartLabels,
        stroke: { colors: [theme.palette.background.default] },
        legend: { show: false },
        dataLabels: {
            enabled: true,
        },
        tooltip: {
            fillSeriesColor: false
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: false
                    },
                },
            },
        }
    });

    return (
        <Card sx={{ minWidth: 275, maxWidth: 490 }}>
            {
                actions && <CardActions>
                    {actions}
                </CardActions>
            }

            <ChartStyledContainer sx={{ p: 3, pb: 1 }}>
                <ReactApexChart
                    type='pie'
                    options={pieChartOptions}
                    series={chartSeries}
                    height={280} />
                <Box className="chart-labels">
                    {
                        chartSeries.map((element, index) => {
                            return <ChartLabel
                                key={index}
                                color={pieChartOptions.colors?.at(index)}
                                title={pieChartOptions.labels?.at(index) || ""}
                                value={element}
                            />
                        })
                    }
                </Box>
            </ChartStyledContainer>
        </Card>
    )
}

export default Pie