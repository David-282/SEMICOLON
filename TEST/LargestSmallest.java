import java.util.Scanner;
     public class LargestSmallest{
        public static void main(String[]args){

     Scanner key = new Scanner(System.in);
     int sentinel = 0;

     System.out.print("Enter number, enter 0 to end the program: ");
     int number = key.nextInt();
     
     if (number == sentinel){

     System.out.print("No number Entered");}
          

     int largest = number;
     int smallest = number;
     
     while(number != sentinel){
     System.out.println("Enter a new number: ");
     number = key.nextInt();}

     if (number > largest){
          largest = number;
         }

     if (number < smallest)
          {smallest = number;}

     System.out.print("The smallest number is  "+ smallest);
     System.out.print("The largest number is  "+ largest);

}
}
