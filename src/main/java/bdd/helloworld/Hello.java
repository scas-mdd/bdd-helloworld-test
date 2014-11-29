package bdd.helloworld;
// Old project can be deleted
public class Hello{
    private String greeting;
    
    public Hello(String greeting){
        this.greeting = greeting;
    }
    public String salute(){
        return greeting + " stefan";
    }
}
