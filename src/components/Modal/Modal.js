import React from 'react'
import styles from './Modal.module.css'
import { Routes, Route } from 'react-router-dom'
import FormElem from '../FormElem/FormElem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {
    const {active, setActive}=props
    console.log(styles)

  return (
    <div onClick={()=>setActive(false)} className={`${styles.modal} ${active && styles.active}`}> 
        <div onClick={(e)=>e.stopPropagation()}className={`${styles.modal_content} ${active && styles.active}`}>
        <FontAwesomeIcon onClick={()=> setActive(false)} icon={faXmark} style={{position:'absolute',right:'5%'}}/>
            <Routes>
              <Route path='/reg' element={
              <FormElem
                    title={'Registration'}
                    link={'/login'}
                    input={{email:'Email', password:'Password', secondPassword: 'Repeat your password'}}
                    button={{redirect:'Log in', submit:'Registrate'}}
                    infoText={'Регистрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности и соглашаетесь на информационную рассылку'}                    
                    type={'reg'}
                  />
                   }/>
              <Route path='/login'element={
              <FormElem
                    title={'Authorization'}
                    link={'/reg'}
                    input={{email:'Email', password:'Password'}}
                    button={{redirect:'Sign in', submit:'Authorize'}}
                    infoText={'Введите логин и пароль вашего аккаунта'}
                    type={'login'}
                  
                  />
                }/>

              <Route path='/reset'element={
              <FormElem
                    title={'Reset password'}
                    link={'/login'}
                    input={{email:'Email'}}
                    button={{redirect:'Sign in', submit:'Confirm reset'}}
                    infoText={'Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля придет на указанную почту. Срок активации - 24 часа'}
                    type={'reset'}
                  
                  />
                }/> 
            </Routes>
            	
            
            
        </div>
    </div>
  )
}
