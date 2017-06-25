class Student extends Person{
	private int[] testScores;
   Student(String firstName, String lastName, int id, int[] scores){
       super(firstName, lastName, id);
       this.testScores = scores;
   }
    
   char calculate(){
       int sum = 0;
       for(int _i=0; _i<this.testScores.length; _i++){
           sum = sum + this.testScores[_i];
       }
       int avg = sum/this.testScores.length;
       char grade = 'k';
       if(avg <= 100 && avg >=90){
           grade = 'O';
       } else if(avg < 90 && avg >=80){
           grade = 'E';
       } else if(avg < 80 && avg >=70){
           grade = 'A';
       } else if(avg < 70 && avg >=55){
           grade = 'P';
       } else if(avg < 55 && avg >=40){
           grade = 'D';
       } else if(avg < 40 ){
           grade = 'T';
       } 
       return grade;
   }
}