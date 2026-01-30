import java.util.Scanner;
import java.util.Random;
     public class Loop{
     public static void main(String[]args){

     Scanner input = new Scanner(System.in);
     Random key = new Random();

     int counter = 0;
     int random = key.nextInt(0,1000);

     System.out.print("Enter any number between 0 and 1000 to guess the random nunber: ");
          int x = input.nextInt();

     while(x != random){

     System.out.println("Not correct ");
       x = input.nextInt();

     if(x > random){
          System.out.print("Too high, try again");}

     else{ 
          System.out.print("Too low,try again");}
counter++;
}

     System.out.printf("You guessed the number right, the random number is %d",random);

}
}
