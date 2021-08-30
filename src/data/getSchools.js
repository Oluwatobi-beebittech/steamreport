let schools = getAllSchools();

function getAllSchools() {
  return { niger: ["Al-Ali", "NHC"], kano: ["Prime", "Sweet Haven"] };
}

export function getSchools(location) {
  let locationSchools = schools.hasOwnProperty(location)
    ? schools[location]
    : ["Un"];
  return locationSchools;
}

// export function getSchoolInstances(location){
//     return null;
// }