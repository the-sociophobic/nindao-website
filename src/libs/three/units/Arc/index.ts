import * as THREE from 'three'
import Unit from '../../Unit'
import modelLoader from '../../loaders/modelLoader'

import file from './arc.glb'


class Arc extends Unit {

  gtlf: any
  model: any
  loaded: boolean = false

  constructor(props: any) {
    super(props)

    this.loadModel()
  }

  loadModel = async () => {
    this.gtlf = await modelLoader(file)
    this.model = this.gtlf.scene
    this.props.scene.add(this.model)

    this.props.unitLoaded()
  }

  animate = (props: any) => {
    if (this.model) {
      if (!this.loaded) {
        this.loaded = true

        if (document.body.clientWidth > document.body.clientHeight) {
          this.model.scale.set(25.5, 25.5, 25.5)
          this.model.position.set(-30, 10, 0)
        } else {
          this.model.scale.set(18.5, 18.5, 18.5)
          this.model.position.set(-12, 0, 0)
        }
      }

      let alpha = props.frameNumber / props.maxFrameNumber

      // this.model.rotation.x = Math.PI + Math.sin(alpha * 5 * Math.PI)
      // this.model.rotation.y = Math.cos(alpha * 15 * Math.PI)
      this.model.rotation.x = alpha * 15 * Math.PI
    }
  }

  dispose = (props: any) => { }
}


export default Arc