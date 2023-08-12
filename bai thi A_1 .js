const names = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]
 const resulst =  names.filter(name => name.length % 5 ==0)
console.log (resulst)


function longest_name(arra) {
    let max_str = arra[0].length;
    for (let i = 1; i < arra.length; i++) {
      const maxi = arra[i].length;
      if (maxi > max_str) {
        max_str = maxi;
      }
    }

    return arra.filter((name) => name.length == max_str);
  }
  console.log(longest_name(names));

  