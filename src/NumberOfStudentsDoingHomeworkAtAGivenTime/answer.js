function busyStudent(startTime, endTime, queryTime) {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      count++;
    }
  }

  return count;
}
