import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
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
}))
