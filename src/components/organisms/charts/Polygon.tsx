import { ChartProps, ChartStyledBox, ReactApexChart, chartMap, useChart } from "@/components/atoms/chart"
import { Card, CardActions } from "@mui/material"

const Polygon = (props: ChartProps) => {
    const { colors, data, actions } = props;
    const { chartLabels, chartSeries } = chartMap(data);

    const polygonChartOptions = useChart({
        colors: colors,
        labels: chartLabels,
        fill: { opacity: 0.48 },
        stroke: { width: 2 },
        legend: {
            floating: true,
            horizontalAlign: 'center',
            position: "bottom"
        },
        xaxis: {
            categories: chartLabels,
            labels: {
                style: {
                    colors: colors
                }
            }
        }
    });

    return (
        <Card sx={{ minWidth: 275, maxWidth: 490 }}>
            {
                actions && <CardActions>
                    {actions}
                </CardActions>
            }
            <ChartStyledBox>
                <ReactApexChart
                    type="radar"
                    series={chartSeries}
                    options={polygonChartOptions}
                    height={340}
                />
            </ChartStyledBox>
        </Card>
    )
}

export default Polygon