import React, { useRef  } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { Link as Anchor,useNavigate } from 'react-router-dom'
import "../Login/form.css"

import authActions from "../../store/auth/actions"
const { registrar_usuario } = authActions

const SignUp = () => {

    const { messages } = useSelector(store => store.auth)
    console.log(messages)
	const dispatch = useDispatch()
	const mail = useRef("")
	const photo = useRef("")
	const password = useRef("")
    const navigate = useNavigate()

	const captureData = async(e) =>{
		e.preventDefault()
		//console.log(mail.current.value,photo.current.value,password.current.value)
		let data = {
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value
		}
        console.log(data)
		let res = await dispatch(registrar_usuario(data))
        if (res.payload.success) {
            navigate("/",{ replace:true })
        } /* configurar alerta */       
	}

    return (
        <div className="box">

            <div className="grow bkg div2" style={{opacity: "0,2 " , backgroundImage: "url('https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>
            <form action="post" id="form1" className="grow col flex">
                <fieldset className="fielInput">
                    <label htmlFor="">Mail</label>
                    <input type="text" placeholder="Mail" ref={mail}/>
                    <label htmlFor="">Photo</label>
                    <input type="text" placeholder="Photo" ref={photo}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" ref={password}/>
                    <input className="button-start1" onClick={(e)=>captureData(e)} type="submit" value="enviar" />
                </fieldset>
                <div className="letrero">
                    <p>Do you already have an account? then...</p>
                    <Anchor className="button-start1" to="/signin">Login!</Anchor>
                </div>
            </form>
        </div>
    )

}

export default SignUp