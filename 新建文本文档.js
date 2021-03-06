/*
循环结构的基本组成部分，一般可以分成四分：

1.初始化语句：在循环开始最初执行，而且只做唯一 一次。
2.条件判断：如果成立，则循环继续：如果不成立，则循环退出。
3.循环体：重复要做事情内容，诺干行语句。
4.步进语句：每次循环之后都要进行的扫尾工作，每次循环结束之后都要执行一次。
*/
public class luo{
    public static void main(String[] args){
        for(int i = 1; i <= 100; i++){
              System.out.println("0000");
        }
           System.out.println("程序停止")；
   }
}


/*
while循环有一个标准格式，还有一个扩展格式。

标准格式：
while（条件判断）{
  循环体
}

扩展格式：
while（条件判断）{
    循环体；
    步进语句；
}
*/
public class luo{
    public static void main(String[] args){
       for(int i = 1; i<=10; i++){
          System.out.println("00000")
}
         System.out.println("----------------");
         int i = 1;//1.初始化语句
         while (i <= 10){//2.条件判断
               System.out.println("00000" +i);//3.循环体
               i++;
         }
     }
}

/*
do-while循环的标准格式；

do {
   循环体
}while (条件判断)

扩展格式：

初始化语句
do {
  循环体
  步进语句
}while (条件判断)
*/
public class luo{
    public static void main(String[] args){
       for(int i = 1; i<=10; i++){
          System.out.println("00000")
}
         System.out.println("----------------");
         int i = 1;//1.初始化语句
         do{
               System.out.println("00000" +i);//3.循环体
               i++;//4.步进循环
         }while (i <= 10);//2.条件判断
     }
}


/*
三种循环的区别。

1.如果条件判断从来没有满足过，那么for循环和while循环将会执行0次，但是do-while循环会执行至少1次。
2.for循环的变量在小括号当中定义，只有循环内部才可以使用。while循环和do-while循环初始化语句本来就在外面，
所以出来循环之后还可以继续使用。
*/
public class luo{
    public static void main(String[] args){
       for(int i = 1; i<=10; i++){
          System.out.println("00000")
}
         System.out.println("----------------");
         // System.out.prinln(i);//这一行是错误的写法！因为变量i定义在for循环小括号内，只有for循环自己才能用。

         int i = 1;
         do{
               System.out.println("00000" +i);
               i++;//
         }while (i <= 10);
         //现在已经超出了do-while循环的范围，我们依然可以使用比变量i
         System.out.println(i);//2.
         
     }
}