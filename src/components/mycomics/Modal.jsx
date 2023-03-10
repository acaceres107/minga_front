import React, { useEffect } from 'react';
import './modal.css'
import myComicsAction from '../../store/mycomics/mycomics.actions';
import Mycomics from './Mycomics';
import { useParams, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import alertActions from "../../store/alerts/actions"

function Modal () {
  const {getMycomics ,updateMyCard, deleteMyCard} = myComicsAction
  const { mingaAlert } = alertActions
  const  myComics  = useSelector((store) => store?.Mycomics?.myComics);
  console.log(myComics);
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const inputTitle = useRef("")
  const inputDes = useRef("")
  const inputPhoto = useRef("")
  const { id } = useParams();
  const dispatch = useDispatch();

  const deleteComic = async(e) =>{
  e.preventDefault()
  await dispatch(deleteMyCard(id))
  .then(res => dispatch(mingaAlert("Deleted")))
  .catch(err => 
      dispatch(mingaAlert(err.response.data.response)))
      navigate(-1)
}
  const editComic = async(e) =>{
    e.preventDefault()
  let comic = {}
  if(inputTitle.current.value){
    comic.title = inputTitle.current.value
  }else if(inputDes.current.value){
    comic.description = inputDes.current.value
  }else if(inputPhoto.current.value){
    comic.photo = inputPhoto.current.value
  }
  await dispatch(updateMyCard({id, comic}))
  .then(dispatch(mingaAlert("Updated")))
  .catch(err => 
      dispatch(mingaAlert(err.response.data.response)))
      
  await  dispatch(getMycomics( {token} ))
  navigate(-1)
}

  return (

    <div className="modal-overlay">
      <div className="modal-content">
              <form className='form110 ' /* onSubmit={save} */>
                <div className="form10 ">
                    <h1 className='titulo10 '>Edit Comic</h1>
                      <div className="grupo10 ">
                        <input className="input10 " type="text" id="title" placeholder="Inserte el Titulo nuevo"  ref={inputTitle} />
                      </div>
                    < div className="grupo10 ">
                        <input className="input10 " type="text" id="pages" placeholder="Inserte la nueva Descripcion"  ref={inputDes} />
                      </div>
                      < div className="grupo10 ">
                      </div>
                      <div className="grupo10 ">
                        <input className="input10 " type="image" id=""placeholder="Inserte la nueva imagen de Portada" ref={inputPhoto} />
                      </div>
                    <input type="submit" className='btn10 ' onClick={(e)=>editComic(e)} value="Edit"/>
                    <input type="submit" className='btn110 ' onClick={(e)=>deleteComic(e)} value="Delete" />
                </div>
            </form>
      </div>
    </div>

  );
}

export default Modal;