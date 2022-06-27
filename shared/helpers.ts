export const convertNumberToAudioString = (number: number) => {
    let tempNumber;
    if (number >= 100) {
      tempNumber = number;
    } else if (number >= 10 && number < 100) {
      tempNumber = '0' + number;
    } else if (number < 10) {
      tempNumber = '00' + number;
    }
    return tempNumber;
}