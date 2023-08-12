let numberList = [1, 2, 3, 4, 5];
      function alternatingSums(a) {
        let oddSum = 0;
        let evenSum = 0;
        for (let i = 0; i < a.length; i++) {
          if (i % 2 == 0) { 
            evenSum += a[i];
          } else { 
            oddSum += a[i];
          }
        }
        return [evenSum, oddSum];
      }
      console.log(alternatingSums(numberList));