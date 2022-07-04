import React from 'react';

interface IProps{
    avatar:any;
}

export default function TeamAvatarElement(props:IProps) {


  return (
      <img className='teamAvatar' src={props.avatar} alt="avatar" />
  )
}