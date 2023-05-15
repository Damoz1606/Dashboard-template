import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const BlurContainer = styled(Box)({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '100%',
    height: '100%',
    transition: 'all .3s ease'
});

const Header = styled(BlurContainer)({
    top: '0.5rem',
    position: 'sticky',
    width: 'auto',
    minWidth: 'unset',
    height: 'auto',
    minHeight: '75px',
    maxHeight: '150px',
    marginRight: '1rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '15px',
    zIndex: 5,
    "& .header-container": {
        width: '100%'
    },
    '@media (min-width: 600px)': {
        "& .header-container": {
            width: 'auto'
        }
    },
});

interface BlurHeaderProps {
    breadcrumb?: {
        label: string,
        path: string,
    },
    title?: string,
    children: React.ReactElement | React.ReactElement[]
}


const BlurHeader = (props: BlurHeaderProps) => {
    return (
        <Header display='flex' alignItems='center'>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: 2,
                transition: 'all .3s ease',
            }}>
                <Box className="header-container" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    width: 'auto',
                }}>
                    {props.breadcrumb && <Typography align='left' variant='caption'>{`${props.breadcrumb.label}/${props.breadcrumb.path}`}</Typography>}
                    {props.title && <Typography align='left' variant='h2' fontWeight={700} color='primary'>{`${props.title}`}</Typography>}
                </Box>
                <Box className="header-container" sx={{
                    justifyContent: 'flex-end'
                }}>
                    {
                        React.Children.toArray(props.children)
                    }
                </Box>
            </Box>
        </Header>
    )
}

export default BlurHeader