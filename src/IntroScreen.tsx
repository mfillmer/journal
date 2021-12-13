import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { SectionQuickAdd } from './SectionQuickAdd'

export const IntroScreen = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h1' textAlign='center' marginY={4}>
        Das ist dein Journal
      </Typography>
      <Typography variant='body1' textAlign='justify' marginBottom={10}>
        <Typography paragraph>
          <Typography paragraph>
            Schreibe auf was dich beschäftigt, damit dein Kopf frei bleibt.
          </Typography>
          <Typography paragraph>
            Ganz nach dem Prinzip <i>Teile und Herrsche</i> kannst du hier
            verschiedene Bereiche deines Lebens eintragen und dich jedem einzeln
            widmen.
          </Typography>{' '}
          <Typography paragraph>
            Für jeden Bereich kannst du das entsprechende Stresslevel bewerten
            und dir Notizen machen. Du kannst auch Bereiche weiter unterteilen,
            für noch mehr Fokus.
          </Typography>
        </Typography>
        <Typography paragraph>
          Last but not least: Deine Daten sind sicher! Alles bleibt auf diesem
          Gerät.
        </Typography>
      </Typography>
      <Typography variant='subtitle1' marginBottom={2}>
        Starte jetzt
      </Typography>
      <SectionQuickAdd />
    </Box>
  )
}
