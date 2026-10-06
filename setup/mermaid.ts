import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  // Note: Slidev toggles dark mode via a `dark` class on <html>.
  const dark = document.documentElement.classList.contains('dark')
  return {
    theme: 'base',
    themeVariables: dark
      ? {
          fontFamily: 'Nunito Sans, sans-serif',
          primaryColor: '#2a2a2a',
          primaryTextColor: '#eee',
          primaryBorderColor: '#888',
          textColor: '#ddd',
          lineColor: '#aaa',
          clusterBkg: '#1c1c1c',
          clusterBorder: '#666',
          actorBkg: '#14283b',
          actorBorder: '#6aa9e0',
          actorTextColor: '#eee',
          signalColor: '#ddd',
          signalTextColor: '#ddd',
          noteBkgColor: '#2c1a3a',
          noteTextColor: '#eee',
          sequenceNumberColor: '#000',
        }
      : {
          fontFamily: 'Nunito Sans, sans-serif',
          primaryColor: '#f4f4f4',
          primaryBorderColor: '#999',
          lineColor: '#555',
          clusterBkg: '#fafafa',
          clusterBorder: '#bbb',
          actorBkg: '#e8f1fa',
          actorBorder: '#3572a5',
          signalColor: '#333',
          sequenceNumberColor: '#fff',
        },
  }
})
