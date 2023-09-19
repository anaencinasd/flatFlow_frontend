import Swal from "sweetalert2";
import storage from "./Storage/storage";

export const show_alert = (msj, icon) =>{
    Swal.fire({title:msj, icon:icon, buttonsStyling:true});

}

export const sendRequest = async(method, params, url, redir='', token=true)=>{
    if(token){
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorization'] = 'Bearer '+authToken;
    }
    let res;
    await axios({method, url:url, data:params}).then(
        response=>{
            res=response.data,
            (method !='GET') ? show_alert(response.data.message,'success'):'',
            setTimeout(()=>
            (redir !=='')? window.location.href=redir : '', 2000)
        }
    ).catch((errors)=>{
        let desc = '';
        res=errors.response.data,
        errors.response.data.errors.map((e)=>desc + ''+e)
        show_alert(desc,'error')
    })

    return res;
}

export const confirmation = async(name, url, redir)=>{
    const alert=Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'¿Seguro que quieres eliminar '+name+' ?',
        icon:'question',showCancelButton:true,
        confirmButtonText:'Sí, borrar',
        cancelButtonText: 'Cancelar'
    }).then((result)=>{
        if(result.isConfirmed){
            sendRequest('DELETE',{},url, redir)
        }
    });

}

export default show_alert;