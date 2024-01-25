export class Series {
  constructor(series) {
    if (series = 0) {
      throw new Error("series cannot be empty")
    } else {
      this.series = series
    }
  }

  slices(sliceLength) {
    if (sliceLength = 0) {
      throw new Error("slice length cannot be zero")
    } else if (sliceLength < 0) {
      throw new Error("slice length cannot be negative")
    }else if (sliceLength > 0){
      let newArr = this.series
      newArr.split("")
      for (i = 0, i < newArr.length, i += 1) {
      if ((newArr[i] + sliceLength) <= newArr.length) {
        newArr.slice(newArr[i], (newArr[i] + sliceLength))
       } else {
        throw new Error("slice length cannot be greater than series length")
       }
       return newArr
     }
  }
  }
}
