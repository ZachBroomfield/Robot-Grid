export default class Robot {
  constructor(position, angle) {
    this.position = position
    this.angle = angle
  }

  moveForward(amount) {
    this.move(amount)
  }

  moveBackward(amount) {
    this.move(-amount)
  }

  move(amount) {
    switch(this.angle) {
      case 0:
        this.position.y += amount
        break
      
      case 90:
        this.position.x += amount
        break

      case 180:
        this.position.y -= amount
        break
      
      case 270:
        this.position.x -= amount
        break
    }
  }

  rotateRight(amount) {
    let angleChange = 90 * amount

    this.calcNewAngle(angleChange)
  }

  rotateLeft(amount) {
    let angleChange = -90 * amount
    
    this.calcNewAngle(angleChange)
  }

  calcNewAngle(angleChange) {
    this.angle += angleChange
    this.angle %= 360

    if (this.angle < 0) {
      this.angle = 360 + this.angle
    }
  }

  generateReport() {
    return `Robot: \n\
      Position: ${this.position.x}, ${this.position.y}\n\
      Facing: ${this.convertAngle(this.angle)}`
  }

  convertAngle(rotation) {
    switch(rotation) {
      case 0:
        return 'North'
        break

      case 90:
        return 'East'
        break

      case 180:
        return 'South'
        break

      case 270:
        return 'West'
        break
    }
  }

  // toPoint() {
  //   return {
  //     x: this.position.x,
  //     y: this.position.y
  //   }
  // }

  setPoint(point) {
    this.position.x = point.x
    this.position.y = point.y
  }
}