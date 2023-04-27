import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';

 
export const detail = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    useEffect(()=>{
        console.log(detailRedux,"paella")
    },[])


     return (
         <div className=''>
            {detailRedux?.choosenObject?.name}
         </div>
     )
}
