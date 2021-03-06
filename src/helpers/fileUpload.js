export const fileUpload = async (file) => {
    try {
        console.log('mock');
        const cloudUrl = 'https://api.cloudinary.com/v1_1/dhklxujxz/upload'
        const formData = new FormData();
        formData.append('upload_preset', 'react-journal');
        formData.append('file', file);
        // return url de la imagen

        const resp = await fetch( cloudUrl, {
            method:'POST' ,
            body: formData
        }) ;
        if(resp.ok) {
            const cloudResp = await resp.json() ;
            return cloudResp.secure_url ;
        } else {
            return null 
        }
    } catch (error) {
        throw error ;
    }
}