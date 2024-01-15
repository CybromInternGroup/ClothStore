import { IKContext, IKUpload, IKImage } from "imagekitio-react";
import { useState } from "react";

import React, { useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const publicKey = "public_eY8GEFv3mFmpAbBc2MTI2Nx8R3w=";
const urlEndpoint = "https://ik.imagekit.io/asshopping04";


const Tester = ()=>{
const [file, setfile] = useState();
const inputRef = useRef(null)



/*this is generally a frontent side authenticator function which is bieng used
to get signature expiry and token from the server side */
const authenticator =  async () => {
    try {
        const response = await fetch('http://localhost:5000/file/authenticator');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log(data)
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};





/*BACKEND-> this function is bieng used to send my file at backend first an then 
 and then backend will upload the file to the actual cloud server
 */

    const handlesubmit = async (e)=>{
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("file",file);
        formdata.append("fileName",file.name)
        console.log(formdata)

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
          axios.post("http://localhost:5000/file", formdata, config).then((response) => {
            console.log(response.data);
          });

}



    
    const filechange = (e)=>{
    e.preventDefault();
 setfile(e.target.files[0]);
    
    }
 //frontend uploading fuctions starts here

    const onError = err => {
        console.log("Error", err);
      };
      
      const onSuccess = res => {
        console.log("Success", res);
      };
      
      const onUploadProgress = progress => {
        console.log("Progress", progress);
      };
      
      const onUploadStart = evt => {
        console.log("Start", evt);
      };

//frontend uploading ends her-----



/*FRONTEND UPLOADING uploader function similer to  nodejs where i just have to create a form data
and add multiple files to it and use imagekit.upload function which is generally used 
in java script side ID--> SVR 1
*/
const uploader = ()=>{


    
}


let name2 = useSelector((state)=>{console.log(state)})




    const inputRefTest = useRef();

    return(<>

{/* this is the frontend side file uploading code */}

    <div className="frontEndMethod">
    <IKContext
  urlEndpoint={urlEndpoint} 
  publicKey={publicKey}
  authenticator={authenticator}
    >

<IKUpload
 fileName="test-upload.jpg"
 customCoordinates={"10,10,10,10"}
 isPrivateFile={false}
 useUniqueFileName={true}
 responseFields={["tags"]}
 validateFile={file => file.size < 2000000}
 folder={"/folder"}

 overwriteFile={true}
 overwriteAITags={true}
 overwriteTags={true}
 overwriteCustomMetadata={true}
autoSave="false"
 onError={onError}
 onSuccess={onSuccess}
 onUploadProgress={onUploadProgress}
 onUploadStart={onUploadStart}

ref={inputRef}

/>

{inputRef && <button onClick={() => {console.log(inputRef); inputRef.current.focus()}}>Upload</button>}


   
       </IKContext>
       </div>


{/* this is the backend side uploading code  */ }

<div className="backendNodeMethod">
       <form onSubmit={handlesubmit}>
       <input type="file" onChange={filechange}/>
       <button type="submit">upload</button>
       </form>
       </div>
      </>
      );
    
}


export default Tester;