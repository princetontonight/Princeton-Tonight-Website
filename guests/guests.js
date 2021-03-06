var gridData = {
  columns: 3,
  textColor: "white",
  openNewWindow: false,
  data: []
}

// Populate grid data from guestData object
// Prepares the gridData object
for (var i = 0; i < guestData.length; i++) {
  var currentGuest = guestData[i];

  var gridItem = {
    title: currentGuest.name,
    subtitle: currentGuest.subtitle ? currentGuest.subtitle : '',
    description: currentGuest.description,
    image: currentGuest.image,
    link: "#",
    size: "1",
    category: {
      label: "Guests",
      color: "orange"
    }
  }

  gridData.data.push(gridItem); // Add to data
}
