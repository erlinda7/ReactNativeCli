import { useEffect, useRef, useState } from "react"
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { ReqResApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect(() => {
     cargarUsuarios()
    }, [])
    
    const cargarUsuarios = async () => {
        const resp = await ReqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        console.log(resp.data.data);
        
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data)
        } else {
            alert('no hay mas registros')
        }
    }
    
    const paginaSiguiente = () => {
        paginaRef.current ++
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
