interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar({firstName, lastName, cohortNumber}: Scholar): string {
  return `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
}

export default introduceScholar;
