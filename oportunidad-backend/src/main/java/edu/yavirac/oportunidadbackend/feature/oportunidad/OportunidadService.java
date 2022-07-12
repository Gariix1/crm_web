package edu.yavirac.oportunidadbackend.feature.oportunidad;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OportunidadService {
    
    @Autowired
    OportunidadRepository oportunidadRepository;

    //Crear 
    public Oportunidad save(Oportunidad oportunidad){
        return oportunidadRepository.save(oportunidad);
    }

    //Read
    public Oportunidad findById(long oportunidadId){
        return oportunidadRepository.findById(oportunidadId).orElse(new Oportunidad());
    }

    //actualizar = crear

    //delete
    public void deleteById(long oportunidadId){
        oportunidadRepository.deleteById(oportunidadId);
    }

    //registros de permiso en una sola a traves de una lista

    public List<Oportunidad>findAll(){
        return oportunidadRepository.findAll();
    }
}
