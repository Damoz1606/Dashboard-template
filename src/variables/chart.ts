export const pieChartData = {
    labels: ["Your files", "System", "Empty"],
    series: [5, 4, 2]
};

export const lineChartData = {
    labels: ['01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',],
    series: [{
        name: 'Team A',
        type: 'column',
        fill: 'solid',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
        name: 'Team B',
        type: 'area',
        fill: 'gradient',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
        name: 'Team C',
        type: 'line',
        fill: 'solid',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },]
}

export const polygonChartData = {
    labels: ["English", "History", "Physics", "Geography", "Chinese", "Math"],
    series: [
        { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
        { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
        { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] }
    ]
}

export const barChartData = {
    labels: ["Italy", "Japan", "China", "Canada", "France", "Germany", "South Korea", "Netherlands", "USA", "UK"],
    series: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}