import cloudinary from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dhklxujxz', 
    api_key: '424229562299819', 
    api_secret: 'MCbAyXO5zhf-95j1f3tCi7S16Xc' 
  });

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el url', async() => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob],'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
        // Borrar imagen por id

        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.png','');
        console.log(imageId);
        await cloudinary.v2.api.delete_resources(imageId);
    });

    test('Debe de retornar el error', async() => {  

        const file = new File([],'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })
    
})
