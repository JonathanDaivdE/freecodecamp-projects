function palindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = clean.split("").reverse().join("");

  if (clean === reversed) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
  
}

palindrome("five|\_/|four");