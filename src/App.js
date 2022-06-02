import { Button, Typography, styled } from '@mui/material'
import { Add, Settings } from '@mui/icons-material'
function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:diabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  }))
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new Post
      </Button>
      <Button variant="outlined" diabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>

      <BlueButton>This is a blue button</BlueButton>
      <BlueButton>This is a blue button</BlueButton>
    </div>
  )
}

export default App
