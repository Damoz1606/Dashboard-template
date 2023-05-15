import { ChartProps, ChartStyledBox, ReactApexChart, chartMap, useChart } from "@/components/atoms/chart";
import { Card, CardActions, Grid } from "@mui/material";

const Bar = (props: ChartProps & { align?: 'vertical' | 'horizontal'; header?: React.ReactElement | React.ReactElement[]; }) => {
    const { colors, data, actions, align, header } = props;
    const { chartLabels, chartSeries } = chartMap(data);

    const barChartOptions = useChart({
        colors: colors,
        plotOptions: {
            bar: {
                horizontal: align === 'horizontal',
                barHeight: '28%',
                borderRadius: 3
            }
        },
        xaxis: {
            categories: chartLabels
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
                            type="bar"
                            options={barChartOptions}
                            series={[{ data: chartSeries }]}
                            height={365} />
                    </Grid>
                </Grid>
            </ChartStyledBox>
        </Card>
    )
}

export default Bar