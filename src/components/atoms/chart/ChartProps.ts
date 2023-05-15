export interface ChartProps {
    actions?: React.ReactElement | React.ReactElement[],
    colors: string[];
    data: { labels: string[], series: any[] }
}