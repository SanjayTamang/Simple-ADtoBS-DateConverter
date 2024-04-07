document.getElementById('convertButton').addEventListener('click', convertToNepali);

function convertToNepali() {
  const adDateInput = document.getElementById('adDate').value;
  const adDate = new Date(adDateInput);
  const adYear = adDate.getFullYear();
  const adMonth = adDate.getMonth() + 1;
  const adDay = adDate.getDate();

  // AD to BS conversion
  let nepaliYear = adYear + 56;
  let nepaliMonth = adMonth + 8;
  let nepaliDay = adDay + 16;

  if (nepaliDay > 32) {
    nepaliDay -= 32;
    nepaliMonth++;
  }

  if (nepaliMonth > 12) {
    nepaliMonth -= 12;
    nepaliYear++;
  }

  // Adjust for months with fewer days
  const monthLengths = [0, 30, 32, 31, 32, 31, 31, 30, 29, 30, 29, 30, 31];
  if (nepaliDay > monthLengths[nepaliMonth]) {
    nepaliDay -= monthLengths[nepaliMonth];
    nepaliMonth++;
    if (nepaliMonth > 12) {
      nepaliMonth -= 12;
      nepaliYear++;
    }
  }

  // Adjust for leap year if necessary
  const isLeapYear = (nepaliYear % 4 === 0 && nepaliYear % 100 !== 0) || nepaliYear % 400 === 0;
  if (nepaliMonth === 12 && nepaliDay > 30 && isLeapYear) {
    nepaliDay -= 30;
    nepaliMonth = 1;
    nepaliYear++;
  }

  // Display result
  document.getElementById('result').innerHTML = `<p>AD Date: ${adDate.toDateString()}</p>
                                                 <p>Nepali BS Date: ${nepaliYear}-${nepaliMonth}-${nepaliDay}</p>`;
}
