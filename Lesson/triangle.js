// const n = Number(prompt('n too oruulna uu'));

// let result = ""

// for (let i = 0; i < n; i++) {

//     for (let j = 0; j < n - i - 1; j++) {
//         result = result + " "
//     }

//     if (i === 0 || i === n - 1) {
//         for (let j = 0; j < i + 1; j++) {
//             result = result + "* ";
//         }

//     } else {
//         for (let j=0; j<i+1; j++){
//             if (j===0 || j===i){
//                 result = result + "* "
//             }
//             else{
//                 result=result + "  "
//             }
//         }

//     }
//     result = result + '\n'
// }


// console.log(result); 33

// ****************************
public static void main(String[] args) {
    // divided into three parts, upper, middle, lower

     For (int i = 0, k = 0; i < 14; i++) {// Print line

         // The upper part is divided into four parts

        if (i < 3) {

             For (int j = 0; j < 5 - 2 * i; j++) {// 1, hollow

                System.out.print(" ");

            }

            if (i == 2) {// 2、*

                for (int j = 0; j < 6 + 4 * i - 1; j++) {

                    System.out.print("*");

                }

                 For (int j = 0; j < 7 - 4 * i + 2; j++) {// 3, hollow

                    System.out.print(" ");

                }

                for (int j = 0; j < 6 + 4 * i - 1; j++) {// 4、*

                    System.out.print("*");

                }

            } else {

                for (int j = 0; j < 6 + 4 * i; j++) {// 2、*

                    System.out.print("*");

                }

                 For (int j = 0; j < 7 - 4 * i; j++) {// 3, hollow

                    System.out.print(" ");

                }

                for (int j = 0; j < 6 + 4 * i; j++) {// 4、*

                    System.out.print("*");

                }

            }

         } else if (i < 6) {// middle

            for (int j = 0; j < 29; j++) {

                System.out.print("*");

            }

         } else {// lower part 6

            if (i == 13) {

                 For (int j = 0; j < 2 * (i - 6); j++) {// print spaces

                    System.out.print(" ");

                }

                System.out.print("*");

            } else {

                 For (int j = 0; j < 2 * (i - 6) + 1; j++) {// print spaces

                    System.out.print(" ");

                }

                for (int j = 1; j < 28 - 4 * k; j++) {

                    System.out.print("*");

                }

                k++;

            }

        }

         System.out.println();// Wrap

    }
}