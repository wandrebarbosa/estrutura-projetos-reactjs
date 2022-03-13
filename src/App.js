import React, { useState } from 'react'
import { Button, PhotosGallery } from './components'
import { sanitizeString } from './commons/utils/strings'

function App () {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/nature'
  ]

  sanitizeString('teste')

  return (
    <>
      <h1>Galeria de fotos</h1>
      <PhotosGallery
      photos={photos}
      />
      <Button>
        Botão
      </Button>
    </>
  )
}

export default App 

// o App.js é pagina inicial da plicação, normalemnte se coloca aqui: rotas, provides, fluxo de autenticação , validação.
// Não o componente diretamente, apenas as rotas.