export const data = [
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "5" },
  { option: "6" },
  { option: "7" },
];

export function getResult(num) {
  switch (num) {
    case 0:
      return "Post a photo of you in underwear showing your face";
    case 1:
      return "Post a photo of your ass.";
    case 2:
      return "Send your password to the five above you.";
    case 3:
      return "Post full-body (with face) photo totally naked.";
    case 4:
      return "Post a dick pic and publish it also in your profile.";
    case 5:
      return "Free Dare. Do whatever you want, but be creative.";
    default:
      return "Post Your Password.";
  }
}

export const paramsList = [
  "name",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
];
