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
      return "Make all your private photos public for 24h.";
    case 1:
      return "Wank on cam in the chatroom.";
    case 2:
      return "Send your password to the 5 above you.";
    case 3:
      return "Post full-body (with face) photo totally naked.";
    case 4:
      return "Change main profile photo to one fully naked one with face.";
    case 5:
      return "Make all your photos downloadable.";
    default:
      return "Post your password.";
  }
}
