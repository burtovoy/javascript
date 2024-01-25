export class Series {
  constructor(series) {
    if (series >= 1) {
      this.series = Array.from(String(series), Number);
    } else {
      throw new Error('series cannot be empty');
    }
  }

  slices(sliceLength) {
    if (sliceLength > 0 && !(sliceLength > this.series.length)) {
      let sliced = [];
      const newArr = [];
      for (let i = 0; i < this.series.length; i += 1) {
        if ((i + sliceLength) <= this.series.length) {
          sliced = this.series.slice(i, (i + sliceLength));
          newArr.push(sliced);
        }
      }
      return newArr;
    } if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    }
  }
}
