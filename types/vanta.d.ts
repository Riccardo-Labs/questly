declare module 'vanta/dist/vanta.net.min' {
  import * as THREE from 'three'
  interface VantaOptions {
    el: HTMLElement
    THREE: typeof THREE
    [key: string]: unknown
  }
  function NET(options: VantaOptions): { destroy: () => void }
  export default NET
}
