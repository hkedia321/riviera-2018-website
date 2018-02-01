import axios from 'axios';
import {SHOW_MESSAGE} from './types';

export function hideMessage(){
  return function(dispatch){
    dispatch({type:SHOW_MESSAGE,payload:{show:false,message:""}});
  }
}
export function showMessage(str){
  return function(dispatch){
    dispatch({type:SHOW_MESSAGE,payload:{show:true,message:str}});
  }
}
