// Create a class which takes the parameters x and y, with the same properties
class Vec {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  // Method plus which returns the sum of the x and y value
  plus (vec) {
    return new Vec(this.x + vec.x, this.y + vec.y)
  }
  // Minus method which returns the difference between the x and y value
  minus (vec) {
    return new Vec(this.x - vec.x, this.y - vec.y)
  }
  // Get length which calculates the length of the vector, using the power and the root (seen in the hints)
  get length () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}
