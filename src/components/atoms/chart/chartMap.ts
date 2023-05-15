export const chartMap = (data: { labels: string[], series: any[] }) => {

    const chartLabels = data.labels;
    const chartSeries = data.series;

    return { chartLabels, chartSeries }
}