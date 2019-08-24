import React from 'react'
import useTranslation from '../hooks/useTranslation'

const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div>
      <h1>René Magritte</h1>
      <img src="/static/img/magritte.jpg" alt="Rene Magritte" />
      <p>{t('bio')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>Read more on Wikipedia...</a>
    </div>
  )
}

export default Artist
