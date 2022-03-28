const Engine = require('./engine')

module.exports = class CarBody {
    parts = []

    constructor () {
        this.engine = new Engine()
    }

    install () {
        this.parts.push(this.engine)
    }

    welding() {
        this.parts.forEach(part => {
            console.log(`Welding car part: ${part.constructor.name}`)
        }
        )}

}
