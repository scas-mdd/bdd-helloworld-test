package bdd.helloworld;

public class Hello{
    private String greeting;
    
    public Hello(String greeting){
        this.greeting = greeting;
    }
    public String salute(){
        return greeting + " stefan";
    }
}