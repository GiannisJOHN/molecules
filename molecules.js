export class Toggler {
    constructor(initBool) {
        this.current = initBool
    }
    set state(bool) {
        this.current = bool
    }
    get state() {
        return this.current
    }
}

export class ChunkedArray {
    constructor(array) {
        this.array = array
        this.nuArray = []
    }
    chunk() {
        for (let i = 0; i < this.array.length; i += 20) {
            var nu = this.array.slice(i, i + 20)
            this.nuArray.push(nu)
        }
    }
    get words() {
        return this.nuArray
    }

}

export class Window {
    toTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
}