import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
class SpherePillards {
    constructor() {
        this.bind();
        this.modelLoader = new GLTFLoader();
    }

    init(scene) {
        this.scene = scene;
    }

    update() {

    }

    bind() {

    }
}

const _instance = new SpherePillards()
export default _instance