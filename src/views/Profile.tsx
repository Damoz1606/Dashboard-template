import BlurHeader from "@/components/molecules/BlurHeader";
import SearchBar from "@/components/molecules/SearchBar";
import { bgGradient } from "@/utils/cssStyles";
import { AccountCircle, CloudDone, Code, MoreHoriz, Upload } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, LinearProgress, Stack, Switch, Typography, styled, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 28,
  borderRadius: 100,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 30,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(27px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary[500],
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    borderRadius: 100,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    transform: 'translateX(1px)',
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


const MiniCard = styled(Card)({
  width: '100%',
});

const SmallCard = styled(Card)({
  width: '100%',
  marginBottom: '20px',
  minHeight: 420,
  padding: '15px 15px !important',
  '@media (min-width:960px)': {
    maxWidth: 380,
  }
});

const MediumCard = styled(Card)({
  width: '100%',
  marginBottom: '20px',
  minHeight: 420,
  padding: '15px 15px !important',
  '@media (min-width:960px)': {
    maxWidth: 620,
  }
});

const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
});

const Profile = () => {

  const theme = useTheme();

  return (
    <>
      <BlurHeader
        title="Profile">
        <SearchBar />
      </BlurHeader>
      <Section>
        <SmallCard>
          <CardMedia
            sx={{
              borderRadius: 1,
              height: 140,
              width: '100%',
              position: 'relative',
              ...bgGradient({ direction: '217deg', startColor: theme.palette.primary[200], endColor: theme.palette.primary[500] })
            }}>
            <Avatar sx={{ backgroundColor: 'white', width: '80px', height: '80px', position: 'absolute', bottom: '-40px', left: 'calc(50% - 40px)' }}>
              <AccountCircle sx={{ width: '80px', height: '80px', color: theme.palette.primary[500] }} />
            </Avatar>
          </CardMedia>
          <CardContent sx={{ paddingTop: '40px' }}>
            <Typography textAlign='center' variant="h4" fontWeight={400}>Francisco Armas</Typography>
            <Typography textAlign='center' variant="body1">Desarrollador</Typography>

            <Box sx={{ mt: 7, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Box>
                <Typography textAlign='center' variant="body1" fontWeight={500}>Projects todo</Typography>
                <Typography textAlign='center' variant="h2" fontWeight={100}>150</Typography>
              </Box>
              <hr />
              <Box>
                <Typography textAlign='center' variant="body1" fontWeight={500}>Projects on process</Typography>
                <Typography textAlign='center' variant="h2" fontWeight={100}>10</Typography>
              </Box>
              <hr />
              <Box>
                <Typography textAlign='center' variant="body1" fontWeight={500}>Projects done</Typography>
                <Typography textAlign='center' variant="h2" fontWeight={100}>500</Typography>
              </Box>
            </Box>
          </CardContent>
        </SmallCard>
        <SmallCard
          sx={{
            '@media (min-width:960px)': {
              maxWidth: 260
            }
          }}>
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="text">
              <MoreHoriz />
            </Button>
          </CardActions>
          <CardContent>

            <Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 5
              }}>
                <Avatar sx={{
                  bgcolor: theme.palette.primary[200],
                  color: theme.palette.primary[400],
                  p: 4,
                  my: 2
                }}>
                  <CloudDone sx={{ width: 50, height: 50 }} />
                </Avatar>
                <Typography textAlign='center' variant="h5" fontWeight={400}>Your Storage</Typography>
                <Typography textAlign='center' variant="body1" fontWeight={100}>Supervise your drive space</Typography>
              </Box>
              <Box sx={{ mt: 10, display: 'flex', flexDirection: 'row' }}>
                <Typography width='50%' textAlign='left'>75GB</Typography>
                <Typography width='50%' textAlign='right'>100GB</Typography>
              </Box>
              <LinearProgress variant="determinate" value={75} />
            </Box>
          </CardContent>
        </SmallCard>
        <SmallCard>
          <CardActions>
            <Box sx={{
              width: '100%',
              height: 260,
              bgcolor: theme.palette.primary[200],
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px dashed',
              borderColor: theme.palette.primary[500]
            }}>
              <Upload sx={{ width: 50, height: 50, color: theme.palette.primary[500] }} />
              <Typography variant="body1" fontWeight={500} sx={{ color: theme.palette.primary[500] }}>Upload files</Typography>
              <Typography variant="body1" fontWeight={500} sx={{ color: grey[400] }}>PNG, JPG, and GIF files are allowed</Typography>
            </Box>
          </CardActions>
          <CardContent>
            <Typography variant="h4" fontWeight={500}>Complete your profile</Typography>
            <Typography variant="body1" fontWeight={100}>We have notice that you don't have a profile photo, to complete the profile please upload one</Typography>
            <Button sx={{ mt: 3 }} variant="contained">Pushblish now</Button>
          </CardContent>
        </SmallCard>
      </Section>
      <Section>
        <MediumCard>
          <CardContent>
            <Typography variant="h4" fontWeight={500}>All Projects</Typography>
            <Typography variant="body1" fontWeight={100}>Here you can find details about your projects.</Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MiniCard variant="outlined" sx={{ borderRadius: 0.5 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ padding: 2, bgcolor: theme.palette.primary[500] }}>
                    <Code sx={{ width: '50px', height: '50px' }} />
                  </Avatar>
                  <Typography variant="h5" fontWeight={500} marginTop={2}>Candy crush and Tetris, mechanics combination</Typography>
                  <Typography variant="caption">Project #1</Typography>
                </CardContent>
              </MiniCard>
              <MiniCard variant="outlined" sx={{ borderRadius: 0.5 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ padding: 2, bgcolor: theme.palette.primary[500] }}>
                    <Code sx={{ width: '50px', height: '50px' }} />
                  </Avatar>
                  <Typography variant="h5" fontWeight={500} marginTop={2}>Briefcase, a new approach</Typography>
                  <Typography variant="caption">Project #2</Typography>
                </CardContent>
              </MiniCard>
            </Box>
          </CardContent>
        </MediumCard>
        <MediumCard>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h4" fontWeight={500}>Configuration</Typography>
            <Button
              variant="text">
              <MoreHoriz />
            </Button>
          </CardActions>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch />
              <Typography variant="body1">Item update notifications</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Allow mobile version</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Allow not found screen</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Company notification</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch />
              <Typography variant="body1">Customize color palette</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Let users subscribe</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Use data tables and charts</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch />
              <Typography variant="body1">Notify when an item is deleted</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Let users subscribe</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch defaultChecked />
              <Typography variant="body1">Blur background on header bar</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" marginY={1}>
              <AntSwitch />
              <Typography variant="body1">Deactivate all options</Typography>
            </Stack>
          </CardContent>
        </MediumCard>
      </Section>
    </>
  )
}

export default Profile