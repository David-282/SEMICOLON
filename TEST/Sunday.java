import java.util.Scanner;
import java.util.Arrays;
     public class Sunday{
     public static void main(String[]args){

     int count = 0;
     int sum = 0;
      int largest =0;
    
     Scanner input = new Scanner(System.in);
     int[] number = new int[3];

     for(;count < number.length; count++){
     System.out.print("Enter a number: ");
     number[count] = input.nextInt();
     sum += number[count];
     
     if(number[count] >largest){
          largest= number[count];
     }     
     
    



     


          }
     System.out.println(Arrays.toString(number));
     System.out.println(sum);
     System.out.println(largest);
     
     



}

}
