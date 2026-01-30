import java.util.Scanner;
     public class NokiaNew{

     public static void main(String[]args){
             Scanner input = new Scanner(System.in);   
  
       menu();        
   
     }

     public static void menu(){

    // main method open
         Scanner input = new Scanner(System.in);     
          System.out.print("""
         
         ........Menu......
          1. Phonebook
          2. Messages
          3. Chats
          4. Call Register
          5. Tones
          6. Settings
          7. Call divert
          8. Games
          9. Calculator
         10. Reminders
         11. Clock
         12. Profiles
         13. SIM services3

""");

          System.out.print("Select from the options avaliable: ");
          int menu = input.nextInt();

          switch (menu){ //main switch open
          case 1-> {// case 1 open
                  System.out.print("""
          ........Phonebook.........
               1. Search
               2. Service Nos. 
               3. Add name
               4. Erase
               5. Edit
               6. Assign tone
               7. Send b’card
               8. Options
               9. Speed dials
              10. Voice tags
               0. Back
           Select from the options avaliable:
 """);
                             
               int phonebook = input.nextInt();
               switch(phonebook){// swicth phonebook open
               case 8-> System.out.print("""
                     ........options........
                         1. Type of view
                         2. Memory status\n """);                             
                             } // phonebook swiicth closes 
                         }//case 1 closes
                case 0-> {menu();}
          case 2-> {//case  2 opens
                    System.out.print("""
           ........Messages..........
                         
           1. Write messages
           2. Inbox
           3. Outbox
           4. Picture messages
           5. Templates
           6. Smileysz
           7. Message settings
           8. Info service
           9. Voice mailbox number
          10.Service command editor
       Select from the options avaliable: """);
          

               int messages =input.nextInt();
               switch(messages){//switch messeges open
               case 7->{//case7 copen 
                          System.out.print("""
                ..........Messages settings........         
                           1. Set 12
                           2. Common 
             Select from the options avaliable:    """);


                            int messageSet = input.nextInt();
                            switch (messageSet){//messeageSet switch open
                              case 1->System.out.println("""
                                       1. Message centre number
                                       2. Messages sent as
                                       3. Message validity  """);
                              case 2-> System.out.print("""
                                           1. Delivery reports
                                           2. Reply via same centre
                                           3. Character support """);
                                 }//switch messageSet closes
                              }//case 7 closes
                         }// switch messages closes                    
                     }// case2 closes
          case 4->{//case  4 opens
                    System.out.print("""
               .......Call Register......
                    1. Missed calls
                    2. Received calls
                    3. Dialled numbers
                    4. Erase recent call lists
                    5. Show call duration 
                    6. Show call costs
                    7. Call cost settings
                    8. Prepaid credit
              Select from the options avaliable:    """);

                         int callRegister = input.nextInt();
                         switch (callRegister) {//callRegister swtitch opens
                         case 5 -> System.out.println("""
                         ........Show call duration.......
                              1. Last call duration
                              2. All calls’ duration
                              3. Received calls’ duration
                              4. Dialled calls’ d
                              5. Clear timers   """);

                         case 6-> System.out.println("""
                        ........Show call costs........
                              1. Last call cost
                              2. All calls’ cost
                              3. Clear counters  """);

                         case 7 ->System.out.println("""
                           ........ Call cost settings......
                              1. Call cost limit
                              2. Show costs in  """);

                              }//callRegister switch closes
                        }//case 4 closes 
                 
          case 5-> {//case 5 opens
                    System.out.println("""
                   ......Tones.....
                    1. Ringing tone
                    2. Ringing volume
                    3. Incoming call alert
                    4. Composer
                    5. Message alert tone
                    6. Keypad tones
                    7. Warning and game tones
                    8. Vibrating alert
                    9. Screen saver    """);
                     
                         }//case 5 closes
          case 6 ->{// case 6 opens
                System.out.print("""
               ........Settings.......
                    1. Call settings
                    2. Phone settings
                    3. Security settings
                    4. Restore factory settings
                  Select from the options avaliable:   """);


                           int settings = input.nextInt();
                        switch (settings){//switch settings open
                         case 1 ->{//case 1 open
                          System.out.println("""
                          .....Call Settings.....
                         1. Automatic redial
                         2. Speed dialling
                         3. Call waiting options
                         4. Own number sending
                         5. Phone line in use
                         6. Automatic answer  """);
                                   }//case 1 copen      
                         case 2 -> {//case 2 opens
                           System.out.println("""
                          .......Phone Settings....
                         1. Language
                         2. Cell info display
                         3. Welcome note
                         4. Network selection
                         5. Lights2
                         6. Confirm SIM service actions  """);
                              }//case 2 closes

                         case 3 -> {//case 3 opens
                           System.out.println("""
                            ......Security settings......
                          1. PIN code request
                          2. Call barring service
                          3. Fixed dialling
                          4. Closed user group
                          5. Phone security
                          6. Change access codes """);
                                      }//case 3 closes
                           }//switch settings close  
                      }//case 6 closes           


          case 11-> {//case 11 open
               System.out.println("""
               .......Clock.....
               1. Alarm clock
               2. Clock settings
               3. Date setting
               4. Stopwatch
               5. Countdown timer
               6. Auto update of date and time   """);
                             }//case 11 closes          



               }//main switch closes

     }// main method closes

}// class Nokia closes



