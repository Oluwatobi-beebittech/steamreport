let thrustleads = getAllThrustleads();

function getAllThrustleads() {
  return {
    kano: ["Alfred James", "Oluwatobi Akanji"],
    niger: ["Abubakar Iliya", "Dorcas James"],
  };
}

export function getThrustleadNames(location) {
  let locationThrustleads = thrustleads.hasOwnProperty(location)
    ? thrustleads[location]
    : ["All"];
  return locationThrustleads;
}

// export function getThrustLeadInstances(){
//     return null;
// }
