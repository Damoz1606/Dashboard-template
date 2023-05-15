import { Avatar, Card, Typography, styled } from '@mui/material'
import React from 'react'

const StatisticPaper = styled(Card)(() => ({
    backgroundColor: '#303030',
    width: '425px',
    height: '86px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    "& .stat-content": {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '@media (min-width: 600px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '297px',
        height: '225px',
        padding: '10px 12px',
        "& .stat-content": {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    '@media (min-width: 780px)': {
        width: '230px',
        height: '225px',
    }
}));

interface StatisticCardProps {
    text: string;
    icon?: React.ReactElement;
    title?: string;
    color?: string;
}

const StatisticCard = (props: StatisticCardProps) => {
    return (
        <StatisticPaper elevation={0} sx={{
            backgroundColor: props.color
        }}>
            {
                props.icon &&
                <Avatar sx={{ margin: '1rem', width: 50, height: 50, bgcolor: 'white' }}>
                    {props.icon}
                </Avatar>
            }
            <div className='stat-content'>
                <Typography color='white' variant='h3'>{props.text}</Typography>
                {
                    props.title &&
                    <Typography color='white' variant='body1'>{props.title}</Typography>
                }
            </div>
        </StatisticPaper>
    )
}

export default StatisticCard