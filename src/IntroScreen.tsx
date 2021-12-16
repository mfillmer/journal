import { Stack, Typography } from '@mui/material'
import React from 'react'
import { SectionQuickAdd } from './section/SectionQuickAdd'

export const IntroScreen = () => {
  return (
    <Stack alignItems='center'>
      <Typography variant='h1' textAlign='center' marginY={4}>
        Das ist dein Journal
      </Typography>
      <Typography paragraph textAlign='justify'>
        Schreibe auf was dich beschäftigt, damit dein Kopf frei bleibt.
      </Typography>
      <Typography paragraph textAlign='justify'>
        Ganz nach dem Prinzip <i>Teile und Herrsche</i> kannst du hier
        verschiedene Bereiche deines Lebens eintragen und dich jedem einzeln
        widmen.
      </Typography>{' '}
      <Typography paragraph textAlign='justify'>
        Für jeden Bereich kannst du das entsprechende Stresslevel bewerten und
        dir Notizen machen. Du kannst auch Bereiche weiter unterteilen, für noch
        mehr Fokus.
      </Typography>
      <Typography paragraph textAlign='justify' marginBottom={10}>
        Last but not least: Deine Daten sind sicher! Alles bleibt auf diesem
        Gerät.
      </Typography>
      <Typography variant='subtitle1' marginBottom={2}>
        Starte jetzt
      </Typography>
      <SectionQuickAdd />
    </Stack>
  )
}
