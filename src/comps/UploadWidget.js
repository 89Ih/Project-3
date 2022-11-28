import { Button } from "bootstrap";
import { useEffect, useRef, useState } from "react";
const UploadWidget = () => {
   
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
           cloudinaryRef.current= window.cloudinary;
           widgetRef.current= cloudinaryRef.current.createUploadWidget({
                cloudName:'datpr2tv8',
                uploadPreset:'xi3z2zmg'
            }, function(error,result){
                console.log('see below')
                console.log({data:result.info.url})
                
              
            });
            
    },[])



    return ( <div>
        <button onClick={()=> widgetRef.current.open()}>
            Upload
        </button>
     
        </div>
     );
}
 
export default UploadWidget;