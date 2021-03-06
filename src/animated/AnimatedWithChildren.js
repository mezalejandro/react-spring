import Animated from './Animated'

class AnimatedWithChildren extends Animated {
    constructor() {
        super()
        this._children = []
    }

    __addChild(child) {
        if (this._children.length === 0) this.__attach()
        this._children.push(child)
    }

    __removeChild(child) {
        const index = this._children.indexOf(child)
        if (index === -1) {
            console.warn("Trying to remove a child that doesn't exist")
            return
        }
        this._children.splice(index, 1)
        if (this._children.length === 0) this.__detach()
    }

    __getChildren() {
        return this._children
    }
}

export default AnimatedWithChildren
