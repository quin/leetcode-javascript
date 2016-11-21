function meetingRooms(times) {
  sorted = times.sort(function(a,b) {
    a.start - b.start;
  })

  for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].end > sorted[i + 1].start) {
      return false;
    }
  }

  return true;
}
