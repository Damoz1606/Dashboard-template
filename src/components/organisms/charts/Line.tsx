import { ChartProps, ChartStyledBox, ReactApexChart, chartMap, useChart } from "@/components/atoms/chart"
import { Card, CardActions, Grid } from "@mui/material";

const Line = (props: ChartProps & { header?: React.ReactElement | React.ReactElement[] }) => {

    const { colors, data, actions, header } = props;
    const { chartLabels, chartSeries } = chartMap(data);

    const lineChartOptions = useChart({
        colors: colors,
        labels: chartLabels,
        xaxis: {
            type: 'datetime'
        },
        fill: {
            type: chartSeries.map((i) => i.fill)
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '16%'
            }
        }
    });

    return (
        <Card sx={{ minWidth: 275, maxWidth: 600 }}>
            {
                actions && <CardActions>
                    {actions}
                </CardActions>
            }
            <ChartStyledBox>
                <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    {
                        header && <Grid item xs={12} md={3}>
                            {header}
                        </Grid>
                    }
                    <Grid item xs={12} md={header ? 9 : 12}>
                        <ReactApexChart
                            width='100%'
                            type="line"
                            options={lineChartOptions}
                            series={chartSeries}
                            height={345} />
                    </Grid>
                </Grid>
            </ChartStyledBox>
        </Card>
    )
}

export default Line