
class Node{
  int data;
  Node left ,right;
  }
  
  class Bst{
    Node root;
    public Bst(){
      root=null;
    }
    public void insert(int val){
  
      Node temp,temp2;
      temp=new Node();
      temp.data=val;
      temp.left=null;
      temp.right=null;
  
      if(root==null){
        root=temp;
     
        
  
      }
      else{
        temp2=root;
        while(temp2!=null){
                  
                        if(val<temp2.data){
                              if(temp2.left==null){
                                temp.left=temp;
                                break;
                              }
                              else{
                                temp2=temp2.left;
  
                              }
  
                        }
                else if(val>temp2.data){
                      if(temp2.right==null){
                        temp2.right=temp;
                        break;
                      }
                      else{
                      temp2= temp2.right;
                      }
  
                }
                else{
                  System.out.println("duplicate found");
                  break;
                }
        }
        
      }
    }

    public void search(Node r,int k){
      if(r==null){
       
        return;
      }
      if(r.data==k){
        System.out.println("foind");
        return;
 
    }
    search(r.left, k);
    search(r.right, k);
  }
   
  public void SearchK(int k){
    search(root,k);
    }
  
  }
  


 
  
  public class BSTApp{
    public static void main(String[] args){
      Bst bst=new Bst();
      bst.insert(10);
     // bst.insert(10);
      
      bst.insert(5);
      
      bst.insert(15);
      System.out.println("nfsdkjf");
      bst.insert(3);
      bst.SearchK(10);
     
    }
  }