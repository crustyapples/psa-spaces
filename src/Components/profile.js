import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

import Chat from "./chat"
import Card from '@mui/joy/Card';

import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


export default function Profile() {
  return (
    <Card variant="outlined" sx={{ minWidth: '320px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" fontWeight="bold" sx={{ alignSelf: 'flex-start' }}>
          Jonas Kakoroto
        </Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
      </IconButton>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Status: </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Online
          </Typography>
        </div>

      </Box>
      <Box>
      <div>
          <Typography level="body3">Rewards: </Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Level 1: 200/1000
          </Typography>
        </div>
    </Box>
    <Box><Chat></Chat></Box>
    
    </Card>
  );
}
