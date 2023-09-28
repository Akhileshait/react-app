import {auth, googleAuth} from "../firebase_config";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {useState} from "react";

function Auth(){
     const [email, setEmail] = useState("")
     const [Pass, setPass] = useState("")
     const sign_in = async ()=>{
         try{
          await createUserWithEmailAndPassword(auth, email, Pass);
         }catch(err){
          console.error(err);
         }
     }
     const sign_in_google = async ()=>{
          try{
           await signInWithPopup(auth, googleAuth);
          }catch(err){
           console.error(err);
          }
      }
     const logout = async ()=>{
          try{
           await signOut(auth);
          }catch(err){
           console.error(err);
          }
      }
     return (
          <div>
               <input placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}></input><br></br>
               <input placeholder="Passwords" type="password" onChange={(event)=>{setPass(event.target.value)}}></input><br></br>
               <button onClick={sign_in}>Sign In</button><br></br>
               <button onClick={sign_in_google}>Sign In with Google</button><br></br>
               <button onClick={logout}>Logout</button>
          </div>
     )
}

export default Auth