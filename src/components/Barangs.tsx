import React from 'react'
import { useBarangs } from '../services/queries';
import Navbar from './partials/Navbar';

export default function Barangs(){
    const {data, isError, isLoading} = useBarangs();
    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>Error :(</p>
    }
  return (
    <>
    <Navbar />
    {data?.map((id) => (
        <li key={id}>{id}</li>
    ))}
    </>
  )
}